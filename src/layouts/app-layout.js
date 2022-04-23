import { Container } from "@material-ui/core";
import { Header } from "components/header";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      <Container className="container-main-width app-body">
        {children}
      </Container>
    </>
  );
}

export { AppLayout };
