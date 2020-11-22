import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Image} from 'semantic-ui-react';
import uhLogo from './images/uh-logo.png';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
const NavBar: React.FunctionComponent = () => {
  const menuStyle = {marginBottom: '0px'};
  return (
    <Menu style={menuStyle} attached="top" borderless>
      <Menu.Item>
        <Image size='mini' src={uhLogo}/>
        <span className='uh-green' style={{fontWeight: 800, fontSize: '24px'}}>UH Dept Dashboard</span>
      </Menu.Item>
    </Menu>
  );
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

export default NavBar;
