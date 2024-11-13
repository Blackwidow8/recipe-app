import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Recipes.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import withAuth from "../context/withAuth";

const Recipes = withAuth(()=>{

    const [ recipes, setRecipes ] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async ()=>{
        const response = await fetch('http://127.0.0.1:8000/recipes/')
        const data = await response.json()
        console.log(data)
        setRecipes(data.map(recipe =>({...recipe, isFavorite: false})))
    }

    const [message, setMessage] = useState ('');
    const toggleFavorite = (id) => {
        setRecipes(prevRecipes => {
          const updatedRecipes = prevRecipes.map(recipe => 
            recipe.id === id ? {...recipe, isFavorite: !recipe.isFavorite} : recipe
          );
      
          // Store the favorite recipes in the localStorage
          const favoriteRecipe = updatedRecipes.filter(recipe => recipe.isFavorite);
          let storedFavoriteRecipe= JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      
          // Check if the recipe is already in the favorites
          favoriteRecipe.forEach(favoriteRecipe => {
            if (!storedFavoriteRecipe.some(storedRecipe => storedRecipe.id === favoriteRecipe.id)) {
              storedFavoriteRecipe.push(favoriteRecipe);
              setMessage('Recipe added to favorites');
            }
          });
      
          localStorage.setItem('favoriteRecipes', JSON.stringify(storedFavoriteRecipe));
      
          return updatedRecipes;
        });
      }
  
      
     

    useEffect(()=>{
        fetchData()
    }, [])
    return (
        <>
        <Navbar/>
        <section >
        <p>{message}</p>
            <input type="text" className="search-input" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)}/>
            <div className="card-container">
            {
                recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase())).map((recipe)=>{
                    return (
                        <Card key={recipe.id} className="Card" style={{width: '20rem', marginBottom:'5rem'}}>
                          
                           <Card.Img variant="top" src={`http://localhost:8000${recipe.image}`} alt={recipe.title} />
                           <Card.Body>
                            <Card.Title>{recipe.title}</Card.Title>
                            <Card.Text>{recipe.description}</Card.Text>


                            <Button variant="primary" onClick={() => toggleFavorite(recipe.id)}>
                                 <FontAwesomeIcon icon={faHeart} color={recipe.isFavorite ? "black" : "white"}/>
                                 </Button>
                            </Card.Body>
                        
                        </Card>
                        
                    )
                })
            }

          </div>
        </section>
        <Footer/>
        </>
    )
})

export default Recipes