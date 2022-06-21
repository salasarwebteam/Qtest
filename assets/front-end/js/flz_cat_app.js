/*
	Plugin Name: VSlider javascript
	Plugin URI: 
	Description: 
	Version: 2.1
	Author: Modified and improved by ZenNg (freelancer.zenng@gmail.com)
	Author URI: 
	License: GNU
*/
// Pagination for the questions underneath the videos
!function(e){var t={init:function(n){var r=e.extend({items:1,itemsOnPage:1,pages:0,displayedPages:5,edges:2,currentPage:0,useAnchors:!0,hrefTextPrefix:"#page-",hrefTextSuffix:"",prevText:"Prev",nextText:"Next",ellipseText:"&hellip;",ellipsePageSet:!0,cssStyle:"light-theme",listStyle:"",labelMap:[],selectOnClick:!0,nextAtFront:!1,invertPageOrder:!1,useStartEdge:!0,useEndEdge:!0,onPageClick:function(e,t){},onInit:function(){}},n||{}),a=this;return r.pages=r.pages?r.pages:Math.ceil(r.items/r.itemsOnPage)?Math.ceil(r.items/r.itemsOnPage):1,r.currentPage?r.currentPage=r.currentPage-1:r.currentPage=r.invertPageOrder?r.pages-1:0,r.halfDisplayed=r.displayedPages/2,this.each(function(){a.addClass(r.cssStyle+" simple-pagination").data("pagination",r),t._draw.call(a)}),r.onInit(),this},selectPage:function(e){return t._selectPage.call(this,e-1),this},prevPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage<e.pages-1&&t._selectPage.call(this,e.currentPage+1):e.currentPage>0&&t._selectPage.call(this,e.currentPage-1),this},nextPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage>0&&t._selectPage.call(this,e.currentPage-1):e.currentPage<e.pages-1&&t._selectPage.call(this,e.currentPage+1),this},getPagesCount:function(){return this.data("pagination").pages},setPagesCount:function(e){this.data("pagination").pages=e},getCurrentPage:function(){return this.data("pagination").currentPage+1},destroy:function(){return this.empty(),this},drawPage:function(e){var n=this.data("pagination");return n.currentPage=e-1,this.data("pagination",n),t._draw.call(this),this},redraw:function(){return t._draw.call(this),this},disable:function(){var e=this.data("pagination");return e.disabled=!0,this.data("pagination",e),t._draw.call(this),this},enable:function(){var e=this.data("pagination");return e.disabled=!1,this.data("pagination",e),t._draw.call(this),this},updateItems:function(e){var n=this.data("pagination");n.items=e,n.pages=t._getPages(n),this.data("pagination",n),t._draw.call(this)},updateItemsOnPage:function(e){var n=this.data("pagination");return n.itemsOnPage=e,n.pages=t._getPages(n),this.data("pagination",n),t._selectPage.call(this,0),this},getItemsOnPage:function(){return this.data("pagination").itemsOnPage},_draw:function(){var n,r=this.data("pagination"),a=t._getInterval(r);t.destroy.call(this);var i="UL"===("function"==typeof this.prop?this.prop("tagName"):this.attr("tagName"))?this:e("<ul"+(r.listStyle?' class="'+r.listStyle+'"':"")+"></ul>").appendTo(this);if(r.prevText&&t._appendItem.call(this,r.invertPageOrder?r.currentPage+1:r.currentPage-1,{text:r.prevText,classes:"prev"}),r.nextText&&r.nextAtFront&&t._appendItem.call(this,r.invertPageOrder?r.currentPage-1:r.currentPage+1,{text:r.nextText,classes:"next"}),r.invertPageOrder){if(a.end<r.pages&&r.edges>0){if(r.useStartEdge){var o=Math.max(r.pages-r.edges,a.end);for(n=r.pages-1;n>=o;n--)t._appendItem.call(this,n)}r.pages-r.edges>a.end&&r.pages-r.edges-a.end!=1?i.append('<li class="disabled"><span class="ellipse">'+r.ellipseText+"</span></li>"):r.pages-r.edges-a.end==1&&t._appendItem.call(this,a.end)}}else if(a.start>0&&r.edges>0){if(r.useStartEdge){var s=Math.min(r.edges,a.start);for(n=0;n<s;n++)t._appendItem.call(this,n)}r.edges<a.start&&a.start-r.edges!=1?i.append('<li class="disabled"><span class="ellipse">'+r.ellipseText+"</span></li>"):a.start-r.edges==1&&t._appendItem.call(this,r.edges)}if(r.invertPageOrder)for(n=a.end-1;n>=a.start;n--)t._appendItem.call(this,n);else for(n=a.start;n<a.end;n++)t._appendItem.call(this,n);if(r.invertPageOrder){if(a.start>0&&r.edges>0&&(r.edges<a.start&&a.start-r.edges!=1?i.append('<li class="disabled"><span class="ellipse">'+r.ellipseText+"</span></li>"):a.start-r.edges==1&&t._appendItem.call(this,r.edges),r.useEndEdge))for(n=(s=Math.min(r.edges,a.start))-1;n>=0;n--)t._appendItem.call(this,n)}else if(a.end<r.pages&&r.edges>0&&(r.pages-r.edges>a.end&&r.pages-r.edges-a.end!=1?i.append('<li class="disabled"><span class="ellipse">'+r.ellipseText+"</span></li>"):r.pages-r.edges-a.end==1&&t._appendItem.call(this,a.end),r.useEndEdge))for(n=o=Math.max(r.pages-r.edges,a.end);n<r.pages;n++)t._appendItem.call(this,n);r.nextText&&!r.nextAtFront&&t._appendItem.call(this,r.invertPageOrder?r.currentPage-1:r.currentPage+1,{text:r.nextText,classes:"next"}),r.ellipsePageSet&&!r.disabled&&t._ellipseClick.call(this,i)},_getPages:function(e){return Math.ceil(e.items/e.itemsOnPage)||1},_getInterval:function(e){return{start:Math.ceil(e.currentPage>e.halfDisplayed?Math.max(Math.min(e.currentPage-e.halfDisplayed,e.pages-e.displayedPages),0):0),end:Math.ceil(e.currentPage>e.halfDisplayed?Math.min(e.currentPage+e.halfDisplayed,e.pages):Math.min(e.displayedPages,e.pages))}},_appendItem:function(n,r){var a,i,o=this,s=o.data("pagination"),c=e("<li></li>"),l=o.find("ul");a={text:(n=n<0?0:n<s.pages?n:s.pages-1)+1,classes:""},s.labelMap.length&&s.labelMap[n]&&(a.text=s.labelMap[n]),a=e.extend(a,r||{}),n==s.currentPage||s.disabled?(s.disabled||"prev"===a.classes||"next"===a.classes?c.addClass("disabled"):c.addClass("active"),i=e('<span class="current">'+a.text+"</span>")):(i=s.useAnchors?e('<a href="'+s.hrefTextPrefix+(n+1)+s.hrefTextSuffix+'" class="page-link">'+a.text+"</a>"):e("<span >"+a.text+"</span>")).click(function(e){return t._selectPage.call(o,n,e)}),a.classes&&i.addClass(a.classes),c.append(i),l.length?l.append(c):o.append(c)},_selectPage:function(e,n){var r=this.data("pagination");return r.currentPage=e,r.selectOnClick&&t._draw.call(this),r.onPageClick(e+1,n)},_ellipseClick:function(n){var r=this,a=this.data("pagination"),i=n.find(".ellipse");i.addClass("clickable").parent().removeClass("disabled"),i.click(function(n){if(!a.disable){var o=e(this),s=(parseInt(o.parent().prev().text(),10)||0)+1;o.html('<input type="number" min="1" max="'+a.pages+'" step="1" value="'+s+'">').find("input").focus().click(function(e){e.stopPropagation()}).keyup(function(n){var o=e(this).val();13===n.which&&""!==o?o>0&&o<=a.pages&&t._selectPage.call(r,o-1):27===n.which&&i.empty().html(a.ellipseText)}).bind("blur",function(n){var o=e(this).val();return""!==o&&t._selectPage.call(r,o-1),i.empty().html(a.ellipseText),!1})}return!1})}};e.fn.pagination=function(n){return t[n]&&"_"!=n.charAt(0)?t[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?void e.error("Method "+n+" does not exist on jQuery.pagination"):t.init.apply(this,arguments)}}(jQuery),function(e,t){"function"==typeof define&&define.amd?define(e):"undefined"!=typeof module&&"object"==typeof exports?module.exports=e():t.rangy=e()}(function(){var e="object",t="function",n="undefined",r=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],a=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"],i=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],o=["collapse","compareEndPoints","duplicate","moveToElementText","parentElement","select","setEndPoint","getBoundingClientRect"];function s(n,r){var a=typeof n[r];return a==t||!(a!=e||!n[r])||"unknown"==a}function c(t,n){return!(typeof t[n]!=e||!t[n])}function l(e,t){return typeof e[t]!=n}function d(e){return function(t,n){for(var r=n.length;r--;)if(!e(t,n[r]))return!1;return!0}}var f=d(s),u=d(c),h=d(l);function g(e){return e&&f(e,o)&&h(e,i)}function p(e){return c(e,"body")?e.body:e.getElementsByTagName("body")[0]}var m,v,C={},R=typeof window!=n&&typeof document!=n,N={isHostMethod:s,isHostObject:c,isHostProperty:l,areHostMethods:f,areHostObjects:u,areHostProperties:h,isTextRange:g,getBody:p,forEach:[].forEach?function(e,t){e.forEach(t)}:function(e,t){for(var n=0,r=e.length;n<r;++n)t(e[n],n)}},y={version:"1.3.1-dev",initialized:!1,isBrowser:R,supported:!0,util:N,features:{},modules:C,config:{alertOnFail:!1,alertOnWarn:!1,preferTextRange:!1,autoInitialize:typeof rangyAutoInitialize==n||rangyAutoInitialize}};function E(e){typeof console!=n&&s(console,"log")&&console.log(e)}function T(e,t){R&&t?alert(e):E(e)}function S(e){y.initialized=!0,y.supported=!1,T("Rangy is not supported in this environment. Reason: "+e,y.config.alertOnFail)}y.fail=S,y.warn=function(e){T("Rangy warning: "+e,y.config.alertOnWarn)},{}.hasOwnProperty?(N.extend=m=function(e,t,n){var r,a;for(var i in t)t.hasOwnProperty(i)&&(r=e[i],a=t[i],n&&null!==r&&"object"==typeof r&&null!==a&&"object"==typeof a&&m(r,a,!0),e[i]=a);return t.hasOwnProperty("toString")&&(e.toString=t.toString),e},N.createOptions=function(e,t){var n={};return m(n,t),e&&m(n,e),n}):S("hasOwnProperty not supported"),R||S("Rangy can only run in a browser"),function(){var e;if(R){var t=document.createElement("div");t.appendChild(document.createElement("span"));var n=[].slice;try{1==n.call(t.childNodes,0)[0].nodeType&&(e=function(e){return n.call(e,0)})}catch(e){}}e||(e=function(e){for(var t=[],n=0,r=e.length;n<r;++n)t[n]=e[n];return t}),N.toArray=e}(),R&&(s(document,"addEventListener")?v=function(e,t,n){e.addEventListener(t,n,!1)}:s(document,"attachEvent")?v=function(e,t,n){e.attachEvent("on"+t,n)}:S("Document does not have required addEventListener or attachEvent method"),N.addListener=v);var w=[];function O(e){return e.message||e.description||String(e)}function x(){if(R&&!y.initialized){var e,t=!1,n=!1;s(document,"createRange")&&(e=document.createRange(),f(e,a)&&h(e,r)&&(t=!0));var i=p(document);if(i&&"body"==i.nodeName.toLowerCase())if(i&&s(i,"createTextRange")&&g(e=i.createTextRange())&&(n=!0),t||n){var o;for(var c in y.initialized=!0,y.features={implementsDomRange:t,implementsTextRange:n},C)(o=C[c])instanceof b&&o.init(o,y);for(var l=0,d=w.length;l<d;++l)try{w[l](y)}catch(e){E("Rangy init listener threw an exception. Continuing. Detail: "+O(e))}}else S("Neither Range nor TextRange are available");else S("No body element found")}}function A(e,t,n){n&&(e+=" in module "+n.name),y.warn("DEPRECATED: "+e+" is deprecated. Please use "+t+" instead.")}function P(e,t,n,r){e[t]=function(){return A(t,n,r),e[n].apply(e,N.toArray(arguments))}}N.deprecationNotice=A,N.createAliasForDeprecatedMethod=P,y.init=x,y.addInitListener=function(e){y.initialized?e(y):w.push(e)};var _=[];function b(e,t,n){this.name=e,this.dependencies=t,this.initialized=!1,this.supported=!1,this.initializer=n}function D(e,t,n){var r=new b(e,t,function(t){if(!t.initialized){t.initialized=!0;try{n(y,t),t.supported=!0}catch(t){E("Module '"+e+"' failed to load: "+O(t)),t.stack&&E(t.stack)}}});return C[e]=r,r}function I(){}y.addShimListener=function(e){_.push(e)},R&&(y.shim=y.createMissingNativeApi=function(e){e=e||window,x();for(var t=0,n=_.length;t<n;++t)_[t](e)},P(y,"createMissingNativeApi","shim")),b.prototype={init:function(){for(var e,t,n=this.dependencies||[],r=0,a=n.length;r<a;++r){if(t=n[r],!((e=C[t])&&e instanceof b))throw new Error("required module '"+t+"' not found");if(e.init(),!e.supported)throw new Error("required module '"+t+"' not supported")}this.initializer(this)},fail:function(e){throw this.initialized=!0,this.supported=!1,new Error(e)},warn:function(e){y.warn("Module "+this.name+": "+e)},deprecationNotice:function(e,t){y.warn("DEPRECATED: "+e+" in module "+this.name+" is deprecated. Please use "+t+" instead")},createError:function(e){return new Error("Error in Rangy "+this.name+" module: "+e)}},y.createModule=function(e){var t,n;2==arguments.length?(t=arguments[1],n=[]):(t=arguments[2],n=arguments[1]);var r=D(e,n,t);y.initialized&&y.supported&&r.init()},y.createCoreModule=function(e,t,n){D(e,t,n)},y.RangePrototype=I,y.rangePrototype=new I,y.selectionPrototype=new function(){},y.createCoreModule("DomUtil",[],function(e,t){var n="undefined",r=e.util,a=r.getBody;r.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||t.fail("document missing a Node creation method"),r.isHostMethod(document,"getElementsByTagName")||t.fail("document missing getElementsByTagName method");var i=document.createElement("div");r.areHostMethods(i,["insertBefore","appendChild","cloneNode"]||!r.areHostObjects(i,["previousSibling","nextSibling","childNodes","parentNode"]))||t.fail("Incomplete Element implementation"),r.isHostProperty(i,"innerHTML")||t.fail("Element is missing innerHTML property");var o=document.createTextNode("test");r.areHostMethods(o,["splitText","deleteData","insertData","appendData","cloneNode"]||!r.areHostObjects(i,["previousSibling","nextSibling","childNodes","parentNode"])||!r.areHostProperties(o,["data"]))||t.fail("Incomplete Text Node implementation");var s=function(e,t){for(var n=e.length;n--;)if(e[n]===t)return!0;return!1};function c(e){for(var t=0;e=e.previousSibling;)++t;return t}function l(e,t){var n,r=[];for(n=e;n;n=n.parentNode)r.push(n);for(n=t;n;n=n.parentNode)if(s(r,n))return n;return null}function d(e,t,n){for(var r=n?t:t.parentNode;r;){if(r===e)return!0;r=r.parentNode}return!1}function f(e,t,n){for(var r,a=n?e:e.parentNode;a;){if((r=a.parentNode)===t)return a;a=r}return null}function u(e){var t=e.nodeType;return 3==t||4==t||8==t}function h(e,t){var n=t.nextSibling,r=t.parentNode;return n?r.insertBefore(e,n):r.appendChild(e),e}function g(e){if(9==e.nodeType)return e;if(typeof e.ownerDocument!=n)return e.ownerDocument;if(typeof e.document!=n)return e.document;if(e.parentNode)return g(e.parentNode);throw t.createError("getDocument: no document found for node")}function p(e){var r=g(e);if(typeof r.defaultView!=n)return r.defaultView;if(typeof r.parentWindow!=n)return r.parentWindow;throw t.createError("Cannot get a window object for node")}function m(e){if(typeof e.contentDocument!=n)return e.contentDocument;if(typeof e.contentWindow!=n)return e.contentWindow.document;throw t.createError("getIframeDocument: No Document object found for iframe element")}function v(e){return e&&r.isHostMethod(e,"setTimeout")&&r.isHostObject(e,"document")}var C,R=!1;function N(e){try{return e.parentNode,!1}catch(e){return!0}}function y(e){if(!e)return"[No node]";if(R&&N(e))return"[Broken node]";if(u(e))return'"'+e.data+'"';if(1==e.nodeType){var t=e.id?' id="'+e.id+'"':"";return"<"+e.nodeName+t+">[index:"+c(e)+",length:"+e.childNodes.length+"]["+(e.innerHTML||"[innerHTML not supported]").slice(0,25)+"]"}return e.nodeName}function E(e){this.root=e,this._next=e}function T(e,t){this.node=e,this.offset=t}function S(e){this.code=this[e],this.codeName=e,this.message="DOMException: "+this.codeName}!function(){var t=document.createElement("b");t.innerHTML="1";var n=t.firstChild;t.innerHTML="<br />",R=N(n),e.features.crashyTextNodes=R}(),typeof window.getComputedStyle!=n?C=function(e,t){return p(e).getComputedStyle(e,null)[t]}:typeof document.documentElement.currentStyle!=n?C=function(e,t){return e.currentStyle?e.currentStyle[t]:""}:t.fail("No means of obtaining computed style properties found"),E.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var e,t,n=this._current=this._next;if(this._current)if(e=n.firstChild)this._next=e;else{for(t=null;n!==this.root&&!(t=n.nextSibling);)n=n.parentNode;this._next=t}return this._current},detach:function(){this._current=this._next=this.root=null}},T.prototype={equals:function(e){return!!e&&this.node===e.node&&this.offset==e.offset},inspect:function(){return"[DomPosition("+y(this.node)+":"+this.offset+")]"},toString:function(){return this.inspect()}},S.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11,INVALID_NODE_TYPE_ERR:24},S.prototype.toString=function(){return this.message},e.dom={arrayContains:s,isHtmlNamespace:function(e){var t;return typeof e.namespaceURI==n||null===(t=e.namespaceURI)||"http://www.w3.org/1999/xhtml"==t},parentElement:function(e){var t=e.parentNode;return 1==t.nodeType?t:null},getNodeIndex:c,getNodeLength:function(e){switch(e.nodeType){case 7:case 10:return 0;case 3:case 8:return e.length;default:return e.childNodes.length}},getCommonAncestor:l,isAncestorOf:d,isOrIsAncestorOf:function(e,t){return d(e,t,!0)},getClosestAncestorIn:f,isCharacterDataNode:u,isTextOrCommentNode:function(e){if(!e)return!1;var t=e.nodeType;return 3==t||8==t},insertAfter:h,splitDataNode:function(e,t,n){var r=e.cloneNode(!1);if(r.deleteData(0,t),e.deleteData(t,e.length-t),h(r,e),n)for(var a,i=0;a=n[i++];)a.node==e&&a.offset>t?(a.node=r,a.offset-=t):a.node==e.parentNode&&a.offset>c(e)&&++a.offset;return r},getDocument:g,getWindow:p,getIframeWindow:function(e){if(typeof e.contentWindow!=n)return e.contentWindow;if(typeof e.contentDocument!=n)return e.contentDocument.defaultView;throw t.createError("getIframeWindow: No Window object found for iframe element")},getIframeDocument:m,getBody:a,isWindow:v,getContentDocument:function(e,t,n){var a;if(e?r.isHostProperty(e,"nodeType")?a=1==e.nodeType&&"iframe"==e.tagName.toLowerCase()?m(e):g(e):v(e)&&(a=e.document):a=document,!a)throw t.createError(n+"(): Parameter must be a Window object or DOM node");return a},getRootContainer:function(e){for(var t;t=e.parentNode;)e=t;return e},comparePoints:function(e,n,r,a){var i,o,s,d,u;if(e==r)return n===a?0:n<a?-1:1;if(i=f(r,e,!0))return n<=c(i)?-1:1;if(i=f(e,r,!0))return c(i)<a?-1:1;if(!(o=l(e,r)))throw new Error("comparePoints error: nodes have no common ancestor");if((s=e===o?o:f(e,o,!0))===(d=r===o?o:f(r,o,!0)))throw t.createError("comparePoints got to case 4 and childA and childB are the same!");for(u=o.firstChild;u;){if(u===s)return-1;if(u===d)return 1;u=u.nextSibling}},isBrokenNode:N,inspectNode:y,getComputedStyleProperty:C,createTestElement:function(e,t,n){var r=a(e),i=e.createElement("div");i.contentEditable=""+!!n,t&&(i.innerHTML=t);var o=r.firstChild;return o?r.insertBefore(i,o):r.appendChild(i),i},removeNode:function(e){return e.parentNode.removeChild(e)},fragmentFromNodeChildren:function(e){for(var t,n=g(e).createDocumentFragment();t=e.firstChild;)n.appendChild(t);return n},createIterator:function(e){return new E(e)},DomPosition:T},e.DOMException=S}),y.createCoreModule("DomRange",["DomUtil"],function(e,t){var n=e.dom,r=e.util,a=n.DomPosition,i=e.DOMException,o=n.isCharacterDataNode,s=n.getNodeIndex,c=n.isOrIsAncestorOf,l=n.getDocument,d=n.comparePoints,f=n.splitDataNode,u=n.getClosestAncestorIn,h=n.getNodeLength,g=n.arrayContains,p=n.getRootContainer,m=e.features.crashyTextNodes,v=n.removeNode;function C(e,t){return 3!=e.nodeType&&(c(e,t.startContainer)||c(e,t.endContainer))}function R(e){return e.document||l(e.startContainer)}function N(e){return new a(e.parentNode,s(e))}function y(e){return new a(e.parentNode,s(e)+1)}function E(e,t,r){var a=11==e.nodeType?e.firstChild:e;return o(t)?r==t.length?n.insertAfter(e,t):t.parentNode.insertBefore(e,0==r?t:f(t,r)):r>=t.childNodes.length?t.appendChild(e):t.insertBefore(e,t.childNodes[r]),a}function T(e,t,n){if(q(e),q(t),R(t)!=R(e))throw new i("WRONG_DOCUMENT_ERR");var r=d(e.startContainer,e.startOffset,t.endContainer,t.endOffset),a=d(e.endContainer,e.endOffset,t.startContainer,t.startOffset);return n?r<=0&&a>=0:r<0&&a>0}function S(e,t,r){var a,i,o,s;for(r=r||{stop:!1};o=e.next();)if(e.isPartiallySelectedSubtree()){if(!1===t(o))return void(r.stop=!0);if(S(s=e.getSubtreeIterator(),t,r),s.detach(),r.stop)return}else for(a=n.createIterator(o);i=a.next();)if(!1===t(i))return void(r.stop=!0)}function w(e){for(var t;e.next();)e.isPartiallySelectedSubtree()?(w(t=e.getSubtreeIterator()),t.detach()):e.remove()}function O(e){for(var t,n,r=R(e.range).createDocumentFragment();t=e.next();){if(e.isPartiallySelectedSubtree()?(t=t.cloneNode(!1),n=e.getSubtreeIterator(),t.appendChild(O(n)),n.detach()):e.remove(),10==t.nodeType)throw new i("HIERARCHY_REQUEST_ERR");r.appendChild(t)}return r}function x(e){return"["+(void 0===e.getName?"Range":e.getName())+"("+n.inspectNode(e.startContainer)+":"+e.startOffset+", "+n.inspectNode(e.endContainer)+":"+e.endOffset+")]"}function A(e,t){if(this.range=e,this.clonePartiallySelectedTextNodes=t,!e.collapsed){this.sc=e.startContainer,this.so=e.startOffset,this.ec=e.endContainer,this.eo=e.endOffset;var n=e.commonAncestorContainer;this.sc===this.ec&&o(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc!==n||o(this.sc)?u(this.sc,n,!0):this.sc.childNodes[this.so],this._last=this.ec!==n||o(this.ec)?u(this.ec,n,!0):this.ec.childNodes[this.eo-1])}}A.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._next=this._first},hasNext:function(){return!!this._next},next:function(){var e=this._current=this._next;return e&&(this._next=e!==this._last?e.nextSibling:null,o(e)&&this.clonePartiallySelectedTextNodes&&(e===this.ec&&(e=e.cloneNode(!0)).deleteData(this.eo,e.length-this.eo),this._current===this.sc&&(e=e.cloneNode(!0)).deleteData(0,this.so))),e},remove:function(){var e,t,n=this._current;!o(n)||n!==this.sc&&n!==this.ec?n.parentNode&&v(n):(e=n===this.sc?this.so:0)!=(t=n===this.ec?this.eo:n.length)&&n.deleteData(e,t-e)},isPartiallySelectedSubtree:function(){return C(this._current,this.range)},getSubtreeIterator:function(){var e;if(this.isSingleCharacterDataNode)(e=this.range.cloneRange()).collapse(!1);else{e=new ue(R(this.range));var t=this._current,n=t,r=0,a=t,i=h(t);c(t,this.sc)&&(n=this.sc,r=this.so),c(t,this.ec)&&(a=this.ec,i=this.eo),fe(e,n,r,a,i)}return new A(e,this.clonePartiallySelectedTextNodes)},detach:function(){this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}};var P=[1,3,4,5,7,8,10],_=[2,9,11],b=[1,3,4,5,7,8,10,11],D=[1,3,4,5,7,8];function I(e){return function(t,n){for(var r,a=n?t:t.parentNode;a;){if(r=a.nodeType,g(e,r))return a;a=a.parentNode}return null}}var M=I([9,11]),H=I([5,6,10,12]),B=I([6,10,12]);function L(e,t){if(B(e,t))throw new i("INVALID_NODE_TYPE_ERR")}function W(e,t){if(!g(t,e.nodeType))throw new i("INVALID_NODE_TYPE_ERR")}function k(e,t){if(t<0||t>(o(e)?e.length:e.childNodes.length))throw new i("INDEX_SIZE_ERR")}function F(e,t){if(M(e,!0)!==M(t,!0))throw new i("WRONG_DOCUMENT_ERR")}function j(e){if(H(e,!0))throw new i("NO_MODIFICATION_ALLOWED_ERR")}function z(e,t){if(!e)throw new i(t)}function U(e,t){return t<=(o(e)?e.length:e.childNodes.length)}function V(e){return!!e.startContainer&&!!e.endContainer&&!(m&&(n.isBrokenNode(e.startContainer)||n.isBrokenNode(e.endContainer)))&&p(e.startContainer)==p(e.endContainer)&&U(e.startContainer,e.startOffset)&&U(e.endContainer,e.endOffset)}function q(e){if(!V(e))throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: ("+e.inspect()+")")}var Y=document.createElement("style"),Q=!1;try{Y.innerHTML="<b>x</b>",Q=3==Y.firstChild.nodeType}catch(e){}e.features.htmlParsingConforms=Q;var $=Q?function(e){var t=this.startContainer,r=l(t);if(!t)throw new i("INVALID_STATE_ERR");var a=null;return 1==t.nodeType?a=t:o(t)&&(a=n.parentElement(t)),(a=null===a||"HTML"==a.nodeName&&n.isHtmlNamespace(l(a).documentElement)&&n.isHtmlNamespace(a)?r.createElement("body"):a.cloneNode(!1)).innerHTML=e,n.fragmentFromNodeChildren(a)}:function(e){var t=R(this).createElement("body");return t.innerHTML=e,n.fragmentFromNodeChildren(t)};function G(e,t){q(e);var n=e.startContainer,r=e.startOffset,a=e.endContainer,i=e.endOffset,c=n===a;o(a)&&i>0&&i<a.length&&f(a,i,t),o(n)&&r>0&&r<n.length&&(n=f(n,r,t),c?(i-=r,a=n):a==n.parentNode&&i>=s(n)&&i++,r=0),e.setStartAndEnd(n,r,a,i)}function X(e){q(e);var t=e.commonAncestorContainer.parentNode.cloneNode(!1);return t.appendChild(e.cloneContents()),t.innerHTML}var Z=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],J=0,K=1,ee=2,te=3,ne=0,re=1,ae=2,ie=3;function oe(e){e.START_TO_START=J,e.START_TO_END=K,e.END_TO_END=ee,e.END_TO_START=te,e.NODE_BEFORE=ne,e.NODE_AFTER=re,e.NODE_BEFORE_AND_AFTER=ae,e.NODE_INSIDE=ie}function se(e){oe(e),oe(e.prototype)}function ce(e,t){return function(){q(this);var n,r=this.startContainer,a=this.startOffset,i=this.commonAncestorContainer,o=new A(this,!0);r!==i&&(r=(n=y(u(r,i,!0))).node,a=n.offset),S(o,j),o.reset();var s=e(o);return o.detach(),t(this,r,a,r,a),s}}function le(t,n){function a(e,t){return function(n){W(n,P),W(p(n),_);var r=(e?N:y)(n);(t?i:c)(this,r.node,r.offset)}}function i(e,t,r){var a=e.endContainer,i=e.endOffset;t===e.startContainer&&r===e.startOffset||(p(t)==p(a)&&1!=d(t,r,a,i)||(a=t,i=r),n(e,t,r,a,i))}function c(e,t,r){var a=e.startContainer,i=e.startOffset;t===e.endContainer&&r===e.endOffset||(p(t)==p(a)&&-1!=d(t,r,a,i)||(a=t,i=r),n(e,a,i,t,r))}var l=function(){};l.prototype=e.rangePrototype,t.prototype=new l,r.extend(t.prototype,{setStart:function(e,t){L(e,!0),k(e,t),i(this,e,t)},setEnd:function(e,t){L(e,!0),k(e,t),c(this,e,t)},setStartAndEnd:function(){var e=arguments,t=e[0],r=e[1],a=t,i=r;switch(e.length){case 3:i=e[2];break;case 4:a=e[2],i=e[3]}n(this,t,r,a,i)},setBoundary:function(e,t,n){this["set"+(n?"Start":"End")](e,t)},setStartBefore:a(!0,!0),setStartAfter:a(!1,!0),setEndBefore:a(!0,!1),setEndAfter:a(!1,!1),collapse:function(e){q(this),e?n(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):n(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(e){L(e,!0),n(this,e,0,e,h(e))},selectNode:function(e){L(e,!1),W(e,P);var t=N(e),r=y(e);n(this,t.node,t.offset,r.node,r.offset)},extractContents:ce(O,n),deleteContents:ce(w,n),canSurroundContents:function(){q(this),j(this.startContainer),j(this.endContainer);var e=new A(this,!0),t=e._first&&C(e._first,this)||e._last&&C(e._last,this);return e.detach(),!t},splitBoundaries:function(){G(this)},splitBoundariesPreservingPositions:function(e){G(this,e)},normalizeBoundaries:function(){q(this);var e,t=this.startContainer,r=this.startOffset,a=this.endContainer,i=this.endOffset,c=function(e){var t=e.nextSibling;t&&t.nodeType==e.nodeType&&(a=e,i=e.length,e.appendData(t.data),v(t))},l=function(e){var n=e.previousSibling;if(n&&n.nodeType==e.nodeType){t=e;var o=e.length;if(r=n.length,e.insertData(0,n.data),v(n),t==a)i+=r,a=t;else if(a==e.parentNode){var c=s(e);i==c?(a=e,i=o):i>c&&i--}}},d=!0;if(o(a))i==a.length?c(a):0==i&&(e=a.previousSibling)&&e.nodeType==a.nodeType&&(i=e.length,t==a&&(d=!1),e.appendData(a.data),v(a),a=e);else{if(i>0){var f=a.childNodes[i-1];f&&o(f)&&c(f)}d=!this.collapsed}if(d){if(o(t))0==r?l(t):r==t.length&&(e=t.nextSibling)&&e.nodeType==t.nodeType&&(a==e&&(a=t,i+=t.length),t.appendData(e.data),v(e));else if(r<t.childNodes.length){var u=t.childNodes[r];u&&o(u)&&l(u)}}else t=a,r=i;n(this,t,r,a,i)},collapseToPoint:function(e,t){L(e,!0),k(e,t),this.setStartAndEnd(e,t)}}),se(t)}function de(e){e.collapsed=e.startContainer===e.endContainer&&e.startOffset===e.endOffset,e.commonAncestorContainer=e.collapsed?e.startContainer:n.getCommonAncestor(e.startContainer,e.endContainer)}function fe(e,t,r,a,i){e.startContainer=t,e.startOffset=r,e.endContainer=a,e.endOffset=i,e.document=n.getDocument(t),de(e)}function ue(e){this.startContainer=e,this.startOffset=0,this.endContainer=e,this.endOffset=0,this.document=e,de(this)}r.extend(e.rangePrototype,{compareBoundaryPoints:function(e,t){var n,r,a,i;q(this),F(this.startContainer,t.startContainer);var o=e==te||e==J?"start":"end",s=e==K||e==J?"start":"end";return n=this[o+"Container"],r=this[o+"Offset"],a=t[s+"Container"],i=t[s+"Offset"],d(n,r,a,i)},insertNode:function(e){if(q(this),W(e,b),j(this.startContainer),c(e,this.startContainer))throw new i("HIERARCHY_REQUEST_ERR");var t=E(e,this.startContainer,this.startOffset);this.setStartBefore(t)},cloneContents:function(){var e,t;if(q(this),this.collapsed)return R(this).createDocumentFragment();if(this.startContainer===this.endContainer&&o(this.startContainer))return(e=this.startContainer.cloneNode(!0)).data=e.data.slice(this.startOffset,this.endOffset),(t=R(this).createDocumentFragment()).appendChild(e),t;var n=new A(this,!0);return e=function e(t){for(var n,r,a,o=R(t.range).createDocumentFragment();r=t.next();){if(n=t.isPartiallySelectedSubtree(),r=r.cloneNode(!n),n&&(a=t.getSubtreeIterator(),r.appendChild(e(a)),a.detach()),10==r.nodeType)throw new i("HIERARCHY_REQUEST_ERR");o.appendChild(r)}return o}(n),n.detach(),e},canSurroundContents:function(){q(this),j(this.startContainer),j(this.endContainer);var e=new A(this,!0),t=e._first&&C(e._first,this)||e._last&&C(e._last,this);return e.detach(),!t},surroundContents:function(e){if(W(e,D),!this.canSurroundContents())throw new i("INVALID_STATE_ERR");var t=this.extractContents();if(e.hasChildNodes())for(;e.lastChild;)e.removeChild(e.lastChild);E(e,this.startContainer,this.startOffset),e.appendChild(t),this.selectNode(e)},cloneRange:function(){q(this);for(var e,t=new ue(R(this)),n=Z.length;n--;)t[e=Z[n]]=this[e];return t},toString:function(){q(this);var e=this.startContainer;if(e===this.endContainer&&o(e))return 3==e.nodeType||4==e.nodeType?e.data.slice(this.startOffset,this.endOffset):"";var t=[],n=new A(this,!0);return S(n,function(e){3!=e.nodeType&&4!=e.nodeType||t.push(e.data)}),n.detach(),t.join("")},compareNode:function(e){q(this);var t=e.parentNode,n=s(e);if(!t)throw new i("NOT_FOUND_ERR");var r=this.comparePoint(t,n),a=this.comparePoint(t,n+1);return r<0?a>0?ae:ne:a>0?re:ie},comparePoint:function(e,t){return q(this),z(e,"HIERARCHY_REQUEST_ERR"),F(e,this.startContainer),d(e,t,this.startContainer,this.startOffset)<0?-1:d(e,t,this.endContainer,this.endOffset)>0?1:0},createContextualFragment:$,toHtml:function(){return X(this)},intersectsNode:function(e,t){if(q(this),p(e)!=p(this.startContainer))return!1;var n=e.parentNode,r=s(e);if(!n)return!0;var a=d(n,r,this.endContainer,this.endOffset),i=d(n,r+1,this.startContainer,this.startOffset);return t?a<=0&&i>=0:a<0&&i>0},isPointInRange:function(e,t){return q(this),z(e,"HIERARCHY_REQUEST_ERR"),F(e,this.startContainer),d(e,t,this.startContainer,this.startOffset)>=0&&d(e,t,this.endContainer,this.endOffset)<=0},intersectsRange:function(e){return T(this,e,!1)},intersectsOrTouchesRange:function(e){return T(this,e,!0)},intersection:function(e){if(this.intersectsRange(e)){var t=d(this.startContainer,this.startOffset,e.startContainer,e.startOffset),n=d(this.endContainer,this.endOffset,e.endContainer,e.endOffset),r=this.cloneRange();return-1==t&&r.setStart(e.startContainer,e.startOffset),1==n&&r.setEnd(e.endContainer,e.endOffset),r}return null},union:function(e){if(this.intersectsOrTouchesRange(e)){var t=this.cloneRange();return-1==d(e.startContainer,e.startOffset,this.startContainer,this.startOffset)&&t.setStart(e.startContainer,e.startOffset),1==d(e.endContainer,e.endOffset,this.endContainer,this.endOffset)&&t.setEnd(e.endContainer,e.endOffset),t}throw new i("Ranges do not intersect")},containsNode:function(e,t){return t?this.intersectsNode(e,!1):this.compareNode(e)==ie},containsNodeContents:function(e){return this.comparePoint(e,0)>=0&&this.comparePoint(e,h(e))<=0},containsRange:function(e){var t=this.intersection(e);return null!==t&&e.equals(t)},containsNodeText:function(e){var t=this.cloneRange();t.selectNode(e);var n=t.getNodes([3]);if(n.length>0){t.setStart(n[0],0);var r=n.pop();return t.setEnd(r,r.length),this.containsRange(t)}return this.containsNodeContents(e)},getNodes:function(e,t){return q(this),function(e,t,n){var r,a=!(!t||!t.length),i=!!n;a&&(r=new RegExp("^("+t.join("|")+")$"));var s=[];return S(new A(e,!1),function(t){if((!a||r.test(t.nodeType))&&(!i||n(t))){var c=e.startContainer;if(t!=c||!o(c)||e.startOffset!=c.length){var l=e.endContainer;t==l&&o(l)&&0==e.endOffset||s.push(t)}}}),s}(this,e,t)},getDocument:function(){return R(this)},collapseBefore:function(e){this.setEndBefore(e),this.collapse(!1)},collapseAfter:function(e){this.setStartAfter(e),this.collapse(!0)},getBookmark:function(t){var r=R(this),a=e.createRange(r);t=t||n.getBody(r),a.selectNodeContents(t);var i=this.intersection(a),o=0,s=0;return i&&(a.setEnd(i.startContainer,i.startOffset),s=(o=a.toString().length)+i.toString().length),{start:o,end:s,containerNode:t}},moveToBookmark:function(e){var t=e.containerNode,n=0;this.setStart(t,0),this.collapse(!0);for(var r,a,i,o,s=[t],c=!1,l=!1;!l&&(r=s.pop());)if(3==r.nodeType)a=n+r.length,!c&&e.start>=n&&e.start<=a&&(this.setStart(r,e.start-n),c=!0),c&&e.end>=n&&e.end<=a&&(this.setEnd(r,e.end-n),l=!0),n=a;else for(i=(o=r.childNodes).length;i--;)s.push(o[i])},getName:function(){return"DomRange"},equals:function(e){return ue.rangesEqual(this,e)},isValid:function(){return V(this)},inspect:function(){return x(this)},detach:function(){}}),le(ue,fe),r.extend(ue,{rangeProperties:Z,RangeIterator:A,copyComparisonConstants:se,createPrototypeRange:le,inspect:x,toHtml:X,getRangeDocument:R,rangesEqual:function(e,t){return e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset}}),e.DomRange=ue}),y.createCoreModule("WrappedRange",["DomRange"],function(e,t){var n,r,a=e.dom,i=e.util,o=a.DomPosition,s=e.DomRange,c=a.getBody,l=a.getContentDocument,d=a.isCharacterDataNode;if(e.features.implementsDomRange&&function(){var r,o,d=s.rangeProperties;function f(e){for(var t,n=d.length;n--;)e[t=d[n]]=e.nativeRange[t];e.collapsed=e.startContainer===e.endContainer&&e.startOffset===e.endOffset}n=function(e){if(!e)throw t.createError("WrappedRange: Range must be specified");this.nativeRange=e,f(this)},s.createPrototypeRange(n,function(e,t,n,r,a){var i=e.startContainer!==t||e.startOffset!=n,o=e.endContainer!==r||e.endOffset!=a,s=!e.equals(e.nativeRange);(i||o||s)&&(e.setEnd(r,a),e.setStart(t,n))}),(r=n.prototype).selectNode=function(e){this.nativeRange.selectNode(e),f(this)},r.cloneContents=function(){return this.nativeRange.cloneContents()},r.surroundContents=function(e){this.nativeRange.surroundContents(e),f(this)},r.collapse=function(e){this.nativeRange.collapse(e),f(this)},r.cloneRange=function(){return new n(this.nativeRange.cloneRange())},r.refresh=function(){f(this)},r.toString=function(){return this.nativeRange.toString()};var u=document.createTextNode("test");c(document).appendChild(u);var h=document.createRange();h.setStart(u,0),h.setEnd(u,0);try{h.setStart(u,1),r.setStart=function(e,t){this.nativeRange.setStart(e,t),f(this)},r.setEnd=function(e,t){this.nativeRange.setEnd(e,t),f(this)},o=function(e){return function(t){this.nativeRange[e](t),f(this)}}}catch(e){r.setStart=function(e,t){try{this.nativeRange.setStart(e,t)}catch(n){this.nativeRange.setEnd(e,t),this.nativeRange.setStart(e,t)}f(this)},r.setEnd=function(e,t){try{this.nativeRange.setEnd(e,t)}catch(n){this.nativeRange.setStart(e,t),this.nativeRange.setEnd(e,t)}f(this)},o=function(e,t){return function(n){try{this.nativeRange[e](n)}catch(r){this.nativeRange[t](n),this.nativeRange[e](n)}f(this)}}}r.setStartBefore=o("setStartBefore","setEndBefore"),r.setStartAfter=o("setStartAfter","setEndAfter"),r.setEndBefore=o("setEndBefore","setStartBefore"),r.setEndAfter=o("setEndAfter","setStartAfter"),r.selectNodeContents=function(e){this.setStartAndEnd(e,0,a.getNodeLength(e))},h.selectNodeContents(u),h.setEnd(u,3);var g=document.createRange();g.selectNodeContents(u),g.setEnd(u,4),g.setStart(u,2),-1==h.compareBoundaryPoints(h.START_TO_END,g)&&1==h.compareBoundaryPoints(h.END_TO_START,g)?r.compareBoundaryPoints=function(e,t){return e==(t=t.nativeRange||t).START_TO_END?e=t.END_TO_START:e==t.END_TO_START&&(e=t.START_TO_END),this.nativeRange.compareBoundaryPoints(e,t)}:r.compareBoundaryPoints=function(e,t){return this.nativeRange.compareBoundaryPoints(e,t.nativeRange||t)};var p=document.createElement("div");p.innerHTML="123";var m=p.firstChild,v=c(document);v.appendChild(p),h.setStart(m,1),h.setEnd(m,2),h.deleteContents(),"13"==m.data&&(r.deleteContents=function(){this.nativeRange.deleteContents(),f(this)},r.extractContents=function(){var e=this.nativeRange.extractContents();return f(this),e}),v.removeChild(p),v=null,i.isHostMethod(h,"createContextualFragment")&&(r.createContextualFragment=function(e){return this.nativeRange.createContextualFragment(e)}),c(document).removeChild(u),r.getName=function(){return"WrappedRange"},e.WrappedRange=n,e.createNativeRange=function(e){return(e=l(e,t,"createNativeRange")).createRange()}}(),e.features.implementsTextRange){var f=function(e,t,n,r,i){var s=e.duplicate();s.collapse(n);var c=s.parentElement();if(a.isOrIsAncestorOf(t,c)||(c=t),!c.canHaveHTML){var l=new o(c.parentNode,a.getNodeIndex(c));return{boundaryPosition:l,nodeInfo:{nodeIndex:l.offset,containerElement:l.node}}}var f=a.getDocument(c).createElement("span");f.parentNode&&a.removeNode(f);for(var u,h,g,p,m,v=n?"StartToStart":"StartToEnd",C=i&&i.containerElement==c?i.nodeIndex:0,R=c.childNodes.length,N=R,y=N;y==R?c.appendChild(f):c.insertBefore(f,c.childNodes[y]),s.moveToElementText(f),0!=(u=s.compareEndPoints(v,e))&&C!=N;){if(-1==u){if(N==C+1)break;C=y}else N=N==C+1?C:y;y=Math.floor((C+N)/2),c.removeChild(f)}if(m=f.nextSibling,-1==u&&m&&d(m)){var E;if(s.setEndPoint(n?"EndToStart":"EndToEnd",e),/[\r\n]/.test(m.data)){var T=s.duplicate(),S=T.text.replace(/\r\n/g,"\r").length;for(E=T.moveStart("character",S);-1==(u=T.compareEndPoints("StartToEnd",T));)E++,T.moveStart("character",1)}else E=s.text.length;p=new o(m,E)}else h=(r||!n)&&f.previousSibling,p=(g=(r||n)&&f.nextSibling)&&d(g)?new o(g,0):h&&d(h)?new o(h,h.data.length):new o(c,a.getNodeIndex(f));return a.removeNode(f),{boundaryPosition:p,nodeInfo:{nodeIndex:y,containerElement:c}}},u=function(e,t){var n,r,i,o,s=e.offset,l=a.getDocument(e.node),f=c(l).createTextRange(),u=d(e.node);return u?r=(n=e.node).parentNode:(n=s<(o=e.node.childNodes).length?o[s]:null,r=e.node),(i=l.createElement("span")).innerHTML="&#feff;",n?r.insertBefore(i,n):r.appendChild(i),f.moveToElementText(i),f.collapse(!t),r.removeChild(i),u&&f[t?"moveStart":"moveEnd"]("character",s),f};((r=function(e){this.textRange=e,this.refresh()}).prototype=new s(document)).refresh=function(){var e,t,n,r,i=function(e){var t=e.parentElement(),n=e.duplicate();n.collapse(!0);var r=n.parentElement();(n=e.duplicate()).collapse(!1);var i=n.parentElement(),o=r==i?r:a.getCommonAncestor(r,i);return o==t?o:a.getCommonAncestor(t,o)}(this.textRange);0==(r=this.textRange).compareEndPoints("StartToEnd",r)?t=e=f(this.textRange,i,!0,!0).boundaryPosition:(e=(n=f(this.textRange,i,!0,!1)).boundaryPosition,t=f(this.textRange,i,!1,!1,n.nodeInfo).boundaryPosition),this.setStart(e.node,e.offset),this.setEnd(t.node,t.offset)},r.prototype.getName=function(){return"WrappedTextRange"},s.copyComparisonConstants(r);var h=function(e){if(e.collapsed)return u(new o(e.startContainer,e.startOffset),!0);var t=u(new o(e.startContainer,e.startOffset),!0),n=u(new o(e.endContainer,e.endOffset),!1),r=c(s.getRangeDocument(e)).createTextRange();return r.setEndPoint("StartToStart",t),r.setEndPoint("EndToEnd",n),r};if(r.rangeToTextRange=h,r.prototype.toTextRange=function(){return h(this)},e.WrappedTextRange=r,!e.features.implementsDomRange||e.config.preferTextRange){var g=Function("return this;")();void 0===g.Range&&(g.Range=r),e.createNativeRange=function(e){return e=l(e,t,"createNativeRange"),c(e).createTextRange()},e.WrappedRange=r}}e.createRange=function(n){return n=l(n,t,"createRange"),new e.WrappedRange(e.createNativeRange(n))},e.createRangyRange=function(e){return e=l(e,t,"createRangyRange"),new s(e)},i.createAliasForDeprecatedMethod(e,"createIframeRange","createRange"),i.createAliasForDeprecatedMethod(e,"createIframeRangyRange","createRangyRange"),e.addShimListener(function(t){var n=t.document;void 0===n.createRange&&(n.createRange=function(){return e.createRange(n)}),n=t=null})}),y.createCoreModule("WrappedSelection",["DomRange","WrappedRange"],function(e,t){e.config.checkSelectionRanges=!0;var n,r,a=e.dom,i=e.util,o=i.isHostMethod,s=e.DomRange,c=e.WrappedRange,l=e.DOMException,d=a.DomPosition,f=e.features,u=a.getDocument,h=a.getBody,g=s.rangesEqual;function p(e){return"string"==typeof e?/^backward(s)?$/i.test(e):!!e}function m(e,n){if(e){if(a.isWindow(e))return e;if(e instanceof z)return e.win;var r=a.getContentDocument(e,t,n);return a.getWindow(r)}return window}function v(e){return m(e,"getDocSelection").document.selection}function C(e){var t=!1;return e.anchorNode&&(t=1==a.comparePoints(e.anchorNode,e.anchorOffset,e.focusNode,e.focusOffset)),t}var R=o(window,"getSelection"),N=i.isHostObject(document,"selection");f.implementsWinGetSelection=R,f.implementsDocSelection=N;var y=N&&(!R||e.config.preferTextRange);if(y)n=v,e.isSelectionValid=function(e){var t=m(e,"isSelectionValid").document,n=t.selection;return"None"!=n.type||u(n.createRange().parentElement())==t};else{if(!R)return t.fail("Neither document.selection or window.getSelection() detected."),!1;n=function(e){return m(e,"getWinSelection").getSelection()},e.isSelectionValid=function(){return!0}}e.getNativeSelection=n;var E=n();if(!E)return t.fail("Native selection was null (possibly issue 138?)"),!1;var T=e.createNativeRange(document),S=h(document),w=i.areHostProperties(E,["anchorNode","focusNode","anchorOffset","focusOffset"]);f.selectionHasAnchorAndFocus=w;var O=o(E,"extend");f.selectionHasExtend=O;var x="number"==typeof E.rangeCount;f.selectionHasRangeCount=x;var A=!1,P=!0,_=O?function(t,n){var r=s.getRangeDocument(n),a=e.createRange(r);a.collapseToPoint(n.endContainer,n.endOffset),t.addRange(B(a)),t.extend(n.startContainer,n.startOffset)}:null;i.areHostMethods(E,["addRange","getRangeAt","removeAllRanges"])&&"number"==typeof E.rangeCount&&f.implementsDomRange&&function(){var t=window.getSelection();if(t){for(var n=t.rangeCount,r=n>1,i=[],o=C(t),s=0;s<n;++s)i[s]=t.getRangeAt(s);var c=a.createTestElement(document,"",!1),l=c.appendChild(document.createTextNode("   ")),d=document.createRange();if(d.setStart(l,1),d.collapse(!0),t.removeAllRanges(),t.addRange(d),P=1==t.rangeCount,t.removeAllRanges(),!r){var f=window.navigator.appVersion.match(/Chrome\/(.*?) /);if(f&&parseInt(f[1])>=36)A=!1;else{var u=d.cloneRange();d.setStart(l,0),u.setEnd(l,3),u.setStart(l,2),t.addRange(d),t.addRange(u),A=2==t.rangeCount}}for(a.removeNode(c),t.removeAllRanges(),s=0;s<n;++s)0==s&&o?_?_(t,i[s]):(e.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend"),t.addRange(i[s])):t.addRange(i[s])}}(),f.selectionSupportsMultipleRanges=A,f.collapsedNonEditableSelectionsSupported=P;var b,D,I=!1;function M(e,t,n){var r=n?"end":"start",a=n?"start":"end";e.anchorNode=t[r+"Container"],e.anchorOffset=t[r+"Offset"],e.focusNode=t[a+"Container"],e.focusOffset=t[a+"Offset"]}function H(e){e.anchorNode=e.focusNode=null,e.anchorOffset=e.focusOffset=0,e.rangeCount=0,e.isCollapsed=!0,e._ranges.length=0}function B(t){var n;return t instanceof s?((n=e.createNativeRange(t.getDocument())).setEnd(t.endContainer,t.endOffset),n.setStart(t.startContainer,t.startOffset)):t instanceof c?n=t.nativeRange:f.implementsDomRange&&t instanceof a.getWindow(t.startContainer).Range&&(n=t),n}function L(e){var n=e.getNodes();if(!function(e){if(!e.length||1!=e[0].nodeType)return!1;for(var t=1,n=e.length;t<n;++t)if(!a.isAncestorOf(e[0],e[t]))return!1;return!0}(n))throw t.createError("getSingleElementFromRange: range "+e.inspect()+" did not consist of a single element");return n[0]}function W(e){return!!e&&void 0!==e.text}function k(e,t){var n=new c(t);e._ranges=[n],M(e,n,!1),e.rangeCount=1,e.isCollapsed=n.collapsed}function F(t){if(t._ranges.length=0,"None"==t.docSelection.type)H(t);else{var n=t.docSelection.createRange();if(W(n))k(t,n);else{t.rangeCount=n.length;for(var r,a=u(n.item(0)),i=0;i<t.rangeCount;++i)(r=e.createRange(a)).selectNode(n.item(i)),t._ranges.push(r);t.isCollapsed=1==t.rangeCount&&t._ranges[0].collapsed,M(t,t._ranges[t.rangeCount-1],!1)}}}function j(e,n){for(var r=e.docSelection.createRange(),a=L(n),i=u(r.item(0)),o=h(i).createControlRange(),s=0,c=r.length;s<c;++s)o.add(r.item(s));try{o.add(a)}catch(e){throw t.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}o.select(),F(e)}function z(e,t,n){this.nativeSelection=e,this.docSelection=t,this._ranges=[],this.win=n,this.refresh()}function U(e){e.win=e.anchorNode=e.focusNode=e._ranges=null,e.rangeCount=e.anchorOffset=e.focusOffset=0,e.detached=!0}S&&o(S,"createControlRange")&&(b=S.createControlRange(),i.areHostProperties(b,["item","add"])&&(I=!0)),f.implementsControlRange=I,r=w?function(e){return e.anchorNode===e.focusNode&&e.anchorOffset===e.focusOffset}:function(e){return!!e.rangeCount&&e.getRangeAt(e.rangeCount-1).collapsed},o(E,"getRangeAt")?D=function(e,t){try{return e.getRangeAt(t)}catch(e){return null}}:w&&(D=function(t){var n=u(t.anchorNode),r=e.createRange(n);return r.setStartAndEnd(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),r.collapsed!==this.isCollapsed&&r.setStartAndEnd(t.focusNode,t.focusOffset,t.anchorNode,t.anchorOffset),r}),z.prototype=e.selectionPrototype;var V=[];function q(e,t){for(var n,r,a=V.length;a--;)if(r=(n=V[a]).selection,"deleteAll"==t)U(r);else if(n.win==e)return"delete"==t?(V.splice(a,1),!0):r;return"deleteAll"==t&&(V.length=0),null}var Y=function(e){if(e&&e instanceof z)return e.refresh(),e;var t=q(e=m(e,"getNativeSelection")),r=n(e),a=N?v(e):null;return t?(t.nativeSelection=r,t.docSelection=a,t.refresh()):(t=new z(r,a,e),V.push({win:e,selection:t})),t};e.getSelection=Y,i.createAliasForDeprecatedMethod(e,"getIframeSelection","getSelection");var Q,$=z.prototype;function G(e,n){for(var r,a=u(n[0].startContainer),i=h(a).createControlRange(),o=0,s=n.length;o<s;++o){r=L(n[o]);try{i.add(r)}catch(e){throw t.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)")}}i.select(),F(e)}if(!y&&w&&i.areHostMethods(E,["removeAllRanges","addRange"])){$.removeAllRanges=function(){this.nativeSelection.removeAllRanges(),H(this)};var X=function(e,t){_(e.nativeSelection,t),e.refresh()};$.addRange=x?function(t,n){if(I&&N&&"Control"==this.docSelection.type)j(this,t);else if(p(n)&&O)X(this,t);else{var a;A?a=this.rangeCount:(this.removeAllRanges(),a=0);var i=B(t).cloneRange();try{this.nativeSelection.addRange(i)}catch(e){}if(this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==a+1){if(e.config.checkSelectionRanges){var o=D(this.nativeSelection,this.rangeCount-1);o&&!g(o,t)&&(t=new c(o))}this._ranges[this.rangeCount-1]=t,M(this,t,Z(this.nativeSelection)),this.isCollapsed=r(this)}else this.refresh()}}:function(e,t){p(t)&&O?X(this,e):(this.nativeSelection.addRange(B(e)),this.refresh())},$.setRanges=function(e){if(I&&N&&e.length>1)G(this,e);else{this.removeAllRanges();for(var t=0,n=e.length;t<n;++t)this.addRange(e[t])}}}else{if(!(o(E,"empty")&&o(T,"select")&&I&&y))return t.fail("No means of selecting a Range or TextRange was found"),!1;$.removeAllRanges=function(){try{if(this.docSelection.empty(),"None"!=this.docSelection.type){var e;if(this.anchorNode)e=u(this.anchorNode);else if("Control"==this.docSelection.type){var t=this.docSelection.createRange();t.length&&(e=u(t.item(0)))}e&&(h(e).createTextRange().select(),this.docSelection.empty())}}catch(e){}H(this)},$.addRange=function(t){"Control"==this.docSelection.type?j(this,t):(e.WrappedTextRange.rangeToTextRange(t).select(),this._ranges[0]=t,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,M(this,t,!1))},$.setRanges=function(e){this.removeAllRanges();var t=e.length;t>1?G(this,e):t&&this.addRange(e[0])}}if($.getRangeAt=function(e){if(e<0||e>=this.rangeCount)throw new l("INDEX_SIZE_ERR");return this._ranges[e].cloneRange()},y)Q=function(t){var n;e.isSelectionValid(t.win)?n=t.docSelection.createRange():(n=h(t.win.document).createTextRange()).collapse(!0),"Control"==t.docSelection.type?F(t):W(n)?k(t,n):H(t)};else if(o(E,"getRangeAt")&&"number"==typeof E.rangeCount)Q=function(t){if(I&&N&&"Control"==t.docSelection.type)F(t);else if(t._ranges.length=t.rangeCount=t.nativeSelection.rangeCount,t.rangeCount){for(var n=0,a=t.rangeCount;n<a;++n)t._ranges[n]=new e.WrappedRange(t.nativeSelection.getRangeAt(n));M(t,t._ranges[t.rangeCount-1],Z(t.nativeSelection)),t.isCollapsed=r(t)}else H(t)};else{if(!w||"boolean"!=typeof E.isCollapsed||"boolean"!=typeof T.collapsed||!f.implementsDomRange)return t.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;Q=function(e){var t,n=e.nativeSelection;n.anchorNode?(t=D(n,0),e._ranges=[t],e.rangeCount=1,function(e){var t=e.nativeSelection;e.anchorNode=t.anchorNode,e.anchorOffset=t.anchorOffset,e.focusNode=t.focusNode,e.focusOffset=t.focusOffset}(e),e.isCollapsed=r(e)):H(e)}}$.refresh=function(e){var t=e?this._ranges.slice(0):null,n=this.anchorNode,r=this.anchorOffset;if(Q(this),e){var a=t.length;if(a!=this._ranges.length)return!0;if(this.anchorNode!=n||this.anchorOffset!=r)return!0;for(;a--;)if(!g(t[a],this._ranges[a]))return!0;return!1}};var Z,J=function(e,t){var n=e.getAllRanges();e.removeAllRanges();for(var r=0,a=n.length;r<a;++r)g(t,n[r])||e.addRange(n[r]);e.rangeCount||H(e)};function K(e,t){if(e.win.document!=u(t))throw new l("WRONG_DOCUMENT_ERR")}function ee(t){return function(n,r){var a;this.rangeCount?(a=this.getRangeAt(0))["set"+(t?"Start":"End")](n,r):(a=e.createRange(this.win.document)).setStartAndEnd(n,r),this.setSingleRange(a,this.isBackward())}}function te(e){var t=[],n=new d(e.anchorNode,e.anchorOffset),r=new d(e.focusNode,e.focusOffset),a="function"==typeof e.getName?e.getName():"Selection";if(void 0!==e.rangeCount)for(var i=0,o=e.rangeCount;i<o;++i)t[i]=s.inspect(e.getRangeAt(i));return"["+a+"(Ranges: "+t.join(", ")+")(anchor: "+n.inspect()+", focus: "+r.inspect()+"]"}$.removeRange=I&&N?function(e){if("Control"==this.docSelection.type){for(var t=this.docSelection.createRange(),n=L(e),r=u(t.item(0)),a=h(r).createControlRange(),i=!1,o=0,s=t.length;o<s;++o)t.item(o)!==n||i?a.add(t.item(o)):i=!0;a.select(),F(this)}else J(this,e)}:function(e){J(this,e)},!y&&w&&f.implementsDomRange?(Z=C,$.isBackward=function(){return Z(this)}):Z=$.isBackward=function(){return!1},$.isBackwards=$.isBackward,$.toString=function(){for(var e=[],t=0,n=this.rangeCount;t<n;++t)e[t]=""+this._ranges[t];return e.join("")},$.collapse=function(t,n){K(this,t);var r=e.createRange(t);r.collapseToPoint(t,n),this.setSingleRange(r),this.isCollapsed=!0},$.collapseToStart=function(){if(!this.rangeCount)throw new l("INVALID_STATE_ERR");var e=this._ranges[0];this.collapse(e.startContainer,e.startOffset)},$.collapseToEnd=function(){if(!this.rangeCount)throw new l("INVALID_STATE_ERR");var e=this._ranges[this.rangeCount-1];this.collapse(e.endContainer,e.endOffset)},$.selectAllChildren=function(t){K(this,t);var n=e.createRange(t);n.selectNodeContents(t),this.setSingleRange(n)},$.deleteFromDocument=function(){if(I&&N&&"Control"==this.docSelection.type){for(var e,t=this.docSelection.createRange();t.length;)e=t.item(0),t.remove(e),a.removeNode(e);this.refresh()}else if(this.rangeCount){var n=this.getAllRanges();if(n.length){this.removeAllRanges();for(var r=0,i=n.length;r<i;++r)n[r].deleteContents();this.addRange(n[i-1])}}},$.eachRange=function(e,t){for(var n=0,r=this._ranges.length;n<r;++n)if(e(this.getRangeAt(n)))return t},$.getAllRanges=function(){var e=[];return this.eachRange(function(t){e.push(t)}),e},$.setSingleRange=function(e,t){this.removeAllRanges(),this.addRange(e,t)},$.callMethodOnEachRange=function(e,t){var n=[];return this.eachRange(function(r){n.push(r[e].apply(r,t||[]))}),n},$.setStart=ee(!0),$.setEnd=ee(!1),e.rangePrototype.select=function(e){Y(this.getDocument()).setSingleRange(this,e)},$.changeEachRange=function(e){var t=[],n=this.isBackward();this.eachRange(function(n){e(n),t.push(n)}),this.removeAllRanges(),n&&1==t.length?this.addRange(t[0],"backward"):this.setRanges(t)},$.containsNode=function(e,t){return this.eachRange(function(n){return n.containsNode(e,t)},!0)||!1},$.getBookmark=function(e){return{backward:this.isBackward(),rangeBookmarks:this.callMethodOnEachRange("getBookmark",[e])}},$.moveToBookmark=function(t){for(var n,r,a=[],i=0;n=t.rangeBookmarks[i++];)(r=e.createRange(this.win)).moveToBookmark(n),a.push(r);t.backward?this.setSingleRange(a[0],"backward"):this.setRanges(a)},$.saveRanges=function(){return{backward:this.isBackward(),ranges:this.callMethodOnEachRange("cloneRange")}},$.restoreRanges=function(e){this.removeAllRanges();for(var t,n=0;t=e.ranges[n];++n)this.addRange(t,e.backward&&0==n)},$.toHtml=function(){var e=[];return this.eachRange(function(t){e.push(s.toHtml(t))}),e.join("")},f.implementsTextRange&&($.getNativeTextRange=function(){var n;if(n=this.docSelection){var r=n.createRange();if(W(r))return r;throw t.createError("getNativeTextRange: selection is a control selection")}if(this.rangeCount>0)return e.WrappedTextRange.rangeToTextRange(this.getRangeAt(0));throw t.createError("getNativeTextRange: selection contains no range")}),$.getName=function(){return"WrappedSelection"},$.inspect=function(){return te(this)},$.detach=function(){q(this.win,"delete"),U(this)},z.detachAll=function(){q(null,"deleteAll")},z.inspect=te,z.isDirectionBackward=p,e.Selection=z,e.selectionPrototype=$,e.addShimListener(function(e){void 0===e.getSelection&&(e.getSelection=function(){return Y(e)}),e=null})});var M=!1,H=function(e){M||(M=!0,!y.initialized&&y.config.autoInitialize&&x())};return R&&("complete"==document.readyState?H():(s(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",H,!1),v(window,"load",H))),y},this),function(e,t){"function"==typeof define&&define.amd?define(["./rangy-core"],e):"undefined"!=typeof module&&"object"==typeof exports?module.exports=e(require("rangy")):e(t.rangy)}(function(e){return e.createModule("ClassApplier",["WrappedSelection"],function(e,t){var n=e.dom,r=n.DomPosition,a=n.arrayContains,o=e.util,s=o.forEach,c=o.isHostMethod(document,"createElementNS");function l(e,t){for(var n in e)if(e.hasOwnProperty(n)&&!1===t(n,e[n]))return!1;return!0}function d(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function f(e,t){return!!e&&new RegExp("(?:^|\\s)"+t+"(?:\\s|$)").test(e)}function u(e,t){return"object"==typeof e.classList?e.classList.contains(t):f("string"==typeof e.className?e.className:e.getAttribute("class"),t)}function h(e,t){if("object"==typeof e.classList)e.classList.add(t);else{var n="string"==typeof e.className,r=n?e.className:e.getAttribute("class");r?f(r,t)||(r+=" "+t):r=t,n?e.className=r:e.setAttribute("class",r)}}var g=function(){function e(e,t,n){return t&&n?" ":""}return function(t,n){if("object"==typeof t.classList)t.classList.remove(n);else{var r="string"==typeof t.className,a=r?t.className:t.getAttribute("class");a=a.replace(new RegExp("(^|\\s)"+n+"(\\s|$)"),e),r?t.className=a:t.setAttribute("class",a)}}}();function p(e){return"string"==typeof e.className?e.className:e.getAttribute("class")}function m(e){return e&&e.split(/\s+/).sort().join(" ")}function v(e){return m(p(e))}function C(e,t){return v(e)==v(t)}function R(e,t){for(var n=t.split(/\s+/),r=0,a=n.length;r<a;++r)if(!u(e,d(n[r])))return!1;return!0}function N(e,t,r,a){-1==r&&(r=t.childNodes.length);var i=e.parentNode,o=n.getNodeIndex(e);s(a,function(e){!function(e,t,n,r,a){var i=e.node,o=e.offset,s=i,c=o;i==r&&o>a&&++c,i!=t||o!=n&&o!=n+1||(s=r,c+=a-n),i==t&&o>n+1&&--c,e.node=s,e.offset=c}(e,i,o,t,r)}),t.childNodes.length==r?t.appendChild(e):t.insertBefore(e,t.childNodes[r])}function y(e,t){var r=e.parentNode,a=n.getNodeIndex(e);s(t,function(e){!function(e,t,n){e.node==t&&e.offset>n&&--e.offset}(e,r,a)}),n.removeNode(e)}function E(e,t){return function(e,t,n,r,a){for(var i,o=[];i=e.firstChild;)N(i,t,n++,a),o.push(i);return y(e,a),o}(e,e.parentNode,n.getNodeIndex(e),0,t)}function T(e,t){var n=e.cloneRange();n.selectNodeContents(t);var r=n.intersection(e);return""!=(r?r.toString():"")}function S(e){for(var t,n=e.getNodes([3]),r=0;(t=n[r])&&!T(e,t);)++r;for(var a=n.length-1;(t=n[a])&&!T(e,t);)--a;return n.slice(r,a+1)}function w(e,t){if(e.attributes.length!=t.attributes.length)return!1;for(var n,r,a,i=0,o=e.attributes.length;i<o;++i)if("class"!=(a=(n=e.attributes[i]).name)){if(null===n!=(null===(r=t.attributes.getNamedItem(a))))return!1;if(n.specified!=r.specified)return!1;if(n.specified&&n.nodeValue!==r.nodeValue)return!1}return!0}function O(e,t){for(var n,r=0,i=e.attributes.length;r<i;++r)if(n=e.attributes[r].name,(!t||!a(t,n))&&e.attributes[r].specified&&"class"!=n)return!0;return!1}var x=n.getComputedStyleProperty,A="boolean"==typeof document.createElement("div").isContentEditable?function(e){return e&&1==e.nodeType&&e.isContentEditable}:function(e){return!(!e||1!=e.nodeType||"false"==e.contentEditable)&&("true"==e.contentEditable||A(e.parentNode))};function P(e){var t;return e&&1==e.nodeType&&((t=e.parentNode)&&9==t.nodeType&&"on"==t.designMode||A(e)&&!A(e.parentNode))}function _(e){return(A(e)||1!=e.nodeType&&A(e.parentNode))&&!P(e)}var b=/^inline(-block|-table)?$/i;function D(e){return e&&1==e.nodeType&&!b.test(x(e,"display"))}var I=/[^\r\n\t\f \u200B]/;function M(e){var t,n,a=[];for(t=0;n=e[t++];)a.push(new r(n.startContainer,n.startOffset),new r(n.endContainer,n.endOffset));return a}function H(e,t){for(var n,r,a,i=0,o=e.length;i<o;++i)n=e[i],r=t[2*i],a=t[2*i+1],n.setStartAndEnd(r.node,r.offset,a.node,a.offset)}function B(e,r,a,i){var o,s,c=0==a;if(n.isAncestorOf(r,e))return e;if(n.isCharacterDataNode(r)){var l=n.getNodeIndex(r);if(0==a)a=l;else{if(a!=r.length)throw t.createError("splitNodeAt() should not be called with offset in the middle of a data node ("+a+" in "+r.data);a=l+1}r=r.parentNode}if(function(e,t){return n.isCharacterDataNode(e)?0==t?!!e.previousSibling:t!=e.length||!!e.nextSibling:t>0&&t<e.childNodes.length}(r,a)){o=r.cloneNode(!1),s=r.parentNode,o.id&&o.removeAttribute("id");for(var d,f=0;d=r.childNodes[a];)N(d,o,f++,i);return N(o,s,n.getNodeIndex(r)+1,i),r==e?o:B(e,s,n.getNodeIndex(o),i)}if(e!=r){o=r.parentNode;var u=n.getNodeIndex(r);return c||u++,B(e,o,u,i)}return e}function L(e){var t=e?"nextSibling":"previousSibling";return function(n,r){var a,i,o=n.parentNode,s=n[t];if(s){if(s&&3==s.nodeType)return s}else if(r&&(s=o[t])&&1==s.nodeType&&(i=s,(a=o).namespaceURI==i.namespaceURI&&a.tagName.toLowerCase()==i.tagName.toLowerCase()&&C(a,i)&&w(a,i)&&"inline"==x(a,"display")&&"inline"==x(i,"display"))){var c=s[e?"firstChild":"lastChild"];if(c&&3==c.nodeType)return c}return null}}var W=L(!1),k=L(!0);function F(e){this.isElementMerge=1==e.nodeType,this.textNodes=[];var t=this.isElementMerge?e.lastChild:e;t&&(this.textNodes[0]=t)}F.prototype={doMerge:function(e){var t=this.textNodes,r=t[0];if(t.length>1){var a,i=n.getNodeIndex(r),o=[],c=0;s(t,function(t,l){a=t.parentNode,l>0&&(a.removeChild(t),a.hasChildNodes()||n.removeNode(a),e&&s(e,function(e){e.node==t&&(e.node=r,e.offset+=c),e.node==a&&e.offset>i&&(--e.offset,e.offset==i+1&&l<len-1&&(e.node=r,e.offset=c))})),o[l]=t.data,c+=t.data.length}),r.data=o.join("")}return r.data},getLength:function(){for(var e=this.textNodes.length,t=0;e--;)t+=this.textNodes[e].length;return t},toString:function(){var e=[];return s(this.textNodes,function(t,n){e[n]="'"+t.data+"'"}),"[Merge("+e.join(",")+")]"}};var j=["elementTagName","ignoreWhiteSpace","applyToEditableOnly","useExistingElements","removeEmptyElements","onElementCreate"],z={};function U(e,t,n){var r,a,i,o,s=this;s.cssClass=s.className=e;var c=null,f={};if("object"==typeof t&&null!==t){for(void 0!==t.elementTagName&&(t.elementTagName=t.elementTagName.toLowerCase()),n=t.tagNames,c=t.elementProperties,f=t.elementAttributes,a=0;o=j[a++];)t.hasOwnProperty(o)&&(s[o]=t[o]);r=t.normalize}else r=t;s.normalize=void 0===r||r,s.attrExceptions=[];var u=document.createElement(s.elementTagName);s.elementProperties=s.copyPropertiesToElement(c,u,!0),l(f,function(e,t){s.attrExceptions.push(e),f[e]=""+t}),s.elementAttributes=f,s.elementSortedClassName=s.elementProperties.hasOwnProperty("className")?m(s.elementProperties.className+" "+e):e,s.applyToAnyTagName=!1;var h=typeof n;if("string"==h)"*"==n?s.applyToAnyTagName=!0:s.tagNames=d(n.toLowerCase()).split(/\s*,\s*/);else if("object"==h&&"number"==typeof n.length)for(s.tagNames=[],a=0,i=n.length;a<i;++a)"*"==n[a]?s.applyToAnyTagName=!0:s.tagNames.push(n[a].toLowerCase());else s.tagNames=[s.elementTagName]}U.prototype={elementTagName:"span",elementProperties:{},elementAttributes:{},ignoreWhiteSpace:!0,applyToEditableOnly:!1,useExistingElements:!0,removeEmptyElements:!0,onElementCreate:null,copyPropertiesToElement:function(e,t,n){var r,a,i,o,s,c,l={};for(var d in e)if(e.hasOwnProperty(d))if(o=e[d],s=t[d],"className"==d)h(t,o),h(t,this.className),t[d]=m(t[d]),n&&(l[d]=o);else if("style"==d){for(r in a=s,n&&(l[d]=i={}),e[d])e[d].hasOwnProperty(r)&&(a[r]=o[r],n&&(i[r]=a[r]));this.attrExceptions.push(d)}else t[d]=o,n&&(l[d]=t[d],c=z.hasOwnProperty(d)?z[d]:d,this.attrExceptions.push(c));return n?l:""},copyAttributesToElement:function(e,t){for(var n in e)e.hasOwnProperty(n)&&!/^class(?:Name)?$/i.test(n)&&t.setAttribute(n,e[n])},appliesToElement:function(e){return a(this.tagNames,e.tagName.toLowerCase())},getEmptyElements:function(e){var t=this;return e.getNodes([1],function(e){return t.appliesToElement(e)&&!e.hasChildNodes()})},hasClass:function(e){return 1==e.nodeType&&(this.applyToAnyTagName||this.appliesToElement(e))&&u(e,this.className)},getSelfOrAncestorWithClass:function(e){for(;e;){if(this.hasClass(e))return e;e=e.parentNode}return null},isModifiable:function(e){return!this.applyToEditableOnly||_(e)},isIgnorableWhiteSpaceNode:function(e){return this.ignoreWhiteSpace&&e&&3==e.nodeType&&function(e){if(0==e.data.length)return!0;if(I.test(e.data))return!1;switch(x(e.parentNode,"whiteSpace")){case"pre":case"pre-wrap":case"-moz-pre-wrap":return!1;case"pre-line":if(/[\r\n]/.test(e.data))return!1}return D(e.previousSibling)||D(e.nextSibling)}(e)},postApply:function(e,t,n,r){var a,o,c=e[0],l=e[e.length-1],d=[],f=c,u=l,h=0,g=l.length;s(e,function(e){(o=W(e,!r))?(a||(a=new F(o),d.push(a)),a.textNodes.push(e),e===c&&(f=a.textNodes[0],h=f.length),e===l&&(u=a.textNodes[0],g=a.getLength())):a=null});var p=k(l,!r);if(p&&(a||(a=new F(l),d.push(a)),a.textNodes.push(p)),d.length){for(i=0,len=d.length;i<len;++i)d[i].doMerge(n);t.setStartAndEnd(f,h,u,g)}},createContainer:function(e){var t=n.getDocument(e),r=c&&!n.isHtmlNamespace(e)&&e.namespaceURI?t.createElementNS(e.namespaceURI,this.elementTagName):t.createElement(this.elementTagName);return this.copyPropertiesToElement(this.elementProperties,r,!1),this.copyAttributesToElement(this.elementAttributes,r),h(r,this.className),this.onElementCreate&&this.onElementCreate(r,this),r},elementHasProperties:function(e,t){var n=this;return l(t,function(t,r){if("className"==t)return R(e,r);if("object"==typeof r){if(!n.elementHasProperties(e[t],r))return!1}else if(e[t]!==r)return!1})},elementHasAttributes:function(e,t){return l(t,function(t,n){if(e.getAttribute(t)!==n)return!1})},applyToTextNode:function(e,t){if(function(e){var t=e.parentNode;return t&&1==t.nodeType&&!/^(textarea|style|script|select|iframe)$/i.test(t.nodeName)}(e)){var n=e.parentNode;if(1==n.childNodes.length&&this.useExistingElements&&this.appliesToElement(n)&&this.elementHasProperties(n,this.elementProperties)&&this.elementHasAttributes(n,this.elementAttributes))h(n,this.className);else{var r=e.parentNode,a=this.createContainer(r);r.insertBefore(a,e),a.appendChild(e)}}},isRemovable:function(e){return e.tagName.toLowerCase()==this.elementTagName&&v(e)==this.elementSortedClassName&&this.elementHasProperties(e,this.elementProperties)&&!O(e,this.attrExceptions)&&this.elementHasAttributes(e,this.elementAttributes)&&this.isModifiable(e)},isEmptyContainer:function(e){var t=e.childNodes.length;return 1==e.nodeType&&this.isRemovable(e)&&(0==t||1==t&&this.isEmptyContainer(e.firstChild))},removeEmptyContainers:function(e){var t=this,n=e.getNodes([1],function(e){return t.isEmptyContainer(e)}),r=[e],a=M(r);s(n,function(e){y(e,a)}),H(r,a)},undoToTextNode:function(e,t,n,r){if(!t.containsNode(n)){var a=t.cloneRange();a.selectNode(n),a.isPointInRange(t.endContainer,t.endOffset)&&(B(n,t.endContainer,t.endOffset,r),t.setEndAfter(n)),a.isPointInRange(t.startContainer,t.startOffset)&&(n=B(n,t.startContainer,t.startOffset,r))}this.isRemovable(n)?E(n,r):g(n,this.className)},splitAncestorWithClass:function(e,t,n){var r=this.getSelfOrAncestorWithClass(e);r&&B(r,e,t,n)},undoToAncestor:function(e,t){this.isRemovable(e)?E(e,t):g(e,this.className)},applyToRange:function(e,t){var n=this,r=M((t=t||[])||[]);e.splitBoundariesPreservingPositions(r),n.removeEmptyElements&&n.removeEmptyContainers(e);var a=S(e);if(a.length){s(a,function(e){n.isIgnorableWhiteSpaceNode(e)||n.getSelfOrAncestorWithClass(e)||!n.isModifiable(e)||n.applyToTextNode(e,r)});var i=a[a.length-1];e.setStartAndEnd(a[0],0,i,i.length),n.normalize&&n.postApply(a,e,r,!1),H(t,r)}var o=n.getEmptyElements(e);s(o,function(e){h(e,n.className)})},applyToRanges:function(e){for(var t=e.length;t--;)this.applyToRange(e[t],e);return e},applyToSelection:function(t){var n=e.getSelection(t);n.setRanges(this.applyToRanges(n.getAllRanges()))},undoToRange:function(e,t){var n=this,r=M(t=t||[]);e.splitBoundariesPreservingPositions(r),n.removeEmptyElements&&n.removeEmptyContainers(e,r);var a,i,o=S(e),c=o[o.length-1];if(o.length){n.splitAncestorWithClass(e.endContainer,e.endOffset,r),n.splitAncestorWithClass(e.startContainer,e.startOffset,r);for(var l=0,d=o.length;l<d;++l)a=o[l],(i=n.getSelfOrAncestorWithClass(a))&&n.isModifiable(a)&&n.undoToAncestor(i,r);e.setStartAndEnd(o[0],0,c,c.length),n.normalize&&n.postApply(o,e,r,!0),H(t,r)}var f=n.getEmptyElements(e);s(f,function(e){g(e,n.className)})},undoToRanges:function(e){for(var t=e.length;t--;)this.undoToRange(e[t],e);return e},undoToSelection:function(t){var n=e.getSelection(t),r=e.getSelection(t).getAllRanges();this.undoToRanges(r),n.setRanges(r)},isAppliedToRange:function(e){if(e.collapsed||""==e.toString())return!!this.getSelfOrAncestorWithClass(e.commonAncestorContainer);var t=e.getNodes([3]);if(t.length)for(var n,r=0;n=t[r++];)if(!this.isIgnorableWhiteSpaceNode(n)&&T(e,n)&&this.isModifiable(n)&&!this.getSelfOrAncestorWithClass(n))return!1;return!0},isAppliedToRanges:function(e){var t=e.length;if(0==t)return!1;for(;t--;)if(!this.isAppliedToRange(e[t]))return!1;return!0},isAppliedToSelection:function(t){var n=e.getSelection(t);return this.isAppliedToRanges(n.getAllRanges())},toggleRange:function(e){this.isAppliedToRange(e)?this.undoToRange(e):this.applyToRange(e)},toggleSelection:function(e){this.isAppliedToSelection(e)?this.undoToSelection(e):this.applyToSelection(e)},getElementsWithClassIntersectingRange:function(e){var t=[],n=this;return e.getNodes([3],function(e){var r=n.getSelfOrAncestorWithClass(e);r&&!a(t,r)&&t.push(r)}),t},detach:function(){}},U.util={hasClass:u,addClass:h,removeClass:g,getClass:p,hasSameClasses:C,hasAllClasses:R,replaceWithOwnChildren:E,elementsHaveSameNonClassAttributes:w,elementHasNonClassAttributes:O,splitNodeAt:B,isEditableElement:A,isEditingHost:P,isEditable:_},e.CssClassApplier=e.ClassApplier=U,e.createClassApplier=function(e,t,n){return new U(e,t,n)},o.createAliasForDeprecatedMethod(e,"createCssClassApplier","createClassApplier",t)}),e},this);

// We create a CatApp Class
function flzCatApp() {
    // Setting variables for the video object
    this.eContainer = '';
    this.aData = '';
    this.ePlayer = '';
    this.currentIndex = 0;
    this.userAnswer = null;
    this.userAnswerTime = null;
    this.showControlsOnce = false;
    this.questionAnswer = {};
    this.iCatId = '';
    this.oTimerInterval;
    this.sCountDownTimer;
    this.bCountDownTimer;
    this.sCountDownTimerMode;
    this.iStopWatchTimer = 0;
    this.iStopWatchTimerAnswered = 0;
    this.oStopWatchInterval;
    this.sCookieName = 'lsat-flz-cat-app-data';
    this.sCookieExpireDays = 14;
    this.iQuestionCountdown = '1:40';
    this.sCurrentMode = '';
    this.sLevel = 'easy';
    this.sFlaggedQuestion = [];
    this.bIsFirstTime = false;
    this.oSaveDataInterval;
    this.iSaveDataInterval = 30 * 1000;

    // Initialize the video object
    this.init = function(eContainerElement) {
        var that = this;
        that.eContainer = eContainerElement;

        var sMobileOrientation = that.checkMobileOrientation();

        // Hide orientation text when on ipad
        if (that.isIOS() == true && that.isIpadOS == true || /iPad/i.test(navigator.userAgent)) {
            jQuery(that.eContainer + ' .js-mobile-orientation').addClass('d-none');
            jQuery(that.eContainer + ' .crayons-col').hide();
            jQuery(that.eContainer).addClass('is-on-ipad');
        }

        if (jQuery(that.eContainer + ' .json-data').length > 0) {
            if (jQuery(that.eContainer + ' .json-data').val().length > 0) {
                that.aData = JSON.parse(jQuery(that.eContainer + ' .json-data').val());
            }

            // Read data from local storage and process them
            if (window.oSavedData == undefined) {
                window.oSavedData = {};
            }
            if (window.oSavedData[that.sCookieName] == undefined) {
                window.oSavedData[that.sCookieName] = {};
            }
            that.iCatId = jQuery(that.eContainer).attr('data-catid');

            // Load from database if user is logged in and data is available
            //that.mobileDebug(jQuery(that.eContainer + ' .js-user-db-data').val());
            var hasStoredDated = that.readLocalStorage(that.sCookieName);
            var iDatabaseSavedTime = '';
            var iLocalStorageSavedTime = '';
            if (jQuery(that.eContainer + ' .js-user-db-data').val().length > 0) {
                window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId] = {};
                window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId] = JSON.parse(jQuery(that.eContainer + ' .js-user-db-data').val());
                iDatabaseSavedTime = window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['savedDatetime'] || 0;
            }

            if (hasStoredDated != null) {
                var oStoredDataLocal = {};
                var bUseLocalStorage = false;
                oStoredDataLocal[that.sCookieName] = {};
                oStoredDataLocal[that.sCookieName] = JSON.parse(hasStoredDated);
                iLocalStorageSavedTime = 0;
                if (oStoredDataLocal[that.sCookieName]['catapp-questionBlock:' + that.iCatId] != undefined) {
                    iLocalStorageSavedTime = oStoredDataLocal[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['savedDatetime'];
                }
                if (jQuery(that.eContainer + ' .js-user-db-data').val().length == 0) {
                    bUseLocalStorage = true;
                } else if (parseInt(iLocalStorageSavedTime) > (parseInt(iDatabaseSavedTime) || 0)) {
                    bUseLocalStorage = true;
                }
                if (bUseLocalStorage) {
                    window.oSavedData[that.sCookieName] = {};
                    window.oSavedData[that.sCookieName] = JSON.parse(hasStoredDated);
                }
            }

            that.userAnswer = {};
            that.userAnswerTime = {};
            that.initNavigation();
            that.initEvents();
            that.initQuestions();

            if (that.isMobile()) {
                jQuery(that.eContainer + ' .js-go-fullscreen').parent().hide();
                jQuery(that.eContainer + ' .flz-cat-app-container').removeAttr('style');
                jQuery(that.eContainer + ' .quiz-content').removeAttr('style');
                jQuery(that.eContainer + ' .crayons-col').hide();
                jQuery(that.eContainer + ' .js-question-text').text('Q.');
                jQuery(that.eContainer + ' .js-question-of').text('/');
            } else {
                jQuery(that.eContainer + ' .js-question-of').text('of');
                //var iMinHeightContentQuiz = parseInt(jQuery(that.eContainer + ' .js-quiz-content-wrapper').attr('data-minheight'));
                //if(iMinHeightContentQuiz < that.iMinHeightAppDefault){
                //    iMinHeightContentQuiz = that.iMinHeightAppDefault;
                //}
                //jQuery(that.eContainer + ' .js-quiz-content-wrapper').css('min-height', iMinHeightContentQuiz + 'px');
            }
            var iTotalTime = jQuery(that.eContainer + ' .js-start-app-status').attr('data-totaltime');

            var sPlural = 'questions';
            if (that.aData[that.sLevel].length == 1) {
                sPlural = 'question';
            }
            var sAppStartStatus =
                '<p style="padding-bottom:0px">' + that.aData[that.sLevel].length + ' ' + sPlural + ' / ' + iTotalTime + ' minutes</p>';
            //'<p style="padding-bottom:0px">Total ' + sPlural + ': ' + that.aData[that.sLevel].length + '</p>' +
            //'<p>Quiz Length: ' + iTotalTime + ' Minutes</p>';
            var sButtonText = 'Start';

            var bIsContinueQuiz = false;
            var sStartAtTimer = '';
            if (window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId] != undefined) {
                if (window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['currentPageNr'] != undefined) {
                    var iCurrentPage = window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['currentPageNr'];

                    if (window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['useranswer'] != undefined) {
                        that.userAnswer = window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['useranswer'];
                    }
                    if (window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['useranswertime'] != undefined) {
                        that.userAnswerTime = window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['useranswertime'];
                    }

                    // Start the timer where user last time left of
                    if (window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['questionTimeLeft'] != undefined) {
                        that.sCountDownTimer = window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['questionTimeLeft'];
                        sStartAtTimer = that.sCountDownTimer;
                    }
                    if (window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['countdownmode'] != undefined) {
                        that.sCountDownTimerMode = window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['countdownmode'];
                    }
                    if (window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['flaggedQuestion'] != undefined) {
                        that.sFlaggedQuestion = window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['flaggedQuestion'];
                    }

                    var sCurrentMode = window.oSavedData[that.sCookieName]['catapp-questionBlock:' + that.iCatId]['currentMode'];
                    if (sCurrentMode == 'explanation') {
                        that.readyExplanationMode(false);
                        jQuery('<p class="js-quiz-status-txt">Drill Complete</p>').insertBefore(that.eContainer + ' .js-flz-loader-screen .btn-container');
                        sButtonText = 'Review';
                    } else {
                        if (iCurrentPage == 1){
                            sButtonText = 'Start';
                        }else{
                            jQuery('<p class="js-left-off-text">Left off on question ' + parseInt(iCurrentPage) + '</p>').insertBefore(that.eContainer + ' .js-flz-loader-screen .btn-container');
                            sButtonText = 'Continue';
                        }
                        that.goToQuestion(iCurrentPage);
                    }

                    bIsContinueQuiz = true;
                }
            }

            that.disableTextSelection('.js-quiz-content-wrapper');
            jQuery(that.eContainer + ' .js-start-app-status').html(sAppStartStatus);
            jQuery(that.eContainer + ' .js-start-quiz-btn').text(sButtonText);

            if (bIsContinueQuiz == false) {
                that.loadNewQuestion(1);
            }
            that.initTimer(sStartAtTimer);
        }
    };

    this.initNavigation = function() {
        // Make navigation
        var that = this;
        if (that.aData && that.aData[that.sLevel] && that.aData[that.sLevel].length > 0) {

            jQuery(that.eContainer + ' div.nav-container').pagination({
                items: that.aData[that.sLevel].length,
                itemsOnPage: 1,
                displayedPages: that.aData[that.sLevel].length,
                edges: 0,
                cssStyle: 'light-theme',
                prevText: '<i class="las la-angle-left"></i>',
                nextText: '<i class="las la-angle-right"></i>',
                selectOnClick: false,
                onPageClick: function(pageNumber, event) {
                    event.preventDefault();
                    /*
                    //jQuery(that.eContainer + ' div.nav-container').pagination('selectPage', pageNumber);
                    */
                    if (that.sCurrentMode == 'explanation') {
                        that.goToQuestion(pageNumber);
                    } else {
                        that.showPopupOverlay(jQuery(that.eContainer + ' .js-limit-navigation').html());
                    }
                }
            });

            if (that.currentIndex != 0) {
                that.checkNavigationLeftRight(parseInt(that.currentIndex) + 1);
            } else {
                that.checkNavigationLeftRight(1);
            }
        };
    }

    this.checkNavigationLeftRight = function(iCurrentNumber) {
        var that = this;
        jQuery(that.eContainer + ' .simple-pagination ul li .prev').parent().hide();
        jQuery(that.eContainer + ' .simple-pagination ul li .next').parent().hide();
        jQuery(that.eContainer + ' .js-btn-select').text('Select nine');
        if (iCurrentNumber == that.aData[that.sLevel].length) {
            if (that.sCurrentMode == '') {
                jQuery(that.eContainer + ' .js-btn-select').text('Finish');
            }
        }
        var oTextEl = jQuery(that.eContainer + ' .js-quiz-question').not('.d-none').find('textarea.js-quiz-essay-textarea');
        if (oTextEl != null && oTextEl != undefined && oTextEl.length > 0){
            jQuery(that.eContainer + ' .js-btn-select').text('Send');
        }

        if (that.sCurrentMode == 'explanation') {
            jQuery(that.eContainer + ' .js-explain-nav-btn .js-next-btn').parent().show();
            jQuery(that.eContainer + ' .js-explain-nav-btn .js-prev-btn').parent().show();
            jQuery(that.eContainer + ' .js-explain-nav-btn .js-prev-btn').parent().removeAttr('style');
            jQuery(that.eContainer + ' .js-explain-nav-btn .js-next-btn').parent().removeAttr('style');
            if (iCurrentNumber == that.aData[that.sLevel].length) {
                jQuery(that.eContainer + ' .js-explain-nav-btn .js-next-btn').parent().hide();
                jQuery(that.eContainer + ' .js-explain-nav-btn .js-prev-btn').parent().css({
                    'marginLeft': '0px'
                });
            }
            if (iCurrentNumber == 1) {
                jQuery(that.eContainer + ' .js-explain-nav-btn .js-prev-btn').parent().hide();
                jQuery(that.eContainer + ' .js-explain-nav-btn .js-next-btn').parent().css({
                    'marginLeft': '0px'
                });
            }
        }
        /*
        if(that.sCurrentMode == 'explanation'){
            jQuery(that.eContainer + ' .simple-pagination ul li.disabled span.prev').parent().removeClass('d-none');
            if(iCurrentNumber == 1){
                if(jQuery(that.eContainer + ' .simple-pagination ul li.disabled span').hasClass('prev')){
                    jQuery(that.eContainer + ' .simple-pagination ul li.disabled span.prev').parent().addClass('d-none');
                }
            }
        }
        if(iCurrentNumber == that.aData[that.sLevel].length){
            if(that.sCurrentMode == 'explanation'){
                if(jQuery(that.eContainer + ' .simple-pagination ul li.disabled span').hasClass('next')){
                    jQuery(that.eContainer + ' .simple-pagination ul li.disabled span.next').parent().addClass('d-none');
                }
            }
            if(that.sCurrentMode == ''){
                //jQuery(that.eContainer + ' .simple-pagination ul').append('<li class="js-finish-btn"><span class="next"><i class="las la-check"></i></span></li>');
                jQuery(that.eContainer + ' .js-btn-select').text('Finish');
            }
        }
        */
    }

    this.initQuestions = function() {
        var that = this;

        var aQuestions = ['a', 'b', 'c', 'd', 'e'];
        if (that.aData[that.sLevel].length != 0) {
            var sHhtmlTitle = '';
            var sHhtml = '';
            jQuery.each(that.aData[that.sLevel], function(iIndex, oQuestion) {
                var iQuizId = oQuestion['qcategory_id'] + '-' + oQuestion['qtest_id'];
                sHhtmlTitle += '<div class="haq d-none js-quiz-question js-quiz-question-nr-' + (parseInt(iIndex) + 1) + '" data-question="' + iQuizId + '">';
                var sQNumberHtml = (parseInt(iIndex) + 1) + '. ';
                if (oQuestion['is_unseen'] != undefined && oQuestion['is_unseen'] == '1') {
                    if (oQuestion['unseen_passage'] != undefined && oQuestion['unseen_passage'] != '') {
                        sHhtmlTitle += '<p class="quiz-question-text">' + sQNumberHtml + oQuestion['unseen_passage'] + '</p>';
                        sQNumberHtml = '';
                    }
                } else if (oQuestion['is_unseen'] != undefined && oQuestion['is_unseen'] == '2'){
                    sHhtmlTitle += '<div class="quiz-question-text quiz-reading-comprehension js-quiz-reading-comprehension has-scrollbar">' + oQuestion['unseen_passage'] + '</div>';
                }
                if (oQuestion['is_unseen'] == undefined || oQuestion['is_unseen'] != '2'){
                    sHhtmlTitle += '<p class="quiz-question-text">' + sQNumberHtml + oQuestion['quiz'] + '</p>';
                }
                if (oQuestion['questions_explain'] != undefined && oQuestion['questions_explain'] != '') {
                    sHhtmlTitle += '<div class="question-explanation d-none js-question-explain has-scrollbar"><span class="bold">Explanation: </span>' + oQuestion['questions_explain'] + '</div>';
                }
                sHhtmlTitle +=
                    '<input type="hidden" class="js-current-page-nr" value="' + iIndex + '" />' +
                    '<input type="hidden" class="js-current-question" value="' + iQuizId + '" />' +
                    '</div>';

                // Check if quiz is an essay quiz, if so show a text input field.
                sHhtml += '<div class="haq1 d-none js-quiz-question js-quiz-question-nr-' + (parseInt(iIndex) + 1) + '" data-question="' + iQuizId + '">';
                if (oQuestion['is_unseen'] != undefined && oQuestion['is_unseen'] == '2'){
                    if (that.isMobile()) {
                        sHhtml += '<br>';
                    }
                    sHhtml += '<p class="quiz-question-text">' + sQNumberHtml + oQuestion['quiz'] + '</p>';
                }
                if(oQuestion['is_essay'] != null && oQuestion['is_essay'] != undefined && oQuestion['is_essay'] == '1'){
                    var sQuizEssayExplain = oQuestion['essay_explain'];
                    sHhtml += 
                        '<div class="aaa row-bg-wrap row-question">' +
                            '<div class="vc_col-sm-12">' +
                                '<div class="quiz-essay-input-textarea">' +
                                    '<textarea data-option="essay" class="has-scrollbar inp-option-essay input-answer quiz-essay-textarea js-quiz-essay-textarea" data-questionid="' + iQuizId + '"></textarea>' +
                                '</div>' +
                                '<div class="vc_col-sm-12 explanation-text">' +
                                    '<div class="has-scrollbar content js-essay-explanation-text essay-explanation-text"><span class="bold">Explanation:</span> ' + sQuizEssayExplain + '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>';
                } else {
                    jQuery.each(aQuestions, function(key, value) {
                        var sQuizQuestion = oQuestion[value + '_option'];
                        var sQuizExplain = oQuestion[value + '_explain'];
                        if (sQuizQuestion != '') {
                            var sQuizId = iQuizId + '-' + value;
                            sHhtml +=
                                '<div class="hhh row-bg-wrap row-question">' +
                                    '<div class="vc_col-sm-12">' +
                                        '<div class="round">' +
                                        '<input class="input-answer inp-option-' + value + '" data-option="' + value + '" type="radio" id="checkbox' + sQuizId + '" name="answers" value="true" />' +
                                        '<label class="input-label" for="checkbox' + sQuizId + '"></label>' +
                                        '</div>' +

                                        '<label for="checkbox' + sQuizId + '" class="flz-label-text">' +
                                        '<p class="text-default inlineblock">' + sQuizQuestion + '</p>' +
                                        '</label>' +

                                        '<div class="round float-right disabler-container">' +
                                        '<input class="input-disabler js-input-disabler" type="checkbox" id="checkbox' + sQuizId + '-disabled" name="disable" value="true" />' +
                                        '<label for="checkbox' + sQuizId + '-disabled" class="disable"></label>' +
                                        '</div>' +

                                    '</div>' +

                                    '<div class="vc_col-sm-12 explanation-text">' +
                                        '<div class="content"><span class="bold">Explanation: </span> ' + sQuizExplain + '</div>' +
                                    '</div>' +
                                '</div>';
                        }
                    });
                }
                sHhtml += '</div>';
            });
            jQuery(that.eContainer + ' .js-quiz-content-title').html(sHhtmlTitle);
            jQuery(that.eContainer + ' .js-quiz-content').html(sHhtml);
        }
    };

    // Add events to the buttons (like submit, restart, replay, questions buttons etc)
    this.initEvents = function() {
        var that = this;

        jQuery('body').on('click', that.eContainer + ' .js-close-overlay-btn', function() {
            that.closePopupOverlay();
        });

        jQuery('body').on('click', that.eContainer + ' .js-input-disabler', function(event) {
            if (that.sCurrentMode == 'explanation') {
                event.preventDefault();
                return false;
            }

            //jQuery(this).parent().removeClass('is-checked');
            if (jQuery(this).is(':checked')) {
                //jQuery(this).parent().addClass('is-checked');
                jQuery(this).parent().parent().addClass('disabled').find('.input-answer').addClass('disabled').attr('disabled', 'disabled').removeAttr('checked').parent().addClass('disabled');
            } else {
                jQuery(this).parent().parent().removeClass('disabled').find('.input-answer').removeClass('disabled').removeAttr('disabled').removeAttr('checked').parent().removeClass('disabled');
            }

        });

        jQuery('body').on('click', that.eContainer + ' .js-quiz-content input.input-answer', function(event) {
            if (that.sCurrentMode == 'explanation') {
                event.preventDefault();

                jQuery(this).parent().parent().parent().parent().find('.explanation-text').slideUp('fast')
                    .animate({
                        opacity: 0
                    }, {
                        queue: false,
                        duration: 'fast'
                    });

                if (jQuery(this).parent().parent().parent().find('.explanation-text').is(":visible")) {
                    jQuery(this).parent().parent().parent().find('.explanation-text').slideUp('fast')
                        .animate({
                            opacity: 0
                        }, {
                            queue: false,
                            duration: 'fast'
                        });
                } else {
                    jQuery(this).parent().parent().parent().find('.explanation-text').css('opacity', 0)
                        .slideDown('fast')
                        .animate({
                            opacity: 1
                        }, {
                            queue: false,
                            duration: 'fast'
                        });
                }
                return false;
            }
        });

        jQuery('body').on('click', that.eContainer + ' .js-start-quiz-btn', function() {

            var bStartTimer = false;

            var iMinHeightContentQuiz = parseInt(jQuery(that.eContainer + ' .js-quiz-content-wrapper').attr('data-minheight'));
            if (!that.isMobile()) {
                jQuery(that.eContainer + ' .js-quiz-content-wrapper').css('min-height', iMinHeightContentQuiz + 'px');

                if(that.isIOS() == false){
                    jQuery(that.eContainer + ' .js-quiz-reading-comprehension').css('max-height', iMinHeightContentQuiz + 'px');
                    jQuery(that.eContainer + ' .js-quiz-essay-textarea').css('max-height', iMinHeightContentQuiz + 'px');
                    jQuery(that.eContainer + ' .js-quiz-essay-textarea').css('min-height', Math.round(iMinHeightContentQuiz - 83) + 'px');
                }

                if(that.sCurrentMode == 'explanation') {
                    if(that.isIOS() == false){
                        jQuery(that.eContainer + ' .js-quiz-reading-comprehension').css('max-height', Math.round(iMinHeightContentQuiz * 0.5) + 'px');
                        jQuery(that.eContainer + ' .js-question-explain').css('max-height', Math.round(iMinHeightContentQuiz * 0.5) + 'px');
                        
                        jQuery(that.eContainer + ' .js-quiz-essay-textarea').css('max-height', Math.round(iMinHeightContentQuiz * 0.5) + 'px').css('min-height', Math.round(iMinHeightContentQuiz * 0.5) + 'px');
                        jQuery(that.eContainer + ' .js-essay-explanation-text').css('max-height', Math.round(iMinHeightContentQuiz * 0.5) + 'px');
                    }
                }
            }
            if (that.isMobile() && that.isIOS() == false) {
                var iCalcMaxHeight = jQuery(window).height() * 0.7;
                jQuery(that.eContainer + ' .js-quiz-reading-comprehension').css('max-height', iCalcMaxHeight + 'px');
            }

            that.scrollToAnchor();

            jQuery(that.eContainer + ' .js-flz-cat-app-quiz-screen').css({
                'opacity': 0
            }).removeClass('d-none');
            jQuery(that.eContainer + ' .js-flz-loader-screen').animate({
                opacity: 0
            }, {
                duration: 200,
                complete: function() {
                    jQuery(that.eContainer + ' .js-flz-loader-screen').addClass('d-none');
                    jQuery(that.eContainer + ' .js-flz-cat-app-quiz-screen').animate({
                        opacity: 1
                    }, 200);
                }
            });
            if (that.sCurrentMode == '') {
                bStartTimer = true;
                jQuery(that.eContainer + ' .js-control-timer-btn').html(jQuery(that.eContainer + ' .js-timer-pause-btn').html());
            } else {
                //jQuery(that.eContainer + ' .js-control-timer-btn').html(jQuery(that.eContainer + ' .js-timer-play-btn').html());
                jQuery(that.eContainer + ' .js-control-timer-btn').html(jQuery(that.eContainer + ' .js-report-btn').html());
            }

            if (that.readCookie(that.sCookieName + '-is-first-time') == null || that.readCookie(that.sCookieName + '-is-first-time') != 'false') {
                bStartTimer = false;
                setTimeout(function() {
                    that.showPopupOverlay(jQuery(that.eContainer + ' .js-instructions-text').html());
                    jQuery(that.eContainer + ' .js-is-first-time').val('false');
                }, 500);
                that.bIsFirstTime = true;
                that.createCookie(that.sCookieName + '-is-first-time', 'false', 7);
            } else {
                that.bIsFirstTime = false;
            }
            if (bStartTimer == true) {
                that.startTimer();
                that.stopWatchStart();
            }
            that.checkStatusAnswerAndNavigation();

            if (that.oSaveDataInterval != undefined) {
                clearInterval(that.oSaveDataInterval);
            }

            that.oSaveDataInterval = setInterval(function() {
                that.saveAnswer();
            }, that.iSaveDataInterval);
        });

        jQuery('body').on('click', that.eContainer + ' .js-control-timer-btn', function(event, bPopup) {
            if (that.sCurrentMode == 'explanation') {
                if (jQuery(this).find('svg').hasClass('is-report-btn')) {
                    that.showReport();
                }
                event.preventDefault();
                return false;
            }
            if (that.bCountDownTimer == true) {
                that.pauseTimer();
                that.stopWatchPause();
                if (bPopup != null && bPopup == false) {
                    //
                } else {
                    that.showPopupOverlay(jQuery(that.eContainer + ' .js-app-is-paused').html());
                }
            } else {
                that.startTimer();
                that.stopWatchStart();
            }
        });

        jQuery('body').on('click', that.eContainer + ' .js-continue-drill', function(event) {
            that.closePopupOverlay();
        });

        jQuery('body').on('click', that.eContainer + ' .js-add-flag-btn', function(event) {
            /*
            if(that.sCurrentMode == 'explanation'){
                event.preventDefault();
                return false;
            }
            */

            var sFlagHtml = '<div class="flagged-answer"><i class="lab la-font-awesome-flag"></i></div>';

            if (jQuery(that.eContainer + ' .simple-pagination li.active').find('.flagged-answer').length > 0) {
                jQuery(that.eContainer + ' .simple-pagination li.active').find('.flagged-answer').remove();
                var iRemovePageNr = jQuery(that.eContainer + ' div.nav-container').pagination('getCurrentPage');
                that.sFlaggedQuestion = jQuery.grep(that.sFlaggedQuestion, function(iValue) {
                    return iValue != iRemovePageNr;
                });
            } else {
                jQuery(that.eContainer + ' .simple-pagination li.active').append(sFlagHtml);
                that.sFlaggedQuestion.push(jQuery(that.eContainer + ' div.nav-container').pagination('getCurrentPage'));
            }
        });

        jQuery('body').on('click', that.eContainer + ' .js-show-question-popup-btn', function() {
            //if(that.bIsFirstTime == false){
            that.showPopupOverlay(jQuery(that.eContainer + ' .js-instructions-text').html());
            //} else {
            //    that.showPopupOverlay(jQuery(that.eContainer + ' .js-directions-text').html());
            //}      
        });

        jQuery('body').on('click', that.eContainer + ' .js-explain-mode-yes', function() {
            event.preventDefault();
            that.readyExplanationMode();
        });

        jQuery('body').on('click', that.eContainer + ' .js-explain-mode-no', function() {
            event.preventDefault();
            that.closePopupOverlay();
            that.scrollToAnchor();
        });

        jQuery('body').on('click', that.eContainer + ' .js-continue-question-btn', function() {
            event.preventDefault();
            that.sCountDownTimerMode = 'up';
            that.saveQuestionData('countdownmode', that.sCountDownTimerMode, that.iCatId);
            that.saveQuestionData('questionTimeLeft', that.sCountDownTimer, that.iCatId);
            that.closePopupOverlay();
        });

        jQuery('body').on('click', that.eContainer + ' .js-btn-explanation', function() {
            event.preventDefault();
            that.readyExplanationMode();
        });

        jQuery('body').on('click', that.eContainer + ' .js-btn-explanation-quiz-complete', function() {
            event.preventDefault();
            that.readyExplanationMode(false);
        });

        jQuery('body').on('click', that.eContainer + ' .js-btn-explanation-popup', function() {
            if (that.sCurrentMode == 'explanation') {
                event.preventDefault();
                return false;
            }
            that.scrollToAnchor();
            that.showPopupOverlay(jQuery(that.eContainer + ' .js-go-to-explain-mode').html());
        });

        jQuery('body').on('click', that.eContainer + ' .js-reset-btn', function() {
            if (that.isMobile()) {
                that.showPopupOverlay(jQuery(that.eContainer + ' .js-reset-app').html(), true);
            } else {
                that.showPopupOverlay(jQuery(that.eContainer + ' .js-reset-app').html());
            }
            that.scrollToAnchor();
        });

        jQuery('body').on('click', that.eContainer + ' .js-reset-app-yes', function() {
            that.bIsFirstTime = false;
            jQuery(that.eContainer + ' .js-is-first-time').val('false');
            that.resetApp();
            that.closePopupOverlay();
            if (that.oSaveDataInterval != undefined) {
                clearInterval(that.oSaveDataInterval);
            }
        });

        jQuery('body').on('click', that.eContainer + ' .js-reset-app-no', function() {
            that.closePopupOverlay();
        });

        jQuery('body').on('click', that.eContainer + ' .js-close-instr-popup', function() {
            that.closePopupOverlay();
        });

        jQuery('body').on('click', that.eContainer + ' .js-finish-btn', function() {
            that.saveAnswer();
            that.showPopupOverlay(jQuery(that.eContainer + ' .js-results-text').html());
            that.scrollToAnchor();

            var iCorrectAnswers = 0;
            jQuery.each(that.userAnswer, function(key, oData) {
                if (oData['answered-option'] != '' && oData['correct'].indexOf(oData['answered-option']) != -1) {
                    iCorrectAnswers++;
                };
            });
            jQuery(that.eContainer + ' .js-res-correct-answer').text(iCorrectAnswers);
        });

        jQuery('body').on('click', that.eContainer + ' .js-btn-select', function(event) {
            if (that.sCurrentMode == 'explanation') {
                event.preventDefault();
                return false;
            }

            var oInputEl = jQuery(that.eContainer + ' .js-quiz-question').not('.d-none').find('input[type=radio]:checked');
            var oTextEl = jQuery(that.eContainer + ' .js-quiz-question').not('.d-none').find('textarea.js-quiz-essay-textarea');
            if (oInputEl != null && oInputEl.length > 0) {
                jQuery(that.eContainer + ' .js-quiz-question').not('.d-none').find('input[type=radio]:checked').addClass('js-question-is-answered');
            } else if (oTextEl != null && oTextEl != undefined && oTextEl.length > 0 && oTextEl.val() != ''){
                jQuery(that.eContainer + ' .js-quiz-question').not('.d-none').find('textarea.js-quiz-essay-textarea').addClass('js-question-is-answered');
            } else {
                that.showPopupOverlay(jQuery(that.eContainer + ' .js-no-answer-selected').html());
                event.preventDefault();
                return false;
            }

            if (jQuery(that.eContainer + ' .js-btn-select').text().toLowerCase() == 'finish') {
                jQuery(that.eContainer + ' .js-finish-btn').trigger('click');
                event.preventDefault();
                return false;
            }

            //var iCurrentPage = (jQuery(that.eContainer + ' div.nav-container').pagination('getCurrentPage'));
            var iCurrentPage = (jQuery(that.eContainer + ' .simple-pagination li.active').text());
            iCurrentPage = parseInt(iCurrentPage) + 1;

            that.saveAnswer();
            that.iStopWatchTimerAnswered = that.iStopWatchTimerAnswered + that.iStopWatchTimer;
            that.iStopWatchTimer = 0;
            that.goToQuestion(iCurrentPage);
        });

        jQuery('body').on('click', that.eContainer + ' .js-go-fullscreen', function(event) {
            that.goFullscreen(jQuery('.flz-cat-app-container'));
        });

        jQuery('body').on('click', that.eContainer + ' .crayons-col button', function(event) {
            if (jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active');
                that.disableTextSelection('.js-quiz-content-wrapper');
            } else {
                jQuery(that.eContainer + ' .crayons-col button').removeClass('active');
                jQuery(this).addClass('active');
                that.enableTextSelection('.js-quiz-content-wrapper');
            }
        });

        jQuery('body').on('mouseup', that.eContainer + ' .quiz-content', function(event) {
            var sRandomCssClass = "rangy-temp-" + (+new Date());
            if (jQuery(that.eContainer + ' .crayons-col button.active').length == 0) {
                //jQuery('span[class^="rangy-temp-"]').contents().unwrap();
                event.preventDefault();
                return false;
            }

            var sFontColor = jQuery(that.eContainer + ' .crayons-col button.active').attr('data-color');
            rangy.init();
            var classApplier = rangy.createClassApplier(sRandomCssClass, true);
            classApplier.applyToSelection();
            jQuery("." + sRandomCssClass).css({
                "color": sFontColor
            });

            document.getSelection().removeAllRanges();
        });

        jQuery('body').on('click', that.eContainer + ' .js-explain-nav-btn .js-prev-btn', function(event) {
            var iCurrentPage = (jQuery(that.eContainer + ' .simple-pagination li.active').text());
            var iPrevPageNr = parseInt(iCurrentPage) - 1;
            if (iPrevPageNr > 0) {
                that.goToQuestion(iPrevPageNr);
            }
            that.scrollToAnchor();
        });

        jQuery('body').on('click', that.eContainer + ' .js-explain-nav-btn .js-next-btn', function(event) {
            var iCurrentPage = (jQuery(that.eContainer + ' .simple-pagination li.active').text());
            var iNextPageNr = parseInt(iCurrentPage) + 1;
            if (iNextPageNr <= that.aData[that.sLevel].length) {
                that.goToQuestion(iNextPageNr);
            }
            that.scrollToAnchor();
        });

        jQuery('body').on('click', that.eContainer + ' .js-mobile-close-overlay-btn', function(event) {
            jQuery(that.eContainer + ' .js-debug-overlay').addClass('d-none');
        });

        jQuery('body').on('click', that.eContainer + ' .js-report-question-btn', function(event) {
            event.preventDefault();
            if (that.sCurrentMode == 'explanation') {
                var iPageNumber = jQuery(this).attr('data-pagenr');
                that.goToQuestion(iPageNumber);
                that.closePopupOverlay();
            }
        });

    }

    this.scrollToAnchor = function() {
        var that = this;
        //if (that.isMobile() == false) {
            var headerMarginTop = 0;
            if (jQuery('#wpadminbar').length > 0) {
                if (jQuery('#wpadminbar').is(':visible')) {
                    headerMarginTop = 32;
                }
            }

            var iAnchorOffset = jQuery(that.eContainer + ' #anchor-flz-cat-app-container').offset().top;
            //if(that.isMobile()){
            //    iAnchorOffset = jQuery(that.eContainer + ' .js-quiz-content-title').offset().top;
            //}

            jQuery('html, body').animate({
                scrollTop: (iAnchorOffset - headerMarginTop)
            }, 250);
            setTimeout(function() {
                jQuery('#header-outer').addClass('invisible');
            }, 350);
        //}
    }

    this.resetApp = function() {
        var that = this;
        that.sCurrentMode = '';
        that.saveQuestionData('currentMode', that.sCurrentMode, that.iCatId);
        that.scrollToAnchor();

        // Events attached to it.
        jQuery(that.eContainer + ' .row-question .input-answer').parent().parent().parent().removeClass('correct incorrect').find('input').prop("checked", false);
        that.enableAnswer(that.eContainer + ' .row-question .input-answer');

        // Reset the values
        jQuery(that.eContainer + ' .js-quiz-select-btn-wrapper').show();
        //jQuery(that.eContainer + ' .row-question').find('.explanation-text').slideUp('fast');
        jQuery(that.eContainer + ' .row-question').find('.explanation-text').hide(50);
        jQuery(that.eContainer).removeClass('js-explanation-mode explanation-mode-on');
        jQuery(that.eContainer + ' .simple-pagination li .flagged-answer').remove();
        jQuery(that.eContainer + ' .simple-pagination ul li').removeClass('answered correct incorrect');
        jQuery(that.eContainer + ' .row-question .input-answer').removeClass('disabled js-question-is-answered').parent().removeClass('disabled').parent().removeClass('disabled');
        jQuery('span[class^="rangy-temp-"]').contents().unwrap();
        jQuery(that.eContainer + ' .js-explain-nav-btn').addClass('d-none');
        jQuery(that.eContainer + ' .js-control-timer-btn').parent().removeClass('is-disabled');
        jQuery(that.eContainer + ' .js-quiz-status-txt').remove();
        jQuery(that.eContainer + ' .js-left-off-text').remove();
        jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question .js-quiz-essay-textarea').removeAttr('readonly');
        jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question .js-quiz-essay-textarea').val('');

        if (!that.isMobile()) {
            var iMinHeightContentQuiz = parseInt(jQuery(that.eContainer).attr('data-startminheight'));
            //if(iMinHeightContentQuiz < that.iMinHeightAppDefault){
            //    iMinHeightContentQuiz = that.iMinHeightAppDefault;
            //}
            jQuery(that.eContainer).css('min-height', iMinHeightContentQuiz + 'px');
            
            var iMinHeightQuestion = parseInt(jQuery(that.eContainer + ' .js-quiz-content-wrapper').attr('data-minheight'));
            if(that.isIOS() == false){
                jQuery(that.eContainer + ' .js-quiz-reading-comprehension').css('max-height', iMinHeightQuestion + 'px');
            }
            jQuery(that.eContainer + ' .js-question-explain').removeAttr('max-height');
        }

        that.saveQuestionData('currentPageNr', '1', that.iCatId);
        that.sCountDownTimerMode = '';
        that.saveQuestionData('countdownmode', that.sCountDownTimerMode, that.iCatId);
        that.saveQuestionData('savedDatetime', 0, that.iCatId);
        that.sCountDownTimer = jQuery(that.eContainer + ' .js-countdown').attr('data-startt');
        that.iStopWatchTimer = 0;
        that.iStopWatchTimerAnswered = 0;
        that.initTimer();
        that.userAnswer = {};
        that.userAnswerTime = {};
        that.sFlaggedQuestion = [];
        that.goToQuestion(1);
        that.saveAnswer();

        /*
        var iTotalTime = jQuery(that.eContainer + ' .js-start-app-status').attr('data-totaltime');
        var sPlural = 'questions';
        if(that.aData[that.sLevel].length == 1){
            sPlural = 'question';
        }
        */
        jQuery(that.eContainer + ' .js-start-quiz-btn').text('Start');
        //jQuery(that.eContainer + ' .js-flz-loader-screen .contents p').remove();

        jQuery(that.eContainer + ' .js-flz-loader-screen').css({
            'opacity': 0
        }).removeClass('d-none');
        jQuery(that.eContainer + ' .js-flz-loader-screen').animate({
            opacity: 1
        }, {
            duration: 200,
            complete: function() {
                jQuery(that.eContainer + ' .js-flz-cat-app-quiz-screen').css({
                    'opacity': 1
                }).addClass('d-none');
            }
        });
    }

    this.enableAnswer = function(eInput) {
        jQuery(eInput).parent().parent().removeClass('disabled').find('.input-answer').removeAttr('disabled').removeAttr('checked').parent().removeClass('disabled');
        jQuery(eInput).parent().parent().find('.js-input-disabler').prop("checked", false);
    }

    this.disableAnswer = function(eInput) {
        var that = this;
        if (that.sCurrentMode == '') {
            jQuery(eInput).parent().parent().addClass('disabled').find('.input-answer').addClass('disabled').attr('disabled', 'disabled').removeAttr('checked').parent().addClass('disabled');
            jQuery(eInput).parent().parent().find('.js-input-disabler').prop("checked", true);
        }
    }

    // New question will be loaded
    this.loadNewQuestion = function(iQuestionNumber) {
        var that = this;
        var iIndexNr = parseInt(iQuestionNumber) - 1;

        if (iQuestionNumber != undefined && iQuestionNumber != null) {
            jQuery(that.eContainer + ' .js-question-nr').text(iQuestionNumber);
            jQuery(that.eContainer + ' .js-quiz-question').addClass('d-none');
            //jQuery(that.eContainer + ' .js-quiz-question').fadeOut(500, function() {
            //    jQuery(this).addClass('d-none');
            //});
            //jQuery(that.eContainer + ' .js-quiz-question-nr-' + iQuestionNumber).css({ opacity: 0 }).removeClass('d-none').fadeIn(500, function() {
            //jQuery(this).addClass('d-none'); 
            //});
            jQuery(that.eContainer + ' .js-quiz-question-nr-' + iQuestionNumber).hide().removeClass('d-none').fadeIn(350, function() {
                //jQuery(that.eContainer + ' .js-quiz-question-nr-' + iQuestionNumber).removeClass('d-none'); 
            });
        } else {
            jQuery(that.eContainer + ' .js-question-nr').text('1');
            jQuery(that.eContainer + ' .js-quiz-question').addClass('d-none');
            jQuery(that.eContainer + ' .js-quiz-question-nr-1').removeClass('d-none');
        }
    }

    this.goToQuestion = function(iPageNumber, bSave) {
        var that = this;
        jQuery(that.eContainer + ' div.nav-container').pagination('drawPage', iPageNumber);

        that.loadNewQuestion(iPageNumber);
        that.checkNavigationLeftRight(iPageNumber);
        that.checkStatusAnswerAndNavigation();

        if (jQuery(that.eContainer + ' .js-flz-loader-screen').hasClass('d-none')) {
            that.scrollToAnchor();
        }
        if (bSave == undefined) {
            that.saveAnswer();
        }
    }

    this.saveAnswer = function() {
        var that = this;
        that.currentIndex = jQuery(that.eContainer + ' .js-quiz-question').not('.d-none').find('input.js-current-page-nr').val() || 0;
        var iQuestionId = that.aData[that.sLevel][that.currentIndex]['qtest_id'];
        var bQuestionAnswered = 'false';
        var sSelectedOption = '';
        if (that.userAnswer[that.iCatId + '-' + iQuestionId] == undefined) {
            that.userAnswer[that.iCatId + '-' + iQuestionId] = {};
        }
        if (that.userAnswerTime[that.iCatId + '-' + iQuestionId] == undefined) {
            that.userAnswerTime[that.iCatId + '-' + iQuestionId] = {};
        }

        if (jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('input[type=radio].js-question-is-answered').length > 0) {
            bQuestionAnswered = 'true';
            sSelectedOption = jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('input[type=radio]:checked').attr('data-option');
        }

        var sCorrectAnswer = that.aData[that.sLevel][that.currentIndex]['right_answer'];

       
        var sDisabledOption = '';
        that.userAnswer[that.iCatId + '-' + iQuestionId]['correct'] = sCorrectAnswer;
        var iQuestionAnswerElapsed = parseInt(that.iStopWatchTimer);
        that.userAnswerTime[that.iCatId + '-' + iQuestionId]['time-used'] = iQuestionAnswerElapsed;

        jQuery.each(jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find(' input.input-answer'), function(key, value) {
            var sOption = jQuery(value).attr('data-option');
            var sAnswer = '';
            if (jQuery(value).is(':checked')) {
                sAnswer = jQuery(value).val();
            }
            if (jQuery(value).hasClass('disabled')) {
                sAnswer = 'disabled';
                sDisabledOption += sOption + ',';
            }
            that.userAnswer[that.iCatId + '-' + iQuestionId][sOption] = sAnswer;
        });

        that.userAnswer[that.iCatId + '-' + iQuestionId]['answered-page'] 	= that.currentIndex;
        that.userAnswer[that.iCatId + '-' + iQuestionId]['answered'] 		= bQuestionAnswered;
        that.userAnswer[that.iCatId + '-' + iQuestionId]['answered-option'] = sSelectedOption;
        that.userAnswer[that.iCatId + '-' + iQuestionId]['answer-disabled'] = sDisabledOption;

        // Essay questions
        var oTextEl = jQuery(that.eContainer + ' .js-quiz-question').not('.d-none').find('textarea.js-quiz-essay-textarea');
        if (oTextEl != null && oTextEl != undefined && oTextEl.length > 0){
            that.userAnswer[that.iCatId + '-' + iQuestionId]['answered-essay'] = oTextEl.val();
            that.userAnswer[that.iCatId + '-' + iQuestionId]['correct'] = 'essay';
            that.userAnswer[that.iCatId + '-' + iQuestionId]['answered'] = 'true';
            that.userAnswer[that.iCatId + '-' + iQuestionId]['answered-option'] = 'essay';
        }

        that.saveQuestionData('stopwatchTotal', that.iStopWatchTimerAnswered, that.iCatId);
        that.saveQuestionData('useranswer', that.userAnswer, that.iCatId);
        that.saveQuestionData('useranswertime', that.userAnswerTime, that.iCatId);

        var iTotalTime = parseInt(that.hmsToSecondsOnly(jQuery(that.eContainer + ' .js-countdown').attr('data-startt')));
        var iTimeLeft = iTotalTime - that.iStopWatchTimerAnswered;
        that.saveQuestionData('questionTimeLeft', that.utilSecToHhMmSs(iTimeLeft), that.iCatId);
        that.saveQuestionData('currentPageNr', (jQuery(that.eContainer + ' .simple-pagination li.active').text()), that.iCatId);
        that.saveQuestionData('flaggedQuestion', that.sFlaggedQuestion, that.iCatId);
        that.saveQuestionData('savedDatetime', new Date().getTime(), that.iCatId);
        that.saveAnswerToDb(that.iCatId, that.sLevel);
    }

    this.checkStatusAnswerAndNavigation = function() {
        var that = this;

        // Change navigation color if question is answered
        jQuery(that.eContainer + ' .js-quiz-question .js-question-explain').addClass('d-none');
        if (that.sCurrentMode == 'explanation') {
            var sCurrentPageNr = jQuery(that.eContainer + ' .js-quiz-question').not('.d-none').find('.js-current-page-nr').val() || 0;
            jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.inp-option-' + that.aData[that.sLevel][sCurrentPageNr]['right_answer'].substring(0, 1)).parent().parent().parent().addClass('correct');
            jQuery(that.eContainer + ' .js-quiz-question .js-question-explain').removeClass('d-none');
        }

        if (that.sCurrentMode == 'explanation') {
            jQuery(that.eContainer + ' .simple-pagination ul li').removeClass('answered correct incorrect');
            jQuery(that.eContainer + ' .simple-pagination ul li').addClass('answered').addClass('incorrect');
            jQuery(that.eContainer + ' .simple-pagination ul li a.next').parent().removeClass('answered correct incorrect');
            jQuery(that.eContainer + ' .simple-pagination ul li a.prev').parent().removeClass('answered correct incorrect');
        }

        var bQuestionIsAnswered = false;
        if (that.userAnswer != undefined) {
            var sCurrentQuestionId = jQuery(that.eContainer + ' .js-quiz-question').not('.d-none').find('.js-current-question').val();
            jQuery.each(that.userAnswer, function(key, oData) {
                var iPagesAnswered = '';

                if (oData['answered'] != undefined && oData['answered'] == 'true') {
                    iPagesAnswered = parseInt(oData['answered-page']) || 0;
                    iPagesAnswered = iPagesAnswered + 1;
                    jQuery.each(jQuery(that.eContainer + ' .simple-pagination ul li'), function(index, eLi) {
                        if (parseInt(jQuery(eLi).text()) == iPagesAnswered) {
                            jQuery(eLi).addClass('answered');

                            if (that.sCurrentMode == 'explanation') {
                                if (oData['answered-option'] != '' && oData['correct'].indexOf(oData['answered-option']) != -1) {
                                    jQuery(eLi).removeClass('correct incorrect').addClass('correct');
                                } else {
                                    jQuery(eLi).removeClass('correct incorrect').addClass('incorrect');
                                }
                            }
                        }
                    });
                }
                if (key == sCurrentQuestionId) {
                    jQuery.each(jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.row-question .input-answer'), function(index, eInput) {
                        if (oData['answered-option'] != undefined) {
                            jQuery(eInput).parent().find('.inp-option-' + oData['answered-option']).addClass('js-question-is-answered').prop("checked", true);
                        }
                        // Make input disabled when checked
                        if (that.sCurrentMode == '') {
                            if (oData['answer-disabled'] != null && oData['answer-disabled'] != '') {
                                if (oData['answer-disabled'].indexOf(jQuery(eInput).attr('data-option')) != -1) {
                                    that.disableAnswer(eInput);
                                }
                            }
                        }

                        // Fill out essay textarea
                        if (oData['answered-essay'] != null && oData['answered-essay'] != '') {
                            jQuery(eInput).val(oData['answered-essay']);
                        }

                        if (that.sCurrentMode == 'explanation') {
                            jQuery(eInput).parent().parent().parent().removeClass('correct incorrect');
                            jQuery(eInput).parent().find('.inp-option-' + oData['correct'].substring(0, 1)).parent().parent().parent().addClass('correct');
                            if (oData['answered-option'] != null && oData['answered-option'].indexOf(jQuery(eInput).attr('data-option')) != -1) {
                                if (oData['correct'].indexOf(oData['answered-option']) != -1) {
                                    jQuery(eInput).parent().parent().parent().addClass('correct');
                                } else {
                                    jQuery(eInput).parent().parent().parent().addClass('incorrect');
                                }
                            };
                        };

                    });


                    // Show explanation when in default mode, open the one that the user answered
                    /*
                    if(that.sCurrentMode == 'explanation'){
                        if(oData['answered-option'] != null && oData['answered-option'] != ''){
                            bQuestionIsAnswered = true;

                            if(jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').length == 1){
                                jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.explanation-text').hide(50);
                            }

                            if(jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.incorrect').length == 1){
                                var oExplainText = jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.row-question .inp-option-' + oData['answered-option']).parent().parent().parent().find('.explanation-text');

                                if (oExplainText.is(':hidden')) {
                                    oExplainText.css('opacity', 0).slideDown(100).animate(
                                        { opacity: 1 },
                                        { queue: true, duration: 100 }
                                    );
                                }
                            }
                        }
                    }
                    */
                }

            });
        };

        // Show explanation when in default mode, open when user hasn't answered
        if (that.sCurrentMode == 'explanation' && that.userAnswer != undefined) {
            var sCurrentQuestionId = jQuery(that.eContainer + ' .js-quiz-question').not('.d-none').find('.js-current-question').val();
            //if(bQuestionIsAnswered == false){
            //jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').find('.explanation-text').hide(50);
            jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.explanation-text').hide();

            // Add check for essay 
            var isEssayQuestion = jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.js-quiz-essay-textarea');

            if (jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.incorrect').length == 1 || isEssayQuestion.length > 0) {
                setTimeout(function() {
                    var oExplainText = jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.row-question .inp-option-' + that.userAnswer[sCurrentQuestionId]['answered-option']).parent().parent().parent().find('.explanation-text');

                    if (oExplainText.is(':hidden')) {
                        oExplainText.css('opacity', 0).slideDown(100).animate({
                            opacity: 1
                        }, {
                            queue: false,
                            duration: 100
                        });
                    }
                }, 80)
            } else
            if (jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.correct').length == 1) {
                if (that.userAnswer[sCurrentQuestionId] == undefined || that.userAnswer[sCurrentQuestionId] == null) {
                    setTimeout(function() {
                        var oExplainText = jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.row-question.correct').find('.explanation-text');

                        if (oExplainText.is(':hidden')) {
                            oExplainText.css('opacity', 0).slideDown(100).animate({
                                opacity: 1
                            }, {
                                queue: false,
                                duration: 100
                            });
                        }
                    }, 80)
                }
            }
            /*
            var oExplainText = jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question').not('.d-none').find('.correct').find('.explanation-text');
            if (oExplainText.is(':hidden')) {
                oExplainText.css('opacity', 0).slideDown(100).animate(
                    { opacity: 1 },
                    { queue: false, duration: 100 }
                );
            }
            */
            //}
        }

        jQuery.each(that.sFlaggedQuestion, function(i, iFlaggedPageNr) {
            jQuery.each(jQuery(that.eContainer + ' .simple-pagination li'), function(j, eLi) {
                if (parseInt(iFlaggedPageNr) == parseInt(jQuery(eLi).text())) {
                    if (jQuery(eLi).find('.flagged-answer').length == 0) {
                        var sFlagHtml = '<div class="flagged-answer"><i class="lab la-font-awesome-flag"></i></div>';
                        jQuery(eLi).append(sFlagHtml);
                    }
                }
            });
        });

        if (that.sCurrentMode == 'explanation') {
            $('.js-quiz-content .js-quiz-question').find('.explanation-text .content').removeClass('not-answered-correct');
            var bCheckedCorrectInput = $('.js-quiz-content .js-quiz-question').not('.d-none').find('.correct').find('.input-answer').is(':checked');
            if (bCheckedCorrectInput == false) {
                $('.js-quiz-content .js-quiz-question').not('.d-none').find('.correct').find('.input-answer').parent().parent().parent().find('.explanation-text .content').addClass('not-answered-correct');
            }

        }
    }

    this.initTimer = function(sStartAt) {
        var that = this;
        if (that.oTimerInterval != undefined) {
            clearInterval(that.oTimerInterval);
        }
        jQuery(that.eContainer + ' .js-countdown').removeClass('red');

        var sTotalCountDownTimer = jQuery(that.eContainer + ' .js-countdown').attr('data-startt');
        jQuery(that.eContainer + ' .js-total-time').html(that.formatTimer(sTotalCountDownTimer));
        jQuery(that.eContainer + ' .js-countdown').html(that.formatTimer(sTotalCountDownTimer));
        if (sStartAt != undefined && sStartAt != '') {
            jQuery(that.eContainer + ' .js-countdown').html(that.formatTimer(sStartAt));
        }
        if (that.sCountDownTimerMode == 'up' || jQuery(that.eContainer + ' .js-countdown').text() == '00:00') {
            jQuery(that.eContainer + ' .js-countdown').addClass('red');
        }
    }

    this.formatTimer = function(sTimer) {
        var oTimer = (sTimer != '' ? sTimer.split(':') : '');
        var iMinutes = parseInt(oTimer[0], 10);
        var iSeconds = parseInt(oTimer[1], 10);
        iMinutes = (iMinutes < 10) ? '0' + iMinutes : iMinutes;
        iSeconds = (iSeconds < 10) ? '0' + iSeconds : iSeconds;

        return iMinutes + ':' + iSeconds;
    }

    this.startTimer = function(bCountUp) {
        var that = this;
        if (that.oTimerInterval != undefined) {
            clearInterval(that.oTimerInterval);
        }

        if (that.sCountDownTimerMode != undefined && that.sCountDownTimerMode == 'up') {
            bCountUp = true;
        }

        that.oTimerInterval = setInterval(function() {
            that.resumeTimer(bCountUp);
        }, 1000);
        that.bCountDownTimer = true;
        jQuery(that.eContainer + ' .js-control-timer-btn').html(jQuery(that.eContainer + ' .js-timer-pause-btn').html());
    }

    this.resumeTimer = function(bCountUp) {
        var that = this;
        var oTimer = jQuery(that.eContainer + ' .js-countdown').text().split(':');

        //var iHour = parseInt(oTimer[0], 10);
        var iMinutes = parseInt(oTimer[0], 10);
        var iSeconds = parseInt(oTimer[1], 10);

        if (bCountUp != undefined && bCountUp === true) {
            ++iSeconds;
            iMinutes = (iSeconds > 59) ? ++iMinutes : iMinutes;
            iSeconds = (iSeconds > 59) ? 00 : iSeconds;
        } else {
            --iSeconds;
            iMinutes = (iSeconds < 0) ? --iMinutes : iMinutes;
            iSeconds = (iSeconds < 0) ? 59 : iSeconds;
            if (iMinutes < 0) {
                clearInterval(that.oTimerInterval);
            }
        }

        iMinutes = (iMinutes < 10) ? '0' + iMinutes : iMinutes;
        iSeconds = (iSeconds < 10) ? '0' + iSeconds : iSeconds;

        that.sCountDownTimer = iMinutes + ':' + iSeconds;
        jQuery(that.eContainer + ' .js-countdown').text(that.sCountDownTimer);
        jQuery(that.eContainer + ' .js-countdown').removeClass('count-up');
        if ((parseInt(iMinutes) == 0 && parseInt(iSeconds) <= 30) || (bCountUp != undefined && bCountUp === true)) {
            jQuery(that.eContainer + ' .js-countdown').addClass('red');
        } else {
            jQuery(that.eContainer + ' .js-countdown').removeClass('red');
        }

        if ((bCountUp != undefined && bCountUp === true)) {
            jQuery(that.eContainer + ' .js-countdown').addClass('count-up');
        }

        if (parseInt(iMinutes) == 0 && parseInt(iSeconds) == 0) {
            clearInterval(that.oTimerInterval);
            jQuery(that.eContainer + ' .js-countdown').text('00:00');
            that.showTimeExpiredPoup();
            that.stopWatchPause();
        }
    }

    this.pauseTimer = function() {
        var that = this;
        clearInterval(that.oTimerInterval);
        that.bCountDownTimer = false;
        jQuery(that.eContainer + ' .js-control-timer-btn').html(jQuery(that.eContainer + ' .js-timer-play-btn').html());
    };

    this.stopWatchStart = function() {
        var that = this;
        if (that.oStopWatchInterval != undefined) {
            clearInterval(that.oStopWatchInterval);
        }

        that.oStopWatchInterval = setInterval(function() {
            that.stopWatchResume();
        }, 1000);
    }

    this.stopWatchPause = function() {
        var that = this;
        if (that.oStopWatchInterval != undefined) {
            clearInterval(that.oStopWatchInterval);
        }
    }

    this.stopWatchResume = function() {
        var that = this;
        that.iStopWatchTimer++;
    }

    this.checkMobileOrientation = function() {
        var oOrientation = window.screen.orientation || window.screen.mozOrientation || window.screen.msOrientation || null;

        if (oOrientation && oOrientation.type) {
            if (oOrientation.type === 'landscape' || oOrientation.type === 'landscape-primary' || oOrientation.type === 'landscape-secondary') {
                return 'landscape';
            } else {
                return 'portrait';
            }
        }
        return 'unknown';
    }

    this.createCookie = function(name, value, days) {
        var expires;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    this.readCookie = function(name) {
        var nameEQ = encodeURIComponent(name) + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }

    this.eraseCookie = function(name) {
        createCookie(name, "", -1);
    }

    this.createLocalStorage = function(sKey, mValue) {
        localStorage.setItem(sKey, JSON.stringify(mValue));
    }

    this.readLocalStorage = function(sKey) {
        return localStorage.getItem(sKey);
    }

    this.saveQuestionData = function(sKey, mValue, iId) {
        var that = this;
        if (window.oSavedData[that.sCookieName]['catapp-questionBlock:' + iId] == undefined || window.oSavedData[that.sCookieName]['catapp-questionBlock:' + iId] == null) {
            window.oSavedData[that.sCookieName]['catapp-questionBlock:' + iId] = {}
        }
        window.oSavedData[that.sCookieName]['catapp-questionBlock:' + iId][sKey] = mValue;

        // Save to local storage
        that.createLocalStorage(that.sCookieName, window.oSavedData[that.sCookieName]);
    }

    this.saveAnswerToDb = function(sCategoryId, sLevel) {
        var that = this;
        jQuery.ajax({
            url: ajax_object.ajaxurl,
            type: 'POST',
            data: {
                'action': 'CatApp_saveAnswer',
                'user_answer': JSON.stringify(window.oSavedData[that.sCookieName]['catapp-questionBlock:' + sCategoryId]),
                'category_id': sCategoryId,
                'level': sLevel
            },
            success: function(oResult) {
                //console.log(oResult);
            },
            error: function(errorThrown) {
                console.log(errorThrown);
            }
        });
    }

    this.isIOS = function() {
        if (/iPad/.test(navigator.platform)) {
            return true;
        } else {
            return navigator.maxTouchPoints &&
                navigator.maxTouchPoints > 2 &&
                /MacIntel/.test(navigator.platform);
        }
    }

    this.isIpadOS = function() {
        return navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2 &&
            /MacIntel/.test(navigator.platform);
    }

    this.showPopupOverlay = function(sContent, bHideClose) {
        var that = this;

        if (that.sCurrentMode != 'explanation') {
            that.pauseTimer();
            that.stopWatchPause();
        }
        var eOverlay = jQuery(that.eContainer + ' .popup-overlay');
        eOverlay.removeAttr('style');
        jQuery(that.eContainer + ' .popup-overlay').css({
            'opacity': 0
        });

        //jQuery(that.eContainer + ' .js-fade-layer-popup').remove();
        //jQuery('.js-fade-layer-popup').remove();
        jQuery(that.eContainer + ' .popup-overlay .js-text-content').html('');
        if (bHideClose) {
            jQuery(that.eContainer + ' .popup-overlay .close-btn').hide(100);
        } else {
            jQuery(that.eContainer + ' .popup-overlay .close-btn').show(100);
        }
        jQuery(that.eContainer + ' .popup-overlay .js-text-content').html(sContent);

        if (jQuery('.js-fade-layer-popup').length == 0) {
            var sBgLayer = jQuery('<div class="fade-layer-popup js-fade-layer-popup"></div>');
            jQuery(that.eContainer).parent().parent().append(jQuery(sBgLayer).fadeIn(300));
        }
        jQuery(that.eContainer + ' .popup-overlay').removeClass('d-none').animate({
            opacity: 1
        }, 300);
        
        // Fix the subpixel problem
        var iDividableWidth = Math.round(eOverlay.outerWidth() / 2) * 2;
        var iDividableHeight = Math.round(eOverlay.outerHeight() / 2) * 2;

        if (that.isMobile()) {
            if (jQuery(that.eContainer + ' .popup-overlay').outerHeight() < jQuery(that.eContainer + ' .wpb_wrapper').outerHeight()) {
                jQuery(that.eContainer + ' .popup-overlay').css({
                    'top': ((iDividableHeight / 2) + 75) + 'px'
                });
            } else {
                jQuery(that.eContainer + ' .popup-overlay').css({
                    'top': ((iDividableHeight / 2)) + 'px'
                });
            }
            //jQuery(that.eContainer + ' .popup-overlay').css({'top' : (($('.js-quiz-content-wrapper').offset().top) + 30) + 'px'});
            eOverlay.outerWidth(jQuery(window).width()).outerHeight(iDividableHeight).css({
                'maxWidth': '650px'
            });
        } else {
            eOverlay.outerWidth(iDividableWidth).outerHeight(iDividableHeight).css({
                'maxWidth': '650px'
            });
        }
    }

    this.closePopupOverlay = function() {
        var that = this;

        //if(jQuery(that.eContainer + ' .js-text-content').text().indexOf('Drill Paused') != -1){
        if (that.sCurrentMode != 'explanation') {
            that.startTimer();
            that.stopWatchStart();
        }
        //}
        //jQuery('.js-fade-layer-popup').fadeOut(100, function() {
        //jQuery(this).remove();
        //})
        //jQuery(that.eContainer + ' .popup-overlay').animate({opacity: 0}, {
        //    duration: 100,
        //   complete: function () {
        jQuery('.js-fade-layer-popup').hide(300, function(){
            jQuery('.js-fade-layer-popup').remove();
            jQuery(that.eContainer + ' .popup-overlay').css({
                opacity: 0
            });
        });
        jQuery(that.eContainer + ' .popup-overlay .js-text-content').html('');
        jQuery(that.eContainer + ' .popup-overlay').addClass('d-none');
        //    }
        //});
    }

    this.readyExplanationMode = function(bSaveData) {
        var that = this;
        if (jQuery(that.eContainer + ' .popup-overlay .close-btn').is(":visible")) {
            //jQuery(that.eContainer + ' .js-close-overlay-btn').trigger('click');
        } else {
            //that.closePopupOverlay();
        }
        that.pauseTimer();
        that.stopWatchPause();
        jQuery(that.eContainer + ' .js-quiz-select-btn-wrapper').hide();
        that.sCurrentMode = 'explanation';
        that.saveQuestionData('currentMode', that.sCurrentMode, that.iCatId);
        if (bSaveData == undefined) {
            that.saveAnswer();
        }
        that.goIntoExplainationMode();
        that.goToQuestion(1, false);

        if (that.oSaveDataInterval != undefined) {
            clearInterval(that.oSaveDataInterval);
        }
    };

    this.goIntoExplainationMode = function() {
        var that = this;

        if (jQuery(that.eContainer).hasClass('js-explanation-mode')) {
            //that.sCurrentMode = '';
            //jQuery(that.eContainer).removeClass('js-explanation-mode explanation-mode-on');
            //jQuery(that.eContainer + ' .js-control-timer-btn').trigger('click');
        } else {
            // Change minimum height
            if (!that.isMobile()) {
                //var iMinHeightContentQuiz = parseInt(jQuery(that.eContainer + ' .js-quiz-content-wrapper').css('min-height'));
                //if(iMinHeightContentQuiz < that.iMinHeightAppExplain){
                //    iMinHeightContentQuiz = that.iMinHeightAppExplain;
                //    jQuery(that.eContainer + ' .js-quiz-content-wrapper').css('min-height', iMinHeightContentQuiz + 'px');
                //}
                //if (!that.isMobile()) {
                    var iMinHeightContentQuiz = parseInt(jQuery(that.eContainer + ' .js-quiz-content-wrapper').attr('data-minheightexpl'));
                    jQuery(that.eContainer + ' .js-quiz-content-wrapper').css('min-height', iMinHeightContentQuiz + 'px');
                //}
            }

            jQuery(that.eContainer).addClass('js-explanation-mode explanation-mode-on');
            jQuery(that.eContainer + ' .js-quiz-question').find('*').removeClass('disabled');
            jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question .input-answer').prop('checked', false);
            jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question .input-answer').removeAttr('disabled');
            jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question input.input-disabler').prop('checked', false);
            
            // Make essay textarea readonly
            jQuery(that.eContainer + ' .js-quiz-content .js-quiz-question .js-quiz-essay-textarea').attr('readonly', 'readonly');

            // We change the height of the questions on the left in explanation mode
            var iMinHeightContentQuiz = parseInt(jQuery(that.eContainer + ' .js-quiz-content-wrapper').attr('data-minheight'));
            if (!that.isMobile()) {
                
                if(that.isIOS() == false){
                    jQuery(that.eContainer + ' .js-quiz-reading-comprehension').css('max-height', Math.round(iMinHeightContentQuiz * 0.5) + 'px');
                    jQuery(that.eContainer + ' .js-question-explain').css('max-height', Math.round(iMinHeightContentQuiz * 0.5) + 'px');
                    
                    jQuery(that.eContainer + ' .js-quiz-essay-textarea').css('max-height', Math.round(iMinHeightContentQuiz * 0.5) + 'px').css('min-height', Math.round(iMinHeightContentQuiz * 0.5) + 'px');
                    jQuery(that.eContainer + ' .js-essay-explanation-text').css('max-height', Math.round(iMinHeightContentQuiz * 0.5) + 'px');
                }
            }

            if (that.bCountDownTimer == true) {
                jQuery(that.eContainer + ' .js-control-timer-btn').trigger('click', false);
            }
            jQuery(that.eContainer + ' .js-explain-nav-btn').removeClass('d-none');
            //jQuery(that.eContainer + ' .js-control-timer-btn').parent().addClass('is-disabled');
        }
        //that.checkStatusAnswerAndNavigation();
        setTimeout(function() {
            if (jQuery(that.eContainer + ' .js-flz-loader-screen').hasClass('d-none')) {
                that.showReport();
            }
        }, 300);
    }

    this.showTimeExpiredPoup = function() {
        var that = this;
        that.showPopupOverlay(jQuery(that.eContainer + ' .js-time-expired-text').html());
    }

    this.goFullscreen = function(oElement) {
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            element = jQuery(oElement).get(0);
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }
    }

    this.isMobile = function() {
        var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        return isMobile;
    }

    this.hmsToSecondsOnly = function(str) {
        var p = str.split(':'),
            s = 0,
            m = 1;

        while (p.length > 0) {
            s += m * parseInt(p.pop(), 10);
            m *= 60;
        }

        return s;
    }

    this.utilSecToHhMmSs = function(iSec, bWithHour) {
        var iHours = Math.floor(iSec / 3600);
        iSec %= 3600;
        var iMinutes = Math.floor(iSec / 60);
        var iSeconds = iSec % 60;

        iHours = String(iHours).padStart(2, "0");
        iMinutes = String(iMinutes).padStart(2, "0");
        iSeconds = String(iSeconds).padStart(2, "0");

        if (bWithHour == true) {
            return iHours + ":" + iMinutes + ":" + iSeconds;
        } else {
            return iMinutes + ":" + iSeconds;
        }
    }

    this.mobileDebug = function(oValue) {
        var that = this;
        var url = window.location.href;
        if (url.indexOf('?mdebug=') != -1) {
            var sOutput = JSON.stringify(oValue);
            jQuery(that.eContainer + ' .js-mobile-text-content').html(sOutput);
            jQuery(that.eContainer + ' .js-debug-overlay').css({
                'opacity': 0
            }).removeClass('d-none').animate({
                opacity: 1
            }, 150);
        }
    }

    this.showReport = function() {
        var that = this;

        jQuery(that.eContainer + ' .js-report-content').html('');
        var sHtml = '';
        var iBasePageCnt = 1;
        var iPageCnt = 1;
        //jQuery.each(aCol, function (iIndex, oContent) {
        sHtml =
            '<div class="flz-rtable-row light-theme">';
        sHtml += jQuery(that.eContainer + ' .js-simple-pagination').html();
        sHtml +=
            '</div>';
        iBasePageCnt++;
        iPageCnt = iBasePageCnt;
        jQuery(that.eContainer + ' .js-report-content').append(sHtml);
        //});
        jQuery.each(jQuery(that.eContainer + ' .js-report-content ul li'), function(iIndex, oQuestion) {
            var sNumberPage = jQuery(this).text();
            jQuery(this).addClass('js-qtestid-' + sNumberPage + '-time');
            var sFlagged = (jQuery(this).find('.flagged-answer').length > 0 ? jQuery(this).find('.flagged-answer').html() : '');
            jQuery(this).html('<a href="#page-' + sNumberPage + '" class="page-link js-report-question-btn" data-pagenr="' + sNumberPage + '">' + sNumberPage + sFlagged + '</a><b class="js-report-time"></b>')
        });
        jQuery(that.eContainer + ' .js-report-content ul li a i').addClass('is-flagged');

        var iCorrectCnt = 0;
        jQuery.each(that.userAnswer, function(iIndexSec, oQuestion) {
            if (oQuestion['answered-option'] != '' && oQuestion['correct'].indexOf(oQuestion['answered-option']) != -1) {
                //jQuery(that.eContainer + ' .js-qtestid-' + iIndexSec + '-nr .js-report-question').removeClass('incorrect correct').addClass('correct');
                iCorrectCnt++;
            }
            if (oQuestion['answered-option'] != '') {
                if (that.userAnswerTime[iIndexSec] != undefined && that.userAnswerTime[iIndexSec] != null) {
                    var sElapsedTime = parseInt(that.userAnswerTime[iIndexSec]['time-used']);
                    jQuery(that.eContainer + ' .js-qtestid-' + (parseInt(oQuestion['answered-page']) + 1) + '-time .js-report-time').html(that.utilSecToHhMmSs(sElapsedTime));
                }
            }
        });
        jQuery.each(jQuery(that.eContainer + ' .js-report-content .js-report-time'), function(iIndexSec, oQuestion) {
            if (jQuery(this).text() == '') {
                jQuery(this).text('--:--')
            }
        });

        //var iTotalTime = parseInt(that.hmsToSecondsOnly(jQuery(that.eContainer + ' .js-countdown').attr('data-startt')));
        //var iElapsedTime = parseInt(that.hmsToSecondsOnly(that.sCountDownTimer));
        jQuery(that.eContainer + ' .js-score-report-text').html(iCorrectCnt + ' / ' + that.aData[that.sLevel].length + ' correct');
        //jQuery(that.eContainer + ' .js-report-time-elapsed').html('Total elapsed time : ' + that.utilSecToHhMmSs(iTotalElapsedCnt));
        jQuery(that.eContainer + ' .js-report-time-elapsed').html('Time remaining : ' + that.sCountDownTimer);

        that.showPopupOverlay(jQuery(that.eContainer + ' .js-report-html').html());
        jQuery(that.eContainer + ' .js-control-timer-btn').html(jQuery(that.eContainer + ' .js-report-btn').html());
    }

    this.disableTextSelection = function(sElement) {
        var that = this;
        jQuery(that.eContainer + ' ' + sElement).addClass('no-select');
        if (jQuery.browser.msie) {
            jQuery(that.eContainer + ' ' + sElement).attr('unselectable', 'on').on('selectstart', false);
        }
        jQuery(that.eContainer + ' ' + sElement).each(function() {
            jQuery(this).attr('unselectable', 'on').bind('selectstart', function() {
                return false;
            });
        });
    }

    this.enableTextSelection = function(sElement) {
        var that = this;
        jQuery(that.eContainer + ' ' + sElement).removeClass('no-select');
        if (jQuery.browser.msie) {
            jQuery(that.eContainer + ' ' + sElement).attr('unselectable', 'off').unbind('selectstart');
        }
        jQuery(that.eContainer + ' ' + sElement).each(function() {
            jQuery(this).attr('unselectable', 'off').unbind('selectstart');
        });
    }
}

// When the HTML document is loaded check how many CatApp object there are
jQuery(document).ready(function() {
    jQuery('.flz-cat-app-container').parent().parent().css({
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0
    });
    jQuery('.flz-cat-app-container').parent().parent().parent().css({
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        jQuery('.flz-cat-app-container').parent().parent().parent().parent().css({
            /*marginLeft : '-15px',
            marginRight : '-15px',*/
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0
        });
    } else {
        jQuery('.flz-cat-app-container').parent().parent().parent().parent().css({
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0
        });
    }

    var flzAppObjects = {};
    jQuery.each(jQuery('.flz-cat-app-container'), function(key, value) {
        flzAppObjects[key] = new flzCatApp();
        flzAppObjects[key].init('#' + jQuery(this).attr('id'));
    });
});