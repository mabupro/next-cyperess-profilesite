import Link from 'next/link';
import React from 'react';
import styles from '../styles/Profile.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';

export default function ProfileComponent() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/" className={styles.backlink}>
                    <ArrowBackIosIcon className={styles.arrowbackicon} />
                </Link>
                <h1 className={styles.h1}>Profile Page</h1>
                <MenuIcon className={styles.menuicon} />
            </header>

            <div className={styles.body}>
                <h2>プロフィール</h2>

                <p><strong>名前</strong>: 眞野慎也</p>

                <p><strong>SNS</strong>: <a href="https://twitter.com/mabupro_tec" target="_blank">@mabupro_tec</a></p>

                <p><strong>自己紹介</strong>:<br />
                    こんにちは、眞野慎也です。私はモノづくりが好きな人です。幼いころから積み木でペン立てを作り、それが絵、ラジオ、動画編集、webサイト作成、IoTと変化してきました。今も昔も形に残るものを作るのが楽しいと感じています。将来は、モノづくりを通して、皆さんの生活がより豊かになるような製品やサービスを提供したいと考えています。どうぞよろしくお願いします。</p>

                <p><strong>学歴</strong>: 岐阜協立大学 経営学部情報メディア学科</p>

                <p><strong>スキル</strong>: HTML, CSS, JavaScript, Firebase, Python</p>

                <p><strong>資格 & 受賞歴</strong>: ITパスポート, 基本情報技術者試験, NagoyaWeb3Hackson DENSO賞 優秀賞</p>

                <p><strong>趣味 & 興味</strong>:<br />
                    勝負事を見ることが好きで、スポーツ観戦を楽しんでいます。また、個人的にはギターを演奏するのも好きです。</p>

                <p><strong>リンク</strong>:</p>
                <ul>
                    <li><a href="https://qiita.com/mabupro" target="_blank">Qiita</a></li>
                    <li><a href="https://github.com/mabupro" target="_blank">Github</a></li>
                </ul>

            </div>
        </div>
    );
}
