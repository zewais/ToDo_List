import React from "react";

const Item = (props) => {
    return (
        <div className="item">
        <div>
            <input type="checkbox" id="cbox1" value="itemChecked"></input>
            <label className="item__text">{props.count}. {props.itemText}</label>
        </div>       
            <button className="button__small"
            onClick={(e) => {
                props.handleDeleteItem(props.itemText);
            }}
            >
            remove
            </button>

        </div>
    )
}

export default Item;