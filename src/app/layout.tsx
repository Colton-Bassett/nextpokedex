import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";

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
				<Nav></Nav>
				{children}
			</body>
		</html>
	);
}
