import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import NewRecipe from "./NewRecipe";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Header = ({ onCreate }) => {
  const [modal, setModal] = useState(false);

  const classes = useStyles();
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <AddIcon className={classes.icon} onClick={() => setModal(true)} />
          <Typography variant="h6" color="inherit" noWrap>
            Add new recipe
          </Typography>
        </Toolbar>
      </AppBar>
      {modal && <NewRecipe closeModal={closeModal} onCreate={onCreate} />}
    </>
  );
};

export default Header;
