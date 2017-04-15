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
    /*
    const keys = Object.keys(this.state.activities);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const urlKey = keys[this.context.router.route.match.params.activityId];
    if (urlKey) {
      this.setState({
        currentActivity: this.state.activities[urlKey]
      });
    } else if (!urlKey){
      const activityId = this.state.activities[randomKey].id + 1;
      this.context.router.history.push(`${activityId}`);
      this.setState({
        currentActivity: this.state.activities[randomKey]
      });
    }
    */
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
