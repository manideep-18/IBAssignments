import React from 'react';
import SearchComponent from './SearchComponent';
import CheckboxComponent from './CheckboxComponent';
import ProductDisplay from './ProductDisplay';


class ProductListFilters extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'',stockStatus:false
        };
    }
    handleTextChange=(text)=>{
        this.setState({text:text});
    }
    handleStockChange=(stockStatus)=>{
        this.setState({stockStatus:stockStatus});
    }
    passProducts=()=>{
        const productsReturn=this.props.products;
        let productDisplay=[]
        for(var i=0;i<productsReturn.length;i++){
            if (this.props.products[i].name.indexOf(this.state.text) !== -1) {
                if(this.state.stockStatus){
                    if(this.props.products[i].stocked){
                            productDisplay.push(this.props.products[i]);
                    }
                    }
                    else{
                        productDisplay.push(this.props.products[i]);
                    }
                }
              }
        return productDisplay
    }
    render(){
    return(
        <div>
            <SearchComponent inputText={this.state.text} inputTextChange={this.handleTextChange}/>
            <CheckboxComponent inputCheck={this.state.stockStatus} inputCheckChange={this.handleStockChange}/>
            <ProductDisplay products={this.passProducts()} inputText={this.state.text} inputCheck={this.state.stockStatus}/>
         </div>
    );
    }
}
export default ProductListFilters;