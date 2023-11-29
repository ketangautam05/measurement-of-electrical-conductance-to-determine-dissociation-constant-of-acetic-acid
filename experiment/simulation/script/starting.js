hconductometer.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="CONDUCTOMETER"
    hovt.style.top="42%"
    hovt.style.left="20%"
})

hcellstand.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="CONDUCTING-CELL STAND"
    hovt.style.top="23%"
    hovt.style.left="30%"

})

hcell.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="CONDUCTING-CELL"
    hovt.style.top="27%"
    hovt.style.left="38%"

})

hcs.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="CLEANING SOLUTION"
    hovt.style.top="41%"
    hovt.style.left="55%"

})

hss.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="STANDARD SOLUTION"
    hovt.style.top="41%"
    hovt.style.left="63%"

})

has.addEventListener("mouseenter",function(){
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="ACETIC-ACID SOLUTION"
    hovt.style.top="41%"
    hovt.style.left="71%"
})

hconductometer.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hcellstand.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hcell.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hcs.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hss.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

has.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

body.addEventListener("mouseenter",speech1())

hindibtn.addEventListener("onclick",function(){
    lang="hindi"
    console.log("hindi")
})

engbtn.addEventListener("onclick",function(){
    lang="engl"
    console.log("english")
})