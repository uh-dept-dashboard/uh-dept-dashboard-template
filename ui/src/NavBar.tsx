import React from 'react';
import {Menu, Image, Button, Popup} from 'semantic-ui-react';
import uhLogo from './images/uh-logo.png';
import {NavLink} from 'react-router-dom';

const PopupExample = () => (
  <Popup content='If this button actually worked, then clicking it would download all the data in this dashboard for personal exploration.' trigger={<Button basic>Export Data</Button>} />
)

type NavBarProps =  {
  title: string
}

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
const NavBar: React.FunctionComponent<NavBarProps> = ({ title = 'UH Dept Dashboard' }) => {
  const menuStyle = {marginBottom: '20px'};
  return (
    <Menu style={menuStyle} attached="top" borderless>
      <Menu.Item>
        <Image size='mini' src={uhLogo}/>
      </Menu.Item>
      <Menu.Item>
        <span className='uh-green' style={{fontWeight: 800, fontSize: '24px'}}>{title}</span>
      </Menu.Item>
      <Menu.Item as={NavLink} activeClassName="active" exact to="/" key='academic-year'>Academic Year View</Menu.Item>
      <Menu.Item as={NavLink} activeClassName="active" exact to="/timeline" key='timeline'>Timeline View</Menu.Item>
      <Menu.Item><PopupExample/></Menu.Item>
    </Menu>
  );
}

export default NavBar;
