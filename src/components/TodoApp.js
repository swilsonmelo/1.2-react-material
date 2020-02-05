import React from 'react';
import logo from '../logo.svg';
import './TodoApp.css';
import { TodoList } from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

export class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: 0, dueDate: moment() };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout" >
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <img src={logo} className="App-logo" alt="logo" />
                        </Avatar>
                        <form onSubmit={this.handleSubmit} className="todo-form">
                            <Typography variant="h3">New To Do</Typography>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="Text">Text</InputLabel>
                                <Input
                                    id="Text"
                                    onChange={this.handleTextChange}
                                    value={this.state.text}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="Text">Priority</InputLabel>
                                <Input
                                    id="Priority"
                                    onChange={this.handlePriorityChange}
                                    value={this.state.priority}
                                />
                            </FormControl>
                            <br />
                            <br />
                            <FormControl>
                                <InputLabel htmlFor="Text">Due Date</InputLabel>
                                <DatePicker
                                    id="due-date"
                                    selected={this.state.dueDate}
                                    onChange={this.handleDateChange}

                                />
                            </FormControl>
                            <br />
                            <br />
                            <br />
                            <br />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit">
                                Add #{this.state.items.length + 1}
                            </Button>
                        </form>

                        <TodoList todoList={this.state.items} />
                    </Paper>
                    <br />
                    <br />
                    <br />
                    <br />

                </main>
                <CssBaseline />
            </React.Fragment>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: moment()
        }));
    }

}