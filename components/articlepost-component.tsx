import React, { useState } from 'react';
import styles from '../styles/Create.module.css'
import Header from './module/Header-component';

const ArticlePost: React.FC = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/add-article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, body }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || '記事の投稿に失敗しました。');
            }

            // 成功した場合の処理（例：フォームをクリアする）
            setTitle('');
            setBody('');
            alert('記事を投稿しました！');
        } catch (error) {
            console.error(error);
            alert(error.message);
        }

        setIsSubmitting(false);
    };

    return (
        <div className={styles.container}>
            <Header title="AritclePost Page" />
            <div className={styles.contents}>
                <h2>記事を投稿</h2>

                <div>
                    <label>
                        タイトル:
                        <input
                            className={styles.inputField}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="タイトルを入力..."
                        />
                    </label>
                </div>

                <div className={styles.body}>
                    <label>
                        本文:
                        <textarea
                            className={styles.textareaField}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            rows={10}
                            placeholder="記事の本文を入力..."
                        ></textarea>
                    </label>
                </div>

                <button
                    className={styles.submitButton}
                    onClick={handleSubmit}
                    disabled={!title || !body || isSubmitting}
                >
                    記事を投稿
                </button>

            </div>

        </div>
    );
};

export default ArticlePost;
