let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

// console.log(shopItemsData);

let basket = JSON.parse(localStorage.getItem("data")) || [];
// console.log(basket); 
let calculation = ()=>{
    let cartIcon = document.getElementById("cartAmount");
    // console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0); 

};

calculation();

let generateCartItems = ()=>{
    if(basket.length !==0){
       return (shoppingCart.innerHTML = basket.map((x)=>{
        let {id,item} = x;
        let search = shopItemsData.find((y)=>y.id === id) || [];
        let {img,name,price} = search; // example of object destructuring!
           return (
               `<div class = "cart-item" >
               <img src = ${img} width = "100">
               <div class = "details">

                    <div class = "title-price-x">
                        <h4 class = "title-price">
                            <p>${name}</p>
                            <p class ="cart-item-price">$ ${price}</p>
                        </h4>
                        <i onClick = removeItem(${id}) class="bi bi-x-lg"></i>
                    </div>
                <div class="button">
                        <i onClick = "decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id= ${id} class="quantity">${item}</div>
                        <i onClick = "increment(${id})" class="bi bi-plus-lg"></i>
                </div>
                    <h3>$${item * search.price}</h3>
               </div>
               </div>`
               );
            }).join(''));
    }else{
       shoppingCart.innerHTML = ``;
       label.innerHTML = `
       <h2>Cart is Empty!</h2>
       <a href = "index.html"><button class = "HomeBtn">Back To home</button></a>
       `;
    }
};

generateCartItems();


let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id);
    if(search ===undefined){
        basket.push({
            id:selectedItem.id,
            item: 1
        });
    }else{
        search.item += 1;
    }
   localStorage.setItem("data",JSON.stringify(basket));
   generateCartItems();
    update(selectedItem.id);
};

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id)
    if(search === undefined)return;//do nothing
    else if(search.item ===0) return;
    else{
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !==0);
    generateCartItems();
    localStorage.setItem("data",JSON.stringify(basket));
};
let update = (id)=>{
    let search = basket.find((x)=>x.id === id)
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount();
};

let removeItem = (id)=>{
    let selecetedItem = id;
    // console.log(selecetedItem.id);
    basket = basket.filter((x)=>x.id !== selecetedItem.id);
   generateCartItems();
   totalAmount();
   calculation();
    localStorage.setItem("data",JSON.stringify(basket));
};

let totalAmount = ()=>{
    if(basket.length !== 0){
        let amount = basket.map((x)=>{
            let {item,id} = x;
        let search = shopItemsData.find((y)=>y.id === id) || [];
        return item * search.price ;
        }).reduce((x,y)=>x+y,0)
        // console.log(amount)
        label.innerHTML = `<h2> Total Bill :$ ${amount}</h2>
        <button class = "chekout">Checkout</button>
        <button onClick = "clearCart()" class = "removeAll">Clear Cart</button>
        `;
    }
    else return;
};

totalAmount();

let clearCart = ()=>{
    basket = [];
    generateCartItems();
    localStorage.setItem("data",JSON.stringify(basket));
    calculation();

}