import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  const eyebrowColor = useColorModeValue("brand.600", "brand.200");
  const descriptionColor = useColorModeValue("ink.600", "whiteAlpha.760");

  return (
    <Flex direction="column" gap={2}>
      <Text
        fontSize="9px"
        fontWeight={800}
        letterSpacing="0.18em"
        textTransform="uppercase"
        color={eyebrowColor}>
        {eyebrow}
      </Text>
      <Heading as="h2" fontSize={{ base: "lg", md: "2xl" }}>
        {title}
      </Heading>
      {description && (
        <Text
          maxW="2xl"
          fontSize={{ base: "0.72rem", md: "md" }}
          lineHeight={{ base: 1.62, md: 1.8 }}
          color={descriptionColor}>
          {description}
        </Text>
      )}
    </Flex>
  );
}
