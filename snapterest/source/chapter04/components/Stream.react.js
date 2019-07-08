var React = require('react');
var Stream = require('./Stream.react');

var Stream = React.createClass({

  onAddTweetToCollection: function (tweet) {
    var collectionTweets = this.state.collectionTweets;
    
    collectionTweets[tweet.id] = tweet;
    
    this.setState({
      collectionTweets: collectionTweets
    }); 
  },

  render: function () {
    return '<p>Hello from tweet stream</p>';
  }
});

module.exports = Stream;