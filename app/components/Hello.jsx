var React = require('react');
var ReactDOM = require('react-dom');
var HelloMessage = require('./HelloMessage');
var HelloInput = require('./HelloInput');

var Hello = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'world',
            message: 'message'
        };
	},
	getInitialState: function(){
		return {
			name: this.props.name,
			message: this.props.message
		};
	},
	handleUpdateName: function (nameInput) {
	    this.setState({
	      name: nameInput
	    });
	},
	handleSubmit: function (e) {
        e.preventDefault();
        // alert(this.refs.name.value);
        var updateObj = {};
        if(this.refs.name.value.length > 0){
        	updateObj.name = this.refs.name.value;
        }
        if(this.refs.message.value.length > 0){
        	updateObj.message = this.refs.message.value;
        }
        this.setState(updateObj);
   	},
    render: function () {
        return (
            <div>
            	<h1>Hello, {this.state.name}</h1>
            	<h2>{this.state.message}</h2>
            	<HelloMessage name={this.state.name} message={this.state.message}/>
    			<form onSubmit={this.handleSubmit}>
				        <input type="text" ref="name"/>
				        <input type="textbox" ref="message"/>
				        <button>Set Name</button>
				</form>
				<HelloInput onUpdateName={this.handleUpdateName}/>
			</div>
		);
	}
});
module.exports = Hello;