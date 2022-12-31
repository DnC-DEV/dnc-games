import React, { useState } from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Grid, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import SDrawer from '../drawer/Drawer';


const settings = ['Minha Conta', 'Sair'];


export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <AppBar className='navbar'>
      <Toolbar>
        <Grid container padding={1} display='flex' >
          <Grid item xs={4} justifyContent='flex-start' display='flex'>
            <SDrawer />
          </Grid>
          <Grid item xs={4} justifyContent='center' alignItems='center' display='flex'>
            <img src="https://media.discordapp.net/attachments/1044037170517790843/1058487760677249064/20221230_175116_0000.png" alt="logo" width='99px' />
          </Grid>
          <Grid item xs={4} justifyContent='flex-end' alignItems='center' display='flex'>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}