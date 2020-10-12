import React, {useEffect, useState} from "react";
import People from "./People";
import {Button} from "antd";

function Home() {
    const [data, setData] = useState([]);

    const addSentence = (name, sentence) => {
        data.map(people => {
            if (people.name === name) {
                people.sentences.push(sentence);
            }
        })

        try {
            fetch(`http://${window.location.hostname}:5000/write`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        fetch(`http://${window.location.hostname}:5000/read`)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            {
                data.map(people =>
                    <People key={people.name} addSentence={addSentence} people={people}/>
                )
            }
        </div>
    )
}

export default Home;
