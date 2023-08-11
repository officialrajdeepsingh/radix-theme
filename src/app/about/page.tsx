import { Box, Container, Heading, Text } from "@radix-ui/themes";
export default function Home() {
  return (
    <>
      <Box
        my={"7"}
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
        }}
      >
        <Container py={"6"}>
          <Box py="9">
            <Heading mb={"4"} size={"9"}>About us</Heading>
            <Text as="p" size={"4"}>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet.
            </Text>
          </Box>
        </Container>
      </Box>
      <Container>
        <Text mt={"7"} as="p" size="3">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident.
        </Text>
        <Text mt={"7"} as="p" size="3">
          Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt
          ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
          cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi
          laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
          commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint
          cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </Text>
      </Container>
    </>
  );
}
