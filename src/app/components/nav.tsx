import Link from "next/link";
import Image from "next/image";
import { Flex } from "@radix-ui/themes";

export default function Nav() {
	return (
		<nav>
			<Flex gap="3" className="h-16 items-center px-7">
				<Link href="/" className="flex  text-2xl gap-3">
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
			</Flex>
		</nav>
	);
}
