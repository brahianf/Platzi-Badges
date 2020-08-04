import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx';
import BadgeNew from '../pages/BadgeNew.jsx'
import Badges from '../pages/Badges.jsx'
import BadgeEdit from '../pages/BadgeEdit.jsx';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer.jsx'
import NotFound from '../pages/NotFound.jsx'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route exact path="/badges" component = {Badges} />
                    <Route exact path="/badges/new" component = {BadgeNew} />
                    {/* Edit trabaja sobre un badge en especifico para eso variable Id */}
                    <Route exact path="/badges/:badgeId/edit" component = {BadgeEdit} />
                    <Route exact path="/badges/:badgeId" component = {BadgeDetailsContainer} />
                    <Route component = {NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );

}

export default App;