import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'antd/dist/antd.min.css'
import Index from './pages';
import NoMatch from './pages/noMatch';
import Detail from './pages/detail';

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/detail/:id" exact component={Detail}></Route>
                    <Route path="/search" exact component={Index}></Route>
                    <Route path="*" component={NoMatch}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;