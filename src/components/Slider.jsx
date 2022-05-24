import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { ReactSmartScroller } from 'react-smart-scroller';

const Slider = () => {
  const cards = [
    '123213',
    '21321432',
    'asdasdsad',
    'fasdas',
    '1231',
    'asdasdsa',
    '213213a',
    'dadasd',
    'casdsadsa',
    'casdsadas',
    'ggasdsaq',
    '123aqqwe',
    'ckjakjasdjk',
    '2109309dlja',
    'djkdjkq',
    'jqjejkq',
  ];

  return (
    <ReactSmartScroller>
      {cards.map((item) => (
        <Card variant="outlined" key={item} sx={{ padding: '50px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>
                {item}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      ))}
    </ReactSmartScroller>
  );
};

export default Slider;
