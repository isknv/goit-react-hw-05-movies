(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[9],{105:function(e,t,a){e.exports={goBackBtn:"MovieCard_goBackBtn__1b9GN",goBackBtn__icon:"MovieCard_goBackBtn__icon__3ICvH",card:"MovieCard_card__VW1lY",imgWrapper:"MovieCard_imgWrapper__2MaxG",contentWrapper:"MovieCard_contentWrapper__ZI5ZS",marBot:"MovieCard_marBot__1-0rR",genresList:"MovieCard_genresList__1Fbn4 MovieCard_marBot__1-0rR",genresTitle:"MovieCard_genresTitle__35TKy",genresList__item:"MovieCard_genresList__item__3h8jk",title:"MovieCard_title__t-bKl MovieCard_marBot__1-0rR",description:"MovieCard_description__3LV83 MovieCard_marBot__1-0rR",descriptionSpan:"MovieCard_descriptionSpan__3J5dC",voteWrapper:"MovieCard_voteWrapper__XZaRW MovieCard_marBot__1-0rR",vote:"MovieCard_vote__2HtPG",voteSpan:"MovieCard_voteSpan__1_jLm",icon:"MovieCard_icon__38Dwm",navLink:"MovieCard_navLink__P783-",activeNavLink:"MovieCard_activeNavLink__204YI MovieCard_navLink__P783-"}},113:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var c=a(55),n=a(0),r=a(3),i=a(14),s=a(9),o=a(60),v=a(57),l=a(105),d=a.n(l),_=a(1);function p(e){var t,a,c,n,i=e.movie,l=Object(r.i)().url,p=Object(r.g)();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(s.b,{className:d.a.goBackBtn,to:null!==(t=null===p||void 0===p||null===(a=p.state)||void 0===a?void 0:a.from)&&void 0!==t?t:"/",children:[Object(_.jsx)("svg",{className:d.a.goBackBtn__icon,width:"14px",height:"14px",children:Object(_.jsx)("use",{href:o.a+"#arrow-left"})}),"Go back"]}),Object(_.jsxs)("div",{className:d.a.card,children:[Object(_.jsx)("div",{className:d.a.imgWrapper,children:Object(_.jsx)("img",{src:i.poster_path?"https://image.tmdb.org/t/p/w500".concat(i.poster_path):v.a,alt:i.title})}),Object(_.jsxs)("div",{className:d.a.contentWrapper,children:[Object(_.jsx)("h3",{className:d.a.title,children:"".concat(i.title," (").concat(i.release_date.slice(0,4),")")}),Object(_.jsxs)("p",{className:d.a.description,children:[Object(_.jsx)("span",{className:d.a.descriptionSpan,children:"Description:"}),i.overview]}),Object(_.jsx)("p",{className:d.a.genresTitle,children:"Genres:"}),Object(_.jsx)("ul",{className:d.a.genresList,children:i.genres.map((function(e){var t=e.name;return Object(_.jsx)("li",{className:d.a.genresList__item,children:Object(_.jsx)("p",{children:t})},t)}))}),Object(_.jsxs)("div",{className:d.a.voteWrapper,children:[Object(_.jsxs)("p",{className:d.a.vote,children:[Object(_.jsx)("span",{className:d.a.voteSpan,children:"Vote averege: "}),i.vote_average]})," ",Object(_.jsx)("svg",{className:d.a.icon,height:"20",width:"20",children:Object(_.jsx)("use",{href:o.a+"#star"})})]}),Object(_.jsx)(s.c,{className:d.a.navLink,activeClassName:d.a.activeNavLink,to:{pathname:"".concat(l,"/cast"),state:{from:null===p||void 0===p||null===(c=p.state)||void 0===c?void 0:c.from}},children:"Cast"}),Object(_.jsx)(s.c,{className:d.a.navLink,activeClassName:d.a.activeNavLink,to:{pathname:"".concat(l,"/reviews"),state:{from:null===p||void 0===p||null===(n=p.state)||void 0===n?void 0:n.from}},children:"Reviews"})]})]})]})}var u=a(56),j=Object(n.lazy)((function(){return a.e(1).then(a.bind(null,114))})),h=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,115))}));function m(){var e=Object(r.i)().path,t=Object(r.h)().movieId,a=Object(n.useState)(null),s=Object(c.a)(a,2),o=s[0],v=s[1];return Object(n.useEffect)((function(){u.a.fetchMovieById(t).then(v).catch((function(e){var t=e.message;return console.log(t)}))}),[t]),Object(_.jsxs)(_.Fragment,{children:[o&&Object(_.jsx)(p,{movie:o}),Object(_.jsxs)(n.Suspense,{fallback:Object(_.jsx)(i.a,{}),children:[Object(_.jsx)(r.a,{path:"".concat(e,"/cast"),children:o&&Object(_.jsx)(j,{})}),Object(_.jsx)(r.a,{path:"".concat(e,"/reviews"),children:o&&Object(_.jsx)(h,{})})]})]})}},56:function(e,t,a){"use strict";var c=a(67),n=a.n(c),r=a(68),i=a(69),s=a.n(i),o="1d7fb67928c0be1237a2da4e51e9ed0f",v="https://api.themoviedb.org/3";function l(e){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(n.a.mark((function e(t){var a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get(t);case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var _={currentPage:1,allPages:1,increasePage:function(){this.currentPage+=1},resetPage:function(){this.currentPage=1},setAllPages:function(e){this.allPages=e},fetchMovieByQuery:function(e){return l("".concat(v,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=").concat(this.currentPage))},fetchTrendingMovies:function(){return l("".concat(v,"/trending/movie/week?api_key=").concat(o,"&page=").concat(this.currentPage))},fetchMovieById:function(e){return l("".concat(v,"/movie/").concat(e,"?api_key=").concat(o))},fetchMovieCast:function(e){return l("".concat(v,"/movie/").concat(e,"/credits?api_key=").concat(o))},fetchMovieReviews:function(e){return l("".concat(v,"/movie/").concat(e,"/reviews?api_key=").concat(o))}};t.a=_},57:function(e,t,a){"use strict";t.a=a.p+"static/media/default.94283dad.jpg"},60:function(e,t,a){"use strict";t.a=a.p+"static/media/sprite.3673916f.svg"}}]);
//# sourceMappingURL=9.42e2c7ac.chunk.js.map