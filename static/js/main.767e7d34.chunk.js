(this["webpackJsonpfeed-the-cat"]=this["webpackJsonpfeed-the-cat"]||[]).push([[0],[,function(e,t,r){e.exports={productWrapper:"product_productWrapper__5vPOP",productBody:"product_productBody__3kNRB",productDescription:"product_productDescription__3g90Y",productType:"product_productType__2Xa1W",productName:"product_productName__1KUGH",productTaste:"product_productTaste__1pwcH",additionalInformation:"product_additionalInformation__1XIb8",weightCircle:"product_weightCircle__2yfIp",weightValue:"product_weightValue__1Wfkp",measure:"product_measure__2ncS-",productFooter:"product_productFooter__1g0ww",info:"product_info__10IR7",buy:"product_buy__22wD4",point:"product_point__3dY9V",footerInfoIsOver:"product_footerInfoIsOver__nYkoh",isOverProductBack:"product_isOverProductBack__2gXxi",isOverProductWeightCircle:"product_isOverProductWeightCircle__UE1rf",isOverProductDescription:"product_isOverProductDescription__fNVVb",isOverProductType:"product_isOverProductType__2GQNk",isOverProductAdditionalInformation:"product_isOverProductAdditionalInformation__1s-9M",defaultProductBack:"product_defaultProductBack__1qwBL",selectedProductBack:"product_selectedProductBack__1nyfr",defaultProductWeightCircle:"product_defaultProductWeightCircle__2KfGd",selectedProductWeightCircle:"product_selectedProductWeightCircle__3sG5J",defaultProductBackHover:"product_defaultProductBackHover__3snED",selectedProductBackHover:"product_selectedProductBackHover__3HYGp",defaultProductWeightCircleHover:"product_defaultProductWeightCircleHover__37RxY",selectedProductWeightCircleHover:"product_selectedProductWeightCircleHover__5iLqL",buyHover:"product_buyHover__15w8-",selectedProductTypeHover:"product_selectedProductTypeHover__uqQDQ"}},,function(e,t,r){},,,function(e,t,r){e.exports={sectionProducts:"products_sectionProducts__2Xa8X"}},function(e,t,r){e.exports={sectionHeader:"header_sectionHeader__37Drf"}},function(e,t,r){e.exports=r(14)},,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(3),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,o=r(0),a=r.n(o),n=r(5),u=r.n(n),i=(r(13),r(6)),s=r.n(i),d=r(2),l=r(1),p=r.n(l),_=function(e){var t=Object(o.useState)(!1),r=Object(d.a)(t,2),c=r[0],n=r[1],u=Object(o.useState)(!1),i=Object(d.a)(u,2),s=i[0],l=i[1],_=function(){n(!c)},m=function(){return c?f():v()},f=function(){return s?p.a.selectedProductBackHover:p.a.selectedProductBack},v=function(){return s?p.a.defaultProductBackHover:p.a.defaultProductBack},P=function(){return c?h():g()},h=function(){return s?p.a.selectedProductWeightCircleHover:p.a.selectedProductWeightCircle},g=function(){return s?p.a.defaultProductWeightCircleHover:p.a.defaultProductWeightCircle},E=function(){return e.isOver?p.a.isOverProductType:O()},O=function(){},N=function(){return c?a.a.createElement("span",{className:"".concat(p.a.footerInfo)},e.info):a.a.createElement("span",null,"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d,"," ",a.a.createElement("span",{className:y(),onClick:_}," ","\u043a\u0443\u043f\u0438"),a.a.createElement("span",{className:p.a.point},"."))},y=function(){return s?p.a.buyHover:p.a.buy};return a.a.createElement("div",{className:p.a.productWrapper},a.a.createElement("div",{className:"".concat(p.a.productBody," ").concat(e.isOver?p.a.isOverProductBack:m()),onClick:_,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},a.a.createElement("div",{className:"".concat(p.a.productDescription," ").concat(function(){if(e.isOver)return p.a.isOverProductDescription}())},c&&!s?a.a.createElement("span",{className:p.a.selectedProductTypeHover},"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?"):a.a.createElement("div",{className:"".concat(p.a.productType," ").concat(E())},e.type),a.a.createElement("div",{className:p.a.productName},e.name),a.a.createElement("div",{className:p.a.productTaste},e.taste),a.a.createElement("div",{className:"".concat(p.a.additionalInformation," ").concat(function(){if(e.isOver)return p.a.isOverProductAdditionalInformation}())},a.a.createElement("div",{className:p.a.portionCount},"".concat(e.portionCount," \u043f\u043e\u0440\u0446\u0438\u0439")),a.a.createElement("div",{className:p.a.surprise},e.surprise),a.a.createElement("div",{className:p.a.customerState},e.customerState))),a.a.createElement("div",{className:"".concat(p.a.weightCircle," ").concat(e.isOver?p.a.isOverProductWeightCircle:P())},a.a.createElement("div",{className:p.a.weightInfo},a.a.createElement("div",{className:p.a.weightValue},e.weight),a.a.createElement("div",{className:p.a.measure},e.measure)))),a.a.createElement("div",{className:p.a.productFooter},a.a.createElement("div",{className:p.a.info},e.isOver?a.a.createElement("span",{className:"".concat(p.a.footerInfoIsOver)},"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ",e.taste," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."):N())))},m=function(e){var t=e.productsData.map((function(e){return a.a.createElement(_,{type:e.type,name:e.name,taste:e.taste,portionCount:e.portionCount,surprise:e.surprise,customerState:e.customerState,weight:e.weight,measure:e.measure,info:e.info,isOver:e.isOver})}));return a.a.createElement("div",{className:"".concat(s.a.sectionProducts)},t)},f=r(7),v=r.n(f),P=function(e){return a.a.createElement("div",{className:"".concat(v.a.sectionHeader)},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?")},h=function(e){return a.a.createElement("div",{className:"sectionOuter"},a.a.createElement("div",{className:"sectionInner"},a.a.createElement(P,null),a.a.createElement(m,{productsData:e.state.products})))};c={products:[{type:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",name:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",portionCount:10,surprise:"\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",customerState:"",weight:"0,5",measure:"\u043a\u0433",info:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",isOver:!1},{type:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",name:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u0440\u044b\u0431\u043e\u0439",portionCount:40,surprise:"2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",customerState:"",weight:"2",measure:"\u043a\u0433",info:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",isOver:!1},{type:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",name:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u043a\u0443\u0440\u043e\u0439",portionCount:100,surprise:"5 \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",customerState:"\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d",weight:"5",measure:"\u043a\u0433",info:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",isOver:!0}]},u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,{state:c})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.767e7d34.chunk.js.map