import {
  AspectRatio,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Inset,
  Text
} from "@radix-ui/themes";
import Image from "next/image";
export function ImageCard(
  { variant }: { variant: "ghost" | "classic" | "surface" },
) {
  return (
    <Card variant={variant} my={"8"} size="3">
      <Flex direction={"column"} justify={"center"}>
        <Box>
          <Inset side="top" p="0">
            <AspectRatio ratio={16 / 8}>
              <Image
                src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
                alt="A house in a forest"
                width={724}
                height={500}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  padding: "1px",
                  borderRadius: "var(--radius-2)",
                }}
              />
            </AspectRatio>
          </Inset>
        </Box>

        <Box mt={"4"}>
          <Heading as="h2" color="gray" mb="1" size="5">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cupidatat.
          </Heading>
          <Text as="p" size="2">
            Qui minim labore adipisicing minim sint cupidatat
          </Text>
          <Button mt={"4"} size={"2"}>
            Read More
          </Button>
        </Box>
      </Flex>
    </Card>
  );
}
