import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { MoreMenu } from '../molecules/SettingMenu';

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          View Page
        </Typography>
        <MoreMenu />
      </Toolbar>
    </AppBar>
  );
};
