import React from 'react';
import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import css from './SharedLayout.module.css'

const SharedLayout = () => {
    return (
        <div className={css.Container}>
            <header className={css.header}>
                {/* <nav className={css.Navigation}> */}
                    <ul className={css.NavList}>
                        <li className={css.NavItem}>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className={css.NavItem}>
                            <Link to="/movies">
                                Movies
                            </Link>
                        </li>
                    </ul>
                {/* </nav> */}
            </header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};
export default SharedLayout;