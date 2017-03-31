var React = require('react');
var ReactDOM = require('react-dom');

var HelloInput = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		this.props.onUpdateName(this.refs.name.value);
	},
	render: function(){
		return(
			<form onSubmit={this.handleSubmit}>
		        <input type="text" ref="name"/>
		        <button>Set Name (HelloInput)</button>
			</form>
		);
	}
});
module.exports = HelloInput;