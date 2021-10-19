import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const LogItem = ({ log }) => {
  return (
    <li className='collection-item'>
      <div>
        {/* link opens up a modal */}
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>TASK ID #{log.id}</span> Last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='YYYY/MM/DD hh:mm a'>{log.date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};
LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  // deleteLog: PropTypes.func.isRequired,
  // setCurrent: PropTypes.func.isRequired,
};
export default LogItem;
