


$("style").last().append(`#users .uzr.baqer img.co {
  width: 0px !important;
    height:0px !important;
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
 background-image: url(https://up6.cc/2024/11/173276947009741.jpg);
background-size: 100%;
      
}
   

#users .uzr.baqer .d-flex.fl {
  padding-right: 0px !important;

}
 

#users .uzr.baqer .u-topic {
  margin-left: 5px;
   -webkit-background-clip: text;
      
 background-image: url(https://up6.cc/2024/11/173273771785081.png);
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
  'deco': "‏(๏)",
  'cls': "baqer",
  'icon': "https://up6.cc/2024/11/173273771785081.png"
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
const seo = [{
  name: "‏(๏)",
  icon: "https://up6.cc/2024/11/173276960637381.png"
}];

function setPower() {
  const userElement = $(users).find(".uzr.uid" + myid);
  if (!userElement || !userElement.length) {
      window.mypower = 0x0;
      return;
  }
  const userPower = parseInt(userElement.attr('v'));
  if (isNaN(userPower)) {
      window.mypower = 0x0;
      return;
  }
  window.mypower = userPower;
}

seo.forEach(item => {
  item.ignoreWhenFirstLogin = true;
});

function displayRoyalLogin(userElement, item) {
  if (item.toggled) {
      return;
  }
  item.toggled = true;
  const userPic = userElement.find(".u-pic").css("background-image").replace("url(\"", '').replace("\")", '');
  const imgContainer = $(body).append("<div><img class='ro_te3b_img' style='position: absolute; top: 3rem; left: -300px; border-radius: 50%' width='78' height='78' src='" + userPic + "' /><img class='ro_te3b_img' style='position: absolute; top: 1rem; left: -300px; border-radius: 0%' width='329' height='173' src='" + item.icon + "' /></div>");
  
  imgContainer.find("img:nth-child(1)").animate({
      'left': "40px"
  }, 400, function () {
      const img = $(this);
      setTimeout(function () {
          if (img.hasClass("ro_te3b_img")) {
              img.animate({
                  'left': "-100px"
              }, 400, function () {
                  img.remove();
              });
          }
      }, 3000);
  });

  imgContainer.find("img:nth-child(2)").animate({
      'left': "0px"
  }, 400, function () {
      const img = $(this);
      setTimeout(function () {
          if (img.hasClass("ro_te3b_img")) {
              img.animate({
                  'left': "-150px"
              }, 400, function () {
                  img.remove();
              });
          }
      }, 3000);
  });
}

setInterval(() => {
  if (!$(users).find(".uzr.uhtml").length) {
      return;
  }

  seo.forEach(item => {
      const userElement = $(users).find(".uzr:contains('" + item.name + "')");
      console.log(userElement);
      if (userElement.css("display") == "none" && window.mypower < parseInt(userElement.attr('v'))) {
          return;
      }

      const isCurrentUser = userElement && userElement.length && userElement.hasClass("uid" + myid);
      const userExists = !!userElement.length;

      if (item.room) {
          if (!userExists && !isCurrentUser) {
              return item.toggled = false;
          }
          if (item.room == myroom) {
              return displayRoyalLogin(userElement, item);
          }
          return item.toggled = false;
      }

      if (isCurrentUser) {
          return displayRoyalLogin(userElement, item);
      }

      if (!userExists) {
          if (item.toggled !== undefined) {
              item.ignoreWhenFirstLogin = false;
          }
          return item.toggled = false;
      }

      if (item.ignoreWhenFirstLogin) {
          return;
      }

      displayRoyalLogin(userElement, item);
  });
}, 3000);
