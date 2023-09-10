import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Portfolio.module.css';
import Header from './module/Header-component';

const PortfolioComponent: React.FC = () => {
    const [articles, setArticles] = useState<any[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/get-articles');
                const data = await response.json();
                console.log("API Response:", data); // この行を追加

                if (data && data.articles && data.articles.rows) {
                    setArticles(data.articles.rows);
                }

            } catch (error) {
                console.error("記事の取得に失敗しました:", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className={styles.container}>
            <Header title="Portfolio Page" />
            <div className={styles.body}>
                <h1>記事一覧</h1>
                <div className={styles.grid}>
                    {articles.map(article => (
                        <Link href={`/article/${article.id}`} key={article.id} className={styles.card}>
                            <div>
                                <h2>{article.title} &rarr;</h2>
                                <p>{article.body}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioComponent;
