var list=document.getElementById("list-elements"),items=document.getElementsByClassName("box"),selectedOne=document.getElementsByClassName("selected-one")[0];if(items)for(let e=0;e<items.length;e++)items[e].onclick=function(){items[e].classList.contains("selected-one")?items[e].classList.remove("selected-one"):(Array.prototype.forEach.call(items,e=>{e.classList.remove("selected-one")}),items[e].classList.add("selected-one"),items[e].onkeydown=checkArrowKeys)};