import Link from "next/link";

export default function Nav() {
	return (
		<div className="nav-container">
			<nav>
				<span>
					<Link href="/">Hi 🏠</Link>
				</span>
				<span>
					<Link href="/anime">Anime ✨</Link>
				</span>
				<span>
					<Link href="/projects">Projects 📙</Link>
				</span>
				<span>
					<a
						href="https://github.com/cubedhuang/dannext"
						target="_blank"
						rel="noreferrer"
					>
						Source 💻
					</a>
				</span>
			</nav>
		</div>
	);
}
