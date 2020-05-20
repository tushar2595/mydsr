import React from 'react';
import TextField from '@material-ui/core/TextField';
const CustomInput = (props) => {
  return (
    <div>
      <TextField
        id="outlined-secondary"
        label={props.label}
        variant="outlined"
        color="secondary"
        onChange={props.onChange}
      />
    </div>
  )
}
export default CustomInput;