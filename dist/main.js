webpackJsonp([2],{117:function(t,e,n){"use strict";n.d(e,"d",function(){return s}),n.d(e,"a",function(){return h}),n.d(e,"c",function(){return b});var r=n(85),o=n(266),a=n(79),c=n(588),i=n(589),u=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,a&&(c=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(c=c.call(a,n[1])).done)return c;switch(a=0,c&&(n=[0,c.value]),n[0]){case 0:case 1:c=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,a=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(c=u.trys,!(c=c.length>0&&c[c.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!c||n[1]>c[0]&&n[1]<c[3])){u.label=n[1];break}if(6===n[0]&&u.label<c[1]){u.label=c[1],c=n;break}if(c&&u.label<c[2]){u.label=c[2],u.ops.push(n);break}c[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],a=0}finally{o=c=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,c,i,u={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return i={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i},l=Object(o.default)(),s=function(t){var e=[i.a];t&&e.push(t),l.run(function(){return u(this,function(t){switch(t.label){case 0:return[4,e.map(function(t){return Object(a.fork)(t)})];case 1:return t.sent(),[2]}})})},f=function(t){var e={root:c.a};return t&&(e.page=t),Object(r.combineReducers)(e)},p=Object(r.createStore)(f(),Object(r.applyMiddleware)(l)),h=function(t){p.replaceReducer(f(t))};s(i.a);var b=p.dispatch;e.b=p},305:function(t,e,n){"use strict";e.a=[{label:"Home",to:"/",path:"home",activeOnlyWhenExact:!0},{label:"About",to:"/about",path:"about",activeOnlyWhenExact:!0},{label:"Contact",to:"/contact",path:"contact",activeOnlyWhenExact:!0}]},382:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(383),o=(n.n(r),n(118)),a=(n.n(o),n(585)),c=(n.n(a),n(586)),i=(n.n(c),n(10)),u=(n.n(i),n(241)),l=(n.n(u),n(116)),s=n(242),f=n(254),p=n.n(f),h=n(587),b=n(305),d=n(117),y=n(591),v=i.createElement(i.Fragment,null,i.createElement(y.a,null),i.createElement(l.Provider,{store:d.b},i.createElement("div",{className:"container"},b.a.map(function(t,e){return i.createElement(s.Route,{exact:!0,path:t.to,component:Object(h.a)(t.path),key:e})})))),m=function(){return i.createElement(s.Router,{history:p()()},i.createElement("div",null,v))};Object(u.render)(i.createElement(m,null),document.getElementById("container"))},586:function(t,e){},587:function(t,e,n){"use strict";function r(t){return function(e){function r(){var t=e.call(this)||this;return t.state={loadedComponent:null},t}return c(r,e),r.prototype.load=function(){return i(this,void 0,void 0,function(){var e,r=this;return u(this,function(o){switch(o.label){case 0:return[4,n(590)("./"+t+"/index")];case 1:return e=o.sent(),e(function(t){Object(a.a)(t.reducer),Object(a.d)(t.saga),r.setState({loadedComponent:t.page})}),[2]}})})},r.prototype.componentDidMount=function(){var t=this;setTimeout(function(){return t.load()},500)},r.prototype.render=function(){var t=this.state.loadedComponent;return t?o.createElement(t,null):o.createElement("div",{className:"loader-wrapper"},o.createElement("div",{className:"loader"}))},r}(o.Component)}e.a=r;var o=n(10),a=(n.n(o),n(117)),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function c(t){try{u(r.next(t))}catch(t){a(t)}}function i(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(c,i)}u((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,a&&(c=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(c=c.call(a,n[1])).done)return c;switch(a=0,c&&(n=[0,c.value]),n[0]){case 0:case 1:c=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,a=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(c=u.trys,!(c=c.length>0&&c[c.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!c||n[1]>c[0]&&n[1]<c[3])){u.label=n[1];break}if(6===n[0]&&u.label<c[1]){u.label=c[1],c=n;break}if(c&&u.label<c[2]){u.label=c[2],u.ops.push(n);break}c[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],a=0}finally{o=c=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,c,i,u={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return i={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i}},588:function(t,e,n){"use strict";function r(t){return void 0===t&&(t={}),t}e.a=r},589:function(t,e,n){"use strict";function r(){return a(this,function(t){switch(t.label){case 0:return[4,Object(o.all)([])];case 1:return t.sent(),[2]}})}e.a=r;var o=n(79),a=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,a&&(c=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(c=c.call(a,n[1])).done)return c;switch(a=0,c&&(n=[0,c.value]),n[0]){case 0:case 1:c=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,a=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(c=u.trys,!(c=c.length>0&&c[c.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!c||n[1]>c[0]&&n[1]<c[3])){u.label=n[1];break}if(6===n[0]&&u.label<c[1]){u.label=c[1],c=n;break}if(c&&u.label<c[2]){u.label=c[2],u.ops.push(n);break}c[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],a=0}finally{o=c=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,c,i,u={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return i={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i}},590:function(t,e,n){function r(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"./contact/index":[595,1],"./home/index":[596,0]};r.keys=function(){return Object.keys(o)},r.id=590,t.exports=r},591:function(t,e,n){"use strict";var r=n(592),o=(n.n(r),n(10)),a=(n.n(o),n(253)),c=n(305);e.a=function(){return o.createElement("div",{className:"layout-navigation navbar navbar-default navbar-fixed-top"},o.createElement("div",{className:"container"},c.a.map(function(t,e){return o.createElement(a.NavLink,{to:t.to,key:e,activeClassName:"active"},t.label)})))}},592:function(t,e){}},[382]);