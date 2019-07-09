var React = require('react');
var Collection = require('./Collection.react');

var Collection = React.createClass({
  
  onRemoveTweetFromCollection: function (tweet) {
    var collectionTweets = this.state.collectionTweets;
    
    delete collectionTweets[tweet.id];
    
    this.setState({
      collectionTweets: collectionTweets
    }); 
  },

  onRemoveAllTweetsFromCollection: function () {
    this.setState({
      collectionTweets: {}
    });
  },

  render: function () {
    return (
		'Hello from collectionTweets Component'
    );
  }
});

module.exports = Collection;