import logo from "./logo.svg";
import "./App.css";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { responsiveFontSizes } from "@material-ui/core";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" style={{ margin: "1rem auto" }}>
          <Grid
            container
            justifyContent="flex-start"
            direction="column"
            alignItems="center"
          >
            <Typography
              variant="h2"
              color="primary"
              style={{ margin: "1rem 0" }}
            >
              React Forms
            </Typography>
            <Form></Form>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
let theme = createTheme({
  typography: {
    fontFamily: "Gemunu Libre",
  },
});
theme = responsiveFontSizes(theme);
export default App;
