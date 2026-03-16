import type { ProjectType } from "@/types";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Portal,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import type { PropsWithChildren } from "react";
import {
  FaFilePdf,
  FaGithub,
  FaGlobe,
  FaImage,
  FaVideo,
  FaVolumeHigh,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

interface IProjectModal {
  project: ProjectType;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectActionButton({
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
        px={{ base: 2, md: 3 }}
        py={{ base: 1, md: 1.5 }}
        borderRadius="full"
        borderWidth="1px"
        borderColor={borderColor}
        bg={bg}
        fontSize={{ base: "9px", md: "xs" }}
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

function ProjectModal({
  project: {
    title,
    description,
    type,
    date,
    githubLink,
    webDemoLink,
    pdfLink,
    posterLink,
    videoDemoLink,
    talkLink,
  },
  isOpen,
  onClose,
  children,
}: PropsWithChildren<IProjectModal>) {
  const bg = useColorModeValue("rgba(255, 255, 255, 0.96)", "rgba(9, 17, 30, 0.96)");
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.140");
  const mutedColor = useColorModeValue("ink.500", "whiteAlpha.640");
  const badgeBg = type === "research" ? "rgba(234, 179, 8, 0.96)" : "rgba(29, 143, 204, 0.96)";
  const badgeColor = type === "research" ? "gray.900" : "white";

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl" scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.500" backdropFilter="blur(16px)" />
      <Portal>
        <ModalContent
          mx={{ base: 3, md: 0 }}
          borderRadius={{ base: "24px", md: "32px" }}
          overflow="hidden"
          bg={bg}
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow="0 32px 96px rgba(15, 23, 42, 0.3)">
          <ModalHeader
            pb={{ base: 3, md: 4 }}
            pr={{ base: 10, md: 12 }}
            borderBottomWidth="1px"
            borderColor={borderColor}>
            <Flex direction="column" gap={{ base: 2.5, md: 3 }}>
              <Flex align="center" gap={2} wrap="wrap">
                <Badge
                  bg={badgeBg}
                  color={badgeColor}
                  px={{ base: 2, md: 2.5 }}
                  py={1}
                  borderRadius="full"
                  fontSize={{ base: "10px", md: "xs" }}>
                  {type}
                </Badge>
                {date && (
                  <Text
                    fontSize={{ base: "9px", md: "xs" }}
                    fontWeight={700}
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    color={mutedColor}>
                    {date}
                  </Text>
                )}
              </Flex>
              <Box>
                <Heading as="h2" fontSize={{ base: "lg", md: "2xl" }}>
                  {title}
                </Heading>
                <Text
                  mt={2}
                  fontSize={{ base: "0.72rem", md: "sm" }}
                  lineHeight={{ base: 1.62, md: 1.8 }}
                  color={mutedColor}>
                  {description}
                </Text>
                <Flex mt={4} gap={2} wrap="wrap">
                  {githubLink && (
                    <ProjectActionButton href={githubLink} icon={FaGithub}>
                      GitHub
                    </ProjectActionButton>
                  )}
                  {videoDemoLink && (
                    <ProjectActionButton href={videoDemoLink} icon={FaVideo}>
                      Video Demo
                    </ProjectActionButton>
                  )}
                  {pdfLink && (
                    <ProjectActionButton href={pdfLink} icon={FaFilePdf}>
                      PDF
                    </ProjectActionButton>
                  )}
                  {posterLink && (
                    <ProjectActionButton href={posterLink} icon={FaImage}>
                      Poster
                    </ProjectActionButton>
                  )}
                  {webDemoLink && (
                    <ProjectActionButton href={webDemoLink} icon={FaGlobe}>
                      Web Demo
                    </ProjectActionButton>
                  )}
                  {talkLink && (
                    <ProjectActionButton href={talkLink} icon={FaVolumeHigh}>
                      Talk
                    </ProjectActionButton>
                  )}
                </Flex>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalCloseButton top={5} right={5} />
          <ModalBody
            px={{ base: 5, md: 8 }}
            py={{ base: 6, md: 8 }}
            sx={{
              p: {
                lineHeight: 1.9,
              },
              "ul, ol": {
                paddingInlineStart: "1.25rem",
                display: "grid",
                gap: 2,
              },
              blockquote: {
                marginBottom: 6,
              },
            }}>
            {children}
          </ModalBody>
        </ModalContent>
      </Portal>
    </Modal>
  );
}

export default ProjectModal;
