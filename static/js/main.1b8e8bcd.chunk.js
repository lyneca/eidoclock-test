(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(n,e,t){n.exports=t(47)},25:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(12),r=t.n(i),c=(t(25),t(13)),l=t(14),s=t(18),u=t(15),f=t(19),d=t(2),h=t.n(d),m=t(16),v=t.n(m),g=0,w=6e4,p=0,Y=!1,M="https://api.allorigins.ml/get?callback=?&url="+encodeURIComponent("http://content.warframe.com/dynamic/worldState.php");function L(n){return 1==n.toString().length?"0"+n.toString():n}function k(){g=h.a.now().valueOf(),v.a.get(M).then(function(n){var e=n.data.SyndicateMissions.find(function(n){return"CetusSyndicate"===n.Tag}).Expiry.$date.$numberLong;p=parseInt(e),Y=!0})}function b(){return h.a.now()>=p&&(p+=9e6,k()),h.a.now().valueOf()-g>=w&&k(),p}function y(){var n=b()-h.a.now().valueOf();return n>3e6?n-3e6:n}function E(n){return Array.from({length:n},function(n,e){return e}).map(function(n){return h()((e=n,b()-3e6+9e6*e)).calendar();var e})}function D(){return Y?function(n){var e=n/1e3,t=e/60;return L(Math.floor(t/60))+":"+L(Math.floor(t%60))+":"+L(Math.floor(e%60))}(y()):(y(),"--:--:--")}h.a.updateLocale("en",{longDateFormat:{LT:"HH:mm A",LTS:"HH:mm:ss A",L:"MM/DD/YYYY",l:"M/D/YYYY",LL:"MMMM Do YYYY",ll:"MMM D YYYY",LLL:"MMMM Do YYYY LT",lll:"MMM D YYYY LT",LLLL:"dddd, MMMM Do YYYY LT",llll:"ddd, MMM D YYYY LT"}});var O=t(17);function S(n){return a.a.createElement("div",{className:"clock"},n.time)}function T(n){return a.a.createElement("div",{className:"nights-container"},a.a.createElement("div",{className:"nights-header"},"Upcoming Nights"),a.a.createElement("div",{className:"nights"},n.nights.map(function(n,e){return a.a.createElement("div",{key:e,className:"night-time"},n)})))}var j=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this,n))).state={time:D(),nights:E(10)},t}return Object(f.a)(e,n),Object(l.a)(e,[{key:"tick",value:function(){this.setState({time:D(),nights:E(10)})}},{key:"componentWillUnmount",value:function(){Object(O.clearInterval)(this.interval)}},{key:"componentDidMount",value:function(){var n=this;this.interval=setInterval(function(){return n.tick()},10)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(S,{time:this.state.time}),a.a.createElement(T,{nights:this.state.nights}))}}]),e}(a.a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}r.a.render(a.a.createElement(j,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");A?(function(n,e){fetch(n).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):N(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):N(e,n)})}}()}},[[20,2,1]]]);
//# sourceMappingURL=main.1b8e8bcd.chunk.js.map