import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiConstants } from "../../../constants";
import { alertActions, userActions } from "../../../actions";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Divider,
  Select,
  MenuItem,
  FormHelperText,
  Collapse,
  Alert,
  AlertTitle,
  Fade,
  Stack,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Close as CloseIcon,
} from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import styles from "./Register.module.scss";

const Register = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const authentication = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  const formikRef = React.createRef();

  // logiut user upon visiting the login page
  useEffect(() => {
    dispatch(alertActions.clear());
    dispatch(userActions.logout());
  }, [dispatch]);

  const debug = true;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(true);
  const [token, setToken] = useState();
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);

  // get token
  useEffect(() => {
    const getToken = async () => {
      const url = `${apiConstants.API_URL}/token`;
      const uname = "guest";
      const pass = "guest";

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: url,
        auth: {
          username: uname,
          password: pass,
        },
        data: [
          "districts.list",
          "cities.list",
          "fueltypes.list",
          "vehicletypes.list",
          "users.add",
        ],
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setToken(response.data.token);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getToken();
  }, []);

  // get token
  useEffect(() => {
    const getDetails = async () => {
      const vt_options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        url: `${apiConstants.API_URL}/vehicletypes`,
      };

      const ft_options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        url: `${apiConstants.API_URL}/fueltypes`,
      };

      axios
        .request(vt_options)
        .then(function (response) {
          console.log(response.data);
          setVehicleTypes(response.data);
        })
        .catch(function (error) {
          console.error("error");
        });

      axios
        .request(ft_options)
        .then(function (response) {
          console.log(response.data);
          setFuelTypes(response.data);
        })
        .catch(function (error) {
          console.error("error");
        });
    };

    getDetails();
  }, [token]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    nic: Yup.string()
      .required("National ID Number is required")
      .min(10)
      .max(12),
    address: Yup.string().required("Address is required").max(100),
    mobile: Yup.string().required("Mobile Number is required").min(10),
    email: Yup.string().email().required("Email is required"),
    plateNo: Yup.string().required("Plate Number is required").max(10),
    chassisNo: Yup.string().required("Chassis Number is required").max(10),
    vehicleType: Yup.string().required("Vehicle Type is required"),
    fuelType: Yup.string().required("Fuel Type is required"),
    password: Yup.string().required("Password is required").min(8),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const initialValues = {
    name: "",
    nic: "",
    address: "",
    mobile: "",
    email: "",
    plateNo: "",
    chassisNo: "",
    vehicleType: "",
    fuelType: "",
    password: "",
    confirmPassword: "",
  };

  useEffect(() => {
    const updateFormSubmitting = () => {
      // if (!authentication.loggingIn && !authentication.loggedIn && alert) {
      //   formikRef.current.setSubmitting(false);
      //   // formikRef.current.resetForm();
      // }
    };
    updateFormSubmitting();
  }, [authentication, formikRef, alert]);

  useEffect(() => {
    const updateErrorMessage = () => {
      if (alert) {
        setShowErrorMessage(true);
      }
    };
    updateErrorMessage();
  }, [alert]);

  const handleSubmit = (values, props) => {
    // props.setSubmitting(true);
    handleRegister(values);
    // navigate("/auth/login");
  };

  const handleRegister = (values) => {
    console.log("🚀 ~ file: Register.js:202 ~ handleRegister ~ values", values);
    if (
      values.name &&
      values.nic &&
      values.address &&
      values.mobile &&
      values.email &&
      values.plateNo &&
      values.chassisNo &&
      values.vehicleType &&
      values.fuelType &&
      values.password &&
      values.confirmPassword
    ) {
      dispatch(
        userActions.addUser(
          values.name,
          values.nic,
          values.address,
          values.mobile,
          values.email,
          values.plateNo,
          values.chassisNo,
          values.vehicleType,
          values.fuelType,
          values.password,
          values.confirmPassword,
          token
        )
      );
    }
  };

  if (alert.type && alert.type === "success") {
    setTimeout(() => {
      navigate("./../../Auth/Login", { replace: true });
    }, 3000);
  }

  return (
    <div>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "1.8rem",
            },
            marginBottom: "0.5rem",
          }}
        >
          Signup
        </Typography>
        <Typography variant="body2">
          Please provide the required information.
        </Typography>

        <Collapse in={alert.type && showErrorMessage}>
          <Alert
            severity={alert.type}
            className={`login-alert login-alert-${alert.type}`}
            sx={{ mt: 3, mb: -1 }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowErrorMessage(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <Fade
              in={alert.type && showErrorMessage}
              {...(alert.type && showErrorMessage ? { timeout: 500 } : {})}
            >
              <AlertTitle className="alert-title" sx={{ fontSize: "0.8rem" }}>
                {alert.description}
              </AlertTitle>
            </Fade>

            {/* <Fade
              in={alert.type && showErrorMessage}
              {...(alert.type && showErrorMessage ? { timeout: 1500 } : {})}
            >
              <small>{alert?.message}</small>
            </Fade> */}
          </Alert>
        </Collapse>
      </Box>

      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          innerRef={formikRef}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            // resetForm();
          }}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            isValid,
            setFieldValue,
          }) => (
            <Form noValidate autoComplete="off">
              <Grid
                container
                rowSpacing={2}
                sx={{
                  marginTop: { xs: "0.5rem" },
                  marginBottom: { xs: "1rem" },
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Full Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    variant="standard"
                    required
                    autoComplete="name"
                    className={styles.textField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="nic"
                    name="nic"
                    label="National ID  Number"
                    value={values.nic}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.nic && Boolean(errors.nic)}
                    helperText={touched.nic && errors.nic}
                    variant="standard"
                    required
                    autoComplete="nic"
                    className={styles.textField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                    variant="standard"
                    required
                    autoComplete="address"
                    className={styles.textField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="mobile"
                    name="mobile"
                    label="Mobile Number"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.mobile && Boolean(errors.mobile)}
                    helperText={touched.mobile && errors.mobile}
                    variant="standard"
                    required
                    autoComplete="mobile"
                    className={styles.textField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    variant="standard"
                    required
                    autoComplete="email"
                    className={styles.textField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="standard"
                    error={touched.password && Boolean(errors.password)}
                    className={styles.textField}
                  >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      fullWidth
                      id="password"
                      name="password"
                      label="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="standard"
                      required
                      type={showPassword ? "text" : "password"}
                      autoComplete="off"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowPassword(!showPassword);
                            }}
                            onMouseDown={(e) => e.preventDefault()}
                            edge="end"
                            sx={{ mr: 0 }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {touched.password && errors.password && (
                      <FormHelperText>{errors.password}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="standard"
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    className={styles.textField}
                  >
                    <InputLabel htmlFor="confirmPassword">
                      Confirm Password
                    </InputLabel>
                    <Input
                      fullWidth
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="standard"
                      required
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="off"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirmPassword visibility"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowConfirmPassword(!showConfirmPassword);
                            }}
                            onMouseDown={(e) => e.preventDefault()}
                            sx={{ mr: 0 }}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <FormHelperText>{errors.confirmPassword}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="plateNo"
                    name="plateNo"
                    label="Vehicle Plate No."
                    value={values.plateNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.plateNo && Boolean(errors.plateNo)}
                    helperText={touched.plateNo && errors.plateNo}
                    variant="standard"
                    required
                    autoComplete="plateNo"
                    className={styles.textField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="chassisNo"
                    name="chassisNo"
                    label="Vehicle Chassis No."
                    value={values.chassisNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.chassisNo && Boolean(errors.chassisNo)}
                    helperText={touched.chassisNo && errors.chassisNo}
                    variant="standard"
                    required
                    autoComplete="chassisNo"
                    className={styles.textField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    error={touched.vehicleType && Boolean(errors.vehicleType)}
                    sx={{ height: 40 }}
                  >
                    <InputLabel sx={{ ml: -1.75 }}>Vehicle Type</InputLabel>
                    <Select
                      fullWidth
                      id="vehicleType"
                      name="vehicleType"
                      label="Vehicle Type"
                      value={values.vehicleType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="standard"
                      className={styles.textField}
                      sx={{ height: 40 }}
                      // size="small"
                    >
                      {vehicleTypes.map((item) => (
                        <MenuItem key={item?.id} value={item.id}>
                          {item?.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {touched.vehicleType && Boolean(errors.vehicleType) && (
                      <FormHelperText>
                        {touched.vehicleType && errors.vehicleType}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    error={touched.fuelType && Boolean(errors.fuelType)}
                    sx={{ height: 40 }}
                  >
                    <InputLabel sx={{ ml: -1.75 }}>Fuel Type</InputLabel>
                    <Select
                      fullWidth
                      id="fuelType"
                      name="fuelType"
                      label="Fuel Type"
                      value={values.fuelType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="standard"
                      className={styles.textField}
                      sx={{ height: 40 }}
                      // size="small"
                    >
                      {fuelTypes.map((item) => (
                        <MenuItem key={item?.id} value={item.id}>
                          {item?.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {touched.fuelType && Boolean(errors.fuelType) && (
                      <FormHelperText>
                        {touched.fuelType && errors.fuelType}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <LoadingButton
                    fullWidth
                    type="submit"
                    size="large"
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: "1rem" }}
                    // loading={authentication.loggingIn}
                  >
                    {/* {authentication.loggingIn ? "Signing in" : "Sign in"} */}
                    Sign Up
                  </LoadingButton>
                </Grid>
              </Grid>

              {debug && (
                <>
                  <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                  <pre style={{ textAlign: "left" }}>
                    <strong>Values</strong>
                    <br />
                    {JSON.stringify(values, null, 2)}
                  </pre>
                  <pre style={{ textAlign: "left" }}>
                    <strong>Errors</strong>
                    <br />
                    {JSON.stringify(errors, null, 2)}
                  </pre>
                </>
              )}
            </Form>
          )}
        </Formik>
      </Box>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{
          mt: {
            xs: 4,
            md: 2,
          },
        }}
      >
        <Typography sx={{ fontSize: "0.75rem" }}>
          Already Registered?
        </Typography>
        <Button
          component={RouterLink}
          to="/auth/login"
          size="small"
          sx={{
            padding: 0,
            fontSize: "0.75rem",
            textAlign: "center",
          }}
        >
          Sign In
        </Button>
      </Stack>
    </div>
  );
};

export default Register;
