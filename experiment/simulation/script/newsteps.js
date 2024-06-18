


//nacl beaker

var na5 = document.querySelector("#na5")
var na5b = document.querySelector("#na5b")
var na25 = document.querySelector("#na25")
var na25b = document.querySelector("#na25b")
var na125 = document.querySelector("#na125")
var na125b = document.querySelector("#na125b")
var na62 = document.querySelector("#na62")
var na62b = document.querySelector("#na62b")
var na31 = document.querySelector("#na31")
var na31b = document.querySelector("#na31b")
var na16 = document.querySelector("#na16")
var na16b = document.querySelector("#na16b")

//hcl beaker

var h5 = document.querySelector("#h5")
var h5b = document.querySelector("#h5b")
var h25 = document.querySelector("#h25")
var h25b = document.querySelector("#h25b")
var h125 = document.querySelector("#h125")
var h125b = document.querySelector("#h125b")
var h62 = document.querySelector("#h62")
var h62b = document.querySelector("#h62b")
var h31 = document.querySelector("#h31")
var h31b = document.querySelector("#h31b")
var h16 = document.querySelector("#h16")
var h16b = document.querySelector("#h16b")

//acetic acid beaker

var a5 = document.querySelector("#a5")
var a5b = document.querySelector("#a5b")
var a25 = document.querySelector("#a25")
var a25b = document.querySelector("#a25b")
var a125 = document.querySelector("#a125")
var a125b = document.querySelector("#a125b")
var a62 = document.querySelector("#a62")
var a62b = document.querySelector("#a62b")
var a31 = document.querySelector("#a31")
var a31b = document.querySelector("#a31b")
var a16 = document.querySelector("#a16")
var a16b = document.querySelector("#a16b")


var green = document.querySelector("#greentick")
var ptext = document.querySelector("#ptext")
var hint = document.querySelector("#hinttext")
var box = document.querySelector("#popup")

///////////////////////////////////////////////////////////////////    table  variables   ////////////////////////////////////////////////////

var tbl1 = document.querySelector("#table1")
var tbl2 = document.querySelector("#table2")
var tbl3 = document.querySelector("#table3")
var tbl4 = document.querySelector("#table4")
var tbl5 = document.querySelector("#table5")

var tblh1 = document.querySelector("#tableheading1")
var tblh2 = document.querySelector("#tableheading2")
var tblh3 = document.querySelector("#tableheading3")
var tblh4 = document.querySelector("#tableheading4")
var tblh5 = document.querySelector("#tableheading5")

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
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }    
    else if(testing=="read3" && clickcount==0){
        na125.style.transform="translate(0%,0%)"
        na125b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="21st"
        setTimeout(function(){
            b1f.style.transitionDuration="0s"
            b1b.style.transitionDuration="0s"
            na5.style.transitionDuration="0s"
            na5b.style.transitionDuration="0s"
            na25.style.transitionDuration="0s"
            na25b.style.transitionDuration="0s"
            na125.style.transitionDuration="0s"
            na125b.style.transitionDuration="0s"
            na5.style.visibility="hidden"
            na5b.style.visibility="hidden"
            na25.style.visibility="hidden"
            na25b.style.visibility="hidden"
            na125.style.visibility="hidden"
            na125b.style.visibility="hidden"
            b1f.style.visibility="hidden"
            b1b.style.visibility="hidden"

            na62.style.visibility="visible"
            na62b.style.visibility="visible"
            na31.style.visibility="visible"
            na31b.style.visibility="visible"
            na16.style.visibility="visible"
            na16b.style.visibility="visible"
        },1000)
        ph.style.transform="translate(-1140%,-700%)"
    }  
}


            /*****************************************  NEW NACL FUNCTIONS TESTING  ******************************/

function nacl62(){
    if(checking=="21st"){
        na62.style.transform="translate(-450%,-15%)"
        na62b.style.transform="translate(-450%,-15%)"
        beaker="standard"
        type="na62"
        clickcount=0
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read21" && clickcount==0){
        na62.style.transform="translate(0%,0%)"
        na62b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="22nd"
       ph.style.transform="translate(-1270%,-700%)"
    }  
}

function nacl31(){
    if(checking=="22nd"){
        na31.style.transform="translate(-610%,-15%)"
        na31b.style.transform="translate(-610%,-15%)"
        beaker="standard"
        type="na31"
        clickcount=0
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read22" && clickcount==0){
        na31.style.transform="translate(0%,0%)"
        na31b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="23rd"
        ph.style.transform="translate(-1400%,-700%)"
    }  
}

