// UTMify: equivalentes legíveis dos dois códigos enviados.
window.tikTokPixelId = "6adab2240689458175f917c5";
(function(){
  const sources = [
    {url:"https://cdn.utmify.com.br/scripts/pixel/pixel-tiktok.js",attributes:[]},
    {url:"https://cdn.utmify.com.br/scripts/utms/latest.js",attributes:["data-utmify-prevent-xcod-sck","data-utmify-prevent-subids"]}
  ];
  sources.forEach(function(item){const script=document.createElement("script");script.src=item.url;script.async=true;script.defer=true;item.attributes.forEach(function(name){script.setAttribute(name,"")});(document.head||document.documentElement).appendChild(script)});
})();
// TikTok Pixel Code
!function(w,d,t){
 w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
 ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
 ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
 for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
 ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
 ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};n=d.createElement("script");n.type="text/javascript";n.async=true;n.src=r+"?sdkid="+e+"&lib="+t;e=d.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
 ttq.load('DBDAVFBC77U4PGELA8DG');ttq.page();
}(window,document,'ttq');
