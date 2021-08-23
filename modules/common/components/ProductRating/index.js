import PropTypes from "prop-types";
import clsx from "clsx";

import { Grid, Typography } from "@material-ui/core";
import { Star, StarHalf } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    justifyContent: "flex-end",
  },
});

const ProductRating = ({ rating, sold, alignRight }) => {
  const starComponents = [];

  const modulus = rating % 1;
  const ratingCountFloored = Math.floor(rating);

  for (let i = 0; i < ratingCountFloored; i++) {
    starComponents.push(
      <Star key={i} style={{ fontSize: 12, color: yellow[800] }} />
    );
  }

  if (modulus >= 0.5) {
    starComponents.push(
      <StarHalf
        key={"hald-start"}
        style={{ fontSize: 12, color: yellow[800] }}
      />
    );
  }

  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      className={clsx({ [classes.root]: alignRight })}
    >
      {starComponents}
      <Typography variant="caption">{`(${sold})`}</Typography>
    </Grid>
  );
};
ProductRating.propTypes = {
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  alignRight: PropTypes.bool,
};

export default ProductRating;
