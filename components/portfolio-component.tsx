import Link from 'next/link'
import React from 'react'
import styles from '../styles/Portfolio.module.css';
import Header from './module/Header-component';

const PortfolioComponent: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header title="Portfolio Page" />
            <div className={styles.body}>
                <h1>Portfolio Page</h1>
            </div>
        </div>
    )
}

export default PortfolioComponent;
