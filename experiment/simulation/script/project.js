
var hmessage=["प्रयोग शुरू करने के लिए स्टार्ट बटन पर क्लिक करें",
"मुख्य स्विच चालू करें",
"कंडक्टोमीटर पर पावर बटन पर क्लिक करें",
"फ़ंक्शन नॉब घुमाएं और सेल-कॉन्स्ट मोड पर सेट करें",
"सेल स्थिरांक सेट करने के लिए तापमान  घुंडी घुमाएँ",
"ओह, आपने बहुत ज़्यादा घुमाया, इसे 0.960 पर सेट करें",
"फ़ंक्शन नॉब को घुमाएं और चेक मोड पर वापस सेट करें",
"क्लीनिंग सॉलूशन को सेल स्टैंड पर रखें और उसमें संवाहक सेल को डुबोएं, फिर संवाहक सेल को वापस खींचें और सफाई-समाधान को उसकी मूल स्थिति में वापस रखें",
"अब मानक-समाधान को सेल स्टैंड पर रखें और उसमें चालक सेल को डुबोएं",
"फ़ंक्शन नॉब को कैलिबर मोड में घुमाएँ",
"मशीन को कैलिब्रेट करने के लिए रेंज नॉब घुमाएँ",
"ओह, आपने बहुत ज़्यादा घुमाया, इसे 1.000 पर सेट करें",
"बहुत अच्छा! इस बीकर को हटाओ",
"अब इसकी चालकता ज्ञात करने के लिए 'एसिटिक एसिड' बीकर रखें",
"सटीक मान प्राप्त करने के लिए संचालन-सेल को 2 से 3 बार डुबोएं",
"बहुत बढ़िया! कंडक्टोमीटर-डिस्प्ले में जो मान दिखाया गया है उसे नोट कर लें और बीकर हटा दें",
"अब गणना भाग पर जाने के लिए NEXT बटन पर क्लिक करें"]

var message=["Click on start button to start the experiment",
"Turn on the main switch",
"Click on power button on conductometer",
"Rotate FUNCTION knob and set on CELL-CONST mode",
"Rotate TEMPERATURE knob to set cell constant",
"This is too much.... rotate to 0.960",
"Rotate FUNCTION knob and set back on CHECK mode",
"Place cleaning-solution on cell stand and dip conducting cell in it then pull back conducting cell and put back cleaning-solution to its original state",
"Now place STANDARD-SOLUTION on cell stand and dip conducting cell in it",
"Rotate FUNCTION knob to CALIBR mode",
"Rotate RANGE knob to calibrate Machine",
"Ohh you rotated too much.... set it to 1.000",
"WELL DONE !       Remove this beaker",
"Now put 'Acetic acid' beaker to find its conductivity",
"Dip conducting-cell 2-3 times to get accurate value",
"VERY NICE !..      Note down the value which is shown in the conductometer-display and remove beaker",
"Now click on NEXT button to go to calculation part"]




var s=document.querySelector("#start")
var mes=document.querySelector("#text")
var i =document.querySelector("#image")
var c=document.querySelector("#conductometer")
var h=document.querySelector("#header")
var cell=document.querySelector("#cell")
var clip=document.querySelector("#clip")
var change=document.querySelector("#change")
var nob1=document.querySelector("#nob1")
var nob2=document.querySelector("#nob2")
var nob3=document.querySelector("#nob3")
var constbutton=document.querySelector("#cellconst")
var rightarrow=document.querySelector("#rightarrow")
var b1f=document.querySelector("#ffb")
var b2f=document.querySelector("#ffb1")
var b3f=document.querySelector("#ffb2")
var b1b=document.querySelector("#bb")
var b2b=document.querySelector("#bb1")
var b3b=document.querySelector("#bb2")
var tiles=document.querySelector("#tiles")
var topview=document.querySelector("#top-view")
var power1=document.getElementById("#power")
var powerbutton=document.querySelector("#power-button")
var on=document.querySelector("#on")
var off=document.querySelector("#off")
var hovt=document.querySelector("#hovt")
var hconductometer=document.querySelector("#hconductometer")
var hcellstand=document.querySelector("#hcellstand")
var hcell=document.querySelector("#hcell")
var hcs=document.querySelector("#hcs")
var hss=document.querySelector("#hss")
var has=document.querySelector("#has")
var body = document.querySelector("#body")
var speakbtn = document.querySelector("#sound")
var hindibtn = document.querySelector("#hindi")
var engbtn = document.querySelector("#eng")
var headertext = document.querySelector("#headertext")
var langselector = document.querySelector("#langselector")


