import React from "react";
import Image from "next/image";
import styles from "./tweetBox.module.css";
import VerifiedIcon from "./svgs/VerifiedIcon.svg";
import { songData } from "@/models/song";
import {
	getCurrentDate,
	getCurrentTime,
	getRandomInteractionNum,
} from "@/methods/fetchData";
import GenerateBtn from "./generateBtn";

function randomIndex(length: number) {
	return Math.floor(Math.random() * length);
}

async function getRandomLyric(artist: string) {
	try {
		const data = await fetch(
			`${process.env.API_URL}/${artist}/song/random/info`,
			{ cache: "no-store" }
		);
		return data.json();
	} catch (error) {
		console.error(error);
	}
}

async function TweetBox() {
	const songData = await getRandomLyric("Halsey");

	const date = new Date(songData?.releaseDate);

	return (
		<>
			<div className={styles.tweet_box}>
				<div className={styles.tweet_content}>
					<div className={styles.user_row}>
						<Image
							src="/assets/pfp.webp"
							width={48}
							height={48}
							alt="tweet profile"
							className={styles.pfp}
						/>
						<div className={styles.user_info}>
							<div className={styles.name_row}>
								<span className={styles.user_tag}>h</span>
								<VerifiedIcon />
							</div>
							<span className={styles.user_tag}>@halsey</span>
						</div>
					</div>
					<p className={styles.tweet_txt}>
						{songData?.song.lyrics[randomIndex(songData?.song.lyrics.length)]}
					</p>
					<div className={styles.metadata_row}>
						<p className={styles.time}>
							{getCurrentTime()}&nbsp;&nbsp;{getCurrentDate()}
						</p>
						<p className={styles.album_info}>
							{songData?.song.name + " | "}
							{songData?.albumName}, {date.getFullYear()}
						</p>
					</div>

					<div className={styles.tweet_counts}>
						<div className={styles.interaction}>
							<span className="bold">{getRandomInteractionNum()}</span>{" "}
							<span className={styles.light}>Retweets</span>
						</div>
						<div className={styles.interaction}>
							<span className="bold">{getRandomInteractionNum()}</span>{" "}
							<span className={styles.light}>Quote Tweets</span>
						</div>
						<div className={styles.interaction}>
							<span className="bold">{getRandomInteractionNum()}</span>{" "}
							<span className={styles.light}>Likes</span>
						</div>
					</div>

					<div className={styles.center}>
						<div className={styles.actions_row}>
							<Image
								src="/assets/icons/msg-crop.png"
								width={25}
								height={23.07}
								alt="message icon"
								className={styles.icon}
							/>
							<Image
								src="/assets/icons/rt-crop.png"
								width={32}
								height={17}
								alt="retweet icon"
								className={styles.icon}
							/>
							<Image
								src="/assets/icons/heart-crop.png"
								width={26}
								height={23.3}
								alt="like icon"
								className={styles.icon}
							/>
							<Image
								src="/assets/icons/share-crop.png"
								width={22}
								height={22.5}
								alt="share icon"
								className={styles.icon}
							/>
						</div>
					</div>
				</div>
			</div>
			<GenerateBtn />
		</>
	);
}

export default TweetBox;
