import React from 'react';
import '../../css/base/header_styling.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className={'header_bar'}>
                <div className={'header_container'}>
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
}