import { CareerItem, SectionTitle } from "@/components";
import { educations } from "@/data";
import { Flex, List } from "@chakra-ui/react";
import type { PropsWithRef } from "react";

export default function Educations({ locale, ...rest }: PropsWithRef<FlexWithLanguageProps>) {
  const edus = educations[locale] as CareerType[];

  return (
    <Flex gap={5} direction="column" w="full" {...rest}>
      <SectionTitle
        eyebrow="Background"
        title="Education"
        description="Academic training and research foundations across artificial intelligence and software."
      />
      <List gap={4} display="flex" flexDir="column">
        {edus.map((education, index) => (
          <CareerItem career={education} key={`edu${index}`} />
        ))}
      </List>
    </Flex>
  );
}
