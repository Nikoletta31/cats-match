import{d as h,r as c,o as p,c as n,a as l,F as _,b as g,e as x,f as a,n as k}from"./index-CDVtDIPl.js";const w={class:"flex justify-center mt-24"},y=["onClick"],M=["src"],V={key:0,class:"text-center"},B=l("h2",{class:"font-bold mt-16"},"Your vote has been accepted!",-1),F=h({__name:"VotePage",props:{allCats:{}},emits:["getChosenCat"],setup(m,{emit:f}){const v=m,C=f,o=c(!1),i=c(""),u=c();p(()=>{d()});const d=()=>{o.value=!1;const s=[...v.allCats],t=[];for(let e=0;e<2;e++){const r=Math.floor(Math.random()*s.length);t.push(s[r]),s.splice(r,1)}u.value=t},b=s=>{o.value=!0,i.value=s,C("getChosenCat",s)};return(s,t)=>(a(),n("div",null,[l("div",w,[(a(!0),n(_,null,g(u.value,e=>(a(),n("div",{key:e.id,class:"mx-8 cursor-pointer",onClick:r=>b(e.id)},[l("img",{class:k(["rounded-full object-cover h-60 w-60",[{"border-teal-500 border-8":o.value&&i.value===e.id}]]),src:e.url},null,10,M)],8,y))),128))]),o.value?(a(),n("div",V,[B,l("button",{class:"w-1/6 mt-8 rounded-md bg-amber-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:t[0]||(t[0]=e=>d())}," Vote again! ")])):x("",!0)]))}});export{F as default};