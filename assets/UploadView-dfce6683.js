import{_ as r,a as d,o as c,c as m,b as t,w as p,v as n,d as a,t as y,p as f,e as h}from"./index-1792f65e.js";const _={data(){return{input:{loc:"",type:"",password:"",myFile:""},source:"경로"}},methods:{onInputImage(){this.input.myFile=this.$refs.serveyImage.files,this.source=this.$refs.serveyImage.files[0].name},onClickFormButton(){const i=new FormData;i.append("loc",this.input.loc),i.append("type",this.input.type),i.append("password",this.input.password);for(let e=0;e<this.input.myFile.length;e++)i.append("myFile",this.input.myFile[e]);if(this.input.loc==""||this.input.type==""||this.input.password==""){alert("빈칸을 채워주세요.");return}else if(this.input.myFile==""){alert("파일을 선택해주세요.");return}d.post("http://localhost:3000/upload",i).then(e=>{console.log(e),alert("업로드 성공")}).catch(e=>{alert("업로드 실패")})}}},l=i=>(f("data-v-ecf75ed6"),i=i(),h(),i),v={class:"main"},w={class:"type"},g=l(()=>t("label",{for:"one"},"가로사진",-1)),I=l(()=>t("label",{for:"two"},"새로사진",-1)),F=l(()=>t("label",{for:"three"},"파노라마",-1)),b={class:"filebox"},x={class:"source"},U=l(()=>t("label",{for:"file"},"파일찾기",-1));function V(i,e,k,B,o,u){return c(),m("div",v,[t("div",w,[p(t("input",{type:"radio",id:"one",value:"width","onUpdate:modelValue":e[0]||(e[0]=s=>o.input.type=s)},null,512),[[n,o.input.type]]),g,p(t("input",{type:"radio",id:"two",value:"height","onUpdate:modelValue":e[1]||(e[1]=s=>o.input.type=s)},null,512),[[n,o.input.type]]),I,p(t("input",{type:"radio",id:"three",value:"pano","onUpdate:modelValue":e[2]||(e[2]=s=>o.input.type=s)},null,512),[[n,o.input.type]]),F]),p(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>o.input.loc=s),type:"text",placeholder:"위치",class:"location"},null,512),[[a,o.input.loc]]),p(t("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>o.input.password=s),type:"password",placeholder:"비밀번호",class:"password"},null,512),[[a,o.input.password]]),t("div",b,[t("h1",x,y(o.source),1),U,t("input",{multiple:"",onChange:e[5]||(e[5]=s=>u.onInputImage()),ref:"serveyImage",type:"file",class:"image",id:"file"},null,544)]),t("button",{class:"send-button",onClick:e[6]||(e[6]=s=>u.onClickFormButton())},"Upload")])}const D=r(_,[["render",V],["__scopeId","data-v-ecf75ed6"]]);export{D as default};
