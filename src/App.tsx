import { Layout } from "./components";
import { Content } from "./components/Content";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Content>
          <Form />
        </Content>
      </Layout>
    </>
  );
}

export default App;
