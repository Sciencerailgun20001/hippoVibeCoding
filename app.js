(function(){
var BASE="https://cdn.jsdelivr.net/gh/Sciencerailgun20001/hippoVibeCoding@main";
function loadPage(path){
  fetch(BASE+path).then(function(r){return r.text()}).then(function(h){
    document.open();
    document.write('<base href="'+BASE+'/">'+h);
    document.close();
    rebindLinks();
  });
}
function rebindLinks(){
  document.querySelectorAll("a[href]").forEach(function(a){
    var href=a.getAttribute("href");
    if(!href)return;
    if(href.startsWith("http")||href.startsWith("#")||href.startsWith("javascript:"))return;
    a.href="javascript:void(0)";
    a.addEventListener("click",function(){loadPage("/"+href.replace(/^\//,""))});
  });
}
var page=location.hash.slice(1)||"/index.html";
loadPage(page);
window.addEventListener("hashchange",function(){
  loadPage(location.hash.slice(1)||"/index.html");
});
})();
