import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

//fectching data from backend for now
const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  // const getTechs = async () => {
  //   setLoading(true);
  //   const res = await fetch('/techs');
  //   const data = await res.json();
  //   setTechs(data);
  //   setLoading(false);
  // };

  // if (loading) {
  //   return <Preloader />;
  // }

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
