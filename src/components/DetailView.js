import React from 'react';
import './styles/DetailView.css';

const DetailView = ({pokemon}) => {
    const {id, name, sprite, type} = pokemon;

    return (
        <section className="detailView">
            <img src={sprite} className='spriteImage' alt="sprite" />
            <div className="dataWrapper">
                <h1 className="dataName">ID: {id} {name}</h1>
                <p className="dataChar">Type: {type}</p>
            </div>
        </section>
    )
}

export default DetailView