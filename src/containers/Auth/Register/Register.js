import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userActions } from "../../../actions";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
  FormHelperText,
  Collapse,
  Alert,
  AlertTitle,
  Fade,
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
    // dispatch(userActions.logout());
  }, [dispatch]);

  const debug = false;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(true);

  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    mobile: Yup.string().required("Mobile Number is required"),
    email: Yup.string().email().required("Email is required"),
    plateNo: Yup.string().required("Plate Number is required"),
    password: Yup.string().required("Password is required").min(8),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const initialValues = {
    name: "",
    mobile: "",
    email: "",
    plateNo: "",
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
  };

  const handleRegister = (values) => {
    if (values.username && values.password) {
      // dispatch(userActions.login(values.username, values.password));
    }
  };

  // if (authentication.loggedIn && authentication.user) {
  //   navigate("./../../dashboard", { replace: true });
  // }

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
                  <TextField
                    fullWidth
                    id="plateNo"
                    name="plateNo"
                    label="UserplateNo"
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
                    <InputLabel htmlFor="confirmPassword">Password</InputLabel>
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
                      type={showPassword ? "text" : "password"}
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
                  <LoadingButton
                    fullWidth
                    type="submit"
                    size="large"
                    variant="contained"
                    color="secondary"
                    sx={{ marginTop: "1rem" }}
                    // loading={authentication.loggingIn}
                  >
                    {/* {authentication.loggingIn ? "Signing in" : "Sign in"} */}
                  </LoadingButton>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    component={RouterLink}
                    to="/auth/forgot-password"
                    size="small"
                    sx={{ padding: 0, marginTop: "1rem", fontSize: "0.75rem" }}
                  >
                    Forgot password?
                  </Button>
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
    </div>
  );
};

export default Register;
