import React from 'react';
import '../../css/base/header_styling.css';
import { useSelector } from "react-redux";


export default function Header() {
    const username = useSelector(state => state.username);

    return (
        <div className={'header_bar'}>
            <div className={'header_container'}>
                <div>{username}</div>
                <div className={'links'}>
                    <ul>
                        <li><a href={'http://localhost:3000/login'}>Login</a></li>
                        <li><a href={'http://localhost:3000/home'}>Home</a></li>
                        <li><a href={'http://localhost:3000/products_page'}>Products Page</a></li>
                        <li><a href={'http://localhost:3000/cart'}>Cart</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}