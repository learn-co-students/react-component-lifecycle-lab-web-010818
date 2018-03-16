import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

export default class App extends React.Component {
  state = {
    latestTweets: []
  };

  // TODO: componentWillMount()
  // TODO: componentDidMount()
  // TODO: componentWillUnmount()

  componentWillMount() {
    this.fetchTweets();
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    this.cleanUpInterval();
  }

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval = () => {
    clearInterval(this.interval);
  }

  fetchTweets = () => {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div>
        <TweetWall newTweets={ this.state.latestTweets } />
      </div>
    )
  }
}
