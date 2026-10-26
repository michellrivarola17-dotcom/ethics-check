/* ETHICS CHECK! — personajes y garabatos dibujados a mano (SVG) */
(function(){
const N='#14286b';
const S='stroke="'+N+'" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"';
const shoe=(x,c)=>'<path d="M'+x+' 200c0-9 8-12 20-10 6 1 8 6 6 10z" fill="'+c+'"/>';
const pat=(id,bg,ln)=>'<pattern id="'+id+'" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="8" height="8" fill="'+bg+'"/><path d="M0 2h8" stroke="'+ln+'" stroke-width="2.4"/></pattern>';
const defs='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>'+
'<filter id="rough" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter>'+
pat('hBlue','#2a60dc','#5a8af2')+pat('hOrange','#ff8a2a','#ffb25e')+pat('hCream','#fff2d2','#ffe2a6')+pat('hShield','#1f55d0','#3f74e6')+
'</defs></svg>';

const guardian='<g filter="url(#rough)" '+S+'>'+
'<path d="M86 166 82 194M122 166 126 194" fill="none"/>'+shoe(64,'#f7c531')+shoe(120,'#f7c531')+
'<path d="M46 116c-16 6-24 18-24 30" fill="none"/>'+
'<circle cx="102" cy="106" r="62" fill="url(#hBlue)"/>'+
'<path d="M74 98q8-9 16 0M106 98q8-9 16 0" fill="none"/><path d="M82 118q16 15 32 0" fill="none"/>'+
'<path d="M150 132q14 6 22-6" fill="none"/>'+
'<path d="M172 64l36 13v26c0 25-17 39-36 47-19-8-36-22-36-47V77z" fill="url(#hShield)"/>'+
'<path d="M157 105l11 11 22-24" stroke="#fff" stroke-width="8" fill="none"/>'+
'</g>';

const negociador='<g filter="url(#rough)" '+S+'>'+
'<path d="M84 168 78 194M128 168 134 194" fill="none"/>'+shoe(58,'#2a60dc')+shoe(128,'#2a60dc')+
'<path d="M150 104q24-6 30-34" fill="none"/>'+
'<rect x="48" y="58" width="112" height="112" rx="14" fill="url(#hOrange)" transform="rotate(-6 104 114)"/>'+
'<path d="M78 104q7-8 14 0M108 101q7-8 14 0" fill="none"/><path d="M86 124q14 11 28-2" fill="none"/>'+
'<ellipse cx="74" cy="118" rx="6" ry="4" fill="#e2463a" stroke="none" opacity=".45"/><ellipse cx="128" cy="114" rx="6" ry="4" fill="#e2463a" stroke="none" opacity=".45"/>'+
'<path d="M58 152q20 8 32-10" fill="none"/>'+
'<path d="M180 22v48M168 70h24M156 30h48" fill="none"/>'+
'<path d="M156 30l-10 20M156 30l10 20M204 30l-10 20M204 30l10 20" fill="none" stroke-width="3"/>'+
'<path d="M144 50q12 13 24 0zM192 50q12 13 24 0z" fill="#f7c531"/>'+
'</g>';

const explorador='<g filter="url(#rough)" '+S+'>'+
'<path d="M92 160 88 192M132 160 136 192" fill="none"/>'+shoe(68,'#9b6be0')+shoe(130,'#9b6be0')+
'<path d="M64 166C36 166 30 128 56 122 48 94 82 78 100 96 106 68 150 68 154 98 180 92 194 124 176 138 190 156 172 174 152 166Z" fill="url(#hCream)"/>'+
'<path d="M96 92c2-26 46-30 54-4z" fill="#9b6be0"/><path d="M146 86q16-2 24 6" fill="none"/>'+
'<circle cx="104" cy="120" r="4.5" fill="'+N+'"/><circle cx="134" cy="120" r="4.5" fill="'+N+'"/>'+
'<path d="M108 130q11 10 22 0" fill="none"/>'+
'<ellipse cx="94" cy="130" rx="6" ry="4" fill="#ff9fb0" stroke="none"/><ellipse cx="146" cy="130" rx="6" ry="4" fill="#ff9fb0" stroke="none"/>'+
'<path d="M86 146l20-6 20 6 20-6v32l-20 6-20-6-20 6z" fill="#fffaf0"/>'+
'<path d="M106 140v32M126 146v32" fill="none" stroke-width="3"/>'+
'<path d="M92 164q10-8 18 0t20-4" fill="none" stroke="#ff8a2a" stroke-width="3" stroke-dasharray="4 5"/>'+
'<path d="M134 152l8 8M142 152l-8 8" stroke="#9b6be0" stroke-width="3.5"/>'+
'<path d="M176 132q18-6 30-22M206 110l8-4M206 110l2-9" fill="none"/>'+
'</g>';

const walker='<g filter="url(#rough)" '+S+'>'+
'<path d="M88 166 68 190M124 164 146 186" fill="none"/>'+shoe(48,'#f7c531')+'<path d="M138 192c0-9 8-12 20-10 6 1 8 6 6 10z" fill="#f7c531"/>'+
'<path d="M54 120q-22 8-22 32M158 108q22-4 30-28" fill="none"/>'+
'<rect x="52" y="56" width="108" height="108" rx="14" fill="url(#hOrange)" transform="rotate(8 106 110)"/>'+
'<path d="M84 100q7-8 14 0M114 104q7-8 14 0" fill="none"/><path d="M90 122q14 12 30 2" fill="none"/>'+
'<path d="M14 92h18M8 112h22M16 132h14" stroke="#ff8a2a" fill="none"/>'+
'</g>';

const svg=(inner,vb,label)=>'<svg viewBox="'+vb+'" xmlns="http://www.w3.org/2000/svg"'+(label?' role="img" aria-label="'+label+'"':' aria-hidden="true"')+'>'+inner+'</svg>';
const group='<g transform="translate(0 12) scale(.95)">'+guardian+'</g><g transform="translate(150 0)">'+negociador+'</g><g transform="translate(300 14)">'+explorador+'</g>';

const D={
 zig:['0 0 50 42','<path d="M4 34 14 8l10 26 10-26 10 26"/>'],
 burst:['0 0 48 42','<path d="M6 30 16 6M22 34 30 14M36 36l6-12"/>'],
 squiggle:['0 0 72 34','<path d="M4 22q8-16 16 0t16 0 16 0 16 0"/>'],
 star:['0 0 48 48','<path d="M24 4l6 13 14 2-10 10 3 14-13-7-13 7 3-14L4 19l14-2z"/>'],
 swirl:['0 0 44 40','<path d="M8 30c0-14 22-18 26-6 3 9-8 14-12 8-3-4 2-9 6-6"/>'],
 crayon:['0 0 72 64','<path d="M6 40C20 20 30 14 40 8M8 48C26 26 40 18 56 10M14 54C30 36 46 26 62 18M24 58C38 44 52 36 66 30"/>'],
 underline:['0 0 120 16','<path d="M4 11C34 5 76 4 116 7"/>'],
 brush:['0 0 160 120','<g filter="url(#rough)" opacity=".9"><path d="M-10 40C30 20 70 8 120-6M-10 62C40 38 90 22 150 2M-6 86C46 60 100 40 166 18M4 108C60 82 112 62 170 42M30 124C76 100 120 84 170 70"/></g>'],
 arrow:['0 0 120 60','<path d="M4 40C30 54 70 50 100 20" stroke-dasharray="7 8"/><path d="M86 16l16 2-4 16"/>']
};
function fill(){
 document.querySelectorAll('.dd').forEach(el=>{const d=D[el.dataset.d];if(!d)return;el.innerHTML='<svg viewBox="'+d[0]+'" fill="none" stroke="'+(el.dataset.c||'#ff8a2a')+'" stroke-width="'+(el.dataset.w||5)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d[1]+'</svg>'});
 document.querySelectorAll('[data-art]').forEach(el=>{const k=el.dataset.art;el.innerHTML=k==='group'?svg(group,'0 0 520 230','Los tres personajes de ETHICS CHECK!'):svg(ART[k],'0 0 220 220')});
}
window.ART={guardian,negociador,explorador,walker,group,svg,fill};
document.body.insertAdjacentHTML('afterbegin',defs);
fill();
})();
