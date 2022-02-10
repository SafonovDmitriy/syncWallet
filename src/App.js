import { Box } from "@material-ui/core";
import useStyles from "./AppStyles";
import { Header } from "./components/Header";
import { MessageBox } from "./components/MessageBox";
import { Routers } from "./components/Routers";

const App = () => {
  const classes = useStyles();

  return (
    <Box className={classes.app_wrapper}>
      <Header />
      <MessageBox />
      <Routers />
    </Box>
  );
};

export default App;
