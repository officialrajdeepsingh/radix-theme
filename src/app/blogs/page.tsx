import { BlogCard } from "@/components/Card/Card";
import { Container } from "@radix-ui/themes";
export default function Blogs() {
  return (
    <Container p={"5"} my={"9"}>
      <BlogCard variant="classic" />
      <BlogCard variant="ghost" />
      <BlogCard variant="surface" />
    </Container>
  );
}
