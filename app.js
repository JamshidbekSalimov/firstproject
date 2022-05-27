// section Content header=====




// Section Contents function==============
var otaBox=document.getElementById('content');

var array=[{img:'https://cdn.pixabay.com/photo/2020/03/18/15/49/cupcakes-4944589_960_720.jpg', h4:'Cupeake Item', h5:'5', guruh:'cakes'},
{img:'https://cdn.pixabay.com/photo/2016/10/27/22/12/cake-1776661_960_720.jpg', h4:'Sweet Item', h5:'6', guruh:'cakes'},
{img:'https://cdn.pixabay.com/photo/2017/05/23/22/33/birthday-2338813_960_720.jpg', h4:'Sweet Item', h5:'7', guruh:'cakes'},
{img:'https://cdn.pixabay.com/photo/2017/09/14/14/33/cupcake-2749204__340.jpg', h4:'Sweet Item', h5:'8', guruh:'cupcakes'},
{img:'https://cdn.pixabay.com/photo/2016/03/27/17/49/cupcakes-1283247__340.jpg', h4:'Sweet Item', h5:'5', guruh:'cupcakes'},
{img:'https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_960_720.jpg', h4:'Sweet Item', h5:'9', guruh:'cupcakes'},
{img:'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__480.jpg', h4:'Sweet Item', h5:'1', guruh:'sweets'},
{img:'https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548__340.jpg', h4:'Sweet Item', h5:'3', guruh:'sweets'},
{img:'https://cdn.pixabay.com/photo/2016/04/14/20/15/muffins-1329679_960_720.jpg', h4:'Sweet Item', h5:'8', guruh:'sweets'},
{img:'https://cdn.pixabay.com/photo/2017/09/14/14/33/cupcake-2749204__340.jpg', h4:'Sweet Item', h5:'7', guruh:'doughnuts'},
{img:'https://cdn.pixabay.com/photo/2016/11/21/08/32/muffins-1844458__340.jpg', h4:'Sweet Item', h5:'6', guruh:'doughnuts'},
{img:'https://cdn.pixabay.com/photo/2016/11/21/09/49/muffins-1844538__340.jpg', h4:'Sweet Item', h5:'2', guruh:'doughnuts'}];

for(let i=0; i<array.length; i++){
    var div=document.createElement('div');
    div.classList.add('col-lg-4');
    div.classList.add('p-0');
    div.classList.add('childItem' + i)
   div.innerHTML=`<div class="box">
   <div class="img1">
   <img src="${array[i].img}">
   <div class="savat">
   <i class="fa fa-cart-arrow-down gold" aria-hidden="true" onclick='addProduct(${i})'></i>  
   </div>
   </div>
   <div class="price">
   <h4 id='name${i}'>${array[i].h4}</h4>
   <h4 id='price${i}'>${array[i].h5}</h4>
   </div>
   </div>`
otaBox.appendChild(div);
// bu Po malchanida saxifaga barcha array[] dagi elementlarni qushadi
// =====================================
}

function Cakes(event, cake){
    // bu funksiya buttin ladan qaysi biri bosilsa ushanga tegishli elementlarni array[] dan ekranga chiqarib beradi
    event.preventDefault();
    otaBox.innerHTML = '';
    // bu buyruq(otaBox.innerHTML = '';) array[] ichini tozalaydi.
    if(cake == 'all'){
        for(let i=0; i<array.length; i++){
            var div=document.createElement('div');
            div.classList.add('col-lg-4');
            div.classList.add('p-0');
            div.classList.add('childItem' + i)
            // yaratgan div ga klass qushdik va uni [i] bilan nomerlab chiqdik yani('childItem' + i)
           div.innerHTML=`<div class="box">
           <div class="img1">
           <img  src="${array[i].img}">
           <div class="savat">
           <i class="fa fa-cart-arrow-down gold" aria-hidden="true" onclick='addProduct(${i})'></i> 
               
           </div>
           </div>
           <div class="price">
               <h4 id='name${i}'>${array[i].h4}</h4>
               <h4 id='price${i}'>${array[i].h5}</h4>
           </div>
           </div>`
       otaBox.appendChild(div);
    }
    }
    else{
        for(let i=0; i<array.length; i++){
            if( array[i].guruh==cake){
                var div=document.createElement('div');
                div.classList.add('col-lg-4');
                div.classList.add('p-0');
                div.classList.add('childItem' + i);
               div.innerHTML=`<div class="box">
               <div class="img1">
               <img src="${array[i].img}">
               <div class="savat">
               <i class="fa fa-cart-arrow-down gold" aria-hidden="true" onclick='addProduct(${i})'></i> 
               </div>
               </div>
               <div class="price">
               <h4 id='name${i}'>${array[i].h4}</h4>
               <h4 id='price${i}'>${array[i].h5}</h4>
               </div>
               </div>`
           otaBox.appendChild(div);
            }
    }
    
        
    }
}
var array1=[];
var f=document.getElementById('inc');
f=0;
console.log(f)
function addProduct(btn){
    f++;
    console.log(f);
    inc.innerHTML=f;
    // bu yerda addProduct bosilganda u (${i}) bilan nomerlanayotgan edi uni bu funksiyada (btn) degan nom bilan oldik 
    var name1 = document.getElementById('name' + btn)
    //  bu yerda <h4 id='name${i}'> h4 ni id siga btn ni qushdik va name0, name1, name2.... kabi buldi
    console.log(name1.innerHTML)
    var price1 = document.getElementById('price' + btn)
    //  bu ham huddi yuqoridagi kabi;
    var obj={pro1:'',pro2:''};
    // bu yerda 2ta elementi bor object yaratayabman
     obj.pro1=name1.innerHTML;
    //  bu yerda obyekt elementlariga malumot qushilayabdi
     obj.pro2=price1.innerHTML;
    
    array1.push(obj);
    // obyektni array1[] ga qushib quydik



// bu yerda jadvalchaga tanlangan elmentni narxi va nomini div yaratib qushib quyish 
    var div=document.createElement('div');
    div.classList.add("row");
    div.classList.add("d-flex");
    div.classList.add("justify-content-between");
    div.classList.add(`itemSavat${array1.length-1}`);
    // bu yerda (`itemSavat${array1.length-1}`) orqali itemSavat degan klassni raqamlab chiqilayabdi -1 bulgani sababi array1 0 dan boshlangani uchun

    div.innerHTML=`<div class="col-lg-8">
                      <h4>${array1[array1.length-1].pro1}</h4>
                   </div>
                   <div class="col-lg-2">
                     <h4>${array1[array1.length-1].pro2}</h4>
                   </div>
                   <div class="col-lg-2">
                   <i class="fa fa-trash" onclick="delItem(${array1.length-1})"></i>
                 </div>`
    afterDiv.appendChild(div)
    

    
}
var afterDiv = document.getElementById('afterDiv')
function functionBuy(){
    afterDiv.classList.toggle('afterShow')
}
//  bu funksiya buy ni bosganda kirib-chiqishini taminlaydi




function delItem(nul){
    f--;
    console.log(f);
    inc.innerHTML=f;

    var diliv=document.querySelector('.itemSavat'+ nul);
    console.log(diliv)
    afterDiv.removeChild(diliv);
}

// function addProduct(btn){
//     console.log(btn ,'salom');
//     var price = document.querySelector('.childItem' + btn)
//     otaBox.removeChild(price)
//     console.log(price)
//   }
