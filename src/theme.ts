import { defineStyleConfig, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { type StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

export const PRIMARY_COLOR = "brand";
export const PRIMARY = {
  50: `${PRIMARY_COLOR}.50`,
  100: `${PRIMARY_COLOR}.100`,
  200: `${PRIMARY_COLOR}.200`,
  300: `${PRIMARY_COLOR}.300`,
  400: `${PRIMARY_COLOR}.400`,
  500: `${PRIMARY_COLOR}.500`,
  600: `${PRIMARY_COLOR}.600`,
  700: `${PRIMARY_COLOR}.700`,
  800: `${PRIMARY_COLOR}.800`,
  900: `${PRIMARY_COLOR}.900`,
};

export const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#eef8ff",
        100: "#d8f0ff",
        200: "#b4e3ff",
        300: "#7ecfff",
        400: "#47b2f2",
        500: "#1d8fcc",
        600: "#0f6eab",
        700: "#0d567f",
        800: "#113f5a",
        900: "#122e40",
      },
      sand: {
        50: "#f8f5ee",
        100: "#efe7d8",
        200: "#dfd1b6",
        300: "#cfba93",
        400: "#bfa374",
        500: "#a38554",
        600: "#806740",
        700: "#5d4b2e",
        800: "#3b301d",
        900: "#1f180f",
      },
      ink: {
        50: "#f3f6fa",
        100: "#dbe3ed",
        200: "#bcc8d7",
        300: "#94a4ba",
        400: "#697d97",
        500: "#4b5f78",
        600: "#37485e",
        700: "#273548",
        800: "#182334",
        900: "#0d1726",
      },
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    fonts: {
      heading: "var(--font-sans)",
      body: "var(--font-sans)",
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        "html, body": {
          minHeight: "100%",
          color: mode("ink.900", "whiteAlpha.920")(props),
          backgroundColor: mode("sand.50", "ink.900")(props),
          backgroundImage: mode(
            "radial-gradient(circle at top left, rgba(29, 143, 204, 0.18), transparent 28%), radial-gradient(circle at 85% 20%, rgba(163, 133, 84, 0.12), transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.7), rgba(248, 245, 238, 0.95))",
            "radial-gradient(circle at top left, rgba(126, 207, 255, 0.16), transparent 24%), radial-gradient(circle at 80% 18%, rgba(207, 186, 147, 0.12), transparent 18%), linear-gradient(180deg, rgba(13, 23, 38, 0.98), rgba(13, 23, 38, 1))",
          )(props),
          backgroundAttachment: "fixed",
        },
        body: {
          position: "relative",

          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: mode("blackAlpha.200", "whiteAlpha.220")(props),
            borderRadius: "999px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        },
        "body::before": {
          content: '""',
          position: "fixed",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(17, 63, 90, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17, 63, 90, 0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent 80%)",
          pointerEvents: "none",
          zIndex: -2,
        },
        "body::after": {
          content: '""',
          position: "fixed",
          inset: "auto -12% -16% auto",
          width: "22rem",
          height: "22rem",
          background: mode("rgba(29, 143, 204, 0.12)", "rgba(126, 207, 255, 0.08)")(props),
          filter: "blur(100px)",
          borderRadius: "999px",
          pointerEvents: "none",
          zIndex: -1,
        },
        "::selection": {
          backgroundColor: mode("brand.200", "brand.700")(props),
          color: mode("ink.900", "white")(props),
        },
        a: {
          transition: "color 0.2s ease, border-color 0.2s ease",
        },
        div: {
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: mode("blackAlpha.200", "whiteAlpha.220")(props),
            borderRadius: "999px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        },
      }),
    },
    components: {
      Card: defineStyleConfig({
        baseStyle: props => ({
          display: "flex",
          flexDir: "column",
          borderRadius: 28,
          p: { base: 5, md: 7 },
          borderWidth: "1px",
          borderColor: mode("blackAlpha.100", "whiteAlpha.140")(props),
          bg: mode("rgba(255, 255, 255, 0.72)", "rgba(15, 23, 38, 0.7)")(props),
          boxShadow: mode(
            "0 24px 80px rgba(15, 23, 42, 0.08)",
            "0 24px 72px rgba(0, 0, 0, 0.34)",
          )(props),
          backdropFilter: "blur(18px)",
          gap: 4,
        }),
      }),
      Heading: defineStyleConfig({
        baseStyle: props => ({
          color: mode("ink.900", "whiteAlpha.940")(props),
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
        }),
      }),
      Mark: defineStyleConfig({
        baseStyle: props => ({
          bgColor: mode("brand.100", "brand.900")(props),
          color: mode("brand.700", "brand.100")(props),
          fontWeight: 600,
          px: 2,
          py: 1,
          rounded: "full",
        }),
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: PRIMARY_COLOR }),
);
