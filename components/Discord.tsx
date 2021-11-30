import Clock from "react-live-clock";
import { LanyardData, useLanyard } from "react-use-lanyard";

const USER_ID = "299707523370319883";

export default function Discord() {
	const { status: lanyard } = useLanyard({
		userId: USER_ID,
		socket: true
	});

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
							width: 4em;
						}

						.username {
							font-size: 1.2em;

							.discrim {
								opacity: 0.5;
							}
						}

						.custom {
							font-size: 0.8rem;
						}

						.right {
							margin-left: auto;
							text-align: right;

							.time {
								opacity: 0.5;
							}
							p {
								&.online {
									color: #4cd137;
								}
								&.idle {
									color: #fbc531;
								}
								&.dnd {
									color: #e84118;
								}
								&.offline {
									color: #7f8fa6;
								}
							}
						}
					}

					.spotify {
						display: flex;
						align-items: center;
						padding-top: 1em;
						gap: 1em;

						h4 {
							font-weight: normal;
						}

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
					{lanyard?.discord_user.avatar && (
						<img
							src={`https://cdn.discordapp.com/avatars/${USER_ID}/${
								lanyard?.discord_user.avatar
							}.${
								lanyard?.discord_user.avatar.startsWith("a_")
									? "gif"
									: "webp"
							}?size=256`}
							alt="Discord Avatar"
						/>
					)}
					<div>
						<div className="username">
							{lanyard?.discord_user.username}
							<span className="discrim">
								#{lanyard?.discord_user.discriminator}
							</span>
						</div>
						<p className="custom">
							{lanyard?.activities[0]?.type === 4 && (
								<p>{lanyard?.activities[0]?.state}</p>
							)}
						</p>
					</div>
					<div className="right">
						<p className="time">
							<Clock
								format={"HH:mm:ss"}
								ticking={true}
								timezone={"US/Eastern"}
							/>{" "}
							in Atlanta
						</p>
						<p className={lanyard?.discord_status ?? "offline"}>
							{getStatusString(lanyard)}
						</p>
					</div>
				</div>
				<div className="spotify">
					<img
						src={
							lanyard?.spotify?.album_art_url ?? "/emptysong.jpg"
						}
						alt="Spotify Album Art"
					/>
					<div>
						<h4>Spotify</h4>
						<p>
							{lanyard?.listening_to_spotify ? (
								<>
									<b>{lanyard?.spotify?.song}</b> by{" "}
									{lanyard?.spotify?.artist}
								</>
							) : (
								"Not Listening to Anything"
							)}
						</p>
						<p>
							{lanyard?.listening_to_spotify &&
								lanyard?.spotify?.album}
						</p>
					</div>
				</div>
			</div>
			{/* <pre>{JSON.stringify(lanyard, null, 2)}</pre> */}
		</>
	);
}

function getStatusString(lanyard: LanyardData | undefined) {
	if (!lanyard) return "";

	let str: string;

	switch (lanyard.discord_status) {
		case "online":
			str = "Online";
			break;
		case "idle":
			str = "Idle";
			break;
		case "dnd":
			str = "Do Not Disturb";
			break;
		default:
			return "Offline";
	}

	return `${str} on ${
		lanyard.active_on_discord_mobile ? "Mobile" : "Desktop"
	}`;
}
