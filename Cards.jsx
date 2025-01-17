import React from 'react'

function Cards({ product, addToCart, cartList  }) {
    return (
        <div className="col-lg-4 mb-3 mt-3 ml-3">
            <div className="card" style={{ width: "14rem" }}>
                <div className="badge bg-dark text-white position-absolute position-end">{product.sale ? "sale" : ""}
                </div>
                <img
                    src={product.img}
                    className="card-img-top"
                    alt="..."
                    width="100" height="100" />

                <div className="card-body text-center">
                    {/* Porudct Name */}
                    <h5 className="card-title ">{product.title}</h5>
                    {/* Star Ratings */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill">{product.star ? "⭐⭐⭐⭐⭐" : <div>&nbsp;</div>}</div>
                    </div>
                    {/* Product Price */}
                    <span>Rs.{product.price}</span>

                    <br />
                    {/* disable button add on cart */}
                    <button 
                    //To find condition check whether its true or false 
                    disabled={cartList.some(select => select.id === product.id)}
                    onClick={() => addToCart(product)}
                    className="btn btn-primary" >
                        {product.btnname}
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Cards