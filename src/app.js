var React = require("react");
var PerSecond = require("./per-second");

var app = React.createClass({
	render: function() {
		var historicalData = [483685,519120,530555,493676,626811];

		var count = 0;
		var growthTotal = historicalData.reduce(function(trend, data, index, array) {
			var nextIndex = index + 1;
			if(array[nextIndex] && data !== 0) {
				var growth = array[nextIndex]/data;
				trend += growth*nextIndex;
				count += nextIndex;
			}
			return trend;
		}, 0);
		var growth = growthTotal/count;

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
	fontSize: "10vw"
};

var hashtagStyle = {
	position: "absolute",
	right: 20,
	bottom: 20,
	fontSize: "1.5rem"
};

module.exports = app;