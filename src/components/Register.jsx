import React, { useState } from 'react';
import {
  TextField, Button,
  FormControlLabel, Checkbox, makeStyles,
  FormControl, InputLabel, Select, MenuItem,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Lock } from '../assets/images/lock.svg';
import '../assets/styles/Register.scss';

const useStyles = makeStyles(() => ({
  formControl: {
    margin: '8px 0',
    minWidth: 120,
  },
}));

export default function Register() {
  const classes = useStyles();
  const [schedule, setSchedule] = useState();
  const [checked, setChecked] = useState(false);
  const [letnum, setLetnum] = useState(0);
  const [classError, setClassError] = useState(false);
  const [slug, setSlug] = useState('');
  const history = useHistory();

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleDescription = (event) => {
    const desc = event.target.value;
    setLetnum(desc.length);
    if (desc.length > 300) {
      setClassError(true);
    }
    if (classError && desc.length <= 300) {
      setClassError(false);
    }
  };

  const handleSelect = (event) => {
    setSchedule(event.target.value);
  };

  const handleSlug = (event) => {
    setSlug(event.target.value);
  };

  return (
    <div className="Register">
      <form>
        <div className="form-title">
          <Lock />
          <h3>Sign up</h3>
        </div>
        <TextField id="outlined-basic" label="Full name *" variant="outlined" />
        <TextField id="outlined-basic" label="Email Adress *" variant="outlined" />
        <TextField type="password" id="outlined-basic" label="Password *" variant="outlined" />
        <TextField type="password" id="outlined-basic" label="Password Confirmation *" variant="outlined" />
        <FormControlLabel
          control={(
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
        )}
          label="Public*"
        />
        <span className="more-info">If Publick is checked, other users will be able to see your description and shcedule.</span>
        <TextField onChange={handleDescription} id="outlined-basic" label="Description" variant="outlined" error={classError} multiline />
        <span className={`leter-counter ${classError ? 'danger' : ''}`}>{`${letnum}/300`}</span>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Schedule *</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={schedule}
            onChange={handleSelect}
            label="Age"
          >
            <MenuItem value={10}>Weekdays - All day</MenuItem>
            <MenuItem value={20}>Weekdays - Only Afternoon</MenuItem>
            <MenuItem value={30}>Weekends - Limited schedule</MenuItem>
          </Select>
        </FormControl>
        <TextField onChange={handleSlug} id="outlined-basic" label="Slug *" variant="outlined" />
        <span>{`www.symbud.com/bud/${slug}`}</span>
        <Button color="primary" variant="contained">Sign up</Button>
      </form>
      <div className="form-extra">
        <button onClick={() => history.push('/login')} type="button" className="btn">Already have an account? Sign up.</button>
      </div>
    </div>
  );
}
