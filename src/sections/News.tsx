"use client";

import { SectionTitle } from "@/components";
import { news } from "@/data";
import { Badge, Flex, List, ListItem, Text, useColorModeValue } from "@chakra-ui/react";

export function News({ locale }: { locale: Language }) {
  const newsData = news[locale as Language] as NewsType[];
  const mutedColor = useColorModeValue("ink.600", "whiteAlpha.760");
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.140");
  const itemBg = useColorModeValue("whiteAlpha.700", "whiteAlpha.050");

  return (
    <Flex flexDir="column" gap={5}>
      <SectionTitle
        eyebrow="Latest"
        title="News"
        description="Recent milestones, conference updates, and ongoing research progress."
      />
      <List gap={3} display="flex" flexDir="column">
        {newsData.map((item, index) => (
          <ListItem
            key={`news${index}`}
            p={{ base: 4, md: 5 }}
            borderRadius="2xl"
            borderWidth="1px"
            borderColor={borderColor}
            bg={itemBg}>
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: 3, md: 4 }}>
              <Badge
                colorScheme="brand"
                alignSelf={{ base: "flex-start", md: "flex-start" }}
                px={2.5}
                py={1}
                borderRadius="full">
                {item.date}
              </Badge>
              <Text fontSize="sm" lineHeight={1.8} color={mutedColor}>
                {item.description}
              </Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
