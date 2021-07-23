import Feature from "./Feature";

export default function FeatureList() {
	return (
		<>
			<style jsx>{`
				section {
					width: var(--container);
					margin: 0 auto;

					padding: 2em 0;

					h2 {
						font-size: 2.5rem;
						margin-bottom: 0.5em;
					}

					.list {
						display: flex;
						flex-wrap: wrap;
						align-items: stretch;
						gap: 1em;
					}

					.invite {
						display: flex;
						height: 100%;
						flex-direction: column;

						.link {
							flex: 1;
							display: flex;
							align-items: center;
							justify-content: center;

							a {
								position: relative;
								margin: 2em 0 0.5em 0;
								padding: 1em;
								z-index: 1;
								overflow: hidden;

								background: var(--primary-300);
								border-radius: 0.5em;
								text-decoration: none;
								color: #fff;

								&::after {
									content: "";
									position: absolute;
									inset: 0;
									background-color: #0003;
									z-index: -1;
									transition: opacity 0.2s ease;
								}

								&:hover::after {
									opacity: 0;
								}
							}
						}
					}
				}
			`}</style>

			<section>
				<h2>Our Features</h2>

				<div className="list">
					<Feature name="YouTube Together" color="#e84118" order={1}>
						YouTube Together is part of a new set of Discord features called
						Activities that let you interact with others in voice channels.
						Start a YouTube Together session with <code>;activity</code>!
					</Feature>
					<Feature name="Ghost Ping Logger" color="#487eb0" order={2}>
						Slate has a versatile logging system that lets you track down ghost
						pings alongside potentially obscene statuses, nickname changes, and
						members leaving!
					</Feature>
					<Feature name="Music Player" color="#8c7ae6" order={3}>
						Slate has an advanced music player for voice channels, including
						song looping, volume controls, loading Spotify playlists, and more!
					</Feature>
					<Feature name="Leveling System" color="#192a56" order={4}>
						As people talk, they&apos;ll gain experience. Use the{" "}
						<code>;lb</code> and <code>;rank</code> commands to measure how
						active people are compared to each other in your servers!
					</Feature>
					<Feature name="Complex Math" color="#438a20" order={5}>
						Use the our powerful <code>;math</code> command to evaluate complex
						math expressions, equations, and systems. Factoring quadratics? Just{" "}
						<code>;math factor x^2-4</code>! Integrating functions? Use{" "}
						<code>;math integrate 2x</code>!
					</Feature>
					<Feature name="Advanced Info" color="#273c75" order={6}>
						Slate has several comprehensive info commands like{" "}
						<code>;userinfo</code> that give you as much information as
						possible, including username and nickname history!
					</Feature>
					<Feature name="&hellip;And More!" color="#2f3640" order={7} noHover>
						<div className="invite">
							<div>
								For a full list of features, invite Slate to your server and use
								the <code>;help</code> command!
							</div>
							<span className="link">
								<a
									href={process.env.inviteLink}
									target="_blank"
									rel="noreferrer"
								>
									Add Slate!
								</a>
							</span>
						</div>
					</Feature>
				</div>
			</section>
		</>
	);
}