/*var t=h*/
var clickcount=10
var placed="yes"
var beaker="none"
var statuses="none"
var cleaning="none"
var checking="none"
var simulation="none"
var power ="off"
var cc="notclicked"
var constset="no"
var reader="0.000"
var mode="none"
var messcounter=0
var st=0
var rc=0
var mes1
var lang



/*starting styling*/
c.style.top="25%"
c.style.left="18%"
c.style.height="35%"
c.style.width="30%"
c.style.visibility="visible"
c.style.cursor="pointer"


clip.style.top="38%"
clip.style.left="38.65%"
clip.style.height="4%"
clip.style.width="7%"
clip.style.visibility="visible"
clip.style.cursor="pointer"

cell.style.top="25%"
cell.style.left="41.4%"
cell.style.height="22%"
cell.style.width="4.5%"
cell.style.visibility="visible"
cell.style.cursor="pointer"

b1f.style.transform="translate(-100%,-155%)"
b1b.style.transform="translate(-100%,-150%)"
b2f.style.transform="translate(-100%,-155%)"
b2b.style.transform="translate(-100%,-150%)"
b3f.style.transform="translate(-100%,-155%)"
b3b.style.transform="translate(-100%,-150%)"
b1f.style.cursor="pointer"
b2f.style.cursor="pointer"
b3f.style.cursor="pointer"



function resize(){
    c.style.top="24%"
    c.style.left="5%"
    c.style.height="60%"
    c.style.width="50%"
    c.style.visibility="visible"
    c.style.cursor="default"

    clip.style.top="58.8%"
    clip.style.left="40.8%"
    clip.style.height="5%"
    clip.style.width="9%"
    clip.style.visibility="visible"
    clip.style.cursor="default"

    cell.style.top="37.5%"
    cell.style.left="44.1%"
    cell.style.height="27%"
    cell.style.width="6%"
    cell.style.visibility="visible"
    cell.style.cursor="pointer"
    b1f.style.transform="translate(0%,0%)"
    b1b.style.transform="translate(0%,0%)"
    b2f.style.transform="translate(0%,0%)"
    b2b.style.transform="translate(0%,0%)"
    b3f.style.transform="translate(0%,0%)"
    b3b.style.transform="translate(0%,0%)"
    nob1.style.cursor="pointer"
    nob2.style.cursor="pointer"
    nob3.style.cursor="pointer"
}

function hindi1(){
    console.log(lang)
    lang="hindi"
    headertext.innerText="'एसिटिक' एसिड के पृथक्करण स्थिरांक को निर्धारित करने के लिए विद्युत चालकता का मापन"
    langselector.style.visibility="hidden"
    update()
}

function eng1(){
    console.log(lang)
    lang="eng"
    headertext.innerText="Measurement of Electrical conductance to determine dissociation constant of 'Acetic' acid"
    langselector.style.visibility="hidden"
    update() 
}



function speech1(){
    if(lang=="hindi"){
        mes1=hmessage[messcounter-1]
        console.log(mes1)
        console.log(lang)
    }
    else if(lang=="eng"){
        mes1=message[messcounter-1]
        console.log(mes1)
        console.log(lang)
    }
    setTimeout(function(){ 
        //mes1=hmessage[messcounter]
        const utterance = new SpeechSynthesisUtterance(mes1);
        utterance.lang='hi-IN';
        utterance.pitch=1;
        utterance.rate=1;
        utterance.volume=1;
        speechSynthesis.speak(utterance);
    },500)
}

function update(){
    console.log(message[messcounter])
    if(lang=="hindi"){
        mes.innerText=hmessage[messcounter]
    }
    else if(lang=="eng"){
        mes.innerText=message[messcounter]
    }
    //mes.innerText=hmessage[messcounter]
    messcounter+=1
        speech1()
}

