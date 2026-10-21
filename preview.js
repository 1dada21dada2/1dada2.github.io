const portfolio=JSON.parse(document.querySelector('#portfolio-data').textContent);
const overlay=document.querySelector('#preview'),media=document.querySelector('#preview-media');
const title=document.querySelector('#preview-title'),count=document.querySelector('#preview-count'),more=document.querySelector('#preview-more');
let selected=0,slide=0,trigger=null;
function paint(){const p=portfolio[selected]; media.innerHTML=`<div class="art ${p.art} slide-${slide}">${p.markup}<span class="preview-img-note">IMAGE PLACEHOLDER · ${slide+1}/3</span></div>`;title.textContent=p.name;count.textContent=`${slide+1} / 3`;more.href=p.href;}
function openPreview(i,el){selected=i;slide=0;trigger=el;overlay.hidden=false;paint();document.querySelector('#preview-close').focus();}
function closePreview(){overlay.hidden=true;media.innerHTML='';if(trigger)trigger.focus();}
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>openPreview(Number(b.dataset.project),b)));
document.querySelector('#preview-next').addEventListener('click',()=>{slide=(slide+1)%3;paint()});
document.querySelector('#preview-prev').addEventListener('click',()=>{slide=(slide+2)%3;paint()});
document.querySelector('#preview-close').addEventListener('click',closePreview);
document.addEventListener('keydown',e=>{if(overlay.hidden)return;if(e.key==='Escape')closePreview();if(e.key==='ArrowRight'){slide=(slide+1)%3;paint()}if(e.key==='ArrowLeft'){slide=(slide+2)%3;paint()}});
