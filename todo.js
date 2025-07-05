let task=document.body.querySelector(".checklist")


function addTask(){
    let button=document.body.querySelector(".addbutton")
    
    button.addEventListener("click",()=>{
        document.getElementById("popupcontainer").innerHTML=` <div class="popup">
    <div class="modal">
        <div class="inputtext">
            <input type="text" class="inputarea" style="height:50px;">
        </div>
        
        <div class="modalbuttons">
  
            <button id="addbutton2" style="background-color:rgb(167, 250, 71); border: none; color: white; height: 30px; width:50px; border-radius:20px">Add</button>
            <button id="cancelbutton2" href="#mainbody" style="background-color:rgb(245, 97, 97); border: none; color: white; height: 30px; width:60px; border-radius:20px">Cancel</button>
        </div>
    </div>
    </div>`
    addcontent()
    tocancel()
    clearall()

    })
}

addTask()

function addcontent(){
    let button2=document.body.querySelector(".checklist")
    
    let addbutton=document.getElementById("addbutton2")
    addbutton.addEventListener("click",()=>{
        const input=document.querySelector(".inputarea").value.trim();
        const inputarea=document.querySelector(".inputarea")
        button2.innerHTML+=`<div class="checklistitem">
        <div class="task">
        <input type="checkbox" id="task" >
        <label for="task" style="font-family: 'Schoolbell', cursive; font-size:43px;color: #e1b382">${input}</label>
        </div>
        <div class="trash">
        <button class="trashbutton"><i class="fa-solid fa-trash"></i></button>
        </div>
        </div>` 
        const deletebutton=document.querySelectorAll(".trashbutton")
        deletebutton.forEach(button=>{
            button.addEventListener("click",()=>{
                button.closest(".checklistitem").remove();
            })
        })
        
        inputarea.value=""

    })
    
}
function tocancel(){
    let button3=document.querySelector("#cancelbutton2");
    button3.addEventListener("click",()=>{
        document.getElementById("popupcontainer").innerHTML = "";

    })
}
function clearall(){
    let clearallbutton=document.querySelector(".clearbutton")
    clearallbutton.addEventListener("click",()=>{
        
        let button2=document.body.querySelector(".checklist")
        button2.innerHTML=''
    })

}
function dateAndTime(){
    let currdate=document.querySelector(".heading")
    const now=new Date()
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const dayName=days[now.getDay()]
    const date=String(now.getDate())
    const month=String(now.getMonth()+1)
    const year=now.getFullYear()
    const finaldate=`${date}/${month}/${year}-${dayName}`    
    currdate.innerHTML=`<h2 class="dateheading">${finaldate}</h2>`
}

dateAndTime()

new Sortable(document.querySelector(".checklist"), {
    animation: 150,
    ghostClass: 'sortable-ghost',
});