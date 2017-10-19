
          window.__NEXT_REGISTER_PAGE('/PostJob', function() {
            var comp = module.exports=webpackJsonp([7],{885:function(e,t,n){e.exports=n(886)},886:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(16),r=u(o),a=n(8),i=u(a),d=n(9),l=u(d),f=n(17),s=u(f),c=n(18),p=u(c),_=n(2),b=u(_),h=n(155),y=n(117),j=n(118),m=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return b.default.createElement(j.Main,null,b.default.createElement(h.PostJob,{job:this.props.job}))}}],[{key:"getInitialProps",value:function(e){return{id:e.query.id}}}]),t}(_.Component);t.default=(0,y.withReduxSaga)(m,function(e,t){return{job:e.indeed.data[t.id]}})}},[885]);
            return { page: comp.default }
          })
        