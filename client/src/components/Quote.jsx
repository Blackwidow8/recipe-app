
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Quote = () =>{
    return(
<div className="section quote">
    <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>You win some, and you lose some. And sometimes, your soul gets blended in an existential mixer and served to you as a melancholy milkshake.</p>
    <p className="quote-auther">-TurboFuture</p>
</div>

    )
}

export default Quote;