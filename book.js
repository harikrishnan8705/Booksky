//select popuobox layer and button
var popupbox = document.querySelector(".popup-box")
var popupoverlay = document.querySelector(".popup-overlay")
var button = document.getElementById("plusbtn")

button.addEventListener("click",function(){
    popupbox.style.display="block"
        popupoverlay.style.display="block"
}
)

var cancel = document.getElementById("cancel-popup")
cancel.addEventListener("click",function(event){
       event.preventDefault()
    popupbox.style.display="none"
        popupoverlay.style.display="none"
})

//select the form elements
var container = document.getElementById("container")
var author = document.getElementById("book-author")
var title = document.getElementById("book-title")
var description = document.getElementById("book-description")
var addbutton = document.getElementById("add-book")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
   
    if(title.value==""|| author.value==""|| description.value=="")
        {
            alert("Please fill the complete form")
        } 
    else{
        //const row = document.createElement("div");
       
             var newdiv = document.createElement("div")
              newdiv.setAttribute("class","box")
       newdiv.innerHTML=`
       <h1>${title.value}</h1>
       <h2>${author.value}</h2>
       <p><h3>${description.value}</h3></p>
       <button id="delete-item">Delete</button>`
        container.append(newdiv)
        popupbox.style.display="none"
        popupoverlay.style.display="none"
        var formt = document.getElementById("myform").reset()
            
           //  row.appendChild(div);
            
            //document.getElementById("container").appendChild(row);
        }
})
container.addEventListener("click",function(event){
    if(event.target.id === "delete-item"){
        event.target.parentElement.remove()
   }
})



