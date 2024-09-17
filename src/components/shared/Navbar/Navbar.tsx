import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Sheet from '../../ui/Sheet/Sheet';
import { INavbarComponent } from './Navbar.interface';
import styles from './Navbar.module.css';
import { navbarLinks } from './NavbarLinks';

const Navbar = ({ color = 'dark' }: INavbarComponent) => {
	const { pathname } = useLocation();

	return (
		<AnimatePresence mode="wait">
			<motion.div className={styles.wrapper} id="navbar">
				<Sheet color={color} className={styles.navbar}>
					{navbarLinks.map(link => (
						<Link
							key={link.id}
							to={link.to}
							className={clsx(styles.item, {
								[styles['item-active']]: link.to === pathname,
							})}
						>
							{link.icon}
							<div className={styles.text}>{link.title}</div>
						</Link>
					))}
				</Sheet>
			</motion.div>
		</AnimatePresence>
	);
};

export default Navbar;
