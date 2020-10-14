import React, {useEffect, useState} from 'react';
import {v4 as uuidV4} from 'uuid';
import {useCookies} from "react-cookie";
import './App.css';

import Home from "./Home/Home";
import Game from "./Game/Game";
import NewPlayer from "./Game/NewPlayer";
import {getData, saveData} from "./utils/api";

const initialState = {
    game: false,
    modalVisible: false,
    players: [],
    peoples: [],
    data: []
}

function App() {
    const [state, setState] = useState(initialState);
    const [cookies, setCookies] = useCookies(['nouvel-an-bingo'])

    const addPlayer = (values) => {
        const newState = {...state};
        const playerCookie = {username: values.username, uuid: uuidV4()};
        newState.players.push(playerCookie)
        newState.modalVisible = false;
        newState.game = true;
        setCookies('nouvel-an-bingo', playerCookie)
        setState(newState);
    }

    const setVisible = (value) => {
        setState({ ...state, modalVisible: value })
    }

    const addSentence = (name, sentence) => {
        const newState = {...state};
        newState.data.map(people => people.name === name ? people.sentences.push(sentence) : people)
        setState(newState);
        saveData({peoples: newState.peoples, data: newState.data}).catch((e) => console.log(e))
    }

    useEffect(() => {
        getData()
            .then(result => {
                setState(prevState => {
                    return {...prevState, data: result.data, peoples: result.peoples}
                })
            });
    }, []);

    return (
        <div>
            {
                state.game
                ? <Game showAddPlayerModal={setVisible}/>
                : <Home showAddPlayerModal={setVisible} data={state.data} addSentence={addSentence}/>
            }

            <NewPlayer visible={state.modalVisible} showAddPlayerModal={setVisible} addPlayer={addPlayer} peoples={state.peoples}/>
        </div>
    );
}

export default App;
