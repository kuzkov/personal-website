import { Flex, Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import fbkLogo from "./fbk-logo.svg";
import acLogo from "./alignedcode-logo.svg";
import { rem } from "polished";

const works = [
  {
    CompanyLogoIcon: acLogo,
    title: "Frontend Developer at Aligned Code",
    location: "Minsk",
    time: "August 2020 — August 2021",
    description:
      "The main task was to develop the viju smart tv application for viasat. Development for TVs is quite a complicated and interesting task, requiring knowledge of many nuances of the TV. The work was held in a large team consisting of the backend, design, web and smart tv teams.",
    responsibilities: [
      "Development of Smart TV app for video-on-demand service with Angular framework.",
      "Negotiating with team members, customer, design and backend team",
      "Working with Agile Scrum processes",
      "Performing code review for teammates",
    ],
    technologies: [
      "Typescript and Javascript (es6+)",
      "Angular 2+",
      "ReactJS",
      "Jest/Jasmine/Karma",
      "Axios",
    ],
  },
  {
    CompanyLogoIcon: fbkLogo,
    title: "Frontend Developer at Anti-corruption foundation",
    location: "Vilnius",
    time: "June 2021 — Present",
    description:
      "The main task was to develop websites and web applications. As a key developer in the frontend team, I was responsible for interviewing newbies, choosing the tech stack and supervising the development of projects.",
    responsibilities: [
      "Acting as a key developer and team lead for team members",
      "Interviewing new resources",
      "Meeting with clients to determine requirements",
      "Customizing and developing UI component library",
      "Implementing a11y in projects",
      "Implementing i18n in projects",
      "Developing custom plugins for Strapi framework & working on EditorJS integration in Strapi",
      "Implementing donate widgets, working with Stripe payment system",
      "Working with google maps API",
    ],
    technologies: [
      "Typescript",
      "React 18+",
      "Next.js",
      "i18next",
      "Strapi",
      "Stripe.js",
    ],
  },
];

export function WorkExperience() {
  return (
    <Box bg="gray.100" py={[10, 10, 16]}>
      <Container maxW="3xl">
        <Heading size="xl" mb={8}>
          My work experience
        </Heading>

        {works.map(
          (
            {
              title,
              location,
              time,
              description,
              CompanyLogoIcon,
              responsibilities,
              technologies,
            },
            index
          ) => (
            <Box mb={12} key={index}>
              <Flex alignItems="center" mb={4}>
                <Box flexShrink={0} w={rem(24)} h={rem(24)} mr={[2, 2, 4]}>
                  <CompanyLogoIcon />
                </Box>
                <Box>
                  <Heading size="md">
                    {title}, {location}
                  </Heading>
                  <Text>{time}</Text>
                </Box>
              </Flex>

              {description && <Text>{description}</Text>}

              {/* {responsibilities?.length && (
                <>
                  <Heading size="sm" mb={2}>
                    Main responsibilities
                  </Heading>
                  <UnorderedList mb={4}>
                    {responsibilities.map((responsibility, index) => (
                      <ListItem key={index}>{responsibility}</ListItem>
                    ))}
                  </UnorderedList>
                </>
              )}
              {technologies?.length && (
                <>
                  <Heading size="sm" mb={2}>
                    Technologies
                  </Heading>
                  <Text>{technologies.join(", ")}</Text>
                </>
              )} */}
            </Box>
          )
        )}
      </Container>
    </Box>
  );
}
