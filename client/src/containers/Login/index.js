import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ButtonPrimary from "../../components/Button";
import { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext"
import { login } from "../../context/auth/AuthReducer";
import { Navigate } from "react-router-dom";
import { FormControl } from "@mui/material";
export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Academyre
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const { loading, error, isAuthenticated } = state;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onLogin = async (e) => {
    e.preventDefault();
    const submitValues = {
      email: email,
      password: password,
    };
    console.log(submitValues);
    login(submitValues, dispatch);
  };

  React.useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  if (isAuthenticated) {
    console.log("hello");
    sessionStorage.setItem("isAuth",isAuthenticated)
    return <Navigate to="/" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className="" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <React.Fragment>
            <img
              className="mx-4 w-20 h-20"
              src="./logo-removebg-preview.png"
              alt=""
            />
          </React.Fragment>
          <Typography component="h1" variant="h5">
            Welcome to Academyre
          </Typography>
          <FormControl
            component="form"
            onSubmit={onLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChangeEmail}
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={onChangePassword}
              value={password}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ButtonPrimary
              type="submit"
              className="bg-blue-400 font-bold my-2"
              variant="contained"
              fullWidth
            >
              Sign In
            </ButtonPrimary>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link className = "ml-4" href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </FormControl>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
