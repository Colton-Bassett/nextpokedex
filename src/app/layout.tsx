import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
	title: "Next.js Pokedex",
	description: "Pokedex created with  Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Theme accentColor="blue" grayColor="gray">
					<Nav></Nav>
					{children}
				</Theme>
			</body>
		</html>
	);
}
