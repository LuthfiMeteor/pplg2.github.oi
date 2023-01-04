import{v as a,r as e,o as s,b as t,d as l,e as d,w as i,F as n,j as o,s as r,c as u,n as m,t as c,L as p,M as f}from"./vendor.c8aac4bb.js";import{R as b,a as x,b as g,c as v}from"./radio-group.esm.b03600b3.js";import"./dom.esm.5b00b15d.js";import"./description.esm.f0b44e53.js";const k=[{name:"Network Database"},{name:"Laravel."},{name:"Operating System."}],y={components:{RadioGroup:b,RadioGroupLabel:x,RadioGroupDescription:g,RadioGroupOption:v},setup:()=>({selected:a(k[0]),plans:k})},h=l("div",{class:"w-full h-auto bg-white p-4 rounded-md shadow-md"},[l("span",{class:"font-bold text-lg"},"Baca terlebih dahulu!"),l("p",{class:"text-md"},"Halaman materi adalah halaman dimana kamu dapat belajar sesuai dengan materi yang telah diberikan oleh pengajar, selain itu dsetiap materi akan ada sebuah kuis yang harus kamu kerjakan setiap kuis akan mendapatkan nilai yang nantinya akan disimpan dan dikirimkan kepada pengajar, sekian semangat belajarnya ya..")],-1),w={class:"w-full h-auto p-5 bg-white shadow-md mt-5 rounded-md"},j=l("span",{class:"text-lg text-dark font-bold"},"Kuis",-1),R={class:" p-5"},G=l("div",{class:"text-md text-dark font-semibold"},"Salah satu jenis DBMS...",-1),S={class:"w-full max-w-sm  px-4 py-5"},_={class:""},L=r("Server size"),B={class:"space-y-2"},D={class:"flex items-center justify-between w-full"},M={class:"flex items-center"},O={class:"text-sm"},V={class:"flex-shrink-0 text-white"},z=[l("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none"},[l("circle",{cx:"12",cy:"12",r:"12",fill:"#fff","fill-opacity":"0.2"}),l("path",{d:"M7 13l3 3 7-7",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)],F={class:"grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between p-6 items-center"},H=l("div",{class:"flex mx-auto md:mx-0 my-4"},[l("div",{class:"p-2 md:p-4 rounded-full bg-blue-500 mx-2"}),l("div",{class:"p-2 md:p-4 rounded-full bg-gray-500 mx-2"}),l("div",{class:"p-2 md:p-4 rounded-full bg-gray-500 mx-2"})],-1),K={class:"flex mx-auto md:mx-0 md:justify-end"},N=r("Sebelumnya"),U=r("Selanjutnya");y.render=function(a,b,x,g,v,k){const y=e("RadioGroupLabel"),q=e("RadioGroupOption"),A=e("RadioGroup"),C=e("router-link");return s(),t(n,null,[h,l("div",w,[j,l("div",R,[G,l("div",S,[l("div",_,[d(A,{modelValue:g.selected,"onUpdate:modelValue":b[0]||(b[0]=a=>g.selected=a)},{default:i((()=>[d(y,{class:"sr-only"},{default:i((()=>[L])),_:1}),l("div",B,[(s(!0),t(n,null,o(g.plans,(a=>(s(),u(q,{as:"template",key:a.name,value:a},{default:i((({active:e,checked:s})=>[l("div",{class:m([["",s?"bg-blue-700 bg-opacity-75 text-dark ":"bg-blue-100 "],"relative flex px-5 py-4 rounded-lg shadow cursor-pointer focus:outline-none"])},[l("div",D,[l("div",M,[l("div",O,[d(y,{as:"p",class:m([s?"text-white":"text-gray-900","font-medium"])},{default:i((()=>[r(c(a.name),1)])),_:2},1032,["class"])])]),p(l("div",V,z,512),[[f,s]])])],2)])),_:2},1032,["value"])))),128))])])),_:1},8,["modelValue"])])])]),l("div",F,[H,l("div",K,[d(C,{to:"/kuis",class:"p-4 hover:bg-gray-400 w-32  text-md font-bold text-white text-center rounded-full bg-gray-500 mr-4"},{default:i((()=>[N])),_:1}),d(C,{to:"/kuis3",class:"p-4 hover:bg-primary-2 w-32  text-md font-bold text-white text-center rounded-full bg-primary"},{default:i((()=>[U])),_:1})])])])],64)};export{y as default};
