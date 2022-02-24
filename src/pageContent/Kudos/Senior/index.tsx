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
            <div className={styles.name}>Hello my name is {name} </div>
            <Link href={seniorUrl}><div className={styles.link}>Click Here</div></Link>
            <div className={styles.description}>Lorem ipsum :)</div>
        </div>
        
    );
}

export default SeniorCard;