function ok(){
    if(simulation=="complete"){
        setTimeout(function(){
        tiles.style.visibility="visible"
        topview.style.visibility="visible"
        /*mes.innerText="go"*/
        i.style.visibility="hidden"
        c.style.visibility="hidden"
        cell.style.visibility="hidden"
        clip.style.visibility="hidden"
        nob1.style.visibility="hidden" 
        nob2.style.visibility="hidden" 
        nob3.style.visibility="hidden" 
        b1f.style.visibility="hidden"
        b2f.style.visibility="hidden"
        b3f.style.visibility="hidden"
        b1b.style.visibility="hidden"
        b2b.style.visibility="hidden"
        b3b.style.visibility="hidden"
        change.style.visibility="hidden"
        powerbutton.style.visibility="hidden"
        on.style.visibility="hidden"
        },100)
        setTimeout(function(){
            s.style.visibility="hidden"
        },1000)
        
    }
    else{
    /*mes.innerText="go"*/
    i.style.visibility="visible"
    c.style.visibility="visible"
    cell.style.visibility="visible"
    clip.style.visibility="visible"
    b1f.style.visibility="visible"
    b2f.style.visibility="visible"
    b3f.style.visibility="visible"
    b1b.style.visibility="visible"
    b2b.style.visibility="visible"
    b3b.style.visibility="visible"
    powerbutton.style.visibility="visible"
    hovt.style.visibility="hidden"
    hconductometer.style.visibility="hidden"
    hcellstand.style.visibility="hidden"
    hcell.style.visibility="hidden"
    hcs.style.visibility="hidden"
    hss.style.visibility="hidden"
    has.style.visibility="hidden"
    /*power1.style.visibility="visible"*/
    setTimeout(function(){
        nob1.style.visibility="visible" 
        nob2.style.visibility="visible" 
        nob3.style.visibility="visible" 
        /*on.style.visibility="visible"*/
        off.style.visibility="visible" 
        s.style.visibility="hidden"

    },1000)
    resize()
    update()
    
    }
    
}

function poweron(){
    if(st==0){
    power="on"
    rightarrow.style.visibility="visible"  
    on.style.visibility="visible"
    off.style.visibility="hidden"
    messcounter=2
    update()
    st+=1
    }
    else if(st==1){  
    power="off"
    rightarrow.style.visibility="hidden"  
    on.style.visibility="hidden"
    off.style.visibility="visible"
    st=0
    messcounter=1
    update()

    }
}


constbutton.addEventListener("click",function cellconst(){
    if(power=="on"){
    rightarrow.style.visibility="hidden"
    cc="clicked"
    change.style.opacity="100%"
    update()
    power="khatam"
    st=10
    }
})

function nobn3(){
    if(cc=="clicked"){
        nob3.style.transform="translate(25%,0%) rotate(70deg)"
        cc="const"
        update()
    }
    else if(cc=="calibration"){
        nob3.style.transform="translate(0%,0%) rotate(0deg)"
        change.innerText="0.000"
        placed="no"
        cc="unknown"
        update()
        
    }
    else if(cc=="check"){
        nob3.style.transform="translate(10%,0%) rotate(20deg)"
        cc="calibrate"
        update()
    }
}

function nobn1(){
    console.log(cc)
    if(cc=="const"){
        if(constset=="no"){
            nob1.style.transform="translate(15%,0%) rotate(40deg)"
            change.innerText="0.135"
            constset="half"
        }
        else if(constset=="half"){
            nob1.style.transform="translate(29%,0%) rotate(90deg)"
            change.innerText="1.246"
            constset="over"
            update()
        }
        else if(constset=="over"){
            nob1.style.transform="translate(20%,0%) rotate(60deg)"
            change.innerText="0.960"
            constset="yes"
            cc="calibration"
            update()
        }
    }
}

