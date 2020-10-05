import React from 'react'
import { Header, Icon, Button, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Nav = () => (
    <Menu pointing>
      <Menu.Item>
        <Header as='h3'>
          <Icon name='chess rook' />
          <Header.Content>
            Universidad X
       <Header.Subheader >Manejamos sus preferencias</Header.Subheader>
          </Header.Content>
        </Header>
      </Menu.Item>
      <Menu.Item position="right">
        <Link to="/"  > <Button size="mini" content='Home' /> </Link>
        <Link to="/monitores"  > <Button size="mini" content='Monitores' />  </Link>
        <Link to="/monitorias" > <Button size="mini" content='Monitorías' /> </Link>
      </Menu.Item>
    </Menu>
);

export default Nav