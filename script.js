// Menu mobile
const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
if(btn){btn.addEventListener('click',()=>{const o=nav.classList.toggle('buka');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('buka');btn.setAttribute('aria-expanded',false)}})}
// Formulir -> WhatsApp panitia
const NOMOR_PANITIA='6281234567890'; // GANTI dengan nomor WhatsApp panitia (format 62...)
const f=document.getElementById('form-daftar');
if(f){f.addEventListener('submit',e=>{e.preventDefault();
if(!f.checkValidity()){f.reportValidity();return}
const d=Object.fromEntries(new FormData(f));
const t=`Assalamu'alaikum, saya mendaftarkan santri baru ke Ma'had Imam Syafi'i.%0A%0A`+
`Nama: ${d.nama}%0AJenis kelamin: ${d.jk}%0ANISN: ${d.nisn}%0ASekolah asal: ${d.sekolah}%0AProgram: ${d.program}%0ANama wali: ${d.wali}%0AEmail: ${d.email}%0AWhatsApp: ${d.hp}`;
document.getElementById('sukses').classList.add('tampil');
document.getElementById('sukses').scrollIntoView({behavior:'smooth',block:'center'});
window.open(`https://wa.me/${NOMOR_PANITIA}?text=${t}`,'_blank','noopener');f.reset()})}
