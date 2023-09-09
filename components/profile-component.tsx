import Link from 'next/link'
import React from 'react'
import styles from '../styles/Profile.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';

export default function ProfileComponent() {
    return (
        <div>
            <header className={styles.header}>
                <Link href="/" className={styles.backlink}>
                    <ArrowBackIosIcon className={styles.arrowbackicon} />
                </Link>
                <h1 className={styles.h1}>Profile Page</h1>
                <MenuIcon className={styles.menuicon} />
            </header >
            <body className={styles.body}>
                <p>bodyだよん</p>
            </body>
        </div >
    )

}
