webpackJsonp([1],{"7Otq":function(e,n,a){e.exports=a.p+"static/img/logo.953a8c3.png"},NHnr:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a("7+uW"),o=a("hlPV"),s=a.n(o),r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"}),this._v(" "),n("div",{staticClass:"main"},[n("router-view")],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"footer"},[n("p",{staticClass:"note"},[this._v("\n      Tenha o seu "),n("a",{attrs:{href:"https://api.whatsapp.com/send?phone=5547992381341"}},[this._v("\n        zapie.xyz/seunome\n      ")])])])}]};var i=a("VU/8")({name:"App"},r,!1,function(e){a("Rbu0")},null,null).exports,p=a("/ocq"),c={name:"Index",components:{Vue:t.a},data:function(){return{name:"",phone:"",whats:"",custom:{alessandro:{name:"Alessandro Stein",phone:"+55 (47) 99238-1341"},luciane:{name:"Luciane Kreutzfeld",phone:"+55 (47) 99245-0294"},iago:{name:"Iago Puccini",phone:"+55 (47) 99254-6273"},angela:{name:"Angela Araldi",phone:"+55 (47) 99121-3272"},marco:{name:"Marco Aurélio Perotti",phone:"+55 (47) 99997-7795"},renaldo:{name:"Renaldo Viola",phone:"+55 (47) 99675-6021"},daniel:{name:"Daniel Bockor",phone:"+55 (47) 99962-3733"},leo:{name:"Leonardo Rodrigues",phone:"+55 (14) 99148-6281"},tecinformatica:{name:"TEC Informática",phone:"+55 (47) 99135-9612"},cristian:{name:"Cristian Stein",phone:"+55 (47) 99135-9612"},al:{name:"AL - Camisas Personalizadas",phone:"+55 (47) 99238-1341"},henrique:{name:"Henrique Porto",phone:"+55 (47) 99991-0818"},scfutebol:{name:"SC Futebol",phone:"+55 (47) 99991-0818"},adoro:{name:"Loja Adoro",phone:"+55 (47) 99291-7980"},planetadj:{name:"Planeta DJ",phone:"+55 (11) 93117-1009"}}}},created:function(){var e=this.$route.params.slug;e&&this.fill(e)},mounted:function(){var e=this.$route.params.phone;e&&(this.phone=e)},computed:{getPhone:function(){return this.phone.replace("+","").replace(" ","").replace("(","").replace(")","").replace("-","").replace(" ","")}},methods:{fill:function(e){var n=this.custom[e];n&&(this.name=n.name,this.phone=n.phone)}}},h={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{},[t("h1",[e._v("Zapie.xyz")]),e._v(" "),e._m(0),e._v(" "),t("input",{directives:[{name:"mask",rawName:"v-mask",value:"+## (##) #####-####",expression:"'+## (##) #####-####'"},{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",placeholder:"Digite o telefone",t:""},domProps:{value:e.phone},on:{input:function(n){n.target.composing||(e.phone=n.target.value)}}}),e._v(" "),t("div",{staticClass:"actions"},[e.phone?t("a",{staticClass:"whatsapp",attrs:{href:"https://api.whatsapp.com/send?phone="+e.getPhone,target:"_blank"}},[t("img",{staticClass:"icon",attrs:{src:a("7Otq")}}),e._v("\n      Conversar com "+e._s(e.phone)+"\n    ")]):e._e(),e._v(" "),e.name?t("p",[e._v("\n      Este é o número de "),t("strong",[e._v(e._s(e.name))]),e._v("!\n    ")]):e._e()])])},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Fale com quem você quiser no WhatsApp, "),n("br"),this._v("\n    sem precisar adicionar o contato a sua agenda")])}]};var l=a("VU/8")(c,h,!1,function(e){a("WWaU")},null,null).exports;t.a.use(p.a);var u=new p.a({routes:[{path:"/",name:"Index",component:l},{path:"/:slug",name:"Index",component:l},{path:"/to/:phone",name:"Index",component:l}]});t.a.use(s.a),t.a.config.productionTip=!1;new t.a({router:u,render:function(e){return e(i)}}).$mount("#app")},Rbu0:function(e,n){},WWaU:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.030a974530f91b9d4f05.js.map