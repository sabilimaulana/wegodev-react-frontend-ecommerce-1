import Link from "next/link";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 360,
  },
  image: {
    height: 140,
  },
  price: {
    lineHeight: "normal",
  },
});

const ProductCard = ({
  img,
  title,
  promoLabel,
  price,
  rating,
  sold,
  productID,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <div className={classes.card}>
        <CardMedia className={classes.image} image={img} title={title} />
        <CardContent>
          <Grid container direction="column">
            <Typography gutterBottom variant="subtitle2" component="h2">
              {title}
            </Typography>

            <Typography variant="overline" className={classes.price}>
              {price}
            </Typography>
          </Grid>
        </CardContent>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  promoLabel: PropTypes.array,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  sold: PropTypes.number,
  productID: PropTypes.number.isRequired,
};

export default ProductCard;
