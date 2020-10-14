import React from "react";
import People from "./People";
import {Button, PageHeader, Typography} from "antd";

const {Title} = Typography;

function Home({showAddPlayerModal, data, addSentence}) {
    return (
        <div>
            <header>
                <PageHeader
                    className="site-page-header"
                    title="Nouvel an Bingo"
                    extra={<Button onClick={() => showAddPlayerModal(true)} key="new_game">Nouvelle partie</Button>}
                />
            </header>
            <div className="content">
                <div className="text-info">Un bingo mais avec des phrases de gens chiant ;) (mais on les aiment bien
                    quand même)
                </div>
                <Title level={5}>Phrases disponibles :</Title>

                {
                    data.map(people =>
                         <People key={people.name} addSentence={addSentence} people={people}/>
                    )
                }

            </div>
        </div>
    )
}

export default Home;
