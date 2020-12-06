import React from 'react';
import {Menu, Image, Button, Modal, Dropdown} from 'semantic-ui-react';
import uhLogo from './images/uh-logo.png';
import {NavLink} from 'react-router-dom';

function ExportModalButton() {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}
           trigger={<Button basic>Export</Button>}>
      <Modal.Header>Export Data</Modal.Header>
      <Modal.Content>
        <Modal.Description>If this button actually worked, then clicking it would download all the data in this
          dashboard for personal exploration.</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button content="Dismiss" onClick={() => setOpen(false)} positive/>
      </Modal.Actions>
    </Modal>
  )
}

type NavBarProps = {
  title: string
}

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
const NavBar: React.FunctionComponent<NavBarProps> = ({title = 'UH Dept Dashboard'}) => {
  const menuStyle = {marginBottom: '20px'};
  return (
    <Menu style={menuStyle} attached="top" borderless stackable>
      <Menu.Item>
        <Image size='mini' src={uhLogo}/>
      </Menu.Item>
      <Menu.Item>
        <span className='uh-green' style={{fontWeight: 800, fontSize: '24px'}}>{title}</span>
      </Menu.Item>
      <Menu.Item as={NavLink} activeClassName="active" exact to="/" key='academic-year'>Academic Year View</Menu.Item>
      <Menu.Item>
        <Dropdown text="Initiatives View">
          <Dropdown.Menu>
            <Dropdown.Item text="Diversity" as={NavLink} exact to="/diversity"/>
            <Dropdown.Item text="Professional Preparation" as={NavLink} exact to="/professional-preparation"/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <Menu.Item><ExportModalButton/></Menu.Item>
    </Menu>
  );
}

export default NavBar;
