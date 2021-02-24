(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"04d2":function(t,e,o){},"1f91":function(t,e,o){"use strict";o("e8a1")},"206d":function(t,e,o){t.exports=o.p+"img/fountain_pen.993d492e.svg"},"3dfd":function(t,e,o){"use strict";o("9af9")},"42de":function(t,e,o){"use strict";o("98af")},5674:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),o("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),o("v-spacer"),o("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[o("span",{staticClass:"mr-2"},[t._v("Latest Release")]),o("v-icon",[t._v("mdi-open-in-new")])],1)],1),o("v-main",[o("Game")],1)],1)},s=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"game",attrs:{fluid:""}},[o("v-row",[o("v-spacer"),o("v-col",{attrs:{cols:"10",offset:"0",justify:"center",align:"center"}},[t.connected?t._e():o("Login"),t.connected&&"LOBBY"===t.state?o("Lobby"):t._e(),t.connected&&"ACTIVE"===t.state?o("ActiveGame"):t._e()],1),o("v-spacer")],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"game",attrs:{fluid:""}},[o("v-row",[o("v-spacer"),o("v-col",{attrs:{cols:"5",offset:"0",justify:"left",align:"left"}},[o("v-row",{staticClass:"text-h5"},[t._v("Room Code: "+t._s(t.roomCode.toUpperCase()))]),o("v-row",{staticClass:"text-h5"},[o("div",{staticClass:"text-h7"},[t._v(" Drawing Time Limit "+t._s(t.drawingTimeLimitComputed)+" : ")]),o("v-slider",{attrs:{disabled:t.uuid!==t.host,ticks:"","thumb-label":"",step:"1",min:"15",max:"60"},on:{change:t.updateTimeLimit},model:{value:t.drawingTimeLimit,callback:function(e){t.drawingTimeLimit=e},expression:"drawingTimeLimit"}})],1),o("v-row",{staticClass:"text-h5"},[o("v-btn",{attrs:{disabled:t.uuid!==t.host||t.playerList.length<2},on:{click:t.start}},[t._v("Start Game")])],1),o("v-row",{staticClass:"text-h5 margin-top-50"},[o("div",{staticClass:"text-h6"},[o("ul",[o("li",[t._v("There is a conartist among us.")]),o("li",[t._v("We must draw the secret word to confirm who is real and who isn't.")]),o("li",[t._v("Use the area below to add your own topics and words for each topic.")])])])]),o("v-row",[o("v-checkbox",{attrs:{label:"Use only custom words in game"},model:{value:t.customWordsOnly,callback:function(e){t.customWordsOnly=e},expression:"customWordsOnly"}})],1),o("v-row",{staticClass:"text-h5 margin-top-50"},[o("div",[t._v("Topic / Comma Separated Words")])]),t._l(t.customWords,(function(e,n){return o("v-row",{key:n},[o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{disabled:t.uuid!==t.host,placeholder:"Food",solo:""},model:{value:e.topic,callback:function(o){t.$set(e,"topic",o)},expression:"item.topic"}})],1),o("v-col",{attrs:{cols:"8"}},[o("v-text-field",{attrs:{disabled:t.uuid!==t.host,placeholder:"Ramen, Sushi, Yogurt",solo:""},model:{value:e.words,callback:function(o){t.$set(e,"words",o)},expression:"item.words"}})],1)],1)})),o("v-row",[o("v-btn",{attrs:{disabled:t.uuid!==t.host},on:{click:t.addRow}},[t._v("Add Row")])],1)],2),o("v-col",{attrs:{cols:"5",offset:"0",justify:"right",align:"right"}},[o("v-row",{attrs:{justify:"center",align:"center"}},[o("CostumeSelector")],1),o("v-row",[o("Chat")],1)],1),o("v-col",{attrs:{cols:"2",offset:"0",justify:"right",align:"right"}},[o("v-list",{attrs:{disabled:""}},[o("v-subheader",[t._v("Players in Lobby")]),o("v-list-item-group",t._l(t.playerList,(function(e,n,r){return o("v-list-item",{key:r},[t._v(" "+t._s(n+1)+". "+t._s(e.name)+" ")])})),1)],1),t._v(" Last Round: "),o("ScoreBoard")],1),o("v-spacer")],1)],1)},u=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"game",attrs:{fluid:""}},[o("v-row",[o("v-spacer"),o("v-col",{attrs:{cols:"12",md:"12",offset:"0",justify:"left",align:"left"}},[o("v-container",{ref:"chatBox",staticClass:"chatBox"},t._l(t.chatHistory,(function(e){return o("v-row",{key:e.message},[t._v(" "+t._s(t.isActive?t.playerMap[e.uuid].nickname:t.playerMap[e.uuid].name)+" "+t._s(": "+e.msg)+" ")])})),1),o("v-text-field",{attrs:{solo:"",label:"Type to chat",counter:240},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendChat(e)}},model:{value:t.chatMsg,callback:function(e){t.chatMsg=e},expression:"chatMsg"}})],1),o("v-spacer")],1)],1)},d=[],p="SET_UUID",m="CONNECT",f="JOIN",v="SEND_CHAT",h="UPDATE_TIME_LIMIT",g="UPDATE_CUSTOM_WORD",y="MOUSE_MOVE",C="START",w="VOTE",b="SET_CANVAS",_="MOUSE_DOWN",O="MOUSE_UP",$="FINISH_TURN",x="UPDATE_GUESS",T="SET_PEN",S="ADJUST_PEN",k={name:"Chat",props:{msg:String},data:function(){return{uuidFake:"fuck",fakePlayers:["Ricky","Matt","Trent"],chatMsg:""}},methods:{sendChat:function(){var t=this.chatMsg;this.$store.commit(v,{chatMsg:t}),this.chatMsg=""},scrollToEnd:function(){this.$refs.chatBox.scrollTop=this.$refs.chatBox.lastElementChild.offsetTop}},computed:{chatHistory:function(){return this.$store.state.chatHistory},roomCode:function(){return this.$store.state.roomCode},playerMap:function(){return this.$store.state.playerMap},isActive:function(){return"ACTIVE"===this.$store.state.state}},updated:function(){var t=this;this.$nextTick((function(){return t.scrollToEnd()}))}},E=k,V=(o("ce0e"),o("2877")),j=o("6544"),L=o.n(j),M=o("62ad"),A=o("a523"),R=o("0fd9"),B=o("2fa4"),P=o("8654"),N=Object(V["a"])(E,l,d,!1,null,"5fce3c6c",null),W=N.exports;L()(N,{VCol:M["a"],VContainer:A["a"],VRow:R["a"],VSpacer:B["a"],VTextField:P["a"]});var Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"scoreboard"},t._l(t.scoreSorted,(function(e,n){return o("v-card",{key:n,staticStyle:{position:"relative"},attrs:{color:t.getColor(n),elevate:"2",width:"100%"}},[o("v-row",{attrs:{"no-gutters":""}},[t._v(" "+t._s(n+1)+". "+t._s(e.name)+" Score: "+t._s(e.score)+" ")])],1)})),1)},D=[],X=(o("4de4"),{name:"ScoreBoard",props:{msg:String},data:function(){return{guess:""}},computed:{scoreSorted:function(){return this.$store.getters.getPlayersByScore.filter((function(t){return t.score>0}))}},methods:{getColor:function(t){return 0===t?"#e2c226":1===t?"#9c9a9a":2===t?"#7b5707":"white"}},components:{}}),I=X,U=(o("6a81"),o("b0af")),J=Object(V["a"])(I,Y,D,!1,null,"491e4e1a",null),H=J.exports;L()(J,{VCard:U["a"],VRow:R["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"game",attrs:{fluid:""}},[n("v-row",[n("v-btn",[n("img",{attrs:{width:"30px",src:o("206d")}})])],1)],1)},G=[],z={name:"CostumeSelector",props:{},data:function(){return{uuidFake:"fuck",fakePlayers:["Ricky","Matt","Trent"],chatMsg:""}},methods:{scrollToEnd:function(){this.$refs.chatBox.scrollTop=this.$refs.chatBox.lastElementChild.offsetTop}},computed:{chatHistory:function(){return this.$store.state.markers},roomCode:function(){return this.$store.state.roomCode},playerMap:function(){return this.$store.state.playerMap},isActive:function(){return"ACTIVE"===this.$store.state.state}}},Z=z,q=(o("42de"),o("8336")),K=Object(V["a"])(Z,F,G,!1,null,"33d72ef9",null),Q=K.exports;L()(K,{VBtn:q["a"],VContainer:A["a"],VRow:R["a"]});var tt={name:"Lobby",props:{},components:{Chat:W,ScoreBoard:H,CostumeSelector:Q},data:function(){return{drawingTimeLimit:0,customWords:[{topic:"",words:""}],customWordsOnly:!1}},computed:{roomCode:function(){return this.$store.state.roomCode},drawingTimeLimitComputed:function(){return this.$store.state.turnLength},playerList:function(){return this.$store.state.playerList},host:function(){return this.$store.state.host},uuid:function(){return this.$store.state.uuid}},methods:{updateCustomWord:function(t){this.$store.commit(g,{index:t})},updateTimeLimit:function(){console.log("updateTimeLimit"),this.$store.commit(h,{drawingTimeLimit:this.drawingTimeLimit})},addRow:function(){console.log("addRow"),this.customWords.push({topic:"",words:""})},start:function(){this.$store.commit(g,{customWords:this.customWords}),this.$store.commit(C,{customWordsOnly:this.customWordsOnly})}}},et=tt,ot=(o("e719"),o("ac7c")),nt=o("8860"),rt=o("da13"),st=o("1baa"),at=o("ba0d"),it=o("e0c7"),ct=Object(V["a"])(et,c,u,!1,null,"684afebf",null),ut=ct.exports;L()(ct,{VBtn:q["a"],VCheckbox:ot["a"],VCol:M["a"],VContainer:A["a"],VList:nt["a"],VListItem:rt["a"],VListItemGroup:st["a"],VRow:R["a"],VSlider:at["a"],VSpacer:B["a"],VSubheader:it["a"],VTextField:P["a"]});var lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"login"},[o("v-form",{ref:"form"},[o("v-row",[o("v-spacer"),o("v-col",{attrs:{cols:"4",md:"4",offset:"0",justify:"center",align:"center"}},[o("v-text-field",{attrs:{solo:"",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),o("v-spacer")],1),o("v-row",[o("v-spacer"),o("v-col",{attrs:{cols:"4",md:"4",offset:"0",justify:"center",align:"center"}},[o("v-text-field",{attrs:{solo:"",label:"Room Code",counter:6},model:{value:t.roomCode,callback:function(e){t.roomCode=e},expression:"roomCode"}})],1),o("v-spacer")],1),o("v-row",[o("v-spacer"),o("v-col",{attrs:{cols:"12",md:"8",offset:"0",justify:"center",align:"center"}},[o("v-btn",{attrs:{disabled:6!==t.roomCode.length||t.name.length<1},on:{click:t.join}},[t._v("Join Game")])],1),o("v-spacer")],1),o("v-row",[o("v-spacer"),o("v-col",{attrs:{cols:"12",md:"8",offset:"0",justify:"center",align:"center"}},[o("v-btn",{attrs:{disabled:t.name.length<1},on:{click:t.create}},[t._v("Create Game")])],1),o("v-spacer")],1)],1)],1)},dt=[],pt=(o("b0c0"),o("d3b7"),o("96cf"),o("1da1")),mt={name:"Login",props:{msg:String},data:function(){return{name:"",roomCode:""}},methods:{create:function(){var t=Object(pt["a"])(regeneratorRuntime.mark((function t(){var e,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={uuid:this.$store.state.uuid,playerName:this.name,roomCode:""},t.next=3,fetch("http://144.126.213.200:8080/messaging-stomp-websocket-2.3.2.RELEASE/app/createRoomCode",{method:"POST",mode:"cors",cache:"no-cache",headers:{Accept:"application/json","Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)}).then((function(t){return console.log(t),t.text()})).then((function(t){console.log("roomCode: "+t),o.roomCode=t}));case 3:console.log("BEFORE CONNECT: "+this.roomCode),this.$store.commit(m,{roomCode:this.roomCode}),console.log("after connect");case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),join:function(){var t=Object(pt["a"])(regeneratorRuntime.mark((function t(){var e,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={uuid:this.$store.state.uuid,playerName:this.name,roomCode:this.roomCode.toUpperCase()},t.next=3,fetch("http://144.126.213.200:8080/messaging-stomp-websocket-2.3.2.RELEASE/app/joinRoom",{method:"POST",mode:"cors",cache:"no-cache",headers:{Accept:"application/json","Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)}).then((function(t){return console.log(t),t.text()})).then((function(t){console.log("roomCode: "+t),console.log(f),o.roomCode=t,6===o.roomCode.length&&o.$store.commit(m,{roomCode:o.roomCode})}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},computed:{uuid:function(){return this.$store.state.uuid}}},ft=mt,vt=(o("806b"),o("4bd4")),ht=Object(V["a"])(ft,lt,dt,!1,null,"052fbb06",null),gt=ht.exports;L()(ht,{VBtn:q["a"],VCol:M["a"],VContainer:A["a"],VForm:vt["a"],VRow:R["a"],VSpacer:B["a"],VTextField:P["a"]});var yt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"game",attrs:{fluid:""}},[o("v-row",[o("v-col",{staticClass:"mr",attrs:{cols:"2",justify:"left",align:"left"}},[o("Vote")],1),o("v-col",{attrs:{cols:"6",justify:"center",align:"center"}},[o("v-row",{staticClass:"text-h5",attrs:{"no-gutters":""}},[o("v-spacer"),o("v-col",{attrs:{cols:"4"}},[t._v("Topic: "+t._s(t.topic)+" ")]),o("v-spacer")],1),o("v-row",{staticClass:"text-h5",attrs:{"no-gutters":""}},[o("v-spacer"),o("v-col",{attrs:{cols:"4"}},[t._v("Secret Word: "+t._s(t.secretWord)+" ")]),t.isConArtist?o("v-col",{attrs:{cols:"3"}},[o("v-text-field",{attrs:{solo:"",placeholder:"guess"},on:{change:t.updateGuess},model:{value:t.guess,callback:function(e){t.guess=e},expression:"guess"}})],1):t._e(),o("v-spacer")],1),o("v-row",{attrs:{width:"100%",height:"100%"}},[o("Canvas")],1)],1),o("v-col",{attrs:{cols:"3",justify:"right",align:"right"}},[o("v-row",[o("ScoreBoard")],1),o("v-row",[o("Chat")],1)],1)],1)],1)},Ct=[],wt=(o("ac1f"),o("466d"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"vote"},[o("v-row",{staticClass:"text-h6"},[t._v(" Current Artist: "+t._s(t.getCurrentArtist())+" ")]),o("v-row",{staticClass:"text-h6"},[t._v(" Early Vote Bonus: "+t._s(t.earlyVoteBonus)+" ")]),o("v-row",{staticClass:"text-body-1\nmargin-top-1"},[t._v(" You can click the players name to the left to vote for them as the conartist/fakeartist/imposter. ")]),o("v-row",{staticClass:"text-body-1\nmargin-top-1 mb"},[t._v(" When you vote early each turn you can gain potential points if you voted correctly. ")]),t._l(t.turnOrder,(function(e,n){return o("v-row",{key:n,attrs:{"no-gutters":""}},[o("v-card",{staticStyle:{position:"relative"},attrs:{color:t.isVotedFor(e),elevate:"2",width:"100%"},on:{click:function(o){return t.vote(e)}}},[o("v-col",{staticStyle:{height:"100%"},attrs:{cols:"12",align:"center",justify:"center"}},[t._v(" "+t._s(t.getPlayerOrderCard(e))+" ")])],1)],1)})),o("v-row",{staticClass:"text-body-1\nmt"},[t._v(" Blue/Purple means it is that players current turn.")]),o("v-row",{staticClass:"text-body-1\nmargin-top-1"},[t._v(" Purple/Red means you've voted for them.")]),o("v-row",{staticClass:"text-body-1\nmargin-top-1"},[t._v(" White you haven't voted for them and it's not their turn.")])],2)}),bt=[],_t={name:"Vote",props:{msg:String},data:function(){return{uuidFake:"fuck",fakePlayers:["Ricky","Matt","Trent"],chatMsg:""}},methods:{isVotedFor:function(t){return console.log(t),this.$store.state.activePlayer===t?this.$store.state.playerMap[this.$store.state.uuid].guess===t?"purple":"blue":this.$store.state.playerMap[this.$store.state.uuid].guess===t?"red":"white"},vote:function(t){console.log("voting"),this.$store.commit(w,{suspect:t})},getPlayerOrderCard:function(t){return t===this.$store.state.uuid?"".concat(this.$store.state.playerMap[t].nickname," (you)"):this.$store.state.playerMap[t].nickname},getCurrentArtist:function(){return this.$store.state.playerMap[this.$store.state.activePlayer].nickname}},computed:{currentTurn:function(){return this.$store.state.turn},turnOrder:function(){return this.$store.state.turnOrder},playerMap:function(){return this.$store.state.playerMap},earlyVoteBonus:function(){return this.$store.state.playerMap[this.$store.state.uuid].earlyVoteBonus}},updated:function(){var t=this;this.$nextTick((function(){return t.scrollToEnd()}))}},Ot=_t,$t=(o("73a9"),Object(V["a"])(Ot,wt,bt,!1,null,"614cf422",null)),xt=$t.exports;L()($t,{VCard:U["a"],VCol:M["a"],VContainer:A["a"],VRow:R["a"]});var Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"hundredAlmost"},[n("v-row",[n("v-col",[n("v-btn",{attrs:{color:"white"},on:{click:t.logRect}},[t._v(" Turn Timer: "+t._s(t.turnTimer)+" ")])],1),n("v-col",[n("v-btn",{class:t.isHidden,attrs:{color:"white"},on:{click:t.skip}},[t._v(" Finish Turn ")])],1)],1),n("v-row",{staticClass:"hundred"},[n("img",{staticStyle:{position:"relative"},attrs:{id:"pen",width:"30px",src:o("206d")}}),n("canvas",{attrs:{id:"canvas",width:"800px",height:"500px"},on:{mousedown:t.drawEnabled,mouseup:t.drawDisabled,mousemove:t.draw,touchmove:t.draw,touchstart:t.drawEnabled,touchend:t.drawDisabled}})])],1)},St=[],kt={name:"Canvas",props:{},data:function(){return{now:Date.now()}},methods:{logRect:function(){var t=document.getElementById("canvas"),e=t.getBoundingClientRect();console.log(e.top,e.right,e.bottom,e.left)},skip:function(){this.$store.getters.isActive&&this.$store.commit($)},draw:function(t){t&&t.preventDefault(),this.$store.getters.isActive&&this.$store.commit(y,{x:t.offsetX,y:t.offsetY,clientX:t.clientX,clientY:t.clientY-90})},drawEnabled:function(t){t&&t.preventDefault(),this.$store.getters.isActive&&this.$store.commit(_,{x:t.offsetX,y:t.offsetY,clientX:t.clientX,clientY:t.clientY})},drawDisabled:function(t){t&&t.preventDefault(),this.$store.getters.isActive&&this.$store.commit(O,{})}},computed:{isHidden:function(){return this.$store.getters.isActive?"":"hidden"},turnOrder:function(){return this.$store.state.turnOrder},turnTimer:function(){var t=new Date(this.$store.state.turnTimeEnd).getTime();return Math.round((t-this.now)/1e3)},playerMap:function(){return this.$store.state.playerMap}},mounted:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");this.$store.commit(b,{ctx:e});var o=document.getElementById("pen");o.style.position="absolute",this.$store.commit(T,{p:o})},created:function(){var t=this;setInterval((function(){t.now=Date.now();var e=document.getElementById("canvas");t.$store.commit(S,{rect:e.getBoundingClientRect()})}),1e3)}},Et=kt,Vt=(o("5ed6"),Object(V["a"])(Et,Tt,St,!1,null,"40ec65f4",null)),jt=Vt.exports;L()(Vt,{VBtn:q["a"],VCol:M["a"],VRow:R["a"]});var Lt={name:"Game",props:{msg:String},data:function(){return{guess:""}},computed:{uuid:function(){return this.$store.state.uuid},isConArtist:function(){return this.$store.state.uuid===this.$store.state.conartist},secretWord:function(){if(this.$store.state.conartist===this.$store.state.uuid){for(var t=this.$store.state.secretWord,e="",o=0;o<t.length;o++)t.charAt(o).match(/[a-zA-Z]/i)?e+="*":e+=t.charAt(o);return e}return this.$store.state.secretWord},topic:function(){return this.$store.state.topic}},methods:{updateGuess:function(){console.log(),this.$store.commit(x,{guess:this.guess})}},components:{Chat:W,Vote:xt,Canvas:jt,ScoreBoard:H}},Mt=Lt,At=(o("1f91"),Object(V["a"])(Mt,yt,Ct,!1,null,"5175e1f8",null)),Rt=At.exports;L()(At,{VCol:M["a"],VContainer:A["a"],VRow:R["a"],VSpacer:B["a"],VTextField:P["a"]});var Bt={name:"Game",props:{msg:String},computed:{connected:function(){return this.$store.state.connected},state:function(){return this.$store.state.state}},components:{Lobby:ut,Login:gt,ActiveGame:Rt}},Pt=Bt,Nt=(o("3dfd"),Object(V["a"])(Pt,a,i,!1,null,"1a4399b4",null)),Wt=Nt.exports;L()(Nt,{VCol:M["a"],VContainer:A["a"],VRow:R["a"],VSpacer:B["a"]});var Yt={name:"App",components:{Game:Wt},data:function(){return{}},methods:{},mounted:function(){this.$nextTick((function(){var t=this.$cookies.get("uuid");console.log("uuid: ".concat(t)),null==t&&(t=this.$uuid.v4(),this.$cookies.set("uuid",t)),console.log("uuid second: ".concat(t)),this.$store.commit(p,{uuid:t})}))}},Dt=Yt,Xt=(o("6167"),o("7496")),It=o("40dc"),Ut=o("132d"),Jt=o("adda"),Ht=o("f6c4"),Ft=Object(V["a"])(Dt,r,s,!1,null,"cde9b49a",null),Gt=Ft.exports;L()(Ft,{VApp:Xt["a"],VAppBar:It["a"],VBtn:q["a"],VIcon:Ut["a"],VImg:Jt["a"],VMain:Ht["a"],VSpacer:B["a"]});var zt,Zt=o("2b27"),qt=o.n(Zt),Kt=o("9612"),Qt=o("e6f8"),te=(o("99af"),o("ade3")),ee=o("cc7d"),oe=o.n(ee),ne=o("c6e1"),re=o.n(ne);n["a"].use(Qt["a"]);var se=new Qt["a"].Store({state:{roomCode:"",uuid:"",playerList:[],playerMap:{},turn:0,turnTimeEnd:0,turnLength:30,round:0,drawingHistory:[],chat:[],socket:null,stompClient:re.a,connected:!1,chatHistory:[],state:"",activePlayer:"",activeX:0,activeY:0,customWords:[{topic:"test",words:"hello, word"}],conartist:"",secretWord:"",guess:"",topic:"",turnOrder:[],draw:!1,canvas:null,pen:null,penBaseX:0,penBaseY:0,penHeight:0},getters:{getUUID:function(t){return t.uuid},getConnected:function(t){return t.connected},isActive:function(t){return t.uuid===t.activePlayer},getPlayersByScore:function(t){return t.playerList.sort((function(t,e){return e.score-t.score}))}},mutations:(zt={},Object(te["a"])(zt,S,(function(t,e){var o=e.rect;console.log("adjust"),console.log("top: ".concat(o.top,", left: ").concat(o.left)),t.penBaseX=o.left,t.penBaseY=o.top-3*t.penHeight})),Object(te["a"])(zt,x,(function(t,e){var o=e.guess;t.guess=o;var n={roomCode:t.roomCode,uuid:t.uuid,guess:o};t.stompClient.send("/app/updateGuess",JSON.stringify(n))})),Object(te["a"])(zt,T,(function(t,e){var o=e.p,n=o.getBoundingClientRect();console.log("pine"),console.log(n.bottom),console.log(n.top),t.penHeight=n.bottom-n.top,t.pen=o})),Object(te["a"])(zt,b,(function(t,e){var o=e.ctx;t.canvas=o})),Object(te["a"])(zt,$,(function(t){var e={roomCode:t.roomCode,uuid:t.uuid};t.stompClient.send("/app/finishTurn",JSON.stringify(e))})),Object(te["a"])(zt,_,(function(t,e){var o=e.x,n=e.y,r=e.clientX,s=e.clientY;t.draw=!0,t.activeX=o,t.activeY=n,t.clientX=r,t.clientY=s})),Object(te["a"])(zt,O,(function(t){t.draw=!1})),Object(te["a"])(zt,y,(function(t,e){var o=e.x,n=e.y,r=e.clientX,s=e.clientY,a={x:o,y:n,roomCode:t.roomCode,uuid:t.uuid,clientX:r,clientY:s};t.draw&&t.uuid===t.activePlayer?t.stompClient.send("/app/drawXY",JSON.stringify(a)):t.stompClient.send("/app/updateXY",JSON.stringify(a))})),Object(te["a"])(zt,w,(function(t,e){var o=e.suspect,n={uuid:t.uuid,roomCode:t.roomCode,suspect:o};t.stompClient.send("/app/vote",JSON.stringify(n),{})})),Object(te["a"])(zt,C,(function(t,e){var o=e.customWordsOnly;t.state="ACTIVE";var n={uuid:t.uuid,name:t.playerMap[t.uuid].name,roomCode:t.roomCode,customWords:t.customWords,customWordsOnly:o};t.stompClient.send("/app/start",JSON.stringify(n),{})})),Object(te["a"])(zt,p,(function(t,e){t.uuid=e.uuid})),Object(te["a"])(zt,g,(function(t,e){t.customWords=e.customWords})),Object(te["a"])(zt,h,(function(t,e){var o={uuid:t.uuid,updateTimeLimit:e.drawingTimeLimit,roomCode:t.roomCode};t.turnLength=e.drawingTimeLimit,t.stompClient.send("/app/updateDrawingTimeLimit",JSON.stringify(o))})),Object(te["a"])(zt,f,(function(t,e){if(t.stompClient&&t.connected){var o={uuid:t.uuid,name:e.msg,roomCode:t.roomCode};t.stompClient.send("/app/connect",JSON.stringify(o),{})}})),Object(te["a"])(zt,v,(function(t,e){var o=e.chatMsg;if(t.stompClient&&t.connected){var n={uuid:t.uuid,roomCode:t.roomCode,msg:o};t.stompClient.send("/app/sendChat",JSON.stringify(n),{})}})),Object(te["a"])(zt,m,(function(t,e){var o=e.roomCode;t.socket=new oe.a("http://144.126.213.200:8080/messaging-stomp-websocket-2.3.2.RELEASE/gs-guide-websocket"),t.stompClient=re.a.over(t.socket),t.stompClient.connect({},(function(e){t.connected=!0,console.log(e),console.log("connect: "+o),t.roomCode=o,t.stompClient.subscribe("/topic/".concat(o),(function(e){console.log("tick"),console.log(e),console.log(e.body),console.log(JSON.parse(e.body));var o=JSON.parse(e.body);if("CHAT_RESPONSE"==o[0])t.chatHistory.push(o[1]),console.log(t.chatHistory);else if("FULL_GAME_STATE"==o[0])t.chatHistory=o[1].chatHistory,t.playerMap=o[1].players,t.playerList=o[1].playerList,t.state=o[1].state,t.turnLength=o[1].turnLimit,t.host=o[1].host,t.secretWord=o[1].word,t.topic=o[1].topic,t.conartist=o[1].conartist,t.turnOrder=o[1].turnOrder,t.turn=o[1].turnNumber,t.activePlayer=o[1].activeDrawer,t.draw=!1,t.turnTimeEnd=new Date(Date.now()+1e3*o[1].turnLimit),0===o[1].turnNumber&&"ACTIVE"===t.state&&t.canvas.clearRect(0,0,800,500),console.log("full game state");else if("VOTE_RESPONSE"===o[0])t.playerMap=o[1];else if("UPDATE_XY_RESPONSE"===o[0])t.activeX=o[1],t.activeY=o[2],t.pen.style.left=t.activeX+t.penBaseX+"px",t.pen.style.top=t.activeY+t.penBaseY+"px";else if("DRAW_RESPONSE"===o[0]){var n=o[1],r=o[2],s=t.activeX,a=t.activeY,i=n,c=r,u=t.canvas;u.beginPath(),u.lineCap="round",u.strokeStyle=t.playerMap[t.activePlayer].color.toLowerCase(),u.lineWidth=3,u.moveTo(s,a),u.lineTo(i,c),u.stroke(),u.closePath(),t.activeX=n,t.activeY=r,t.pen.style.left=n+t.penBaseX+"px",t.pen.style.top=r+t.penBaseY+"px"}})),t.stompClient.send("/app/connect",JSON.stringify({uuid:t.uuid,roomCode:t.roomCode}),{})}),(function(e){console.log(e),t.connected=!1}))})),zt)}),ae=se,ie=o("f309");n["a"].use(ie["a"]);var ce=new ie["a"]({});n["a"].config.productionTip=!1,n["a"].use(qt.a),n["a"].use(Kt["a"]),n["a"].use(Qt["a"]),new n["a"]({render:function(t){return t(Gt)},vuetify:ce,store:ae}).$mount("#app")},"5ed6":function(t,e,o){"use strict";o("9674")},6167:function(t,e,o){"use strict";o("04d2")},"6a81":function(t,e,o){"use strict";o("5674")},"73a9":function(t,e,o){"use strict";o("9d26f")},"806b":function(t,e,o){"use strict";o("852f")},8481:function(t,e,o){},"852f":function(t,e,o){},9674:function(t,e,o){},"98af":function(t,e,o){},"9af9":function(t,e,o){},"9d26f":function(t,e,o){},ce0e:function(t,e,o){"use strict";o("df33")},df33:function(t,e,o){},e719:function(t,e,o){"use strict";o("8481")},e8a1:function(t,e,o){}});
//# sourceMappingURL=app.d5d212e8.js.map