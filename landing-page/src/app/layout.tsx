import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const tektur = Tektur({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Kensho",
	description: "Kensho is a Journal app that allows you to have a conversation with a personalized AI assistant and reflect on your day.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${tektur.className} antialiased`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
