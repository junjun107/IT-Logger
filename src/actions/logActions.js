import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

//ACTIONS
// export const getLogs = () => {
//   //redux thunk can return a function instead object
//    //make async call
//   return async(dispatch)=>{
//     setLoading(true)
//     const res = await fetch('/logs');
//     const data= await res.json();

//     dispatch({
//       type:GET_LOGS,
//       payload: data
//     })
//   }
// };

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//Add New Log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};
//set lodaing to TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