function nobn2(){
    if(cc=="calibrate"){
    /*clickcount=0*/
    nob2.style.transform="translate(10%,0%) rotate(20deg)"
    change.innerText="0.335"
    cc="step1"
    }
    else if(cc=="step1"){
        /*clickcount=0*/
        nob2.style.transform="translate(15%,0%) rotate(30deg)"
        change.innerText="0.743"
        cc="step2"
    }
    else if(cc=="step2"){
        /*clickcount=0*/
        nob2.style.transform="translate(25%,0%) rotate(90deg)"
        change.innerText="1.215"
        cc="step3"
        update()
    }
    else if(cc=="step3"){
        /*clickcount=0*/
        nob2.style.transform="translate(25%,0%) rotate(70deg)"
        change.innerText="1.000"
        cc="done"
        clickcount=1
        statuses="checked"
        update()
    }
    /*else{
        change.innerText="0.000"
    }*/
}




function cellclick(){
    if(clickcount==0){
        cell.style.transform="translate(0%,35%)"
        /*clickcount+=1*/
        if(beaker=="cleaning-sol"){
            statuses="cleaned"
            /*console.log(statuses)*/
            clickcount+=1
        }
        else if(beaker=="standard" && cc=="unknown"){
            /*statuses="checked"*/
            cc="check"
            clickcount=10
            if(clickcount==10){
                update()
            }
           
            /*console.log(statuses)*/
        }
        else if(beaker=="unknown"){
            statuses="value-found"
            /*console.log(statuses)*/
            clickcount+=1
            if(cc=="done"){
            change.innerText="7.896"
            rc+=1
            if(rc==3){
                update()
            }
            }
        }
        else if(cc=="done" && beaker=="standard"){
            change.innerText="1.000"
            clickcount+=1
        }

    }
    else if(clickcount==1){
        cellclickreverse()
    }
}

function cellclickreverse(){
    cell.style.transform="translate(0%,0%)"
    clickcount-=1
    if(cc=="done" && beaker=="unknown"){
        change.innerText="0.000"
    }
    else if(cc=="done" && beaker=="standard"){
        change.innerText="0.000"
    }
}

function beaker1(){
    if(placed=="no"){
        b1f.style.transform="translate(-375%,15%)"
        b1b.style.transform="translate(-375%,15%)"
        beaker="cleaning-sol"
        clickcount=0
        placed="yes"
    }

    else if(statuses=="cleaned" && clickcount==0){
        b1f.style.transform="translate(0%,0%)"
        b1b.style.transform="translate(0%,0%)"
        clickcount=10
        cleaning="complete"
        update()
    }

}

function beaker2(){
    if(cleaning=="complete"){
        b2f.style.transform="translate(-540%,15%)"
        b2b.style.transform="translate(-540%,15%)"
        beaker="standard"
        clickcount=0
        cleaning="none"
        
    }

    else if(statuses=="checked" && clickcount==0){
        b2f.style.transform="translate(0%,0%)"
        b2b.style.transform="translate(0%,0%)"
        clickcount=10
        checking="complete"
        update()
    }
}

function beaker3(){
    if(checking=="complete"){
        b3f.style.transform="translate(-700%,15%)"
        b3b.style.transform="translate(-700%,15%)"
        beaker="unknown"
        clickcount=0
        checking="none"
        update()

    }
    else if(statuses=="value-found" && clickcount==0){
        b3f.style.transform="translate(0%,0%)"
        b3b.style.transform="translate(0%,0%)"
        clickcount=10
        simulation="complete"
        s.style.visibility="visible"
        s.innerText="Next"
        update()

        setTimeout(function(){
            cell.style.transitionDuration="0s"
            /*s.style.transitionDuration="0s"*/
            i.style.transitionDuration="0s"
            c.style.transitionDuration="0s"
            cell.style.transitionDuration="0s"
            clip.style.transitionDuration="0s"
            nob1.style.transitionDuration="0s"
            nob2.style.transitionDuration="0s"
            nob3.style.transitionDuration="0s"
            b1f.style.transitionDuration="0s"
            b2f.style.transitionDuration="0s"
            b3f.style.transitionDuration="0s"
            b1b.style.transitionDuration="0s"
            b2b.style.transitionDuration="0s"
            b3b.style.transitionDuration="0s"
            change.style.transitionDuration="0s"
        })
    }
}