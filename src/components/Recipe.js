import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { recipeListSelector } from "../redux/recipe.selectors";
import * as actions from "../redux/recipe.actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
}));

const Recipe = ({ recipe, getRecipeList }) => {
  useEffect(() => {
    getRecipeList();
  }, []);

  const classes = useStyles();
  if (!recipe) {
    return (
      <Grid container spacing={4}>
        Recipes not found
      </Grid>
    );
  }
  return (
    <>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          {recipe.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/${card.id}`}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.array,
  deleteRecipe: PropTypes.func,
  updateRecipe: PropTypes.func,
};

const mapDispatch = {
  getRecipeList: actions.getRecipeList,
};
const mapState = (state) => {
  return {
    recipe: recipeListSelector(state),
  };
};
export default connect(mapState, mapDispatch)(Recipe);
