import React, {Component} from 'react';
import './App.css';
import {Personaldata, Work, Education, Skills} from './components';
class App extends Component{

    render()
    {
        return(
                <React.Fragment>
                <Personaldata />
                <Education/>
                <Work />
                <Skills/>
                </React.Fragment>
        );
    }
}

export default App;
        //<img src={logo} className="App-logo" alt="logo" />
       