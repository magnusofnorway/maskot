const a0_0x42bf2d=a0_0x108f;function embedMaskotChatbot(){let $=a0_0x108f;if(window.maskotConfig?.[$(195)])return;let x=$(241),e=document.currentScript,t=e.id||window[$(175)]?.[$(270)],_=$(242),a=null,n=!1,o=$(180),d=document[$(264)]($(228));d[$(154)]("id",$(149)),d[$(147)][$(230)]="fixed",d.style[$(197)]=$(268),d[$(147)].right=$(268),d[$(147)][$(206)]="50px",d[$(147)][$(236)]="50px",d[$(147)].borderRadius="25px",d[$(147)][$(146)]=x,d[$(147)][$(225)]=$(266),d[$(147)].cursor="pointer",d.style[$(184)]=999999998,d[$(147)][$(277)]=$(196);let s=document[$(264)]($(228));s[$(154)]("id","maskot-message-bubbles"),s[$(147)][$(230)]=$(239),s.style[$(197)]=$(240),s[$(147)][$(278)]=$(235),s[$(147)][$(213)]=$(173),s[$(147)][$(179)]=$(193),s[$(147)][$(184)]=999999997,s[$(147)][$(209)]=$(177),s[$(147)].flexDirection=$(217),s[$(147)][$(182)]=$(222),s[$(147)].maxWidth=$(227),s.style[$(269)]="none";let c=document[$(264)]($(228));c[$(167)]="&#10005;",c.style[$(230)]="absolute",c[$(147)].top=$(152),c[$(147)].right=$(152),c[$(147)][$(186)]=$(255),c[$(147)][$(269)]="none",c.style[$(249)]=$(280),c.style[$(219)]=$(280),c.style[$(184)]=999999996,c[$(147)].width=$(207),c[$(147)][$(236)]="22px",c.style[$(278)]=$(244),c[$(147)][$(153)]=$(280),c[$(147)][$(179)]=$(218),c[$(147)][$(209)]="pointer",s.appendChild(c),document.body[$(233)](s),d[$(166)]($(169),x=>{let e=$;d[e(147)][e(191)]=e(199)}),d.addEventListener($(252),x=>{let e=$;d[e(147)][e(191)]=e(263)});let i=document.createElement($(228));i[$(147)][$(269)]=$(258),i[$(147)][$(219)]=$(280),i[$(147)][$(249)]=$(280),i[$(147)][$(206)]="100%",i[$(147)][$(236)]=$(224),i[$(147)][$(184)]=999999999,d.appendChild(i),d[$(166)]($(220),()=>{let x=$;r.style[x(269)]===x(192)?(n=!0,s[x(147)][x(269)]=x(192),r.style[x(269)]=x(258),i[x(167)]=f(),r[x(201)][x(158)]({openChat:!0},"*")):(r[x(147)][x(269)]=x(192),i[x(167)]=b(),r[x(201)][x(158)]({closeChat:!0},"*"))}),window[$(166)]($(272),x=>{let e=$;x[e(246)]===e(185)&&x.data.closeIframe&&(r[e(147)][e(269)]="none",i[e(167)]=b())}),s[$(166)]($(220),()=>{let x=$;n=!0,s[x(147)][x(269)]=x(192),r.style[x(269)]=x(258),i.innerHTML=f()});let r=document[$(264)]($(274));r[$(250)]=$(170)+t,r[$(154)]("id",$(271)),r[$(147)][$(198)]=$(192),r[$(147)][$(230)]=$(239),r.style[$(155)]=$(217),r.style.justifyContent=$(164),r[$(147)][$(225)]=$(157),r.style[$(197)]=window[$(232)]<640?"0":$(240),r[$(147)][$(180)]=window[$(232)]<640?"0":$(268),r[$(147)].width=window[$(232)]<640?"100%":$(163),r.style.height=window[$(232)]<640?$(224):$(273),r[$(147)][$(181)]=window.innerWidth<640?"":$(190),r[$(147)][$(278)]=window[$(232)]<640?"0":$(248),r[$(147)][$(269)]=$(192),r[$(147)][$(184)]=999999999,r.style[$(168)]=$(238),document[$(202)][$(233)](r),window[$(166)]($(165),()=>{let x=$;o===x(180)?(r.style[x(180)]=window[x(232)]<640?0:x(268),r[x(147)][x(211)]=x(275)):(r[x(147)][x(211)]=window.innerWidth<640?0:"1rem",r[x(147)].right=x(275)),r[x(147)][x(197)]=window[x(232)]<640?0:x(212),r[x(147)][x(206)]=x(window.innerWidth<640?224:176),r.style[x(236)]=x(window[x(232)]<640?224:273),r[x(147)][x(278)]=window[x(232)]<640?"0":x(248),r.contentWindow[x(158)]({windowInnerWidth:window[x(232)]},"*")});let l=async()=>{let e=$,l=await fetch(e(262)+t,{method:e(203),headers:{"Content-Type":e(148)}}),{styles:f,initialMessages:p}=await l[e(204)]();d[e(147)][e(146)]=f.button_color||x,f[e(267)]===e(211)?(o=e(211),d[e(147)][e(211)]="1rem",d[e(147)].right=e(275),s.style[e(211)]=e(268),s.style.right="unset",r.style[e(211)]=window.innerWidth<640?0:"1rem",r[e(147)].right=e(275)):(d.style[e(180)]=e(268),d[e(147)].left="unset",s[e(147)][e(180)]="1rem",s[e(147)][e(211)]=e(275),r[e(147)][e(180)]=window[e(232)]<640?0:e(268),r[e(147)].left=e(275)),document[e(202)].appendChild(d),f[e(216)]&&(a='<img src="https://backend.chatbase.co/storage/v1/object/public/chat-icons/'+f[e(216)]+e(151));let u=function x(e){let t=$;"#"===e.charAt(0)&&(e=e[t(276)](1));let _=parseInt(e[t(276)](0,2),16),a=parseInt(e[t(276)](2,2),16),n=parseInt(e[t(276)](4,2),16);return t((.299*_+.587*a+.114*n)/255>.5?241:242)}(f[e(159)]||x);_=u,i[e(167)]=b(),p[e(229)](($,x)=>{let t=e,_=document[t(264)]("div");_[t(147)].display="flex",_[t(147)].justifyContent=f[t(267)]===t(211)?"flex-start":t(256);let a=document[t(264)](t(228));a[t(147)][t(146)]=f[t(156)]===t(226)?t(241):t(242),a[t(147)].color=f[t(156)]===t(226)?"white":t(241),a.style.boxShadow=t(157),a[t(147)][t(278)]="10px",a[t(147)][t(251)]="20px",a[t(147)].margin="8px",a.style[t(179)]=t(260),a.innerText=$,a[t(147)][t(261)]=0,a[t(147)][t(191)]=t(174),a[t(147)][t(277)]="opacity 0.5s ease, transform 0.5s ease",_.appendChild(a),s[t(233)](_),f[t(183)]>=0&&setTimeout(()=>{let $=t;!n&&!(window.innerWidth<640)&&"true"!==sessionStorage[$(223)]($(234))&&(0===x&&(s[$(147)][$(269)]=$(160)),a[$(147)][$(261)]=1,a.style[$(191)]=$(263),x===p.length-1&&sessionStorage[$(210)]("message_bubbles_have_been_shown",$(245)))},1e3*f[t(183)]+100*x)}),c.style.backgroundColor=f.theme===e(226)?h(e(231),.2):h(e(254),.12),c[e(147)][e(194)]=f[e(156)]===e(226)?e(242):"black",c[e(147)].boxShadow=e(189),s[e(166)]("mouseenter",()=>{let $=e;c[$(147)].display=$(258)}),s[e(166)](e(252),()=>{let $=e;c[$(147)][$(269)]=$(192)}),c.addEventListener(e(220),$=>{let x=e;$[x(178)](),s[x(147)][x(269)]=x(192)})};function b(){let x=$,e=x(247)+_+x(172);return a||e}function f(){let x='\n  <svg id="closeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="'+_+$(171);return x}function h(x,e){let t=$;"#"===x[t(265)](0)&&(x=x[t(276)](1));let _=$=>{let x=t;return Math[x(215)](255,Math[x(161)](0,$))},a=parseInt(x[t(276)](0,2),16),n=parseInt(x[t(276)](2,2),16),o=parseInt(x.substr(4,2),16),d=(.299*a+.587*n+.114*o)/255>.5?-1*Math[t(200)](e):Math[t(200)](e),s=_(a+Math[t(221)](255*d)),c=_(n+Math.round(255*d)),i=_(o+Math[t(221)](255*d)),r="#"+s[t(188)](16)[t(243)](2,"0")+c[t(188)](16)[t(243)](2,"0")+i[t(188)](16)[t(243)](2,"0");return r}l(),r[$(279)]=()=>{let x=$;r[x(201)][x(158)]({windowInnerWidth:window[x(232)]},"*")},window[$(175)]&&(window.maskotConfig.embedSuccess=!0)}function a0_0x5e40(){let $=["#000000","innerWidth","appendChild","message_bubbles_have_been_shown","10px","height","11366PzSUcH","hidden","fixed","80px","black","white","padStart","50%","true","origin",'\n  <svg id="chatIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="',"0.75rem","justifyContent","src","padding","mouseleave","4930xEkzTX","#FFFFFF","bold","flex-end","6366740ruUzMN","flex","217FYMKUc","14px","opacity","https://www.chatbase.co/api/get-chatbot-styles?chatbotId=","scale(1)","createElement","charAt","0 4px 8px 0 rgba(0, 0, 0, 0.2)","align_chat_button","1rem","display","chatbotId","maskot-bubble-window","message","85vh","iframe","unset","substr","transition","borderRadius","onload","center","backgroundColor","style","application/json","maskot-bubble-button","174712HvMwDm","\" style='width: 50px; height: 50px; border-radius: 25px;' />","-7px","textAlign","setAttribute","flexDirection","theme","rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px","postMessage","button_color","block","max","4571586sSWqZT","458px","space-between","resize","addEventListener","innerHTML","overflow","mouseenter","https://www.chatbase.co/chatbot-iframe/",'" width="24" height="24">\n    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />\n  </svg>\n  ','" width="24" height="24">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />\n  </svg>',"sans-serif","scale(0.9)","maskotConfig","448px","pointer","stopPropagation","fontSize","right","maxHeight","gap","auto_open_chat_window_after","zIndex","https://www.chatbase.co","fontWeight","3739785JcZVbQ","toString","rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px","824px","transform","none","16px","color","embedSuccess","all .2s ease-in-out","bottom","border","scale(1.08)","abs","contentWindow","body","GET","json","2691xeIVYu","width","22px","3341553dcFYBb","cursor","setItem","left","5rem","fontFamily","105WmdrPo","min","chat_icon","column","12px","alignItems","click","round","50px","getItem","100%","boxShadow","dark","70vw","div","forEach","position"];return(a0_0x5e40=function(){return $})()}function a0_0x108f($,x){let e=a0_0x5e40();return(a0_0x108f=function($,x){return e[$-=146]})($,x)}!function($,x){let e=a0_0x108f,t=$();for(;;)try{let _=-parseInt(e(259))/1*(parseInt(e(237))/2)+-parseInt(e(208))/3+parseInt(e(257))/4+parseInt(e(187))/5+parseInt(e(162))/6+parseInt(e(214))/7*(parseInt(e(150))/8)+-parseInt(e(205))/9*(parseInt(e(253))/10);if(934689===_)break;t.push(t.shift())}catch(a){t.push(t.shift())}}(a0_0x5e40,934689),"complete"===document.readyState?embedMaskotChatbot():window[a0_0x42bf2d(166)]("load",embedMaskotChatbot());