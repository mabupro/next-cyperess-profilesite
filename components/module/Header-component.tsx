import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <ArrowBackIosIcon className={styles.arrowbackicon} data-testid="back-arrow-icon" />
            </Link>
            <h1 className={styles.h1}>{title}</h1>
            <MenuIcon className={styles.menuicon} data-testid="menuicon" />
        </header>
    );
}

export default Header;
