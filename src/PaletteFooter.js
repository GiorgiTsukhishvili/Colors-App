import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles/PaletteFooter";

function PaletteFooter(props) {
  const { classes } = props;
  return <footer className={classes.PaletteFooter}>{props.paletteName}</footer>;
}

export default withStyles(styles)(PaletteFooter);
