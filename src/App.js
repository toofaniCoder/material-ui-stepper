import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
