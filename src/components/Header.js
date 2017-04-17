import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <h2 className="header__title">Third Wheel</h2>
        </Link>
      </header>
    )
  }
}

Header.contextTypes = {

}

export default Header;
