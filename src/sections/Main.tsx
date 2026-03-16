"use client";

import { Card, Footer, Header } from "@/components";
import { about } from "@/data";
import { useLayoutScroll } from "@/hooks/useLayoutScroll";
import { About, Educations, Experiences, Honors, Projects, Publications } from "@/sections";
import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

export default function Main({ locale }: { locale: Language }) {
  const aboutData = about[locale as Language] as AboutType;
  const proseColor = useColorModeValue("ink.700", "whiteAlpha.820");
  const listColor = useColorModeValue("ink.600", "whiteAlpha.760");

  const { currentSection, sectionHandler, sectionRef } = useLayoutScroll();

  return (
    <Container maxW="1440px" px={{ base: 3, md: 6 }} pt={{ base: 18, md: 28, xl: 8 }} pb={8}>
      <Box display={{ base: "block", xl: "none" }} h={{ base: "72px", md: "92px" }} mb={{ base: 3.5, md: 5 }}>
        <Navigation currentSection={currentSection} sectionHandler={sectionHandler} mobile />
      </Box>
      <Flex flexDir={{ base: "column", xl: "row" }} gap={{ base: 4, xl: 6 }} align="flex-start">
        <Flex
          w={{ base: "full", xl: "420px" }}
          minW={{ base: 0, xl: "420px" }}
          h={{ base: "auto", md: "full" }}
          flexDir="column"
          position={{ base: "static", xl: "sticky" }}
          top={{ base: 0, xl: 8 }}>
          <Box>
            <Header aboutData={aboutData} locale={locale} />
          </Box>
          <Box display={{ base: "none", xl: "block" }}>
            <Navigation currentSection={currentSection} sectionHandler={sectionHandler} />
          </Box>
        </Flex>

        <Flex flexGrow={1} minW={0} maxW="full">
          <Card gap={{ base: 5, md: 10 }} w="full" p={{ base: 3.5, md: 8 }}>
            <Flex
              w="full"
              flexDir="column"
              gap={{ base: 5, md: 10 }}
              id="about"
              scrollMarginTop={{ base: "88px", md: "120px", xl: "32px" }}
              ref={el => {
                sectionRef.current[0] = el!;
              }}>
              <Box
                sx={{
                  p: { base: 0, md: 1 },
                  "blockquote p": {
                    color: proseColor,
                  },
                  "p, li": {
                    color: proseColor,
                    lineHeight: { base: 1.68, md: 1.9 },
                    fontSize: { base: "0.87rem", md: "1rem" },
                  },
                  "ul, ol": {
                    color: listColor,
                    paddingInlineStart: { base: "0.95rem", md: "1.25rem" },
                    display: "grid",
                    gap: { base: 1.75, md: 2.5 },
                  },
                  h2: {
                    marginTop: { base: "1.75rem", md: "2.5rem" },
                    marginBottom: "0.75rem",
                  },
                }}>
                <aboutData.Bio />
              </Box>
              <About locale={locale} />
              <Projects locale={locale} />
            </Flex>

            <Flex
              id="educations"
              scrollMarginTop={{ base: "88px", md: "120px", xl: "32px" }}
              ref={el => {
                sectionRef.current[1] = el!;
              }}>
              <Educations locale={locale} />
            </Flex>
            <Flex
              id="publications"
              scrollMarginTop={{ base: "88px", md: "120px", xl: "32px" }}
              ref={el => {
                sectionRef.current[2] = el!;
              }}>
              <Publications locale={locale} />
            </Flex>
            <Flex
              id="experiences"
              scrollMarginTop={{ base: "88px", md: "120px", xl: "32px" }}
              ref={el => {
                sectionRef.current[3] = el!;
              }}>
              <Experiences locale={locale} />
            </Flex>
            <Flex
              id="honors"
              scrollMarginTop={{ base: "88px", md: "120px", xl: "32px" }}
              ref={el => {
                sectionRef.current[4] = el!;
              }}>
              <Honors locale={locale} />
            </Flex>
          </Card>
        </Flex>
      </Flex>
      <Footer locale={locale} />
    </Container>
  );
}
