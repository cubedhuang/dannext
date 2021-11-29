import Link from "next/link";

export default function Nav() {
	return (
		<div className="nav-container">
			<nav>
				<span>
					<Link href="/">Home</Link>
				</span>
				<span>
					<Link href="/projects">Projects</Link>
				</span>
			</nav>
		</div>
	);
}
