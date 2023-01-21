import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { songData } from "@/models/song";
import TweetBox from "@/components/tweetBox";

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

export default function Home() {
	return (
		<main className={(styles.main, inter.className, styles.container)}>
			<h1 className={styles.heading}>Halsey lyric tweet generator</h1>
			<p className={styles.filter}>Filter by album</p>
			{/* @ts-expect-error Server Component */}
			<TweetBox />
		</main>
	);
}
