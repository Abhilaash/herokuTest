import React from 'react';
import './App.css';
import Fetcher from './Fetcher';
import Hooks from './Hooks';

function App() {
  return (
    {item ? (
      <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
    ) : (
      <Skeleton variant="rect" width={210} height={118} />
    )}
    <div className="App">
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
