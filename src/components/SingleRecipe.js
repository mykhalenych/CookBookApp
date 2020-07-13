import React, { useState, useEffect } from "react";
import { ArrowBack } from "@material-ui/icons";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@material-ui/core";
import {
  getSingleRecipeSelector,
  recipeHistorySelector,
} from "../redux/recipe.selectors";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../redux/recipe.actions";
import { connect } from "react-redux";
import EditRecipe from "./EditRecipe";
import { Link, useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  flex: {
    display: "flex",
  },
  content: {
    display: "contents",
  },
}));

const SingleRecipe = ({
  getReicepeListById,
  currentRecipe,
  updateRecipe,
  deleteRecipe,
  history,
  updateHistoryRecipe,
}) => {
  const [openModal, setModal] = useState(false);
  const { id } = useParams();
  let routerHistory = useHistory();

  useEffect(() => {
    getReicepeListById(id);
  }, [history, currentRecipe]);

  const closeModal = () => {
    setModal(false);
  };

  const onDelete = (id) => {
    deleteRecipe(id);
    routerHistory.push("/");
  };
  const classes = useStyles();
  if (!currentRecipe) {
    return <div>Recipes not found</div>;
  }
  return (
    <div className={classes.flex}>
      <Link to="/">
        <ArrowBack>Go Back</ArrowBack>
      </Link>
      <div className={classes.content}>
        <Container maxWidth="sm">
          {openModal && (
            <EditRecipe
              closeModal={closeModal}
              onEdit={updateRecipe}
              editHistory={updateHistoryRecipe}
              id={id}
              currentRecipe={currentRecipe}
            />
          )}
          <h3>Recipe</h3>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={currentRecipe.image}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {currentRecipe.title}
              </Typography>
              <Typography>{currentRecipe.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => onDelete(id)}>
                Delete
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => setModal(true)}
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        </Container>
      </div>
      {!history.historyVersion ? (
        <div>No History</div>
      ) : (
        <div className={classes.content}>
          <Container maxWidth="sm">
            <h3>History</h3>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={history.historyVersion.image}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {history.historyVersion.title}
                </Typography>
                <Typography>{history.historyVersion.description}</Typography>
              </CardContent>
            </Card>
          </Container>
        </div>
      )}
    </div>
  );
};

const mapDispatch = {
  getReicepeListById: actions.getReicepeListById,
  updateRecipe: actions.updateRecipe,
  deleteRecipe: actions.deleteRecipe,
  updateHistoryRecipe: actions.editHistory,
};
const mapState = (state) => {
  return {
    currentRecipe: getSingleRecipeSelector(state),
    history: recipeHistorySelector(state),
  };
};
export default connect(mapState, mapDispatch)(SingleRecipe);
