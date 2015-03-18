var React = require("react");
var PerSecond = require("./per-second");
var trend = require("trend");

var timer;

var app = React.createClass({
	render: function() {
		var historicalData = [483685,519120,530555,493676,626811];

		var growth = trend(historicalData, {
		    lastPoints: 1,
		    avgPoints: historicalData.length - 1,
		    avgMinimum: -Infinity
		});

		var prediction = growth ? growth * historicalData[historicalData.length -1] : historicalData[historicalData.length -1];

		return (
			<div style={containerStyle}>
				<PerSecond amount={prediction} />
				<div style={hashtagStyle}>
					#STLean
				</div>
			</div>
		)
	}
});

var containerStyle = {
	width: "100vw",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#494949",
	color: "#cb5599",
	fontSize: "3rem"
};

var hashtagStyle = {
	position: "absolute",
	right: 20,
	bottom: 20,
	fontSize: "1.5rem"
};

module.exports = app;