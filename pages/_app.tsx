import Head from "next/head";
import Footer from "../components/footer";
import type { AppProps } from "next/app";

function SlateWeb({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<Head>
				<meta name="theme-color" content="#4063c1" />

				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content={"https://slate.dan.onl" + router.pathname}
				/>
				<meta property="og:image" content="/slate.png" />
				<meta property="og:image:alt" content="Slate's Logo" />
				<meta property="og:site_name" content="Slate" />
			</Head>

			<style global jsx>{`
				:root {
					--primary-300: #273c75;
					--primary-500: #4063c1;
					--primary-700: #5481ff;

					--bg: #121212;

					--container: min(100% - 4rem, 1140px);
				}

				*,
				*::after,
				*::before {
					padding: 0;
					margin: 0;
					box-sizing: border-box;
				}

				html {
					scrollbar-color: #fff4 #0004;
					scrollbar-width: thin;
				}

				body {
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
						Oxygen, Ubuntu, Cantarell, "Open Sans", "Fira Sans", "Droid Sans",
						"Helvetica Neue", sans-serif;
					color: #fff;
					position: relative;
					padding-bottom: 6rem;
					min-height: 100vh;
					background: var(--bg);
					overflow-x: hidden;
				}

				::-webkit-scrollbar {
					width: 8px;
				}
				::-webkit-scrollbar-track {
					background: #0004;
				}
				::-webkit-scrollbar-thumb {
					background: #fff4;
				}
				::-webkit-scrollbar-thumb:hover {
					background: #fff3;
				}
				::-webkit-scrollbar-thumb:active {
					background: #fff2;
				}

				a {
					text-decoration: none;
					color: var(--primary-700);
				}

				a:hover,
				a:focus,
				a:active {
					text-decoration: underline;
				}

				code {
					background: #fff2;
					padding: 0.25em;
					border-radius: 0.25em;
				}
			`}</style>

			<Component {...pageProps} />
			<Footer></Footer>
		</>
	);
}

export default SlateWeb;
