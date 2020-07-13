import React from "react";
import Container from "@material-ui/core/Typography";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Cookbook JavaScript application.
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          You can add recipe, edit, and delete
        </Typography>
      </Container>
    </div>
  );
};

export default Main;
