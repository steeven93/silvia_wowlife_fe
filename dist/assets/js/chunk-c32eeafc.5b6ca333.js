(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c32eeafc"],{"3f5f":function(e,t,c){"use strict";c("b284")},"7b04":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o={class:"page-wrap"},n={class:"header-section has-header-main"};function l(e,t,c,l,r,d){var s=Object(a["resolveComponent"])("HeaderMain"),i=Object(a["resolveComponent"])("AuthorHero"),b=Object(a["resolveComponent"])("CollectionViewItems"),m=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createElementVNode"])("header",n,[Object(a["createVNode"])(s),Object(a["createVNode"])(i)]),Object(a["createVNode"])(b),Object(a["createVNode"])(m,{classname:"bg-dark on-dark"})])}var r=function(e){return Object(a["pushScopeId"])("data-v-31722de9"),e=e(),Object(a["popScopeId"])(),e},d={class:"author-section section-space"},s={class:"container"},i={class:"row"},b={class:"col-xl-3"},m={class:"col-xl-9 ps-xl-4"},j={class:"author-items-wrap"},O=r((function(){return Object(a["createElementVNode"])("div",{class:"gap-2x"},null,-1)})),p={class:"row g-gs"},u={class:"card card-full"},V={class:"card-image"},N=["src"],v={class:"card-body p-4"},E={class:"card-title text-truncate mb-0"},f={class:"card-author mb-1 d-flex align-items-center"},g=r((function(){return Object(a["createElementVNode"])("span",{class:"me-1 card-author-by"},"By",-1)})),h={class:"custom-tooltip-wrap"},w={class:"card-price-wrap d-flex align-items-center justify-content-between mb-3"},x={class:"me-2"},S=r((function(){return Object(a["createElementVNode"])("span",{class:"card-price-title"},"Price",-1)})),D={class:"card-price-number"},k={class:"text-sm-end"},y=r((function(){return Object(a["createElementVNode"])("span",{class:"card-price-title"},"Current bid",-1)})),T={class:"card-price-number"},C={class:"modal fade",id:"deleteModal",tabindex:"-1","aria-hidden":"true"},B={class:"modal-dialog modal-dialog-centered"},M={class:"modal-content"},I={class:"modal-body text-center"},L=["src"],F={class:"modal-tilte mb-2"},P={class:"modal-text"},_={class:"modal-footer"},A={type:"button",class:"btn btn-sm","data-bs-dismiss":"modal"},H={type:"button",class:"btn btn-sm btn-danger","data-bs-dismiss":"modal"};function J(e,t,c,o,n,l){var r=Object(a["resolveComponent"])("AuthorSidebar"),J=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("section",d,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",b,[Object(a["createVNode"])(r,{content:"",followingnum:"",followingtext:"",followernum:"",followertext:"",avatars:"",links:"",datetext:""})]),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("h3",null,Object(a["toDisplayString"])(e.SectionData.profileData.title),1),O,Object(a["createElementVNode"])("div",p,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.SectionData.productData.products,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"col-md-4",key:e.id},[Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("div",V,[Object(a["createElementVNode"])("img",{src:e.img,class:"card-img-top",alt:"art image"},null,8,N)]),Object(a["createElementVNode"])("div",v,[Object(a["createElementVNode"])("h5",E,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("div",f,[g,Object(a["createElementVNode"])("div",h,[Object(a["createVNode"])(J,{to:e.authorLink,class:"custom-tooltip author-link"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.author),1)]})),_:2},1032,["to"])])]),Object(a["createElementVNode"])("div",w,[Object(a["createElementVNode"])("div",x,[S,Object(a["createElementVNode"])("span",D,"$"+Object(a["toDisplayString"])(e.price),1)]),Object(a["createElementVNode"])("div",k,[y,Object(a["createElementVNode"])("span",T,Object(a["toDisplayString"])(e.priceTwo)+" SOL",1)])])]),Object(a["createVNode"])(J,{class:"details",to:{name:"ProductDetail",params:{id:e.id,title:e.title,imgLg:e.imgLg,metaText:e.metaText,metaTextTwo:e.metaTextTwo,metaTextThree:e.metaTextThree,content:e.content}}},null,8,["to"])])])})),128))])])])])]),Object(a["createElementVNode"])("div",C,[Object(a["createElementVNode"])("div",B,[Object(a["createElementVNode"])("div",M,[Object(a["createElementVNode"])("div",I,[Object(a["createElementVNode"])("img",{src:e.SectionData.deleteModal.img,alt:"",class:"mb-3"},null,8,L),Object(a["createElementVNode"])("h4",F,Object(a["toDisplayString"])(e.SectionData.deleteModal.title),1),Object(a["createElementVNode"])("p",P,Object(a["toDisplayString"])(e.SectionData.deleteModal.content),1)]),Object(a["createElementVNode"])("div",_,[Object(a["createElementVNode"])("button",A,Object(a["toDisplayString"])(e.SectionData.deleteModal.btnText),1),Object(a["createElementVNode"])("button",H,Object(a["toDisplayString"])(e.SectionData.deleteModal.btnTextTwo),1)])])])])])}var $=c("b850"),q=Object(a["defineComponent"])({name:"ProfileSection",setup:function(){return{SectionData:$["a"]}}}),z=(c("3f5f"),c("6b0d")),G=c.n(z);const K=G()(q,[["render",J],["__scopeId","data-v-31722de9"]]);var Q=K,R=c("0613"),U=c("fc60"),W=c("6c02"),X=Object(a["defineComponent"])({name:"CollectionView",components:{CollectionViewItems:Q},setup:function(){var e=Object(W["c"])(),t=Object(R["b"])();t.dispatch(U["a"].FetchCollection,{id:e.params.id})}});const Y=G()(X,[["render",l]]);t["default"]=Y},b284:function(e,t,c){}}]);