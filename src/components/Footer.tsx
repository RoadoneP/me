"use client";

import Card from "@/components/Card";
import type { Language } from "@/types";
import {
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function Footer({ locale }: { locale: Language }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const pathname = usePathname();
  const mutedColor = useColorModeValue("ink.500", "whiteAlpha.640");

  const changeLocale = (nextLocale: Language) => {
    if (nextLocale === locale) return;

    const nextPath = pathname.replace(/^\/(en|ko)(?=\/|$)/, `/${nextLocale}`);
    router.replace(nextPath || `/${nextLocale}`, { scroll: false });
  };

  return (
    <Card mt={{ base: 6, md: 8 }} mb={4} p={{ base: 3, md: 5 }}>
      <Flex
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={4}
        wrap="wrap">
        <Flex direction="column" gap={1}>
          <Text
            fontSize="9px"
            fontWeight={800}
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="brand.600">
            Contact & Locale
          </Text>
          <Text fontSize={{ base: "0.72rem", md: "sm" }} color={mutedColor}>
            Research updates, selected work, and collaboration links.
          </Text>
        </Flex>
        <Flex gap={2} wrap="wrap">
          <ButtonGroup isAttached size="sm">
            <Button
              variant={locale === "en" ? "solid" : "outline"}
              onClick={() => {
                changeLocale("en");
              }}>
              EN
            </Button>
            <Button
              variant={locale === "ko" ? "solid" : "outline"}
              onClick={() => {
                changeLocale("ko");
              }}>
              KO
            </Button>
          </ButtonGroup>
          <Button
            rightIcon={<Icon as={colorMode === "light" ? FaSun : FaMoon} />}
            onClick={toggleColorMode}
            variant="outline"
            size="sm"
            borderRadius="full">
            {colorMode === "light" ? "Light" : "Dark"}
          </Button>
        </Flex>
      </Flex>
      <Text fontSize={{ base: "0.72rem", md: "xs" }} color={mutedColor}>
        Copyright (c) 2023 - Present Gilhan Park. All rights reserved.
      </Text>
    </Card>
  );
}
