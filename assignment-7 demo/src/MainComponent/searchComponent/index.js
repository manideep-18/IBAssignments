import React from 'react';
import { directive } from '@babel/types';

function searchComponent(props){
    return(
            <dir>
                {this.props.product.map((object)=>{
                    const ifChange="Sporting Goods";
                    for(var i=0;i<object.length;i++){
                        if(ifChange!=="Electronics")
                            {

                                {object.name} 
                            }
                    }
                })
                }
            </dir>
        );
}
export default searchComponent;
displayTable=()=>{
    let displayComponent=[];
        const ifChange="Sporting Goods";
                for(var i=0;i<object.length;i++){
                    if(object.category===ifChange)
                        {
                            const dis=(
                            <tr>
                            <td>{object.name}</td><td>{object.price}</td>
                            </tr>)
                            displayComponent.push(dis);
                        }
                }
    return displayComponent
}
{this.props.product.map(function(object){
                    
})}
{this.props.product.map(function(object){
    let displayComponent=[];
    const ifChange="Electronics";
            for(var i=0;i<object.length;i++){
                if(object.category===ifChange)
                    {
                        const dis=(
                        <tr>
                        <td>{object.name}</td><td>{object.price}</td>
                        </tr>)
                        displayComponent.push(dis);
                    }
            }
return displayComponent
        })}