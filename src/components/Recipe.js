import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import EditRecipe from "./EditRecipe";

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

const Recipe = ({ recipe, onEdit, onDelete }) => {
  const [openModal, setModal] = useState(false);
  const [recipeId, setId] = useState();

  const closeModal = () => {
    setModal(false);
  };
  const handleClick = (dataId) => {
    setModal(true);
    setId(dataId);
  };
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
        {openModal && (
          <EditRecipe closeModal={closeModal} onEdit={onEdit} id={recipeId} />
        )}
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
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => onDelete(card.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleClick(card.id)}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default Recipe;
