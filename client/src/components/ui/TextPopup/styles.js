import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "5px"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "blue",
      outline: "4px solid blue"
    }
  },
  textPopupMain: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    height: "100vh",
    width: "100vw",
    position: "absolute",
    zIndex: "99999",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textPopupSecond: {
    backgroundColor: "#ffffff",
    maxHeight: "520px",
    width: "600px",
    borderRadius: "3px",
    paddingBottom: "10px"
  },
  textPopupImg: {
    marginTop: "5%",
    marginLeft: "93%",
    marginBottom: "1.5%",
    cursor: "pointer"
  },
  textPopupHead: {
    textAlign: "center",
    padding: 0,
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "500"
  },
  textPopupContent: {
    maxHeight: "400px",
    overflowY: "auto",
    padding: "20px",
    textAlign: "justify"
  }
}));
