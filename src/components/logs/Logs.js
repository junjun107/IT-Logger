import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../Layout/Preloader';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch('/logs');
  //   const data = await res.json();
  //   setLogs(data);
  //   setLoading(false);
  // };

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
