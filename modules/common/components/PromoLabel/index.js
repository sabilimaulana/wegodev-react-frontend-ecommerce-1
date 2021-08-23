import { Grid, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  label: {
    fontSize: 10,
    fontWeight: 900,
    paddingLeft: "0 !important",
  },
});

const PromoLabel = ({ promoLabel }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      {promoLabel.length > 0 &&
        promoLabel.map((label, index) => {
          return (
            <Grid item key={label + index}>
              <Chip
                color="secondary"
                size="small"
                label={label.toLowerCase()}
                className={classes.label}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

PromoLabel.propTypes = {
  promoLabel: PropTypes.array,
};

export default PromoLabel;
