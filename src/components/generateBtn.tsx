"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import React from "react";
import styles from "./generateBtn.module.css";

function GenerateBtn() {
	const router = useRouter();

	async function handleChange() {
		router.refresh();
	}

	return (
		<button className={styles.btn} onClick={handleChange}>
			Generate new tweet
		</button>
	);
}

export default GenerateBtn;
