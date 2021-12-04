import React from "react";

const styles ={
    li:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: '4px',
        marginBottom:".5rem"
    }
}
function ShopItem ({shop}) {
    return (
        <li style={styles.li}>
           {shop.name} 
           <li>
             {shop.price}
            </li>
        </li>
    )
}

export default ShopItem 