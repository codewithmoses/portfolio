import { Sora } from "next/font/google";
import "./globals.css";

// Configure Sora font from Google Fonts
const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"], // Ensure it supports the Latin character set
  variable: "--font-sora",
});

export const metadata = {
  title: "Personal Portfolio",
  description: "Crafting code to bring ideas to life pixel-perfect designs, designs, seamless animations, and dynamic user experiences. Let's turn your digital vision into reality, one line of code at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${sora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
