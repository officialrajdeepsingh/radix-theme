import {
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
export  function BlogCard({variant}:{variant:"ghost"| "classic"|"surface"}) {
  return (
      <Card my={"9"} variant={variant} size="3">
        <Flex gap={"5"} align={"start"} shrink={"1"} justify={"center"} direction={"column"}>
          
            <Heading as="h2" color="gray" mb="1" size="5">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cupidatat.
            </Heading>
            <Text as="p" size="2">
              Qui minim labore adipisicing minim sint cupidatat
            </Text>
            <Button  size={"2"}>
              Read More
            </Button>

        </Flex>
      </Card>
  );
}
