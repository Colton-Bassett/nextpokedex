import Link from "next/link";
import Image from "next/image";

export default function Nav() {
	return (
		<nav>
			<Link
				href="/"
				className="flex justify-start px-8 h-16 items-center text-2xl"
			>
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					// 180, 38
					width={90}
					height={19}
					priority
				/>
				<span className="mx-2">Pokedex</span>
			</Link>
		</nav>
	);
}
