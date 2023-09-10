import ArticlePostComponent from "../components/articlepost-component";
import styles from "../styles/Create.module.css";

export default function ArticlePost() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <ArticlePostComponent />
            </div>
        </div>
    )
}