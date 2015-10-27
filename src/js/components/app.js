/** @jsx React.DOM */
/*This line is important because the rectify (see file gulpfile.js) process 2 kinds of file: JSX code (.jsx) or existing @jsx on top of file*/

var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AppBox = React.createClass({
    handleClick: function(){
        AppActions.addItem('hello');
    },
    render: function(){
        return(
            <div>
                <h3 onClick={this.handleClick}>Click this Title, then check console</h3>
            </div>
        );
    }
});

module.exports = AppBox;