import React from "react";
import Header from "./Header"
import AddItem from "./AddItem"
import Items from "./items"

class TodoApp extends React.Component {

    

    state = {
        items: []
    }

    handleDeleteItems = () => {
        this.setState(() => ({items: []})); 
    }

    handleDeleteItem = (itemToRemove) => {
        this.setState((prevState) => ({
            items: prevState.items.filter((item) => itemToRemove !== item)
        }))
    } 

    handleAddItem = (item) => {
        if(!item){
            return "Please enter a valid item to add to the list";
        }
        else if (this.state.items.indexOf(item) > -1) {
            return "This item has already been add to the list"
        }

        this.setState((prevState) => ({items: prevState.items.concat(item)}))
    }

    componentDidMount(){
        
        try {

        const json = localStorage.getItem("items");
        const items = JSON.parse(json);
        if(items){
            this.setState(() => ({items})); 
        }
            
        } catch (error) {
            
        }

        
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.items.length !== this.state.items.length){
            const json = JSON.stringify(this.state.items);
            localStorage.setItem("items", json);
        }
        
    }


    render() {

        const subtitle = "Organize you day with this app";
        return(
            <div>
                <Header subtitle={subtitle}/>
                <AddItem 
                handleAddItem={this.handleAddItem}
                />
                <Items 
                items = {this.state.items}
                handleDeleteItem = {this.handleDeleteItem}
                handleDeleteItems = {this.handleDeleteItems}
                />
            </div>
            
        )

        

    }


    


}

//console.log(this.state.items);

export default TodoApp;