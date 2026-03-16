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
  const imageHeight = featured ? { base: "196px", md: "320px" } : { base: "168px", md: "240px" };

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
            top={{ base: 2.5, md: 4 }}
            left={{ base: 2.5, md: 4 }}
            right={{ base: 2.5, md: 4 }}
            justify="space-between"
            gap={{ base: 2, md: 3 }}
            wrap="wrap">
            <Badge
              bg={badgeBg}
              color={badgeColor}
              px={{ base: 2, md: 2.5 }}
              py={1}
              borderRadius="full"
              fontSize={{ base: "9px", md: "xs" }}
              boxShadow="0 8px 24px rgba(15, 23, 42, 0.22)">
              {item.type}
            </Badge>
            {item.date && (
              <Text
                px={{ base: 2, md: 3 }}
                py={1}
                borderRadius="full"
                bg="blackAlpha.500"
                color="white"
                fontSize={{ base: "9px", md: "xs" }}
                fontWeight={700}>
                {item.date}
              </Text>
            )}
          </Flex>
          <Box
            position="absolute"
            left={{ base: 2.5, md: 4 }}
            right={{ base: 2.5, md: 4 }}
            bottom={{ base: 2.5, md: 4 }}
            color="white">
            <Badge
              px={{ base: 2, md: 2.5 }}
              py={1}
              borderRadius="full"
              bg={abbrBg}
              color={abbrColor}
              borderWidth="1px"
              borderColor={abbrBorderColor}
              fontSize={{ base: "9px", md: "xs" }}
              boxShadow="0 8px 24px rgba(15, 23, 42, 0.2)">
              {item.abbr}
            </Badge>
            <Text
              mt={1}
              fontSize={{ base: "md", md: featured ? "2xl" : "lg" }}
              fontWeight={800}
              letterSpacing="-0.03em"
              lineHeight={{ base: 1.1, md: 1.12 }}
              noOfLines={featured ? 3 : 2}>
              {item.title}
            </Text>
          </Box>
        </Box>

        <Box px={{ base: 3, md: 5 }} py={{ base: 3, md: 4 }}>
          <Text
            fontSize={{ base: "0.72rem", md: "sm" }}
            lineHeight={{ base: 1.62, md: 1.8 }}
            color={mutedColor}
            noOfLines={featured ? 4 : 3}>
            {item.description}
          </Text>
          <Text
            mt={3}
            fontSize="9px"
            fontWeight={800}
            letterSpacing="0.14em"
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
