import PortfolioComponent from '../components/portfolio-component'
import styles from '../styles/Portfolio.module.css'

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <PortfolioComponent />
            </main>
        </div>
    )
}
