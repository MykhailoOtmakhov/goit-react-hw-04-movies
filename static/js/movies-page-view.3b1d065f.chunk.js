(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{109:function(e,t,n){"use strict";n.r(t);var r=n(79),a=n(80),c=n(82),o=n(81),u=(n(28),n(0)),i=(n(89),n(92)),s=n(3),h=n(1),l=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):Object(i.a)("Enter some word!")},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:this.state.query,onChange:this.handleChange}),Object(h.jsx)("button",{type:"submit",children:"Search"})]})}}]),n}(u.Component),f=Object(s.f)(l);var p={fetchMovie:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("c380f664e1da9ad09772f37426d65949","&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e ".concat(e)))}))}},v=n(86),b=n(93),j=n.n(b);function d(e){return j.a.parse(e)}var y=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={query:"",movies:[],results:[]},e.fetchMovieWithQuery=function(t){return p.fetchMovie(t).then((function(t){return e.setState({results:t.results})})).catch((function(e){return console.log(e)}))},e.handleQueryChange=function(t){e.props.history.push({pathname:e.props.location.pathname,search:"query=".concat(t)})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=d(this.props.location.search).query;e&&this.fetchMovieWithQuery(e)}},{key:"componentDidUpdate",value:function(e,t){var n=d(e.location.search).query,r=d(this.props.location.search).query;n!==r&&this.fetchMovieWithQuery(r)}},{key:"render",value:function(){var e=this.state.results;return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{onSubmit:this.handleQueryChange}),Object(h.jsx)(v.a,{results:e})]})}}]),n}(u.Component);t.default=y},86:function(e,t,n){"use strict";n(0);var r=n(11),a=n(3),c=n(1);t.a=Object(a.f)((function(e){var t=e.results,n=e.location;return Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:{pathname:"movies/".concat(e.id),state:{from:n}},children:e.title})},e.id)}))})}))}}]);
//# sourceMappingURL=movies-page-view.3b1d065f.chunk.js.map