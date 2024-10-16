
import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';


export const login = (userData) => {
  return (dispatch) => {
    
    localStorage.setItem('userToken', userData.token); 

    dispatch({
      type: LOGIN_SUCCESS,
      payload: userData,
    });
  };
};


export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('userToken'); 
    dispatch({
      type: LOGOUT,
    });
  };
};
