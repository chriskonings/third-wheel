import React from 'react';
import SideBar from './SideBar';
import Activity from './Activity';
import activitiesList from '../activities-list';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
      activities  : activitiesList,
    };
  }

  componentWillMount() {
    this.randomActivity();
  }

  nextActivity = () => {
    // const nextActivityKey = this.state.currentActivity.id + 1;

    console.log(this.state.currentActivity);
    // this.setState({
    //   currentActivity: this.state.activities[nextActivityKey]
    // });
  }

  randomActivity = () => {
    var keys = Object.keys(this.state.activities);
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    this.setState({
      currentActivity: this.state.activities[randomKey]
    });
  };

  render() {
    return (
      <div className="app">
      <header>

      </header>
      <SideBar loadActivity={() => this.randomActivity()}></SideBar>
      <main className="main">
        <Activity activity={this.state.currentActivity}></Activity>
      </main>
      <footer>

      </footer>
      </div>
    );
  }
}

export default App;
