import { Box, Container, Flex } from "components";
import { useMemo } from "react";
import pjson from "../../../package.json";

const Footer = () => {
  const version = useMemo(() => {
    return pjson.version;
  }, []);
  return (
    <Container>
      <Box
        sx={{
          borderTopColor: "gray.3",
          borderTopWidth: 1,
          borderTopStyle: "solid",
          py: 4,
        }}
      >
        <Flex>
          <Box>© 2021 Pi Laboratory, Inc.</Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>App ver. {version}</Box>
        </Flex>
      </Box>
    </Container>
  );
}

export default Footer;