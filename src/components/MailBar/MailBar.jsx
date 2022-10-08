import {useState}from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MailModal from '../MailModal/MailModal';

export default function MailBar() {
    const [openModal,setOpenModal] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Abhishek Mail App
          </Typography>
          <Button variant='contained' color="success" onClick={()=>setOpenModal(true)}>Compose Mail</Button>
          <MailModal open={openModal} handleClose={()=>setOpenModal(false)}></MailModal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
