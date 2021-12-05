import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Calendario from './pages/Calendario'
import Grupos from './pages/Grupos'

import Pais from './pages/paises/[id]'

import Error404 from './components/Error404';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


const App = () => {

    const [paisId, setPaisId] = React.useState('mexico')

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={() => { return <Home /> }} />
                    <Route path="/calendario" component={() => { return <Calendario /> }} />
                    <Route path="/grupos" component={() => { return <Grupos /> }} />
                    <Route path={`/paises/${paisId}`} component={() => { return <Pais pais={paisId} />}} />
                    <Route path='*' component={() => { return <Error404 /> }} />
                </Switch>
            </Router>
        </>
    )
}

export default App