import { TextField } from "@mui/material";
import { Layout } from "./components";
import { Content } from "./components/Content";

function App() {
  return (
    <Layout>
      <Content>
        <TextField
          id="outlined-basic"
          label="Enter a location"
          variant="outlined"
        />
      </Content>
    </Layout>
  );
}

export default App;
