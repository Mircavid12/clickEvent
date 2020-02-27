var mylist = document.querySelectorAll("#mylist li");
var mySpan = document.querySelector(".myspan");
for(i=0;i<mylist.length;i++){
    mylist[i].addEventListener("click",function(){   
        if(this.style.backgroundColor!=="green"){
            this.style.color = "yellow";
            this.style.backgroundColor = "green";
            mySpan.innerText = parseInt(mySpan.innerText)+1;
        }
    });
    
}


// mylist.addEventListener("click", function(){
//     for(var i=0;i<mylist.length;i++){
//         mylist[i].style.color = "yellow";
//         mylist[i].style.backgroundColor = "green";
//     }
    
// })
