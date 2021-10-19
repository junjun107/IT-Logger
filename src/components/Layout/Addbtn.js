import React from 'react';

const Addbtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal' //like an id
        className='btn-floating btn-large teal darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>

      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating purple modal-trigger'
          >
            <i className='material-icons'>person</i>
          </a>
        </li>

        <li>
          <a href='#tech-modal' className='btn-floating blue modal-trigger'>
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Addbtn;
