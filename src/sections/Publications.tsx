import { PubItem, SectionTitle } from "@/components";
import { publications } from "@/data/publications";
import { Flex, List } from "@chakra-ui/react";
import type { PropsWithRef } from "react";

export default function Publications({
  locale: _locale,
  ...rest
}: PropsWithRef<FlexWithLanguageProps>) {
  return (
    <Flex gap={5} direction="column" w="full" {...rest}>
      <SectionTitle
        eyebrow="Research Output"
        title="Publications"
        description="Peer-reviewed work spanning segmentation, continual learning, and partially relevant video retrieval."
      />
      <List gap={4} display="flex" flexDir="column">
        {publications.map((pub, index) => (
          <PubItem pub={pub} key={`pub${index}`} />
        ))}
      </List>
    </Flex>
  );
}