function nacl16(){
    if(checking=="23rd"){
        na16.style.transform="translate(-770%,-15%)"
        na16b.style.transform="translate(-770%,-15%)"
        beaker="standard"
        type="na16"
        clickcount=0
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }    
    else if(testing=="read23" && clickcount==0){
        na16.style.transform="translate(0%,0%)"
        na16b.style.transform="translate(0%,0%)"
        clickcount=10
        b1f.style.transitionDuration="1s"
        b1b.style.transitionDuration="1s"
        setTimeout(function(){
            na62.style.transitionDuration="0s"
            na62b.style.transitionDuration="0s"
            na31.style.transitionDuration="0s"
            na31b.style.transitionDuration="0s"
            na16.style.transitionDuration="0s"
            na16b.style.transitionDuration="0s"
            na62.style.visibility="hidden"
            na62b.style.visibility="hidden"
            na31.style.visibility="hidden"
            na31b.style.visibility="hidden"
            na16.style.visibility="hidden"
            na16b.style.visibility="hidden"

            b1f.style.visibility="visible"
            b1b.style.visibility="visible"
            h5.style.visibility="visible"
            h5b.style.visibility="visible"
            h25.style.visibility="visible"
            h25b.style.visibility="visible"
            h125.style.visibility="visible"
            h125b.style.visibility="visible"
        },1000)
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
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }    
    else if(testing=="read6" && clickcount==0){
        h125.style.transform="translate(0%,0%)"
        h125b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="25th"
       
        setTimeout(function(){
            b1f.style.transitionDuration="0s"
            b1b.style.transitionDuration="0s"
            h5.style.transitionDuration="0s"
            h5b.style.transitionDuration="0s"
            h25.style.transitionDuration="0s"
            h25b.style.transitionDuration="0s"
            h125.style.transitionDuration="0s"
            h125b.style.transitionDuration="0s"
            h5.style.visibility="hidden"
            h5b.style.visibility="hidden"
            h25.style.visibility="hidden"
            h25b.style.visibility="hidden"
            h125.style.visibility="hidden"
            h125b.style.visibility="hidden"
            b1f.style.visibility="hidden"
            b1b.style.visibility="hidden"

            h62.style.visibility="visible"
            h62b.style.visibility="visible"
            h31.style.visibility="visible"
            h31b.style.visibility="visible"
            h16.style.visibility="visible"
            h16b.style.visibility="visible"
        },1000)
         ph.style.transform="translate(-1140%,-700%)"
    }  
}




/*******************************************************   HCL NEW BEAKER TESTING   **********************************************************************************/


function hcl62(){
    if(checking=="25th"){
        h62.style.transform="translate(-450%,-15%)"
        h62b.style.transform="translate(-450%,-15%)"
        beaker="standard"
        type="h62"
        clickcount=0
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read25" && clickcount==0){
        h62.style.transform="translate(0%,0%)"
        h62b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="26th"
       ph.style.transform="translate(-1270%,-700%)"
    }  
}

function hcl31(){
    if(checking=="26th"){
        h31.style.transform="translate(-610%,-15%)"
        h31b.style.transform="translate(-610%,-15%)"
        beaker="standard"
        type="h31"
        clickcount=0
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read26" && clickcount==0){
        h31.style.transform="translate(0%,0%)"
        h31b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="27th"
        ph.style.transform="translate(-1400%,-700%)"
    }  
}

