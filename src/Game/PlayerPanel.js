import React from 'react';
import {Button, Tabs, PageHeader} from 'antd';
import {usePlayerGame} from "../utils/hooks";
import PlayerGrid from './PlayerGrid'

const {TabPane} = Tabs;

function PlayerPanel({player, data}) {
    const [state] = usePlayerGame(player, data);
    console.log(state)

    const onChange = (e, index, i) => {
        console.log(state.grids[index][i])
        console.log(e.target.checked);
    }

    return (
        <div>
            <header>
                <PageHeader
                    title={player.username}
                    extra={[
                        <Button key="1">Nouvelle grille</Button>,
                    ]}
                />
            </header>
            <div className="mt-20">
                <Tabs defaultActiveKey="1">
                    {
                        state.gridsNames.map((value, index) =>
                            <TabPane tab={value} key={index}>
                                <PlayerGrid data={state.grids[index]} index={index} cb={onChange}/>
                            </TabPane>
                        )
                    }
                </Tabs>
            </div>
        </div>
    );
}

export default PlayerPanel;
