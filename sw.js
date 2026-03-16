/* ─────────────────────────────────────────────
   MathRush v13 — Service Worker
   Full PWA: Offline cache + Push Notifications
───────────────────────────────────────────── */
const CACHE_NAME = 'mathrush-v13';
const SHELL = ['./index.html','./style.css','./script.js','./manifest.json','./icon-192.svg','./icon-512.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url=new URL(event.request.url);
  const isExternal=url.hostname.includes('firebase')||url.hostname.includes('googleapis')||url.hostname.includes('gstatic')||url.hostname.includes('firebaseapp')||url.hostname.includes('anthropic');
  if(isExternal){event.respondWith(fetch(event.request).catch(()=>new Response('',{status:503})));return;}
  event.respondWith(caches.match(event.request).then(cached=>{
    if(cached)return cached;
    return fetch(event.request).then(res=>{
      if(res.ok&&event.request.method==='GET'){const cl=res.clone();caches.open(CACHE_NAME).then(c=>c.put(event.request,cl));}
      return res;
    }).catch(()=>caches.match('./index.html'));
  }));
});

/* ── PUSH NOTIFICATIONS ── */
self.addEventListener('push', event => {
  let d={title:'MathRush 🧠',body:'Come back and practice!',icon:'./icon-192.svg'};
  try{d=event.data?{...d,...event.data.json()}:d;}catch(e){}
  event.waitUntil(self.registration.showNotification(d.title,{
    body:d.body,icon:d.icon||'./icon-192.svg',badge:'./icon-192.svg',
    tag:'mathrush-streak',renotify:true,vibrate:[200,100,200],
    data:{url:d.url||'./'},
    actions:[{action:'play',title:'▶ Play Now'},{action:'dismiss',title:'Later'}]
  }));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  if(event.action==='dismiss')return;
  event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cl=>{
    for(const c of cl){if(c.url.includes('index.html')||c.url.endsWith('/'))return c.focus();}
    return clients.openWindow('./index.html');
  }));
});

self.addEventListener('periodicsync', event => {
  if(event.tag==='daily-streak-check')event.waitUntil(checkAndNotify());
});
async function checkAndNotify(){
  const msgs=["🔥 Don't break your streak! Open MathRush now.","🧠 Your brain needs daily training. Come play!","⚡ Quick 2-minute math session to keep your streak!","🏆 Your streak is waiting. Don't let it reset!"];
  await self.registration.showNotification('MathRush Daily Reminder',{
    body:msgs[Math.floor(Math.random()*msgs.length)],icon:'./icon-192.svg',
    badge:'./icon-192.svg',tag:'mathrush-daily',renotify:false,data:{url:'./'}
  });
}
