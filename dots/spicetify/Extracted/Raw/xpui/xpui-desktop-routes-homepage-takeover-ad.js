"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[364],{90609:(e,a,t)=>{t.r(a),t.d(a,{HptoContainer:()=>ye,VIEW_MAP:()=>be,default:()=>Te});var r=t(67154),l=t.n(r),n=t(67294),c=t.n(n),s=t(65858),m=t(84543),i=t(93077),o=t(94184),u=t.n(o),d=t(50114);const g="WiPggcPDzbwGxoxwLWFf",h="MnW5SczTcbdFHxLZ_Z8j",E=({children:e,fetchingState:a})=>{const t=(0,s.I0)(),r=(0,n.useRef)(null);(0,n.useEffect)((()=>(r.current&&t((0,i.az)(r.current)),()=>{t((0,i.MJ)())})),[t]),(0,n.useEffect)((()=>{a===m.Y.FETCHED&&t((0,i.Fw)())}),[a,t]);const l=(0,n.useCallback)((e=>{t((0,i.lT)(e.message))}),[t]);return c().createElement(d.S,{onError:l},c().createElement("div",{className:u()(g,"contentSpacing")},c().createElement("div",{"data-testid":"test-htpo-ref",ref:r,className:h},e)))};var p=t(24565),v=t(20657),k=t(1393);const f="JRpZEVSn5LfbA9fwwOqQ",b="eLc9pLu6M_fCVIha45oh",y=({isPremium:e})=>{const a=(0,s.I0)();return e?c().createElement("button",{className:b,onClick:()=>a((0,k.xG)())},v.ag.get("ad-formats.hideAnnouncements")):c().createElement("span",{className:f},v.ag.get("ad-formats.sponsored"))},T="iVAZDcTm1XGjxwKlQisz",M="_I_1HMbDnNlNAaViEnbp",V="xXj7eFQ8SoDKYXy6L3E1",w="F68SsPm8lZFktQ1lWsQz";var N=t(69518),C=t.n(N),I=t(99450),S=t(24209),z=t(95661),A=t(4232),L=t(80507),_=t(25988),P=t(30005),F=t(42922),x=t(57612),H=t(21366);const D=c().memo((({uri:e})=>c().createElement(F.ZP,{value:"generic"},c().createElement(P.v,null,c().createElement(H.q,{divider:"before"},c().createElement(x.Jx,{uri:e,displayText:v.ag.get("context-menu.copy-generic-link")}),c().createElement(x.W2,{uri:e}))))));var O=t(26921),B=t(13020),R=t(86514),U=t(86213),Y=t(20246),J=t(4383),W=t(84242),K=t(56802);const X="x8e0kqJPS0bM4dVK7ESH",Q="gZ2Nla3mdRREDCwybK6X",q="SChMe0Tert7lmc5jqH01",j="AwF4EfqLOIJ2xO7CjHoX",Z="UlkNeRDFoia4UDWtrOr4",G="k_RKSQxa2u5_6KmcOoSw",$="_mWmycP_WIvMNQdKoAFb",ee="O3UuqEx6ibrxyOJIdpdg",ae="akCwgJVf4B4ep6KYwrk5",te="qXuAn7YYM9WSo4IaRS_X",re="bIA4qeTh_LSwQJuVxDzl",le="ajr9pah2nj_5cXrAofU_",ne="gvn0k6QI7Yl_A0u46hKn",ce="obTnuSx7ZKIIY1_fwJhe",se="IiLMLyxs074DwmEH4x5b",me="RJjM91y1EBycwhT_wH59",ie="mxn5B5ceO2ksvMlI1bYz",oe="l8wtkGVi89_AsA3nXDSR",ue="Th1XPPdXMnxNCDrYsnwb",de="SJMBltbXfqUiByDAkUN_",ge="Nayn_JfAUsSO0EFapLuY",he="YqlFpeC9yMVhGmd84Gdo",Ee="HksuyUyj1n3aTnB4nHLd",pe="DT8FJnRKoRVWo77CPQbQ",ve=({playBtnUri:e,uri:a,uriType:t})=>{const r=(0,s.I0)(),[l,m]=(0,J.Z)(a),o=(0,K.o)(),{togglePlay:d,isPlaying:g}=(0,W.n)({uri:e},{featureIdentifier:"hpto"}),h=(0,n.useCallback)((()=>{d(),r((0,i.kh)("event_clicked","ne-play-button"))}),[r,d]),E=(0,n.useCallback)((async()=>{try{await m(!l)}catch{(0,i.lT)(`invalid button uri type ${a}`)}o({targetUri:a,intent:l?"unsave":"save",type:"click"})}),[l,m,a,o]),p=(0,n.useCallback)((()=>{r((0,i.kh)("event_clicked","ne-more-button"))}),[r]);let k=null;return k=C().isAlbum(a)?c().createElement(A.Y,{uri:a}):C().isArtist(a)?c().createElement(L.m,{uri:a}):C().isPlaylistV1OrV2(a)?c().createElement(B.X,{uri:a}):C().isShow(a)?c().createElement(R.M,{uri:a}):C().isTrack(a)?c().createElement(U.$,{uri:a}):C().isEpisode(a)?c().createElement(_.k,{uri:a}):C().isLocalTrack(a)?c().createElement(O.N,{uri:a}):c().createElement(D,{uri:a}),c().createElement("div",{className:ue,"data-testid":"hpto-native-buttons"},c().createElement(I.D,{onClick:h},g?v.ag.get("pause"):v.ag.get("play")),c().createElement(S.P,{className:u()({[pe]:l}),onClick:E},((e,a)=>{switch(e){case C().Type.ALBUM:case C().Type.TRACK:case C().Type.EPISODE:case C().Type.PLAYLIST:return a?v.ag.get("ad-formats.remove"):v.ag.get("ad-formats.save");default:return a?v.ag.get("unfollow"):v.ag.get("follow")}})(t,l)),c().createElement(Y.y,{menu:k},c().createElement(z.z,{onClick:p,size:32,className:de})))},ke=({className:e})=>c().createElement("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"150",height:"20",viewBox:"0 0 147 20"},c().createElement("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},c().createElement("path",{fill:"#FFF",d:"M70 5H71V16H70z"}),c().createElement("g",null,c().createElement("path",{fill:"#84BD00",d:"M10.001.045C4.489.045.02 4.49.02 9.975c0 5.486 4.469 9.932 9.981 9.932 5.513 0 9.981-4.446 9.981-9.931 0-5.485-4.468-9.931-9.981-9.931"}),c().createElement("path",{fill:"#000",d:"M15.544 10.6C12.463 8.717 7.956 8.186 4.33 9.28a.775.775 0 00-.519.967.78.78 0 00.972.515c3.173-.958 7.263-.483 9.945 1.158a.78.78 0 001.07-.255.772.772 0 00-.255-1.065"}),c().createElement("path",{fill:"#000",d:"M16.858 7.251c-3.704-2.187-9.565-2.393-13.09-1.328A.928.928 0 104.31 7.7c3.07-.927 8.378-.752 11.595 1.149a.936.936 0 001.28-.325.926.926 0 00-.327-1.273"}),c().createElement("path",{fill:"#000",d:"M14.372 13.518c-2.63-1.6-5.892-1.972-9.694-1.107a.618.618 0 10.277 1.206c3.474-.79 6.424-.467 8.768.958a.624.624 0 00.855-.206.617.617 0 00-.206-.851"})),c().createElement("g",{fill:"#FFF",transform:"translate(25 5)"},c().createElement("path",{d:"M3.806 4.194C2.23 3.822 1.95 3.56 1.95 3.013c0-.518.493-.867 1.226-.867.711 0 1.416.265 2.156.81a.104.104 0 00.146-.023l.77-1.073a.102.102 0 00-.02-.139C5.347 1.023 4.357.684 3.199.684 1.496.684.307 1.694.307 3.14c0 1.55 1.026 2.099 2.799 2.522 1.508.344 1.763.632 1.763 1.147 0 .57-.515.924-1.343.924-.92 0-1.672-.306-2.511-1.025a.109.109 0 00-.076-.025.103.103 0 00-.071.036L.005 7.734a.1.1 0 00.01.142 5.18 5.18 0 003.476 1.318c1.834 0 3.02-.991 3.02-2.525 0-1.297-.784-2.014-2.705-2.475"}),c().createElement("path",{d:"M10.661 2.656c-.795 0-1.447.31-1.985.944v-.714a.103.103 0 00-.103-.102H7.16a.103.103 0 00-.103.102v7.935c0 .057.046.102.103.102h1.412a.103.103 0 00.103-.102V8.316c.538.597 1.19.889 1.985.889 1.478 0 2.973-1.125 2.973-3.274 0-2.15-1.495-3.275-2.973-3.275zm1.332 3.275c0 1.094-.682 1.858-1.659 1.858-.965 0-1.693-.798-1.693-1.858s.728-1.858 1.693-1.858c.961 0 1.659.78 1.659 1.858z"}),c().createElement("path",{d:"M17.468 2.656c-1.903 0-3.393 1.449-3.393 3.298 0 1.83 1.48 3.263 3.37 3.263 1.91 0 3.405-1.444 3.405-3.286 0-1.836-1.485-3.275-3.382-3.275zm0 5.145c-1.012 0-1.775-.804-1.775-1.87 0-1.07.737-1.847 1.752-1.847 1.019 0 1.787.804 1.787 1.87 0 1.07-.742 1.847-1.764 1.847z"}),c().createElement("path",{d:"M24.913 2.784H23.36v-1.57a.103.103 0 00-.104-.103h-1.411a.103.103 0 00-.104.102v1.57h-.679a.103.103 0 00-.102.103v1.2c0 .056.046.102.102.102h.68v3.104c0 1.254.63 1.89 1.876 1.89.507 0 .927-.103 1.323-.325a.102.102 0 00.052-.089V7.626a.102.102 0 00-.049-.087.104.104 0 00-.1-.004 1.797 1.797 0 01-.83.197c-.452 0-.654-.203-.654-.659V4.188h1.553a.103.103 0 00.103-.102v-1.2a.103.103 0 00-.103-.102"}),c().createElement("path",{d:"M30.326 2.79v-.193c0-.567.22-.82.714-.82.294 0 .53.057.795.145.033.01.067.005.093-.014a.101.101 0 00.043-.083V.648a.102.102 0 00-.073-.098 3.916 3.916 0 00-1.173-.166c-1.305 0-1.994.726-1.994 2.098v.296h-.678a.103.103 0 00-.104.102v1.206c0 .056.047.102.104.102h.678v4.788c0 .056.046.102.103.102h1.412a.103.103 0 00.103-.102V4.188h1.319l2.019 4.787c-.23.502-.455.603-.762.603-.25 0-.511-.074-.779-.219a.107.107 0 00-.082-.007.104.104 0 00-.061.055l-.479 1.038a.1.1 0 00.045.132 3 3 0 001.507.381c1.043 0 1.62-.48 2.127-1.771l2.45-6.258a.1.1 0 00-.011-.095.103.103 0 00-.085-.044h-1.47a.104.104 0 00-.098.068L34.483 7.11l-1.649-4.254a.103.103 0 00-.096-.066h-2.412"}),c().createElement("path",{d:"M27.188 2.784h-1.412a.103.103 0 00-.103.102v6.09c0 .056.046.102.103.102h1.412a.103.103 0 00.103-.102v-6.09a.103.103 0 00-.103-.102"}),c().createElement("path",{d:"M26.49.011c-.56 0-1.014.448-1.014 1 0 .554.454 1.002 1.013 1.002.56 0 1.013-.448 1.013-1.001 0-.553-.454-1-1.013-1"}),c().createElement("path",{d:"M38.858 4.742a.984.984 0 01-.994-.983c0-.538.44-.987 1-.987a.984.984 0 11-.006 1.97zm.005-1.872c-.509 0-.894.4-.894.89 0 .489.382.884.889.884.509 0 .894-.4.894-.89a.876.876 0 00-.889-.884zm.22.985l.281.389h-.237l-.253-.357h-.217v.357h-.198V3.213h.465c.242 0 .401.122.401.329 0 .169-.098.272-.242.313zm-.167-.465h-.26v.326h.26c.129 0 .206-.063.206-.163 0-.107-.077-.163-.206-.163z"})),c().createElement("path",{fill:"#FFF",d:"M79.9 13.12c1.8 0 2.37-1.03 2.37-1.89 0-2.49-4-1.55-4-3.26 0-.72.67-1.23 1.56-1.23.75 0 1.43.26 1.91.84l.38-.42c-.52-.59-1.26-.94-2.26-.94-1.21 0-2.19.69-2.19 1.78 0 2.33 4 1.31 4 3.27 0 .57-.39 1.33-1.76 1.33-.95 0-1.65-.47-2.08-.97l-.37.43c.51.62 1.34 1.06 2.44 1.06zm6.61-.12v-2.77h1.93c1.27 0 2.01-.9 2.01-1.95 0-1.05-.73-1.95-2.01-1.95h-2.5V13h.57zm1.87-3.29h-1.87V6.85h1.87c.88 0 1.47.59 1.47 1.43s-.59 1.43-1.47 1.43zm8.56 3.41c1.95 0 3.24-1.5 3.24-3.45 0-1.95-1.29-3.45-3.24-3.45-1.96 0-3.24 1.5-3.24 3.45 0 1.95 1.28 3.45 3.24 3.45zm0-.52c-1.62 0-2.64-1.25-2.64-2.93 0-1.7 1.02-2.93 2.64-2.93 1.6 0 2.64 1.23 2.64 2.93 0 1.68-1.04 2.93-2.64 2.93zm8.94.4V6.85h2.18v-.52h-4.94v.52h2.18V13h.58zm9.46 0v-.52h-3.23V6.33h-.57V13h3.8zm4.11 0V6.33h-.57V13h.57zm7.09.13c1.05 0 1.94-.45 2.53-1.11V9.69h-3.09v.51h2.52v1.6c-.37.37-1.07.81-1.96.81-1.57 0-2.78-1.22-2.78-2.94 0-1.74 1.21-2.93 2.78-2.93.85 0 1.61.37 2.08.93l.43-.31c-.61-.7-1.41-1.14-2.51-1.14-1.87 0-3.38 1.39-3.38 3.45 0 2.06 1.51 3.46 3.38 3.46zM138.2 13V6.33h-.58v2.98h-4.23V6.33h-.57V13h.57V9.83h4.23V13h.58zm6.23 0V6.85h2.18v-.52h-4.94v.52h2.18V13h.58z"}))),fe=(e,a)=>"spotlight"===e?c().createElement(ke,{className:ce}):"exclusive"===e?c().createElement("p",{dir:"auto",className:u()(ce,se)},v.ag.get("ad-formats.exclusive")):c().createElement("p",{dir:"auto",className:ce},(e=>{switch(e){case C().Type.ALBUM:return v.ag.get("card.tag.album");case C().Type.TRACK:return v.ag.get("card.tag.track");case C().Type.ARTIST:return v.ag.get("card.tag.artist");case C().Type.EPISODE:return v.ag.get("card.tag.episode");case C().Type.SHOW:return v.ag.get("card.tag.show");case C().Type.PLAYLIST:case C().Type.PLAYLIST_V2:return v.ag.get("card.tag.playlist");default:return""}})(a)),be={[m.O.NATIVE]:({name:e,uri:a,playBtnUri:t,description:r,smallImage:l,isSponsored:n,backgroundImage:m,sponsoredLogo:o,uriType:d,logoBlurb:g,isPremium:h,artists:E,badgeType:p})=>{const k=(0,s.I0)(),f=E.length>0,b=!h&&n;return c().createElement(c().Fragment,null,c().createElement("div",{className:u()(n?Q:X,{[Z]:n})},n&&c().createElement("div",{className:G},c().createElement("div",null,c().createElement("p",{className:ne},v.ag.get("ad-formats.presentedBy")),c().createElement("img",{draggable:!1,className:re,src:o,alt:""}),c().createElement("p",{className:le},g))),c().createElement("div",{className:n?j:q},c().createElement("a",{"data-testid":"ne-image-link-test",onClick:()=>{k((0,i.kh)("event_clicked","ne-image-link"))},className:ae,href:a},c().createElement("img",{className:u()(ee,{[te]:n}),alt:"",src:l}))),c().createElement("div",{className:$},fe(p,d),c().createElement("a",{"data-testid":"ne-name-link-test",onClick:()=>{k((0,i.kh)("event_clicked","ne-name-link"))},href:a,dir:"auto",className:n?ie:me},e),f&&c().createElement("div",null,E.map(((e,t)=>c().createElement("span",{key:`${a}-${t}`},t?v.ag.getSeparator():"",c().createElement("a",{"data-testid":`ne-attrib-link-${t}-test`,onClick:()=>{k((0,i.kh)("event_clicked","ne-attrib-link"))},draggable:!1,href:e.uri},e.name))))),c().createElement("span",{dir:"auto",className:oe},r),c().createElement(ve,{playBtnUri:t,uri:a,uriType:d}))),c().createElement("div",{draggable:!1,className:u()(n?he:ge,{[Ee]:!n}),style:{backgroundImage:`url(${m})`}}),!b&&c().createElement(y,{isPremium:h}))},[m.O.IMAGE]:({isPremium:e,backgroundColor:a,backgroundImage:t,clickThroughUrl:r})=>{(0,n.useEffect)((()=>{if(!t)throw Error("[Image HPTO] Missing background image")}),[t]);const l=(0,s.I0)();return c().createElement(c().Fragment,null,c().createElement("a",{draggable:!1,onClick:()=>{l((0,i.kh)("event_clicked"))},className:V,style:{backgroundColor:a},href:r},c().createElement("img",{draggable:!1,className:w,alt:"",src:t})),c().createElement(y,{isPremium:e}))},[m.O.HTML]:({isPremium:e,backgroundColor:a,backgroundImage:t,backgroundUrl:r,loaderFrame:l})=>{const m=(0,n.useRef)(null),[o,u]=(0,n.useState)(!1),d=(0,s.I0)();return(0,n.useEffect)((()=>{const e=()=>{var e;u(!0),null===(e=l.contentWindow)||void 0===e||e.postMessage({name:"fireHptoViewEvent"},"*")};return m&&m.current&&(l.style.display="",l.className=M,l.setAttribute("aria-hidden","true"),l.addEventListener("load",e),m.current.innerHTML="",m.current.insertBefore(l,m.current.firstChild)),()=>{l.removeEventListener("load",e)}}),[m,l]),c().createElement(c().Fragment,null,c().createElement("a",{draggable:!1,href:r,ref:m,className:T,onClick:()=>{r&&d((0,i.kh)("event_clicked"))},style:{backgroundColor:a,opacity:o?1:0,backgroundImage:o?`url(${t})`:"none",backgroundSize:"cover"}}),c().createElement(y,{isPremium:e}))}},ye=()=>{const e=(0,s.I0)(),a=(0,s.v9)(p.LA),t=(0,s.v9)(p.sp),r=(0,s.v9)(p.Jk),m=(0,s.v9)(p.F7);if((0,n.useEffect)((()=>{e((0,i.fm)())}),[e]),!m||null===a)return null;const o=be[a.bannerMode];return c().createElement(E,{fetchingState:t},c().createElement(o,l()({},a,{isPremium:r})))},Te=ye}}]);
//# sourceMappingURL=xpui-desktop-routes-homepage-takeover-ad.js.map