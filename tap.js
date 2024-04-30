var water=document.getElementById('water');
var onoff=document.getElementById('onoff');
var flow=document.getElementById('flow');

var level=500;
var margin=0;
var tapstatus="OFF";
var waterflow="OFF";

flow.style.display="none";

function start(){
    if(tapstatus=="OFF"){
       tapstatus="ON";
       onoff.style.backgroundColor="green";
       water.style.borderTopLeftRadius="0px";
       water.style.borderTopRightRadius="0px";

       if(level>0){
        flow.style.display="block";
        var interval=setInterval(function(){
        level=level-1;
        margin=margin+1;
        water.style.height=level+"px";
        water.style.marginTop=margin+"px";
    
        if(level==0 || margin==500 || waterflow=="ON"){
        clearInterval(interval);
        flow.style.display="none";
        waterflow="OFF";
        }
       },50)
    }
}
    else if(tapstatus=="ON"){
        flow.style.display="none";
        waterflow="ON";
        onoff.style.backgroundColor="red";
        tapstatus="OFF";
    }
}
