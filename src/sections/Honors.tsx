import { CareerItem, SectionTitle } from "@/components";
import { honors } from "@/data/honors";
import { Flex, List } from "@chakra-ui/react";
import type { PropsWithRef } from "react";

export default function Honors({ locale, ...rest }: PropsWithRef<FlexWithLanguageProps>) {
  const hos = honors[locale as Language] as CareerType[];

  return (
    <Flex gap={5} direction="column" w="full" {...rest}>
      <SectionTitle
        eyebrow="Recognition"
        title="Honors & Awards"
        description="Scholarships, fellowships, competition results, and invited recognitions."
      />
      <List gap={4} display="flex" flexDir="column">
        {hos.map((award, index) => (
          <CareerItem career={award} key={`award${index}`} />
        ))}
      </List>
    </Flex>
  );
}
