import{_ as r,a as i,o as a,c as o,F as _,r as d,b as s,t as c}from"./index-1792f65e.js";const h={data(){return i.get("http://localhost:3000/photos/height").then(e=>{this.a=e.data}).then(e=>{console.log(e)}),{a:[]}},methods:{imgClick(e){window.open("http://localhost:3000/photo?src="+e)}}},p={class:"main"},g=["src","onClick"];function m(e,u,k,f,n,l){return a(),o("div",p,[(a(!0),o(_,null,d(n.a,t=>(a(),o("div",{class:"image",key:t},[s("img",{src:"http://localhost:3000/photo?src="+t.image_src,onClick:v=>l.imgClick(t.image_src)},null,8,g),s("p",null,c(t.upload_date)+" | "+c(t.location),1)]))),128))])}const w=r(h,[["render",m],["__scopeId","data-v-cade5e8a"]]);export{w as default};
