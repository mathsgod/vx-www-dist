(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aba0b"],{"15a2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticClass:"table",attrs:{data:t.data}},[a("el-table-column",{attrs:{width:"70px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row[t.dataKey]?a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-minus"},on:{click:function(a){return a.preventDefault(),t.removeRow(e.$index,e.row)}}}):a("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-minus"},on:{click:function(a){return a.preventDefault(),t.removeRow(e.$index)}}}),a("input",{attrs:{type:"hidden",name:t.dataName+"["+e.$index+"]["+t.dataKey+"]"},domProps:{value:e.row[t.dataKey]}})]}}])},[a("template",{slot:"header"},[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(e){return t.addRow()}}})],1)],2),t._t("default"),t._l(t.deletedId,(function(e,n){return a("input",{key:n,attrs:{type:"hidden",name:t.dataName+"["+(t.data.length+n)+"][__del__]"},domProps:{value:e}})}))],2)},i=[],d=(a("a434"),{name:"vx-form-table",props:{data:Array,dataKey:String,dataName:{type:String,default:"data"}},data:function(){return{deletedId:[]}},methods:{removeRow:function(t,e){e&&this.deletedId.push(e[this.dataKey]),this.data.splice(t,1)},addRow:function(){this.data.unshift({})}}}),o=d,r=a("2877"),l=Object(r["a"])(o,n,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0aba0b.c43767ff.js.map