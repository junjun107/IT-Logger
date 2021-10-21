import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; //javascript
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  //set form data to current data
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    //error checking for empty fileds
    if (message === '' || tech === '') {
      M.toast({ html: 'Cannot submit empty form. Please enter all fields.' });
    } else {
      //update log
      const newLog = {
        id: current.id,
        message, //message: message
        attention,
        tech,
        date: new Date(),
      };
      updateLog(newLog);
      M.toast({ html: 'Log Updated' });

      //clear fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div class='modal-content'>
        <h4>Enter System Log</h4>

        {/* form enter message */}
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        {/* select tech */}
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician{' '}
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Sara Wilson'>Sara Wilson</option>
            </select>
          </div>
        </div>

        {/* checkbox for attention  */}
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      {/* modal footer */}
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='waves-effect waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
