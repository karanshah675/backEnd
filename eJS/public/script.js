const btn =  document.querySelectorAll("button")
btn.forEach((e)=>{
    e.addEventListener("click",(el)=>{
        if(el.target.innerHTML == "follow"){
            alert("followed!")
            el.target.innerHTML="followed"
        }else{
            alert("unfollowed!")
            el.target.innerHTML="follow"   
        }
    })
})