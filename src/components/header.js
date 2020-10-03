import React from 'react'
import { Header, Icon, Grid, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const Nav= () => (

  <Header as='h2'>
    <Icon name='chess rook icon' />
    <Header.Content>
       Universidad X
      <Grid columns='four' divided floated='right'  >
      <Grid.Column>
      <Header.Subheader >Manejamos sus preferencias</Header.Subheader>
      </Grid.Column>
      <Grid.Column>
                  <Link to="/"  > <Button content ='Home'/> </Link>
                  </Grid.Column>
      

      <Grid.Column >
        
 
                  
                  <Link to="/monitores"  > <Button content ='Monitores'/>  </Link>
                 

                  
                 

        
      </Grid.Column>

                  <Grid.Column>
                  <Link to="/monitorias" > <Button content ='Monitorías'/> </Link>
                  </Grid.Column>
                  </Grid>

      </Header.Content>
      <hr/>
     
    
    
  </Header>
)

export default Nav