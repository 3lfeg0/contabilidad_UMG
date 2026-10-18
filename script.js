function van(r,i,f){return f.reduce(function(a,x,t){return a+x/Math.pow(1+r,t+1)},-i)}
function calc(){
var i=parseFloat(document.getElementById('inv').value),r=parseFloat(document.getElementById('tasa').value)/100,
f=document.getElementById('flu').value.split(',').map(Number).filter(function(x){return !isNaN(x)});
var o=document.getElementById('out');
if(isNaN(i)||isNaN(r)||!f.length){o.textContent='Revisa los datos ingresados.';return}
var v=van(r,i,f),lo=-0.99,hi=10,tir=null;
if(van(lo,i,f)*van(hi,i,f)<0){for(var k=0;k<200;k++){var m=(lo+hi)/2;if(van(lo,i,f)*van(m,i,f)<=0)hi=m;else lo=m}tir=(lo+hi)/2*100}
o.innerHTML='VAN: Q'+v.toLocaleString('es-GT',{maximumFractionDigits:2})+' → '+(v>0?'se acepta':'se rechaza')+'<br>TIR: '+(tir===null?'no definida':tir.toFixed(2)+'%');
}
function show(inp,id){
var f=inp.files[0];if(!f)return;
var rd=new FileReader();rd.onload=function(e){var im=document.createElement('img');im.src=e.target.result;im.alt='Evidencia';var d=document.getElementById(id);d.innerHTML='';d.appendChild(im)};rd.readAsDataURL(f);
}
