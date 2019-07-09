var React = require('react');
var Header = React.createClass({
  
  getInitialState: function () {
    return {
      text: null
    };
  },

  componentDidMount: function () {
    text: ""
  },

  render: function () {
    var tweet = this.state.tweet;
    return (
      <h1>{this.props.text}</h1>
    ); 
  }
});

module.exports = Header;