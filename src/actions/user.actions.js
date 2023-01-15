import { userConstants } from "../constants";
import { userService } from "../services/user.service";
import { alertActions } from "./alert.actions";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
  getAll,
  getSingle,
  addUser,
  updateUser,
};

function login(username, password, token) {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password, token).then(
      (user) => {
        dispatch(success(user));
        // history.push("/dashboard");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    userService.getAll().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

// get single
function getSingle(id) {
  return (dispatch) => {
    dispatch(request(id));

    userService.getSingle(id).then(
      (parameter) => {
        dispatch(success(parameter));
        // dispatch(alertActions.success(parameter));
      },
      (error) => {
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };

  function request(parameter) {
    return { type: userConstants.GET_SINGLE_REQUEST, parameter };
  }
  function success(parameter) {
    return { type: userConstants.GET_SINGLE_SUCCESS, parameter };
  }
  function failure(error) {
    return { type: userConstants.GET_SINGLE_FAILURE, error };
  }
}

// add user
function addUser(
  name,
  nic,
  address,
  mobile,
  email,
  plateNo,
  chassisNo,
  vehicleType,
  fuelType,
  password,
  confirmPassword,
  token
) {
  return (dispatch) => {
    dispatch(
      request(
        name,
        nic,
        address,
        mobile,
        email,
        plateNo,
        chassisNo,
        vehicleType,
        fuelType,
        password,
        confirmPassword,
        token
      )
    );

    userService
      .addUser(
        name,
        nic,
        address,
        mobile,
        email,
        plateNo,
        chassisNo,
        vehicleType,
        fuelType,
        password,
        confirmPassword,
        token
      )
      .then(
        (parameter) => {
          dispatch(success(parameter));
          dispatch(alertActions.success(parameter));
        },
        (error) => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };
  function request(parameter) {
    return { type: userConstants.ADD_REQUEST, parameter };
  }
  function success(parameter) {
    return { type: userConstants.ADD_SUCCESS, parameter };
  }
  function failure(error) {
    return { type: userConstants.ADD_FAILURE, error };
  }
}

// update user
function updateUser(
  id,
  name,
  nic,
  address,
  mobile,
  email,
  plateNo,
  chassisNo,
  vehicleType,
  fuelType,
  password,
  confirmPassword,
  token
) {
  return (dispatch) => {
    dispatch(
      request(
        id,
        name,
        nic,
        address,
        mobile,
        email,
        plateNo,
        chassisNo,
        vehicleType,
        fuelType,
        password,
        confirmPassword,
        token
      )
    );

    userService
      .updateUser(
        id,
        name,
        nic,
        address,
        mobile,
        email,
        plateNo,
        chassisNo,
        vehicleType,
        fuelType,
        password,
        confirmPassword,
        token
      )
      .then(
        (parameter) => {
          dispatch(success(parameter));
          dispatch(alertActions.success(parameter));
        },
        (error) => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };
  function request(parameter) {
    return { type: userConstants.ADD_REQUEST, parameter };
  }
  function success(parameter) {
    return { type: userConstants.ADD_SUCCESS, parameter };
  }
  function failure(error) {
    return { type: userConstants.ADD_FAILURE, error };
  }
}
