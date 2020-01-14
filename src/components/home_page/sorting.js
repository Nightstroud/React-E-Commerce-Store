import React from 'react';
import './../../css/home-page/sorting.css';

export default class Sorting extends React.Component {

    render() {
        return (
            <div className={'sortingContainer'}>
                Sort by type :
                <select id={'sortingCart'}>
                    <option value={'none'}>All</option>
                    <option value={'phone'}>Phones</option>
                    <option value={'tv'}>Televisions</option>
                    <option value={'small-appliance'}>Small Appliances</option>
                    <option value={'refrigerator'}>Refrigerators</option>
                    <option value={'watch'}>Watches</option>
                    <option value={'action-camera'}>Action Cameras</option>
                </select>
            </div>
        );
    }
}