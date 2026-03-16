import type { CareerType } from "@/types";
import {
  Badge,
  Box,
  Flex,
  Grid,
  Link,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

type CareerItemProps = {
  career: CareerType;
};

export default function CareerItem({ career }: CareerItemProps) {
  const panelBg = useColorModeValue("whiteAlpha.800", "whiteAlpha.050");
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.140");
  const metaBg = useColorModeValue("blackAlpha.50", "whiteAlpha.080");
  const mutedColor = useColorModeValue("ink.500", "whiteAlpha.640");
  const descriptionColor = useColorModeValue("ink.700", "whiteAlpha.760");
  const titleColor = useColorModeValue("ink.900", "whiteAlpha.940");

  const currentMatch = career.date.match(/\s*-\s*([^\d]+)\s*$/);
  const currentLabel = currentMatch?.[1].trim();
  const dateLabel = currentMatch ? career.date.slice(0, currentMatch.index).trim() : career.date;

  const titleContent = (
    <Text
      fontWeight={700}
      fontSize={{ base: "lg", md: "xl" }}
      letterSpacing="-0.02em"
      color={titleColor}>
      {career.title}
    </Text>
  );

  return (
    <ListItem>
      <Grid
        templateColumns={{ base: "1fr", md: "168px minmax(0, 1fr)" }}
        gap={{ base: 3, md: 6 }}
        alignItems="start">
        <Flex
          wrap="wrap"
          align="center"
          gap={2}
          fontSize="xs"
          fontWeight={700}
          letterSpacing="0.18em"
          textTransform="uppercase"
          color={mutedColor}
          pt={{ base: 0, md: 4 }}>
          <Text whiteSpace="nowrap">{dateLabel}</Text>
          {currentLabel && (
            <Badge
              px={2.5}
              py={1}
              borderRadius="full"
              bg="brand.600"
              color="white"
              letterSpacing="0.12em">
              {currentLabel}
            </Badge>
          )}
        </Flex>

        <Box
          minW={0}
          p={{ base: 4, md: 5 }}
          borderRadius="2xl"
          borderWidth="1px"
          borderColor={borderColor}
          bg={panelBg}>
          <Flex direction="column" gap={3}>
            {career.url ? (
              <Link as={NextLink} href={career.url} isExternal _hover={{ color: "brand.600" }}>
                {titleContent}
              </Link>
            ) : (
              titleContent
            )}

            {(career.role || career.location) && (
              <Flex wrap="wrap" align="center" gap={2}>
                {career.role && (
                  <Text fontSize="sm" fontStyle="italic" color={mutedColor}>
                    {career.role}
                  </Text>
                )}
                {career.location && (
                  <Badge
                    px={2.5}
                    py={1}
                    borderRadius="full"
                    bg={metaBg}
                    borderWidth="1px"
                    borderColor={borderColor}
                    color={mutedColor}
                    textTransform="none">
                    {career.location}
                  </Badge>
                )}
              </Flex>
            )}

            {career.description && (
              <Text fontSize="sm" lineHeight={1.8} color={descriptionColor}>
                {career.description}
              </Text>
            )}
          </Flex>
        </Box>
      </Grid>
    </ListItem>
  );
}
