import React from "react";
import { Typography, Stack, Divider } from "@mui/material";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import styles from "./ScheduledData.module.scss";

const Stock = ({ type, label, value }) => {
  console.log("🚀 ~ file: ScheduleData.component.js:7 ~ Stock ~ type", type);
  let color = "";

  const getColor = (fueltype) => {
    switch (fueltype) {
      case "Petrol 92":
        color = "#FF0000";
        break;

      case "Petrol 95":
        color = "#FAFF00";
        break;

      case "Diesel":
        color = "#FF8A00";
        break;

      case "Super Diesel":
        color = "#80FF00";
        break;

      case "Kerosene":
        color = "#CC00FF";
        break;

      default:
        color = "#fff";
        break;
    }
    return color;
  };

  return (
    <li className={`${styles.item}`}>
      <SquareRoundedIcon
        className={styles.square}
        style={{ color: getColor(label) }}
      />{" "}
      <Typography variant="body2" className={styles.label}>
        {type === "legend" ? label : value}
      </Typography>
    </li>
  );
};

const ScheduleData = (props) => {
  const { data } = props;

  return (
    <div className={styles.wrap}>
      {data.map((record, i) => (
        <div key={`record${i}`}>
          {record?.type === "detail" && (
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                justifyContent: {
                  xs: "space-between",
                  sm: "flex-start",
                },
              }}
            >
              <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                Date
              </Typography>
              <Typography variant="body2">{record?.date}</Typography>
            </Stack>
          )}

          <ul className={`${styles.list} ${styles[record?.type]}`}>
            {record?.stock.map((item, j) => (
              <Stock
                key={`item${j}`}
                type={record?.type}
                label={item?.label}
                value={item?.value}
              />
            ))}
          </ul>

          {record?.type === "detail" && <Divider className={styles.divider} />}
        </div>
      ))}
    </div>
  );
};

export default ScheduleData;
