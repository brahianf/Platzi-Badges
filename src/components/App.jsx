import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout.jsx'
import BadgeNew from '../pages/BadgeNew.jsx'
import Badges from '../pages/Badges.jsx'
import NotFound from '../pages/NotFound.jsx'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component = {Badges} />
                    <Route exact path="/badges/new" component = {BadgeNew} />
                    <Route component = {NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );

}

export default App;