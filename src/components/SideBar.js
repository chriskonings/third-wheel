import React from 'react';

class SideBar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar__container">
          <button className="button button--secondary button--block" onClick={this.props.randomActivity}>~</button>
          <button className="button button--secondary button--block" onClick={this.props.upActivity}>+</button>
          <button className="button button--secondary button--block" onClick={this.props.downActivity}>-</button>
        </div>
      </aside>
    )
  }
}

SideBar.contextTypes = {

}

export default SideBar;
