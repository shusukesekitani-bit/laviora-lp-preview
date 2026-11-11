(()=>{
  const video=document.getElementById('fv-preview-video');
  if(!video)return;
  video.muted=true;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){video.pause();return;}
  const play=()=>video.play().catch(()=>{});
  play();document.addEventListener('pointerdown',play,{once:true,passive:true});
})();
