require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({173:[function(require,module,exports) {
console.log("intro init");var e=!1,o=!1;window.location.host;var t=document.createElement("script");t.src="https://www.youtube.com/player_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);var a,i=void 0,l=window.location.href,d={autoplay:1,autohide:1,modestbranding:1,rel:0,showinfo:0,controls:0,disablekb:1,enablejsapi:1,iv_load_policy:3},r={videoId:"AzR_QYX1eEM",suggestedQuality:"hd720",host:"https://www.youtube.com",origin:l},c=27;function s(t){console.log("PLAYER IS READY"),e||o||(t.target.loadVideoById(r),t.target.playVideo())}function u(e){var o,t;console.log("onPlayerStateChange"),console.log(e.data),$("#tv").addClass("active"),clearTimeout(a),-1==e.data&&(console.log("play -1"),e.target.playVideo()),e.data==YT.PlayerState.PLAYING&&(o=i.getCurrentTime())+.4<c&&(t=i.getPlaybackRate(),a=setTimeout(w,1e3*((c-o)/t)))}function w(){i.pauseVideo()}function y(){var e=$(window).width()+200;$(window).height();i.setSize(e,e/16*9),$(".screen").css({left:"0px"})}window.onYouTubePlayerAPIReady=function(){console.log("YouTubePlayerAPIReady"),o||(i=new YT.Player("tv",{events:{onReady:s,onStateChange:u},playerVars:d}),window.VideoControl=i)},$(window).on("load resize",function(){i&&y()}),$("#playIntro").click(function(){i&&(i.stopVideo(),i.playVideo())}),$("#skipIntro").click(function(){o=!0,$("section.section-intro").slideUp(300),i&&w()}),e&&$("#skipIntro").click();
},{}]},{},[173])