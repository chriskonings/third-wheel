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
    this.randomActivity();
  }

  goToActivity = (event) => {
    console.log('working');
  }

  randomActivity = () => {
    const keys = Object.keys(this.state.activities);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    this.setState({
      currentActivity: this.state.activities[randomKey]
    });
    const activityId = this.state.activities[randomKey].id + 1;
    this.context.router.history.push(`${activityId}`);
  };

  upActivity = () => {
    console.log(this);
    const keys = Object.keys(this.state.activities);
    const nextKey = keys[this.state.currentActivity.id + 1];
    if (nextKey) {
      this.setState({
        currentActivity: this.state.activities[nextKey]
      });
    }
  };

  downActivity = () => {
    console.log('hello');
    const keys = Object.keys(this.state.activities);
    const prevKey = keys[this.state.currentActivity.id - 1];
    if (prevKey) {
      this.setState({
        currentActivity: this.state.activities[prevKey]
      });
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
