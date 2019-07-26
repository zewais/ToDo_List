import React from "react";
import Item from "./item";

const Items = (props) => {
    return(
        
    <div>

        <div className="widget-header">
        <h3 className="widget-header__title">Your Items List</h3>
        <button className="button--link"
        onClick = {props.handleDeleteItems}
        >
        Remove All Items
        </button>
        </div>
        {
            props.items.length === 0 && 
            <p className="widget__message">Please add and item to get started</p>}
        {
            props.items.map((item, index) =>(
                <Item 
                key={item}
                itemText = {item}
                count = {index + 1}
                handleDeleteItem = {props.handleDeleteItem}
                />
            ))
        }
    
    </div>
    )
    console.log("Hello")
}



export default Items;