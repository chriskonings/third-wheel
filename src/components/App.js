import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Activity from './Activity';
import activitiesList from '../activities-list';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
      activities  : activitiesList,
      currentActivity  : {},
    };
  }

  componentWillMount() {
    this.initActivity(this.props.match.params.activityId - 1);
  }

  initActivity = (activityId) => {
    const keys = Object.keys(this.state.activities);
    const activityKey = keys[activityId];
    this.setState({
      currentActivity: this.state.activities[activityKey]
    });
  };

  randomActivity = () => {
    const keys = Object.keys(this.state.activities);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    this.setState({
      currentActivity: this.state.activities[randomKey]
    });
    this.context.router.history.push(`${randomKey}`);
  };

  upActivity = () => {
    const keys = Object.keys(this.state.activities);
    const nextKey = this.state.currentActivity.id + 1;
    if (this.state.currentActivity.id < keys.length) {
      this.setState({
        currentActivity: this.state.activities[nextKey]
      });
      this.context.router.history.push(`${nextKey}`);
    }
  };

  downActivity = () => {
    const prevKey = this.state.currentActivity.id - 1;
    if (this.state.currentActivity.id > 1) {
      this.setState({
        currentActivity: this.state.activities[prevKey]
      });
      this.context.router.history.push(`${prevKey}`);
    }
  };

  render() {
    return (
      <div className="app">
      <SideBar randomActivity={() => this.randomActivity()} upActivity={() => this.upActivity()} downActivity={() => this.downActivity()}></SideBar>
      <main className="main">
        <Header></Header>
        <Activity activity={this.state.currentActivity}></Activity>
      </main>
      <footer>

      </footer>
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
