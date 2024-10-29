import Link from "next/link";
import Image from "next/image";
import { Flex } from "@radix-ui/themes";

export default function Footer() {
	return (
		<footer className="border-t">
			<Flex gap="7" className="h-32 items-center max-w-5xl m-auto px-7">
				<Link href="/" className="flex text-2xl gap-3">
					<Image
						className="dark:invert"
						src="/next.svg"
						alt="Next.js logo"
						width={90}
						height={19}
						priority
					/>
					<span className="">Pokedex</span>
				</Link>
				<Link href="/">
					<span className="text-lg">Help</span>
				</Link>
				<Link href="/">
					<span className="text-lg">Disclaimer</span>
				</Link>
			</Flex>
		</footer>
	);
}
