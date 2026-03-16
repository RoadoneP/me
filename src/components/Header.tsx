import Card from "@/components/Card";
import SocialButton from "@/components/SocialButton";
import { socials } from "@/data";
import projects from "@/data/projects";
import { visiblePublications } from "@/data/publications";
import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Header({
  aboutData,
  locale,
}: {
  aboutData: AboutType;
  locale: Language;
}) {
  const subheadingColor = useColorModeValue("ink.600", "whiteAlpha.760");
  const statSurface = useColorModeValue("whiteAlpha.800", "whiteAlpha.060");
  const statBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.140");
  const focusAreas = ["Segmentation", "Adaptation", "Video Understanding"];
  const stats = [
    {
      label: "Pubs",
      value: String(visiblePublications.length).padStart(2, "0"),
    },
    {
      label: "Projects",
      value: String(projects[locale].length).padStart(2, "0"),
    },
  ];

  return (
    <Card position="relative" overflow="hidden" p={{ base: 5, md: 7 }} gap={{ base: 6, md: 8 }}>
      <Box
        position="absolute"
        top="-24"
        right="-24"
        w="14rem"
        h="14rem"
        borderRadius="full"
        bg="brand.200"
        opacity={0.35}
        filter="blur(60px)"
      />
      <Flex direction="column" gap={{ base: 5, md: 7 }}>
        <Box
          w={{ base: "120px", sm: "150px", md: "180px" }}
          maxW="40%"
          alignSelf={{ base: "flex-end", sm: "flex-start" }}>
          <Box position="relative">
            <Box
              position="absolute"
              inset="0.5rem"
              borderRadius="28px"
              bg="linear-gradient(135deg, rgba(29, 143, 204, 0.45), rgba(163, 133, 84, 0.32))"
              transform="rotate(-6deg)"
            />
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="28px"
              borderWidth="1px"
              borderColor={statBorder}
              bg={statSurface}>
              <Image
                width={720}
                height={900}
                src={aboutData.profileImage}
                alt={`Profile Image of ${aboutData.name}`}
                placeholder="blur"
                priority
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Flex flex="1" direction="column" gap={{ base: 6, md: 7 }}>
          <Flex direction="column" gap={4}>
            <Text
              fontSize="xs"
              fontWeight={800}
              letterSpacing="0.24em"
              textTransform="uppercase"
              color="brand.600">
              Visual AI Research
            </Text>
            <Flex direction="column" gap={3}>
              <Badge
                w="fit-content"
                px={3}
                py={1}
                borderRadius="full"
                colorScheme="brand"
                fontSize="0.7rem"
                textTransform="none">
                {aboutData.description}
              </Badge>
              <Heading as="h1" fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}>
                {aboutData.name}
              </Heading>
              <Text
                maxW={{ base: "100%", md: "32rem" }}
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                lineHeight={{ base: 1.7, md: 1.8 }}
                color={subheadingColor}>
                Ph.D. student at Sungkyunkwan University researching segmentation, adaptation,
                and video understanding for computer vision systems.
              </Text>
            </Flex>
            <Flex wrap="wrap" gap={2}>
              {focusAreas.map(area => (
                <Badge
                  key={area}
                  px={3}
                  py={1.5}
                  borderRadius="full"
                  bg={statSurface}
                  borderWidth="1px"
                  borderColor={statBorder}
                  color="inherit"
                  textTransform="none"
                  fontSize="0.75rem">
                  {area}
                </Badge>
              ))}
            </Flex>
          </Flex>

          <List display="flex" flexWrap="wrap" gap={2.5}>
            {socials.map(social => (
              <SocialButton key={social.href} {...social} />
            ))}
          </List>

          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
            }}
            gap={3}>
            {stats.map(stat => (
              <GridItem
                key={stat.label}
                p={4}
                borderRadius="2xl"
                borderWidth="1px"
                borderColor={statBorder}
                bg={statSurface}>
                <Text
                  fontSize="xs"
                  fontWeight={700}
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                  color="brand.600"
                  whiteSpace="nowrap">
                  {stat.label}
                </Text>
                <Text
                  mt={2}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight={800}
                  letterSpacing="-0.04em"
                  whiteSpace="nowrap">
                  {stat.value}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Card>
  );
}
