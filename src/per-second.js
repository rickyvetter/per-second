var React = require("react");
var moment = require("moment");
var accounting = require("accounting");

var timer;

var PerSecond = React.createClass({
	getInitialState: function() {
		return {
			time: moment(),
			start: moment().startOf(this.props.reset),
			end: moment().endOf(this.props.reset)
		}
	},
	getDefaultProps: function() {
		return {
			reset: "month",
			amount: 0
		}
	},
	componentWillMount: function() {
		timer = setInterval(this.setTime, 100);
	},
	componentWillUnmount: function() {
		clearInterval(timer);
	},
	setTime: function(){
		this.setState({
			time: moment()
		});
	},
	offToggle: function(){
		if(this.state.isToggled) {
			this.toggle();
		}
	},
	render: function() {
		var fraction = moment.duration(this.state.time - this.state.start)
					.asMilliseconds();
		var total = moment.duration(this.state.end - this.state.start)
					.asMilliseconds();

		var asUSD = accounting.formatMoney(fraction / total * this.props.amount);
		var amountArray = asUSD.split(".");
		var dollars = amountArray[0];
		var cents = amountArray[1];

		return (
			<div style={numberStyle}>
				<span>
					{dollars}
				</span>
				<span style={centsStyle}>
					{cents}
				</span>
			</div>
		)
	}
});

var numberStyle = {
	minWidth: 300,
	display: "flex"
};

var centsStyle = {
	fontSize: "1.5rem"
};

module.exports = PerSecond;