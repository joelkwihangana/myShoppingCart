let shop = document.getElementById("shop");

let shopItemsData = [
    {
    id:"product1",
    name: "Cable Tester",
    price:45,
    desc:"Quam sunt ipsam debitis laudantium doloremque nostrum expedita non minus perspiciatis placeat ab deleniti autem labore maxime esse",
    img:"images/image-1.png"
},
{
    id:"product2",
    name: "MackBook Pro 2020",
    price:5000,
    desc:"Quam sunt ipsam debitis laudantium doloremque nostrum expedita non minus perspiciatis placeat ab deleniti autem labore maxime esse",
    img:"images/image-7.jpg"
},
{
    id:"product3",
    name: "MackBook Air 2019",
    price:4500,
    desc:"Quam sunt ipsam debitis laudantium doloremque nostrum expedita non minus perspiciatis placeat ab deleniti autem labore maxime esse",
    img:"images/image-4.jpg"
},
{
    id:"product4",
    name: "Mackbook Pro 2017",
    price:4000,
    desc:"Quam sunt ipsam debitis laudantium doloremque nostrum expedita non minus perspiciatis placeat ab deleniti autem labore maxime esse",
    img:"images/image-3.jpg"
}
];

let generateShop = () =>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, price, desc, img} = x;
        return `  <div id="product-${id}" class="item">
        <img src=${img} alt="" width="218">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$${price}</h2>
                <div class="button">
                    <i onClick = "decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id= ${id} class="quantity">0</div>
                    <i onClick = "increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`;
    }).join(""));
};

generateShop()

let decrement = (id)=>{
    let selectedItem = id;
    console.log(selectedItem.id)
};
let increment = (id)=>{
    let selectedItem = id;
    console.log(selectedItem.id)
};
let update = ()=>{};
