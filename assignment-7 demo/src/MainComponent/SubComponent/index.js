import React from 'react';
import './styleProduct.css';

class SubComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isVisible:false
        }
    }
    displayComponent=()=>{
        let displayComponent=[];
                            for(var i=0;i<this.props.product.length;i++){
                                const stockElemet=this.props.product[i].stocked;
                                console.log(stockElemet);
                                if(stockElemet===false)
                                    {
                                        const dis=(
                                        <div className={`styleStocked  ${this.state.isVisible ?'stockednone':''}`}>
                                        <tr>
                                        <td>{this.props.product[i].name}</td><td>{this.props.product[i].price}</td>
                                        </tr>
                                        </div>
                                        )
                                        displayComponent.push(dis);
                                    }
                                else
                                    {
                                        const dis=(
                                        <tr>
                                        <td>{this.props.product[i].name}</td><td>{this.props.product[i].price}</td>
                                        </tr>
                                        )
                                        displayComponent.push(dis);
                                    }
                            }
                return displayComponent
    }
    render(){
        return(
            <div>
                {this.displayComponent()}
            </div>
        );
    }
}
export default SubComponent;