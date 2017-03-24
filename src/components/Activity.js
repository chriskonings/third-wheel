import React from 'react';
import BlockQuote from '../components/BlockQuote';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Activity extends React.Component {
  render() {
    return (
      <div className="activity">
        <ReactCSSTransitionGroup
          transitionName="activity-num"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          component="div"
          className="activity__number"
          >
          <h1 key={this.props.activity.id}>{this.props.activity.id + 1}</h1>
        </ReactCSSTransitionGroup>
        <div className="activity__details">
          <h2>{this.props.activity.name}</h2>
          <h3>{this.props.activity.desc}</h3>

          {!!this.props.activity.quote && <BlockQuote quote={this.props.activity.quote}/>}

          <h3>Resources</h3>
          <ul>
            {
              this.props.activity.resources.map(function(resource, i){
                return <li key={i}>
                  <p>
                    <a href={resource.link} target="_blank">{resource.name}</a>
                    <br/>
                    {resource.desc}
                  </p>
                </li>
              })
            }
          </ul>
        </div>
        <div className="activity__image"></div>
      </div>
    )
  }
}

Activity.contextTypes = {

}

export default Activity;
