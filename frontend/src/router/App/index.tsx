import React from 'react';
import HomeContainer from '../../components/HomeContainer';
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";


function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeContainer}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
