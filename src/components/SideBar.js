import React from 'react';

class SideBar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar__container">
          <button className="button button--secondary button--block" onClick={this.props.randomActivity}>
            <svg className="sidebar-svg sidebar-svg--random" viewBox="0 0 55 17">
              <path d="M2.5,9 C2.5,9 14.5096145,-3.5 28.5048072,9 C42.5,21.5 52,7.5 52,7.5"></path>
            </svg>
          </button>
          <button className="button button--secondary button--block" onClick={this.props.upActivity}>
            <svg className="sidebar-svg">
              <line x1="12.5" x2="12.5" y1="25" y2="0"></line>
              <line x1="0" x2="25" y1="12.5" y2="12.5"/>
            </svg>
          </button>
          <button className="button button--secondary button--block" onClick={this.props.downActivity}>
            <svg className="sidebar-svg">
              <line x1="0" x2="25" y1="12.5" y2="12.5"/>
            </svg>
          </button>
        </div>
      </aside>
    )
  }
}

SideBar.contextTypes = {

}

export default SideBar;
