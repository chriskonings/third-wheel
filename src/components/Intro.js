import React from 'react';
import Header from './Header';
import activitiesList from '../activities-list';

class Intro extends React.Component {
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
    let randomKey = keys[Math.floor(Math.random() * keys.length)];
    if (this.state.activities[randomKey] === this.state.currentActivity) {
      this.randomActivity();
    } else {
      this.setState({
        currentActivity: this.state.activities[randomKey]
      });
      this.context.router.history.push(`${randomKey}`);
    }
  };

  render() {
    return (
      <div className="Intro">
      <main className="main">
        <Header></Header>
        <div className="activity">
          <div className="activity__details">
            <h2>Welcome</h2>
            <h3>Activities for long-distance couples.</h3>
            <h3>How to use</h3>
            <ol>
              <li>
                <p>
                  <button className="button" onClick={() => this.randomActivity()}>Random</button>
                </p>
              </li>
              <li>
                <p>
                  Find an acitivty for you
                </p>
              </li>
              <li>
                <p>
                  Check out the resources for help with the activity
                </p>
              </li>
              <li>
                <p>
                  Have fun!
                </p>
              </li>
            </ol>
          </div>
        </div>
      </main>
      <footer>

      </footer>
      </div>
    )
  }
}

Intro.contextTypes = {
  router: React.PropTypes.object
}

export default Intro;
