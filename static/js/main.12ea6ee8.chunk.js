(this.webpackJsonpgenshin_calculator=this.webpackJsonpgenshin_calculator||[]).push([[0],{251:function(e,t,a){},252:function(e,t,a){},486:function(e,t,a){"use strict";a.r(t);var l=a(7),n=a(1),c=a.n(n),i=a(52),s=a.n(i),r=(a(251),a(242)),h=a(219),j=a(220),u=a(244),b=a(243),d=(a(252),a(143),a(491)),o=a(495),x=a(494),O=a(496),g=a(241),v=a(493),C=a(492),m=(a(253),d.a.Column,d.a.HeaderCell,d.a.Cell,[{value:"Diluc",label:"Diluc"},{value:"Chongyun",label:"Chongyun"},{value:"Bennet",label:"Bennet"},{value:"Beidou",label:"Beidou"},{value:"Fischle",label:"Fischl"},{value:"Amber",label:"Amber"},{value:"Keqing",label:"Keqing"},{value:"Klee",label:"Klee"},{value:"Lisa",label:"Lisa"},{value:"Jean",label:"Jean"},{value:"Kaeya",label:"Kaeya"},{value:"Mona",label:"Mona"},{value:"Ningguang",label:"Ninguang"},{value:"Noelle",label:"Noelle"},{value:"Qiqi",label:"Qiqi"},{value:"Razor",label:"Razor"},{value:"Traveler_g",label:"Geo MC"},{value:"Traveler_a",label:"Anemo MC"},{value:"Venti",label:"Venti"},{value:"Sucrose",label:"Sucrose"},{value:"Xiangling",label:"Xiangling"},{value:"Xingqiu",label:"Xiangqiu"}]),f={Diluc:[.944,.976,1.29],Chongyun:[1.72],Bennet:[1.38,1.76,.88+.96,1.32],Beidou:[1.22,1.6],Fischl:[.888,1.15],Amber:[1.23],Keqing:[.504,1.68,1.68],Klee:[1.28],Lisa:[3.2],Jean:[2.92],Kaeya:[1.91],Mona:[1.33],Ningguang:[2.3],Noelle:[1.2],Qiqi:[.92],Razor:[1.99],Traveler_g:[2.48],Traveler_a:[1.92],Venti:[2.76],Sucrose:[2.11],Xiangling:[1.11],Xingqiu:[3.59]};Object.freeze(f);function S(e){var t=c.a.useState(0),a=Object(r.a)(t,2),n=a[0],i=a[1];return Object(l.jsxs)(x.a,{children:[Object(l.jsx)(O.a,{md:15,children:Object(l.jsx)(v.a,{progress:!0,min:0,max:e.max,style:{margin:20},value:n,onChange:function(t){i(t),e.calcThis(t)}})}),Object(l.jsx)(O.a,{md:4,children:Object(l.jsx)(C.a,{min:0,max:e.max,value:n,onChange:function(t){i(t),e.calcThis(t)}})})]})}Object.freeze({Diluc:[2.04,.6,2.04],Chongyun:[1.42],Bennet:[2.33],Beidou:[1.22+.96],Fischl:[2.08],Amber:[5.05],Keqing:[.88,1.92,1.89],Klee:[.426],Lisa:[.366],Jean:[4.25],Kaeya:[.776],Mona:[4.22],Ningguang:[.87],Noelle:[.928],Qiqi:[2.85],Razor:[1.25],Traveler_g:[1.48],Traveler_a:[.808],Sucrose:[1.48*3],Venti:[3.76],Xiangling:[.72,.88,1.1,1.12],Xingqiu:[.543]});var k=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var l;return Object(h.a)(this,a),(l=t.call(this,e)).calcAtk=function(e){l.setState({atk:e})},l.calcCD=function(e){l.setState({CD:.01*e+1})},l.calcCR=function(e){l.setState({CR:e/100})},l.state={atk:0,CR:0,CD:0,eSM:[],qSM:[]},l}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"App-header",children:" Genshin Damage Calculator "}),Object(l.jsxs)(o.a,{fluid:!0,children:[Object(l.jsxs)(x.a,{children:[Object(l.jsxs)(O.a,{md:12,children:[" ",Object(l.jsx)("h2",{children:"Character Stats"})]}),Object(l.jsxs)(O.a,{md:12,children:[Object(l.jsx)("h2",{children:"Select Character Skill Multipliers"}),Object(l.jsx)(g.a,{preventOverflow:!0,data:m,size:"lg",style:{width:224},onSelect:function(t,a){e.setState({eSM:f[t]})}})]})]}),Object(l.jsxs)("div",{class:"Slider",children:[Object(l.jsx)("h3",{children:"Attack"}),Object(l.jsx)(S,{value:"atk",max:"9999",calcThis:this.calcAtk})]}),Object(l.jsxs)("div",{class:"Slider",children:[Object(l.jsx)("h3",{children:"Crit Rate %"}),Object(l.jsx)(S,{max:"80",calcThis:this.calcCR})]}),Object(l.jsxs)("div",{class:"Slider",children:[Object(l.jsx)("h3",{children:"Crit Dmg %"}),Object(l.jsx)(S,{calcThis:this.calcCD,max:"350"})]}),Object(l.jsx)(x.a,{gutter:12,children:Object(l.jsxs)("table",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Skill"}),Object(l.jsx)("br",{}),Object(l.jsx)("th",{children:"Non-Crit Hit"}),Object(l.jsx)("br",{}),Object(l.jsx)("th",{children:"Critical Hit"}),Object(l.jsx)("br",{}),Object(l.jsx)("th",{children:"Expected Damage"}),Object(l.jsx)("br",{})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("h4",{children:"Normal Attack"})}),Object(l.jsx)("td",{children:Math.round(this.state.atk)}),Object(l.jsx)("td",{children:Math.round(this.state.atk*this.state.CD)}),Object(l.jsx)("td",{children:Math.round((1-this.state.CR)*this.state.atk+this.state.CR*(this.state.CD*this.state.atk))})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("h4",{children:"Elemental Skill"})}),Object(l.jsxs)("td",{children:[Math.round(this.state.eSM.map((function(t){return t*e.state.atk})).reduce((function(e,t){return e+t}),0))," "]}),Object(l.jsxs)("td",{children:[" ",Math.round(this.state.eSM.map((function(t){return t*e.state.atk*e.state.CD})).reduce((function(e,t){return e+t}),0))]}),Object(l.jsx)("td",{children:Math.round((1-this.state.CR)*this.state.atk+this.state.CR*(this.state.CD*this.state.atk))})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("h4",{children:"Elemental Burst"})}),Object(l.jsxs)("td",{children:[Math.round(this.state.atk)," "]}),Object(l.jsx)("td",{children:Math.round(this.state.atk*this.state.CD)}),Object(l.jsx)("td",{children:Math.round(this.state.eSM.map((function(t){return t*e.state.atk*(1-e.state.CR)+e.state.CR*e.state.CD*e.state.atk*t})).reduce((function(e,t){return e+t}),0))})]})]})})]})]})}}]),a}(n.Component),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,497)).then((function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),l(e),n(e),c(e),i(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),M()}},[[486,1,2]]]);
//# sourceMappingURL=main.12ea6ee8.chunk.js.map