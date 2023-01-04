import{_ as e}from"./back.79fe3765.js";import{_ as t}from"./kuismodal.5d3413ee.js";import{T as a,a as s,D as i,b as l,c as n}from"./transition.esm.9018f8e9.js";import{v as o,r as d,o as r,b as c,d as u,e as m,w as f,F as g,h as p,s as v}from"./vendor.c8aac4bb.js";import"./dom.esm.5b00b15d.js";import"./description.esm.f0b44e53.js";const b={components:{TransitionRoot:a,TransitionChild:s,Dialog:i,DialogOverlay:l,DialogTitle:n},setup(){const e=o(!1);return{isOpen:e,closeModal(){e.value=!1},openModal(){e.value=!0}}}},x={class:"flex mb-4 items-center"},y=u("img",{src:e,alt:"",class:"p-3  bg-primary rounded-lg hover:bg-blue-400 "},null,-1),h=u("span",{class:"ml-10 text-xl font-bold"},"Ulangan Harian 1",-1),k={class:"w-full p-4 bg-white  rounded-md mt-10 mb-5 shadow-md"},j=p('<div class="w-7/12 h-auto  mx-auto mt-10 grid gap-4 "><div class="grid grid-cols-2  justify-items-center h-14 bg-gray-100 items-center p-2 rounded-md"><div class="justify-self-start text-md font-bold text dark">Pelajaran</div><div class="text-md font-bold text dark justify-self-end">Basis Data</div></div><div class="grid grid-cols-2 justify-items-center  h-14 bg-gray-100 items-center p-2 rounded-md"><div class="justify-self-start text-md font-bold text-dark">Prlaksanaan</div><div class="text-md font-bold text-dark justify-self-end">10.00 - 11.00</div></div><div class="grid grid-cols-2  justify-items-center h-14 bg-gray-100 items-center p-2 rounded-md"><div class="justify-self-start text-md font-bold text-dark">Total Soal</div><div class="text-md font-bold text-dark justify-self-end">3</div></div></div>',1),w={class:"flex mx-10 mb-10 justify-center gap-4 "},M={class:"fixed inset-0 z-10 overflow-y-auto"},_={class:"min-h-screen px-4 text-center"},C=u("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," ​ ",-1),D={class:"inline-block w-auto md:w-6/12  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},T=v(" Apakah kamu siap? "),U=u("div",{class:"mt-2 align-center text-center"},[u("img",{src:t,class:"mx-auto",alt:""}),u("span",{class:"text-xl text-gray-800 "},[v(" Kamu sudah siap untuk mengerjakan ulangan ini? "),u("p",null,[u("span",{class:"text-green-500"},"Klik Muiai Ulangan"),v(" untuk melanjutkan")])])],-1),O={class:"flex mt-4 justify-center gap-4"},B=v(" MUlai Ulangan! ");b.render=function(e,t,a,s,i,l){const n=d("router-link"),o=d("DialogOverlay"),p=d("TransitionChild"),v=d("DialogTitle"),b=d("Dialog"),K=d("TransitionRoot");return r(),c(g,null,[u("div",x,[m(n,{to:"/kelas-page"},{default:f((()=>[y])),_:1}),h]),u("section",null,[u("div",k,[j,u("div",w,[u("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>s.openModal&&s.openModal(...e)),class:"bg-pink-500 py-4 px-12 text-center   mt-5 text-md font-bold text-white rounded-full"},"Mulai Ulangan")])])]),m(K,{appear:"",show:s.isOpen,as:"template"},{default:f((()=>[m(b,{as:"div",onClose:s.closeModal},{default:f((()=>[u("div",M,[u("div",_,[m(p,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:f((()=>[m(o,{class:"fixed inset-0"})])),_:1}),C,m(p,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:f((()=>[u("div",D,[m(v,{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:f((()=>[T])),_:1}),U,u("div",O,[u("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:t[1]||(t[1]=(...e)=>s.closeModal&&s.closeModal(...e))}," Batal "),m(n,{to:"/ulangan-page1",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:s.closeModal},{default:f((()=>[B])),_:1},8,["onClick"])])])])),_:1})])])])),_:1},8,["onClose"])])),_:1},8,["show"])],64)};export{b as default};
