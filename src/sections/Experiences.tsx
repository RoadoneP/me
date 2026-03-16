import { CareerItem, SectionTitle } from "@/components";
import { experiences } from "@/data";
import { Flex, List } from "@chakra-ui/react";
import type { PropsWithRef } from "react";

export default function Experiences({ locale, ...rest }: PropsWithRef<FlexWithLanguageProps>) {
  const exps = experiences[locale] as CareerType[];

  return (
    <Flex gap={5} direction="column" w="full" {...rest}>
      <SectionTitle
        eyebrow="Practice"
        title="Experience"
        description="Research, industry collaborations, and project work across academic and applied settings."
      />
      <List gap={4} display="flex" flexDir="column">
        {exps.map((experience, index) => (
          <CareerItem career={experience} key={`exp${index}`} />
        ))}
      </List>
    </Flex>
  );
}
