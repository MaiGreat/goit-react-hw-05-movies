
import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './SharedLayout.module.css';

const SharedLayout = () => {


    return (
        <div className={css.Container}>
            <header className={css.header}>
                <ul className={css.NavList}>
                    <li className={css.NavItem}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={css.NavItem}>
                        <Link to="/movies">Movies</Link>
                    </li>
                </ul>
            </header>
            
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default SharedLayout;