import { useLanyard } from "react-use-lanyard";

export default function Discord() {
	const { data: lanyard } = useLanyard({ userId: "299707523370319883" });

	return (
		<>
			<style jsx>{`
				.discord {
					display: flex;
					flex-direction: column;

					background: #292b2f;
					color: #fff;
					padding: 1em;
					border-radius: 1em;
					margin: 1em 0;

					.user {
						display: flex;
						align-items: center;
						padding-bottom: 1em;
						border-bottom: 1px solid #40444b;
						gap: 1em;

						img {
							border-radius: 50%;
							height: 4em;
						}

						.username {
							font-size: 1.2rem;

							.discrim {
								opacity: 0.5;
							}
						}
					}

					.spotify {
						display: flex;
						align-items: center;
						padding-top: 1em;
						gap: 1em;

						img {
							border-radius: 0.5em;
							height: 4em;
						}

						p {
							margin-top: 0.1em;
							font-size: 0.8rem;

							&:last-child {
								opacity: 0.5;
							}
						}
					}
				}
			`}</style>

			<div className="discord">
				<div className="user">
					<img
						src={
							lanyard?.data.discord_user.avatar &&
							`https://cdn.discordapp.com/avatars/299707523370319883/${
								lanyard?.data.discord_user.avatar
							}.${
								lanyard?.data.discord_user.avatar.startsWith(
									"a_"
								)
									? "gif"
									: "webp"
							}?size=256`
						}
						alt="Discord Avatar"
					/>
					<div>
						<div className="username">
							{lanyard?.data.discord_user.username}
							<span className="discrim">
								#{lanyard?.data.discord_user.discriminator}
							</span>
						</div>
						{lanyard?.data.activities[0]?.type === 4 && (
							<p>{lanyard?.data.activities[0]?.state}</p>
						)}
					</div>
				</div>
				<div className="spotify">
					<img
						src={
							lanyard?.data.spotify?.album_art_url ??
							"/emptysong.jpg"
						}
						alt="Spotify Album Art"
					/>
					<div>
						<h4>Spotify</h4>
						<p>
							{lanyard?.data.listening_to_spotify
								? `${lanyard?.data.spotify?.song} by ${lanyard?.data.spotify?.artist}`
								: "Not Listening to Anything"}
						</p>
						<p>
							{lanyard?.data.listening_to_spotify &&
								lanyard?.data.spotify?.album}
						</p>
					</div>
				</div>
			</div>
			{/* <pre>{JSON.stringify(lanyard?.data, null, 2)}</pre> */}
		</>
	);
}
