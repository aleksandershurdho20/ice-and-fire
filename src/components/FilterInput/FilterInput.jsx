import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
export default function FilterInput({ onChange, value, placeholder }) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        placeholder={placeholder}
        size="small"
        value={value}
        onChange={onChange}
        variant="outlined"
        className={classes.root}
      />
    </div>
  );
}
