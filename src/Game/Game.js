import React from 'react';
import {PageHeader} from 'antd';

import PlayerPanel from "./PlayerPanel";

function Game({cookie, data}) {
    return (
        <div>
            <header>
                <PageHeader
                    className="site-page-header"
                    title="Partie en cours"
                />
            </header>
            <PlayerPanel player={cookie['nouvel-an-bingo']} data={data}/>
        </div>
    );
}

export default Game;
