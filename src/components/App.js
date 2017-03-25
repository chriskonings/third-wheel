import React from 'react';
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
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
