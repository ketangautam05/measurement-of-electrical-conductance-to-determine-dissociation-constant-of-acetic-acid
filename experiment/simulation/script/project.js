
var hmessage=["उपकरणों पर माउस ले जा कर उनसे स्वयं को परिचित कराएं.....फिर प्रयोग शुरू करने के लिए आगे बटन पर क्लिक करें",
"मुख्य स्विच चालू करें",
"कंडक्टोमीटर पर पावर बटन दबाएं",
"फ़ंक्शन नॉब घुमाएँ और सेल-कॉन्स्ट मोड पर सेट करें",
"सेल स्थिरांक सेट करने के लिए सेल-कॉन्स्ट नॉब घुमाएँ",
"फ़ंक्शन नॉब घुमाएँ और MHOS मोड पर वापस सेट करें",
"अब आसुत जल द्वारा चालकता सेल को साफ करें",
"अब चालकता सेल को अलग-अलग सांद्रता वाले प्रत्येक सोडियम क्लोराइड घोल में एक-एक करके डुबोएं",
"सटीक माप के लिए संतुलन स्थापित करने के लिए चालकता सेल को कुछ समय के लिए घोल में डुबोकर छोड़ दें",
"कंडक्टोमीटर की स्क्रीन पर दिखाई गई प्रत्येक रीडिंग को नोट करें",
"प्रत्येक हाइड्रो क्लोरिक एसिड घोल के लिए रीडिंग लिखें",
"सटीक माप के लिए संतुलन स्थापित करने के लिए चालकता सेल को कुछ समय के लिए घोल में डुबोकर छोड़ दें",
"कंडक्टोमीटर की स्क्रीन पर दिखाई गई प्रत्येक रीडिंग को नोट करें",
"सोडियम एसीटेट घोल के लिए रीडिंग लिखें",
"सभी रेटिंग, मान और गणना देखने के लिए observations बटन दबाएँ"]

var message=["Make yourself familiar with the insturments by hovering over them, then click on start button to start the experiment",
"Turn on the main switch",
"Press the power button on conductometer",
"Rotate FUNCTION knob and set on CELL-CONST mode",
"Rotate CELL-CONST knob to set cell constant",
"Rotate FUNCTION knob and set back on MHOS mode",
"Now clean the conductivity cell by Distilled water",
"Now dip conductivity cell in each sodium chloride solution of different concentration one by one",
"leave conductivity cell dipped in solution for some time to establish equilibirium for accurate measurement",
"Note down every reading shown on conductometer's screen",
"Write down readings for each Hydro Chloric acid solution",
"leave conductivity cell dipped in solution for some time to establish equilibirium for accurate measurement",
"Note down every reading shown on conductometer's screen",
"Write down readings for Sodium acetate solution",
"press observations button to see all radings, values and calculations"]




var s=document.querySelector("#start")
var ins = document.querySelector("#ins")
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
var ph = document.querySelector("#ph")
var hlight = document.querySelector("#hlight")


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
var lang = "none"
var phc=0


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
    langselector.style.opacity="0%"
    s.innerText="आगे"
    ins.innerText="निर्देश :-"

    setTimeout(function(){
        langselector.style.visibility="hidden"
        s.style.animation="vibrate 1s"
        s.style.animationIterationCount="infinite"
    },1000)
    update()
}

function eng1(){
    console.log(lang)
    lang="eng"
    headertext.innerText="Measurement of Electrical conductance to determine dissociation constant of 'Acetic' acid"
    langselector.style.opacity="0%"
    setTimeout(function(){
        langselector.style.visibility="hidden"
        s.style.animation="vibrate 1s"
        s.style.animationIterationCount="infinite"
    },1000)
    update() 
}



