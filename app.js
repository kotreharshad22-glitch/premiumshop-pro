const products=[
{id:1,name:'Aero Runner',category:'Shoes',price:89.99,image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'},
{id:2,name:'Nova Backpack',category:'Bags',price:64.99,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'},
{id:3,name:'Orbit Watch',category:'Accessories',price:119.99,image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'},
{id:4,name:'Cloud Hoodie',category:'Apparel',price:59.99,image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80'}
];
let cart=JSON.parse(localStorage.getItem('ps-cart')||'[]');
const grid=document.querySelector('#products'), search=document.querySelector('#search'), filter=document.querySelector('#filter');
function render(){const q=search.value.toLowerCase(),f=filter.value;const list=products.filter(p=>(f==='All'||p.category===f)&&p.name.toLowerCase().includes(q));grid.innerHTML=list.map(p=>`<article class="product" onclick="add(${p.id})"><div class="product-img"><img src="${p.image}" alt="${p.name}"></div><div class="product-info"><small>${p.category}</small><h3>${p.name}</h3><div class="price">$${p.price.toFixed(2)}</div></div></article>`).join('');document.querySelector('#cartCount').textContent=cart.length}
function add(id){const p=products.find(x=>x.id===id);cart.push(p);localStorage.setItem('ps-cart',JSON.stringify(cart));document.querySelector('#cartCount').textContent=cart.length;toast(p.name+' added to cart');}
function toast(t){const x=document.querySelector('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1800)}
search.oninput=render;filter.onchange=render;
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter.value=b.dataset.filter;document.querySelector('#shop').scrollIntoView();render()});
document.querySelector('#cartBtn').onclick=()=>toast(cart.length?`${cart.length} item(s) in your cart`:'Your cart is empty');
document.querySelector('#themeBtn').onclick=()=>document.body.classList.toggle('dark');
render();