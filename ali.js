
$("style").last().append(`#users .uzr.baqer img.co {
  width: 0px !important;
    height: 0px !important;
  margin-right: 1px;

}
 

#users .uzr.baqer span.uhash {
    -webkit-text-fill-color: transparent;
width: 0px !important;
    height: 0px !important;
  margin-right: 1px;
}
   

#users .uzr.baqer img.u-ico {
margin-left: 5px;
                 
}
  

#users .uzr.baqer img.ustat {
      width: 55px !important;
   border-radius: 100px  !important;
height: 55px !important;
  min-height: 0% !important;
  z-index: 0 !important;
margin-left: 1px !important;
margin-top: 1.5px !important;
transform:rotate(46deg);
border: 0px solid #0000;
box-shadow: 0 0 0px rgb(0, 0, 0), inset 0 0 0px rgb(0, 0, 0), 0 0 0 0px #000;
        
}


#users .uzr.baqer .fitimg.u-pic {
  border: 1.5px solid #fff;
margin-left: -54px ;
height: 52px !important;
z-index: 99999 !important;
  border-radius: 100px;
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 3px #000;
margin-bottom: 5px !important;
margin-top: 2.9px !important;

}
 

#users .uzr.baqer .u-msg {
  margin-left: 8px ;
margin-top: 2px !important;
  background-size: 100% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #660610;
     padding: 0px !important;
  font-size: 89% !important;
 
}
       

#users .uzr.baqer {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 3px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 0px 10px 0px 10px;
         border: 1px solid #fff;
 background-image: url(https://www2.0zz0.com/2024/11/22/16/244708976.jpg);
background-size: 100%;
      
}
   

#users .uzr.baqer .d-flex.fl {
  padding-right: 0px !important;

}
 

#users .uzr.baqer .u-topic {
  margin-left: 5px;
   -webkit-background-clip: text;
      
 background-image: url(https://up6.cc/2023/01/167459183804791.gif);
 background-size: cover;

}
  

#users .uzr.baqer .itarr_baqer {
   width: 23px;
 margin-top: 28px;
cursor: pointer;
margin-left: 28px;

}`);
const xxxx = [ {
  'name': "baqer",
  'deco': "KP",
  'cls': "baqer",
  'icon': "https://up6.cc/2024/01/170543891955181.gif"
}];
setInterval(() => {
  if (myid != null) {
    xxxx.forEach(dataItem => {
      const userElement = $(users).find(".uzr:contains('" + dataItem.deco + "')"); 

      if (userElement && !userElement.hasClass(dataItem.cls)) {
        userElement.addClass(dataItem.cls); 
        userElement.find(".fitimg.u-pic").append(`
          <img class="itarr_${dataItem.name}" title="اطاري" src="${dataItem.icon}">
        `); 
      }
    });
  }
}, 6000);

setInterval(() => {
  $('img').on("contextmenu", function () {
    return false;
  });
}, 2000);
