import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const telegraph = localFont({
  src: "./fonts/Telegraf.otf",
  variable: "--font-telegraf",
  weight: "100 900",
});
const telegrafLight = localFont({
  src: "./fonts/TelegrafLight.otf",
  variable: "--font-telegrafLight",
  weight: "100 900",
});
const telegrafBold = localFont({
  src: "./fonts/TelegrafUltraBold.otf",
  variable: "--font-telegrafBold",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Takealot Redesign",
  description: "Takealot Ecommerce Redesign built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${telegraph.variable} ${telegrafLight.variable} ${telegrafBold.variable} antialiased`}
      >
     <ThemeProvider attribute="class" defaultTheme="system">
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
