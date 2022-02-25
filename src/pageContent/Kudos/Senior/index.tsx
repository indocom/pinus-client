import Link from 'next/link'
import React from "react";
import styles from "./styles.module.css";

export interface SeniorProps {
    name: string;
    seniorUrl: string;
}

const SeniorCard= ({name, seniorUrl}: SeniorProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.name}>{name} </div>
            <Link href={seniorUrl}><div className={styles.link}>Send your Kudos!</div></Link>
        </div>
        
    );
}

export default SeniorCard;