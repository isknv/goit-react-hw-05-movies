(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[7],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var o=n(71),r=n(55),s=n(0),i=n(64),a=n(14),l=n(72),c=n(56),h=n(1);function p(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],p=t[1],u=Object(s.useState)(!0),d=Object(r.a)(u,2),f=d[0],v=d[1];function m(){if(c.a.currentPage>c.a.allPages)return alert("There are no pages left"),void v(!1);c.a.fetchTrendingMovies().then((function(e){var t=e.total_pages,n=e.results;c.a.increasePage(),c.a.setAllPages(t),p((function(e){return[].concat(Object(o.a)(e),Object(o.a)(n))}))})).catch((function(e){var t=e.message;return console.log(t)}))}return Object(s.useEffect)((function(){c.a.resetPage(),m()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(i.a,{className:"InfiniteScroll",dataLength:n.length,next:m,hasMore:f,loader:Object(h.jsx)(a.a,{}),children:!!n.length&&Object(h.jsx)(l.a,{MoviesData:n})})})}},56:function(e,t,n){"use strict";var o=n(67),r=n.n(o),s=n(68),i=n(69),a=n.n(i),l="1d7fb67928c0be1237a2da4e51e9ed0f",c="https://api.themoviedb.org/3";function h(e){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(r.a.mark((function e(t){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get(t);case 3:return n=e.sent,o=n.data,e.abrupt("return",o);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var u={currentPage:1,allPages:1,increasePage:function(){this.currentPage+=1},resetPage:function(){this.currentPage=1},setAllPages:function(e){this.allPages=e},fetchMovieByQuery:function(e){return h("".concat(c,"/search/movie?api_key=").concat(l,"&query=").concat(e,"&page=").concat(this.currentPage))},fetchTrendingMovies:function(){return h("".concat(c,"/trending/movie/week?api_key=").concat(l,"&page=").concat(this.currentPage))},fetchMovieById:function(e){return h("".concat(c,"/movie/").concat(e,"?api_key=").concat(l))},fetchMovieCast:function(e){return h("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(l))},fetchMovieReviews:function(e){return h("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(l))}};t.a=u},57:function(e,t,n){"use strict";t.a=n.p+"static/media/default.94283dad.jpg"},60:function(e,t,n){"use strict";t.a=n.p+"static/media/sprite.3673916f.svg"},64:function(e,t,n){"use strict";var o=n(0),r=n.n(o),s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var a="Pixel",l="Percent",c={unit:l,value:.8};function h(e){return"number"===typeof e?{unit:l,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:a,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:l,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),c):(console.warn("scrollThreshold should be string or number"),c)}var p=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,o){var r,s=!1,i=0;function a(){r&&clearTimeout(r)}function l(){var l=this,c=Date.now()-i,h=arguments;function p(){i=Date.now(),n.apply(l,h)}function u(){r=void 0}s||(o&&!r&&p(),a(),void 0===o&&c>e?p():!0!==t&&(r=setTimeout(o?u:p,void 0===o?e-c:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),l.cancel=function(){a(),s=!0},l}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?i(i({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=h(t);return o.unit===a?e.scrollTop<=o.value+n-e.scrollHeight+1:e.scrollTop<=o.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=h(t);return o.unit===a?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=i({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.a.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},r.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(o.Component);t.a=p},65:function(e,t,n){e.exports={item:"MoviesGalleryItem_item__3Ws0x",link:"MoviesGalleryItem_link__37SJJ",voteWrapper:"MoviesGalleryItem_voteWrapper__1Yrz5",voteText:"MoviesGalleryItem_voteText__wxQ9e",icon:"MoviesGalleryItem_icon__3ThGi",imgWrapper:"MoviesGalleryItem_imgWrapper__Aq7O_",contentWrapper:"MoviesGalleryItem_contentWrapper__2KeoV"}},66:function(e,t,n){e.exports={list:"MoviesGallery_list__1A_3I"}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(62);var r=n(63);function s(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(0);var o=n(3),r=n(9),s=n(60),i=n(57),a=n(65),l=n.n(a),c=n(1);function h(e){var t=e.id,n=e.poster,a=e.title,h=e.vote,p=e.release,u=Object(o.g)();return Object(c.jsx)("li",{className:l.a.item,children:Object(c.jsxs)(r.b,{className:l.a.link,to:{pathname:"/movies/".concat(t),state:{from:u}},children:[Object(c.jsxs)("div",{className:l.a.voteWrapper,children:[Object(c.jsx)("p",{className:l.a.voteText,children:h}),Object(c.jsx)("svg",{className:l.a.icon,height:"16",width:"16",children:Object(c.jsx)("use",{href:s.a+"#star"})})]}),Object(c.jsx)("div",{className:l.a.imgWrapper,children:Object(c.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w300".concat(n):i.a,alt:a})}),Object(c.jsx)("div",{className:l.a.contentWrapper,children:Object(c.jsx)("h3",{children:"".concat(a," (").concat(p?p.slice(0,4):"Unknown",")")})})]})})}var p=n(66),u=n.n(p);function d(e){var t=e.MoviesData;return Object(c.jsx)("ul",{className:u.a.list,children:t.map((function(e,t){var n=e.id,o=e.poster_path,r=e.title,s=e.vote_average,i=e.release_date;return Object(c.jsx)(h,{id:n,poster:o,title:r,vote:s,release:i},t)}))})}}}]);
//# sourceMappingURL=7.2aa7313f.chunk.js.map