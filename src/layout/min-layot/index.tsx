
// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink , Outlet } from 'react-router-dom';

import navList from "../../router/nav-list"

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar className='bg-[#F9F9F9] flex items-center justify-between'>
          <div className='flex items-center gap-[25px] '>
            <button className='py-2 px-12 bg-[#109CF1] rounded-[10px] hover:bg-sky-700 active:bg-[#109CF1] duration-200'>Buyurtma qo‘shish</button>
            <div className=' relative bg-[#E2E2E2] w-[294px] h-[40px] rounded-[10px] '>
              <i className=" absolute top-2 left-3  text-[#767676]  bi bi-search"></i>
              <input type="text" placeholder='Qidiruv' className='w-full h-full rounded-[10px] pl-10 pr-3 outline-none text-[#767676]' />
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <button><i className="bi bi-bell text-[#767676] text-[22px]"></i></button>
            <button><i className="bi bi-person-circle text-[#767676] text-[24px]"></i></button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer 
        sx={{
          
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar  />
        <Divider />
        <List className='bg-[#F9F9F9] h-[100vh]' >
          {navList.map((el, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {el.icon}
                </ListItemIcon>
                  <NavLink to={el.path} className='text-[#767676]'>
                    {el.title}
                  </NavLink>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#E2E2E2', p: 3 , height: "100vh" }}
      >
        <Toolbar />
        <Outlet/>
      </Box>
    </Box>
  );
}





















// function index() {
//   return <>
//   <h1>Main layyot</h1>
//   </>
// }

// export default index