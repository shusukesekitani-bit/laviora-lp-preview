(()=>{
  const sticky=document.getElementById('sticky-cta');
  if(!sticky)return;
  const show=()=>{if(sticky.hidden)sticky.hidden=false;};
  show();
  new MutationObserver(show).observe(sticky,{attributes:true,attributeFilter:['hidden']});
})();
