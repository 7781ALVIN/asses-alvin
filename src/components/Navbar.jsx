
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{mt:9,flexGrow: 1 }}>
      <AppBar sx={{mt:.1}}position="fixed" color='error'>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PRODUCTS
          </Typography>
          <Button color="inherit">
            <Link 
            to={'/add'}
            style={{ textDecoration: "none", color: "white"}}>
              Add 
            </Link>
          </Button>
          <Button color="inherit">
            <Link
            to={'/'}
            style={{ textDecoration: "none", color: "white"}}>
              Dashboard
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
