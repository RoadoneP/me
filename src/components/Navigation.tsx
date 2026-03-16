import Card from "@/components/Card";
import { navigations } from "@/data";
import {
  Box,
  Button,
  Flex,
  Grid,
  List,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

interface NavigationProps {
  sectionHandler: (idx: number) => void;
  currentSection: number;
  mobile?: boolean;
}

interface NavigationItemProps {
  selected: boolean;
  onClick: () => void;
  index: number;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavigationItem = ({
  selected,
  onClick,
  index,
  children,
  mobile = false,
}: NavigationItemProps) => {
  const activeSurface = useColorModeValue("whiteAlpha.900", "whiteAlpha.120");
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.120");
  const labelColor = useColorModeValue("ink.500", "whiteAlpha.600");
  const activeColor = useColorModeValue("brand.700", "brand.200");

  return (
    <Button
      variant="unstyled"
      h="auto"
      w="full"
      minH={mobile ? "52px" : "auto"}
      onClick={onClick}>
      <Flex
        w="full"
        align="center"
        justify={mobile ? "center" : { base: "center", xl: "flex-start" }}
        minW={0}
        gap={mobile ? 0 : { base: 1.5, xl: 3 }}
        px={mobile ? 1.5 : { base: 2, xl: 4 }}
        py={mobile ? 3.5 : { base: 2.5, xl: 3.5 }}
        borderRadius="2xl"
        borderWidth="1px"
        borderColor={selected ? "brand.300" : borderColor}
        bg={selected ? activeSurface : "transparent"}
        transition="all 0.2s ease"
        _hover={{
          borderColor: "brand.200",
          transform: "translateY(-1px)",
        }}>
        <Text
          display={mobile ? "none" : { base: "none", xl: "block" }}
          fontSize="10px"
          fontWeight={800}
          letterSpacing="0.18em"
          textTransform="uppercase"
          color={selected ? activeColor : labelColor}>
          {String(index + 1).padStart(2, "0")}
        </Text>
        <Text
          fontSize={mobile ? { base: "xs", md: "sm" } : { base: "xs", sm: "sm", xl: "sm" }}
          fontWeight={selected ? 700 : 600}
          color={selected ? activeColor : "inherit"}
          whiteSpace="nowrap"
          textAlign="center">
          {children}
        </Text>
      </Flex>
    </Button>
  );
};

export default function Navigation({
  sectionHandler,
  currentSection,
  mobile = false,
}: NavigationProps) {
  const panelBg = useColorModeValue("rgba(255, 255, 255, 0.68)", "rgba(15, 23, 38, 0.7)");
  const label: "label" | "labelShort" =
    useBreakpointValue({ base: "labelShort", xl: "label" }, { fallback: "label" }) ?? "label";

  return (
    <Box
      px={0}
      position={mobile ? "fixed" : "static"}
      top={mobile ? "calc(env(safe-area-inset-top, 0px) + 12px)" : undefined}
      left={mobile ? { base: 3, md: 6 } : undefined}
      right={mobile ? { base: 3, md: 6 } : undefined}
      zIndex={mobile ? 30 : undefined}>
      <Card
        w="full"
        id="navigation"
        my={mobile ? 0 : 4}
        p={mobile ? 2.5 : 3}
        gap={0}
        boxShadow={mobile ? "0 20px 50px rgba(15, 23, 42, 0.16)" : "none"}
        borderRadius={mobile ? 24 : 28}
        bg={panelBg}
        transition="background-color 0.2s linear, border-radius 0.2s linear, transform 0.2s linear">
        {mobile ? (
          <Grid templateColumns="repeat(5, minmax(0, 1fr))" w="full" gap={2}>
            {navigations.map((navigation, idx) => (
              <NavigationItem
                key={`sect${idx}`}
                mobile
                selected={idx === currentSection}
                index={idx}
                onClick={() => sectionHandler(idx)}>
                {navigation[label]}
              </NavigationItem>
            ))}
          </Grid>
        ) : (
          <List display="flex" flexDir="column" w="full" gap={2}>
            {navigations.map((navigation, idx) => (
              <NavigationItem
                key={`sect${idx}`}
                selected={idx === currentSection}
                index={idx}
                onClick={() => sectionHandler(idx)}>
                {navigation[label]}
              </NavigationItem>
            ))}
          </List>
        )}
      </Card>
    </Box>
  );
}
