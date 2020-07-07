import React from 'react';
import { Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';



function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Hello World!
      </Button>
      <Rating name="size-large" defaultValue={2} size="large" />
    </div>
  );
}

export default App;
