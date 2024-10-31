import { Spinner } from "@radix-ui/themes";

export default function Loading() {
	return (
		<div className="flex justify-center min-h-screen items-center">
			<Spinner size="3"></Spinner>
		</div>
	);
}
