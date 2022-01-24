import Image from "next/image";

interface InterestProps {
	name: string;
	desc: string;
	bg: string;
	href: string;
}

export default function Interest({ name, desc, bg, href }: InterestProps) {
	return (
		<>
			<style global jsx>{`
				.interest {
					width: 100%;
					display: inline-block;
					overflow: hidden;

					color: #fff;

					background-size: cover;
					background-position: center;

					display: flex;
					flex-direction: column;
					align-items: left;
					justify-content: center;

					margin: 1em 0;
					padding: 2em;
					border-radius: 1em;

					&::after {
						content: "";
						position: absolute;
						inset: 0;

						background-color: #0008;
						opacity: 0;
						transition: opacity 0.4s;
					}

					div:not(.text) {
						transition: transform 0.4s;
						background-color: #0004;
					}
					.text {
						transition: transform 0.4s, opacity 0.4s;
						opacity: 0;
						transform: scale(0.95);
						z-index: 1;
					}

					&:hover,
					&:focus,
					&:active {
						text-decoration: none;
					}

					&:hover {
						&::after {
							opacity: 1;
						}

						div {
							transform: scale(1.02);
						}
						.text {
							transform: scale(1);
							opacity: 1;
						}
					}
				}
			`}</style>

			<a
				href={href}
				target="_blank"
				rel="noreferrer noopener"
				className="interest"
			>
				<Image src={bg} alt={name} layout="fill" objectFit="cover" />
				<div className="text">
					<h2>{name}</h2>
					<p>{desc}</p>
				</div>
			</a>
		</>
	);
}
