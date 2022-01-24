import Head from "next/head";

import Interest from "../components/Interest";

export default function Home() {
	return (
		<>
			<Head>
				<title>Anime</title>
				<meta name="description" content="I like anime." />

				<meta property="og:title" content="Anime ✨" />
				<meta property="og:description" content="I like anime." />
			</Head>

			<style jsx>{`
				.intro {
					font-size: 1.2rem;
					opacity: 0.9;
				}
			`}</style>

			<h1>Anime ✨</h1>

			<p className="intro">I like anime.</p>

			<Interest
				name="Saiki K."
				desc="The world's unhappiest man."
				bg="/saiki.jpg"
				href="https://anilist.co/anime/21804/Saiki-Kusuo-no-nan/"
			/>
			<Interest
				name="Kakegurui"
				desc="Gambling addict."
				bg="/yumeko.jpg"
				href="https://anilist.co/anime/98314/Kakegurui/"
			/>
			<Interest
				name="Neon Genesis Evangelion"
				desc="Mental illness."
				bg="/nge.jpg"
				href="https://anilist.co/anime/30/Shin-Seiki-Evangelion/"
			/>
			<Interest
				name="Hunter x Hunter"
				desc="Psychological horror."
				bg="/hxh.jpg"
				href="https://anilist.co/anime/11061/HUNTERHUNTER-2011/"
			/>
			<Interest
				name="Aggretsuko"
				desc="Corporate slave."
				bg="/retsuko.jpg"
				href="https://anilist.co/anime/101571/Aggressive-Retsuko/"
			/>
			<Interest
				name="Brand New Animal"
				desc="Animal racism."
				bg="/bna.jpg"
				href="https://anilist.co/anime/110354/BNA/"
			/>
			<Interest
				name="Rascal Does Not Dream"
				desc="Puberty syndrome?"
				bg="/mai.jpg"
				href="https://anilist.co/anime/101291/Rascal-Does-Not-Dream-of-Bunny-Girl-Senpai/"
			/>
			<Interest
				name="Beastars"
				desc="Carnivores."
				bg="/beastars.png"
				href="https://anilist.co/anime/107660/BEASTARS/"
			/>
		</>
	);
}
