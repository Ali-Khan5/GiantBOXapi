import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home'


import history from './History';



class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    
                    <Route exact path="/" component={Home} />
                 
                 
               
                    
                </div>
            </Router>
        )
    }
}

export default Routers;