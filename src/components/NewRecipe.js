import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createRecipe } from "../redux/recipe.actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    zIndex: 1000,
    backgroundColor: "#fafafa",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    padding: "15px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    position: "absolute",
    right: 0,
  },
  wrap: {
    margin: theme.spacing(1),
  },

  input: {
    display: "none",
  },
}));

const NewRecipe = ({ closeModal, onCreate }) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleImage = (event) => {
    setImage(event.target.value);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const setValue = (event) => {
    setDescription(event.target.value);
  };
  const onSubmit = () => {
    onCreate(title, description, image);
    closeModal();
  };

  const classes = useStyles();

  return (
    <Container component="div">
      <CssBaseline />

      <div className={classes.paper}>
        <CloseIcon className={classes.icon} onClick={closeModal} />

        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoFocus
            onChange={(event) => handleChange(event)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            type="description"
            id="description"
            onChange={(event) => setValue(event)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="images"
            label="image url"
            type="images"
            id="images"
            onChange={(event) => handleImage(event)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Add Recipe
          </Button>
        </form>
      </div>
    </Container>
  );
};

const mapDispatch = {
  crateRecipe: createRecipe,
};

NewRecipe.propTypes = {
  closeModal: PropTypes.func.isRequired,
  createRecipe: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(NewRecipe);
