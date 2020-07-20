import React, { useState } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  editor: {
   marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    zIndex: 1000,
    backgroundColor: "#fafafa",
    top: 100,
  },
  textfield: {
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
  }
}));
const EditRecipe = ({ closeModal, onEdit, id, editHistory, currentRecipe }) => {
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
    const edit = {
      image,
      title,
      description,
    };
    onEdit(id, edit);
    editHistory(id, edit);
    closeModal();
  };

  const classes = useStyles();
  return (
    <div className={classes.editor}>
      <CloseIcon className={classes.icon} onClick={closeModal} />

      <form className={classes.textfield}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoFocus
          defaultValue={currentRecipe.title}
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
          defaultValue={currentRecipe.description}
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
          defaultValue={currentRecipe.image}
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
          Edit Recipe
        </Button>
      </form>
    </div>
  );
};

export default EditRecipe;
