import './App.css';
import ReactJson from 'react-json-view';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [json, setJson] = useState('{}');
  const [submittedJson, setSubmittedJson] = useState({});

  console.log({ submittedJson });

  function handelFormate() {
    setSubmittedJson(JSON.parse(json));
  }

  return (
    <div className="App">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              value={json}
              onChange={(e) => setJson(e.target.value)}
            />
            <Button onClick={handelFormate}>Formate</Button>
          </Grid>
          <Grid item xs={8}>
            <ReactJson src={submittedJson} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
