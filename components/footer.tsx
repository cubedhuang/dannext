import Image from "next/image";
import Link from "next/link";

import transparent from "../public/transparent.svg";

export default function Footer() {
	return (
		<>
			<style jsx>{`
				footer {
					background: #080808;

					position: absolute;
					bottom: 0;
					width: 100%;
					min-height: 5rem;
					padding: 1rem 0;

					display: flex;
					justify-content: center;
					align-items: center;

					> div {
						width: var(--container);
						margin: 0 auto;

						display: flex;
						justify-content: space-between;
						align-items: center;
						gap: 2em;

						> * {
							display: flex;
						}

						> :first-child {
							align-items: center;
						}

						> :last-child {
							flex: 1;
							flex-direction: column;
							text-align: right;
							justify-content: stretch;
							align-items: stretch;
						}

						.logo {
							position: relative;
							height: 3em;
							aspect-ratio: 1;
							margin-left: 0.5rem;
						}
					}
				}
			`}</style>

			<footer>
				<div>
					<div>
						Made with &hearts; by Slate Development Team
						<span className="logo">
							<Image src={transparent} alt="Slate Logo" layout="fill" />
						</span>
					</div>
					<div>
						<span>
							<Link href="/">Home</Link>
						</span>
						<span>
							<Link href="/privacy">Privacy Policy</Link>
						</span>
					</div>
				</div>
			</footer>
		</>
	);
}
