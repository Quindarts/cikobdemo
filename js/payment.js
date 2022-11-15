//Get list id 
import myJSON from './data.json' assert {type: 'json'};
listIdAddCart = [];
function handleAddCart(id){
    listIdAddCart.map((val)=>{

        if(val ===id){
            alert("This item already on your cart !");
        }else
        listIdAddCart.push(id); 
    })
}
console.log(listIdAddCart);
function renderPaymentPage(name_Render,itemPayMent){
    name_Render.innerHtml += ``;
}
let items=  JSON.parse(localStorage.getItem('items'));