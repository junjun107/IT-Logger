import { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'; //css
import M from 'materialize-css/dist/js/materialize.min.js'; //javascript
import SearchBar from './components/Layout/SearchBar';
import Logs from './components/logs/Logs';
import Addbtn from './components/Layout/Addbtn';
import AddLogModal from './components/logs/AddLogModal';

function App() {
  useEffect(() => {
    //init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />

      <div className='container'>
        <Addbtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
