


//nacl beaker
var na5 = document.querySelector("#na5")
var na5b = document.querySelector("#na5b")
var na25 = document.querySelector("#na25")
var na25b = document.querySelector("#na25b")
var na125 = document.querySelector("#na125")
var na125b = document.querySelector("#na125b")
//hcl beaker
var h5 = document.querySelector("#h5")
var h5b = document.querySelector("#h5b")
var h25 = document.querySelector("#h25")
var h25b = document.querySelector("#h25b")
var h125 = document.querySelector("#h125")
var h125b = document.querySelector("#h125b")
//acetic acid beaker
var a5 = document.querySelector("#a5")
var a5b = document.querySelector("#a5b")
var a25 = document.querySelector("#a25")
var a25b = document.querySelector("#a25b")
var a125 = document.querySelector("#a125")
var a125b = document.querySelector("#a125b")


var green = document.querySelector("#greentick")
var ptext = document.querySelector("#ptext")
var hint = document.querySelector("#hinttext")
var box = document.querySelector("#popup")

///////////////////////////////////////////////////////////////////    table  variables   ////////////////////////////////////////////////////

var tbl1 = document.querySelector("#table1")
var tbl2 = document.querySelector("#table2")
var tbl3 = document.querySelector("#table3")
var tbl4 = document.querySelector("#table4")

var tblh1 = document.querySelector("#tableheading1")
var tblh2 = document.querySelector("#tableheading2")
var tblh3 = document.querySelector("#tableheading3")
var tblh4 = document.querySelector("#tableheading4")

var dataimage = document.querySelector("#dataimage")
var imageheading = document.querySelector("#imageheading")
var formula = document.querySelector("#formula")



//counter variables

var type="none"
var testing="none"
var chance="none"
var m=0
var imageshow="dontknow"

///////////////////////////////////////////////////////////    NaCL beaker function  //////////////////////////////////////////////////////////////////////////////
function nacl5(){
    if(cleaning=="complete" && m==3){
        na5.style.transform="translate(-540%,15%)"
        na5b.style.transform="translate(-540%,15%)"
        beaker="standard"
        type="na5"
        clickcount=0
        cleaning="none"
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
        m=4
    }  
    else if(testing=="read1" && clickcount==0){
        na5.style.transform="translate(0%,0%)"
        na5b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="first"
        ph.style.transform="translate(-1340%,-650%)"
    }  
}

function nacl25(){
    if(checking=="first"){
        na25.style.transform="translate(-700%,15%)"
        na25b.style.transform="translate(-700%,15%)"
        beaker="standard"
        type="na25"
        clickcount=0
        cleaning="none"
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read2" && clickcount==0){
        na25.style.transform="translate(0%,0%)"
        na25b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="second"
        ph.style.transform="translate(-1470%,-650%)"
        console.log(checking,testing)
    }  
}

function nacl125(){
    if(checking=="second"){
        na125.style.transform="translate(-850%,15%)"
        na125b.style.transform="translate(-850%,15%)"
        beaker="standard"
        type="na125"
        clickcount=0
        cleaning="none"
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }    
    else if(testing=="read3" && clickcount==0){
        na125.style.transform="translate(0%,0%)"
        na125b.style.transform="translate(0%,0%)"
        clickcount=10
        placed="none"
        setTimeout(function(){
            na5.style.visibility="hidden"
            na5b.style.visibility="hidden"
            na25.style.visibility="hidden"
            na25b.style.visibility="hidden"
            na125.style.visibility="hidden"
            na125b.style.visibility="hidden"

            h5.style.visibility="visible"
            h5b.style.visibility="visible"
            h25.style.visibility="visible"
            h25b.style.visibility="visible"
            h125.style.visibility="visible"
            h125b.style.visibility="visible"
        },2000)
        ph.style.transform="translate(-1070%,-650%)"
        m=5
        pop1()
    }  
}


///////////////////////////////////////////////////////////    HCL beaker function  //////////////////////////////////////////////////////////////////////////////


function hcl5(){
    if(chance=="second"){
        h5.style.transform="translate(-540%,15%)"
        h5b.style.transform="translate(-540%,15%)"
        beaker="standard"
        type="h5"
        clickcount=0
        cleaning="none"
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read4" && clickcount==0){
        h5.style.transform="translate(0%,0%)"
        h5b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="third"
        ph.style.transform="translate(-1340%,-650%)"
    }  
}

function hcl25(){
    if(checking=="third"){
        h25.style.transform="translate(-700%,15%)"
        h25b.style.transform="translate(-700%,15%)"
        beaker="standard"
        type="h25"
        clickcount=0
        cleaning="none"
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read5" && clickcount==0){
        h25.style.transform="translate(0%,0%)"
        h25b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="fourth"
        ph.style.transform="translate(-1470%,-650%)"
    }  
}

