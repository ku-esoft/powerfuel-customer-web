import React from "react";
import {
  Grid,
  Alert,
  Divider,
  List,
  ListItem,
  ListItemText,
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
            <BoxedContent
              title=""
              subtitle=""
              description=""
              className="accordion-info"
              dense
            >
              {records.map((record, i) => (
                <Accordion
                  expanded={expanded === `panel${i}`}
                  onChange={handleChange(`panel${i}`)}
                  key={i}
                  square
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{ p: 0 }}
                  >
                    <Typography variant="body2">{record?.date}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 0 }}>
                    <List dense={true} className="list-info">
                      <ListItem>
                        <ListItemText
                          primary="Fuel Station"
                          secondary={record?.outlet}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Date" secondary={record?.date} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Time" secondary={record?.time} />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Quota"
                          secondary={record?.date}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Success"
                          secondary={record?.status}
                        />
                      </ListItem>
                    </List>
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
