import React  from "react";
import "../toys/toys.css"


const Toys =()=>{
    return(
        <div className="homepage-2-1">
            <div className="homepage-1">
            <h1>Toys</h1>
            <input type="text" placeholder="search a product"/>
            </div>
            <img style={{"marginTop":"50px"}} src="https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png" alt="sad-emoji" />
            <h2>Nothing related :(</h2>
        </div>
    )
}

export default Toys;