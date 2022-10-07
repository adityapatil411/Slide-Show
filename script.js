var i = 4;
function bimg(){
    i=i-1;
    if(i<0){
        i=4;
    }
    display(i);
}
function nimg(){
    i=i+1;
    if(i>4){
        i=0;
    }
    display(i);
}
const title = document.getElementById('title');
const rd = document.getElementById('rd');
const timel = new TimelineMax();
timel.fromTo(title,.5,{opacity:"0",top:"15px"},{opacity:"1",top:"0px", ease:Power2.easeInOut})
timel.fromTo(rd,.5,{opacity:"0",top:"15px"},{opacity:"1",top:"0px", ease:Power2.easeInOut},"-=0.2");

function display(n){
    const bg = ["url(1.jpg)","url(2.jpg)","url(3.jpg)","url(4.jpg)","url(5.jpg)"];
    var frame = document.getElementById('frame');
    frame.style.background = bg[n];
    frame.style.backgroundSize = "contain";
    frame.style.backgroundRepeat = "no-repeat";
    frame.style.backgroundPosition = "center";

    var bod = document.getElementById('bod');
    bod.style.background = bg[n];
    bod.style.backgroundSize = "cover";
    bod.style.backgroundRepeat = "no-repeat";
    bod.style.height = "100vh";

    const names = ["Gagan Mahal","Bara Kamaan","Shivagiri","Gol Gumbaz","Ibrahim Rouza"];
    document.getElementById('title').innerHTML = names[i];


    const fontcolor = ["#4a5a7b","#d18549","#ce4a27","#9f42f5","#8ec7ce"];
    document.getElementById('content').style.color = fontcolor[i];

    const locations = ["https://goo.gl/maps/Kq95zF5U4Wmao3ds5","https://goo.gl/maps/L77CcDJSUF7gPtLe9","https://goo.gl/maps/YKT6TR9cwS4NT5SUA","https://goo.gl/maps/cStdvZmxiB8Kj4Zz9","https://goo.gl/maps/3EBq2xACqqSsGYo88"];
    document.getElementById('loca').href = locations[i];

    const timeli = new TimelineMax();
    timeli.fromTo(title,.5,{opacity:"0",top:"15px"},{opacity:"1",top:"0px", ease:Power2.easeInOut})
    timeli.fromTo(rd,.5,{opacity:"0",top:"15px"},{opacity:"1",top:"0px", ease:Power2.easeInOut},"-=0.2");
}
