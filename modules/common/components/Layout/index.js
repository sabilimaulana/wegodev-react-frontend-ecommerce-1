import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  content: {
    marginTop: 74,
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;
