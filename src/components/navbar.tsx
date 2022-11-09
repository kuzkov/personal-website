import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

export function Navbar() {
  return (
    <Box position="absolute" top={0} left={0} right={0} py={2}>
      <Container maxW="3xl">
        <Flex>{/* <Text>kuzkov</Text> */}</Flex>
      </Container>
    </Box>
  );
}
