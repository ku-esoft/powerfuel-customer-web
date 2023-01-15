import { apiConstants } from "../constants";
import { authHeader } from "../helpers";

export const userService = {
  login,
  logout,
  getAll,
  getSingle,
  addUser,
  updateUser,
};

function login(username, password, token) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      email: username,
      password: password,
      // local JWT API
      // username: username,
      // password: password,
    }),
  };

  return fetch(`${apiConstants.API_URL}/auth`, requestOptions) // remote IDM server
    .then(handleResponse)
    .then((user) => {
      user.alias = username;
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

// get single parameter
function getSingle(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiConstants.API_URL}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiConstants.API_URL}/users`, requestOptions).then(
    handleResponse
  );
}

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
  const requestOptions = {
    method: "POST",
    // headers: authHeader(),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      name: name,
      nic: nic,
      address: address,
      mobile: mobile,
      email: email,
      plateNo: plateNo,
      chassisNo: chassisNo,
      vehicleType: vehicleType,
      fuelType: fuelType,
      password: password,
    }),
  };

  return fetch(`${apiConstants.API_URL}/users/add`, requestOptions).then(
    handleResponse
  );
}

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
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify({
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
      token,
    }),
  };

  return fetch(`${apiConstants.API_URL}/update/${id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
