import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import avaImage from "@/assets/ava.jpg";
import { rem } from "polished";

export function Hero() {
  return (
    <Box
      display="flex"
      minH={rem(400)}
      maxH={rem(1000)}
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex direction="column" alignItems="center" textAlign="center" px={4}>
        <Box
          w={rem(64)}
          h={rem(64)}
          overflow="hidden"
          borderRadius="full"
          position="relative"
          mb={4}
        >
          <Image
            src={avaImage}
            alt="Artyom Kuzkov"
            placeholder="blur"
            priority
            style={{
              objectPosition: "center",
              objectFit: "cover",
            }}
            fill
          />
        </Box>
        <Text mb={1}>Hi, I’m Artyom Kuzkov and I’m</Text>
        <Heading size="3xl" mb={4}>
          Frontend Developer
        </Heading>
        <Text maxW={rem(500)} mb={10}>
          I’m from Belarus and I have been working as a Frontend Developer for
          more than 2 years.
        </Text>
        <HStack spacing={2}>
          <Button colorScheme="purple" borderRadius="full">
            Hire me
          </Button>
          <Button
            as="a"
            colorScheme="purple"
            variant="ghost"
            borderRadius="full"
            href="/resume.pdf"
            target="_blank"
          >
            Download CV
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
