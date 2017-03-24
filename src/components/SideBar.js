import React from 'react';

class SideBar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar__container">
          <h1>Third Wheel</h1>
          <h2>Activities for long distance relationships.</h2>
          <button onClick={this.props.loadActivity}>Random</button>
        </div>
      </aside>
    )
  }
}

SideBar.contextTypes = {

}

export default SideBar;
