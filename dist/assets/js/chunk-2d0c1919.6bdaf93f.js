(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1919"],{4733:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"page-wrap"},o={class:"header-section has-header-main"},s=Object(a["createElementVNode"])("section",{class:"section-space-b blog-section"},[Object(a["createElementVNode"])("div",{class:"container"})],-1);function r(e,t,n,r,i,l){var b=Object(a["resolveComponent"])("HeaderMain"),p=Object(a["resolveComponent"])("AboutSection"),d=Object(a["resolveComponent"])("TeamSection"),u=Object(a["resolveComponent"])("Cta"),j=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("header",o,[Object(a["createVNode"])(b)]),Object(a["createVNode"])(p,{class:"pt-5 mt-3",img:e.pageData.cover_photo_url,isClassThree:"col-sm-9 ps-xl-5",isRound:"ps-xl-4",isReverse:"flex-lg-row-reverse",isClassTwo:"pe-lg-5",title:e.pageData.title,content:e.pageData.content},null,8,["img","title","content"]),Object(a["createVNode"])(d),s,Object(a["createVNode"])(u,{class:"section-space-b bg-pattern",title:e.SectionData.ctaDataTwo.title,content:e.SectionData.ctaDataTwo.content,btntext:e.SectionData.ctaDataTwo.btnText,btnlink:e.SectionData.ctaDataTwo.btnLink},null,8,["title","content","btntext","btnlink"]),Object(a["createVNode"])(j,{classname:"bg-dark on-dark"})])}var i=n("b850"),l=n("0613"),b=n("fc60"),p=Object(a["defineComponent"])({name:"AboutUs",setup:function(){var e=Object(l["b"])(),t=Object(a["computed"])((function(){return e.getters.GetState})),n=Object(a["computed"])((function(){return e.getters.GetPageData}));return Object(a["onMounted"])((function(){return e.dispatch(b["a"].FetchPage,{id:1})})),{SectionDatas:t,pageData:n,SectionData:i["a"]}}}),d=n("6b0d"),u=n.n(d);const j=u()(p,[["render",r]]);t["default"]=j}}]);