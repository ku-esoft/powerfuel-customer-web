import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   organizationActions,
//   countryActions,
//   paymentTermActions,
// } from "./../../../../actions";
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
  Stack,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Close as CloseIcon,
} from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FieldArray, Form, Formik, getIn } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import styles from "./ProfileForm.module.scss";

const ProfileForm = (props) => {
  const {
    title,
    titleSingle,
    mode,
    paramdata,
    handleSuccessDialog,
    handleErrorAlert,
  } = props;

  const dispatch = useDispatch();
  const paramState = useSelector((state) => state.organizations);
  const paymentTermState = useSelector((state) => state.paymentTerms);
  const countryState = useSelector((state) => state.countries);
  const alertState = useSelector((state) => state.alert);
  const formikRef = React.createRef();

  const debug = false;
  // const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const successMsg = "";

  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required").min(8),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  // useEffect(() => {
  //   dispatch(paymentTermActions.getAllParameters());
  //   dispatch(countryActions.getAllParameters());
  // }, [dispatch]);

  useEffect(() => {
    const prefillData = () => {
      if (mode === "edit" && paramdata) {
        const fields = [
          "name",
          "email",
          "contact_person_name",
          "sales_rep_id",
          "address_line_1",
          "address_line_2",
          "postal_code",
          "use_same_billing_address",
          "purchase_order_required",
          "country_id",
          "payment_term_id",
          "status",
        ];

        fields.forEach((field) =>
          formikRef.current.setFieldValue(field, paramdata[field], false)
        );
      }
    };

    prefillData();
  }, []);

  useEffect(() => {
    const handleSuccess = () => {
      if (paramState?.parameter?.data && alertState.type === "success") {
        handleSuccessDialog(successMsg);
      }
    };

    const handleError = () => {
      if (paramState?.error && alertState.type === "error") {
        handleErrorAlert(successMsg);
      }
    };

    handleSuccess();
    handleError();
  }, [paramState, handleSuccessDialog, alertState, handleErrorAlert]);

  const handleSubmit = (values) => {
    if (values && mode === "add") {
      // dispatch(
      //   organizationActions.addParameter(
      //     values.name,
      //     values.email,
      //     values.contact_person_name,
      //     values.sales_rep_id,
      //     values.address_line_1,
      //     values.address_line_2,
      //     values.postal_code,
      //     values.use_same_billing_address,
      //     values.purchase_order_required,
      //     values.country_id,
      //     values.payment_term_id,
      //     values.status
      //   )
      // );
    }
    if (values && mode === "edit") {
      // dispatch(
      //   organizationActions.updateParameter(
      //     paramdata.id,
      //     values.email,
      //     values.contact_person_name,
      //     values.sales_rep_id,
      //     values.address_line_1,
      //     values.address_line_2,
      //     values.postal_code,
      //     values.use_same_billing_address,
      //     values.purchase_order_required,
      //     values.country_id,
      //     values.payment_term_id,
      //     values.status
      //   )
      // );
    }
  };

  const handleBillingAddrToggle = (e) => {
    // setUseSameBillingAddr(e.target.checked);
  };

  const handlePOToggle = (e) => {
    // setPoRequired(e.target.checked);
  };

  const handleOrgStatusToggle = (e) => {
    // setOrgStatus(e.target.checked);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        innerRef={formikRef}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
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
            <Grid container spacing={{ xs: 2, sm: 2 }} sx={{ pt: 0, pb: 0 }}>
              <Grid item xs={12} sm={6}>
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

              <Grid item xs={12} sm={6}>
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
                <Stack
                  direction="column-reverse"
                  justifyContent="space-between"
                  align-items="center"
                  sx={{
                    flexDirection: {
                      sm: "row",
                    },
                    mt: 2,
                  }}
                >
                  <Link to="/dashboard" style={{ display: "block" }}>
                    <Button
                      size="medium"
                      startIcon={<ArrowBackIcon size="small" />}
                      sx={{ textTransform: "none" }}
                    >
                      Back
                    </Button>
                  </Link>

                  <span style={{ flex: 1 }}>&nbsp;</span>

                  <LoadingButton
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    size="large"
                    loading={paramState?.loading}
                    // loadingPosition="end"
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "auto",
                      },
                    }}
                  >
                    Reserve
                  </LoadingButton>
                </Stack>
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
    </div>
  );
};

export default ProfileForm;
