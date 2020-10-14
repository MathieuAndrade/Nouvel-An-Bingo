import React from 'react';
import {Button, PageHeader} from 'antd';

function Game({showAddPlayerModal}) {
    return (
        <div>
            <header>
                <PageHeader
                    className="site-page-header"
                    title="Partie en cours"
                    extra={[
                        <Button key="join_game" onClick={() => showAddPlayerModal(true)}>Rejoindre la partie</Button>,
                    ]}
                />
            </header>
        </div>
    );
}

export default Game;
