(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[810],{7269:function(e,n,t){"use strict";var a;t(4916),t(4723),t(3609).extend(BookReader.defaultOptions,{enableArchiveAnalytics:!0,debugArchiveAnaltyics:!1}),BookReader.prototype.init=(a=BookReader.prototype.init,function(){var e=this;a.call(this),this.options.enableArchiveAnalytics&&this.bind(BookReader.eventNames.fragmentChange,(function(){return e.archiveAnalyticsSendFragmentChange()}))}),BookReader.prototype.archiveAnalyticsSendFragmentChange=function(){if(window.archive_analytics){var e=this.archiveAnalyticsSendFragmentChange.prevFragment,n=this.paramsFromCurrent(),t=this.fragmentFromParams(n);if(e!=t){var a={bookreader:"user_changed_view",itemid:this.bookId,cache_bust:Math.random(),offsite:1,details:0};try{a.offsite=window.top.location.hostname.match(/\.archive.org$/)?0:1,a.details=!a.offsite&&window.top.location.pathname.match(/^\/details\//)?1:0}catch(e){}archive_analytics.send_ping(a,null,"augment_for_ao_site");var i=this.options.lendingInfo&&this.options.lendingInfo.loanId?{loanId:this.options.lendingInfo.loanId}:{};archive_analytics.send_event("BookReader","UserChangedView",window.location.pathname,i),this.archiveAnalyticsSendFragmentChange.prevFragment=t}}},BookReader.prototype.archiveAnalyticsSendEvent=function(e,n,t,a){this.options.enableArchiveAnalytics&&(this.options.debugArchiveAnaltyics&&console.log("archiveAnalyticsSendEvent",arguments,window.archive_analytics),window.archive_analytics&&(a=a||{},"number"==typeof t&&(a.ev=t),window.archive_analytics.send_event(e,n,null,a)))}},4723:function(e,n,t){"use strict";var a=t(7007),i=t(9670),o=t(7466),r=t(4488),s=t(1530),c=t(7651);a("match",1,(function(e,n,t){return[function(n){var t=r(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,t):new RegExp(n)[e](String(t))},function(e){var a=t(n,e,this);if(a.done)return a.value;var r=i(e),l=String(this);if(!r.global)return c(r,l);var h=r.unicode;r.lastIndex=0;for(var d,v=[],u=0;null!==(d=c(r,l));){var f=String(d[0]);v[u]=f,""===f&&(r.lastIndex=s(l,o(r.lastIndex),h)),u++}return 0===u?null:v}]}))}},0,[[7269,898]]]);
//# sourceMappingURL=plugin.archive_analytics.js.map