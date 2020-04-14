(function(t){function e(e){for(var o,l,r=e[0],s=e[1],c=e[2],m=0,p=[];m<r.length;m++)l=r[m],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,r=1;r<a.length;r++){var s=a[r];0!==n[s]&&(o=!1)}o&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var o={},n={app:0},i=[];function l(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=o,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(a,o,function(e){return t[e]}.bind(null,o));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/PeriodicTable/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var f=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("85ec"),n=a.n(o);n.a},"088c":function(t,e,a){},"0e5c":function(t,e,a){"use strict";var o=a("ed54"),n=a.n(o);n.a},1757:function(t,e,a){"use strict";var o=a("7309"),n=a.n(o);n.a},"3f80":function(t,e,a){"use strict";var o=a("856b"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],l=a("8c4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-all",attrs:{id:"app"}},[a("div",{staticClass:"pt-top"},[a("pt-left-top",{attrs:{periodicTableData:t.periodicTableData.data.elements}}),a("h2",{staticClass:"pt-title"},[a("h3",{staticClass:"pt-TITLE"},[t._v("Sunayna's Periodic Table")]),t._v(" Click "),a("router-link",{attrs:{to:"/ptGame"}},[t._v("HERE")]),t._v(" to play Sunayna's super cool game about metals, nonmetals and metalloids! ")],1),a("pt-right-top",{attrs:{periodicTableData:t.periodicTableData.data.elements}})],1),a("pt-middle",{attrs:{periodicTableData:t.periodicTableData.data.elements}}),a("pt-bottom",{attrs:{periodicTableData:t.periodicTableData.data.elements}})],1)},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("pt-mid",{attrs:{periodicTableData:t.periodicTableData}})],1)},f=[];let m={"alkali metal":"#ff6666","alkaline earth metal":"#ffa64d","post-transition metal":"#b5ff33",metalloid:"#33cc33","polyatomic nonmetal":"#33ccff","diatomic nonmetal":"#3399ff","noble gas":"#c266ff"},p={Po:"metalloid",Lv:"post-transition metal",Nh:"post-transition metal",Mc:"post-transition metal",At:"diatomic nonmetal",Ts:"diatomic nonmetal",Og:"noble gas"};function d(t){let e=p[t.symbol]||t.category;return m[e]||"#ffff66"}let u={render:function(t){let e=[];for(let a=18;a<=55;a+=1){let o=this.periodicTableData[a];e.push(t("pt-element",{props:{sym:o.symbol,atn:""+o.number,txt:o.name,mss:""+o.atomic_mass,clr:d(o)}}))}e.push(t("pt-element",{props:{sym:"",atn:"57-71",txt:"",mss:"",clr:"#ffb3ff"}}));for(let a=71;a<=87;a+=1){let o=this.periodicTableData[a];e.push(t("pt-element",{props:{sym:o.symbol,atn:""+o.number,txt:o.name,mss:""+o.atomic_mass,clr:d(o)}}))}e.push(t("pt-element",{props:{sym:"",atn:"89-103",txt:"",mss:"",clr:"#ff66cc"}}));for(let a=103;a<=117;a+=1){let o=this.periodicTableData[a];e.push(t("pt-element",{props:{sym:o.symbol,atn:""+o.number,txt:o.name,mss:""+o.atomic_mass,clr:d(o)}}))}return t("div",{class:"pt-middle"},e)},props:{periodicTableData:{type:Array,required:!0}}};var h={name:"PtMiddle",props:{periodicTableData:{type:Array,required:!0}},components:{"pt-mid":u},data(){return{configPtStage:{width:500,height:500,x:0,y:0}}}},g=h,b=(a("69dd"),a("2877")),y=Object(b["a"])(g,c,f,!1,null,"7cdfb782",null),v=y.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("pt-lt",{attrs:{periodicTableData:t.periodicTableData}})],1)},T=[];let w={"alkali metal":"#ff6666","alkaline earth metal":"#ffa64d","post-transition metal":"#b5ff33",metalloid:"#33cc33","polyatomic nonmetal":"#33ccff","diatomic nonmetal":"#3399ff","noble gas":"#c266ff"},_={H:"polyatomic nonmetal"};function S(t){let e=_[t.symbol]||t.category;return w[e]||"#ffff66"}let D={render:function(t){let e=[],a=this.periodicTableData[0];e.push(t("pt-element",{props:{sym:a.symbol,atn:""+a.number,txt:a.name,mss:""+a.atomic_mass,clr:S(a)}})),e.push(t("pt-element",{style:{visibility:"hidden"},props:{sym:"",atn:"",txt:"",mss:"",clr:""}}));for(let o=2;o<=3;o+=1){let a=this.periodicTableData[o];e.push(t("pt-element",{props:{sym:a.symbol,atn:""+a.number,txt:a.name,mss:""+a.atomic_mass,clr:S(a)}}))}for(let o=10;o<=11;o+=1){let a=this.periodicTableData[o];e.push(t("pt-element",{props:{sym:a.symbol,atn:""+a.number,txt:a.name,mss:""+a.atomic_mass,clr:S(a)}}))}return t("div",{class:"pt-leftTop"},e)},props:{periodicTableData:{type:Array,required:!0}}};var O={name:"PtLeftTop",props:{periodicTableData:{type:Array,required:!0}},data(){return{configPtStage:{width:500,height:500,x:0,y:0}}},components:{"pt-lt":D}},M=O,P=(a("1757"),Object(b["a"])(M,x,T,!1,null,"5e443a0c",null)),k=P.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"elements"},[a("div",[a("v-stage",{attrs:{config:t.configStage}},[a("v-layer",{on:{mousemove:t.handleMouseMove,mouseout:t.handleMouseOut}},[a("v-rect",{attrs:{config:t.configRect}}),a("v-text",{attrs:{config:t.configSymbol}}),a("v-text",{attrs:{config:t.configNumber}}),a("v-text",{attrs:{config:t.configName}}),a("v-text",{attrs:{config:t.configMass}})],1)],1)],1)])},C=[],E={name:"Element",props:{sym:String,atn:String,txt:String,mss:String,clr:String,zoomOnHover:Boolean,config:Object},data(){let t=this.clr,e=this.sym,a=this.atn,o=this.txt,n=this.mss;return this.config&&(t=this.config.clr,e=this.config.sym,a=this.config.atn,o=this.config.txt,n=this.config.mss),{configStage:{width:150,height:150,x:5,y:0,scaleX:.5,scaleY:.5,offsetX:0,offsetY:-7},configRect:{x:0,y:0,width:110,height:140,stroke:"#000033",strokeWidth:1,fill:t,cornerRadius:15,shadowEnabled:"true",shadowColor:"#001f4d",shadowOffsetX:7,shadowOffsetY:7,shadowBlur:3},configSymbol:{text:e,fontSize:50,width:110,align:"center",fontStyle:"bold",fontFamily:"'Quicksand'",y:37},configNumber:{text:a,fontSize:24,width:110,align:"left",y:9,fontFamily:"Quicksand",x:10},configName:{text:o,fontSize:18,width:110,align:"center",fontFamily:"Quicksand",y:87},configMass:{text:n,width:110,align:"center",y:115,fontFamily:"Quicksand",fontSize:16}}},methods:{handleMouseMove(t){this.inZoomMode||(this.configStage.scaleX=.6,this.configStage.scaleY=.6,this.configStage.offsetX=5,this.configStage.offsetY=-2,this.configStage.width=150*this.configStage.scaleX,this.configStage.height=150*this.configStage.scaleY,this.$el.style.zIndex=1,this.inZoomMode=!0)},handleMouseOut(t){this.configStage.scaleX=.5,this.configStage.scaleY=.5,this.configStage.offsetX=0,this.configStage.offsetY=-7,this.configStage.width=150*this.configStage.scaleX,this.configStage.height=150*this.configStage.scaleY,this.$el.style.zIndex=100,this.inZoomMode=!1}}},B=E,N=(a("5f53"),Object(b["a"])(B,j,C,!1,null,"4d882eed",null)),A=N.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("pt-element",{attrs:{config:t.ecfg}})],1)},R=[];let X={"alkali metal":"#ff6666","alkaline earth metal":"#ffa64d","post-transition metal":"#b5ff33",metalloid:"#33cc33","polyatomic nonmetal":"#33ccff","diatomic nonmetal":"#3399ff","noble gas":"#c266ff",lanthanide:"#ffb3ff",actinide:"#ff66cc"},Y={H:"polyatomic nonmetal",Po:"metalloid",Lv:"post-transition metal",Nh:"post-transition metal",Mc:"post-transition metal",At:"diatomic nonmetal",Ts:"diatomic nonmetal",Og:"noble gas"};function q(t){let e=Y[t.symbol]||t.category;return X[e]||"#ffff66"}var z={name:"PtAutoElement",props:{atn:Number,clr:String,periodicTableData:{type:Array,required:!0}},data(){let t=this.periodicTableData[""+this.atn];return console.log("--- REVAL for dt="+this.atn),{ecfg:{sym:t.symbol,atn:""+t.number,txt:t.name,mss:""+t.atomic_mass,clr:this.clr||q(t)}}},methods:{handleChange(){console.log("--handleChange.")},onEnd(){console.log("--onEnd.")},onChange(){console.log("--onChanged.")},log:function(t){window.console.log("----ptae--",t)}}},J=z,H=Object(b["a"])(J,$,R,!1,null,"2b437e8b",null),F=H.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("pt-rt",{attrs:{periodicTableData:t.periodicTableData}})],1)},L=[];let Q={"alkali metal":"#ff6666","alkaline earth metal":"#ffa64d","post-transition metal":"#b5ff33",metalloid:"#33cc33","polyatomic nonmetal":"#33ccff","diatomic nonmetal":"#3399ff","noble gas":"#c266ff"},G={H:"polyatomic nonmetal"};function Z(t){let e=G[t.symbol]||t.category;return Q[e]||"#ffff66"}let W={render:function(t){let e=[];for(let o=0;o<5;o++)e.push(t("pt-element",{style:{visibility:"hidden"},props:{sym:"",atn:"",txt:"",mss:"",clr:""}}));let a=this.periodicTableData[1];e.push(t("pt-element",{props:{sym:a.symbol,atn:""+a.number,txt:a.name,mss:""+a.atomic_mass,clr:Z(a)}}));for(let o=4;o<=9;o+=1){let a=this.periodicTableData[o];e.push(t("pt-element",{props:{sym:a.symbol,atn:""+a.number,txt:a.name,mss:""+a.atomic_mass,clr:Z(a)}}))}for(let o=12;o<=17;o+=1){let a=this.periodicTableData[o];e.push(t("pt-element",{props:{sym:a.symbol,atn:""+a.number,txt:a.name,mss:""+a.atomic_mass,clr:Z(a)}}))}return t("div",{class:"pt-rightTop"},e)},props:{periodicTableData:{type:Array,required:!0}}};var V={name:"PtRightTop",props:{periodicTableData:{type:Array,required:!0}},components:{"pt-rt":W},data(){return{configPtStage:{width:500,height:500,x:0,y:0}}}},K=V,U=(a("96ef"),Object(b["a"])(K,I,L,!1,null,"a6674748",null)),tt=U.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-bottom-grid"},[a("div"),a("pt-bottom",{attrs:{periodicTableData:t.periodicTableData}})],1)},at=[];let ot={"alkali metal":"#ff6666","alkaline earth metal":"#ffa64d","post-transition metal":"#b5ff33",metalloid:"#33cc33","polyatomic nonmetal":"#33ccff","diatomic nonmetal":"#3399ff","noble gas":"#c266ff",lanthanide:"#ffb3ff",actinide:"#ff66cc"},nt={H:"polyatomic nonmetal"};function it(t){let e=nt[t.symbol]||t.category;return ot[e]||"#ffff66"}let lt={render:function(t){let e=[];for(let a=56;a<=70;a+=1){let o=this.periodicTableData[a];e.push(t("pt-element",{props:{sym:o.symbol,atn:""+o.number,txt:o.name,mss:""+o.atomic_mass,clr:it(o)}}))}for(let a=88;a<=102;a+=1){let o=this.periodicTableData[a];e.push(t("pt-element",{props:{sym:o.symbol,atn:""+o.number,txt:o.name,mss:""+o.atomic_mass,clr:it(o)}}))}return t("div",{class:"pt-bottom"},e)},props:{periodicTableData:{type:Array,required:!0}}};var rt={name:"PtBottom",props:{periodicTableData:{type:Array,required:!0}},components:{"pt-bottom":lt},data(){return{configPtStage:{width:500,height:500,x:0,y:0}}}},st=rt,ct=(a("e480"),Object(b["a"])(st,et,at,!1,null,"17a20496",null)),ft=ct.exports,mt=a("bc3a"),pt=a.n(mt);o["default"].component("pt-element",A),o["default"].component("pt-auto-element",F);var dt={name:"PtMain",props:{periodicTableData:Object},components:{"pt-middle":v,"pt-left-top":k,"pt-right-top":tt,"pt-bottom":ft},mounted(){pt.a.get("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json").then(t=>this.periodicTableData=t)}},ut=dt,ht=(a("0e5c"),Object(b["a"])(ut,r,s,!1,null,null,null)),gt=ht.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"PtGameBoxes"},[a("div",{staticClass:"pt-game-box-elements-c"},[a("draggable",{staticClass:"row wrap pt-game-box-elements pt-game-box",model:{value:t.gameBoard,callback:function(e){t.gameBoard=e},expression:"gameBoard"}},t._l(t.gameBoard,(function(e){return a("div",{key:e.idx,attrs:{name:e.title}},[a("draggable",{staticClass:"element-groups",attrs:{list:e.elems,group:{name:"boxItm.title"},id:e.title,title:e.title,"component-data":t.getElementData()},on:{change:t.log}},t._l(e.elems,(function(e){return a("div",{key:e,attrs:{name:e},on:{change:t.log}},[a("pt-auto-element",{key:e,attrs:{atn:e,id:e,clr:"white",periodicTableData:t.periodicTableData.data.elements}})],1)})),0)],1)})),0)],1),a("div",{staticClass:"pt-game-box-container"},[a("div",{staticClass:"pt-game-box-empty pt-game-box"},[t._l(t.gameBoard,(function(t){return a("pt-box",{key:t.idx,attrs:{name:t.title,clr:t.clr,width:t.bwidth,height:t.bheight}})})),t._m(0)],2)]),a("div",[a("h1",{staticClass:"score"},[t._v("SCORE: "+t._s(t.score))])])])])},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"blurb"},[t._v(" How to play: "),a("li",[t._v(" drag elements to their correct catagory ")]),a("li",[t._v(" for correct answers, the score goes up 10 points ")]),a("li",[t._v(" if not, then score goes down ten points ")]),a("li",[t._v(" if you complete the game, just reload to play again ")])])}],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-game-box-main"},[a("v-stage",{staticClass:"pt-game-box-stage",attrs:{config:t.configMetalStage}},[a("v-layer",[a("v-text",{attrs:{config:t.metalText}}),a("v-rect",{attrs:{config:t.metalRect}}),t._v("ƒ ")],1)],1)],1)},xt=[],Tt={name:"PtBox",props:{name:String,clr:String,width:Number,height:Number},data(){return{configMetalStage:{width:this.width+20,height:this.height+70},metalText:{text:this.name,fontSize:40,align:"center",width:200,fontFamily:"Quicksand",y:5,x:5},metalRect:{x:5,y:50,width:this.width,height:this.height,fill:this.clr,stroke:"#000033",strokeWidth:1,cornerRadius:15,shadowEnabled:"true",shadowColor:"#001f4d",shadowOffsetX:7,shadowOffsetY:7,shadowBlur:3}}}},wt=Tt,_t=(a("3f80"),Object(b["a"])(wt,vt,xt,!1,null,"69804b82",null)),St=_t.exports,Dt=a("310e"),Ot=a.n(Dt);function Mt(t){let e=parseInt(t,10)+1,a=[1,2,6,7,8,9,10,15,16,17,18,34,35,36,53,54,85,86],o=[5,14,32,33,51,52,84];return-1!==a.indexOf(e)?"Nonmetals":-1!==o.indexOf(e)?"Metalloids":"Metals"}var Pt={name:"PtGame",components:{"pt-box":St,draggable:Ot.a},data(){return{score:0,gameBoard:[{index:1,title:"Metals",clr:"#99ddff",bwidth:210,bheight:280,elems:[]},{index:2,title:"Metalloids",clr:"#ffffb3",bwidth:210,bheight:280,elems:[]},{index:3,title:"Nonmetals",clr:"#ff9aa2",bwidth:210,bheight:280,elems:[]},{index:4,title:"Selection",bwidth:350,bheight:180,clr:"#99ff99",elems:[]}]}},props:{periodicTableData:Object},methods:{getElementData(){return{on:{change:this.log,input:this.log,move:this.log}}},log:function(t){if("move"===t.type){let e=t.dragged.firstChild.id;console.log(" Detected Move for ",e," Type[",Mt(e),"] from = ",t.from.id,"  To = "+t.to.id)}let e=0;for(let a=0;a<3;++a)for(let t in this.gameBoard[a].elems){let o=this.gameBoard[a].elems[t];Mt(o)==this.gameBoard[a].title?e+=10:e-=10}this.score=e}},mounted(){let t=[];for(let e=0;e<=9;e++){t.push(Math.floor(117*Math.random()))}this.gameBoard[3].elems=t,pt.a.get("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json").then(t=>this.periodicTableData=t)}},kt=Pt,jt=(a("f5a7"),Object(b["a"])(kt,bt,yt,!1,null,"756190fa",null)),Ct=jt.exports;const Et=new l["a"]({routes:[{path:"/ptGame",component:Ct},{path:"/ptMain",component:gt},{path:"/",redirect:"/ptMain"}]});Et.replace();var Bt={name:"App",router:Et,props:{periodicTableData:Object},mounted(){pt.a.get("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json").then(t=>this.periodicTableData=t)}},Nt=Bt,At=(a("034f"),Object(b["a"])(Nt,n,i,!1,null,null,null)),$t=At.exports,Rt=a("7591"),Xt=a.n(Rt);o["default"].config.productionTip=!1,o["default"].use(Xt.a),o["default"].use(l["a"]),new o["default"]({render:t=>t($t)}).$mount("#app")},"5f53":function(t,e,a){"use strict";var o=a("e1b1"),n=a.n(o);n.a},"69dd":function(t,e,a){"use strict";var o=a("6f4f"),n=a.n(o);n.a},"6f4f":function(t,e,a){},7309:function(t,e,a){},"856b":function(t,e,a){},"85ec":function(t,e,a){},"96ef":function(t,e,a){"use strict";var o=a("088c"),n=a.n(o);n.a},ac62:function(t,e,a){},e1b1:function(t,e,a){},e480:function(t,e,a){"use strict";var o=a("fe52"),n=a.n(o);n.a},ed54:function(t,e,a){},f5a7:function(t,e,a){"use strict";var o=a("ac62"),n=a.n(o);n.a},fe52:function(t,e,a){}});
//# sourceMappingURL=app.c84d9bbe.js.map