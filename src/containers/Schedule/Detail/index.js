import React from "react";
import { Grid, Alert, Divider, Typography } from "@mui/material";
import Intro from "../../../components/layout/pageLayout/Intro/Intro.component";
import Content from "../../../components/layout/pageLayout/Content/Content.component";
import BoxedContent from "../../../components/layout/pageLayout/BoxedContent/BoxedContent.component";
import ScheduleData from "../../../components/pages/deliverySchedule/ScheduleData/ScheduleData.component";

const legend = [
  {
    type: "legend",
    date: "",
    stock: [
      {
        label: "Petrol 92",
        value: "",
      },
      {
        label: "Petrol 95",
        value: "",
      },
      {
        label: "Diesel",
        value: "",
      },
      {
        label: "Super Diesel",
        value: "",
      },
      {
        label: "Kerosene",
        value: "",
      },
    ],
  },
];

const data = [
  {
    type: "detail",
    date: "01/12/2022",
    stock: [
      {
        label: "Petrol 92",
        value: "13600",
      },
      {
        label: "Petrol 95",
        value: "6600",
      },
      {
        label: "Diesel",
        value: "6600",
      },
      {
        label: "Super Diesel",
        value: "6600",
      },
      {
        label: "Kerosene",
        value: "0",
      },
    ],
  },
  {
    type: "detail",
    date: "01/12/2022",
    stock: [
      {
        label: "Petrol 92",
        value: "13600",
      },
      {
        label: "Petrol 95",
        value: "6600",
      },
      {
        label: "Diesel",
        value: "6600",
      },
      {
        label: "Super Diesel",
        value: "6600",
      },
      {
        label: "Kerosene",
        value: "0",
      },
    ],
  },
  {
    type: "detail",
    date: "01/12/2022",
    stock: [
      {
        label: "Petrol 92",
        value: "13600",
      },
      {
        label: "Petrol 95",
        value: "6600",
      },
      {
        label: "Diesel",
        value: "6600",
      },
      {
        label: "Super Diesel",
        value: "6600",
      },
      {
        label: "Kerosene",
        value: "0",
      },
    ],
  },
  {
    type: "detail",
    date: "01/12/2022",
    stock: [
      {
        label: "Petrol 92",
        value: "13600",
      },
      {
        label: "Petrol 95",
        value: "6600",
      },
      {
        label: "Diesel",
        value: "6600",
      },
      {
        label: "Super Diesel",
        value: "6600",
      },
      {
        label: "Kerosene",
        value: "0",
      },
    ],
  },
  {
    type: "detail",
    date: "01/12/2022",
    stock: [
      {
        label: "Petrol 92",
        value: "13600",
      },
      {
        label: "Petrol 95",
        value: "6600",
      },
      {
        label: "Diesel",
        value: "6600",
      },
      {
        label: "Super Diesel",
        value: "6600",
      },
      {
        label: "Kerosene",
        value: "0",
      },
    ],
  },
  {
    type: "detail",
    date: "01/12/2022",
    stock: [
      {
        label: "Petrol 92",
        value: "13600",
      },
      {
        label: "Petrol 95",
        value: "6600",
      },
      {
        label: "Diesel",
        value: "6600",
      },
      {
        label: "Super Diesel",
        value: "6600",
      },
      {
        label: "Kerosene",
        value: "0",
      },
    ],
  },
];

const ScheduleDetail = () => {
  return (
    <>
      <Intro pageTitle="PowerFuel Ratmalana" description="" />

      <Content>
        <Grid container spacing="2">
          <Grid item xs={12}>
            <BoxedContent title="" subtitle="" description="" dense>
              <Typography variant="body2">
                #23, Galle Road, Ratmalana, Western
              </Typography>
              <Typography variant="body2">Tel: +94 11 2343254</Typography>
              <Typography variant="body2">
                Email: mgr_ratmalana@powerfuel.lk
              </Typography>
            </BoxedContent>

            <Divider sx={{ height: "2.4rem", border: "none" }} />

            <BoxedContent
              title=""
              subtitle=""
              description=""
              moderate
              backgroundColor="#21203f"
            >
              <ScheduleData data={legend} />
            </BoxedContent>

            <BoxedContent title="" subtitle="" description="" moderate dense>
              <ScheduleData data={data} />
            </BoxedContent>
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

export default ScheduleDetail;
