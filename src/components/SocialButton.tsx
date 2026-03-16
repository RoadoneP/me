import { Button, Icon, Link, ListItem, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import type { IconType } from "react-icons/lib";

export default function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: IconType;
  label: string;
}) {
  const bg = useColorModeValue("whiteAlpha.900", "whiteAlpha.060");
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.140");
  const hoverBg = useColorModeValue("white", "whiteAlpha.100");

  return (
    <ListItem>
      <Link as={NextLink} isExternal href={href}>
        <Button
          size="sm"
          variant="outline"
          leftIcon={<Icon as={icon} />}
          bg={bg}
          borderColor={borderColor}
          h={{ base: 7, md: 9 }}
          px={{ base: 2.5, md: 4 }}
          fontSize={{ base: "0.72rem", md: "sm" }}
          fontWeight={600}
          borderRadius="full"
          _hover={{
            bg: hoverBg,
            borderColor: "brand.300",
            transform: "translateY(-1px)",
          }}>
          {label}
        </Button>
      </Link>
    </ListItem>
  );
}
