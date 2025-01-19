import React, { useContext , useState , useEffect }  from "react";
import "../clothes/clothes.css"
import axios from "axios"
import { CartContext } from "../../context/cartcontext";

const Clothes =()=>{
    
    const {cart ,AddToCart} = useContext(CartContext);


    const [ClothData, setClothData] = useState([]);
    const [productDetail, setproductDetail] = useState([]);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    
    useEffect(()=>{
        try {
            const fetchData =async()=>{
                const ResponseData =await axios.get("https://api.escuelajs.co/api/v1/products");
                const data = ResponseData.data;
                const FilterClothdata = data.filter((item)=>item.category.name==="Clothes")
                setClothData([...FilterClothdata])
            }

            fetchData ()
        } catch (error) {
            console.log("there has been an error" , error)
        }
    },[])

    const handleViewDetil =(e,item)=>{
        e.preventDefault();
        setproductDetail(item);
        setIsDetailOpen(!isDetailOpen)
        
    }
    const handletCloseDetail =()=>{
        setIsDetailOpen(!isDetailOpen)
    }
    
    return(
        <div className="Clothespage">

            <div className="Clothespage-1">
                <h1>Clothes</h1>
                <input type="text" placeholder="search a product"/>
            </div>
            <div className="Clothespage-2">
                {ClothData.length===0 ?
                
                <div className="Clothespage-2-1">
                    <img src="https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png" alt="sad-emoji" />
                    <h2>Nothing related :(</h2>
                </div>
                :
                <div>
                    <div className="Clothespage-2-2">
                        {ClothData.map((item)=>(
                            
                            <div className="card" onClick={(e)=>{handleViewDetil(e,item)}}>
                                <div className="card-main">
                                    <img src={item.category.image} alt={item.title} />
                                    

                                    <img onClick={(e)=>handleAddToCart(e,item)}  className="add-sign" src="https://www.svgrepo.com/show/532997/plus-large.svg" alt="add sign" />
                                    <p className="card-p">{item.category.name}</p>
                                </div>

                                <div className="card-text">
                                    <p>{item.title.slice(0,20)}</p>
                                    <h1 >${item.price}</h1>
                                </div>
                            </div>
                            
                        ))}
                    </div>

                </div>
            
                }
            </div>


            {isDetailOpen && <div className="details">
                
                <h1>Details</h1> 
                <hr />
                <img src={productDetail.category.image} alt={productDetail.title} />
                <h3>{productDetail.title}</h3>
                <h1>${productDetail.price}</h1>
                <p>{productDetail.description}</p>
                <img onClick={handletCloseDetail} src="https://www.svgrepo.com/show/506172/cross.svg" alt="cross-sign"  className="cross-sign"/>
            </div>}
            

            
        </div>
    )
}

export default Clothes;