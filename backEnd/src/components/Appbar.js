import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Appbar({ showAssistantBoard, showAdminBoard, currentUser, logOut }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#2196F3' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Gestion Formation
          </Typography>

          <div style={{ display: 'flex', marginLeft: 'auto' }}>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>

            {showAssistantBoard && (
              <Button color="inherit" component={Link} to="/assistant">
                Assistant Board
              </Button>
            )}

            {showAdminBoard && (
              <Button color="inherit" component={Link} to="/admin">
                Admin Board
              </Button>
            )}

          

            {currentUser ? (
              <>
                <Button color="inherit" component={Link} to="/profile">
                  {currentUser.username}
                </Button>

                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </>
            ) : (
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
