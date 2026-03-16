import { theme } from "@/theme";
import { ColorModeScript } from "@chakra-ui/react";
import { Manrope, Source_Serif_4 } from "next/font/google";
import Providers from "./providers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
