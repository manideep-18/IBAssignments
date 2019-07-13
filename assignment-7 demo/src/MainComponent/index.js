import React from 'react';
import SubComponent from './SubComponent';
import './styleStock.css';

class MainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isValue:'',isVisible:false,isSearch:false
        }
    }
    handleClick=(event)=>{
        this.setState({isVisible:!this.state.isVisible});
    }
    handleChange=(event)=>{
        this.setState({isValue:event.target.value});

    }
    render(){
        return(
            <div align="center">
            <form>
                    <input type="text"  placeholder="value" onChange={this.handleChange}/>
                    <input type="checkBox" onClick={this.handleClick}/>
                    only shown products in stock
            </form> 
            <thead>
                    <tr>
                        <th>Name</th><th>Price</th> 
                    </tr>
                    <tr>
                        <th>Sporting</th><th>Goods</th> 
                    </tr>
            </thead>
                    <SubComponent productCategory={"Sporting Goods"} product={[
                                        { price: "$49.99", stocked: true, name: "Football"},
                                        { price: "$9.99", stocked: true, name: "Baseball"},
                                        { price: "$29.99", stocked: false, name: "Basketball"}
                                          ]}
                    />
                <thead>
                    <tr> 
                        <th>Electronics</th>
                    </tr>
                </thead>
                <SubComponent productCategory={"Electronics"} product={[
                                    {price: "$99.99", stocked: true, name: "iPod Touch"},
                                    { price: "$399.99", stocked: false, name: "iPhone 5"},
                                    { price: "$199.99", stocked: true, name: "Nexus 7"}
                                            ]} 
                /> 
            </div>
        );
    }
}
export default MainComponent;