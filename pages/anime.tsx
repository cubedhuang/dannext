import Head from "next/head";

import Anime from "../components/Anime";

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

			<Anime
				name="Saiki K."
				desc="The world's unhappiest man."
				bg="/anime/saiki.jpg"
				href="https://anilist.co/anime/21804/Saiki-Kusuo-no-nan/"
			/>
			<Anime
				name="Kakegurui"
				desc="Gambling addict."
				bg="/anime/yumeko.jpg"
				href="https://anilist.co/anime/98314/Kakegurui/"
			/>
			<Anime
				name="Neon Genesis Evangelion"
				desc="Mental illness."
				bg="/anime/nge.jpg"
				href="https://anilist.co/anime/30/Shin-Seiki-Evangelion/"
			/>
			<Anime
				name="Assassination Classroom"
				desc="Koro-sensei!"
				bg="/anime/classroom.jpg"
				href="https://anilist.co/anime/20755/Ansatsu-Kyoushitsu"
			/>
			<Anime
				name="Hunter x Hunter"
				desc="Psychological horror."
				bg="/anime/hxh.jpg"
				href="https://anilist.co/anime/11061/HUNTERHUNTER-2011/"
			/>
			<Anime
				name="Aggretsuko"
				desc="Corporate slave."
				bg="/anime/retsuko.jpg"
				href="https://anilist.co/anime/101571/Aggressive-Retsuko/"
			/>
			<Anime
				name="Brand New Animal"
				desc="Animal racism."
				bg="/anime/bna.jpg"
				href="https://anilist.co/anime/110354/BNA/"
			/>
			<Anime
				name="Rascal Does Not Dream"
				desc="Puberty syndrome?"
				bg="/anime/mai.jpg"
				href="https://anilist.co/anime/101291/Rascal-Does-Not-Dream-of-Bunny-Girl-Senpai/"
			/>
			<Anime
				name="Beastars"
				desc="Carnivores."
				bg="/anime/beastars.png"
				href="https://anilist.co/anime/107660/BEASTARS/"
			/>
		</>
	);
}
