!function(){"use strict";function t(){var t={defaultOkLabel:"Ok",okLabel:"Ok",defaultCancelLabel:"Cancel",cancelLabel:"Cancel",defaultMaxLogItems:2,maxLogItems:2,promptValue:"",promptPlaceholder:"",closeLogOnClick:!1,closeLogOnClickDefault:!1,delay:5e3,defaultDelay:5e3,dialogs:{buttons:{holder:"<nav>{{buttons}}</nav>",ok:"<button class='ok' tabindex='-1'>{{ok}}</button>",cancel:"<button class='cancel' tabindex='-1'>{{cancel}}</button>"},input:"<input type='text'>",message:"<p class='msg'>{{message}}</p>",log:"<div class='{{class}}'>{{message}}</div>"},build:function(t){var e=this.dialogs.buttons.ok,i="<div class='dialog'><div>"+this.dialogs.message.replace("{{message}}",t.message);return("confirm"===t.type||"prompt"===t.type)&&(e=this.dialogs.buttons.cancel+this.dialogs.buttons.ok),"prompt"===t.type&&(i+=this.dialogs.input),i=(i+this.dialogs.buttons.holder+"</div></div>").replace("{{buttons}}",e).replace("{{ok}}",this.okLabel).replace("{{cancel}}",this.cancelLabel)},setCloseLogOnClick:function(t){this.closeLogOnClick=!!t},close:function(t,e){this.closeLogOnClick&&t.addEventListener("click",function(t){n(t.srcElement)}),e>0&&setTimeout(function(){n(t)},e&&!isNaN(+e)?+e:this.delay)},dialog:function(t,e,i,n){return this.setup({type:e,message:t,onOkay:i,onCancel:n})},log:function(t,e,i){var n=document.querySelectorAll(".alertify-logs > div");if(n){var o=n.length-this.maxLogItems;if(o>=0)for(var a=0,l=o+1;l>a;a++)this.close(n[a],1)}this.notify(t,e,i)},notify:function(t,e,i){var n=document.createElement("div");n.className=e||"default",n.innerHTML=t,"function"==typeof i&&n.addEventListener("click",i);var o=document.querySelector(".alertify-logs");o||(o=document.createElement("div"),o.className="alertify-logs",document.body.appendChild(o)),o.appendChild(n),setTimeout(function(){n.className+=" show"},10),this.close(n,this.delay)},setup:function(t){function e(e){"function"!=typeof e&&(e=function(){}),o&&o.addEventListener("click",function(o){t.onOkay&&"function"==typeof t.onOkay&&(l?t.onOkay(l.value,o):t.onOkay(o)),e(l?{buttonClicked:"ok",inputValue:l.value,event:o}:{buttonClicked:"ok",event:o}),n(i)}),a&&a.addEventListener("click",function(o){t.onCancel&&"function"==typeof t.onCancel&&t.onCancel(o),e({buttonClicked:"cancel",event:o}),n(i)})}var i=document.createElement("div");i.className="alertify hide",i.innerHTML=this.build(t);var o=i.querySelector(".ok"),a=i.querySelector(".cancel"),l=i.querySelector("input");l&&("string"==typeof this.promptPlaceholder&&(l.placeholder=this.promptPlaceholder),"string"==typeof this.promptValue&&(l.value=this.promptValue));var r;return"function"==typeof Promise?r=new Promise(e):e(),document.body.appendChild(i),setTimeout(function(){i.classList.remove("hide")},100),r},okBtn:function(t){return this.okLabel=t,this},setDelay:function(t){var e=parseInt(t||0,10);return this.delay=isNaN(e)?this.defultDelay:t,this},cancelBtn:function(t){return this.cancelLabel=t,this},setMaxLogItems:function(t){this.maxLogItems=parseInt(t||this.defaultMaxLogItems)},reset:function(){this.okBtn(this.defaultOkLabel),this.cancelBtn(this.defaultCancelLabel),this.setMaxLogItems(),this.promptValue="",this.promptPlaceholder="",this.delay=this.defaultDelay,this.setCloseLogOnClick(this.closeLogOnClickDefault)}};if(!e){var i=document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",o.innerHTML=".alertify-logs>*{padding:12px 24px;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.2);border-radius:1px}.alertify-logs>*,.alertify-logs>.default{background:rgba(0,0,0,.8)}.alertify-logs>.error{background:rgba(244,67,54,.8)}.alertify-logs>.success{background:rgba(76,175,80,.9)}.alertify{position:fixed;background-color:rgba(0,0,0,.3);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:99999}.alertify.hide{opacity:0;pointer-events:none}.alertify,.alertify.hide,.alertify.show{box-sizing:border-box;-webkit-transition:all .33s cubic-bezier(.25,.8,.25,1);transition:all .33s cubic-bezier(.25,.8,.25,1)}.alertify,.alertify *{box-sizing:border-box}.alertify .dialog{padding:12px}.alertify .alert,.alertify .dialog{width:100%;margin:0 auto;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.alertify .alert>*,.alertify .dialog>*{width:400px;max-width:95%;margin:0 auto;text-align:center;padding:12px;background:#fff;box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alert .msg,.alertify .dialog .msg{padding:12px;margin:0;text-align:left}.alertify .alert input,.alertify .dialog input{margin-bottom:15px;width:100%;font-size:100%;padding:12px}.alertify .alert input:focus,.alertify .dialog input:focus{outline-offset:-2px}.alertify .alert nav,.alertify .dialog nav{text-align:right}.alertify .alert nav button,.alertify .dialog nav button{background:0 0;box-sizing:border-box;color:rgba(0,0,0,.87);position:relative;outline:0;border:0;display:inline-block;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-size:14px;text-decoration:none;cursor:pointer;border-radius:2px}.alertify .alert nav button:active,.alertify .alert nav button:hover,.alertify .dialog nav button:active,.alertify .dialog nav button:hover{background-color:rgba(0,0,0,.05)}.alertify .alert nav button:focus,.alertify .dialog nav button:focus{border-style:dashed}.alertify-logs{position:fixed;z-index:100;bottom:16px;left:16px}.alertify-logs>*{box-sizing:border-box;-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1);margin-top:10px;position:relative;float:left;clear:both;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;perspective:1000}.alertify-logs>.show{left:0;opacity:1}.alertify-logs>*,.alertify-logs>.hide{left:-110%;opacity:0}",i.insertBefore(o,i.firstChild),e=!0}return{_$$alertify:t,reset:function(){return t.reset(),this},alert:function(e,i,n){return t.dialog(e,"alert",i,n)||this},confirm:function(e,i,n){return t.dialog(e,"confirm",i,n)||this},prompt:function(e,i,n){return t.dialog(e,"prompt",i,n)||this},log:function(e,i){return t.log(e,"default",i),this},success:function(e,i){return t.log(e,"success",i),this},error:function(e,i){return t.log(e,"error",i),this},cancelBtn:function(e){return t.cancelBtn(e),this},okBtn:function(e){return t.okBtn(e),this},delay:function(e){return t.setDelay(e),this},placeholder:function(e){return t.promptPlaceholder=e,this},defaultValue:function(e){return t.promptValue=e,this},maxLogItems:function(e){return t.setMaxLogItems(e),this},closeLogOnClick:function(e){return t.setCloseLogOnClick(!!e),this}}}var e,i=500,n=function(t){if(t){var e=function(){t&&t.parentNode&&t.parentNode.removeChild(t)};t.classList.add("hide"),t.addEventListener("transitionend",e),setTimeout(e,i)}};"undefined"!=typeof module&&module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return new t}):window.alertify=new t}();