import Head from "next/head";

import Project from "../components/Project";

export default function Projects() {
	return (
		<>
			<Head>
				<title>My Projects</title>
				<meta name="description" content="It's me!" />

				<meta property="og:title" content="My Projects 📦" />
				<meta property="og:description" content="It's me!" />
			</Head>

			<h1>My Projects 📦</h1>

			<Project
				name="CubeDHuang: Web Experiments"
				bg="/cubedhuang.webp"
				href="https://cubedhuang.com"
			/>

			<Project
				name="Slate &ndash; Discord Bot"
				bg="/slate.webp"
				href="https://slate.dan.onl"
			/>

			<Project
				name="Boids: Flocking Simulation"
				bg="/boids.png"
				href="https://boids.cubedhuang.com"
			/>
		</>
	);
}
