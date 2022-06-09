import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

//Proses 9. AuthService berada di folder services
import AuthService from "../services/auth.service";
// import Axios from "axios";

// register 6. proses action register dengan parameter username, email dan password
// jika berhasil, maka register sukses. jika gagal maka register file.
export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username,email, password) => (dispatch) => {
  // try {
  //   // const data1 = await Axios.post("http://localhost:8080/api/auth/signin")
  //   const data2 = await AuthService.login(username, password) //API Calling
  //   //Global state change
  //   await dispatch({
  //     type: LOGIN_SUCCESS,
  //     payload: {user: data2}
  //   })
  //   //Bisa ditambah setItem untuk memasukan hasil API call ke localStorage, jika memanggil axios/API Call (contoh variable data1) di file ini
  // } catch (error) {
  //   const message =  (error.response &&
  //       error.response.data &&
  //       error.response.data.message) ||
  //     error.message ||
  //     error.toString();

  //   await dispatch({
  //     type: LOGIN_FAIL,
  //   });
  //   await dispatch({
  //     type: SET_MESSAGE,
  //     payload: message,
  //   });
  // }


  //Proses action login ke-1, koneksi ke API (AuthService)
  return AuthService.login(username,email, password)
  //Proses action Login ke-2, dia menunggu konfirmasi dari proses AuthService
  .then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        console.log(error.response, "utk cek message")
      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
