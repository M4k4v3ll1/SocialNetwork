import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <FlexWrapper justify={'flex-start'}>
                <ul className={s.ul}>
                    <li ><NavLink to="/profile" className={s.item} activeClassName={s.item_active}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" className={s.item} activeClassName={s.item_active}>Messages</NavLink></li>
                    <li><NavLink to="/news" className={s.item} activeClassName={s.item_active}>News</NavLink></li>
                    <li><NavLink to="/music" className={s.item} activeClassName={s.item_active}>Music</NavLink></li>
                    <li><NavLink to="/settings" className={s.item} activeClassName={s.item_active}>Settings</NavLink></li>
                </ul>
            </FlexWrapper>
        </nav>
    );
};
