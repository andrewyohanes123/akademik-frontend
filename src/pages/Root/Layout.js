import { Box, Container } from "components";
import Footer from "./Footer";
import Header from "./Header";
import Router from "./Router";
import Sidemenu from "./Sidemenu";

const Layout = () => {
  return (
    <Box sx={{
      height: "100%",
      width: "100%",
      bg: "gray.1"
    }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10
        }}
      >
        <Header />
      </Box>
      <Container
        sx={{
          display: "flex",
          pt: "50px",
          height: "100%"
        }}
      >
        <Box sx={{
          width: 180,
          flexShrink: 0,
          borderRightColor: "gray.3",
          borderRightWidth: 1,
          borderRightStyle: "solid",
        }}>
          <Sidemenu />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Router />
        </Box>
      </Container>
      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout;