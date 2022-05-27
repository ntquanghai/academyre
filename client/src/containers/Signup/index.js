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
import AuthContext from "../../context/auth/AuthContext";
import { signup } from "../../context/auth/AuthReducer";
import { FormControl } from "@mui/material";
import { Navigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Academyre
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { state, dispatch } = React.useContext(AuthContext);
  const { loading, error, isAuthenticated } = state;

  const onChangeFullname = (e) => {
    setFullName(fullName);
  };
  const onChangeEmail = (e) => {
    setEmail(email);
  };
  const onChangePassword = (e) => {
    setPassword(password);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const submitValues = {
      fullName: fullName,
      email: email,
      password: password,
    };
    console.log(submitValues);
    signup(submitValues, dispatch);
  };

  React.useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  if (isAuthenticated) {
    console.log("hello");
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
              src="\logo-removebg-preview.png"
              alt=""
            />
          </React.Fragment>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <FormControl
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                  onChange={onChangeFullname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChangePassword}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <ButtonPrimary
              type="submit"
              className="bg-blue-400 font-bold my-2"
              variant="contained"
              fullWidth
            >
              Sign Up
            </ButtonPrimary>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </FormControl>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
