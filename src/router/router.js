import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/Main';
import Article from '../pages/Articles/Article';

const getRouter = () => {
    return (
        <Router>
            <div>
                {/* <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/page1'>Page</Link></li>
                </ul> */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Article' component={Article} />
                </Switch>
            </div>
        </Router>
    );
};

export default getRouter;