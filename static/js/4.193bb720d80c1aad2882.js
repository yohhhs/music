webpackJsonp([4],{546:function(t,i,e){function n(t){e(582)}var s=e(8)(e(564),e(594),n,"data-v-548d1039",null);t.exports=s.exports},556:function(t,i,e){"use strict";function n(){var t=r()({},l.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:1664029744});return e.i(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function s(t){var i=r()({},l.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return e.i(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,l.c)}i.b=n,i.a=s;var a=e(82),r=e.n(a),o=e(186),l=e(62)},557:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(63),s=e.n(n),a=e(122),r=e(187),o=e.n(r);i.default={created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},props:{data:{type:Array,default:[]}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},components:{Scroll:s.a,Loading:o.a},methods:{refresh:function(){this.$refs.listview.refresh()},selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var i=e.i(a.b)(t.target,"index"),n=t.touches[0];this.touch.y1=n.pageY,this.touch.anchorIndex=i,this._scrollTo(i)},onShortcutTouchMove:function(t){var i=t.touches[0];this.touch.y2=i.pageY;var e=(this.touch.y2-this.touch.y1)/18|0,n=+this.touch.anchorIndex+e;this._scrollTo(n)},scroll:function(t){this.scrollY=t.y},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0))},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,i=0;this.listHeight.push(i);for(var e=0;e<t.length;e++){i+=t[e].clientHeight,this.listHeight.push(i)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var i=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var e=0;e<i.length-1;e++){var n=i[e],s=i[e+1];if(-t>=n&&-t<s)return this.currentIndex=e,void(this.diff=s+t)}this.currentIndex=i.length-2},diff:function(t){var i=t>0&&t<30?t-30:0;this.fixedTop!==i&&(this.fixedTop=i,this.$refs.fixed.style.transform="translate3d(0,"+i+"px,0)")}}}},564:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(54),s=e.n(n),a=e(556),r=e(62),o=e(191),l=e(587),A=e.n(l),c=e(45),u=e(81);i.default={data:function(){return{singers:[]}},mixins:[u.a],created:function(){this._getSingerList()},methods:s()({handlePlaylist:function(){var t=this.playlist.length>0?"60px":0;this.$refs.singer.style.bottom=t,this.$refs.list.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;e.i(a.b)().then(function(i){i.code===r.a&&(t.singers=t._normalizeSinger(i.data.list))})},_normalizeSinger:function(t){var i={hot:{title:"热门",items:[]}};t.forEach(function(t,e){e<10&&i.hot.items.push(new o.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var n=t.Findex;i[n]||(i[n]={title:n,items:[]}),i[n].items.push(new o.a({id:t.Fsinger_mid,name:t.Fsinger_name}))});var e=[],n=[];for(var s in i){var a=i[s];a.title.match(/[a-zA-z]/)?n.push(a):"热门"===a.title&&e.push(a)}return n.sort(function(t,i){return t.title.charCodeAt(0)-i.title.charCodeAt(0)}),e.concat(n)}},e.i(c.d)({setSinger:"SET_SINGER"})),components:{Listview:A.a}}},568:function(t,i,e){i=t.exports=e(539)(!0),i.push([t.i,".listview[data-v-046b9814]{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.listview .list-group[data-v-046b9814]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-046b9814]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .list-group .list-group-item[data-v-046b9814]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-046b9814]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-046b9814]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut[data-v-046b9814]{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-046b9814]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current[data-v-046b9814]{color:#ffcd32}.listview .list-fixed[data-v-046b9814]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-046b9814]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .loading-container[data-v-046b9814]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["F:/music/src/base/listview/listview.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,wDACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,mCAAoC,AAC5B,2BAA4B,AACpC,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA4B,AAC5B,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,yBAA6B,AAC7B,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"listview.vue",sourcesContent:["\n.listview[data-v-046b9814] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-046b9814] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-046b9814] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-046b9814] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-046b9814] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-046b9814] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-046b9814] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-046b9814] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-046b9814] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-046b9814] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-046b9814] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-046b9814] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},572:function(t,i,e){i=t.exports=e(539)(!0),i.push([t.i,".singer[data-v-548d1039]{position:fixed;top:88px;bottom:0;width:100%}","",{version:3,sources:["F:/music/src/components/singer/singer.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb",file:"singer.vue",sourcesContent:["\n.singer[data-v-548d1039] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}"],sourceRoot:""}])},578:function(t,i,e){var n=e(568);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(540)("21dcf41f",n,!0)},582:function(t,i,e){var n=e(572);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(540)("6ff046e4",n,!0)},587:function(t,i,e){function n(t){e(578)}var s=e(8)(e(557),e(590),n,"data-v-046b9814",null);t.exports=s.exports},590:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[e("ul",t._l(t.data,function(i){return e("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[e("h2",{staticClass:"list-group-title"},[t._v(t._s(i.title))]),t._v(" "),e("ul",t._l(i.items,function(i){return e("li",{staticClass:"list-group-item",on:{click:function(e){t.selectItem(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(i.name))])])}))])})),t._v(" "),e("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchStart,touchmove:function(i){i.stopPropagation(),i.preventDefault(),t.onShortcutTouchMove(i)}}},[e("ul",t._l(t.shortcutList,function(i,n){return e("li",{staticClass:"item",class:{current:t.currentIndex==n},attrs:{"data-index":n}},[t._v("\n        "+t._s(i)+"\n      ")])}))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[e("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[e("loading")],1)])},staticRenderFns:[]}},594:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"singer",staticClass:"singer"},[e("listview",{ref:"list",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),e("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.193bb720d80c1aad2882.js.map