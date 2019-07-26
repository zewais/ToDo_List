import React from "react";

class AddItem extends React.Component {
    state = {
        error: undefined
    }


    handleAddItem = (e) => {

        e.preventDefault();

        const item = e.target.itemEntered.value.trim();
        const error = this.props.handleAddItem(item)

        this.setState(() => ({error}))

        if(!error){
            e.target.itemEntered.value = "";
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-item-error">{this.state.error}</p>}
                <form onSubmit = {this.handleAddItem} className="add-item">
                    <input type="text" name="itemEntered" className="add-item__input"/>
                    <button className="button">Add item</button>
                </form>

            </div>
        )
    }
}


export default AddItem;