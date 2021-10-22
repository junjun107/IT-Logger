import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; //javascript
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech, deleteTech }) => {
  const handleDelete = () => {
    deleteTech(tech.id);

    M.toast({
      html: `Tech ${tech.firstName} ${tech.lastName} has been Deleted`,
    });
  };
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName}
        {tech.lastName}
        <a href='#!' className='secondary-content' onClick={handleDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTech })(TechItem);
