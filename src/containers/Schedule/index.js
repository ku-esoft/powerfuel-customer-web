import React from "react";
import { Grid, Alert, Divider } from "@mui/material";
import Intro from "../../components/layout/pageLayout/Intro/Intro.component";
import Content from "../../components/layout/pageLayout/Content/Content.component";
import BoxedContent from "../../components/layout/pageLayout/BoxedContent/BoxedContent.component";
import ScheduleForm from "../../components/pages/deliverySchedule/ScheduleForm/ScheduleForm.component";

const Schedule = () => {
  return (
    <>
      <Intro
        pageTitle=""
        description="Select fuel station and date/date range."
      />

      <Content>
        <Grid container spacing="2">
          <Grid item xs={12}>
            <BoxedContent title="" subtitle="" description="" dense>
              <Alert severity="info" className="alert-info">
                This schedule can be changed/cancelled without prior notice. In
                case of cancellation, only the token holders will be notified.
              </Alert>
            </BoxedContent>

            <Divider sx={{ height: "2.4rem", border: "none" }} />

            <BoxedContent title="" subtitle="" description="" dense>
              <ScheduleForm />
            </BoxedContent>
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

export default Schedule;
