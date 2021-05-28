import {useState} from "react";
import {getRandom} from "./utils";

function usePlayerGame(cookie, data) {
    let player = null;
    data.players.map((p) => {
        if(cookie.uuid === p.uuid) {
            player = p;
        }
        return p;
    })

    if(!player.grids) {
        player.grids = [];
        player.gridsNames = [];
        player.peoplesSelected.map((p) => {
            data.data.map((d) => {
                if(p === d.name) {
                    player.grids.push(getRandom(d.sentences, 4));
                    player.gridsNames.push(p)
                }
                return d;
            })
            return p;
        })
    }

    const [state, setState] = useState(player);
    return [state, setState];
}

export {
    usePlayerGame
}
