import Head from "next/head";

import Discord from "../components/Discord";

export default function Home() {
	return (
		<>
			<Head>
				<title>Daniel</title>
				<meta name="description" content="It's me!" />

				<meta property="og:title" content="Daniel 👋" />
				<meta property="og:description" content="It's me!" />
			</Head>

			<style jsx>{`
				.intro {
					font-size: 1.2rem;
					opacity: 0.9;
				}
			`}</style>

			<h1>Daniel 👋!</h1>

			<p className="intro">
				Hi! I&apos;m Daniel, 15-year-old developer from the United
				States.
			</p>

			<Discord />
		</>
	);
}
