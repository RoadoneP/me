import Card from "@/components/Card";
import type { ProjectType } from "@/types";
import { Badge, Box, Flex, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({
  item,
  featured = false,
}: {
  item: ProjectType;
  featured?: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const surface = useColorModeValue("rgba(255, 255, 255, 0.86)", "rgba(15, 23, 38, 0.76)");
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.140");
  const mutedColor = useColorModeValue("ink.500", "whiteAlpha.680");
  const badgeBg = item.type === "research" ? "rgba(234, 179, 8, 0.96)" : "rgba(29, 143, 204, 0.96)";
  const badgeColor = item.type === "research" ? "gray.900" : "white";
  const abbrBg = useColorModeValue("rgba(255, 255, 255, 0.92)", "rgba(9, 17, 30, 0.76)");
  const abbrBorderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.180");
  const abbrColor = useColorModeValue("ink.800", "white");
  const imageHeight = featured ? { base: "240px", md: "320px" } : { base: "210px", md: "240px" };

  return (
    <>
      <Card
        overflow="hidden"
        p={0}
        gap={0}
        cursor="pointer"
        bg={surface}
        borderColor={borderColor}
        borderRadius="3xl"
        onClick={onOpen}
        transition="transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease"
        sx={{
          "&:hover img": {
            transform: "scale(1.06)",
          },
        }}
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "0 28px 70px rgba(15, 23, 42, 0.18)",
          borderColor: "brand.300",
        }}>
        <Box position="relative" h={imageHeight} overflow="hidden">
          <Image
            fill
            sizes={featured ? "(min-width: 62em) 50vw, 100vw" : "(min-width: 62em) 25vw, 100vw"}
            src={item.teaser}
            alt={item.title}
            style={{
              objectFit: "cover",
              transition: "transform 0.7s ease",
            }}
            placeholder="blur"
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, rgba(9, 17, 30, 0.88), rgba(9, 17, 30, 0.12) 62%, rgba(9, 17, 30, 0.02))"
          />
          <Flex
            position="absolute"
            top={4}
            left={4}
            right={4}
            justify="space-between"
            gap={3}
            wrap="wrap">
            <Badge
              bg={badgeBg}
              color={badgeColor}
              px={2.5}
              py={1}
              borderRadius="full"
              boxShadow="0 8px 24px rgba(15, 23, 42, 0.22)">
              {item.type}
            </Badge>
            {item.date && (
              <Text
                px={3}
                py={1}
                borderRadius="full"
                bg="blackAlpha.500"
                color="white"
                fontSize="xs"
                fontWeight={700}>
                {item.date}
              </Text>
            )}
          </Flex>
          <Box position="absolute" left={4} right={4} bottom={4} color="white">
            <Badge
              px={2.5}
              py={1}
              borderRadius="full"
              bg={abbrBg}
              color={abbrColor}
              borderWidth="1px"
              borderColor={abbrBorderColor}
              boxShadow="0 8px 24px rgba(15, 23, 42, 0.2)">
              {item.abbr}
            </Badge>
            <Text
              mt={1}
              fontSize={{ base: "xl", md: featured ? "2xl" : "lg" }}
              fontWeight={800}
              letterSpacing="-0.03em"
              lineHeight={1.12}
              noOfLines={featured ? 3 : 2}>
              {item.title}
            </Text>
          </Box>
        </Box>

        <Box px={{ base: 4, md: 5 }} py={4}>
          <Text fontSize="sm" lineHeight={1.8} color={mutedColor} noOfLines={featured ? 4 : 3}>
            {item.description}
          </Text>
          <Text
            mt={3}
            fontSize="xs"
            fontWeight={800}
            letterSpacing="0.18em"
            textTransform="uppercase"
            color="brand.600">
            Open project details
          </Text>
        </Box>
      </Card>

      <ProjectModal project={item} isOpen={isOpen} onClose={onClose}>
        <item.content />
      </ProjectModal>
    </>
  );
}
