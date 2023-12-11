import React from 'react';
import { Toolbar, Typography, Box } from '@mui/material';

export default function CustomHeader() {
  return (
      <Toolbar>
         <Box>
          <img src="https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/cfa23454-f3a1-44c6-aba3-6193758d5178/kvg_logo.png?format=1500w" alt="Description of the image" height={100} width={100}/>
         </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'  }}>
          <Typography variant="body1" sx={{ marginLeft:10}}>
            Artists
          </Typography>
          <Typography variant="body1" sx={{  marginLeft:2 }}>
            Exhibitions
          </Typography>
          <Typography variant="body1" sx={{ marginLeft:2}}>
            Marketplace
          </Typography>
          <Typography variant="body1" sx={{  marginLeft:2 }}>
            KVG Blog
          </Typography>
          <Typography variant="body1" sx={{  marginLeft:2 }}>
            KVG Collections
          </Typography>
          <Typography variant="body1" sx={{  marginLeft:2 }}>
            About
          </Typography>
          <Typography variant="body1" sx={{  marginLeft:130 }}>
            Cart(0)
          </Typography>
        </Box>
      </Toolbar>
  );
}
