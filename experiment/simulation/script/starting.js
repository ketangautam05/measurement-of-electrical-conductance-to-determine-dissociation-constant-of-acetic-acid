hconductometer.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="CONDUCTOMETER"
    hovt.style.top="42%"
    hovt.style.left="20%"
    c.style.transitionDuration="0.3s"
    c.style.scale="1.1"
})

hcellstand.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="CONDUCTING-CELL STAND"
    hovt.style.top="23%"
    hovt.style.left="30%"
    c.style.transitionDuration="0.3s"
    c.style.scale="1.1"

})

hcell.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="CONDUCTING-CELL"
    hovt.style.top="27%"
    hovt.style.left="38%"
    cell.style.transitionDuration="0.3s"
    cell.style.scale="1.1"

})

hcs.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="CLEANING SOLUTION"
    hovt.style.top="41%"
    hovt.style.left="55%"
    b1f.style.transitionDuration="0.3s"
    b1f.style.scale="1.1"
    b1b.style.transitionDuration="0.3s"
    b1b.style.scale="1.1"

})

hss.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="STANDARD SOLUTION"
    hovt.style.top="41%"
    hovt.style.left="63%"
    b2f.style.transitionDuration="0.3s"
    b2f.style.scale="1.1"
    b2b.style.transitionDuration="0.3s"
    b2b.style.scale="1.1"

})

has.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="ACETIC-ACID SOLUTION"
    hovt.style.top="41%"
    hovt.style.left="71%"
    b3f.style.transitionDuration="0.3s"
    b3f.style.scale="1.1"
    b3b.style.transitionDuration="0.3s"
    b3b.style.scale="1.1"
})

hconductometer.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
    c.style.scale="1.0"
   // c.style.transitionDuration="1.0s"
})

hcellstand.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
    c.style.scale="1.0"
})

hcell.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
    cell.style.scale="1.0"
})

hcs.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
    //b1f.style.transitionDuration="0.3s"
    b1f.style.scale="1.0"
    //b1b.style.transitionDuration="0.3s"
    b1b.style.scale="1.0"
})

hss.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
    //b2f.style.transitionDuration="0.3s"
    b2f.style.scale="1.0"
    //b2b.style.transitionDuration="0.3s"
    b2b.style.scale="1.0"
})

has.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
    //b3f.style.transitionDuration="0.3s"
    b3f.style.scale="1.0"
    //b3b.style.transitionDuration="0.3s"
    b3b.style.scale="1.0"
})

//body.addEventListener("mouseenter",speech1())

hindibtn.addEventListener("onclick",function(){
    lang="hindi"
    console.log("hindi")
})

engbtn.addEventListener("onclick",function(){
    lang="engl"
    console.log("english")
})