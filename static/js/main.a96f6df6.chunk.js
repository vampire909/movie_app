(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{467:function(e,t,s){},469:function(e,t,s){},477:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(21),r=s.n(c),i=s(148),o=s(4),l=s(84),m=s.n(l),j=s(141),d=s(142),u=s(143),v=s(151),h=s(150),p=s(144),b=s.n(p),O=(s(172),s(467),s(2));var x=function(e){var t=e.year,s=e.title,n=e.summary,a=e.poster,c=e.genres;return Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:a,alt:s,title:s}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:s}),Object(O.jsx)("h5",{className:"movie__year",children:t}),Object(O.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[n.slice(0,140),"..."]})]})]})},_=(s(469),function(e){Object(v.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(j.a)(m.a.mark((function t(){var s,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1}),console.log(n);case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loding..."})}):Object(O.jsx)("div",{className:"movies",children:s.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));var g=function(){return Object(O.jsx)("span",{children:'"hi it will be ready"'})};var f=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(o.a,{path:"/",component:_}),Object(O.jsx)(o.a,{path:"/about",component:g})]})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root"))}},[[477,1,2]]]);
//# sourceMappingURL=main.a96f6df6.chunk.js.map