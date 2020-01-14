import React from 'react';
import Product from "./product";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <p>This is the home page.</p>
                <Product/>
            </div>
        );
    }
}