function hcl16(){
    if(checking=="27th"){
        h16.style.transform="translate(-770%,-15%)"
        h16b.style.transform="translate(-770%,-15%)"
        beaker="standard"
        type="h16"
        clickcount=0
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }    
    else if(testing=="read27" && clickcount==0){
        h16.style.transform="translate(0%,0%)"
        h16b.style.transform="translate(0%,0%)"
        clickcount=10
        m=10
        pop1()
        testing="read7"
        b1f.style.transitionDuration="1s"
        b1b.style.transitionDuration="1s"
        setTimeout(function(){
            h62.style.transitionDuration="0s"
            h62b.style.transitionDuration="0s"
            h31.style.transitionDuration="0s"
            h31b.style.transitionDuration="0s"
            h16.style.transitionDuration="0s"
            h16b.style.transitionDuration="0s"
            h62.style.visibility="hidden"
            h62b.style.visibility="hidden"
            h31.style.visibility="hidden"
            h31b.style.visibility="hidden"
            h16.style.visibility="hidden"
            h16b.style.visibility="hidden"

            b1f.style.visibility="visible"
            b1b.style.visibility="visible"
            a5.style.visibility="visible"
            a5b.style.visibility="visible"
            a25.style.visibility="visible"
            a25b.style.visibility="visible"
            a125.style.visibility="visible"
            a125b.style.visibility="visible"
        },1000)
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
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read8" && clickcount==0){
        console.log("success")
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
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }    
    else if(testing=="read10" && clickcount==0){
        a125.style.transform="translate(0%,0%)"
        a125b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="31st"
        ph.style.transform="translate(-1340%,-650%)"

        setTimeout(function(){
            b1f.style.transitionDuration="0s"
            b1b.style.transitionDuration="0s"
            a5.style.transitionDuration="0s"
            a5b.style.transitionDuration="0s"
            a25.style.transitionDuration="0s"
            a25b.style.transitionDuration="0s"
            a125.style.transitionDuration="0s"
            a125b.style.transitionDuration="0s"
            a5.style.visibility="hidden"
            a5b.style.visibility="hidden"
            a25.style.visibility="hidden"
            a25b.style.visibility="hidden"
            a125.style.visibility="hidden"
            a125b.style.visibility="hidden"
            b1f.style.visibility="hidden"
            b1b.style.visibility="hidden"

            a62.style.visibility="visible"
            a62b.style.visibility="visible"
            a31.style.visibility="visible"
            a31b.style.visibility="visible"
            a16.style.visibility="visible"
            a16b.style.visibility="visible"
        },1000)
        ph.style.transform="translate(-1140%,-700%)"
    }  
}



/*****************************************************************  NEW SODIUM ACETATE BEAKER TESTING    ******************************************************/



function acetic62(){
    if(checking=="31st"){
        a62.style.transform="translate(-450%,-15%)"
        a62b.style.transform="translate(-450%,-15%)"
        beaker="unknown"
        type="a62"
        clickcount=0
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read31" && clickcount==0){
        a62.style.transform="translate(0%,0%)"
        a62b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="32nd"
        ph.style.transform="translate(-1270%,-700%)"
    }  
}

function acetic31(){
    if(checking=="32nd"){
        a31.style.transform="translate(-610%,-15%)"
        a31b.style.transform="translate(-610%,-15%)"
        beaker="unknown"
        type="a31"
        clickcount=0
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }  
    else if(testing=="read32" && clickcount==0){
        a31.style.transform="translate(0%,0%)"
        a31b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="33rd"
        ph.style.transform="translate(-1400%,-700%)"
    }  
}

function acetic16(){
    if(checking=="33rd"){
        a16.style.transform="translate(-770%,-15%)"
        a16b.style.transform="translate(-770%,-15%)"
        beaker="unknown"
        type="a16"
        clickcount=0
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
    }    
    else if(testing=="read33" && clickcount==0){
        a16.style.transform="translate(0%,0%)"
        a16b.style.transform="translate(0%,0%)"
        clickcount=10
        ph.style.transform="translate(-1070%,-650%)"


        simulation="complete"
        s.style.animation="vibrate 1s"
        s.style.animationIterationCount="infinite"
        s.style.visibility="visible"
        s.innerText="Observations"
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
            a62.style.transitionDuration="0s"
            a62b.style.transitionDuration="0s"
            a31.style.transitionDuration="0s"
            a31b.style.transitionDuration="0s"
            a16.style.transitionDuration="0s"
            a16b.style.transitionDuration="0s"
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
        hint.innerText="Note down every value shown in conductivity meter's screen \n Measuring NaCl solution cocnductivity at different concentrations of \n 0.05(N), 0.025(N), 0.0125(N), 0.0062(N), 0.0031(N), 0.0016(N)"
        box.style.visibility="visible"
        m=2
    } 
    else if(m==5){
        ptext.innerText="Message for Student"
        hint.innerText="Now measuring Hcl solution cocnductivity at different concentrations of \n 0.05(N), 0.025(N), 0.0125(N), 0.0062(N), 0.0031(N), 0.0016(N) \n Note down carefully"
        box.style.visibility="visible"
        m=6
    }
    else if(m==10){
        ptext.innerText="Message for Student"
        hint.innerText="Now measuring conductivity of CH3COONa solution at different concentrations of \n 0.05(N), 0.025(N), 0.0125(N), 0.0062(N), 0.0031(N), 0.0016(N) \n Note down carefully"
        box.style.visibility="visible"
        m=11
    }

}



function green1(){
    box.style.visibility="hidden"
    if(m==0){
        constset="over"
        m=1
        ph.style.visibility="visible"
    }
    else if(m==2){
        m=3
        messcounter=7
        update()
    }
    else if(m==6){
        m=8
        messcounter=6
        update()
    }
    else if(m==11){
        m=13
        messcounter=6
        update()
    }

}
