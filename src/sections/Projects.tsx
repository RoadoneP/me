"use client";

import { ProjectCard, SectionTitle } from "@/components";
import { projects } from "@/data";
import { Box, Button, ButtonGroup, Flex, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

export default function Projects({ locale }: { locale: Language }) {
  const projectData = projects[locale as Language] as ProjectType[];
  const selectedProjects = projectData.filter(item => item.selected);
  const [projectExpanded, setProjectExpanded] = useState(false);

  return (
    <Flex direction="column" gap={5} w="full">
      <Flex
        align={{ base: "flex-start", md: "flex-end" }}
        justify="space-between"
        gap={4}
        wrap="wrap">
        <SectionTitle
          eyebrow="Selected Work"
          title={projectExpanded ? "All Projects" : "Featured Projects"}
          description="Research papers, applied systems, and demos from lab and industry collaborations."
        />
        <Box alignSelf={{ base: "flex-start", md: "flex-end" }} flexShrink={0} position="relative" zIndex={1}>
          <ButtonGroup isAttached size="sm">
            <Button
              minW="88px"
              variant={projectExpanded ? "outline" : "solid"}
              onClick={() => {
                setProjectExpanded(false);
              }}>
              Featured
            </Button>
            <Button
              minW="88px"
              variant={projectExpanded ? "solid" : "outline"}
              onClick={() => {
                setProjectExpanded(true);
              }}>
              All
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>

      {projectExpanded ? (
        <SimpleGrid minChildWidth="280px" spacing={4} w="full">
          {projectData.map((item, index) => (
            <ProjectCard item={item} key={`project${index}`} />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid
          columns={{ base: 1, xl: selectedProjects.length > 1 ? 2 : 1 }}
          spacing={4}
          w="full">
          {selectedProjects.map((item, index) => (
            <ProjectCard item={item} featured key={`featured-project${index}`} />
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
}
