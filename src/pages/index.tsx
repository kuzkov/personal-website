import { Navbar } from "@/components";
import { Hero, WorkExperience } from "@/screens";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <WorkExperience />
    </Box>
  );
}
