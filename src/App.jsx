import './App.css';
import ReactJson from 'react-json-view';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [json, setJson] = useState('{}');
  const [submittedJson, setSubmittedJson] = useState({});

  console.log({ submittedJson });

  function handelFormate() {
    setSubmittedJson(JSON.parse(json));
  }

  return (
    <ErrorBoundary>
      <div className="App">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6} maxHeight={'100vh'} overflow={'auto'}>
              <TextField
                id="outlined-textarea"
                label="Paste your json here to visualize"
                placeholder={`{"name":"ramesh"}`}
                multiline
                value={json}
                onChange={(e) => setJson(e.target.value)}
                fullWidth
              />
              <Button onClick={handelFormate}>Formate</Button>
            </Grid>
            <Grid item xs={6} maxHeight={'100vh'} overflow={'auto'}>
              <ReactJson src={submittedJson} />
            </Grid>
          </Grid>
        </Box>
      </div>
    </ErrorBoundary>
  );
}

export default App;
