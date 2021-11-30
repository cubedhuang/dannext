import Image from "next/image";

interface ProjectProps {
	name: string;
	bg: string;
	href: string;
}

export default function Project({ name, bg, href }: ProjectProps) {
	return (
		<>
			<style global jsx>{`
				.project {
					width: 100%;
					display: inline-block;
					overflow: hidden;

					color: #fff;

					background-size: cover;
					background-position: center;

					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					margin: 1em 0;
					padding: 3em 1em;
					border-radius: 1em;

					&::after {
						content: "";
						position: absolute;
						inset: 0;

						background-color: #0006;
						opacity: 0.5;
						transition: opacity 0.5s;
					}

					div {
						transition: transform 0.5s;
					}
					h2 {
						transition: transform 0.5s;
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
							transform: scale(1.05);
						}
						h2 {
							transform: scale(1.15);
						}
					}
				}
			`}</style>

			<a href={href} target="_blank" rel="noreferrer" className="project">
				<Image src={bg} alt={name} layout="fill" objectFit="cover" />
				<h2>{name}</h2>
			</a>
		</>
	);
}
