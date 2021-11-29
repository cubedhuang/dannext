import "./global.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

import Nav from "../components/Nav";

export default function SlateWeb({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<Head>
				<meta name="theme-color" content="#54a0ff" />

				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content={"https://dan.onl" + router.pathname}
				/>
				<meta property="og:image" content="/slate.png" />
				<meta property="og:image:alt" content="Slate's Logo" />
				<meta property="og:site_name" content="Daniel" />
			</Head>

			<main>
				<Component {...pageProps} />
			</main>

			<Nav></Nav>
		</>
	);
}
