import ProfileComponent from "../components/profile-component";
import styles from "../styles/Profile.module.css";

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <ProfileComponent />
            </div>
        </div>
    )
}