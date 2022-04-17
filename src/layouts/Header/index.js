import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Header() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Homepage" href="/" />
        <LinkTab label="Login" href="/login" />
        <LinkTab label="Logout" href="/signup" />
      </Tabs>
    </Box>
  );
}