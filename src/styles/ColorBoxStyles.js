import chroma from "chroma-js";

export default {
  ColorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
    },
  },

  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    background: "rgba(128, 128, 128, 0.3)",
    border: "none",
    position: "absolute",
    bottom: "0",
    right: "0",

    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },

  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",

    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    cursor: "pointer",
    opacity: "0",
  },

  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },

  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.4s ease-in-out",
    transform: "scale(0.1)",
  },

  showOverlay: {
    opacity: "1",
    transform: "scale(10)",
    zIndex: "10",
    position: "absolute",
  },

  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    flexDirection: "column",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",

    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(128, 128, 128, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
    },

    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },

  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "All 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
};
