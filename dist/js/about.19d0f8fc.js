(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var a=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"841c":function(e,t,n){"use strict";var a=n("d784"),r=n("825a"),i=n("1d80"),l=n("129f"),c=n("14c3");a("search",1,(function(e,t,n){return[function(t){var n=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](String(n))},function(e){var a=n(t,e,this);if(a.done)return a.value;var i=r(e),o=String(this),s=i.lastIndex;l(s,0)||(i.lastIndex=0);var u=c(i,o);return l(i.lastIndex,s)||(i.lastIndex=s),null===u?-1:u.index}]}))},9263:function(e,t,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,l=String.prototype.replace,c=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||s;d&&(c=function(e){var t,n,r,c,d=this,p=s&&d.sticky,h=a.call(d),g=d.source,f=0,v=e;return p&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),v=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,f++),n=new RegExp("^(?:"+g+")",h)),u&&(n=new RegExp("^"+g+"$(?!\\s)",h)),o&&(t=d.lastIndex),r=i.call(p?n:d,v),p?r?(r.input=r.input.slice(f),r[0]=r[0].slice(f),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:o&&r&&(d.lastIndex=d.global?r.index+r[0].length:t),u&&r&&r.length>1&&l.call(r[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),e.exports=c},"9f7f":function(e,t,n){"use strict";var a=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b8fa:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"contact"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("h1",[e._v("This is an contact page")])])],1)},r=[],i=n("2877"),l={},c=Object(i["a"])(l,a,r,!1,null,null,null);t["default"]=c.exports},baba:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Blastp"}})},r=[],i={name:"Blastp",data:function(){return{}},methods:{}},l=i,c=n("2877"),o=Object(c["a"])(l,a,r,!1,null,null,null);t["default"]=o.exports},bb51:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Home"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-image",{staticStyle:{width:"25%"},attrs:{src:e.url,lazy:""}})],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("h1",[e._v("Welecome to Global AMP Survey database (GAS).")])]),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{type:"flex",justify:"middle"}},[n("el-card",{attrs:{shadow:"hover"}},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v(" About GAS ")]),n("div",[n("p",[e._v("Blah, blah, blah...")])])])],1)],1)],1)},r=[],i={name:"Home",data:function(){return{url:n("cf05")}}},l=i,c=n("2877"),o=Object(c["a"])(l,a,r,!1,null,null,null);t["default"]=o.exports},d784:function(e,t,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),i=n("b622"),l=n("9263"),c=n("9112"),o=i("species"),s=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var g=i(e),f=!r((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),v=f&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!f||!v||"replace"===e&&(!s||!u||p)||"split"===e&&!h){var x=/./[g],b=n(g,""[e],(function(e,t,n,a,r){return t.exec===l?f&&!r?{done:!0,value:x.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=b[0],y=b[1];a(String.prototype,e,m),a(RegExp.prototype,g,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&c(RegExp.prototype[g],"sham",!0)}},de12:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"AMP"}},[n("el-row",{attrs:{gutter:24,type:"flex",justify:"center"}},[n("el-col",{attrs:{span:4}},[n("h3",[e._v("Search Filter")]),n("el-button",{attrs:{type:e.type,round:"",loading:e.searchLoading},on:{click:e.filter}},[e._v("Do Search")]),n("el-divider"),n("h4",[e._v("AMP ID or Family ID")]),n("el-input",{attrs:{maxlength:16,"show-word-limit":""},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),n("el-divider"),n("h4",[e._v("Sequence")]),n("el-input",{attrs:{type:"textarea",maxlength:255,"show-word-limit":"",rows:3,resize:"none"},model:{value:e.sequence,callback:function(t){e.sequence=t},expression:"sequence"}}),n("el-divider"),n("h4",[e._v("Sequence Length")]),e._v(" "+e._s(e.length[0])+"-"+e._s(e.length[1])+" "),n("el-slider",{attrs:{min:1,max:100,step:1,range:""},model:{value:e.length,callback:function(t){e.length=t},expression:"length"}}),n("el-divider"),n("h4",[e._v("pI Range")]),e._v(" "+e._s(e.pI[0])+"-"+e._s(e.pI[1])+" "),n("el-slider",{attrs:{min:0,max:15,step:.1,range:""},model:{value:e.pI,callback:function(t){e.pI=t},expression:"pI"}}),n("el-divider"),n("h4",[e._v("Charge Range")]),e._v(" "+e._s(e.charge[0])+"-"+e._s(e.charge[1])+" "),n("el-slider",{attrs:{min:-50,max:50,step:1,range:""},model:{value:e.charge,callback:function(t){e.charge=t},expression:"charge"}}),n("el-divider"),n("el-button",{attrs:{type:e.type,round:"",loading:e.searchLoading},on:{click:e.filter}},[e._v("Do Search")])],1),n("el-col",{attrs:{span:18}},[n("el-pagination",{staticStyle:{"margin-bottom":"18px"},attrs:{background:"","page-size":e.pageSize,total:e.count,"current-page":e.currentPage,layout:"total, sizes, prev, next","page-sizes":[10,20,30]},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-spinner":"el-icon-loading",data:e.tableData,stripe:"",border:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"AMP_ID",label:"AMP ID"}}),n("el-table-column",{attrs:{prop:"Sequence",label:"Sequence"}}),n("el-table-column",{attrs:{prop:"pI",label:"pI"}}),n("el-table-column",{attrs:{prop:"charge",label:"charge"}}),n("el-table-column",{attrs:{prop:"Family_ID",label:"Family ID"}})],1)],1)],1)],1)},r=[],i=(n("ac1f"),n("841c"),{name:"AMP",data:function(){return{count:0,pageSize:10,currentPage:1,tableData:[],tableLoading:!1,type:"primary",searchLoading:!1,id:"",sequence:"",length:[1,255],pI:[0,15],charge:[-50,50]}},created:function(){this.tableLoading=!0,this.search()},methods:{handleSizeChange:function(){this.tableLoading=!0,this.search()},handleCurrentChange:function(){this.tableLoading=!0,this.search()},filter:function(){this.type="danger",this.searchLoading=!0,this.tableLoading=!0,this.search()},search:function(){var e=this;this.axios.get("/amp/index",{params:{pageSize:this.pageSize,currentPage:this.currentPage,id:this.id,sequence:this.sequence,minLength:this.length[0],maxLength:this.length[1],minpI:this.pI[0],maxpI:this.pI[1],minCharge:this.charge[0],maxCharge:this.charge[1]}}).then((function(t){e.count=t.data["count"],e.tableData=t.data["AMP"],e.type="primary",e.searchLoading=!1,e.tableLoading=!1})).catch((function(e){console.log(e)}))}}}),l=i,c=n("2877"),o=Object(c["a"])(l,a,r,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=about.19d0f8fc.js.map