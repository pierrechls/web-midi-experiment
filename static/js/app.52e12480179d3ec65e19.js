webpackJsonp([2,0],{0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n(30),o=i(a),r=n(96),s=i(r);n(94),n(50);var u=n(51),c=i(u);new o.default({el:"#app",store:c.default,render:function(t){return t(s.default)}})},16:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getNegatif=function(t){return t.negatif},e.getMidiState=function(t){return t.midi.connected},e.getMidiName=function(t){return t.midi.name},e.getLastPad=function(t){return t.lastPad},e.getLastPitch=function(t){return t.lastPitch}},31:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=!0,i=!1,o=void 0;try{for(var s,c=(0,d.default)((0,u.default)(e));!(n=(s=c.next()).done);n=!0){var l=s.value;t[l]&&"object"===(0,r.default)(e[l])?a(t[l],e[l]):t[l]=e[l]}}catch(t){i=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(i)throw o}}}var o=n(56),r=i(o),s=n(53),u=i(s),c=n(52),d=i(c),l=[];try{l.push(n(95))}catch(t){console.warn("Unable to load settings",t)}var f={},p=!0,v=!1,h=void 0;try{for(var m,_=(0,d.default)(l);!(p=(m=_.next()).done);p=!0){var w=m.value;a(f,w)}}catch(t){v=!0,h=t}finally{try{!p&&_.return&&_.return()}finally{if(v)throw h}}"development"==={NODE_ENV:"production"}.NODE_ENV&&console.log(f),t.exports=f},32:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setNegatif=function(t){var e=t.dispatch;t.state;e("SET_NEGATIF_VALUE")},e.setMidiState=function(t,e){var n=t.dispatch;t.state;n("SET_MIDI_STATE",e)},e.setMidiName=function(t,e){var n=t.dispatch;t.state;n("SET_MIDI_NAME",e)},e.setLastPad=function(t,e,n){var i=t.dispatch;t.state;i("SET_LAST_PAD",e,n)},e.setLastPitch=function(t,e,n){var i=t.dispatch;t.state;i("SET_LAST_PITCH",e,n)}},44:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(97),o=i(a),r=n(99),s=i(r),u=n(98),c=i(u),d=n(16);e.default={name:"App",components:{MenuApp:o.default,Renderer:s.default,MidiController:c.default},vuex:{getters:{negatif:d.getNegatif}},route:{data:function(t){}}}},45:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Menu"}},46:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(105),o=(i(a),n(48)),r=i(o),s=n(16),u=n(32);e.default={name:"MidiController",vuex:{getters:{isConnected:s.getMidiState,name:s.getMidiName},actions:{setMidiState:u.setMidiState,setMidiName:u.setMidiName,setLastPad:u.setLastPad,setLastPitch:u.setLastPitch}},mounted:function(){var t=this;console.clear(),r.default.onStateChange(function(e){"connected"===e.port.state?(t.setMidiState(!0),t.setMidiName(e.port.name)):(t.setMidiState(!1),t.setMidiName(null))}),r.default.onPad(function(e,n){t.setLastPad(e,n)}),r.default.onPitch(function(e,n){t.setLastPitch(e,n)})}}},47:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(16),o=n(32),r=n(31),s=i(r),u=null,c=null,d=null,l=null,f=null,p=null;e.default={name:"Renderer",data:function(){return{isInit:!1,count:0,background:{current:0,list:[16777215,3758162]},colors:{current:0,list:[3758162,16777215]},windowHalfX:window.innerWidth/2,windowHalfY:window.innerHeight/2,separation:s.default.wavesParams.separation.default,amountX:50,amountY:50,wavesParams:{position:s.default.wavesParams.position.default,scale:4}}},vuex:{getters:{midiState:a.getMidiState,midiIsConnected:a.getMidiState},actions:{setNegatif:o.setNegatif}},methods:{init:function(){u=document.createElement("div"),document.querySelector(".renderer-container").appendChild(u),c=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e4),c.position.z=1e3,c.position.x=-40,c.position.y=150,d=new THREE.Scene,d.background=new THREE.Color(16777215),f=new Array;for(var t=2*Math.PI,e=new THREE.SpriteCanvasMaterial({color:this.colors.list[this.colors.current],program:function(e){e.beginPath(),e.arc(0,0,.5,0,t,!0),e.fill()}}),n=0,i=0;i<this.amountX;i++)for(var a=0;a<this.amountY;a++)p=f[n++]=new THREE.Sprite(e),p.position.x=i*this.separation-this.amountX*this.separation/2,p.position.z=a*this.separation-this.amountY*this.separation/2,d.add(p);l=new THREE.CanvasRenderer,l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),u.appendChild(l.domElement),window.addEventListener("resize",this.onWindowResize,!1)},onWindowResize:function(){this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2,c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)},animate:function(){requestAnimationFrame(this.animate),this.render()},render:function(){c.lookAt(d.position);for(var t=0,e=0;e<this.amountX;e++)for(var n=0;n<this.amountY;n++)p=f[t++],p.position.y=Math.sin(.3*(e+this.count))*this.wavesParams.position+Math.sin(.5*(n+this.count))*this.wavesParams.position,p.scale.x=p.scale.y=4*(Math.sin(.3*(e+this.count))+1)+(Math.sin(.5*(n+this.count))+1)*this.wavesParams.scale;l.render(d,c),this.count+=.1,this.midiState?this.isInit||this.playWaves():this.stopWaves()},updateColor:function(){this.colors.current<this.colors.list.length-1?this.colors.current++:this.colors.current=0,this.background.current<this.background.list.length-1?this.background.current++:this.background.current=0;for(var t=new THREE.SpriteCanvasMaterial({color:this.colors.list[this.colors.current],program:function(t){t.beginPath(),t.arc(0,0,.5,0,2*Math.PI,!0),t.fill()}}),e=0,n=0;n<this.amountX;n++)for(var i=0;i<this.amountY;i++)p=f[e++],p.material=t;d.background=new THREE.Color(this.background.list[this.background.current])},playWaves:function(){this.wavesParams.position<s.default.pithValues.higher/2?this.wavesParams.position++:this.isInit=!0},stopWaves:function(){this.wavesParams.position>0?this.wavesParams.position--:this.isInit=!1}},mounted:function(){var t=this;this.init(),this.animate(),this.$store.subscribe(function(e,n){"SET_LAST_PAD"===e.type?s.default.wavesParams.color.padNumber===n.lastPad.number&&(t.updateColor(),t.setNegatif()):"SET_LAST_PITCH"===e.type&&s.default.wavesParams.position.pitchNumber===n.lastPitch.number&&(t.wavesParams.position=n.lastPitch.value)})}}},48:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n(31),o=i(a),r=function(){function t(t,e){"function"==typeof c&&c(t,e)}function e(t,e){"function"==typeof d&&d(t,e)}function n(n){var i=n.data,a=240&i[0],r=(i[1],i[2]);if(a===o.default.type.pad){var s=i[1],r=i[2];t(s,r)}if(a===o.default.type.pitch){var u=i[1],c=i[2];e(u,c)}}function i(t){u=t,u.onstatechange=function(t){l(t)};for(var e=u.inputs.values(),i=e.next();i&&!i.done;i=e.next())i.value.onmidimessage=n}function a(t){c=t}function r(t){d=t}function s(t){l=t}if(!navigator.requestMIDIAccess)throw"No MIDI support in browser";var u,c,d,l;return navigator.requestMIDIAccess({}).then(i,function(t){throw console.log("Fail",t),"Can not connect to MIDI"}),{onPad:a,onPitch:r,onStateChange:s}}();t.exports=r},49:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n(30),o=i(a);o.default.component("default",{css:!1,template:'\t    <transition\t      name="default"\t      mode="out-in"\t      v-on:before-enter="beforeEnter"\t      v-on:enter="enter"\t      v-on:after-enter="afterEnter"\t      v-on:enter-cancelled="enterCancelled"\t      v-on:before-leave="beforeLeave"\t      v-on:leave="leave"\t      v-on:after-leave="afterLeave"\t      v-on:leave-cancelled="leaveCancelled"\t    >\t      <slot></slot>\t    </transition>\t  ',methods:{beforeEnter:function(t){},enter:function(t,e){TweenMax.fromTo(t,.5,{opacity:0},{opacity:1,onComplete:function(){e()}}).delay(.2)},afterEnter:function(t){},enterCancelled:function(t){},beforeLeave:function(t){},leave:function(t,e){TweenMax.fromTo(t,.2,{opacity:1},{opacity:0,onComplete:function(){e()}})},afterLeave:function(t){},leaveCancelled:function(t){}}})},50:function(t,e,n){"use strict";n(49)},51:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(30),o=i(a),r=n(104),s=i(r);o.default.use(s.default);var u={negatif:!1,midi:{connected:!1,name:null},lastPad:{number:null,velocity:null},lastPitch:{number:null,value:null}},c={SET_NEGATIF_VALUE:function(t){t.negatif=!t.negatif},SET_MIDI_STATE:function(t,e){t.midi.connected=e},SET_MIDI_NAME:function(t,e){t.midi.name=e},SET_LAST_PAD:function(t,e,n){t.lastPad.number=e,t.lastPad.velocity=n},SET_LAST_PITCH:function(t,e,n){t.lastPitch.number=e,t.lastPitch.value=n}};e.default=new s.default.Store({state:u,mutations:c})},90:function(t,e){},91:function(t,e){},92:function(t,e){},93:function(t,e){},95:function(t,e){t.exports={type:{pad:144,pitch:176},pithValues:{higher:127,lower:0},wavesParams:{separation:{default:100},position:{default:0,pitchNumber:10},color:{padNumber:44}}}},96:function(t,e,n){var i,a;n(91),i=n(44);var o=n(101);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},97:function(t,e,n){var i,a;n(90),i=n(45);var o=n(100);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-345aadcf",t.exports=i},98:function(t,e,n){var i,a;n(93),i=n(46);var o=n(103);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-aec5ade6",t.exports=i},99:function(t,e,n){var i,a;n(92),i=n(47);var o=n(102);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-8c53c99a",t.exports=i},100:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menu"}},[n("h1",[t._v("Web MIDI experiment")])])}]}},101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.negatif?"negatif":"",attrs:{id:"app"}},[n("menu-app"),t._v(" "),n("midi-controller"),t._v(" "),n("renderer")],1)},staticRenderFns:[]}},102:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"renderer-container"})},staticRenderFns:[]}},103:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"midi-controller-header"}},[n("div",{staticClass:"state"},[t.isConnected?n("p",[t._v(t._s(t.name))]):n("p",[t._v("Please, connect your MIDI device")])])])},staticRenderFns:[]}}});
//# sourceMappingURL=app.52e12480179d3ec65e19.js.map