function speech1(){
    speechSynthesis.cancel();
    if(lang=="none"){
    }
    else if(lang=="hindi"){
        mes1=hmessage[messcounter-1]
    }
    else if(lang=="eng"){
        mes1=message[messcounter-1]
    }
    setTimeout(function(){ 
        
        const utterance = new SpeechSynthesisUtterance(mes1);
        if(lang=="hindi"){
            utterance.lang='hi-IN';
        }
        else if(lang=="eng"){
            utterance.lang='en-IN';
        }
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
        a5.style.visibility="hidden"
        a5b.style.visibility="hidden"
        a25.style.visibility="hidden"
        a25b.style.visibility="hidden"
        a125.style.visibility="hidden"
        a125b.style.visibility="hidden"
        off.style.visibility="hidden"

        change.style.visibility="hidden"
        powerbutton.style.visibility="hidden"
        on.style.visibility="hidden"
        a62.style.visibility="hidden"
        a62b.style.visibility="hidden"
        a31.style.visibility="hidden"
        a31b.style.visibility="hidden"
        a16.style.visibility="hidden"
        a16b.style.visibility="hidden"

        tbl1.style.visibility="visible"
        tbl2.style.visibility="visible"
        
        tblh1.style.visibility="visible"
        tblh2.style.visibility="visible"
        
        simulation="sabkhatam"
        

        
        },100)
        
    }
    else if(simulation=="sabkhatam"){
        tbl1.style.visibility="hidden"
        tbl2.style.visibility="hidden"
        tblh1.style.visibility="hidden"
        tblh2.style.visibility="hidden"
        tbl3.style.visibility="visible"
        tblh3.style.visibility="visible"
        tbl4.style.visibility="visible"
        tblh4.style.visibility="visible"
        simulation="ended"
        setTimeout(function(){
            imageshow="none"
        },2000)
    }

    else if(imageshow=="none"){
        dataimage.style.visibility="visible"
        imageheading.style.visibility="visible"
        formula.style.visibility="visible"
        tbl3.style.visibility="hidden"
        tblh3.style.visibility="hidden"
        tbl4.style.visibility="hidden"
        tblh4.style.visibility="hidden"
        imageshow="yes"
    }
    else if(imageshow=="yes"){
        dataimage.style.visibility="hidden"
        imageheading.style.visibility="hidden"
        formula.style.visibility="hidden"
        tbl5.style.visibility="visible"
        tblh5.style.visibility="visible"
    }
    else if(simulation=="none"){
        c.style.transitionDuration="1.0s"
        cell.style.transitionDuration="1.0s"
        b1f.style.transitionDuration="1.0s"
        b2f.style.transitionDuration="1.0s"
        b3f.style.transitionDuration="1.0s"
        b1b.style.transitionDuration="1.0s"
        b2b.style.transitionDuration="1.0s"
        b3b.style.transitionDuration="1.0s"
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
        s.style.animation="none"
        s.style.animationIterationCount="0"
        ph.style.visibility="visible"
        ph.style.transform="translate(-230%,-500%)"
        simulation="start"
        setTimeout(function(){
            nob1.style.visibility="visible" 
            nob2.style.visibility="visible" 
            nob3.style.visibility="visible" 
            off.style.visibility="visible" 
            s.style.visibility="hidden"
            na5.style.visibility="visible"
            na5b.style.visibility="visible"
            na25.style.visibility="visible"
            na25b.style.visibility="visible"
            na125.style.visibility="visible"
            na125b.style.visibility="visible"

        },1000)
        resize()
        update()

        //temp code for hiding the beakers 

        //b1f.style.visibility="hidden"
        b2f.style.visibility="hidden"
        b3f.style.visibility="hidden"
        //b1b.style.visibility="hidden"
        b2b.style.visibility="hidden"
        b3b.style.visibility="hidden"
    
    }
    
}

function poweron(){
    if(st==0){
    power="on"
    rightarrow.style.visibility="visible"  
    on.style.visibility="visible"
    off.style.visibility="hidden"
    ph.style.visibility="hidden"
    messcounter=2
    update()
    st+=1
    }
    else if(st==1){  
    power="off"
    rightarrow.style.visibility="hidden"  
    on.style.visibility="hidden"
    off.style.visibility="visible"
    ph.style.visibility="visible"
    ph.style.transform="translate(-230%,-500%)"
    st=0
    messcounter=1
    update()

    }
}


function cellconst(){
    if(power=="on"){
    rightarrow.style.visibility="hidden"
    cc="clicked"
    change.style.opacity="100%"
    ph.style.visibility="visible"
    ph.style.transform="translate(-410%,-700%)"
    update()
    power="khatam"
    st=10
    }
}

////////////////////////////////////////////////////////////////////////// nob1 function   ////////////////////////////////////////////////////////////////////////////

