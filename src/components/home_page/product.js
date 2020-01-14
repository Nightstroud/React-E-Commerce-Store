import React from 'react';
import '../../css/home-page/products.css';
import Sorting from "./sorting";

export default class Product extends React.Component {
    state = {
        object: null,
        value: 'none',
    };

    async componentDidMount() {
        let response = await fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products');
        let data = await response.json();
        this.setState({object: data});
    }

    render() {
        if (this.state.object) {
            let cart = JSON.parse(localStorage.getItem(`CART_USER: ${JSON.parse(localStorage.getItem('USERNAME')).trim().toUpperCase()}`));
            if (!cart) {
                cart = [];
            }
            if (this.state.value === 'none') {
                return (
                    <div>
                        <div className={'thisasdf'}>
                            <Sorting/>
                            <button
                                onClick={() => {
                                    let value = window.document.getElementById('sortingCart').value;
                                    this.setState({value})
                                }}>Sort
                            </button>
                        </div>
                        {
                            this.state.object.map(Product => {
                                return <div key={Product.id} className='Product'>
                                    <div className='Image'><img src={Product.img} alt={'NOTHING'}/></div>
                                    <div className='Body'>
                                        <div className='Title'>{Product.title}</div>
                                        <div className='Description'>{Product.description}</div>
                                        <div className='Ratings'>
                                            <div className='Input'>
                                                <div className='Price'>${Product.price}</div>
                                                <div className='Stars'>{Product.rating}</div>
                                            </div>
                                            <button onClick={() => {
                                                cart[cart.length] = Product;
                                                console.log(cart);
                                                localStorage.setItem(`CART_USER: ${JSON.parse(localStorage.getItem('USERNAME')).trim().toUpperCase()}`, JSON.stringify(cart));
                                                window.location.replace('http://localhost:3000/cart');
                                            }}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            })}
                    </div>
                );
            } else {
                let valueX = this.state.value;
                return (
                <div>
                    <div className={'thisasdf'}>
                        <Sorting/>
                        <button
                            onClick={() => {
                                let value = window.document.getElementById('sortingCart').value;
                                console.log(value);
                                this.setState({value})
                            }}>Sort
                        </button>
                    </div>
                    {
                        this.state.object.map(Product => {
                            if (valueX !== Product.category) {
                                return <div key={Product.id}></div>;
                            }
                            return <div key={Product.id} className='Product'>
                                <div className='Image'><img src={Product.img} alt={'NOTHING'}/></div>
                                <div className='Body'>
                                    <div className='Title'>{Product.title}</div>
                                    <div className='Description'>{Product.description}</div>
                                    <div className='Ratings'>
                                        <div className='Input'>
                                            <div className='Price'>${Product.price}</div>
                                            <div className='Stars'>{Product.rating}</div>
                                        </div>
                                        <button onClick={() => {
                                            cart[cart.length] = Product;
                                            console.log(cart);
                                            localStorage.setItem(`CART_USER: ${JSON.parse(localStorage.getItem('USERNAME')).trim().toUpperCase()}`, JSON.stringify(cart));
                                            window.location.replace('http://localhost:3000/cart');
                                        }}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        })}
                </div>
            )
            }
        }
        else return <div>loading...</div>
    }
}