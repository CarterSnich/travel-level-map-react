import Image from "next/image";

export default function Home() {
	return (
		<Image
			src="/region-viii.jpg"
			width={500}
			height={500}
			alt="Picture of the author"
		/>
	);
}
