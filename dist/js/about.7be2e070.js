(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,a){var r=a("c6b6"),n=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var l=a.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"1dde":function(e,t,a){var r=a("d039"),n=a("b622"),l=a("2d00"),i=n("species");e.exports=function(e){return l>=51||!r((function(){var t=[],a=t.constructor={};return a[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2600:function(e,t,a){},"4de4":function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").filter,l=a("1dde"),i=a("ae40"),o=l("filter"),c=i("filter");r({target:"Array",proto:!0,forced:!o||!c},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,a){var r=a("861d"),n=a("e8b5"),l=a("b622"),i=l("species");e.exports=function(e,t){var a;return n(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},7654:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"AMP_Card"},[a("el-row",{attrs:{gutter:12,type:"flex",justify:"end"}},[a("el-col",{attrs:{span:8,type:"flex",justify:"middle"}},[a("el-input",{attrs:{maxlength:16,"show-word-limit":"",placeholder:"AMP ID",clearable:""},model:{value:e.ampId,callback:function(t){e.ampId=t},expression:"ampId"}})],1),a("el-col",{attrs:{span:3,type:"flex",justify:"middle"}},[a("el-button",{attrs:{size:"medium",type:e.type,loading:e.buttonLoading,icon:"el-icon-search"},on:{click:e.clickSearch}},[e._v(" Search ")])],1)],1),a("el-row",[a("el-col",{attrs:{span:3,offset:1,type:"flex",justify:"middle"}},[a("h2",[e._v("AMP Card")])]),a("el-col",{attrs:{span:6,type:"flex",justify:"middle"}},[e.isNull?e.tabLoading?a("h3",{attrs:{effect:"dark"}},[a("el-tag",{attrs:{type:"danger"}},[e._v(" Searching ")])],1):a("h3",[a("el-tag",{attrs:{type:"warning",effect:"dark"}},[e._v(" No Data. Just search it:) ")])],1):a("h3",[a("el-tag",{attrs:{type:"success",effect:"dark"}},[e._v(" "+e._s(e.AMP_Family[0].AMP_ID)+" ")])],1)])],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",[a("el-card",{attrs:{shadow:e.shadow}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{type:"flex",justify:"middle"}},[a("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:e.tabLoading,expression:"tabLoading"}],attrs:{"element-loading-spinner":"el-icon-loading","tab-position":"left"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"Basic",name:"family"}},[a("el-table",{attrs:{data:e.AMP_Family,stripe:""}},[a("el-table-column",{attrs:{prop:"Sequence",label:"Sequence","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"Length",label:"Length","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"Family_ID",label:"Family ID","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:{path:"/family",query:{Family_ID:t.row.Family_ID}}}},[a("el-tag",{attrs:{type:"info"}},[a("el-link",{attrs:{icon:"el-icon-link",type:"info",underline:!1}},[e._v(" "+e._s(t.row.Family_ID)+" ")])],1)],1)]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"Features",name:"features"}},[a("el-table",{attrs:{data:e.AMP_Feature,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"tinyAA",label:"tinyAA","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"smallAA",label:"smallAA","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"aliphaticAA",label:"aliphaticAA","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"aromaticAA",label:"aromaticAA","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"nonpolarAA",label:"nonpolarAA","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"polarAA",label:"polarAA","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"chargedAA",label:"chargedAA","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"basicAA",label:"basicAA","header-align":"center",align:"center"}})],1),a("el-table",{attrs:{data:e.AMP_Feature,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"acidicAA",label:"acidicAA","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"charge",label:"charge","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"pI",label:"pI","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"aindex",label:"aindex","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"instaindex",label:"instaindex","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"boman",label:"boman","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"hydrophobicity",label:"hydrophobicity","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"hmoment",label:"hmoment","header-align":"center",align:"center"}})],1),a("el-table",{attrs:{data:e.AMP_Feature,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"SA_Group1_residue0",label:"SA.Group1.residue0","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"SA_Group2_residue0",label:"SA.Group2.residue0","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"SA_Group3_residue0",label:"SA.Group3.residue0","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"HB_Group1_residue0",label:"HB.Group1.residue0","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"HB_Group2_residue0",label:"HB.Group2.residue0","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"HB_Group3_residue0",label:"HB.Group3.residue0","header-align":"center",align:"center"}})],1),a("el-table",{attrs:{data:e.AMP_Feature,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"AGG",label:"AGG","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"AMYLO",label:"AMYLO","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"TURN",label:"TURN","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"HELIX",label:"HELIX","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"HELAGG",label:"HELAGG","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"BETA",label:"BETA","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"Level_I",label:"Level_I","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"Level_II",label:"Level_II","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"Level_III",label:"Level_III","header-align":"center",align:"center"}})],1)],1),a("el-tab-pane",{attrs:{label:"Metagenomes",name:"metagenome"}},e._l(e.AMP_Metagenome,(function(t){return a("el-tag",{key:t.id,staticStyle:{"margin-right":"18px","margin-bottom":"18px"},attrs:{type:"info"}},[a("el-link",{attrs:{icon:"el-icon-link",href:"https://www.ncbi.nlm.nih.gov/sra/?term="+t.metagenomes,type:"info",target:"_blank",underline:!1}},[e._v(" "+e._s(t.metagenomes)+" ")])],1)})),1),a("el-tab-pane",{attrs:{label:"Prediction",name:"prediction"}},[a("el-table",{attrs:{data:e.AMP_Prediction,stripe:""}},[a("el-table-column",{attrs:{prop:"AMP_Class",label:"AMP Class","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"AMP_Probability",label:"AMP Probability","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"Hemolysis_Class",label:"Hemolysis Class","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"Hemolysis_Probability",label:"Hemolysis Probability","header-align":"center",align:"center"}})],1)],1),a("el-tab-pane",{attrs:{label:"Countries",name:"country"}},[a("el-table",{attrs:{data:e.AMP_Country,stripe:""}},[a("el-table-column",{attrs:{prop:"Asia",label:"Asia","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Asia>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Asia)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Asia)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Europe",label:"Europe","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Europe>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Europe)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Europe)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Africa",label:"Africa","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Africa>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Africa)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Africa)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"South_America",label:"SouthAmerica","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.South_America>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.South_America)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.South_America)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"North_America",label:"NorthAmerica","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.North_America>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.North_America)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.North_America)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Oceania",label:"Oceania","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Oceania>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Oceania)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Oceania)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Pacific_Ocean",label:"PacificOcean","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Pacific_Ocean>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Pacific_Ocean)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Pacific_Ocean)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"New_Zaeland",label:"NewZaeland","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.New_Zaeland>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.New_Zaeland)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.New_Zaeland)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"na",label:"na","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.na>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.na)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.na)+" ")])]}}])})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("div",{staticStyle:{width:"400px",height:"300px"},attrs:{id:"country"}})])],1),a("el-tab-pane",{attrs:{label:"Environments",name:"environment"}},[a("el-table",{attrs:{data:e.AMP_Environment,stripe:""}},[a("el-table-column",{attrs:{prop:"Freshwater",label:"Freshwater","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Freshwater>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Freshwater)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Freshwater)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Gut",label:"Gut","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Gut>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Gut)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Gut)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Marine",label:"Marine","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Marine>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Marine)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Marine)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Milk",label:"Milk","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Milk>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Milk)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Milk)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Oral_Cavity",label:"OralCavity","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Oral_Cavity>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Oral_Cavity)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Oral_Cavity)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Respiratory_Tract",label:"RespiratoryTract","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Respiratory_Tract>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Respiratory_Tract)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Respiratory_Tract)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Skin",label:"Skin","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Skin>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Skin)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Skin)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Soil",label:"Soil","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Soil>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Soil)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Soil)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Surface",label:"Surface","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Surface>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Surface)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Surface)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Vagina",label:"Vagina","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Vagina>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Vagina)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Vagina)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"Wastewater",label:"Wastewater","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.Wastewater>0?a("el-tag",{attrs:{type:"info",effect:"dark"}},[e._v(" "+e._s(t.row.Wastewater)+" ")]):a("el-tag",{attrs:{type:"info",effect:"plain"}},[e._v(" "+e._s(t.row.Wastewater)+" ")])]}}])})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("div",{staticStyle:{width:"400px",height:"300px"},attrs:{id:"environment"}})])],1)],1)],1)],1)],1)],1)],1)],1)},n=[],l=(a("d81d"),a("b64b"),a("ac1f"),a("841c"),{name:"AMP_Card",data:function(){return{ampId:"",type:"primary",buttonLoading:!1,isNull:!0,tabLoading:!1,activeName:"family",AMP_Family:[],AMP_Feature:[],AMP_Country:[],AMP_Environment:[],AMP_Metagenome:{},AMP_Prediction:[]}},computed:{shadow:function(){return this.isNull?"never":"always"}},mounted:function(){0!==Object.keys(this.$route.query).length&&(this.ampId=this.$route.query.AMP_ID,this.search())},methods:{clickSearch:function(){""!==this.ampId?(this.type="danger",this.buttonLoading=!0,this.search()):(this.AMP_Family=[],this.AMP_Feature=[],this.AMP_Metagenome={},this.AMP_Prediction=[],this.AMP_Country=[],this.AMP_Environment=[],this.isNull=!0,this.drawCountryChart(),this.drawEnvironmentChart())},search:function(){var e=this;this.isNull=!0,this.tabLoading=!0,this.axios.get("/amp_card/index",{params:{ampId:this.ampId}}).then((function(t){200===t.status?(e.AMP_Family=t.data["AMP_Family"],e.AMP_Feature=t.data["AMP_Feature"],e.AMP_Metagenome=t.data["AMP_Metagenome"],e.AMP_Prediction=t.data["AMP_Prediction"],e.AMP_Country=t.data["AMP_Country"],e.AMP_Environment=t.data["AMP_Environment"],e.isNull=!1,e.drawCountryChart(),e.drawEnvironmentChart()):204===t.status&&(e.AMP_Family=[],e.AMP_Feature=[],e.AMP_Metagenome={},e.AMP_Prediction=[],e.AMP_Country=[],e.AMP_Environment=[],e.isNull=!0,e.drawCountryChart(),e.drawEnvironmentChart()),e.type="primary",e.buttonLoading=!1,e.tabLoading=!1})).catch((function(e){console.log(e)}))},drawCountryChart:function(){var e=this,t=this.$echarts.init(document.getElementById("country"));if(e.AMP_Country.length>0){delete e.AMP_Country[0]["id"],delete e.AMP_Country[0]["AMP_ID"];var a={toolbox:{feature:{magicType:{type:["line","bar"],title:{line:"for line charts",bar:"for line charts"}},saveAsImage:{title:"save as image",pixelRatio:2}}},xAxis:{type:"value",axisLabel:{fontSize:14},splitLine:{show:!1}},grid:[{top:"10%",bottom:"5%",left:"5%",right:"10%",containLabel:!0}],yAxis:{type:"category",data:Object.keys(e.AMP_Country[0]),axisLabel:{rotate:30,fontSize:14},splitLine:{show:!1}},series:[{type:"bar",data:Object.keys(e.AMP_Country[0]).map((function(t){return e.AMP_Country[0][t]})),color:"#000000",label:{show:!0,position:"right",fontSize:14}}]};t.setOption(a)}else t.clear()},drawEnvironmentChart:function(){var e=this,t=this.$echarts.init(document.getElementById("environment"));if(e.AMP_Environment.length>0){delete e.AMP_Environment[0]["id"],delete e.AMP_Environment[0]["AMP_ID"];var a={toolbox:{feature:{magicType:{type:["line","bar"],title:{line:"for line charts",bar:"for line charts"}},saveAsImage:{title:"save as image",pixelRatio:2}}},xAxis:{type:"value",axisLabel:{fontSize:14},splitLine:{show:!1}},grid:[{top:"10%",bottom:"5%",left:"5%",right:"10%",containLabel:!0}],yAxis:{type:"category",data:Object.keys(e.AMP_Environment[0]),axisLabel:{rotate:30,fontSize:14},splitLine:{show:!1}},series:[{type:"bar",data:Object.keys(e.AMP_Environment[0]).map((function(t){return e.AMP_Environment[0][t]})),color:"#000000",label:{show:!0,position:"right",fontSize:14}}]};t.setOption(a)}else t.clear()}}}),i=l,o=(a("aff1"),a("2877")),c=Object(o["a"])(i,r,n,!1,null,null,null);t["default"]=c.exports},"841c":function(e,t,a){"use strict";var r=a("d784"),n=a("825a"),l=a("1d80"),i=a("129f"),o=a("14c3");r("search",1,(function(e,t,a){return[function(t){var a=l(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a):new RegExp(t)[e](String(a))},function(e){var r=a(t,e,this);if(r.done)return r.value;var l=n(e),c=String(this),s=l.lastIndex;i(s,0)||(l.lastIndex=0);var u=o(l,c);return i(l.lastIndex,s)||(l.lastIndex=s),null===u?-1:u.index}]}))},9263:function(e,t,a){"use strict";var r=a("ad6d"),n=a("9f7f"),l=RegExp.prototype.exec,i=String.prototype.replace,o=l,c=function(){var e=/a/,t=/b*/g;return l.call(e,"a"),l.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=c||u||s;p&&(o=function(e){var t,a,n,o,p=this,d=s&&p.sticky,f=r.call(p),g=p.source,h=0,m=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(g="(?: "+g+")",m=" "+m,h++),a=new RegExp("^(?:"+g+")",f)),u&&(a=new RegExp("^"+g+"$(?!\\s)",f)),c&&(t=p.lastIndex),n=l.call(d?a:p,m),d?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=p.lastIndex,p.lastIndex+=n[0].length):p.lastIndex=0:c&&n&&(p.lastIndex=p.global?n.index+n[0].length:t),u&&n&&n.length>1&&i.call(n[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),e.exports=o},"96c8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Family"}},[a("el-row",{attrs:{gutter:12,type:"flex",justify:"end"}},[a("el-col",{attrs:{span:8,type:"flex",justify:"middle"}},[a("el-input",{attrs:{maxlength:16,"show-word-limit":"",placeholder:"Family ID"},model:{value:e.familyId,callback:function(t){e.familyId=t},expression:"familyId"}})],1),a("el-col",{attrs:{span:4,type:"flex",justify:"middle"}},[a("el-button",{attrs:{type:e.type,loading:e.searchLoading,icon:"el-icon-search"},on:{click:e.search}},[e._v(" Search ")])],1)],1),a("el-row",{staticStyle:{"margin-top":"18px"},attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:22}},[a("el-card",{attrs:{shadow:"always"}})],1)],1)],1)},n=[],l={name:"Family",data:function(){return{familyId:"",type:"primary",searchLoading:!1}},methods:{search:function(){var e=this;this.axios.get("/amp/index",{params:{pageSize:this.pageSize,currentPage:this.currentPage,ampId:this.ampId,familyId:this.familyId,sequence:this.sequence,minLength:this.length[0],maxLength:this.length[1],minpI:this.pI[0],maxpI:this.pI[1],minCharge:this.charge[0],maxCharge:this.charge[1]}}).then((function(t){e.count=t.data["count"],e.tableData=t.data["AMP"],e.type="primary",e.searchLoading=!1,e.tableLoading=!1})).catch((function(e){console.log(e)}))}}},i=l,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);t["default"]=c.exports},"9f7f":function(e,t,a){"use strict";var r=a("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var r=a("23e7"),n=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,a){"use strict";var r=a("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae40:function(e,t,a){var r=a("83ab"),n=a("d039"),l=a("5135"),i=Object.defineProperty,o={},c=function(e){throw e};e.exports=function(e,t){if(l(o,e))return o[e];t||(t={});var a=[][e],s=!!l(t,"ACCESSORS")&&t.ACCESSORS,u=l(t,0)?t[0]:c,p=l(t,1)?t[1]:void 0;return o[e]=!!a&&!n((function(){if(s&&!r)return!0;var e={length:-1};s?i(e,1,{enumerable:!0,get:c}):e[1]=1,a.call(e,u,p)}))}},aff1:function(e,t,a){"use strict";var r=a("2600"),n=a.n(r);n.a},b64b:function(e,t,a){var r=a("23e7"),n=a("7b0b"),l=a("df75"),i=a("d039"),o=i((function(){l(1)}));r({target:"Object",stat:!0,forced:o},{keys:function(e){return l(n(e))}})},b727:function(e,t,a){var r=a("0366"),n=a("44ad"),l=a("7b0b"),i=a("50c4"),o=a("65f0"),c=[].push,s=function(e){var t=1==e,a=2==e,s=3==e,u=4==e,p=6==e,d=5==e||p;return function(f,g,h,m){for(var b,y,_=l(f),v=n(_),A=r(g,h,3),w=i(v.length),x=0,P=m||o,I=t?P(f,w):a?P(f,0):void 0;w>x;x++)if((d||x in v)&&(b=v[x],y=A(b,x,_),e))if(t)I[x]=y;else if(y)switch(e){case 3:return!0;case 5:return b;case 6:return x;case 2:c.call(I,b)}else if(u)return!1;return p?-1:s||u?u:I}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},b8fa:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"contact"}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("h1",[e._v("This is an contact page")])])],1)},n=[],l=a("2877"),i={},o=Object(l["a"])(i,r,n,!1,null,null,null);t["default"]=o.exports},baba:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Blastp"}})},n=[],l={name:"Blastp",data:function(){return{}},methods:{}},i=l,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);t["default"]=c.exports},bb51:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Home"},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-image",{staticStyle:{width:"25%"},attrs:{src:e.url,lazy:""}})],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("h1",[e._v("Welecome to Global AMP Survey database (GAS).")])]),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{type:"flex",justify:"middle"}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{attrs:{slot:"header"},slot:"header"},[e._v(" About GAS ")]),a("div",[a("p",[e._v("Blah, blah, blah...")])])])],1)],1)],1)},n=[],l={name:"Home",data:function(){return{url:a("cf05")}}},i=l,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);t["default"]=c.exports},d784:function(e,t,a){"use strict";a("ac1f");var r=a("6eeb"),n=a("d039"),l=a("b622"),i=a("9263"),o=a("9112"),c=l("species"),s=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=l("replace"),d=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),f=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,p){var g=l(e),h=!n((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),m=h&&!n((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[g]=/./[g]),a.exec=function(){return t=!0,null},a[g](""),!t}));if(!h||!m||"replace"===e&&(!s||!u||d)||"split"===e&&!f){var b=/./[g],y=a(g,""[e],(function(e,t,a,r,n){return t.exec===i?h&&!n?{done:!0,value:b.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),_=y[0],v=y[1];r(String.prototype,e,_),r(RegExp.prototype,g,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}p&&o(RegExp.prototype[g],"sham",!0)}},d81d:function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").map,l=a("1dde"),i=a("ae40"),o=l("map"),c=i("map");r({target:"Array",proto:!0,forced:!o||!c},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},de12:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"AMP"},[a("el-card",{attrs:{shadow:"always"}},[a("el-row",{attrs:{gutter:20,type:"flex",justify:"center"}},[a("el-col",{attrs:{span:5,type:"flex",justify:"center"}},[a("h4",[e._v("Search Filter")]),a("el-button",{attrs:{size:"medium",type:e.type,loading:e.searchLoading,icon:"el-icon-search"},on:{click:e.filter}},[e._v("Search ")]),a("el-button",{attrs:{size:"medium",circle:"",loading:e.searchLoading,icon:"el-icon-refresh"},on:{click:e.reset}}),a("el-divider"),a("h4",[e._v("AMP ID")]),a("el-input",{attrs:{maxlength:16,"show-word-limit":"",clearable:""},model:{value:e.ampId,callback:function(t){e.ampId=t},expression:"ampId"}}),a("el-divider"),a("h4",[e._v("Family ID")]),a("el-input",{attrs:{maxlength:16,"show-word-limit":"",clearable:""},model:{value:e.familyId,callback:function(t){e.familyId=t},expression:"familyId"}}),a("el-divider"),a("h4",[e._v("Sequence")]),a("el-input",{attrs:{type:"textarea",maxlength:100,"show-word-limit":"",rows:3,resize:"none",clearable:""},model:{value:e.sequence,callback:function(t){e.sequence=t},expression:"sequence"}}),a("el-divider"),a("h4",[e._v("Sequence Length")]),e._v(" "+e._s(e.length[0])+"-"+e._s(e.length[1])+" "),a("el-slider",{attrs:{min:10,max:100,step:1,range:""},model:{value:e.length,callback:function(t){e.length=t},expression:"length"}}),a("el-divider"),a("h4",[e._v("pI Range")]),e._v(" "+e._s(e.pI[0])+"-"+e._s(e.pI[1])+" "),a("el-slider",{attrs:{min:0,max:15,step:.1,range:""},model:{value:e.pI,callback:function(t){e.pI=t},expression:"pI"}}),a("el-divider"),a("h4",[e._v("Charge Range")]),e._v(" "+e._s(e.charge[0])+"-"+e._s(e.charge[1])+" "),a("el-slider",{attrs:{min:-50,max:50,step:1,range:""},model:{value:e.charge,callback:function(t){e.charge=t},expression:"charge"}}),a("el-divider"),a("el-button",{attrs:{size:"medium",type:e.type,loading:e.searchLoading,icon:"el-icon-search"},on:{click:e.filter}},[e._v("Search ")]),a("el-button",{attrs:{size:"medium",circle:"",loading:e.searchLoading,icon:"el-icon-refresh"},on:{click:e.reset}})],1),a("el-col",{attrs:{span:19,type:"flex",justify:"center"}},[a("el-pagination",{staticStyle:{"margin-bottom":"18px"},attrs:{background:"","page-size":e.pageSize,total:e.count,"current-page":e.currentPage,layout:"total, sizes, prev, next","page-sizes":[10,20,30]},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{"element-loading-spinner":"el-icon-loading",data:e.tableData,stripe:"",border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"AMP ID","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:{path:"/amp_card",query:{AMP_ID:t.row.AMP_ID}}}},[a("el-tag",{attrs:{type:"info"}},[a("el-link",{attrs:{icon:"el-icon-link",type:"info",underline:!1}},[e._v(" "+e._s(t.row.AMP_ID)+" ")])],1)],1)]}}])}),a("el-table-column",{attrs:{prop:"Sequence",label:"Sequence","header-align":"center"}}),a("el-table-column",{attrs:{prop:"pI",label:"pI","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"charge",label:"charge","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{label:"Family ID","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:{path:"/family",query:{Family_ID:t.row.Family_ID}}}},[a("el-tag",{attrs:{type:"info"}},[a("el-link",{attrs:{icon:"el-icon-link",type:"info",underline:!1}},[e._v(" "+e._s(t.row.Family_ID)+" ")])],1)],1)]}}])})],1)],1)],1)],1)],1)},n=[],l=(a("4de4"),a("ac1f"),a("841c"),{name:"AMP",data:function(){return{count:0,pageSize:10,currentPage:1,tableData:[],tableLoading:!1,type:"primary",searchLoading:!1,ampId:"",familyId:"",sequence:"",length:[10,100],pI:[0,15],charge:[-50,50]}},mounted:function(){this.tableLoading=!0,this.search()},methods:{handleSizeChange:function(){this.tableLoading=!0,this.search()},handleCurrentChange:function(){this.tableLoading=!0,this.search()},filter:function(){this.type="danger",this.searchLoading=!0,this.tableLoading=!0,this.search()},reset:function(){this.ampId="",this.familyId="",this.sequence="",this.length=[10,100],this.pI=[0,15],this.charge=[-50,50],this.filter()},search:function(){var e=this;this.axios.get("/amp/index",{params:{pageSize:this.pageSize,currentPage:this.currentPage,ampId:this.ampId,familyId:this.familyId,sequence:this.sequence,minLength:this.length[0],maxLength:this.length[1],minpI:this.pI[0],maxpI:this.pI[1],minCharge:this.charge[0],maxCharge:this.charge[1]}}).then((function(t){200===t.status&&(e.count=t.data["count"],e.tableData=t.data["AMP"]),e.type="primary",e.searchLoading=!1,e.tableLoading=!1})).catch((function(e){console.log(e)}))}}}),i=l,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);t["default"]=c.exports},e8b5:function(e,t,a){var r=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=about.7be2e070.js.map