import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { TodoApp } from './components/TodoApp';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default class App extends React.Component {

    render() {

        const LoginView = () => (
            <Login />
        );

        const TodoAppView = () => (
            <TodoApp />
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>
                    <div>
                        <Route exact path="/" component={LoginView} />
                        <Route path="/todo" component={TodoAppView} />
                    </div>
                    <footer className = "App-header" >

                    </footer>
                </div>
            </Router>
        );
    }

}