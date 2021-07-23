interface FeatureProps {
	name: string;
	color: string;
	order: number;
	noHover?: boolean;
	children: any;
}

export default function Feature({
	name,
	color,
	order,
	noHover,
	children
}: FeatureProps) {
	return (
		<>
			<style jsx>{`
				.feature {
					background: ${color};
					padding: 1.5em;
					border-radius: 1em;

					position: relative;
					z-index: 1;
					overflow: hidden;

					flex: 1 1 30ch;

					display: flex;
					flex-direction: column;
					gap: 0.3em;

					animation-name: enter;
					animation-duration: 1s;
					animation-fill-mode: both;
					animation-delay: ${order * 100}ms;

					h3 {
						font-size: 1.6rem;
						width: 100%;
					}

					p {
						flex: 1;
					}

					&::after {
						content: "";
						position: absolute;
						inset: 0;
						background-color: #0003;
						z-index: -1;
						transition: opacity 0.2s ease;
					}

					&:hover::after {
						opacity: ${noHover ? 1 : 0};
					}
				}

				@keyframes enter {
					from {
						opacity: 0;
						transform: translateY(1em);
					}

					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>

			<div className="feature">
				<h3>{name}</h3>
				<p>{children}</p>
			</div>
		</>
	);
}
