import { Container } from "@material-ui/core";
import { Header } from "components/header";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg" className="container-main">
        {children}
      </Container>
    </>
  );
}

export { AppLayout };
