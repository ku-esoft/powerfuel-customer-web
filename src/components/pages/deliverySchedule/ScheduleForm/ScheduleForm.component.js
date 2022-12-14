import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import {
//   organizationActions,
//   countryActions,
//   paymentTermActions,
// } from "./../../../../actions";
import {
  Divider,
  Button,
  TextField,
  Grid,
  Stack,
  FormGroup,
  FormControl,
  InputLabel,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Switch,
  Select,
  MenuItem,
  CircularProgress,
  FormHelperText,
  Alert,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FieldArray, Form, Formik, getIn } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import styles from "./ScheduleForm.module.scss";
import { useNavigate } from "react-router-dom";

const ScheduleForm = (props) => {
  const {
    title,
    titleSingle,
    mode,
    paramdata,
    handleSuccessDialog,
    handleErrorAlert,
  } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paramState = useSelector((state) => state.organizations);
  const paymentTermState = useSelector((state) => state.paymentTerms);
  const countryState = useSelector((state) => state.countries);
  const alertState = useSelector((state) => state.alert);
  const formikRef = React.createRef();

  const debug = false;
  // const [submitting, setSubmitting] = useState(false);
  const [useSameBillingAddr, setUseSameBillingAddr] = useState(true);
  const [poRequired, setPoRequired] = useState(false);
  const [orgStatus, setOrgStatus] = useState(true);
  const successMsg = "";

  const validationSchema = Yup.object({
    outlet: Yup.string().required("Fuel Station is required"),
    startDate: Yup.string().required("Start Date is required"),
    endDate: Yup.string().required("End Date is required"),
  });

  const initialValues = {
    outlet: "",
    startDate: "",
    endDate: "",
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
    navigate("/schedule/details");
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
    setUseSameBillingAddr(e.target.checked);
  };

  const handlePOToggle = (e) => {
    setPoRequired(e.target.checked);
  };

  const handleOrgStatusToggle = (e) => {
    setOrgStatus(e.target.checked);
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
              <Grid item xs={12} md={6}>
                <FormControl
                  fullWidth
                  error={touched.outlet && Boolean(errors.outlet)}
                  sx={{ height: 40 }}
                >
                  <InputLabel sx={{ ml: -1.75 }}>Fuel Station</InputLabel>
                  {countryState?.loading && (
                    <CircularProgress
                      size={20}
                      sx={{ position: "absolute", right: 25, bottom: 10 }}
                    />
                  )}
                  <Select
                    fullWidth
                    id="outlet"
                    name="outlet"
                    label="Fuel Station"
                    value={values.outlet}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="standard"
                    className={styles.textField}
                    sx={{ height: 40 }}
                    // size="small"
                  >
                    {/* {countryState?.items?.data.map((item) => (
                      <MenuItem key={item?.id} value={item.id}>
                        {item?.name} ({item?.code})
                      </MenuItem>
                    ))} */}
                    <MenuItem value="1">Bambalapitiya</MenuItem>
                    <MenuItem value="1">Dehiwala</MenuItem>
                    <MenuItem value="1">Wellawatta</MenuItem>
                    <MenuItem value="1">Mount Lavinia</MenuItem>
                    <MenuItem value="1">Ratmalana</MenuItem>
                    <MenuItem value="1">Moratuwa</MenuItem>
                    <MenuItem value="1">Panadura</MenuItem>
                  </Select>
                  {touched.outlet && Boolean(errors.outlet) && (
                    <FormHelperText>
                      {touched.outlet && errors.outlet}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="startDate"
                  name="startDate"
                  label="Start Date"
                  value={values.startDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.startDate && Boolean(errors.startDate)}
                  helperText={touched.startDate && errors.startDate}
                  variant="standard"
                  className={styles.textField}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="endDate"
                  name="endDate"
                  label="Start Date"
                  value={values.endDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.endDate && Boolean(errors.endDate)}
                  helperText={touched.endDate && errors.endDate}
                  variant="standard"
                  className={styles.textField}
                  size="small"
                />
              </Grid> */}

              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Start Date"
                    name="startDate"
                    fullWidth
                    onChange={(value) =>
                      setFieldValue("startDate", value, true)
                    }
                    value={values.startDate}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className={styles.textField}
                        size="small"
                        error={Boolean(touched.startDate && errors.startDate)}
                        helperText={touched.startDate && errors.startDate}
                        variant="standard"
                        fullWidth
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="End Date"
                    name="endDate"
                    fullWidth
                    onChange={(value) => setFieldValue("endDate", value, true)}
                    value={values.endDate}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className={styles.textField}
                        size="small"
                        error={Boolean(touched.endDate && errors.endDate)}
                        helperText={touched.endDate && errors.endDate}
                        variant="standard"
                        fullWidth
                      />
                    )}
                  />
                </LocalizationProvider>
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
                    Search
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

export default ScheduleForm;
