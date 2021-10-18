import { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'; //css
import M from 'materialize-css/dist/js/materialize.min.js'; //javascript

function App() {
  useEffect(() => {
    //init Materialize JS
    M.AutoInit();
  });
  return <div className='App'>my app</div>;
}

export default App;
