'use client'
import * as React from 'react';

import { Dropdown, Menu, MenuButton, MenuItem, ListItemDecorator } from '@mui/joy';
import {  LogOut, User } from 'react-feather';


export default function HeaderMenu() {
  const [open, setOpen] = React.useState(false);
  const handleOpenChange = (event: React.SyntheticEvent | null, isOpen: boolean) => {
      setOpen(isOpen);
  };

  return (
    <Dropdown open={open} onOpenChange={handleOpenChange}>
      <MenuButton><User color='#fff'/></MenuButton>
      <Menu placement="bottom-end">
          <>
            <MenuItem onClick={() => console.log("Account") }>
              <ListItemDecorator> <User/> </ListItemDecorator>    My account
            </MenuItem>
            <MenuItem onClick={() => console.log("logout")}><LogOut/>Logout</MenuItem>
          </>
      </Menu>
    </Dropdown>
  );
}