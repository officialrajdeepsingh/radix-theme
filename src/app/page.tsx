import { Button,Text, Flex, Code } from '@radix-ui/themes'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
<Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
      <Flex direction="column" gap="3" align="start">
  <Code size="9">
{`<Box width="9" height="9">
  <DecorativeBox />
</Box>`}
  </Code>
  <Code size="8">console.log()</Code>
  <Code size="7">console.log()</Code>
  <Code size="6">console.log()</Code>
  <Code size="5">console.log()</Code>
  <Code size="4">console.log()</Code>
  <Code size="3">console.log()</Code>
  <Code size="2">console.log()</Code>
  <Code size="1">console.log()</Code>
</Flex>
    </main>
  )
}
