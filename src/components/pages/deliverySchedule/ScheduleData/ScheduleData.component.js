import React from "react";
import { Typography, Stack } from "@mui/material";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import styles from "./ScheduledData.module.scss";

const ScheduleData = (props) => {
  const { data } = props;

  return (
    <div className={styles.wrap}>
      <Stack>
        <Typography>Date</Typography>
        <Typography></Typography>
      </Stack>
      <ul>
        <li>
          <SquareRoundedIcon /> <Typography>Petrol</Typography>
        </li>
        <li>
          <SquareRoundedIcon /> <Typography>Petrol</Typography>
        </li>
        <li>
          <SquareRoundedIcon /> <Typography>Petrol</Typography>
        </li>
        <li>
          <SquareRoundedIcon /> <Typography>Petrol</Typography>
        </li>
        <li>
          <SquareRoundedIcon /> <Typography>Petrol</Typography>
        </li>
      </ul>
    </div>
  );
};

export default ScheduleData;
