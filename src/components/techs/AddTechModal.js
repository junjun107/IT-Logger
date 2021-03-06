import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; //javascript
import { addTech } from '../../actions/techActions';
import { connect } from 'react-redux';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    //error checking for empty fileds
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Cannot submit empty form. Please enter all fields.' });
    } else {
      //add a new tech
      addTech({ firstName, lastName });

      M.toast({ html: `${firstName} ${lastName} was added as a new tech` });

      //clear fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div class='modal-content'>
        <h4>Add New Technician</h4>

        {/* form enter tech firstname */}
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        {/* form enter tech lastname */}
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
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

export default connect(null, { addTech })(AddTechModal);
