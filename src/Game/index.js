import React from 'react';
import { Button, Tabs,  PageHeader } from 'antd';

const { TabPane } = Tabs;

function Game() {
    return (
        <div>
            <header>
                <PageHeader
                    className="site-page-header"
                    title="Joueur 1"
                    extra={[
                        <Button key="1">Nouvelle grille</Button>,
                    ]}
                    footer={
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Grille 1" key="2" />
                            <TabPane tab="Grille 2" key="3" />
                            <TabPane tab="Grille 3" key="4" />
                        </Tabs>
                    }
                />
            </header>
        </div>
    );
}

export default Game;
