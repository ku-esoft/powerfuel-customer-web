import React from "react";
import {
  Grid,
  Alert,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Content from "../../components/layout/pageLayout/Content/Content.component";
import BoxedContent from "../../components/layout/pageLayout/BoxedContent/BoxedContent.component";

const records = [
  {
    id: 0,
    outlet: "Ratmalana",
    date: "01/12/2022",
    time: "3.00 PM",
    quota: "20",
    status: "success",
  },
  {
    id: 1,
    outlet: "Mount Lavinia",
    date: "01/12/2022",
    time: "3.00 PM",
    quota: "20",
    status: "success",
  },
  {
    id: 2,
    outlet: "Dehiwala",
    date: "01/12/2022",
    time: "3.00 PM",
    quota: "20",
    status: "success",
  },
  {
    id: 3,
    outlet: "Wellawatta",
    date: "01/12/2022",
    time: "3.00 PM",
    quota: "20",
    status: "success",
  },
  {
    id: 4,
    outlet: "Bambalapitiya",
    date: "01/12/2022",
    time: "3.00 PM",
    quota: "20",
    status: "success",
  },
];

const Schedule = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Content>
        <Grid container spacing="2">
          <Grid item xs={12}>
            <BoxedContent title="" subtitle="" description="" dense>
              {records.map((record, i) => (
                <Accordion
                  expanded={expanded === `panel${i}`}
                  onChange={handleChange(`panel${i}`)}
                  key={i}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography>{record?.date}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam
                      mattis feugiat. Aliquam eget maximus est, id dignissim
                      quam.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </BoxedContent>
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

export default Schedule;
