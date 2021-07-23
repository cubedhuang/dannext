export default function Hero() {
	return (
		<>
			<style jsx>{`
				header {
					--slant-height: 8vw;

					min-height: calc(35vh + var(--slant-height));
					padding: 3em 0 calc(3em + var(--slant-height) / 2) 0;
					clip-path: polygon(
						0 0,
						100% 0,
						100% calc(100% - var(--slant-height)),
						0 100%
					);
					margin-bottom: 2rem;

					display: flex;
					gap: 1em;
					flex-direction: column;
					justify-content: center;
					align-items: left;

					background: var(--primary-300);

					h1 {
						width: var(--container);
						margin: 0 auto;

						line-height: 1.15;
						font-size: 4rem;
					}

					p {
						width: var(--container);
						margin: 0 auto;

						line-height: 1.5;
						font-size: 1.5rem;
					}
				}
			`}</style>

			<header>
				<h1>Slate</h1>

				<p>
					Slate is a simple yet powerful bot that lets you watch YouTube
					Together, log ghost pings, play music, and dozens of other features!
				</p>
			</header>
		</>
	);
}
