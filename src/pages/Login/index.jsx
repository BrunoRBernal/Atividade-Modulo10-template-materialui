import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Login = () => {
  const [login, setLogin] = useState('');
  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Login"
          subheader="Página de Login"
        />
        <CardContent sx={{
          width: '95%',
          maxWidth: '100%',
        }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
              <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
            </FormControl>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default Login;