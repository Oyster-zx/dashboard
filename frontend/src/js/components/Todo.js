import React, {Component} from "react";
import 'regenerator-runtime/runtime';
import TodoItem from "./TodoItem";

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: this.props.widgetKey,
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
        const newItem = new TodoItem(Math.random(), input.value, false);

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

    changeItemState = key => {
        const oldState = this.state.items;
        this.state.items.forEach((item) => {
            if (item.key === key) {
                item.isChecked = !item.isChecked;
            }
        })
        this.setState({
            items: oldState
        });
    }

    createTodos = (item) => {
        return (
            <li key={item.key}>
                <div className='item-holder' onClick={() => this.changeItemState(item.key)}>
                    <input type="checkbox" onChange={() => {}} checked={item.isChecked}/>
                    <label>{item.text}</label>
                </div>
                <button className="fa fa-times fa-md p-0" onClick={() => this.deleteItem(item.key)} />
            </li>
        )
    }

    render() {

        const listItems = this.state.items.map(this.createTodos);

        return (
            <div id="todo-4270" className="module todo" draggable="true">
                <div className="wrapper">
                    <input type="text" className="module-title mb-4" onChange={this.changeTitle} placeholder={this.state.title} autoFocus="true"/>
                    <ul className="items">{listItems}</ul>
                    <form className="todo-new" onSubmit={this.addItem}>
                        <input type="text" name="new-todo" placeholder={this.state.currentItem.text}/>
                    </form>
                </div>
                <button className="fa fa-times-circle fa-lg remove-btn" onClick={() => this.props.deleteWidget(this.state.key)} />
            </div>
        );
    }
}

export default Todo;