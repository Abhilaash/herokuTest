import React from 'react';
import './App.css';
import Fetcher from './Fetcher';
import Hooks from './Hooks';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
     <Skeleton animation="wave" />
     <Hooks/>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Fetcher url={'https://randomuser.me/api/'}/>
//     </div>
//   );
// }

export default App;
