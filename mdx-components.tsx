import { PRIMARY } from "@/theme";
import {
  Box,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const { colorMode } = useColorMode();
  return {
    h1: ({ children }) => (
      <Heading as="h1" fontSize={{ base: "xl", md: "3xl" }} my={{ base: 2.5, md: 4 }}>
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" fontSize={{ base: "lg", md: "2xl" }} my={{ base: 2, md: 3 }}>
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" fontSize={{ base: "md", md: "xl" }} my={{ base: 1.5, md: 2.5 }}>
        {children}
      </Heading>
    ),
    p: ({ children }) => (
      <Text as={"p"} fontSize={{ base: "0.84rem", md: "lg" }} lineHeight={{ base: 1.68, md: 1.9 }}>
        {children}
      </Text>
    ),
    span: ({ children }) => (
      <Text as={"span"} fontSize={{ base: "0.84rem", md: "md" }}>
        {children}
      </Text>
    ),
    a: ({ href, children }) => (
      <Link href={href ?? "/"}>
        <Text as={"span"} color={colorMode === "light" ? PRIMARY[700] : PRIMARY[200]}>
          {children}
        </Text>
      </Link>
    ),
    strong: ({ children }) => (
      <Text as={"strong"} fontSize={{ base: "0.84rem", md: "md" }}>
        {children}
      </Text>
    ),
    ol: ({ children }) => <OrderedList spacing={2}>{children}</OrderedList>,
    ul: ({ children }) => <UnorderedList spacing={2}>{children}</UnorderedList>,
    li: ({ children }) => (
      <ListItem>
        <Text as={"p"} fontSize={{ base: "0.84rem", md: "md" }} lineHeight={{ base: 1.65, md: 1.8 }}>
          {children}
        </Text>
      </ListItem>
    ),
    blockquote: ({ children }) => (
      <Box
        as={"blockquote"}
        borderWidth={"1px"}
        borderLeftWidth={"4px"}
        borderColor={colorMode === "light" ? PRIMARY[200] : PRIMARY[700]}
        borderLeftColor={colorMode === "light" ? PRIMARY[500] : PRIMARY[200]}
        bg={colorMode === "light" ? "whiteAlpha.700" : "whiteAlpha.050"}
        borderRadius={"2xl"}
        py={{ base: 2.5, md: 4 }}
        px={{ base: 3.5, md: 5 }}
        mb={{ base: 5, md: 8 }}
        boxShadow={
          colorMode === "light"
            ? "0 18px 48px rgba(15, 23, 42, 0.06)"
            : "0 18px 48px rgba(0, 0, 0, 0.16)"
        }>
        {children}
      </Box>
    ),
    ...components,
  };
}