function nobn1(){
    console.log(cc)
    if(cc=="const"){
        if(constset=="no"){
            nob1.style.transform="translate(15%,0%) rotate(40deg)"
            change.innerText="0.135"
            ph.style.visibility="hidden"
            constset="half"
            cell.style.transform="scale(1)"
            hlight.style.visibility="hidden"
        }
        else if(constset=="half"){
            nob1.style.transform="translate(29%,0%) rotate(90deg)"
            change.innerText="1.246"
            constset="overend"
            if(m==0){
                ptext.innerText="WARNING"
                hint.innerText="Ohh you rotated too much make it to 1.160"
                box.style.visibility="visible"
            }
           
        }
        else if(constset=="over"){
            nob1.style.transform="translate(20%,0%) rotate(60deg)"
            change.innerText="1.160"
            ph.style.visibility="visible"
            ph.style.transform="translate(-410%,-700%)"
            constset="yes"
            cc="calibration"
            update()
        }
    }
}

///////////////////////////////////////////////////////////////////// nob2 function   //////////////////////////////////////////////////////////////////////////////

function nobn2(){
    if(cc=="calibrate"){
    nob2.style.transform="translate(10%,0%) rotate(20deg)"
    change.innerText="0.335"
    cc="step1"
    ph.style.visibility="hidden"
    }
    else if(cc=="step1"){
        nob2.style.transform="translate(15%,0%) rotate(30deg)"
        change.innerText="0.743"
        cc="step2"
    }
    else if(cc=="step2"){
        nob2.style.transform="translate(25%,0%) rotate(90deg)"
        change.innerText="1.215"
        cc="step3"
        update()
    }
    else if(cc=="step3"){
        nob2.style.transform="translate(25%,0%) rotate(70deg)"
        change.innerText="1.000"
        cc="done"
        clickcount=1
        statuses="checked"
        ph.style.visibility="visible"
        ph.style.transform="translate(-750%,-400%)"
        update()
    }
}

///////////////////////////////////////////////////////////////////// nob3 function   //////////////////////////////////////////////////////////////////////////////

function nobn3(){
    if(cc=="clicked"){
        nob3.style.transform="translate(25%,0%) rotate(70deg)"
        cc="const"
        ph.style.transform="translate(-350%,-700%)"
        cell.style.transform="scale(3)"
        hlight.style.visibility="visible"
        update()
    }
    else if(cc=="calibration"){
        nob3.style.transform="translate(0%,0%) rotate(0deg)"
        change.innerText="0.000"
        placed="no"
        cc="unknown"
        ph.style.transform="translate(-1070%,-650%)"
        update()
        
    }
    else if(cc=="check"){
        nob3.style.transform="translate(10%,0%) rotate(20deg)"
        ph.style.transform="translate(-260%,-700%)"
        cc="calibrate"
        update()
    }
}


//////////////////////////////////////////////////////////// conductivity cell function   /////////////////////////////////////////////////////////////////////////

