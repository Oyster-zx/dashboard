import React, {Component} from "react";
import DatePicker from 'react-date-picker';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: this.props.widgetKey,
            title: "Event name",
            deadline: new Date(),
            daysLeft: 0
        }
    }

    changeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    changeDate = (date) => {
        const diff = this.calculateDaysDifference(new Date(), date);
        this.setState({ deadline: date, daysLeft: diff })
    }

    calculateDaysDifference(dt1, dt2) {
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }

    render() {
        return (
            <div className="module counter">
                <div className="wrapper">
                    <input type="text" className="module-title" onChange={this.changeTitle} placeholder={this.state.title} autoFocus={true}/>
                    <DatePicker
                        onChange={this.changeDate}
                        value={this.state.deadline}
                        clearIcon={null}
                        minDate={new Date()}/>
                        <div className="days-left"><span>{this.state.daysLeft}</span>days left</div>
                </div>
                <button className="fa fa-times-circle fa-lg remove-btn" onClick={() => this.props.deleteWidget(this.state.key)} />
            </div>
        );
    }
}

export default Counter;