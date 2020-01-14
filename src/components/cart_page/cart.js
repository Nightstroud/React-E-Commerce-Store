import React from 'react';

export default class Cart extends React.Component {
    state = {
        object: JSON.parse(localStorage.getItem(`CART_USER: ${JSON.parse(localStorage.getItem('USERNAME')).trim().toUpperCase()}`)),
    };

    render() {
        let username = JSON.parse(localStorage.getItem('USERNAME'));
        let object = JSON.parse(localStorage.getItem(`CART_USER: ${JSON.parse(localStorage.getItem('USERNAME')).trim().toUpperCase()}`));
        if (!object) {
            return <div><p>THis is nothing</p><p>You have not purchased anything.</p></div>
        }
        return (
            <div>
                <p>This is nothing</p>
                {object.map(Product => {
                    return (
                        <div key={username + object.indexOf(Product)} className='Product'>
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

                                        let x = object.indexOf(Product);
                                        object.splice(x, 1);
                                        localStorage.setItem(`CART_USER: ${JSON.parse(localStorage.getItem('USERNAME')).trim().toUpperCase()}`, JSON.stringify(object));
                                        this.setState({object: JSON.parse(localStorage.getItem(`CART_USER: ${JSON.parse(localStorage.getItem('USERNAME')).trim().toUpperCase()}`))})

                                    }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <button id={'CONFIRMATION'} onClick={() => {
                    localStorage.setItem(`CART_USER: ${JSON.parse(localStorage.getItem('USERNAME')).trim().toUpperCase()}`, JSON.stringify([]));
                    this.setState({object: JSON.parse(localStorage.getItem(`CART_USER: ${JSON.parse(localStorage.getItem('USERNAME')).trim().toUpperCase()}`))})
                }}>Confirm Purchase</button>
            </div>
        )}}