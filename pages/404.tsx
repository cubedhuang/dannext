import Head from "next/head";
import Link from "next/link";

export default function My404() {
	return (
		<>
			<Head>
				<title>404 &ndash; Not Found!</title>
			</Head>

			<div className="container">
				<div>
					<h1>A 404 error occurred ⛔!</h1>
					<p>
						Seems like this page doesn&apos;t exist. How about we{" "}
						<Link href="/">go back</Link>?
					</p>
				</div>
			</div>
		</>
	);
}
