import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(4),
    },
    inputs: {
      marginTop: theme.spacing(1),
      background: "#fbfbfb",
      "& .MuiFilledInput-input": {
        background: "#fbfbfb",
      },
    },
    titleWrapper: {
      display: "flex",
      flexDirection: "column",
    },
    mainTitle: {
      margin: theme.spacing(2, "auto"),
    },
    titleContent: {
      background: "#fbfbfb",
      padding: 10,
      borderRadius: 8,
      width: 200,
      marginBottom: 8,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));