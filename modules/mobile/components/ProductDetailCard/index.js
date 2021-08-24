import PropTypes from "prop-types";
import clsx from "clsx";

import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

const ProductDetailCard = ({
  img,
  title,
  price,
  rating,
  sold,
  description,
  quantity,
  condition,
  weight,
  promo,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card>
        <CardMedia className={classes.media} image={img} title={title} />

        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

ProductDetailCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  promo: PropTypes.array.isRequired,
};

export default ProductDetailCard;
