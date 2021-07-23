import Head from "next/head";
import Hero from "../components/hero";
import FeatureList from "../components/FeatureList";

export default function Home() {
	return (
		<>
			<Head>
				<title>Slate &ndash; Discord Bot</title>
				<meta
					name="description"
					content="Slate is a simple yet powerful bot that lets you watch YouTube Together, log ghost pings, play music, and dozens of more features!"
				/>

				<meta property="og:title" content="Slate" />
				<meta
					property="og:description"
					content="Slate is a simple yet powerful bot that lets you watch YouTube Together, log ghost pings, play music, and dozens of more features!"
				/>
			</Head>

			<Hero />

			<main>
				<FeatureList />
			</main>
		</>
	);
}
