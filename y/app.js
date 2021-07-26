
   var maindiv=document.getElementById('main');


   var user_input=document.getElementById('item');



function addItem(){
    

var inp_val=user_input.value;

if(inp_val!=""){

var text=document.createTextNode(inp_val);



var para=document.createElement('P');


var btn_one=document.createElement('BUTTON');
btn_one.setAttribute('onclick','dltBtn(this)');
btn_one.setAttribute('class','newdlt');
var deleteBtnval=document.createTextNode("Delete")
btn_one.appendChild(deleteBtnval)


var btn_two=document.createElement('BUTTON');
btn_two.setAttribute('onclick','editBtn(this)');
btn_two.setAttribute('class','newedit');
var editBtnval=document.createTextNode("Edit");
btn_two.appendChild(editBtnval)

para.setAttribute('class','paraclass')

para.appendChild(text);
para.appendChild(btn_one);
para.appendChild(btn_two);

// console.log(btn_one)
// console.log(para)

maindiv.appendChild(para)

user_input.value="";

}
else{

    alert("Enter in field ")
}
// maindiv.appendChild(para)

// console.log(took_input);
}

function dltBtn(e){

e.parentNode.remove()
}

function editBtn(e){
    e.parentNode.firstChild.nodeValue=prompt("Edit your item",e.parentNode.firstChild.nodeValue)
}

function deleteAll(){
    maindiv.innerHTML="";
}