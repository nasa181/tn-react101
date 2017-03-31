var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
    render: function(){
		return(
			<div>
				<h1>H1 {this.props.name} from Hello Name</h1>
				<h2>H2 {this.props.message} from Hello Message</h2>
			</div>
		);
	}
});
module.exports = HelloMessage;