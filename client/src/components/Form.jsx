import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Form.css'

const Form = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const newRecipe = {
        name,
        ingredients,
        instructions
    };

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/form/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRecipe)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        fetchData();
    };

    return (
        <>
        <Navbar/>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-input"/>
            </label>
            <label>
                Ingredients:
                <textarea value={ingredients} onChange={e => setIngredients(e.target.value)} className='form-textarea'/>
            </label>
            <label>
                Instructions:
                <textarea value={instructions} onChange={e => setInstructions(e.target.value)} className='form-textarea' />
            </label>
            <button className="btn"type="submit">Create Recipe</button>
        </form>
        <Footer/>
        </>
    );
}

export default Form;