function cellclick(){
    if(clickcount==0){
        cell.style.transform="translate(0%,35%)"
        ph.style.transform="translate(-750%,-400%) rotate(0deg)"
        clickcount=10
        checking="50"
        /**************************************************** beaker distilled water *********************************/
        if(beaker=="cleaning-sol"){
            statuses="cleaned"
            clickcount=1
        }
        /**************************************** beaker standard ************************************************/
        else if(beaker=="standard"){
            setTimeout(function(){
                clickcount=1
            },1500)
            if(type=="na5"){
                change.innerText="05.93"
                testing="read1"
                setTimeout(function(){
                    change.innerText="05.95"
                },1500)
                messcounter=8
                update()
            }
            else if(type=="na25"){
                change.innerText="02.76"
                testing="read2"
                setTimeout(function(){
                    change.innerText="02.77"
                },1500)
            }
            else if(type=="na125"){
                change.innerText="01.45"
                testing="read3"
                setTimeout(function(){
                    change.innerText="01.47"
                },1500)
            }else if(type=="na62"){
                change.innerText="00.76"
                testing="read21"
                setTimeout(function(){
                    change.innerText="00.77"
                },1500)
            }
            else if(type=="na31"){
                change.innerText="00.40"
                testing="read22"
                setTimeout(function(){
                    change.innerText="00.41"
                },1500)
            }
            else if(type=="na16"){
                change.innerText="00.21"
                testing="read23"
                setTimeout(function(){
                    change.innerText="00.23"
                },1500)
            }
            else if(type=="h5"){
                chance="khatam"
                change.innerText="013.4"
                testing="read4"
                setTimeout(function(){
                    change.innerText="013.7"
                },1500)
                messcounter=11
                update()
                
            }
            else if(type=="h25"){
                change.innerText="07.64"
                testing="read5"
                setTimeout(function(){
                    change.innerText="07.65"
                },1500)
            }
            else if(type=="h125"){
                change.innerText="04.13"
                testing="read6"
                setTimeout(function(){
                    change.innerText="04.15"
                },1500)
            }
            else if(type=="h62"){
                change.innerText="02.12"
                testing="read25"
                setTimeout(function(){
                    change.innerText="02.14"
                },1500)
            }
            else if(type=="h31"){
                change.innerText="01.11"
                testing="read26"
                setTimeout(function(){
                    change.innerText="01.12"
                },1500)
            }
            else if(type=="h16"){
                change.innerText="00.59"
                testing="read27"
                setTimeout(function(){
                    change.innerText="00.60"
                },1500)
            }
        }
        /***************************************** beaker unknown ****************************/
        else if(beaker=="unknown"){
            setTimeout(function(){
                clickcount=1
            },1500)
            statuses="value-found"
            if(type=="a5"){
                chance="khatam"
                change.innerText="02.24"
                testing="read8"
                setTimeout(function(){
                    change.innerText="02.26"
                },1500)
                messcounter=11
                update()
            }
            else if(type=="a25"){
                change.innerText="01.45"
                testing="read9"
                setTimeout(function(){
                    change.innerText="01.46"
                },1500)
            }
            else if(type=="a125"){
                change.innerText="00.91"
                testing="read10"
                setTimeout(function(){
                    change.innerText="00.92"
                },1500)
            }
            else if(type=="a62"){
                change.innerText="00.53"
                testing="read31"
                setTimeout(function(){
                    change.innerText="00.54"
                },1500)
            }
            else if(type=="a31"){
                change.innerText="00.30"
                testing="read32"
                setTimeout(function(){
                    change.innerText="00.31"
                },1500)
            }
            else if(type=="a16"){
                change.innerText="00.15"
                testing="read33"
                setTimeout(function(){
                    change.innerText="00.17"
                    checking="khatam"
                },1500)
            }
        }
    }
    else if(clickcount==1){
        cellclickreverse()
    }
}

///////////////////////////////////////////////////////////////////////////click reverse function////////////////////////////////////////////////////////

function cellclickreverse(){
    cell.style.transform="translate(0%,0%)"
    clickcount-=1
    ph.style.transform="translate(-670%,-800%) rotate(-90deg)"
    if(beaker=="unknown"){
        change.innerText="0.000"
        if(type=="a5"){
            messcounter=12
            update()
        }
    }
    else if(beaker=="standard"){
        change.innerText="0.000"
        if(type=="na5"){
            messcounter=9
            update()
        }
        else if(type=="h5"){
            messcounter=12
            update()
        }
    }
    else if(statuses=="cleaned"){
        if(testing=="read23"){
            chance="second"
        }
        else if(testing=="read7"){
            chance="third"
        }
        else if(placed=="yes"){
            m=1
        }
    }
}

///////////////////////////////////////////////////////////////////   DISTILLED WATER BEAKER   ///////////////////////////////////////////////////////////////////////

function beaker1(){
    if(placed=="no" || m==8 || m==13){
        b1f.style.transform="translate(-375%,15%)"
        b1b.style.transform="translate(-375%,15%)"
        beaker="cleaning-sol"
        clickcount=0
        placed="yes"
        ph.style.transform="translate(-750%,-400%)"
        if(m==8){
            m=9
        }
        else if(m==13){
            m=15

        }
    }

    else if(statuses=="cleaned" && clickcount==0){
        b1f.style.transform="translate(0%,0%)"
        b1b.style.transform="translate(0%,0%)"
        clickcount=10
        cleaning="complete"
        ph.style.transform="translate(-1200%,-650%) rotate(0deg)"
        pop1()
            if(m==9){
                messcounter=10
                update()
                m=90
            }
            if(m==15){
                messcounter=13
                update()
                m=75
            }
    }

}


