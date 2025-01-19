import React,{useEffect,useState,useContext}  from "react";
import "../home/home.css"
import axios from "axios"
import { CartContext } from "../../context/cartcontext";

const Home =()=>{
    const {cart ,AddToCart} = useContext(CartContext);


    const [homeData, setHomeData] = useState([]);
    const [productDetail, setproductDetail] = useState([]);
    const [isDetailOpen, setIsDetailOpen] = useState(false);


    const [inputValue, setInputValue] = useState("");

    // for fetch data

    useEffect(()=>{
        try {
            const fetchData =async()=>{
                const ResponseData =await axios.get("https://api.escuelajs.co/api/v1/products");
                setHomeData([...ResponseData.data])
            }

            fetchData ()
        } catch (error) {
            console.log("there has been an error" , error)
        }
    },[])




    // for filter

    useEffect(() => {
        if (inputValue) {
            try {
                const Fetchdata = async()=>{
                    const ResponseData =await axios.get("https://api.escuelajs.co/api/v1/products");
                    const maindata = ResponseData.data ;
                    
                    const filtered = maindata.filter((product) =>
                        product.title.includes(inputValue)
                    );

                    
                    setproductDetail([...filtered]);
                }
                Fetchdata()
            } catch (error) {
                
            }
        }
    }, [inputValue ,productDetail]);





    const handleViewDetil =(e,item)=>{
        e.preventDefault();
        setproductDetail(item);
        setIsDetailOpen(!isDetailOpen)
        
    }
    const handletCloseDetail =()=>{
        setIsDetailOpen(!isDetailOpen)
    }

    const handleAddToCart =(e,item)=>{
        setIsDetailOpen(false)
        e.preventDefault();
        AddToCart(item)
    }
    

    return(
        <div className="homepage">

            <div className="homepage-1">
                <h1>Home</h1>
                <input type="text" placeholder="search a product" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            <div className="homepage-2">
                {homeData.length===0 ?
                
                <div className="homepage-2-1">
                    <img src="https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png" alt="sad-emoji" />
                    <h2>Nothing related :(</h2>
                </div>
                :
                <div>
                    <div className="homepage-2-2">
                        {homeData.map((item)=>(
                            
                            <div key={item.id} className="card" onClick={(e)=>{handleViewDetil(e,item)}}>
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

export default Home;