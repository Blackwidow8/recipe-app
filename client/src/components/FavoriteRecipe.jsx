import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        const storedFavoriteRecipes = localStorage.getItem('favoriteRecipes');
        if (storedFavoriteRecipes) {
          setFavoriteRecipes(JSON.parse(storedFavoriteRecipes));
        } else {
          setFavoriteRecipes([]);
        }
      }, []);
 
    const removeFavorite = (id) => {
        // Remove the recipe from the favoriteRecipes state
        setFavoriteRecipes(prevFavoriteRecipes => {
          const updatedFavoriteRecipes = prevFavoriteRecipes.filter(recipe => recipe.id !== id);
          
          // Update the favorite recipes in the localStorage
          localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavoriteRecipes));
      
          setMessage('Recipe removed from favorites');
      
          return updatedFavoriteRecipes;
        });
      }
      
  
    return (
       
        <section className="card-container">
             <Navbar/>
            {
                favoriteRecipes && favoriteRecipes.map((recipe) => {
                    return (
                        <Card key={recipe.id} className="Card" style={{ width: '20rem', marginBottom: '5rem' }}>
                            <Card.Img variant="top" src={`http://localhost:8000${recipe.image}`} alt={recipe.title} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text>{recipe.description}</Card.Text>
                                <Button variant="primary" onClick={() => removeFavorite (recipe.id)}>
                                    <FontAwesomeIcon icon={faHeart} color="black" />
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
              <Footer/>
        </section>
      
    )
}

export default Favorites;