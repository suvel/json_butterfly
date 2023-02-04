import './App.css';
import ReactJson from 'react-json-view';

function App() {
  return (
    <div className="App">
      <ReactJson
        src={{
          message: {
            name: 'suvel',
            age: '56',
          },
        }}
      />
    </div>
  );
}

export default App;
