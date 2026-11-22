const count = document.getElementById('bagCount');
const toast = document.getElementById('toast');
let items = 0;
function message(text){toast.textContent=text;toast.classList.add('show');clearTimeout(message.timer);message.timer=setTimeout(()=>toast.classList.remove('show'),2300)}
document.querySelectorAll('.add').forEach(button=>button.addEventListener('click',()=>{items++;count.textContent=items;message('Added to your bag!')}));
document.querySelector('.bag').addEventListener('click',()=>message(items ? `Your bag contains ${items} item(s).` : 'Your bag is currently empty.'));
document.querySelectorAll('.choose').forEach(button=>button.addEventListener('click',()=>message('Thank you! Subscription checkout is a demo.')));
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