function hcl125(){
    if(checking=="fourth"){
        h125.style.transform="translate(-850%,15%)"
        h125b.style.transform="translate(-850%,15%)"
        beaker="standard"
        type="h125"
        clickcount=0
        cleaning="none"
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }    
    else if(testing=="read6" && clickcount==0){
        h125.style.transform="translate(0%,0%)"
        h125b.style.transform="translate(0%,0%)"
        clickcount=10
        placed="none"
        m=10
        pop1()
        testing="read7"
        ph.style.transform="translate(-1340%,-650%)"
        setTimeout(function(){
            h5.style.visibility="hidden"
            h5b.style.visibility="hidden"
            h25.style.visibility="hidden"
            h25b.style.visibility="hidden"
            h125.style.visibility="hidden"
            h125b.style.visibility="hidden"

            a5.style.visibility="visible"
            a5b.style.visibility="visible"
            a25.style.visibility="visible"
            a25b.style.visibility="visible"
            a125.style.visibility="visible"
            a125b.style.visibility="visible"
        },2000)
        ph.style.transform="translate(-1070%,-650%)"
    }  
}


///////////////////////////////////////////////////////////    Acetic acid beaker function  //////////////////////////////////////////////////////////////////////////////


function acetic5(){
    if(chance=="third"){
        a5.style.transform="translate(-540%,15%)"
        a5b.style.transform="translate(-540%,15%)"
        beaker="unknown"
        type="a5"
        clickcount=0
        cleaning="none"
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read8" && clickcount==0){
        a5.style.transform="translate(0%,0%)"
        a5b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="fifth"
        ph.style.transform="translate(-1340%,-650%)"
    }  
}

function acetic25(){
    if(checking=="fifth"){
        a25.style.transform="translate(-700%,15%)"
        a25b.style.transform="translate(-700%,15%)"
        beaker="unknown"
        type="a25"
        clickcount=0
        cleaning="none"
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read9" && clickcount==0){
        a25.style.transform="translate(0%,0%)"
        a25b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="sixth"
        ph.style.transform="translate(-1470%,-650%)"
    }  
}

function acetic125(){
    if(checking=="sixth"){
        a125.style.transform="translate(-850%,15%)"
        a125b.style.transform="translate(-850%,15%)"
        beaker="unknown"
        type="a125"
        clickcount=0
        cleaning="none"
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }    
    else if(testing=="read10" && clickcount==0){
        a125.style.transform="translate(0%,0%)"
        a125b.style.transform="translate(0%,0%)"
        clickcount=10
        placed="khatam"
        ph.style.transform="translate(-1340%,-650%)"


        simulation="complete"
        s.style.animation="vibrate 1s"
        s.style.animationIterationCount="infinite"
        s.style.visibility="visible"
        s.innerText="Next"
        ph.style.visibility="hidden"

        setTimeout(function(){
            cell.style.transitionDuration="0s"
            s.style.transitionDuration="0s"
            i.style.transitionDuration="0s"
            c.style.transitionDuration="0s"
            cell.style.transitionDuration="0s"
            clip.style.transitionDuration="0s"
            nob1.style.transitionDuration="0s"
            nob2.style.transitionDuration="0s"
            nob3.style.transitionDuration="0s"
            b1f.style.transitionDuration="0s"
            b1b.style.transitionDuration="0s"
            a5.style.transitionDuration="0s"
            a5b.style.transitionDuration="0s"
            a25.style.transitionDuration="0s"
            a25b.style.transitionDuration="0s"
            a125.style.transitionDuration="0s"
            a125b.style.transitionDuration="0s"
            change.style.transitionDuration="0s"
        })
        messcounter=14
        update()
    }  
}



//////////////////////////////////////////////////////////////////  GREENTICK FUNCTION  ///////////////////////////////////////////////////////////////////////////


function pop1(){
    if(m==1){
        ptext.innerText="Message for Student"
        hint.innerText="Note down every value shown in conductivity meter's screen \n Measuring NaCl solution cocnductivity at different concentrations of \n 0.05(N), 0.025(N), 0.0125(N)"
        box.style.visibility="visible"
        m=2
    } 
    else if(m==5){
        ptext.innerText="Message for Student"
        hint.innerText="Now measuring Hcl solution cocnductivity at different concentrations of \n 0.05(N), 0.025(N), 0.0125(N) \n Note down carefully"
        box.style.visibility="visible"
        m=6
    }
    else if(m==10){
        ptext.innerText="Message for Student"
        hint.innerText="Now measuring conductivity of CH3COONa solution at different concentrations of \n 0.05(N), 0.025(N), 0.0125(N) \n Note down carefully"
        box.style.visibility="visible"
        m=11
    }

}



function green1(){
    if(m==0){
        constset="over"
        box.style.visibility="hidden"
        m=1
        ph.style.visibility="visible"
    }
    else if(m==2){
        box.style.visibility="hidden"
        m=3
        messcounter=7
        update()
    }
    else if(m==6){
        box.style.visibility="hidden"
        m=8
        messcounter=6
        update()
    }
    else if(m==11){
        box.style.visibility="hidden"
        m=13
        messcounter=6
        update()
    }

}
