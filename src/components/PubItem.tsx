"use client";

import { authors } from "@/data/authors";
import type { PubType } from "@/types";
import {
  Badge,
  Box,
  Flex,
  Highlight,
  Icon,
  Link,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { type IconType } from "react-icons";
import {
  FaFilePdf,
  FaGithub,
  FaGlobe,
  FaImage,
  FaVideo,
  FaVolumeHigh,
} from "react-icons/fa6";

function AuthorNames({
  authorNames,
  equalContrib,
}: {
  authorNames: string[];
  equalContrib?: string[];
}) {
  const authorColor = useColorModeValue("ink.600", "whiteAlpha.760");

  return (
    <Text fontSize="sm" lineHeight={1.8} color={authorColor}>
      {authorNames.map((author, index) => {
        const authorData = authors.find(a => a.name === author);
        const isEqual = equalContrib?.some(
          eq => eq.trim().toLowerCase() === author.trim().toLowerCase(),
        );

        return (
          <Text as="span" key={`authorNames${index}`}>
            <Link as={NextLink} href={authorData?.url ?? ""} _hover={{ color: "brand.600" }}>
              <Text as="span">
                <Highlight
                  query={["Gilhan Park"]}
                  styles={{
                    backgroundColor: "transparent",
                    padding: 0,
                    textDecoration: "underline",
                    textDecorationColor: "currentColor",
                  }}>
                  {`${author}${isEqual ? "*" : ""}`}
                </Highlight>
              </Text>
            </Link>
            <Text as="span">
              {index === authorNames.length - 2
                ? authorNames.length === 2
                  ? " and "
                  : ", and "
                : index === authorNames.length - 1
                  ? ""
                  : ", "}
            </Text>
          </Text>
        );
      })}
    </Text>
  );
}

function PubButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon: IconType;
  children: React.ReactNode;
}) {
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.140");
  const bg = useColorModeValue("whiteAlpha.900", "whiteAlpha.060");

  return (
    <Link as={NextLink} href={href} isExternal>
      <Flex
        align="center"
        gap={2}
        px={3}
        py={1.5}
        borderRadius="full"
        borderWidth="1px"
        borderColor={borderColor}
        bg={bg}
        fontSize="xs"
        fontWeight={600}
        _hover={{
          borderColor: "brand.300",
          color: "brand.700",
        }}>
        <Icon as={icon} />
        {children}
      </Flex>
    </Link>
  );
}

export default function PubItem({ pub }: { pub: PubType }) {
  const panelBg = useColorModeValue("whiteAlpha.800", "whiteAlpha.050");
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.140");
  const mutedColor = useColorModeValue("ink.500", "whiteAlpha.620");

  return (
    <ListItem>
      <Box
        p={{ base: 4, md: 5 }}
        borderRadius="2xl"
        borderWidth="1px"
        borderColor={borderColor}
        bg={panelBg}>
        <Flex direction="column" gap={3}>
          <Flex align="center" gap={2} wrap="wrap">
            <Badge colorScheme="brand" borderRadius="full" px={2.5} py={1}>
              {pub.abbr}
            </Badge>
            {pub.equalContrib && (
              <Text fontSize="xs" color={mutedColor}>
                * equal contribution
              </Text>
            )}
          </Flex>

          <Text fontWeight={700} fontSize={{ base: "lg", md: "xl" }} letterSpacing="-0.02em">
            {pub.title}
          </Text>

          <AuthorNames authorNames={pub.authorNames} equalContrib={pub.equalContrib} />

          {pub.venue.map(venue => (
            <Text color={mutedColor} fontSize="sm" key={venue}>
              {venue}
            </Text>
          ))}

          <Box display="flex" flexWrap="wrap" gap={2}>
            {pub.pdfLink && (
              <PubButton href={pub.pdfLink} icon={FaFilePdf}>
                PDF
              </PubButton>
            )}
            {pub.posterLink && (
              <PubButton href={pub.posterLink} icon={FaImage}>
                Poster
              </PubButton>
            )}
            {pub.githubLink && (
              <PubButton href={pub.githubLink} icon={FaGithub}>
                GitHub
              </PubButton>
            )}
            {pub.webDemoLink && (
              <PubButton href={pub.webDemoLink} icon={FaGlobe}>
                Web Demo
              </PubButton>
            )}
            {pub.videoDemoLink && (
              <PubButton href={pub.videoDemoLink} icon={FaVideo}>
                Video Demo
              </PubButton>
            )}
            {pub.talkLink && (
              <PubButton href={pub.talkLink} icon={FaVolumeHigh}>
                Talk
              </PubButton>
            )}
          </Box>
        </Flex>
      </Box>
    </ListItem>
  );
}
