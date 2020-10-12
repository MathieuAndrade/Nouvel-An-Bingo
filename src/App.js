import React from 'react';
import {Button, Typography, PageHeader} from 'antd';
import './App.css';

import Home from "./Home/Home";

const {Title} = Typography;

function App() {
    return (
        <div>
            <header>
                <PageHeader
                    className="site-page-header"
                    title="Nouvel an Bingo"
                    extra={[
                        <Button disabled={true} key="1">Nouvelle partie</Button>,
                    ]}
                />
            </header>
            <div className="content">
                <div className="text-info">Un bingo mais avec des phrases de gens chiant ;) (mais on les aiment bien
                    quand même)
                </div>
                <Title level={5}>Phrases disponibles :</Title>
                <Home/>
            </div>
        </div>
    );
}

export default App;
