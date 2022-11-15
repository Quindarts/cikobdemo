import myJSON from './data.json' assert {type: 'json'};

const productCart = myJSON.productCart;
const product  = myJSON.product;
const listItem = [];
const url = window.location.href.toString()
const strs = url.split('?id='); // cut string
const id = strs.at(-1); // 
var idInt = parseInt(id); // get int
console.log(productCart)
var render__productItemData = document.getElementById('render__productItemData');
product.forEach(item =>{
    var objData ={
    id:'', 
    img:'', 
    total: Number, 
    name: '',
    rank: '',
    category: '',
    panigation_id: Number    
    };

    objData.id = item.id
    objData.img = item.image
    objData.total = item.price
    objData.name = item.title

    listItem.push(objData);
});

listItem.map(product =>{
    
    if(parseInt(product.id) === idInt ){

        render__productItemData.innerHTML +=`
        
        <div class="col-12 col-sm-12 col-md-6  m-0 d-flex ">
        <div class="row  w-100 ">
        <div class="img__productItem col-12 col-sm-12 col-md-6 align-self-center "  data-aos="fade-down-right">
        <img src=${product.img} width="100%" alt="">
        </div>
        </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6  m-0 font-amazon">
        <div class="row d-flex  ">

        <div class="col-12 col-sm-12 col-md-9 " data-aos="fade-down-left">
            <h1 class="name__productItem fw-bold">${product.name}</h1>
            <p class="someCategory__productItem grey2--color">lorem lorem lore lorem  <span class="bg-success px-3 py-1 text-white fw-bold">New </span></p>
            <div class="rank__productItem">
                star star star star <span class="rating__prudctItem">60 Ratings</span>
            </div>
            <h1 class="price__productItem fw-bold my-3">US  ${product.total} $</h1>
            <div class="size__productItem my-3">
                <h3 class="fw-bold">Size</h3>
                <div class="btn btn-outline-dark px-3">X</div>
                <div class="btn btn-outline-dark px-3">M</div>
                <div class="btn btn-outline-dark px-3">L</div>
                <div class="btn btn-outline-dark px-3">XL</div>
            </div>
            <div class="quantity__productItem my-3">
                <span>Quantity</span>
                <input type="checkbox">
            </div>
            <button class="btn__buyNow btn btn-dark rounded-0 w-44  my-4" style="margin-right: 1rem;">Buy Now</button>
            <button value=${product.id} class="btn__addToCart btn btn-dark rounded-0 w-44 ">Add to Cart</button>
            <div class="description__productItem fw-bold my-2 ">Description:</div>
            <div class="Size&Fit__productItem fw-bold my-2">Size&Fit:</div>
        </div>

        <div class="col-md-3"></div>

        </div>
        </div>
    `
    }
})
//Add to Cart
var btn__buyNow = document.querySelector('.btn__buyNow');
var btn__addToCart = document.querySelector('.btn__addToCart');
var count__Cart = document.querySelector('.count__Cart');
window.addEventListener('load',()=>{
    console.log(count__Cart.textContent);
    btn__addToCart.addEventListener('click', ()=>{

    let checked = parseInt(btn__addToCart.value);
        if(productCart.length ==0){
            productCart.push(checked);
            count__Cart.innerHTML = `${productCart.length}`;

        }
        else{
        console.log(productCart.length);
        productCart.map(val=>{
            if(val == checked){
                alert("This item")
            }
            else 
            productCart.push(checked);
            count__Cart.innerHTML = `${productCart.length}`;

        })       
        }
    })
    console.log(productCart);
});




