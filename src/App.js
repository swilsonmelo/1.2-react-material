import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { TodoApp } from './components/TodoApp';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { isLoggedIn: false };
        localStorage.setItem("email","admin@mail.com");
        localStorage.setItem("password","admin")
        if(! localStorage.getItem("isLoggedIn")) localStorage.setItem("isLoggedIn",this.state.isLoggedIn);
        this.handleLogin = this.handleLogin.bind(this);
        
    }

    handleLogin() {
        this.setState({isLoggedIn : true});
        localStorage.setItem("isLoggedIn","true")
    }

    render() {
        const LoginView = () => (
            <Login handleLogin = { this.handleLogin } />
        );

        const TodoAppView = () => (
            <TodoApp />
        );
        const isLoggedIn = (this.state.isLoggedIn || ( localStorage.getItem("isLoggedIn") == "true" ) );
        let toRender ;
        console.log(this.state.isLoggedIn + " " + localStorage.getItem("isLoggedIn") );
        if(! isLoggedIn ) {
            console.log("asdasdasf");
            console.log(isLoggedIn);
            toRender = (
                <div>
                    <ul >
                        <li><Link to="/">Login</Link></li>
                    </ul>
                    <div>
                        <Route exact path="/" component={LoginView}/>
                    </div>
                </div>
            );
        } else {
            console.log("kha");
            console.log(isLoggedIn);
            toRender = (
                <div>
                    <ul >
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>
                    <div>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            );
        }
        
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <div>
                    {toRender}
                    </div>
                    <footer className="App-header" >
                    </footer>
                </div>
            </Router>
        );
    }

}
