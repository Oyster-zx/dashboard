import React, {Component} from "react";
import 'regenerator-runtime/runtime';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "Name your todo list",
            items: [],
            currentItem: {
                key: '',
                text: 'New todo...',
                isChecked: false
            }
        }
    }

    changeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    addItem = (event) => {
        event.preventDefault();

        const input = event.target.querySelector('input');
        const newItem = {key: Math.random(), text: input.value, isChecked: false};

        if (newItem.text !== '') {
            this.setState({
                items: [...this.state.items, newItem]
            })
            input.value = '';
        }
    }

    deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })
        this.setState({
            items: filteredItems,
        })
    }

    createTodos = (item) => {
        return (
            <li key={item.key}>
                <input type="checkbox" />
                <label>{item.text}</label>
                <button className="fa fa-times fa-md" onClick={() => this.deleteItem(item.key)} />
            </li>
        )
    }

    render() {

        const listItems = this.state.items.map(this.createTodos);

        return (
            <div id="todo-4270" className="module todo" draggable="true">
                <div className="wrapper">
                    <input type="text" onChange={this.changeTitle} placeholder={this.state.title}/>
                    <ul className="items">{listItems}</ul>
                    <form className="todo-new" onSubmit={this.addItem}>
                        <input type="text" name="new-todo" placeholder={this.state.currentItem.text}/>
                    </form>
                </div>
                <i className="fa fa-times-circle fa-lg"></i>
            </div>
        );
    }
}

export default Todo;