/* ══════════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════════ */
const T={
  en:{
    wbTitle:'Train Your\nBrain Today 🧠',wbSub:'Fast math · Daily streak · Level up',
    menuBestLbl:'Best Score',menuStreakLbl:'Streak',
    menuLangTitle:'Language',menuDiffTitle:'Difficulty',
    menuGameModeTitle:'Game Mode',menuTimeTitle:'Time per Question',
    mcEasy:'Easy',mcEasyDesc:'1–10',mcMedium:'Medium',mcMediumDesc:'1–20',mcHard:'Hard',mcHardDesc:'1–50',
    gmcPractice:'Practice',gmcPracticeDesc:'No heart loss',
    gmcChallenge:'Challenge',gmcChallengeDesc:'Lose hearts on wrong',
    gmcEndless:'Endless',gmcEndlessDesc:'Until hearts gone',
    gmcTimeAttack:'Time Attack',gmcTimeAttackDesc:'60s blitz mode',
    gmcKids:'Kids Mode',gmcKidsDesc:'Numbers 1–5, fun!',
    tc5:'Fast',tc10:'Normal',tc15:'Slow',tc30:'Relax',
    playBtn:'Start Learning',gameSubtitle:'Train Your Brain',
    statScoreLbl:'Score',statBestLbl:'Best',statHeartsLbl:'Lives',
    statTimerLbl:'Time',statStreakLbl:'Streak',statRankLbl:'Rank',
    qLabel:'QUESTION',progressLbl:'Round progress',
    ctrlDiffLbl:'Level',ctrlLangLbl:'Lang',ctrlSoundLbl:'Sound',
    soundOn:'On',soundOff:'Off',restartPill:'Restart',
    ctrlEasy:'🌱 Easy',ctrlMed:'⚡ Med',ctrlHard:'🔥 Hard',
    fbCorrect:'✓ Correct!',fbWrong:'✗ Wrong!',fbTimeout:"⏰ Time's up!",
    modalTitle:'Game Over!',modalScoreLbl:'Score',modalBestLbl:'Best',
    modalRestart:'Try Again',modalMenu:'Back to Menu',
    ranks:['Beginner','Fast Thinker','Math Ninja','Math Master'],
    msgs:["Keep going, you're improving!",'Great effort! Consistency is key.',"You're getting faster every round!",'Excellent work! Math Ninja in the making.',"🎉 Outstanding! You're a Math Master!"],
    diffTag:{easy:'Easy',medium:'Medium',hard:'Hard'},
    modeTag:{practice:'Practice',challenge:'Challenge',endless:'Endless',timeattack:'Time Attack'},
    roundComplete:'🎊 Round Complete! Keep going!',
    levelNames:['Novice','Apprentice','Scholar','Expert','Sage','Master','Grand Master','Legend'],
    dailyChallenges:[
      {desc:'Solve 20 questions',key:'total_q',target:20},
      {desc:'Get 10 correct in a row',key:'combo',target:10},
      {desc:'Score 50 points',key:'score',target:50},
      {desc:'Answer 15 correctly',key:'correct_q',target:15},
    ],
    taComplete:'Time\'s Up!',taMsg:'How many could you answer in 60 seconds?',
  },
  id:{
    wbTitle:'Latih Otakmu\nHari Ini 🧠',wbSub:'Matematika cepat · Streak harian · Naik level',
    menuBestLbl:'Skor Terbaik',menuStreakLbl:'Streak',
    menuLangTitle:'Bahasa',menuDiffTitle:'Kesulitan',
    menuGameModeTitle:'Mode Permainan',menuTimeTitle:'Waktu per Soal',
    mcEasy:'Mudah',mcEasyDesc:'1–10',mcMedium:'Sedang',mcMediumDesc:'1–20',mcHard:'Sulit',mcHardDesc:'1–50',
    gmcPractice:'Latihan',gmcPracticeDesc:'Hati tidak berkurang',
    gmcChallenge:'Tantangan',gmcChallengeDesc:'Hati berkurang jika salah',
    gmcEndless:'Tanpa Batas',gmcEndlessDesc:'Sampai hati habis',
    gmcTimeAttack:'Time Attack',gmcTimeAttackDesc:'60 detik blitz',
    gmcKids:'Mode Anak',gmcKidsDesc:'Angka 1–5, seru!',
    tc5:'Cepat',tc10:'Normal',tc15:'Lambat',tc30:'Santai',
    playBtn:'Mulai Belajar',gameSubtitle:'Latih Otakmu',
    statScoreLbl:'Skor',statBestLbl:'Terbaik',statHeartsLbl:'Nyawa',
    statTimerLbl:'Waktu',statStreakLbl:'Streak',statRankLbl:'Peringkat',
    qLabel:'SOAL',progressLbl:'Progres ronde',
    ctrlDiffLbl:'Level',ctrlLangLbl:'Bahasa',ctrlSoundLbl:'Suara',
    soundOn:'Nyala',soundOff:'Mati',restartPill:'Ulangi',
    ctrlEasy:'🌱 Mudah',ctrlMed:'⚡ Sedang',ctrlHard:'🔥 Sulit',
    fbCorrect:'✓ Benar!',fbWrong:'✗ Salah!',fbTimeout:'⏰ Waktu habis!',
    modalTitle:'Game Over!',modalScoreLbl:'Skor',modalBestLbl:'Terbaik',
    modalRestart:'Coba Lagi',modalMenu:'Kembali ke Menu',
    ranks:['Pemula','Pemikir Cepat','Ninja Matematika','Master Matematika'],
    msgs:['Terus semangat, kamu semakin baik!','Kerja keras! Konsistensi adalah kunci.','Kamu semakin cepat setiap ronde!','Luar biasa! Calon Ninja Matematika.','🎉 Menakjubkan! Kamu adalah Math Master!'],
    diffTag:{easy:'Mudah',medium:'Sedang',hard:'Sulit'},
    modeTag:{practice:'Latihan',challenge:'Tantangan',endless:'Tanpa Batas',timeattack:'Time Attack'},
    roundComplete:'🎊 Ronde Selesai! Terus!',
    levelNames:['Pemula','Murid','Pelajar','Ahli','Bijak','Master','Grand Master','Legenda'],
    dailyChallenges:[
      {desc:'Jawab 20 soal',key:'total_q',target:20},
      {desc:'Jawab 10 soal benar berturut-turut',key:'combo',target:10},
      {desc:'Raih 50 poin',key:'score',target:50},
      {desc:'Jawab 15 soal dengan benar',key:'correct_q',target:15},
    ],
    taComplete:'Waktu Habis!',taMsg:'Berapa soal yang bisa kamu jawab dalam 60 detik?',
  }
};

/* ══════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════ */
let lang='en',diff='easy',gameMode='practice',timerMax=10;
let score=0,bestScore=parseInt(localStorage.getItem('mr_best')||'0');
let hearts=3,streak=0,roundCorrect=0;
const ROUND_SIZE=10;
let currentQ=null,timerInt=null,timeLeft=10,locked=false;
let muted=localStorage.getItem('mr_muted')==='true';
let sessionStreak=parseInt(localStorage.getItem('mr_streak')||'0');
let darkMode=localStorage.getItem('mr_dark')==='true';

/* XP / Level */
const XP_TABLE=[0,100,250,450,700,1000,1400,1900,2500,9999999];
let xp=parseInt(localStorage.getItem('mr_xp')||'0');
let playerLevel=getLevel(xp);

/* Coins */
let coins=parseInt(localStorage.getItem('mr_coins')||'0');

/* Combo */
let combo=0;
let bestCombo=parseInt(localStorage.getItem('mr_bestCombo')||'0');

/* Statistics */
let statsTotal=parseInt(localStorage.getItem('mr_statsTotal')||'0');
let statsCorrect=parseInt(localStorage.getItem('mr_statsCorrect')||'0');
let statsPlayStart=0;
let statsPlayTime=parseInt(localStorage.getItem('mr_statsPlayTime')||'0');

/* Endless mode */
let endlessWave=1;
let endlessQCount=0;
const ENDLESS_WAVE_SIZE=10;
let endlessTotal=parseInt(localStorage.getItem('mr_endlessTotal')||'0');

/* ── TIME ATTACK STATE ── */
const TA_DURATION=60;
let taTimeLeft=TA_DURATION;
let taInt=null;
let taScore=0;
let taTotalAnswered=0;
let taCorrectAnswered=0;
let taBestCombo=0;
let taBestScore=parseInt(localStorage.getItem('mr_ta_best')||'0');

/* ── POWER-UP STATE ── */
const PU_COSTS={freeze:10,elim:15,dblxp:20,extra:25};
let puFreezeActive=false;
let puFreezeTimer=null;
let puElimUsed=false;
let puDblXpActive=false;
let puDblXpCount=0;
/* reset per question */
let puElimUsedThisQ=false;
/* per game session limits */
let puUsedThisGame={freeze:false,elim:false,dblxp:false,extra:false};

/* Daily challenge */
let dailyChallenge=null;
let dailyChallengeProgress=0;
let dailyDone=false;

/* ══════════════════════════════════════════════════
   ACHIEVEMENTS
══════════════════════════════════════════════════ */
const ACHIEVEMENTS=[
  {id:'first10',icon:'🎯',name:'First Steps',desc:'Answer 10 questions',check:()=>statsTotal>=10},
  {id:'first100',icon:'💯',name:'Century',desc:'Answer 100 questions',check:()=>statsTotal>=100},
  {id:'combo5',icon:'🔥',name:'On Fire',desc:'Get a 5× combo',check:()=>bestCombo>=5},
  {id:'combo10',icon:'💥',name:'Combo Master',desc:'Get a 10× combo',check:()=>bestCombo>=10},
  {id:'combo20',icon:'🌪️',name:'Unstoppable',desc:'Get a 20× combo',check:()=>bestCombo>=20},
  {id:'score50',icon:'⭐',name:'Rising Star',desc:'Score 50 in one game',check:()=>bestScore>=50},
  {id:'score100',icon:'🏆',name:'Century Score',desc:'Score 100 in one game',check:()=>bestScore>=100},
  {id:'perfectRound',icon:'💎',name:'Perfect Round',desc:'Complete a round with no mistakes',check:()=>(localStorage.getItem('mr_perfectRound')==='true')},
  {id:'accuracy90',icon:'🎯',name:'Sharp Shooter',desc:'90%+ accuracy (50+ questions)',check:()=>(statsTotal>=50&&(statsCorrect/statsTotal)>=0.9)},
  {id:'level5',icon:'🌟',name:'Level 5',desc:'Reach level 5',check:()=>playerLevel>=5},
  {id:'dailyDone',icon:'📅',name:'Daily Warrior',desc:'Complete a daily challenge',check:()=>(localStorage.getItem('mr_dailyDone')==='true')},
  {id:'endless50',icon:'♾️',name:'Endless Runner',desc:'Answer 50 in Endless mode',check:()=>(parseInt(localStorage.getItem('mr_endlessTotal')||'0')>=50)},
  {id:'poweruser',icon:'⚡',name:'Power User',desc:'Use 5 power-ups',check:()=>(parseInt(localStorage.getItem('mr_puUsed')||'0')>=5)},
  {id:'rich',icon:'🪙',name:'Coin Hoarder',desc:'Accumulate 100 coins',check:()=>(parseInt(localStorage.getItem('mr_coinsTotal')||'0')>=100)},
  {id:'tamaster',icon:'⏱️',name:'Speed Demon',desc:'Score 30 in Time Attack',check:()=>taBestScore>=30},
  {id:'bossslayer',icon:'👹',name:'Boss Slayer',desc:'Defeat your first Boss Round',check:()=>(localStorage.getItem('mr_bossDefeated')==='true')},
  {id:'streak7',icon:'📅',name:'Week Warrior',desc:'7-day login streak',check:()=>loginStreak>=7},
  {id:'kids5',icon:'🎈',name:'Patient Teacher',desc:'Get 10 correct in Kids Mode',check:()=>(parseInt(localStorage.getItem('mr_kids_correct')||'0')>=10)},
  {id:'prestige',icon:'🌠',name:'Prestige',desc:'Complete a prestige reset',check:()=>prestigeCount>=1},
  {id:'hintmaster',icon:'💡',name:'Hint Hunter',desc:'Use 10 hints',check:()=>(parseInt(localStorage.getItem('mr_hintUsed')||'0')>=10)},
];
let unlockedAch=new Set(JSON.parse(localStorage.getItem('mr_ach')||'[]'));

/* ══════════════════════════════════════════════════
   AUDIO — SOUND PACK SYSTEM
══════════════════════════════════════════════════ */
let actx=null;
let soundPack=localStorage.getItem('mr_soundpack')||'default';

function getCtx(){if(!actx)actx=new(window.AudioContext||window.webkitAudioContext)();return actx;}

function tone(f,t,d,g=0.22,delay=0){
  if(muted)return;
  try{
    const c=getCtx(),o=c.createOscillator(),gn=c.createGain();
    o.connect(gn);gn.connect(c.destination);o.type=t;o.frequency.value=f;
    const st=c.currentTime+delay;
    gn.gain.setValueAtTime(g,st);gn.gain.exponentialRampToValueAtTime(.001,st+d);
    o.start(st);o.stop(st+d);
  }catch(e){}
}

// Pack-aware tone helpers
function toneP(packs,delay=0){
  // packs: {default:[f,t,d,g], retro:[f,t,d,g], piano:[f,t,d,g]}
  const p=packs[soundPack]||packs['default'];
  if(!p)return;
  tone(p[0],p[1],p[2],p[3]??0.22,delay);
}

function sfxCorrect(){
  if(soundPack==='retro'){
    // 8-bit blip ascending
    [523,659,784].forEach((f,i)=>tone(f,'square',.07,.15,i*.06));
  } else if(soundPack==='piano'){
    // soft piano chime: C5 E5 G5
    [523,659,784].forEach((f,i)=>tone(f,'triangle',.22,.14,i*.09));
  } else {
    tone(523,'sine',.09);setTimeout(()=>tone(659,'sine',.09),75);setTimeout(()=>tone(784,'sine',.16),150);
  }
}
function sfxWrong(){
  if(soundPack==='retro'){
    tone(180,'square',.18,.2);setTimeout(()=>tone(130,'square',.22,.18),110);
  } else if(soundPack==='piano'){
    tone(220,'triangle',.3,.12);setTimeout(()=>tone(196,'triangle',.25,.1),130);
  } else {
    tone(220,'sawtooth',.14);setTimeout(()=>tone(175,'sawtooth',.2),105);
  }
}
function sfxClick(){
  if(soundPack==='retro')tone(1200,'square',.03,.07);
  else if(soundPack==='piano')tone(1047,'triangle',.05,.06);
  else tone(880,'square',.04,.08);
}
function sfxStreak(){
  if(soundPack==='retro'){[880,1109,1318].forEach((f,i)=>tone(f,'square',.06,.12,i*.05));}
  else if(soundPack==='piano'){[659,784,1047].forEach((f,i)=>tone(f,'triangle',.14,.15,i*.07));}
  else{tone(880,'sine',.07);setTimeout(()=>tone(1109,'sine',.07),55);setTimeout(()=>tone(1318,'sine',.13),110);}
}
function sfxCombo(){
  if(soundPack==='retro'){[523,659,784,1047].forEach((f,i)=>tone(f,'square',.1,.16,i*.06));}
  else if(soundPack==='piano'){[523,659,784,1047].forEach((f,i)=>tone(f,'triangle',.18,.14,i*.08));}
  else{[523,659,784,1047].forEach((f,i)=>tone(f,'sine',.12,.18,i*.07));}
}
function sfxLevelUp(){
  if(soundPack==='retro'){[392,523,659,784,1047].forEach((f,i)=>tone(f,'square',.14,.18,i*.09));}
  else if(soundPack==='piano'){[392,523,659,784,1047].forEach((f,i)=>tone(f,'triangle',.22,.18,i*.11));}
  else{[392,523,659,784,1047].forEach((f,i)=>tone(f,'sine',.18,.22,i*.1));}
}
function sfxAchievement(){
  if(soundPack==='retro'){[659,784,880,1109].forEach((f,i)=>tone(f,'square',.12,.16,i*.07));}
  else if(soundPack==='piano'){[659,784,880,1109].forEach((f,i)=>tone(f,'triangle',.2,.18,i*.09));}
  else{[659,784,880,1109].forEach((f,i)=>tone(f,'triangle',.15,.2,i*.08));}
}
function sfxCountdown(){
  if(soundPack==='retro')tone(440,'square',.1,.28);
  else if(soundPack==='piano')tone(440,'triangle',.18,.26);
  else tone(440,'sine',.12,.3);
}
function sfxDailyComplete(){
  if(soundPack==='retro'){[523,659,784,659,784,1047].forEach((f,i)=>tone(f,'square',.1,.2,i*.08));}
  else if(soundPack==='piano'){[523,659,784,659,784,1047].forEach((f,i)=>tone(f,'triangle',.18,.2,i*.1));}
  else{[523,659,784,659,784,1047].forEach((f,i)=>tone(f,'sine',.14,.22,i*.09));}
}
function sfxFreeze(){
  if(soundPack==='retro'){tone(1047,'square',.15,.25);setTimeout(()=>tone(784,'square',.12,.2),110);}
  else if(soundPack==='piano'){tone(880,'triangle',.25,.22);setTimeout(()=>tone(659,'triangle',.2,.18),120);}
  else{tone(880,'sine',.2,.3);setTimeout(()=>tone(660,'sine',.15,.25),100);}
}
function sfxElim(){
  if(soundPack==='retro'){tone(330,'square',.08);setTimeout(()=>tone(220,'square',.15),80);}
  else if(soundPack==='piano'){tone(330,'triangle',.14);setTimeout(()=>tone(220,'triangle',.18),80);}
  else{tone(330,'sawtooth',.1);setTimeout(()=>tone(220,'sawtooth',.18),80);}
}
function sfxDblXp(){
  if(soundPack==='retro'){[880,1109,1318].forEach((f,i)=>tone(f,'square',.1,.18,i*.07));}
  else if(soundPack==='piano'){[880,1109,1318].forEach((f,i)=>tone(f,'triangle',.16,.18,i*.09));}
  else{[880,1109,1318].forEach((f,i)=>tone(f,'triangle',.13,.2,i*.08));}
}
function sfxExtra(){
  if(soundPack==='retro'){[523,659,784].forEach((f,i)=>tone(f,'square',.12,.16,i*.09));}
  else if(soundPack==='piano'){[523,659,784].forEach((f,i)=>tone(f,'triangle',.18,.18,i*.11));}
  else{[523,659,784].forEach((f,i)=>tone(f,'sine',.15,.2,i*.1));}
}
function sfxTAEnd(){
  if(soundPack==='retro'){[784,659,523,440].forEach((f,i)=>tone(f,'square',.14,.22,i*.09));}
  else if(soundPack==='piano'){[784,659,523,440].forEach((f,i)=>tone(f,'triangle',.22,.22,i*.11));}
  else{[784,659,523,440].forEach((f,i)=>tone(f,'sine',.18,.25,i*.1));}
}
function sfxCoin(){
  if(soundPack==='retro')tone(1200,'square',.05,.1);
  else if(soundPack==='piano')tone(1047,'triangle',.09,.1);
  else tone(1047,'triangle',.07,.12);
}

function setSoundPack(pack){
  soundPack=pack;
  localStorage.setItem('mr_soundpack',pack);
  document.querySelectorAll('.sp-btn').forEach(b=>b.classList.toggle('selected',b.id==='sp-'+pack));
  sfxClick();
  const labels={default:'Default tones',retro:'Retro 8-bit!','piano':'Calm Piano 🎹'};
  showToast('🔊','Sound Pack: '+pack.charAt(0).toUpperCase()+pack.slice(1),labels[pack],'var(--lav)');
}
function applySoundPackUI(){
  document.querySelectorAll('.sp-btn').forEach(b=>b.classList.toggle('selected',b.id==='sp-'+soundPack));
}

/* ══════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════ */
const $=id=>document.getElementById(id);
function setText(id,v,html=false){const el=$(id);if(!el)return;html?el.innerHTML=v:el.textContent=v;}
function flashVal(id){const el=$(id);if(!el)return;el.classList.remove('vf');void el.offsetWidth;el.classList.add('vf');el.addEventListener('animationend',()=>el.classList.remove('vf'),{once:true});}
function openModal(id){$(id).classList.add('open');}
function closeModal(id){$(id).classList.remove('open');}

/* ══════════════════════════════════════════════════
   DARK MODE
══════════════════════════════════════════════════ */
function applyDarkMode(){
  document.body.classList.toggle('dark',darkMode);
  const icon=darkMode?'☀️':'🌙';
  setText('darkToggleMenu',icon);
  setText('darkToggleGame',icon);
}
function toggleDarkMode(){
  sfxClick();
  darkMode=!darkMode;
  localStorage.setItem('mr_dark',darkMode);
  applyDarkMode();
}

/* ══════════════════════════════════════════════════
   COINS
══════════════════════════════════════════════════ */
function addCoins(amount){
  coins+=amount;
  localStorage.setItem('mr_coins',coins);
  // track total accumulated for achievement
  const prev=parseInt(localStorage.getItem('mr_coinsTotal')||'0');
  localStorage.setItem('mr_coinsTotal',prev+amount);
  updateCoinUI();
  checkAchievements();
}
function spendCoins(amount){
  if(coins<amount)return false;
  coins-=amount;
  localStorage.setItem('mr_coins',coins);
  updateCoinUI();
  return true;
}
function updateCoinUI(){
  setText('menuCoins',coins);
  setText('puCoinsDisplay',coins);
}

/* ══════════════════════════════════════════════════
   XP / LEVEL SYSTEM
══════════════════════════════════════════════════ */
function getLevel(xpVal){
  let lv=1;
  for(let i=0;i<XP_TABLE.length-1;i++){if(xpVal>=XP_TABLE[i])lv=i+1;}
  return Math.min(lv,XP_TABLE.length-1);
}
function getLevelName(lv){
  const names=T[lang].levelNames;
  return names[Math.min(lv-1,names.length-1)];
}
function getXpForLevel(lv){return XP_TABLE[Math.min(lv-1,XP_TABLE.length-1)];}
function getXpPct(){
  const cur=getXpForLevel(playerLevel);
  const nxt=getXpForLevel(playerLevel+1);
  if(nxt<=cur)return 100;
  return Math.min(100,Math.round(((xp-cur)/(nxt-cur))*100));
}
function getXpToNext(){
  const nxt=getXpForLevel(playerLevel+1);
  return Math.max(0,nxt-xp);
}
function addXP(amount,label=''){
  // Double XP power-up
  if(puDblXpActive&&puDblXpCount>0){
    amount*=2;
    puDblXpCount--;
    setText('dblxpCount',puDblXpCount);
    if(puDblXpCount<=0){
      puDblXpActive=false;
      $('dblxpBadge').classList.remove('show');
      $('puDblXP').classList.remove('active-pu');
    }
  }
  const oldLevel=playerLevel;
  xp+=amount;
  localStorage.setItem('mr_xp',xp);
  playerLevel=getLevel(xp);
  updateXpUI();
  spawnXpPop(amount,label);
  if(playerLevel>oldLevel){
    sfxLevelUp();
    showLevelUpSplash(playerLevel);
    checkAchievements();
  }
}
function updateXpUI(){
  const pct=getXpPct();
  const lvName=getLevelName(playerLevel);
  setText('menuLevelBadge',playerLevel);
  setText('menuLevelName',lvName);
  setText('menuXpPts',xp+' XP');
  setText('menuXpCurrent',xp+' XP');
  setText('menuXpNext',getXpToNext()+' XP to next');
  $('menuXpBar').style.width=pct+'%';
  setText('xpInlineLvl','Lv'+playerLevel);
  setText('xpInlineName',lvName);
  setText('xpInlinePts',xp+' XP');
  $('xpInlineFill').style.width=pct+'%';
  checkPrestigeAvailable();
}
function spawnXpPop(amount,e_or_label){
  const el=document.createElement('div');
  el.style.cssText='position:fixed;font-family:Poppins,sans-serif;font-size:1rem;font-weight:900;color:#7B6EF6;pointer-events:none;z-index:999;text-shadow:0 2px 6px rgba(123,110,246,.3);animation:sPop .9s ease forwards;';
  el.textContent='+'+amount+' XP';
  if(typeof e_or_label==='object'&&e_or_label&&e_or_label.clientX){
    el.style.left=(e_or_label.clientX-20)+'px';el.style.top=(e_or_label.clientY-30)+'px';
  } else {
    el.style.left='50%';el.style.top='200px';el.style.transform='translateX(-50%)';
  }
  document.body.appendChild(el);el.addEventListener('animationend',()=>el.remove());
}
function showLevelUpSplash(lv){
  setText('lvlupTitle','Level Up! 🌟');
  setText('lvlupSub','You reached Level '+lv+' — '+getLevelName(lv));
  const s=$('lvlupSplash');
  s.classList.remove('hide');s.classList.add('show');
  s.style.opacity='';
  // 🎉 Dramatic confetti burst
  burstConfettiLevelUp();
  hapticLevelUp();
  setTimeout(()=>{s.classList.remove('show');s.classList.add('hide');setTimeout(()=>{s.classList.remove('hide');s.style.opacity='0';},400);},2000);
}

/* ══════════════════════════════════════════════════
   COMBO SYSTEM
══════════════════════════════════════════════════ */
function incrementCombo(){
  combo++;
  if(combo>bestCombo){bestCombo=combo;localStorage.setItem('mr_bestCombo',bestCombo);}
  if(gameMode==='timeattack'&&combo>taBestCombo)taBestCombo=combo;
  updateComboUI();
  if(combo===5||combo===10||combo===20){sfxCombo();spawnComboPopup(combo);}
  trackDailyProgress('combo',combo);
  trackQuestProgress('combo',combo);
}
function resetCombo(){combo=0;updateComboUI();}
function updateComboUI(){
  const tag=$('comboTag');
  if(combo>=2){
    tag.textContent='🔥 ×'+combo;tag.classList.add('show');
    tag.style.background=combo>=10?'var(--rose-pale)':'var(--amber-pale)';
  } else {tag.classList.remove('show');}
}
function getComboXP(){
  if(combo>=20)return 25;if(combo>=10)return 20;if(combo>=5)return 15;if(combo>=3)return 12;return 10;
}
function spawnComboPopup(c){
  const old=document.querySelector('.combo-popup');if(old)old.remove();
  const el=document.createElement('div');el.className='combo-popup';
  el.textContent='🔥 COMBO ×'+c+'!';
  document.body.appendChild(el);
  setTimeout(()=>{el.classList.add('fade');el.addEventListener('animationend',()=>el.remove());},1200);
}

/* ══════════════════════════════════════════════════
   ⚡ POWER-UPS
══════════════════════════════════════════════════ */
function updatePowerupUI(){
  const defs={freeze:PU_COSTS.freeze,elim:PU_COSTS.elim,dblxp:PU_COSTS.dblxp,extra:PU_COSTS.extra};
  for(const[key,cost] of Object.entries(defs)){
    const btnId={freeze:'puFreeze',elim:'puElim',dblxp:'puDblXP',extra:'puExtra'}[key];
    const btn=$(btnId);if(!btn)continue;
    btn.disabled=(coins<cost)||(key==='elim'&&(locked||puElimUsedThisQ))||(key==='freeze'&&puFreezeActive)||(key==='dblxp'&&puDblXpActive)||(key==='extra'&&hearts>=3);
  }
  // elim: also disable if already used this question
  const elimBtn=$('puElim');
  if(elimBtn&&puElimUsedThisQ){elimBtn.disabled=true;}
}
function activatePowerup(type){
  const cost=PU_COSTS[type];
  if(!spendCoins(cost)){showToast('🪙','Not Enough Coins!','Earn coins by answering correctly.','var(--amber)');return;}
  sfxCoin();
  // track for achievement
  const prev=parseInt(localStorage.getItem('mr_puUsed')||'0');
  localStorage.setItem('mr_puUsed',prev+1);
  // screen flash
  const flash=document.createElement('div');
  flash.className='pu-flash '+type+'-flash';
  document.body.appendChild(flash);
  flash.addEventListener('animationend',()=>flash.remove());

  if(type==='freeze'){
    // stop timer, freeze for 5s
    clearInterval(timerInt);
    puFreezeActive=true;
    $('puFreeze').classList.add('active-pu');
    $('timerBar').closest('.timer-row').classList.add('timer-frozen');
    sfxFreeze();
    showToast('🧊','Timer Frozen!','5 seconds of grace time.','var(--sky)');
    puFreezeTimer=setTimeout(()=>{
      puFreezeActive=false;
      $('puFreeze').classList.remove('active-pu');
      $('timerBar').closest('.timer-row').classList.remove('timer-frozen');
      if(!locked&&gameMode!=='timeattack'){resumeTimer();}
    },5000);
  } else if(type==='elim'){
    // eliminate the wrong answer button
    if(locked||puElimUsedThisQ){return;}
    puElimUsedThisQ=true;
    const wrongIdx=1-currentQ.correctIdx;
    const wrongBtn=$('btn'+wrongIdx);
    wrongBtn.classList.add('eliminated');
    sfxElim();
    showToast('✂️','50/50!','One wrong answer eliminated.','var(--rose)');
  } else if(type==='dblxp'){
    puDblXpActive=true;puDblXpCount=3;
    $('puDblXP').classList.add('active-pu');
    $('dblxpBadge').classList.add('show');
    setText('dblxpCount',3);
    sfxDblXp();
    showToast('⚡','2× XP Active!','Next 3 correct answers earn double XP.','var(--violet)');
  } else if(type==='extra'){
    if(hearts>=3){return;}
    hearts=Math.min(3,hearts+1);
    updateHearts();
    sfxExtra();
    showToast('💚','Extra Life!','One heart restored!','var(--mint)');
  }
  updatePowerupUI();
  checkAchievements();
}
function resumeTimer(){
  // resume countdown after freeze
  timerInt=setInterval(()=>{
    timeLeft--;updateTimerUI();
    if(timeLeft===3||timeLeft===2||timeLeft===1)sfxCountdown();
    if(timeLeft<=0){clearInterval(timerInt);onTimeout();}
  },1000);
}
function resetPowerupsForQuestion(){
  puElimUsedThisQ=false;
  // remove eliminated class
  $('btn0').classList.remove('eliminated');
  $('btn1').classList.remove('eliminated');
  updatePowerupUI();
}

/* ══════════════════════════════════════════════════
   ⏱️ TIME ATTACK MODE
══════════════════════════════════════════════════ */
function startTimeAttack(){
  taTimeLeft=TA_DURATION;taScore=0;taTotalAnswered=0;taCorrectAnswered=0;taBestCombo=0;
  // show TA countdown, hide per-Q timer row
  $('taCountdown').classList.add('active');
  $('timerRow').style.display='none';
  // update TA mode tag
  const mt=$('modeTag');if(mt){mt.textContent='Time Attack';mt.className='q-tag qt-timeattack';}
  // hide hearts (no hearts in TA)
  setText('statHearts','∞');
  updateTAUI();
  taInt=setInterval(()=>{
    taTimeLeft--;updateTAUI();
    if(taTimeLeft<=5)sfxCountdown();
    if(taTimeLeft<=0){clearInterval(taInt);endTimeAttack();}
  },1000);
}
function updateTAUI(){
  setText('taTimeDisplay',taTimeLeft);
  setText('taScoreDisplay',taScore);
  $('taBar').style.width=((taTimeLeft/TA_DURATION)*100)+'%';
  const warn=taTimeLeft<=10;
  $('taTimeDisplay').classList.toggle('warn',warn);
}
function endTimeAttack(){
  clearInterval(taInt);clearInterval(timerInt);
  if(puFreezeTimer)clearTimeout(puFreezeTimer);
  if(taScore>taBestScore){taBestScore=taScore;localStorage.setItem('mr_ta_best',taBestScore);}
  trackPlayTime();saveStats();
  const acc=taTotalAnswered>0?Math.round((taCorrectAnswered/taTotalAnswered)*100):0;
  const t=T[lang];
  // Show modal with TA-specific layout
  $('gameOverHero').style.background='linear-gradient(135deg,#F0707A,#F5A623)';
  setText('modalEmoji','⏱️');
  setText('modalTitle',t.taComplete);
  setText('modalMsg',t.taMsg);
  setText('modalScore',taScore);
  setText('modalBest',taBestScore);
  setText('modalScoreLbl',t.statScoreLbl);
  setText('modalBestLbl',t.statBestLbl);
  // show bonus stats
  $('taExtraStats').style.display='grid';
  $('modalStatsGrid').style.display='grid';
  setText('taModalCorrect',taCorrectAnswered+'/'+taTotalAnswered);
  setText('taModalAccuracy',acc+'%');
  setText('taModalCombo',taBestCombo+'×');
  setText('modalRank','⏱️ '+taScore+' pts in 60s — Best: '+taBestScore);
  sfxTAEnd();
  trackQuestProgress('ta_score',taScore);
  openModal('gameOverModal');
  checkAchievements();
}

/* ══════════════════════════════════════════════════
   TOAST / ACHIEVEMENTS
══════════════════════════════════════════════════ */
function showToast(icon,head,sub,color='var(--lav)'){
  const wrap=$('toastContainer');
  const el=document.createElement('div');el.className='toast';
  el.innerHTML=`<div class="toast-icon">${icon}</div><div class="toast-body"><div class="toast-head" style="color:${color}">${head}</div><div class="toast-sub">${sub}</div></div><div class="toast-close" onclick="this.closest('.toast').remove()">✕</div>`;
  wrap.appendChild(el);
  setTimeout(()=>{el.classList.add('out');el.addEventListener('animationend',()=>el.remove());},3500);
}
function checkAchievements(){
  ACHIEVEMENTS.forEach(a=>{
    if(!unlockedAch.has(a.id)&&a.check()){
      unlockedAch.add(a.id);
      localStorage.setItem('mr_ach',JSON.stringify([...unlockedAch]));
      sfxAchievement();
      showToast(a.icon,'🏅 Achievement Unlocked!',a.name,'var(--amber)');
    }
  });
}
function renderAchModal(){
  const list=$('achList');list.innerHTML='';
  const count=ACHIEVEMENTS.filter(a=>unlockedAch.has(a.id)).length;
  setText('achUnlockedCount',count+' / '+ACHIEVEMENTS.length+' unlocked');
  ACHIEVEMENTS.forEach(a=>{
    const ok=unlockedAch.has(a.id);
    const el=document.createElement('div');el.className='ach-item'+(ok?' unlocked':'');
    el.innerHTML=`<div class="ach-icon">${a.icon}</div><div class="ach-body"><div class="ach-name">${a.name}</div><div class="ach-desc">${a.desc}</div></div><div class="ach-status">${ok?'✓ Done':'🔒'}</div>`;
    list.appendChild(el);
  });
}

/* ══════════════════════════════════════════════════
   STATS
══════════════════════════════════════════════════ */
function saveStats(){
  localStorage.setItem('mr_statsTotal',statsTotal);
  localStorage.setItem('mr_statsCorrect',statsCorrect);
  localStorage.setItem('mr_statsPlayTime',statsPlayTime);
}
function renderStatsModal(){
  const acc=statsTotal>0?Math.round((statsCorrect/statsTotal)*100):0;
  const mins=Math.floor(statsPlayTime/60);
  setText('statTotal',statsTotal);setText('statCorrect',statsCorrect);
  setText('statAccuracy',acc+'%');setText('statBestCombo',bestCombo);
  setText('statHighScore',bestScore);setText('statPlayTime',mins+'m');
}
function trackPlayTime(){
  if(statsPlayStart>0){statsPlayTime+=Math.floor((Date.now()-statsPlayStart)/1000);saveStats();}
  statsPlayStart=Date.now();
}

/* ══════════════════════════════════════════════════
   DAILY CHALLENGE
══════════════════════════════════════════════════ */
function getTodayKey(){const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();}
function initDailyChallenge(){
  const today=getTodayKey();
  const saved=localStorage.getItem('mr_daily');
  let data=saved?JSON.parse(saved):{};
  if(data.date!==today){
    const picks=T[lang].dailyChallenges;
    const idx=Math.floor(Math.random()*picks.length);
    data={date:today,challengeIdx:idx,progress:0,done:false};
    localStorage.setItem('mr_daily',JSON.stringify(data));
  }
  dailyChallenge=T[lang].dailyChallenges[data.challengeIdx%T[lang].dailyChallenges.length];
  dailyChallengeProgress=data.progress||0;
  dailyDone=data.done||false;
  renderDailyCard();
}
function renderDailyCard(){
  if(!dailyChallenge)return;
  setText('dailyDesc',dailyChallenge.desc);
  const pct=Math.min(100,Math.round((dailyChallengeProgress/dailyChallenge.target)*100));
  $('dailyProgBar').style.width=pct+'%';
  setText('dailyProgVal',dailyChallengeProgress+' / '+dailyChallenge.target);
  if(dailyDone){$('dailyBadge').textContent='✓ Done!';$('dailyBadge').className='daily-badge done';}
}
function trackDailyProgress(key,value){
  if(!dailyChallenge||dailyDone)return;
  if(dailyChallenge.key!==key)return;
  if(key==='combo'){if(value>dailyChallengeProgress)dailyChallengeProgress=value;}
  else{dailyChallengeProgress=Math.min(dailyChallenge.target,dailyChallengeProgress+1);}
  const today=getTodayKey();
  const data=JSON.parse(localStorage.getItem('mr_daily')||'{}');
  data.progress=dailyChallengeProgress;
  if(dailyChallengeProgress>=dailyChallenge.target&&!dailyDone){
    dailyDone=true;data.done=true;
    addXP(50);addCoins(20);
    sfxDailyComplete();
    showToast('🌟','Daily Challenge Complete!',dailyChallenge.desc+' — +50 XP · +20 🪙','var(--amber)');
    localStorage.setItem('mr_dailyDone','true');
    checkAchievements();
  }
  localStorage.setItem('mr_daily',JSON.stringify(data));
  renderDailyCard();
}

/* ══════════════════════════════════════════════════
   ENDLESS MODE
══════════════════════════════════════════════════ */
function initEndlessMode(){endlessWave=1;endlessQCount=0;updateEndlessUI();}
function updateEndlessUI(){
  const tag=$('endlessDiffTag');
  if(gameMode==='endless'){tag.style.display='inline-flex';tag.textContent='Wave '+endlessWave;}
  else{tag.style.display='none';}
}
function onEndlessCorrect(){
  endlessQCount++;endlessTotal++;
  localStorage.setItem('mr_endlessTotal',endlessTotal);
  trackDailyProgress('total_q',1);
  if(endlessQCount>=ENDLESS_WAVE_SIZE){
    endlessQCount=0;endlessWave++;
    timerMax=Math.max(4,timerMax-1);
    showToast('🌊','Wave '+endlessWave+'!','Difficulty increased!','var(--violet)');
  }
  updateEndlessUI();checkAchievements();
}
function getEndlessDiffConfig(){
  const wave=endlessWave;
  if(wave<=2)return{min:1,max:10,ops:['+','-']};
  if(wave<=4)return{min:1,max:20,ops:['+','-','×']};
  if(wave<=6)return{min:1,max:50,ops:['+','-','×','÷']};
  return{min:1,max:100,ops:['+','-','×','÷']};
}

/* ══════════════════════════════════════════════════
   LANGUAGE
══════════════════════════════════════════════════ */
function setLang(l){
  lang=l;
  ['langEN','langID','ctrlEN','ctrlID'].forEach(id=>{
    const el=$(id);if(!el)return;
    const isEN=id.includes('EN'),active=l==='en'?isEN:!isEN;
    el.classList.toggle('active',active);el.classList.toggle('on',active);
  });
  applyTranslations();initDailyChallenge();
}
function applyTranslations(){
  const t=T[lang];
  setText('wbTitle',t.wbTitle.replace('\n','<br>'),true);setText('wbSub',t.wbSub);
  setText('menuBestLbl',t.menuBestLbl);setText('menuStreakLbl',t.menuStreakLbl);
  setText('menuLangTitle',t.menuLangTitle);setText('menuDiffTitle',t.menuDiffTitle);
  setText('menuGameModeTitle',t.menuGameModeTitle);setText('menuTimeTitle',t.menuTimeTitle);
  setText('mcEasy',t.mcEasy);setText('mcEasyDesc',t.mcEasyDesc);
  setText('mcMedium',t.mcMedium);setText('mcMediumDesc',t.mcMediumDesc);
  setText('mcHard',t.mcHard);setText('mcHardDesc',t.mcHardDesc);
  setText('gmcPractice',t.gmcPractice);setText('gmcPracticeDesc',t.gmcPracticeDesc);
  setText('gmcChallenge',t.gmcChallenge);setText('gmcChallengeDesc',t.gmcChallengeDesc);
  setText('gmcEndless',t.gmcEndless);setText('gmcEndlessDesc',t.gmcEndlessDesc);
  setText('gmcTimeAttack',t.gmcTimeAttack);setText('gmcTimeAttackDesc',t.gmcTimeAttackDesc);
  if(t.gmcKids){setText('gmcKids',t.gmcKids);setText('gmcKidsDesc',t.gmcKidsDesc);}
  setText('tc5',t.tc5);setText('tc10',t.tc10);setText('tc15',t.tc15);setText('tc30',t.tc30);
  setText('playBtnText',t.playBtn);setText('gameSubtitle',t.gameSubtitle);
  setText('statScoreLbl',t.statScoreLbl);setText('statBestLbl',t.statBestLbl);
  setText('statHeartsLbl',t.statHeartsLbl);setText('statTimerLbl',t.statTimerLbl);
  setText('statStreakLbl',t.statStreakLbl);setText('statRankLbl',t.statRankLbl);
  setText('qLabel',t.qLabel);setText('progressLbl',t.progressLbl);
  setText('ctrlDiffLbl',t.ctrlDiffLbl);setText('ctrlLangLbl',t.ctrlLangLbl);
  setText('ctrlSoundLbl',t.ctrlSoundLbl);setText('soundStateText',muted?t.soundOff:t.soundOn);
  setText('restartPillTxt',t.restartPill);
  setText('ctrlEasy',t.ctrlEasy);setText('ctrlMed',t.ctrlMed);setText('ctrlHard',t.ctrlHard);
  const dtEl=$('diffTag');if(dtEl){dtEl.textContent=t.diffTag[diff];dtEl.className='q-tag qt-'+diff;}
  const mtEl=$('modeTag');if(mtEl){mtEl.textContent=t.modeTag[gameMode];mtEl.className='q-tag qt-'+gameMode;}
  setText('modalScoreLbl',t.modalScoreLbl);setText('modalBestLbl',t.modalBestLbl);
  setText('modalRestartBtn',t.modalRestart);setText('modalMenuBtn',t.modalMenu);
  const fb=$('fbMsg');
  if(fb.classList.contains('correct'))fb.textContent=t.fbCorrect;
  if(fb.classList.contains('wrong'))fb.textContent=t.fbWrong;
  if(fb.classList.contains('timeout'))fb.textContent=t.fbTimeout;
  updateRank();updateXpUI();
}

/* ══════════════════════════════════════════════════
   MENU SELECTIONS
══════════════════════════════════════════════════ */
function selectMode(m){
  sfxClick();diff=m;
  document.querySelectorAll('.diff-card').forEach(c=>c.classList.toggle('selected',c.dataset.mode===m));
  syncDiffChips();
}
function selectGameMode(g){
  sfxClick();gameMode=g;
  document.querySelectorAll('.gmode-card').forEach(c=>c.classList.toggle('selected',c.dataset.gmode===g));
  // Hide time-per-question section for Time Attack, Kids, Tournament
  $('timeSection').style.display=(g==='timeattack'||g==='kids'||g==='tournament'||g==='equation')?'none':'block';
  // Kids mode visual
  applyKidsMode(g==='kids');
  // Update play button
  const labels={timeattack:'⏱️ Start Time Attack',kids:'🎈 Play Kids Mode',tournament:'🏆 Start Tournament',equation:'🧩 Equation Builder'};
  setText('playBtnText',labels[g]||T[lang].playBtn);
}
function selectTime(s){
  sfxClick();timerMax=s;
  document.querySelectorAll('.time-chip').forEach(c=>c.classList.toggle('selected',+c.dataset.sec===s));
}
function syncDiffChips(){
  ['ctrlEasy','ctrlMed','ctrlHard'].forEach(id=>{
    const el=$(id);if(!el)return;
    const d=el.dataset.diff;
    el.classList.remove('on','on-mint','on-rose');
    if(d===diff){
      if(d==='easy')el.classList.add('on-mint');
      else if(d==='hard')el.classList.add('on-rose');
      else el.classList.add('on');
    }
  });
  const dtEl=$('diffTag');
  if(dtEl){dtEl.textContent=T[lang].diffTag[diff];dtEl.className='q-tag qt-'+diff;}
}
function switchDiff(d){sfxClick();diff=d;syncDiffChips();score=0;updateScore();nextQuestion();}

/* ══════════════════════════════════════════════════
   PAGE NAV
══════════════════════════════════════════════════ */
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=$(id);pg.classList.add('active','page-enter');
  pg.addEventListener('animationend',()=>pg.classList.remove('page-enter'),{once:true});
}
function startGame(){
  sfxClick();syncDiffChips();
  hearts=3;score=0;streak=0;roundCorrect=0;combo=0;roundCount=0;
  isBossRound=false;adaptiveCorrectRun=0;adaptiveWrongRun=0;prevDiff=null;
  // reset power-up states
  puFreezeActive=false;puElimUsed=false;puDblXpActive=false;puDblXpCount=0;puElimUsedThisQ=false;
  if(puFreezeTimer)clearTimeout(puFreezeTimer);
  $('dblxpBadge').classList.remove('show');
  $('puFreeze').classList.remove('active-pu');$('puDblXP').classList.remove('active-pu');
  $('timerRow').classList.remove('timer-frozen');
  deactivateBossRound();
  // Kids mode overrides
  if(gameMode==='kids'){
    applyKidsMode(true);
    timerMax=20;
    $('taCountdown').classList.remove('active');
    $('timerRow').style.display='flex';
    $('powerupPanel').style.display='none';// no power-ups in kids mode
  } else {
    applyKidsMode(false);
  }
  if(gameMode==='endless'){initEndlessMode();}
  if(gameMode==='timeattack'){
    $('taCountdown').classList.add('active');
    $('timerRow').style.display='none';
    $('powerupPanel').style.display='flex';
  } else if(gameMode==='tournament'){
    $('taCountdown').classList.remove('active');
    $('timerRow').style.display='flex';
    $('powerupPanel').style.display='none';
    diff='easy';syncDiffChips();
    startTournament();
  } else if(gameMode==='equation'){
    $('taCountdown').classList.remove('active');
    $('timerRow').style.display='none';
    $('powerupPanel').style.display='none';
    diff='medium';syncDiffChips();
  } else if(gameMode!=='kids'){
    $('taCountdown').classList.remove('active');
    $('timerRow').style.display='flex';
    $('powerupPanel').style.display='flex';
  }
  // reset modal hero for non-TA
  if(gameMode!=='timeattack'){
    $('gameOverHero').style.background='';
    $('taExtraStats').style.display='none';
    $('modalStatsGrid').style.display='grid';
  }

  statsPlayStart=Date.now();
  updateComboUI();updateScore();updateHearts();updateRank();updateProgress();
  updateEndlessUI();updatePowerupUI();updateCoinUI();
  showPage('gamePage');

  if(gameMode==='timeattack'){startTimeAttack();}
  nextQuestion();updateMenuStats();
}
function goMenu(){
  sfxClick();
  clearInterval(timerInt);clearInterval(taInt);
  if(puFreezeTimer)clearTimeout(puFreezeTimer);
  trackPlayTime();
  // Save daily session stats for weekly report
  const sessionQ = statsTotal - (parseInt(localStorage.getItem('mr_statsTotal_prev')||'0'));
  const sessionC = statsCorrect - (parseInt(localStorage.getItem('mr_statsCorrect_prev')||'0'));
  if(sessionQ>0) saveDailySession(sessionQ, sessionC, {});
  localStorage.setItem('mr_statsTotal_prev', statsTotal);
  localStorage.setItem('mr_statsCorrect_prev', statsCorrect);
  $('taCountdown').classList.remove('active');
  $('timerRow').style.display='flex';
  $('tournBanner').classList.remove('active');
  tournActive=false;
  // Clean up duel
  if(duelActive){ duelActive=false; if(duelInt)clearInterval(duelInt); if(duelBotInt)clearTimeout(duelBotInt); $('duelBanner').classList.remove('active'); }
  showPage('menuPage');updateMenuStats();initDailyChallenge();renderQuestCard();
}
function updateMenuStats(){setText('menuBestScore',bestScore);setText('menuStreak',sessionStreak);updateXpUI();updateCoinUI();}

/* ══════════════════════════════════════════════════
   QUESTION GENERATION
══════════════════════════════════════════════════ */
function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function getConfig(){
  if(gameMode==='kids')return getKidsConfig();
  if(gameMode==='endless')return getEndlessDiffConfig();
  if(gameMode==='timeattack')return{min:1,max:diff==='hard'?50:diff==='medium'?20:10,ops:diff==='hard'?['+','-','×','÷']:diff==='medium'?['+','-','×']:['+','-']};
  if(diff==='easy')return{min:1,max:10,ops:['+','-']};
  if(diff==='hard')return{min:1,max:50,ops:['+','-','×','÷']};
  return{min:1,max:20,ops:['+','-','×']};
}
function generateQuestion(){
  const cfg=getConfig();
  // Kids mode: simpler question pool
  if(gameMode==='kids'){
    return generateStandard(cfg);
  }
  // Hard mode + boss: mix in advanced question types 30% of the time
  if((diff==='hard'||isBossRound)&&Math.random()<0.3){
    return generateAdvancedQuestion(cfg);
  }
  const types=['standard','standard','standard','missing','comparison'];
  const qtype=types[Math.floor(Math.random()*types.length)];
  if(qtype==='missing')return generateMissingNumber(cfg);
  if(qtype==='comparison')return generateComparison(cfg);
  return generateStandard(cfg);
}
function generateStandard(cfg){
  const op=cfg.ops[Math.floor(Math.random()*cfg.ops.length)];
  let a=rand(cfg.min,cfg.max),b=rand(cfg.min,cfg.max);
  if(op==='-'&&b>a)[a,b]=[b,a];
  if(op==='÷'){b=rand(1,Math.min(10,cfg.max));a=b*rand(1,Math.min(10,Math.floor(cfg.max/b)));}
  let correct,displayText,explanation;
  if(op==='+'){correct=a+b;displayText=`${a} + ${b} = ?`;explanation=`${a} + ${b} = ${correct}`;}
  else if(op==='-'){correct=a-b;displayText=`${a} − ${b} = ?`;explanation=`${a} − ${b} = ${correct}`;}
  else if(op==='×'){correct=a*b;displayText=`${a} × ${b} = ?`;explanation=`${a} × ${b} = ${correct}`;}
  else{correct=a/b;displayText=`${a} ÷ ${b} = ?`;explanation=`${a} ÷ ${b} = ${correct}`;}
  return {...makeOptions(correct,displayText,explanation), op};
}
function generateMissingNumber(cfg){
  const op=['+','-'][Math.floor(Math.random()*2)];
  let a=rand(cfg.min,Math.min(cfg.max,20)),b=rand(cfg.min,Math.min(cfg.max,20));
  if(op==='-'&&b>a)[a,b]=[b,a];
  const result=op==='+'?a+b:a-b;
  const missing=Math.random()<.5?0:1;
  let displayText,correct,explanation;
  if(op==='+'){
    if(missing===0){correct=a;displayText=`? + ${b} = ${result}`;explanation=`${result} − ${b} = ${correct}`;}
    else{correct=b;displayText=`${a} + ? = ${result}`;explanation=`${result} − ${a} = ${correct}`;}
  } else {
    if(missing===0){correct=a;displayText=`? − ${b} = ${result}`;explanation=`${result} + ${b} = ${correct}`;}
    else{correct=b;displayText=`${a} − ? = ${result}`;explanation=`${a} − ${result} = ${correct}`;}
  }
  return makeOptions(correct,displayText,explanation);
}
function generateComparison(cfg){
  const op=['+','-'][Math.floor(Math.random()*2)];
  const a=rand(cfg.min,Math.min(cfg.max,20)),b=rand(cfg.min,Math.min(cfg.max,20));
  const c=rand(cfg.min,Math.min(cfg.max,20)),d=rand(cfg.min,Math.min(cfg.max,20));
  const left=op==='+'?a+b:Math.abs(a-b);
  const right=c+d;
  const displayText=`${a}${op==='+'?'+':op}${b}  ⋄  ${c}+${d}`;
  const correct=left>right?left:right;
  const wrong=left>right?right:left;
  if(correct===wrong)return generateStandard(cfg);
  const explanation=`${left} vs ${right} → bigger is ${correct}`;
  const ci=Math.random()<.5?0:1;
  return{displayText,correct,wrong,options:ci===0?[correct,wrong]:[wrong,correct],correctIdx:ci,explanation,isComparison:true};
}
function makeOptions(correct,displayText,explanation){
  let wrong;
  do{
    const d=rand(1,Math.max(4,Math.floor(Math.abs(correct)*.3)||4));
    wrong=correct+(Math.random()<.5?d:-d);
    if(wrong<0)wrong=correct+Math.abs(d);
  }while(wrong===correct||wrong<0);
  const ci=Math.random()<.5?0:1;
  return{displayText,correct,wrong,options:ci===0?[correct,wrong]:[wrong,correct],correctIdx:ci,explanation};
}

/* ══════════════════════════════════════════════════
   RENDER
══════════════════════════════════════════════════ */
function renderQuestion(){
  const q=currentQ;
  setText('qText',q.displayText);
  setText('btn0',q.options[0]);setText('btn1',q.options[1]);
  ['btn0','btn1'].forEach(id=>{
    const b=$(id);b.disabled=false;b.style.opacity='1';b.classList.remove('fc','fw','eliminated');
  });
  $('fbMsg').textContent='';$('fbMsg').className='fb-msg';
  $('fbExplain').textContent='';$('fbExplain').classList.remove('show');
  locked=false;updateProgress();updateEndlessUI();resetPowerupsForQuestion();
  resetHintForQuestion();
  applyQuestionAnim();
}

/* ══════════════════════════════════════════════════
   TIMER
══════════════════════════════════════════════════ */
function startTimer(){
  if(gameMode==='timeattack')return;
  if(gameMode==='equation')return;// equation builder is self-paced
  clearInterval(timerInt);timeLeft=timerMax;updateTimerUI();
  timerInt=setInterval(()=>{
    if(puFreezeActive)return;// freeze pauses countdown
    timeLeft--;updateTimerUI();
    if(timeLeft===3||timeLeft===2||timeLeft===1)sfxCountdown();
    if(timeLeft<=0){clearInterval(timerInt);onTimeout();}
  },1000);
}
function updateTimerUI(){
  const pct=(timeLeft/timerMax)*100;
  const bar=$('timerBar'),cnt=$('timerCount'),st=$('statTimer');
  bar.style.width=pct+'%';
  if(cnt)cnt.textContent=timeLeft;if(st)st.textContent=timeLeft;
  const warn=timeLeft<=Math.max(3,Math.floor(timerMax*.3));
  bar.classList.toggle('warn',warn);
  if(pct>=99)bar.classList.add('glow');else bar.classList.remove('glow');
  if(cnt)cnt.classList.toggle('warn',warn);
}
function onTimeout(){if(locked)return;locked=true;sfxWrong();hapticWrong();shakeCard();showFeedback('timeout');handleWrong(true);}

/* ══════════════════════════════════════════════════
   CHECK ANSWER
══════════════════════════════════════════════════ */
function checkAnswer(idx,e){
  if(locked)return;locked=true;sfxClick();clearInterval(timerInt);addRipple(e);
  statsTotal++;
  trackDailyProgress('total_q',1);
  if(idx===currentQ.correctIdx){
    sfxCorrect();$('btn'+idx).classList.add('fc');
    score++;streak++;roundCorrect++;
    statsCorrect++;
    // Time Attack separate tracking
    if(gameMode==='timeattack'){taScore++;taTotalAnswered++;taCorrectAnswered++;updateTAUI();}
    else{trackDailyProgress('correct_q',1);trackDailyProgress('score',score);}
    incrementCombo();
    const xpGain=getComboXP();
    addXP(xpGain,e);
    // Earn coin every correct answer (1 coin + 1 bonus per 5 combo)
    const coinGain=1+Math.floor(combo/5);
    addCoins(coinGain);
    sfxCoin();
    if(streak>sessionStreak){sessionStreak=streak;localStorage.setItem('mr_streak',sessionStreak);}
    saveHighScore();saveStats();updateScore();updateRank();updateHearts();
    showFeedback('correct');bounceCard();spawnScorePop(e);disableButtons();
    // Quest tracking — correct answer
    trackQuestProgress('correct',1);
    if(currentQ.op) trackQuestProgress('op',1,{op:currentQ.op});
    if(diff) trackQuestProgress('diff',1,{diff});
    trackQuestProgress('streak',streak);
    // Live duel tracking
    if(duelActive) onDuelCorrect();
    // Kids mode balloon
    if(gameMode==='kids'){
      spawnKidsBalloon(e.clientX,e.clientY);
      const pk=parseInt(localStorage.getItem('mr_kids_correct')||'0');
      localStorage.setItem('mr_kids_correct',pk+1);
    }
    // Adaptive
    adaptiveOnCorrect();
    if(streak>0&&streak%5===0){
      sfxStreak();
      const sel=$('statStreak');sel.classList.add('streak-burst');
      sel.addEventListener('animationend',()=>sel.classList.remove('streak-burst'),{once:true});
    }
    if(gameMode==='endless')onEndlessCorrect();
    checkAchievements();
    // Tournament: track per-round question count
    if(gameMode==='tournament'&&tournActive){
      tournQCount++; tournRoundCorrect++;
      if(tournQCount>=TOURN_Q_PER_ROUND){
        tournQCount=0;
        disableButtons();
        setTimeout(()=>onTournamentRoundEnd(),900);
        return;
      }
    }
    if(gameMode!=='timeattack'&&gameMode!=='tournament'&&roundCorrect>=ROUND_SIZE){
      localStorage.setItem('mr_perfectRound','true');
      const pb=$('progressBar');pb.classList.add('full');
      // 🎊 Perfect round confetti!
      burstConfettiPerfect();
      trackQuestProgress('perfect',1);
      burstConfettiPerfect();
      // Boss round complete?
      if(isBossRound){onBossRoundComplete();}
      else{checkBossRound();}
      roundCorrect=0;updateProgress();
      setTimeout(()=>{pb.classList.remove('full');showFeedback('roundComplete');setTimeout(()=>nextQuestion(),1350);},850);
    } else {
      setTimeout(()=>nextQuestion(),gameMode==='timeattack'?600:gameMode==='kids'?1200:1000);
    }
  } else {
    sfxWrong();hapticWrong();$('btn'+idx).classList.add('fw');
    if(gameMode==='timeattack'){taTotalAnswered++;taCorrectAnswered+=(0);}
    showFeedback('wrong',currentQ.explanation);shakeCard();resetCombo();saveStats();
    adaptiveOnWrong();
    handleWrong(false);checkAchievements();
  }
  updatePowerupUI();
}
function handleWrong(isTimeout){
  streak=0;
  if(gameMode==='tournament'&&tournActive){
    onTournamentWrong();
    if(tournLives>0){
      updateScore();disableButtons();
      setTimeout(()=>nextQuestion(),isTimeout?1350:1750);
      return;
    }
  }
  if(gameMode==='challenge'||gameMode==='endless'){
    hearts=Math.max(0,hearts-1);updateHearts();flashVal('statHearts');
    if(hearts===0){disableButtons();setTimeout(()=>showGameOverModal(),800);return;}
  }
  updateScore();disableButtons();
  setTimeout(()=>nextQuestion(),isTimeout?1350:1750);
}

/* ══════════════════════════════════════════════════
   SCORE / HEARTS / RANK / PROGRESS
══════════════════════════════════════════════════ */
function updateScore(){setText('statScore',score);flashVal('statScore');setText('statBest',bestScore);setText('statStreak',streak);}
function updateHearts(){let s='';for(let i=0;i<3;i++)s+=i<hearts?'❤️':'🖤';setText('statHearts',gameMode==='timeattack'?'∞':s);}
function saveHighScore(){if(score>bestScore){bestScore=score;localStorage.setItem('mr_best',bestScore);setText('statBest',bestScore);flashVal('statBest');checkAchievements();}}
const RANKS=[{min:0,max:4,key:0},{min:5,max:9,key:1},{min:10,max:19,key:2},{min:20,max:Infinity,key:3}];
function getRankKey(){for(const r of RANKS)if(score>=r.min&&score<=r.max)return r.key;return 0;}
function updateRank(){const rk=getRankKey();const name=T[lang].ranks[rk];const el=$('statRank');if(el)el.textContent=name;return name;}
function updateProgress(){
  const pct=gameMode==='endless'?((endlessQCount/ENDLESS_WAVE_SIZE)*100):(roundCorrect/ROUND_SIZE)*100;
  $('progressBar').style.width=pct+'%';
  if(gameMode==='endless')$('progressCount').textContent=endlessQCount+' / '+ENDLESS_WAVE_SIZE;
  else $('progressCount').textContent=roundCorrect+' / '+ROUND_SIZE;
}

/* ══════════════════════════════════════════════════
   FEEDBACK
══════════════════════════════════════════════════ */
function showFeedback(type,explain){
  const t=T[lang],msg=$('fbMsg'),expl=$('fbExplain');
  msg.className='fb-msg';
  if(type==='correct'){msg.textContent=t.fbCorrect;msg.classList.add('correct');}
  else if(type==='wrong'){msg.textContent=t.fbWrong;msg.classList.add('wrong');}
  else if(type==='timeout'){msg.textContent=t.fbTimeout;msg.classList.add('timeout');}
  else if(type==='roundComplete'){msg.textContent=t.roundComplete;msg.classList.add('correct');}
  if(explain&&type==='wrong'){expl.textContent=explain;expl.classList.add('show');}
  else expl.classList.remove('show');
}

/* ══════════════════════════════════════════════════
   FLOW
══════════════════════════════════════════════════ */
function nextQuestion(){
  hideVisualQuestion();
  hideEquationBuilder();
  // Visual mode: kids or warm-up (first 3 questions of practice easy)
  const useVisual = (gameMode==='kids') || (gameMode==='practice' && diff==='easy' && score<3 && Math.random()<0.5);
  // Equation builder mode
  if(gameMode==='equation'){
    currentQ=generateEquationQuestion();
    renderQuestion();
    renderEquationBuilder(currentQ);
    startTimer();
    return;
  }
  currentQ=useVisual ? generateVisualQuestion() : generateQuestion();
  renderQuestion();
  if(currentQ.isVisual) renderVisualQuestion(currentQ);
  startTimer();
}
function resetGame(){
  sfxClick();clearInterval(timerInt);clearInterval(taInt);
  if(puFreezeTimer)clearTimeout(puFreezeTimer);
  score=0;hearts=3;streak=0;roundCorrect=0;combo=0;
  // reset power-up states
  puFreezeActive=false;puElimUsedThisQ=false;puDblXpActive=false;puDblXpCount=0;
  $('dblxpBadge').classList.remove('show');
  $('puFreeze').classList.remove('active-pu');$('puDblXP').classList.remove('active-pu');
  $('timerRow').classList.remove('timer-frozen');
  if(gameMode==='endless'){initEndlessMode();}
  if(gameMode==='timeattack'){
    $('taCountdown').classList.add('active');
    $('timerRow').style.display='none';
    startTimeAttack();
  } else {
    $('timerRow').style.display='flex';
  }
  updateComboUI();updateScore();updateHearts();updateRank();updateProgress();updateEndlessUI();updatePowerupUI();
  nextQuestion();
}

/* ══════════════════════════════════════════════════
   GAME OVER MODAL
══════════════════════════════════════════════════ */
function showGameOverModal(){
  // Save multiplayer result if active
  if(localStorage.getItem('mr_mp_active')==='1'){
    saveMpResult(score, statsTotal, statsCorrect);
    showToast('👥','Result Saved!','Friend can compare at Challenge a Friend → Results.','var(--lav)');
  }
  clearInterval(timerInt);clearInterval(taInt);trackPlayTime();saveStats();
  const finalScore=gameMode==='timeattack'?taScore:score;
  saveToLeaderboard(finalScore,gameMode);
  const t=T[lang],rk=getRankKey(),idx=Math.min(Math.floor(score/5),t.msgs.length-1);
  $('gameOverHero').style.background='';
  setText('modalEmoji',rk>=3?'🏆':rk>=2?'⚡':rk>=1?'😊':'💪');
  setText('modalTitle',t.modalTitle);setText('modalMsg',t.msgs[idx]);
  setText('modalScore',score);setText('modalBest',bestScore);
  setText('modalScoreLbl',t.modalScoreLbl);setText('modalBestLbl',t.modalBestLbl);
  setText('modalRank','🏅 '+T[lang].ranks[rk]);
  $('taExtraStats').style.display='none';
  $('modalStatsGrid').style.display='grid';
  openModal('gameOverModal');
}
function restartFromModal(){
  sfxClick();closeModal('gameOverModal');
  score=0;hearts=3;streak=0;roundCorrect=0;combo=0;
  puFreezeActive=false;puElimUsedThisQ=false;puDblXpActive=false;puDblXpCount=0;
  $('dblxpBadge').classList.remove('show');
  $('puFreeze').classList.remove('active-pu');$('puDblXP').classList.remove('active-pu');
  if(gameMode==='endless'){initEndlessMode();}
  if(gameMode==='timeattack'){
    startTimeAttack();
    $('taCountdown').classList.add('active');
    $('timerRow').style.display='none';
  } else {
    $('timerRow').style.display='flex';
  }
  statsPlayStart=Date.now();
  updateComboUI();updateScore();updateHearts();updateRank();updateProgress();updateEndlessUI();updatePowerupUI();
  nextQuestion();
}
function goMenuFromModal(){
  sfxClick();closeModal('gameOverModal');clearInterval(timerInt);clearInterval(taInt);trackPlayTime();
  const sessionQ=statsTotal-(parseInt(localStorage.getItem('mr_statsTotal_prev')||'0'));
  const sessionC=statsCorrect-(parseInt(localStorage.getItem('mr_statsCorrect_prev')||'0'));
  if(sessionQ>0)saveDailySession(sessionQ,sessionC,{});
  localStorage.setItem('mr_statsTotal_prev',statsTotal);
  localStorage.setItem('mr_statsCorrect_prev',statsCorrect);
  $('taCountdown').classList.remove('active');$('timerRow').style.display='flex';
  showPage('menuPage');updateMenuStats();initDailyChallenge();renderQuestCard();
}

/* ══════════════════════════════════════════════════
   SOUND
══════════════════════════════════════════════════ */
function toggleSound(){
  muted=!muted;localStorage.setItem('mr_muted',muted);
  const btn=$('muteToggle');btn.classList.toggle('on',!muted);
  setText('soundStateText',muted?T[lang].soundOff:T[lang].soundOn);
  if(!muted)sfxClick();
}

/* ══════════════════════════════════════════════════
   ANIMATIONS
══════════════════════════════════════════════════ */
function shakeCard(){const c=$('qCard');c.classList.remove('shk','bnc');void c.offsetWidth;c.classList.add('shk');c.addEventListener('animationend',()=>c.classList.remove('shk'),{once:true});}
function bounceCard(){const c=$('qCard');c.classList.remove('shk','bnc');void c.offsetWidth;c.classList.add('bnc');c.addEventListener('animationend',()=>c.classList.remove('bnc'),{once:true});}
function disableButtons(){['btn0','btn1'].forEach(id=>{const b=$(id);b.disabled=true;b.style.opacity='.42';});}
function addRipple(e){
  const btn=e.target.closest('.ans-btn');if(!btn)return;
  const r=document.createElement('span');r.className='ripple';
  const sz=Math.max(btn.clientWidth,btn.clientHeight),rc=btn.getBoundingClientRect();
  r.style.cssText=`width:${sz}px;height:${sz}px;left:${e.clientX-rc.left-sz/2}px;top:${e.clientY-rc.top-sz/2}px;`;
  btn.appendChild(r);r.addEventListener('animationend',()=>r.remove());
}
function spawnScorePop(e){
  const el=document.createElement('div');el.className='score-pop';
  el.textContent='+1';
  el.style.color='var(--lav)';
  el.style.left=(e.clientX-14)+'px';el.style.top=(e.clientY-14)+'px';
  document.body.appendChild(el);el.addEventListener('animationend',()=>el.remove());
}

/* ══════════════════════════════════════════════════
   KEYBOARD
══════════════════════════════════════════════════ */
document.addEventListener('keydown',e=>{
  if(e.key==='1')$('btn0')?.click();
  if(e.key==='2')$('btn1')?.click();
  if(e.key.toLowerCase()==='r')resetGame();
  if(e.key.toLowerCase()==='m')toggleSound();
  if(e.key.toLowerCase()==='d')toggleDarkMode();
  // power-up shortcuts
  if(e.key.toLowerCase()==='f')activatePowerup('freeze');
  if(e.key.toLowerCase()==='x')activatePowerup('elim');
  if(e.key.toLowerCase()==='p')activatePowerup('dblxp');
  if(e.key.toLowerCase()==='l')activatePowerup('extra');
});

/* ══════════════════════════════════════════════════
   BOSS ROUND SYSTEM
══════════════════════════════════════════════════ */
let roundCount=0; // counts completed rounds (every ROUND_SIZE correct)
let isBossRound=false;
const BOSS_EVERY=5; // boss every 5 rounds

function checkBossRound(){
  if(gameMode==='timeattack'||gameMode==='kids')return false;
  roundCount++;
  if(roundCount%BOSS_EVERY===0){
    isBossRound=true;
    activateBossRound();
    return true;
  }
  isBossRound=false;
  deactivateBossRound();
  return false;
}
function activateBossRound(){
  $('bossBanner').classList.add('active');
  $('qCard').classList.add('boss-mode');
  const bossTitles=['Defeat the Calculator King!','The Math Monster attacks!','Boss Challenge: No mistakes!','The Equation Beast is here!'];
  setText('bossBannerTitle',bossTitles[Math.floor(Math.random()*bossTitles.length)]);
  // override diff to hard for boss
  prevDiff=diff; diff='hard'; syncDiffChips();
  showToast('👹','Boss Round!','Answer 10 hard questions for +50 XP & +30 🪙!','var(--rose)');
  if(!muted){tone(220,'sawtooth',.1);setTimeout(()=>tone(180,'sawtooth',.15),120);setTimeout(()=>tone(150,'sawtooth',.2),240);}
}
function deactivateBossRound(){
  $('bossBanner').classList.remove('active');
  $('qCard').classList.remove('boss-mode');
  if(typeof prevDiff!=='undefined'){diff=prevDiff;syncDiffChips();}
}
function onBossRoundComplete(){
  deactivateBossRound();
  isBossRound=false;
  localStorage.setItem('mr_bossDefeated','true');
  addXP(50);addCoins(30);
  showToast('🏆','Boss Defeated!','+50 XP · +30 🪙 earned!','var(--amber)');
  sfxLevelUp();
  checkAchievements();
}
let prevDiff=null;

/* ══════════════════════════════════════════════════
   ADAPTIVE DIFFICULTY
══════════════════════════════════════════════════ */
let adaptiveCorrectRun=0;
let adaptiveWrongRun=0;
const ADAPTIVE_UP_AT=5;   // 5 correct in a row → bump up
const ADAPTIVE_DOWN_AT=3; // 3 wrong in a row → bump down

function adaptiveOnCorrect(){
  if(gameMode!=='endless'&&gameMode!=='kids'&&gameMode!=='timeattack'&&!isBossRound){
    adaptiveCorrectRun++;adaptiveWrongRun=0;
    if(adaptiveCorrectRun>=ADAPTIVE_UP_AT){
      adaptiveCorrectRun=0;
      if(diff==='easy'){diff='medium';syncDiffChips();showAdaptiveBadge('up','↑ Medium');}
      else if(diff==='medium'){diff='hard';syncDiffChips();showAdaptiveBadge('up','↑ Hard');}
    }
  }
}
function adaptiveOnWrong(){
  if(gameMode!=='endless'&&gameMode!=='kids'&&gameMode!=='timeattack'&&!isBossRound){
    adaptiveWrongRun++;adaptiveCorrectRun=0;
    if(adaptiveWrongRun>=ADAPTIVE_DOWN_AT){
      adaptiveWrongRun=0;
      if(diff==='hard'){diff='medium';syncDiffChips();showAdaptiveBadge('down','↓ Medium');}
      else if(diff==='medium'){diff='easy';syncDiffChips();showAdaptiveBadge('down','↓ Easy');}
    }
  }
}
function showAdaptiveBadge(dir,label){
  const b=$('adaptiveBadge');
  b.textContent=label;
  b.className='adaptive-badge show adaptive-'+dir;
  setTimeout(()=>b.classList.remove('show'),3000);
}

/* ══════════════════════════════════════════════════
   LOGIN STREAK
══════════════════════════════════════════════════ */
let loginStreak=parseInt(localStorage.getItem('mr_login_streak')||'0');
let loginStreakBonus=false;

function initLoginStreak(){
  const today=getTodayKey();
  const lastLogin=localStorage.getItem('mr_last_login')||'';
  const yesterday=getYesterdayKey();
  if(lastLogin===today){
    // already counted today, just display
  } else if(lastLogin===yesterday){
    loginStreak++;
    localStorage.setItem('mr_login_streak',loginStreak);
    localStorage.setItem('mr_last_login',today);
    loginStreakBonus=true;
  } else if(lastLogin===''){
    loginStreak=1;
    localStorage.setItem('mr_login_streak',1);
    localStorage.setItem('mr_last_login',today);
    loginStreakBonus=true;
  } else {
    // streak broken
    loginStreak=1;
    localStorage.setItem('mr_login_streak',1);
    localStorage.setItem('mr_last_login',today);
    loginStreakBonus=false;
  }
  renderLoginStreakCard();
  if(loginStreakBonus&&loginStreak>1){
    const bonus=Math.min(50,loginStreak*5);
    setTimeout(()=>{
      addXP(bonus);
      showToast('🔥','Daily Login Streak!','Day '+loginStreak+' — +'+bonus+' XP bonus!','var(--rose)');
    },800);
  }
}
function getYesterdayKey(){
  const d=new Date();d.setDate(d.getDate()-1);
  return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
}
function renderLoginStreakCard(){
  setText('loginStreakVal',loginStreak);
  setText('loginStreakBadge','Day '+loginStreak);
  setText('loginStreakSub',loginStreak>=7?'🔥 On fire! Keep it up!':loginStreak>=3?'Great consistency!':'Keep playing every day!');
  // render 7 dots for last 7 days
  const dots=$('loginStreakDots');dots.innerHTML='';
  for(let i=0;i<7;i++){
    const d=document.createElement('div');
    d.className='streak-dot'+(i<loginStreak?' done':i===Math.min(loginStreak,6)?' today':'');
    d.textContent=i<loginStreak?'✓':i===Math.min(loginStreak,6)?'▶':'○';
    dots.appendChild(d);
  }
}

/* ══════════════════════════════════════════════════
   PRESTIGE / SEASON
══════════════════════════════════════════════════ */
let prestigeCount=parseInt(localStorage.getItem('mr_prestige')||'0');
const MAX_PRESTIGE_LEVEL=8; // index into XP_TABLE length-1

function checkPrestigeAvailable(){
  const isMax=playerLevel>=XP_TABLE.length-1;
  $('prestigeBtn').style.display=isMax?'block':'none';
  const badge=$('prestigeMenuBadge');
  if(prestigeCount>0){
    badge.style.display='inline-flex';
    badge.textContent='⭐'.repeat(Math.min(prestigeCount,3))+' P'+prestigeCount;
  } else {badge.style.display='none';}
}
function doPrestige(){
  closeModal('prestigeModal');
  prestigeCount++;
  localStorage.setItem('mr_prestige',prestigeCount);
  xp=0;playerLevel=1;
  localStorage.setItem('mr_xp',0);
  addCoins(100);
  sfxLevelUp();
  showToast('🌠','Prestige '+prestigeCount+'!','XP reset — +100 🪙 bonus awarded!','var(--amber)');
  updateXpUI();checkPrestigeAvailable();
  updateMenuStats();
}

/* ══════════════════════════════════════════════════
   AVATAR CUSTOMIZATION
══════════════════════════════════════════════════ */
const AVATAR_EMOJIS=['😊','🦊','🐱','🐸','🐼','🦁','🐯','🦄','🐶','🐺','🦋','🐲','🤖','👾','👑','🧙','🦸','🧠','⚡','🔥'];
const AVATAR_COLORS=['#7B6EF6','#3DBFA8','#F0707A','#F5A623','#4AADEE','#9B6EF0','#5BBF8A','#E84393','#FF6B35','#1C1A38'];
let avatarEmoji=localStorage.getItem('mr_av_emoji')||'😊';
let avatarColor=localStorage.getItem('mr_av_color')||'#7B6EF6';
let avatarEmojiTmp=avatarEmoji;
let avatarColorTmp=avatarColor;

function openAvatarModal(){
  sfxClick();
  avatarEmojiTmp=avatarEmoji;avatarColorTmp=avatarColor;
  renderAvatarModal();
  openModal('avatarModal');
}
function renderAvatarModal(){
  // emoji grid
  const grid=$('avatarEmojiGrid');grid.innerHTML='';
  AVATAR_EMOJIS.forEach(em=>{
    const d=document.createElement('div');
    d.className='av-opt'+(em===avatarEmojiTmp?' selected':'');
    d.textContent=em;
    d.onclick=()=>{avatarEmojiTmp=em;renderAvatarModal();};
    grid.appendChild(d);
  });
  // color swatches
  const row=$('avatarColorRow');row.innerHTML='';
  AVATAR_COLORS.forEach(c=>{
    const d=document.createElement('div');
    d.className='color-swatch'+(c===avatarColorTmp?' selected':'');
    d.style.background=c;
    d.onclick=()=>{avatarColorTmp=c;renderAvatarModal();};
    row.appendChild(d);
  });
  // preview
  const prev=$('avatarPreview');
  prev.style.background=`linear-gradient(135deg,${avatarColorTmp},${avatarColorTmp}99)`;
  prev.textContent=avatarEmojiTmp;
}
function saveAvatar(){
  avatarEmoji=avatarEmojiTmp;avatarColor=avatarColorTmp;
  localStorage.setItem('mr_av_emoji',avatarEmoji);
  localStorage.setItem('mr_av_color',avatarColor);
  updateAvatarUI();
}
function updateAvatarUI(){
  ['menuAvatar','gameAvatar'].forEach(id=>{
    const el=$(id);if(!el)return;
    el.textContent=avatarEmoji;
    el.style.background=`linear-gradient(135deg,${avatarColor}AA,${avatarColor}66)`;
    el.style.border=`2px solid ${avatarColor}88`;
  });
}

/* ══════════════════════════════════════════════════
   HINT SYSTEM
══════════════════════════════════════════════════ */
let hintUsedThisQ=false;

function useHint(){
  if(locked||hintUsedThisQ||!currentQ)return;
  // cost: 5 coins preferably, else 1 heart
  let usedCoins=false;
  if(coins>=5){spendCoins(5);usedCoins=true;}
  else if(hearts>1&&(gameMode==='challenge'||gameMode==='endless')){hearts--;updateHearts();}
  else if(gameMode==='practice'||gameMode==='timeattack'){spendCoins(Math.min(coins,5));}
  else{showToast('💡','Not enough!','Need 5 🪙 or 1 ❤️','var(--rose)');return;}
  hintUsedThisQ=true;
  $('hintBtn').disabled=true;
  // track for achievement
  const ph=parseInt(localStorage.getItem('mr_hintUsed')||'0');
  localStorage.setItem('mr_hintUsed',ph+1);
  // Show step-by-step hint
  const q=currentQ;
  let hint='';
  if(q.explanation)hint='💡 '+q.explanation;
  else hint='💡 The answer is closer to '+Math.round(q.correct/5)*5;
  $('hintReveal').textContent=hint;
  $('hintReveal').classList.add('show');
  sfxClick();
  showToast('💡','Hint Used!',usedCoins?'-5 🪙':'-1 ❤️','var(--amber)');
}
function resetHintForQuestion(){
  hintUsedThisQ=false;
  $('hintBtn').disabled=false;
  $('hintReveal').textContent='';
  $('hintReveal').classList.remove('show');
}

/* ══════════════════════════════════════════════════
   KIDS MODE
══════════════════════════════════════════════════ */
function applyKidsMode(on){
  document.body.classList.toggle('kids',on);
  if(on){
    timerMax=20;
    document.querySelectorAll('.time-chip').forEach(c=>c.classList.remove('selected'));
  }
}
function spawnKidsBalloon(x,y){
  const emojis=['🎈','⭐','🌟','✨','🎉','🎊','💫'];
  for(let i=0;i<3;i++){
    const el=document.createElement('div');
    el.className='kids-balloon';
    el.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    el.style.left=(x+rand(-40,40))+'px';
    el.style.top=(y+rand(-20,10))+'px';
    el.style.animationDelay=(i*0.1)+'s';
    document.body.appendChild(el);
    el.addEventListener('animationend',()=>el.remove());
  }
}
function getKidsConfig(){
  return{min:1,max:5,ops:['+','-']};
}

/* ══════════════════════════════════════════════════
   SHARE RESULT
══════════════════════════════════════════════════ */
function openShareModal(){
  sfxClick();
  renderShareCanvas();
  openModal('shareModal');
}
function renderShareCanvas(){
  const canvas=$('shareCanvas');
  const ctx=canvas.getContext('2d');
  const W=560,H=280;
  // Background gradient
  const isDark=document.body.classList.contains('dark');
  const grad=ctx.createLinearGradient(0,0,W,H);
  grad.addColorStop(0,isDark?'#1A182F':'#6B5EE8');
  grad.addColorStop(0.5,isDark?'#23214A':'#7B6EF6');
  grad.addColorStop(1,isDark?'#2E2B50':'#9580F8');
  ctx.fillStyle=grad;ctx.fillRect(0,0,W,H);
  // Decorative circles
  ctx.fillStyle='rgba(255,255,255,0.06)';
  ctx.beginPath();ctx.arc(W-80,60,120,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(60,H-40,80,0,Math.PI*2);ctx.fill();
  // Avatar circle
  ctx.fillStyle='rgba(255,255,255,0.18)';
  ctx.beginPath();ctx.arc(70,70,36,0,Math.PI*2);ctx.fill();
  ctx.font='32px serif';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(avatarEmoji,70,70);
  // Title
  ctx.fillStyle='rgba(255,255,255,0.7)';
  ctx.font='bold 13px Poppins,sans-serif';ctx.textAlign='left';ctx.textBaseline='middle';
  ctx.fillText('MathRush',115,55);
  // Player level
  ctx.fillStyle='rgba(255,255,255,0.5)';ctx.font='12px Nunito,sans-serif';
  ctx.fillText('Level '+playerLevel+' · '+getLevelName(playerLevel),115,78);
  // Big score
  ctx.fillStyle='white';ctx.font='bold 72px Poppins,sans-serif';ctx.textAlign='center';
  const displayScore=gameMode==='timeattack'?taScore:score;
  ctx.fillText(displayScore,W/2,H/2+10);
  // Score label
  ctx.fillStyle='rgba(255,255,255,0.6)';ctx.font='bold 13px Nunito,sans-serif';
  ctx.fillText('SCORE',W/2,H/2-44);
  // Stats row
  const stats=[
    {icon:'⭐',val:bestScore,lbl:'BEST'},
    {icon:'🔥',val:bestCombo+'×',lbl:'COMBO'},
    {icon:'🏅',val:T[lang].ranks[getRankKey()],lbl:'RANK'},
  ];
  stats.forEach((s,i)=>{
    const sx=110+i*130;const sy=H-50;
    ctx.fillStyle='rgba(255,255,255,0.15)';
    roundRect(ctx,sx-50,sy-24,100,44,10);ctx.fill();
    ctx.fillStyle='white';ctx.font='bold 14px Poppins,sans-serif';ctx.textAlign='center';
    ctx.fillText(s.val,sx,sy-4);
    ctx.fillStyle='rgba(255,255,255,0.55)';ctx.font='10px Nunito,sans-serif';
    ctx.fillText(s.lbl,sx,sy+14);
  });
  // Bottom tag
  ctx.fillStyle='rgba(255,255,255,0.4)';ctx.font='11px Nunito,sans-serif';ctx.textAlign='right';
  ctx.fillText('Play MathRush · mathlearn.app',W-20,H-14);
}
function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);
  ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}
function downloadShareImg(){
  const canvas=$('shareCanvas');
  const a=document.createElement('a');
  a.download='mathrush-score.png';a.href=canvas.toDataURL('image/png');a.click();
  showToast('⬇️','Image saved!','Share your result!','var(--mint)');
}
async function copyShareImg(){
  try{
    const canvas=$('shareCanvas');
    canvas.toBlob(async blob=>{
      await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);
      showToast('📋','Copied!','Paste anywhere to share.','var(--mint)');
    });
  }catch(e){showToast('📋','Copied!','Right-click the image to save.','var(--mint)');}
}

/* ══════════════════════════════════════════════════
   LEADERBOARD (local top 5)
══════════════════════════════════════════════════ */
function saveToLeaderboard(sc,mode){
  const key='mr_lb';
  let lb=JSON.parse(localStorage.getItem(key)||'[]');
  lb.push({score:sc,mode,emoji:avatarEmoji,date:getTodayKey(),level:playerLevel});
  lb.sort((a,b)=>b.score-a.score);
  lb=lb.slice(0,5);
  localStorage.setItem(key,JSON.stringify(lb));
}
function renderLeaderboard(){
  const list=$('lbList');list.innerHTML='';
  const lb=JSON.parse(localStorage.getItem('mr_lb')||'[]');
  const medals=['🥇','🥈','🥉','4️⃣','5️⃣'];
  const rowClass=['gold','silver','bronze','',''];
  if(!lb.length){
    list.innerHTML='<div style="text-align:center;color:var(--g400);padding:20px;font-size:.85rem;">No scores yet! Play a game first.</div>';
    return;
  }
  lb.forEach((entry,i)=>{
    const isMe=i===0&&entry.score===bestScore;
    const row=document.createElement('div');
    row.className='lb-row'+(rowClass[i]?' '+rowClass[i]:'')+(isMe?' me':'');
    row.innerHTML=`<div class="lb-medal">${medals[i]||'•'}</div><div class="lb-body"><div class="lb-name">${entry.emoji} Level ${entry.level}</div><div class="lb-detail">${entry.mode||'Classic'} · ${entry.date}</div></div><div class="lb-score">${entry.score}</div>`;
    list.appendChild(row);
  });
}

/* ══════════════════════════════════════════════════
   EXTENDED QUESTION TYPES (fractions, powers, sqrt, %)
══════════════════════════════════════════════════ */
function generateAdvancedQuestion(cfg){
  const types=['fraction','power','sqrt','percent'];
  const type=types[Math.floor(Math.random()*types.length)];
  if(type==='fraction')return generateFraction(cfg);
  if(type==='power')return generatePower(cfg);
  if(type==='sqrt')return generateSqrt();
  return generatePercent(cfg);
}
function generateFraction(cfg){
  const den=rand(2,8);
  const num=rand(1,den-1);
  const mult=rand(2,Math.min(8,Math.floor(cfg.max/den)));
  const correct=num*mult;
  const whole=den*mult;
  const displayText=`${num}/${den} × ${whole} = ?`;
  const explanation=`${num}/${den} of ${whole} = ${correct}`;
  return {...makeOptions(correct,displayText,explanation), op:'fraction'};
}
function generatePower(cfg){
  const base=rand(2,diff==='hard'?9:6);
  const exp=rand(2,diff==='hard'?3:2);
  const correct=Math.pow(base,exp);
  if(correct>1000)return generateStandard(cfg);
  const displayText=`${base}² ${exp===3?'³':''} = ?`.replace('² ³','³');
  const betterDisplay=exp===2?`${base}² = ?`:`${base}³ = ?`;
  const explanation=`${base} × ${base}${exp===3?' × '+base:''} = ${correct}`;
  return makeOptions(correct,betterDisplay,explanation);
}
function generateSqrt(){
  const perfects=[1,4,9,16,25,36,49,64,81,100,121,144];
  const val=perfects[rand(0,diff==='easy'?4:diff==='medium'?8:11)];
  const correct=Math.sqrt(val);
  const displayText=`√${val} = ?`;
  const explanation=`√${val} = ${correct} (${correct}×${correct}=${val})`;
  return {...makeOptions(correct,displayText,explanation), op:'sqrt'};
}
function generatePercent(cfg){
  const percents=[10,20,25,50];
  const pct=percents[Math.floor(Math.random()*percents.length)];
  const base=rand(2,Math.min(20,Math.floor(cfg.max/2)))*10;
  const correct=Math.round(base*pct/100);
  const displayText=`${pct}% of ${base} = ?`;
  const explanation=`${pct}/100 × ${base} = ${correct}`;
  return makeOptions(correct,displayText,explanation);
}

/* ══════════════════════════════════════════════════
   VARIED QUESTION ANIMATIONS
══════════════════════════════════════════════════ */
const Q_ANIMS=['q-anim-bounce','q-anim-spin','q-anim-slide','q-anim-zoom',''];
let lastAnim='';
function applyQuestionAnim(){
  const card=$('qCard');
  // remove old
  Q_ANIMS.forEach(a=>{if(a)card.classList.remove(a);});
  // pick new (avoid repeat)
  let anims=Q_ANIMS.filter(a=>a!==lastAnim);
  const chosen=anims[Math.floor(Math.random()*anims.length)];
  lastAnim=chosen;
  if(chosen)card.classList.add(chosen);
  // Remove anim class after it plays to allow re-trigger
  if(chosen){
    const eq=$('qText');
    eq.addEventListener('animationend',()=>card.classList.remove(chosen),{once:true});
  }
}

/* ══════════════════════════════════════════════════
   PARTICLE / CONFETTI SYSTEM
══════════════════════════════════════════════════ */
(function(){
  const canvas=document.getElementById('particleCanvas');
  const ctx2=canvas.getContext('2d');
  let W,H,particles=[],animId=null;
  
  function resize(){
    W=canvas.width=window.innerWidth;
    H=canvas.height=window.innerHeight;
  }
  window.addEventListener('resize',resize);
  resize();

  const COLORS=['#7B6EF6','#F0707A','#3DBFA8','#F5A623','#4AADEE','#9B6EF0','#5BBF8A','#FF85A1','#FFD166','#06D6A0'];
  const SHAPES=['circle','square','triangle','star'];

  function Particle(x,y,opts={}){
    const angle=(Math.random()*Math.PI*2);
    const speed=opts.speed??(Math.random()*8+4);
    this.x=x;this.y=y;
    this.vx=Math.cos(angle)*speed*(Math.random()*.6+.7);
    this.vy=Math.sin(angle)*speed*(Math.random()*.6+.7)-6;
    this.gravity=opts.gravity??0.35;
    this.color=COLORS[Math.floor(Math.random()*COLORS.length)];
    this.size=opts.size??(Math.random()*8+4);
    this.rot=Math.random()*Math.PI*2;
    this.rotV=(Math.random()-.5)*.25;
    this.life=1;
    this.decay=opts.decay??(Math.random()*.012+.008);
    this.shape=SHAPES[Math.floor(Math.random()*SHAPES.length)];
    this.wobble=Math.random()*2;
    this.wobbleSpeed=Math.random()*.08+.04;
    this.t=0;
  }

  function drawParticle(p){
    ctx2.save();
    ctx2.globalAlpha=p.life;
    ctx2.fillStyle=p.color;
    ctx2.translate(p.x,p.y);
    ctx2.rotate(p.rot);
    const s=p.size;
    if(p.shape==='circle'){ctx2.beginPath();ctx2.arc(0,0,s/2,0,Math.PI*2);ctx2.fill();}
    else if(p.shape==='square'){ctx2.fillRect(-s/2,-s/2,s,s);}
    else if(p.shape==='triangle'){ctx2.beginPath();ctx2.moveTo(0,-s/2);ctx2.lineTo(s/2,s/2);ctx2.lineTo(-s/2,s/2);ctx2.closePath();ctx2.fill();}
    else if(p.shape==='star'){
      ctx2.beginPath();
      for(let i=0;i<5;i++){
        ctx2.lineTo(Math.cos((18+i*72)*Math.PI/180)*s/2,Math.sin((18+i*72)*Math.PI/180)*s/2);
        ctx2.lineTo(Math.cos((54+i*72)*Math.PI/180)*s/4,Math.sin((54+i*72)*Math.PI/180)*s/4);
      }
      ctx2.closePath();ctx2.fill();
    }
    ctx2.restore();
  }

  function loop(){
    ctx2.clearRect(0,0,W,H);
    for(let i=particles.length-1;i>=0;i--){
      const p=particles[i];
      p.t++;
      p.x+=p.vx+Math.sin(p.t*p.wobbleSpeed)*p.wobble;
      p.y+=p.vy;
      p.vy+=p.gravity;
      p.vx*=0.99;
      p.rot+=p.rotV;
      p.life-=p.decay;
      if(p.life<=0){particles.splice(i,1);continue;}
      drawParticle(p);
    }
    if(particles.length>0){animId=requestAnimationFrame(loop);}
    else{animId=null;}
  }

  window.burstConfetti=function(x,y,count=60,opts={}){
    for(let i=0;i<count;i++){
      particles.push(new Particle(x??W/2,y??H/3,opts));
    }
    if(!animId)animId=requestAnimationFrame(loop);
  };

  window.burstConfettiLevelUp=function(){
    // Multiple bursts from top
    const cx=W/2;
    for(let b=0;b<3;b++){
      setTimeout(()=>{
        for(let i=0;i<40;i++){
          const p=new Particle(cx+(Math.random()-.5)*120,H*0.35,{speed:12,gravity:0.4,decay:.006,size:10});
          particles.push(p);
        }
        if(!animId)animId=requestAnimationFrame(loop);
      },b*120);
    }
  };

  window.burstConfettiPerfect=function(){
    // Rain from top edge
    for(let i=0;i<80;i++){
      setTimeout(()=>{
        const p=new Particle(Math.random()*W,0,{speed:6,gravity:0.3,decay:.005,size:8});
        p.vy=Math.random()*4+2;
        p.vx=(Math.random()-.5)*8;
        particles.push(p);
        if(!animId)animId=requestAnimationFrame(loop);
      },i*18);
    }
  };
})();

/* ══════════════════════════════════════════════════
   HAPTIC FEEDBACK
══════════════════════════════════════════════════ */
function hapticWrong(){
  if(navigator.vibrate)navigator.vibrate([80,30,60]);
}
function hapticCorrect(){
  if(navigator.vibrate)navigator.vibrate([15]);
}
function hapticLevelUp(){
  if(navigator.vibrate)navigator.vibrate([30,20,30,20,100]);
}

/* ══════════════════════════════════════════════════
   ONBOARDING TUTORIAL
══════════════════════════════════════════════════ */
const OB_STEPS=[
  {
    emoji:'🧠',
    title:'Welcome to MathRush!',
    desc:'Train your brain with fast-paced mental math.',
    tips:[
      {icon:'⚡',text:'Answer quickly — each question has a countdown timer!'},
      {icon:'🎯',text:'Two choices appear. Tap the correct answer to score points.'},
      {icon:'🔥',text:'Answer in a row to build a combo and earn bonus XP!'},
    ]
  },
  {
    emoji:'🏆',
    title:'Level Up & Earn Rewards',
    desc:'Correct answers earn XP, coins, and unlock achievements.',
    tips:[
      {icon:'⭐',text:'XP fills your level bar — reach new titles as you grow!'},
      {icon:'🪙',text:'Earn coins to buy Power-Ups: Freeze timer, 50/50, and more.'},
      {icon:'🏅',text:'Unlock achievements for milestones like 10 correct in a row!'},
    ]
  },
  {
    emoji:'🎮',
    title:'Choose Your Mode',
    desc:'Multiple game modes to match your mood and skill.',
    tips:[
      {icon:'📖',text:'Practice mode: learn without losing hearts.'},
      {icon:'♾️',text:'Endless mode: survive as long as possible!'},
      {icon:'⏱️',text:'Time Attack: score as many as you can in 60 seconds!'},
    ]
  }
];
let obStep=0;

function showOnboarding(){
  obStep=0;
  renderObStep(0);
  const overlay=$('onboardOverlay');
  overlay.style.display='flex';
  overlay.classList.remove('ob-out');
}

function renderObStep(step){
  const s=OB_STEPS[step];
  // Update progress dots
  ['obDot0','obDot1','obDot2'].forEach((id,i)=>{
    const el=$(id);
    el.className='ob-dot'+(i<step?' done':i===step?' active':'');
  });
  // Update hero content
  const emoji=$('obEmoji');
  emoji.style.animation='none';void emoji.offsetWidth;
  emoji.style.animation='ePop .5s .05s cubic-bezier(.34,1.56,.64,1) both';
  emoji.textContent=s.emoji;
  $('obTitle').textContent=s.title;
  $('obDesc').textContent=s.desc;
  // Render tips
  const tipsEl=$('obTips');tipsEl.innerHTML='';
  s.tips.forEach((tip,i)=>{
    const d=document.createElement('div');
    d.className='ob-tip';
    d.style.animationDelay=(i*.08)+'s';
    d.innerHTML=`<span class="ob-tip-icon">${tip.icon}</span><span class="ob-tip-text">${tip.text}</span>`;
    tipsEl.appendChild(d);
  });
  // Update button
  const btn=$('obNextBtn');
  btn.textContent=step===OB_STEPS.length-1?'Start Playing! 🚀':'Next →';
}

function nextOnboardStep(){
  sfxClick();
  if(obStep<OB_STEPS.length-1){
    obStep++;
    renderObStep(obStep);
  } else {
    dismissOnboarding();
  }
}

function skipOnboarding(){
  sfxClick();
  dismissOnboarding();
}

function dismissOnboarding(){
  localStorage.setItem('mr_onboarded','1');
  const overlay=$('onboardOverlay');
  overlay.classList.add('ob-out');
  overlay.addEventListener('animationend',()=>{overlay.style.display='none';},{ once:true });
}

/* ══════════════════════════════════════════════════
   QUEST SYSTEM
══════════════════════════════════════════════════ */
const QUEST_POOL=[
  {id:'q_div5',icon:'➗',desc:'Answer 5 division questions',type:'op',op:'÷',target:5,xp:40,coins:15},
  {id:'q_mul10',icon:'✖️',desc:'Answer 10 multiplication questions',type:'op',op:'×',target:10,xp:50,coins:20},
  {id:'q_add15',icon:'➕',desc:'Answer 15 addition questions',type:'op',op:'+',target:15,xp:35,coins:12},
  {id:'q_sub8',icon:'➖',desc:'Answer 8 subtraction questions',type:'op',op:'-',target:8,xp:35,coins:12},
  {id:'q_combo8',icon:'🔥',desc:'Build a combo of 8 or more',type:'combo',target:8,xp:60,coins:25},
  {id:'q_correct20',icon:'🎯',desc:'Answer 20 questions correctly',type:'correct',target:20,xp:45,coins:18},
  {id:'q_hard10',icon:'💪',desc:'Answer 10 Hard difficulty questions',type:'diff',diff:'hard',target:10,xp:70,coins:30},
  {id:'q_perfect2',icon:'💎',desc:'Complete 2 perfect rounds',type:'perfect',target:2,xp:80,coins:35},
  {id:'q_streak15',icon:'⚡',desc:'Reach a streak of 15',type:'streak',target:15,xp:65,coins:28},
  {id:'q_timeattack',icon:'⏱️',desc:'Score 20 in Time Attack mode',type:'ta_score',target:20,xp:55,coins:22},
  {id:'q_fraction3',icon:'½',desc:'Answer 3 fraction questions',type:'op',op:'fraction',target:3,xp:50,coins:20},
  {id:'q_sqrt3',icon:'√',desc:'Answer 3 square root questions',type:'op',op:'sqrt',target:3,xp:45,coins:18},
];
const QUEST_DURATION_MS = 10 * 60 * 1000; // 10 minutes
const ACTIVE_QUEST_COUNT = 3;

let activeQuests = [];
let questTimers = {};

function loadQuests(){
  const saved = localStorage.getItem('mr_quests');
  const now = Date.now();
  if(saved){
    activeQuests = JSON.parse(saved);
    // expire old ones
    activeQuests = activeQuests.map(q=>{
      if(!q.done && now > q.expiresAt) q.expired = true;
      return q;
    });
  }
  if(activeQuests.length < ACTIVE_QUEST_COUNT) generateNewQuests();
  saveQuests();
}

function generateNewQuests(){
  const now = Date.now();
  const existingIds = activeQuests.map(q=>q.id);
  const pool = QUEST_POOL.filter(q=>!existingIds.includes(q.id));
  const shuffled = pool.sort(()=>Math.random()-.5);
  const needed = ACTIVE_QUEST_COUNT - activeQuests.filter(q=>!q.expired&&!q.done).length;
  for(let i=0;i<Math.min(needed,shuffled.length);i++){
    const tmpl = shuffled[i];
    activeQuests.push({
      ...tmpl,
      progress: 0,
      done: false,
      expired: false,
      startedAt: now,
      expiresAt: now + QUEST_DURATION_MS,
    });
  }
  saveQuests();
}

function refreshQuests(){
  sfxClick();
  activeQuests = activeQuests.filter(q=>q.done); // keep completed
  generateNewQuests();
  renderQuestCard();
  showToast('⚔️','New Quests!','3 fresh challenges await you.','var(--lav)');
}

function saveQuests(){ localStorage.setItem('mr_quests', JSON.stringify(activeQuests)); }

function renderQuestCard(){
  const list = $('questList'); if(!list) return;
  list.innerHTML='';
  const now = Date.now();
  activeQuests.forEach((q,i)=>{
    const pct = Math.min(100, Math.round((q.progress/q.target)*100));
    const timeLeft = Math.max(0, q.expiresAt - now);
    const mins = Math.floor(timeLeft/60000);
    const secs = Math.floor((timeLeft%60000)/1000);
    const timeStr = q.done ? '✓ Done' : q.expired ? 'Expired' : `${mins}m ${secs}s`;
    const timerColor = q.done ? 'var(--mint)' : q.expired ? 'var(--g300)' : timeLeft < 120000 ? 'var(--rose)' : 'var(--g400)';
    const el = document.createElement('div');
    el.className = 'quest-item' + (q.done?' done':q.expired?' expired':'');
    el.innerHTML = `
      <div class="quest-icon">${q.icon}</div>
      <div class="quest-body">
        <div class="quest-desc">${q.desc}</div>
        <div class="quest-meta">
          <span class="quest-timer" style="color:${timerColor}">⏰ ${timeStr}</span>
          <span class="quest-reward-chip">+${q.xp} XP · +${q.coins} 🪙</span>
        </div>
        <div class="quest-prog-wrap">
          <div class="quest-prog-row">
            <span class="quest-prog-lbl">Progress</span>
            <span class="quest-prog-val">${q.progress} / ${q.target}</span>
          </div>
          <div class="quest-bar-bg"><div class="quest-bar-fill" style="width:${pct}%"></div></div>
        </div>
      </div>
      <div class="quest-check">${q.done?'✅':q.expired?'❌':'⭕'}</div>`;
    list.appendChild(el);
  });
}

function trackQuestProgress(type, value, extra={}){
  let changed = false;
  activeQuests.forEach(q=>{
    if(q.done||q.expired) return;
    const now = Date.now();
    if(now > q.expiresAt){ q.expired=true; changed=true; return; }
    let hit = false;
    if(q.type==='correct' && type==='correct') hit=true;
    if(q.type==='op' && type==='op' && extra.op===q.op) hit=true;
    if(q.type==='combo' && type==='combo' && value>=q.target){ q.progress=q.target; hit=false; checkQuestDone(q); changed=true; return; }
    if(q.type==='diff' && type==='diff' && extra.diff===q.diff) hit=true;
    if(q.type==='perfect' && type==='perfect') hit=true;
    if(q.type==='streak' && type==='streak' && value>=q.target){ q.progress=q.target; hit=false; checkQuestDone(q); changed=true; return; }
    if(q.type==='ta_score' && type==='ta_score'){ q.progress=Math.max(q.progress,value); changed=true; checkQuestDone(q); return; }
    if(hit){ q.progress=Math.min(q.target, q.progress+1); changed=true; checkQuestDone(q); }
  });
  if(changed){ saveQuests(); renderQuestCard(); }
}

function checkQuestDone(q){
  if(!q.done && q.progress>=q.target){
    q.done=true;
    addXP(q.xp,'quest');
    addCoins(q.coins);
    sfxAchievement();
    showToast('⚔️','Quest Complete!',q.desc+` (+${q.xp} XP, +${q.coins} 🪙)`,'var(--amber)');
    burstConfetti(window.innerWidth/2, window.innerHeight/2, 35);
  }
}

// Start quest timer refresh UI
setInterval(()=>{ if($('questList')&&$('questList').children.length) renderQuestCard(); }, 5000);

/* ══════════════════════════════════════════════════
   SKILL TREE
══════════════════════════════════════════════════ */
const SKILL_NODES = [
  // Branch: Arithmetic
  {id:'sk_add',branch:'Arithmetic',icon:'➕',name:'Addition Master',desc:'Unlocked by default',req:0,unlockType:'default'},
  {id:'sk_sub',branch:'Arithmetic',icon:'➖',name:'Subtraction',desc:'Unlocked by default',req:0,unlockType:'default'},
  {id:'sk_mul',branch:'Arithmetic',icon:'✖️',name:'Multiplication',desc:'Unlocks × operator in Medium difficulty',req:3,unlockType:'level'},
  {id:'sk_div',branch:'Arithmetic',icon:'➗',name:'Division',desc:'Unlocks ÷ operator in Hard difficulty',req:5,unlockType:'level'},
  // Branch: Advanced
  {id:'sk_frac',branch:'Advanced',icon:'½',name:'Fractions',desc:'Unlocks fraction questions in Hard mode',req:7,unlockType:'level'},
  {id:'sk_pow',branch:'Advanced',icon:'²',name:'Powers',desc:'Unlocks square & cube questions',req:8,unlockType:'level'},
  {id:'sk_sqrt',branch:'Advanced',icon:'√',name:'Square Roots',desc:'Unlocks √ questions in Hard mode',req:9,unlockType:'level'},
  // Branch: Algebra
  {id:'sk_miss',branch:'Algebra',icon:'❓',name:'Missing Numbers',desc:'Unlocked by default — ? + b = c',req:0,unlockType:'default'},
  {id:'sk_comp',branch:'Algebra',icon:'⋄',name:'Comparisons',desc:'Which side is bigger? Unlocked at Lv 4',req:4,unlockType:'level'},
  {id:'sk_pct',branch:'Algebra',icon:'%',name:'Percentages',desc:'Unlocks % questions in Hard mode',req:10,unlockType:'level'},
];

function getUnlockedSkills(){
  const lv = playerLevel;
  return new Set(SKILL_NODES.filter(n=>n.unlockType==='default'||lv>=n.req).map(n=>n.id));
}

function renderSkillTree(){
  const body = $('skillTreeBody'); if(!body) return;
  body.innerHTML='';
  const unlocked = getUnlockedSkills();
  const branches = [...new Set(SKILL_NODES.map(n=>n.branch))];

  const closeBtn = document.createElement('button');
  closeBtn.className='modal-ghost';closeBtn.textContent='Close';
  closeBtn.style.marginTop='4px';
  closeBtn.onclick=()=>closeModal('skillTreeModal');

  branches.forEach(branch=>{
    const nodes = SKILL_NODES.filter(n=>n.branch===branch);
    const branchEl = document.createElement('div');
    branchEl.className='skill-branch';
    branchEl.innerHTML=`<div class="skill-branch-title">${branch}</div>`;

    nodes.forEach((node,i)=>{
      const isUnlocked = unlocked.has(node.id);
      const isAvailable = !isUnlocked && playerLevel >= node.req - 1;
      const statusIcon = isUnlocked ? '✅' : isAvailable ? '🔓' : '🔒';
      const cls = isUnlocked ? 'unlocked' : isAvailable ? 'available' : 'locked';
      const reqMet = playerLevel >= node.req;
      const reqText = node.unlockType==='default' ? 'Default unlock' : `Requires Level ${node.req}`;

      if(i>0){
        const conn = document.createElement('div');
        conn.className='skill-connector'+(isUnlocked?' active':'');
        branchEl.appendChild(conn);
      }

      const nodeEl = document.createElement('div');
      nodeEl.className=`skill-node ${cls}`;
      nodeEl.innerHTML=`
        <div class="skill-node-icon">${node.icon}</div>
        <div class="skill-node-body">
          <div class="skill-node-name">${node.name}</div>
          <div class="skill-node-desc">${node.desc}</div>
          <div class="skill-node-req ${reqMet?'met':''}">${reqText}</div>
        </div>
        <div class="skill-node-status">${statusIcon}</div>`;
      branchEl.appendChild(nodeEl);
    });
    body.appendChild(branchEl);
  });

  // Level progress note
  const note = document.createElement('div');
  note.style.cssText='text-align:center;font-size:.72rem;color:var(--g400);font-weight:600;padding:6px 0 2px;';
  note.textContent=`You are Level ${playerLevel}. Keep playing to unlock more skills!`;
  body.appendChild(note);
  body.appendChild(closeBtn);
}

/* ══════════════════════════════════════════════════
   WEEKLY REPORT CARD
══════════════════════════════════════════════════ */
function getWeekKey(offsetDays=0){
  const d=new Date();d.setDate(d.getDate()-offsetDays);
  return d.toISOString().slice(0,10);
}

function recordDailyStats(){
  const key = 'mr_daily_'+getWeekKey();
  const existing = JSON.parse(localStorage.getItem(key)||'{"total":0,"correct":0,"ops":{}}');
  // This is called from saveStats() — daily log updated per-session at goMenu
  return existing;
}

function saveDailySession(sessionTotal, sessionCorrect, opCounts){
  const key = 'mr_daily_'+getWeekKey();
  const existing = JSON.parse(localStorage.getItem(key)||'{"total":0,"correct":0,"ops":{}}');
  existing.total += sessionTotal;
  existing.correct += sessionCorrect;
  if(opCounts){
    Object.keys(opCounts).forEach(op=>{
      existing.ops[op] = (existing.ops[op]||0) + (opCounts[op]||0);
    });
  }
  localStorage.setItem(key, JSON.stringify(existing));
}

function renderWeeklyReport(){
  const body = $('weeklyReportBody'); if(!body) return;
  body.innerHTML='';

  // Collect last 7 days
  const days=[], labels=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const today = new Date();
  for(let i=6;i>=0;i--){
    const d=new Date(today);d.setDate(d.getDate()-i);
    const k='mr_daily_'+d.toISOString().slice(0,10);
    const data=JSON.parse(localStorage.getItem(k)||'{"total":0,"correct":0,"ops":{}}');
    days.push({...data,label:labels[d.getDay()]});
  }

  const totalQ = days.reduce((s,d)=>s+d.total,0);
  const totalC = days.reduce((s,d)=>s+d.correct,0);
  const acc = totalQ>0?Math.round((totalC/totalQ)*100):0;
  const activeDays = days.filter(d=>d.total>0).length;

  // Op mistake counts
  const opMistakes = {};
  days.forEach(d=>{
    Object.keys(d.ops||{}).forEach(op=>{
      opMistakes[op]=(opMistakes[op]||0)+(d.ops[op]||0);
    });
  });
  const sortedOps = Object.entries(opMistakes).sort((a,b)=>b[1]-a[1]);

  // Improvement: compare this week acc vs last session acc
  const prevAcc = parseInt(localStorage.getItem('mr_prev_week_acc')||'0');
  const delta = acc - prevAcc;

  // HTML building
  const html=[];

  // Summary grid
  html.push(`<div class="wr-section">
    <div class="wr-section-title">📊 This Week</div>
    <div class="wr-grid">
      <div class="wr-tile"><div class="wr-tile-val">${totalQ}</div><div class="wr-tile-lbl">Questions</div></div>
      <div class="wr-tile mint"><div class="wr-tile-val">${acc}%</div><div class="wr-tile-lbl">Accuracy</div></div>
      <div class="wr-tile amber"><div class="wr-tile-val">${activeDays}</div><div class="wr-tile-lbl">Active Days</div></div>
      <div class="wr-tile ${delta>=0?'mint':'rose'}"><div class="wr-tile-val">${delta>=0?'+':''}${delta}%</div><div class="wr-tile-lbl">vs Last Wk</div></div>
    </div>
  </div>`);

  // Daily bar chart
  const maxQ = Math.max(...days.map(d=>d.total),1);
  const bars = days.map(d=>{
    const h = Math.round((d.total/maxQ)*52);
    return `<div class="wr-bar-col">
      <div class="wr-bar-outer" style="height:52px">
        <div class="wr-bar-inner" style="height:${h}px"></div>
      </div>
      <div class="wr-bar-day">${d.label}</div>
    </div>`;
  }).join('');
  html.push(`<div class="wr-section">
    <div class="wr-chart-wrap">
      <div class="wr-chart-title">Questions answered per day</div>
      <div class="wr-bars">${bars}</div>
    </div>
  </div>`);

  // Most missed operation
  if(sortedOps.length>0){
    const mistakeRows = sortedOps.slice(0,3).map(([op,cnt])=>
      `<div class="wr-mistake-row">
        <div class="wr-mistake-op">${op}</div>
        <div class="wr-mistake-lbl">${{'+':'Addition','−':'Subtraction','×':'Multiplication','÷':'Division','fraction':'Fractions','sqrt':'Square Roots','percent':'Percentages'}[op]||op}</div>
        <div class="wr-mistake-count">${cnt}×</div>
      </div>`
    ).join('');
    html.push(`<div class="wr-section">
      <div class="wr-section-title">🎯 Most Practiced</div>
      ${mistakeRows}
    </div>`);
  }

  // Insight
  let insightText = totalQ===0
    ? "No activity this week yet. Start playing to generate your report!"
    : acc>=90 ? "🔥 Outstanding accuracy! You're performing at expert level this week."
    : acc>=75 ? "👍 Great consistency! Focus on harder modes to push your limits."
    : acc>=50 ? "📈 Solid effort. Try practicing the operations you found hardest."
    : "💪 Keep going — every question makes you stronger. Practice daily!";
  html.push(`<div class="wr-insight"><div class="wr-insight-icon">💡</div><div>${insightText}</div></div>`);

  html.push(`<button class="modal-ghost" onclick="closeModal('weeklyReportModal')" style="margin-top:8px;">Close</button>`);

  body.innerHTML = html.join('');
  // save this week's acc for next week comparison
  localStorage.setItem('mr_prev_week_acc', acc);
}

/* ══════════════════════════════════════════════════
   QR CHALLENGE
══════════════════════════════════════════════════ */
let currentQRSeed = '';

function renderQRChallenge(){
  currentQRSeed = generateSeed();
  drawQR(currentQRSeed);
}

function generateSeed(){
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s='';
  for(let i=0;i<8;i++) s+=chars[Math.floor(Math.random()*chars.length)];
  return s;
}

function getChallengeURL(seed){
  const base = window.location.href.split('?')[0];
  return `${base}?seed=${seed}`;
}

function regenerateQR(){ sfxClick(); currentQRSeed=generateSeed(); drawQR(currentQRSeed); }

function copyQRLink(){
  sfxClick();
  const url = getChallengeURL(currentQRSeed);
  navigator.clipboard?.writeText(url).then(()=>{
    showToast('🔗','Link Copied!','Share it with a friend to challenge them!','var(--lav)');
  }).catch(()=>{
    showToast('🔗','Link Ready!',url.slice(0,40)+'...','var(--lav)');
  });
}

// Minimal QR code generator (pure JS, no library)
function drawQR(seed){
  const canvas=$('qrCanvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');
  const size=180;canvas.width=canvas.height=size;

  // Generate deterministic pattern from seed
  const data=seedToQRMatrix(seed);
  const modules=data.length;
  const cellSize=Math.floor((size-20)/modules);
  const offset=Math.floor((size-cellSize*modules)/2);

  ctx.fillStyle='#ffffff';ctx.fillRect(0,0,size,size);
  ctx.fillStyle='#1C1A38';

  for(let r=0;r<modules;r++){
    for(let c=0;c<modules;c++){
      if(data[r][c]){
        ctx.fillRect(offset+c*cellSize,offset+r*cellSize,cellSize-1,cellSize-1);
      }
    }
  }

  // Draw finder patterns (corners)
  drawFinder(ctx,offset,offset,cellSize);
  drawFinder(ctx,offset+(modules-7)*cellSize,offset,cellSize);
  drawFinder(ctx,offset,offset+(modules-7)*cellSize,cellSize);

  // Center logo
  const logoSize=cellSize*5;
  const lx=(size-logoSize)/2,ly=(size-logoSize)/2;
  ctx.fillStyle='#7B6EF6';
  ctx.beginPath();ctx.roundRect(lx,ly,logoSize,logoSize,6);ctx.fill();
  ctx.fillStyle='white';ctx.font=`bold ${Math.floor(logoSize*.55)}px Poppins,sans-serif`;
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText('M',size/2,size/2+1);

  $('qrSeedDisplay').textContent='Code: '+seed;
}

function drawFinder(ctx,x,y,cell){
  ctx.fillStyle='#1C1A38';
  ctx.fillRect(x,y,cell*7,cell*7);
  ctx.fillStyle='white';
  ctx.fillRect(x+cell,y+cell,cell*5,cell*5);
  ctx.fillStyle='#1C1A38';
  ctx.fillRect(x+cell*2,y+cell*2,cell*3,cell*3);
}

function seedToQRMatrix(seed){
  const N=21;
  const mat=Array.from({length:N},()=>Array(N).fill(0));
  // Use seed to fill with pseudo-random but deterministic data
  let h=0;
  for(let i=0;i<seed.length;i++) h=(Math.imul(31,h)+seed.charCodeAt(i))|0;
  for(let r=0;r<N;r++){
    for(let c=0;c<N;c++){
      h=(Math.imul(1664525,h)+1013904223)|0;
      mat[r][c]=(h>>>16)&1;
    }
  }
  // Clear finder pattern areas
  [[0,0],[N-7,0],[0,N-7]].forEach(([r,c])=>{
    for(let dr=0;dr<8;dr++) for(let dc=0;dc<8;dc++){
      if(r+dr<N&&c+dc<N) mat[r+dr][c+dc]=0;
    }
  });
  return mat;
}

// Check if we were launched with a seed
(function checkURLSeed(){
  const params=new URLSearchParams(window.location.search);
  const seed=params.get('seed');
  if(seed){
    setTimeout(()=>{
      showToast('📱','Challenge Received!','Seed: '+seed+' — Beat your friend!','var(--violet)');
      // Store seed so quests/game can use same random sequence
      localStorage.setItem('mr_challenge_seed',seed);
    },1200);
  }
})();

/* ══════════════════════════════════════════════════
   MULTIPLAYER ASYNC
══════════════════════════════════════════════════ */
let mpCode='', mpActiveSeed='', mpIsHost=false, mpMyScore=0, mpMyAcc=0, mpMyRounds=0;

function generateMpCode(){
  const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s='';for(let i=0;i<8;i++)s+=c[Math.floor(Math.random()*c.length)];
  return s;
}

function openMultiplayerModal(){
  sfxClick();
  mpCode = generateMpCode();
  setText('mpCreateCode', mpCode);
  switchMpTab('create');
  // Check if we have a pending result
  renderMpResults();
  openModal('mpModal');
}

function switchMpTab(tab){
  document.querySelectorAll('.mp-tab').forEach((t,i)=>{
    t.classList.toggle('active',['create','join','results'][i]===tab);
  });
  document.querySelectorAll('.mp-panel').forEach((p,i)=>{
    p.classList.toggle('active',['mpPanelCreate','mpPanelJoin','mpPanelResults'][i]===('mpPanel'+tab.charAt(0).toUpperCase()+tab.slice(1)));
  });
}

function mpCopyCode(){
  sfxClick();
  navigator.clipboard?.writeText(mpCode).catch(()=>{});
  showToast('📋','Code Copied!','Share '+mpCode+' with your friend.','var(--lav)');
}

function startMpChallenge(){
  sfxClick();
  mpIsHost=true; mpActiveSeed=mpCode;
  closeModal('mpModal');
  // Store seed for seeded random
  localStorage.setItem('mr_mp_seed', mpCode);
  localStorage.setItem('mr_mp_role', 'host');
  // Start a special seeded practice game
  gameMode='practice'; diff='medium';
  applyKidsMode(false);
  localStorage.setItem('mr_mp_active','1');
  startGame();
  showToast('👥','Challenge Started!','Play 10 questions — code: '+mpCode,'var(--lav)');
}

function joinMpChallenge(){
  sfxClick();
  const code = $('mpJoinInput').value.trim().toUpperCase();
  if(code.length<6){ showToast('❌','Invalid Code','Enter the 8-character code.','var(--rose)'); return; }
  mpActiveSeed = code; mpIsHost = false;
  localStorage.setItem('mr_mp_seed', code);
  localStorage.setItem('mr_mp_role', 'guest');
  closeModal('mpModal');
  gameMode='practice'; diff='medium';
  applyKidsMode(false);
  localStorage.setItem('mr_mp_active','1');
  startGame();
  showToast('👥','Joined!','Play the same 10 questions as your friend!','var(--mint)');
}

function saveMpResult(sc, total, correct){
  const seed = localStorage.getItem('mr_mp_seed')||'';
  const role = localStorage.getItem('mr_mp_role')||'host';
  const acc = total>0?Math.round((correct/total)*100):0;
  const key = 'mr_mp_result_'+seed+'_'+role;
  localStorage.setItem(key, JSON.stringify({score:sc,total,correct,acc,ts:Date.now()}));
  localStorage.removeItem('mr_mp_active');
}

function renderMpResults(){
  const el = $('mpResultsContent'); if(!el) return;
  // Find latest seeds
  const keys = Object.keys(localStorage).filter(k=>k.startsWith('mr_mp_result_'));
  if(keys.length===0){
    el.innerHTML='<div class="mp-pending"><div class="mp-pending-anim">🎮</div><div style="margin-top:10px">No results yet. Play a challenge first!</div></div>';
    return;
  }
  // Group by seed
  const seeds={};
  keys.forEach(k=>{
    const parts=k.replace('mr_mp_result_','').split('_');
    const role=parts.pop(); const seed=parts.join('_');
    if(!seeds[seed])seeds[seed]={};
    seeds[seed][role]=JSON.parse(localStorage.getItem(k));
  });
  let html='';
  Object.entries(seeds).slice(-3).reverse().forEach(([seed,data])=>{
    const host=data.host, guest=data.guest;
    const bothDone=host&&guest;
    const winner=bothDone?(host.score>guest.score?'You (Host)':host.score<guest.score?'Friend':'Tie!'):'Waiting...';
    const heroGrad=bothDone?'linear-gradient(135deg,#F5A623,#F0707A)':'linear-gradient(135deg,#7B6EF6,#4AADEE)';
    html+=`<div class="mp-result-card" style="border:1.5px solid var(--g200)">
      <div class="mp-result-hero" style="background:${heroGrad}">
        <div style="font-size:.6rem;font-weight:800;letter-spacing:.1em;opacity:.8">Code: ${seed}</div>
        <div style="font-family:var(--f-num);font-size:1.1rem;font-weight:900;margin-top:4px">${bothDone?'🏆 '+winner:'⏳ Waiting for friend...'}</div>
      </div>
      <div class="mp-result-row">
        <div class="mp-result-col">
          <div class="mp-result-name">You (Host)</div>
          <div class="mp-result-score" style="color:var(--lav)">${host?host.score:'—'}</div>
          <div class="mp-result-meta">${host?host.acc+'% accuracy':'Not played'}</div>
          ${host&&bothDone&&host.score>=guest.score?'<div class="mp-result-winner">👑 Winner!</div>':''}
        </div>
        <div class="mp-result-col">
          <div class="mp-result-name">Friend</div>
          <div class="mp-result-score" style="color:var(--mint)">${guest?guest.score:'—'}</div>
          <div class="mp-result-meta">${guest?guest.acc+'% accuracy':'Not played yet'}</div>
          ${guest&&bothDone&&guest.score>host.score?'<div class="mp-result-winner">👑 Winner!</div>':''}
        </div>
      </div>
    </div>`;
  });
  el.innerHTML = html || '<div class="mp-pending">No completed challenges found.</div>';
}

/* ══════════════════════════════════════════════════
   TOURNAMENT MODE
══════════════════════════════════════════════════ */
const TOURN_ROUNDS = 5;
const TOURN_Q_PER_ROUND = 8;
const TOURN_CONFIGS = [
  {min:1,max:10,ops:['+','-'],timeMax:15,lives:3},
  {min:1,max:20,ops:['+','-','×'],timeMax:12,lives:3},
  {min:1,max:30,ops:['+','-','×'],timeMax:10,lives:2},
  {min:1,max:50,ops:['+','-','×','÷'],timeMax:8,lives:2},
  {min:1,max:50,ops:['+','-','×','÷'],timeMax:6,lives:1},
];
let tournRound=0, tournLives=3, tournRoundScores=[], tournQCount=0, tournRoundCorrect=0, tournActive=false;

function startTournament(){
  tournRound=1; tournLives=TOURN_CONFIGS[0].lives;
  tournRoundScores=[]; tournQCount=0; tournRoundCorrect=0; tournActive=true;
  const cfg=TOURN_CONFIGS[0];
  timerMax=cfg.timeMax;
  renderTournBanner();
  showToast('🏆','Tournament Started!','Round 1 of 5 — Good luck!','var(--amber)');
  if(!muted){tone(440,'sine',.1);setTimeout(()=>tone(554,'sine',.1),100);setTimeout(()=>tone(659,'sine',.2),200);}
}

function renderTournBanner(){
  $('tournBanner').classList.add('active');
  setText('tournBannerTitle','Round '+tournRound+' of '+TOURN_ROUNDS);
  // Hearts
  let hStr='';
  const maxL=TOURN_CONFIGS[tournRound-1]?.lives||3;
  for(let i=0;i<maxL;i++) hStr+=i<tournLives?'❤️':'🖤';
  setText('tournLivesVal',hStr);
  // Progress dots
  const prog=$('tournProgress'); if(!prog)return;
  prog.innerHTML='';
  for(let i=1;i<=TOURN_ROUNDS;i++){
    const d=document.createElement('div');
    d.className='tourn-dot'+(i<tournRound?' done':i===tournRound?' current':' locked');
    prog.appendChild(d);
  }
}

function onTournamentWrong(){
  if(!tournActive)return;
  tournLives--;
  renderTournBanner();
  if(tournLives<=0){
    endTournamentRound(false);
  }
}

function onTournamentRoundEnd(){
  tournRoundScores.push({round:tournRound,score:tournRoundCorrect,passed:true});
  endTournamentRound(true);
}

function endTournamentRound(passed){
  if(passed&&tournRound<TOURN_ROUNDS){
    tournRound++;
    const cfg=TOURN_CONFIGS[tournRound-1];
    tournLives=cfg.lives; timerMax=cfg.timeMax;
    tournQCount=0; tournRoundCorrect=0;
    renderTournBanner();
    showToast('✅','Round '+(tournRound-1)+' Clear!','Round '+tournRound+' starts now — harder!','var(--mint)');
    burstConfetti(window.innerWidth/2,window.innerHeight/3,25);
  } else {
    // Tournament over
    if(passed) tournRoundScores.push({round:tournRound,score:tournRoundCorrect,passed:true});
    tournActive=false;
    $('tournBanner').classList.remove('active');
    clearInterval(timerInt);
    showTournamentResult(passed&&tournRound===TOURN_ROUNDS);
  }
}

function showTournamentResult(champion){
  if(champion) burstConfettiLevelUp();
  hapticLevelUp();
  const totalScore=tournRoundScores.reduce((s,r)=>s+r.score,0);
  if(champion){ addXP(150); addCoins(80); }
  else{ addXP(30*(tournRound-1)); addCoins(15*(tournRound-1)); }

  const overlay=document.createElement('div');
  overlay.className='tourn-result-overlay';
  overlay.id='tournResultOverlay';

  const roundTiles=Array.from({length:TOURN_ROUNDS},(_, i)=>{
    const r=tournRoundScores[i];
    if(!r)return`<div class="tourn-round-tile lost"><div class="tourn-round-num">R${i+1}</div><div class="tourn-round-score">—</div></div>`;
    return`<div class="tourn-round-tile ${r.passed?'won':'lost'}"><div class="tourn-round-num">R${i+1}</div><div class="tourn-round-score">${r.score}</div></div>`;
  }).join('');

  const heroGrad = champion
    ? 'linear-gradient(135deg,#F5A623,#F0707A,#9B6EF0)'
    : 'linear-gradient(135deg,#4AADEE,#7B6EF6)';
  const emoji = champion ? '🏆' : tournRound > 3 ? '🥈' : '💪';
  const title = champion ? 'CHAMPION!' : tournRound > 3 ? 'Great Run!' : 'Keep Training!';
  const sub = champion
    ? `You conquered all 5 rounds! Total: ${totalScore} pts`
    : `Eliminated in Round ${tournRound}. Total: ${totalScore} pts`;
  const reward = champion ? '+150 XP · +80 🪙' : `+${30*(tournRound-1)} XP · +${15*(tournRound-1)} 🪙`;

  overlay.innerHTML=`<div class="tourn-result-card">
    <div class="tourn-result-hero" style="background:${heroGrad}">
      <span class="tourn-result-emoji">${emoji}</span>
      <div class="tourn-result-title">${title}</div>
      <div class="tourn-result-sub">${sub}</div>
    </div>
    <div class="tourn-result-body">
      <div style="font-size:.6rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--g400);margin-bottom:6px;">Round Scores</div>
      <div class="tourn-round-grid">${roundTiles}</div>
      <div style="text-align:center;font-size:.78rem;font-weight:700;color:var(--amber);padding:6px 0">${reward}</div>
      <button class="modal-primary" onclick="document.getElementById('tournResultOverlay').remove();goMenu()" style="margin-top:4px">Back to Menu</button>
      <button class="modal-ghost" onclick="document.getElementById('tournResultOverlay').remove();selectGameMode('tournament');startGame()">▶ Play Again</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.remove();});
}

/* ══════════════════════════════════════════════════
   VISUAL QUESTION (Picture Math)
══════════════════════════════════════════════════ */
const VISUAL_OBJECTS = [
  {emoji:'🍎',name:'apples'},
  {emoji:'⭐',name:'stars'},
  {emoji:'🎈',name:'balloons'},
  {emoji:'🐱',name:'cats'},
  {emoji:'🌸',name:'flowers'},
  {emoji:'🦋',name:'butterflies'},
  {emoji:'🍭',name:'lollipops'},
  {emoji:'🚀',name:'rockets'},
  {emoji:'🐸',name:'frogs'},
  {emoji:'🎵',name:'notes'},
];

function generateVisualQuestion(){
  const obj = VISUAL_OBJECTS[Math.floor(Math.random()*VISUAL_OBJECTS.length)];
  const useOp = diff==='hard'?['+','-'][Math.floor(Math.random()*2)]:'+';
  const maxN = diff==='hard'?8:diff==='medium'?6:5;
  let a=Math.floor(Math.random()*(maxN-1))+1;
  let b=Math.floor(Math.random()*(maxN-1))+1;
  if(useOp==='-'&&b>a)[a,b]=[b,a];
  const correct=useOp==='+'?a+b:a-b;
  const wrong=correct+(Math.random()<.5?1:-1)*(Math.floor(Math.random()*2)+1);
  const ci=Math.random()<.5?0:1;
  return{
    displayText:`How many ${obj.name} in total?`,
    correct,wrong,
    options:ci===0?[correct,wrong]:[wrong,correct],
    correctIdx:ci,
    explanation:`${a} ${useOp} ${b} = ${correct}`,
    isVisual:true, obj:obj.emoji, numA:a, numB:b, op:useOp,
  };
}

function renderVisualQuestion(q){
  const area = $('visualQArea');
  if(!area||!q.isVisual){area&&(area.style.display='none');return;}
  area.style.display='flex';
  $('qText').style.display='none';

  const groupA = Array.from({length:q.numA},(_,i)=>`<span class="visual-obj" style="animation-delay:${i*40}ms">${q.obj}</span>`).join('');
  const groupB = Array.from({length:q.numB},(_,i)=>`<span class="visual-obj" style="animation-delay:${(q.numA+i)*40}ms">${q.obj}</span>`).join('');
  const opSymbol=q.op==='-'?'−':'+';

  area.innerHTML=`
    <div class="visual-row">
      <div class="visual-group">${groupA}</div>
      <div class="visual-op">${opSymbol}</div>
      <div class="visual-group">${groupB}</div>
      <div class="visual-eq">= ?</div>
    </div>
    <div style="font-size:.74rem;font-weight:700;color:var(--g400)">${q.displayText}</div>`;
}

function hideVisualQuestion(){
  const area=$('visualQArea');if(area)area.style.display='none';
  const qt=$('qText');if(qt)qt.style.display='';
}

/* ══════════════════════════════════════════════════
   EQUATION BUILDER (Reverse Mode)
══════════════════════════════════════════════════ */
let eqTarget=0, eqSlotData=[], eqTileData=[], eqFilledSlots=[];

function generateEquationQuestion(){
  const ops=['+','-','×'];
  const op=ops[Math.floor(Math.random()*ops.length)];
  let a,b,correct;
  if(op==='+'){a=Math.floor(Math.random()*15)+1;b=Math.floor(Math.random()*15)+1;correct=a+b;}
  else if(op==='-'){a=Math.floor(Math.random()*15)+5;b=Math.floor(Math.random()*a)+1;correct=a-b;}
  else{a=Math.floor(Math.random()*9)+2;b=Math.floor(Math.random()*9)+2;correct=a*b;}

  // Distractors: shuffle in 2 wrong numbers
  const allNums=[a,b];
  while(allNums.length<4){
    const n=Math.floor(Math.random()*20)+1;
    if(!allNums.includes(n))allNums.push(n);
  }
  const shuffledNums=[...allNums].sort(()=>Math.random()-.5);
  const allOps=[op,'+','-','×'].filter((v,i,a)=>a.indexOf(v)===i).slice(0,3);

  return{
    isEquation:true,
    displayText:`Build: ${a} ${op==='×'?'×':op} ${b} = ${correct}`,
    correct, target:correct,
    numA:a, numB:b, op,
    tiles:[...shuffledNums.map(n=>({type:'num',val:n})),...allOps.map(o=>({type:'op',val:o}))],
    correctIdx:0, options:[correct,correct], explanation:`${a} ${op} ${b} = ${correct}`,
  };
}

function renderEquationBuilder(q){
  if(!q.isEquation)return;
  $('ansGrid').style.display='none';
  $('qText').style.display='none';
  const area=$('eqBuilderArea');area.style.display='flex';
  setText('eqTargetVal',q.target);

  // 3 slots: num op num
  eqSlotData=[{type:'num'},{type:'op'},{type:'num'}];
  eqFilledSlots=[null,null,null];
  eqTileData=[...q.tiles];

  renderEqSlots();
  renderEqTiles();
  updateEqPreview();
}

function renderEqSlots(){
  const slots=$('eqSlots');if(!slots)return;
  slots.innerHTML='';
  eqSlotData.forEach((slot,i)=>{
    const el=document.createElement('div');
    const filled=eqFilledSlots[i];
    el.className='eq-slot'+(filled?' filled':'')+(slot.type==='op'?' op-slot':'');
    el.textContent=filled?filled.val:(slot.type==='op'?'op':'?');
    el.title=filled?'Click to remove':'';
    if(filled) el.onclick=()=>eqRemoveSlot(i);
    slots.appendChild(el);
    if(i<eqSlotData.length-1){
      const eq=document.createElement('span');
      eq.style.cssText='font-family:var(--f-num);font-size:1.5rem;font-weight:900;color:var(--g300);padding:0 2px;';
      eq.textContent=i===1?'=':'';
      if(i===1)slots.appendChild(eq);
    }
  });
}

function renderEqTiles(){
  const tiles=$('eqTiles');if(!tiles)return;
  tiles.innerHTML='';
  eqTileData.forEach((tile,i)=>{
    const el=document.createElement('div');
    el.className='eq-tile'+(tile.used?' used':'')+(tile.type==='op'?' op':'');
    el.textContent=tile.val;
    el.onclick=()=>eqPlaceTile(i);
    tiles.appendChild(el);
  });
}

function eqPlaceTile(tileIdx){
  sfxClick();
  const tile=eqTileData[tileIdx];
  if(tile.used)return;
  // Find first empty slot that matches type
  const slotIdx=eqSlotData.findIndex((s,i)=>s.type===tile.type&&!eqFilledSlots[i]);
  if(slotIdx===-1)return;
  eqFilledSlots[slotIdx]=tile;
  tile.used=true;
  renderEqSlots();renderEqTiles();updateEqPreview();
}

function eqRemoveSlot(slotIdx){
  sfxClick();
  const tile=eqFilledSlots[slotIdx];
  if(!tile)return;
  tile.used=false;
  eqFilledSlots[slotIdx]=null;
  renderEqSlots();renderEqTiles();updateEqPreview();
}

function eqClear(){
  sfxClick();
  eqFilledSlots=[null,null,null];
  eqTileData.forEach(t=>t.used=false);
  renderEqSlots();renderEqTiles();updateEqPreview();
}

function updateEqPreview(){
  const [n1,op,n2]=eqFilledSlots;
  const preview=$('eqPreview');
  const submitBtn=$('eqSubmitBtn');
  if(!preview)return;
  if(n1&&op&&n2){
    let result;
    if(op.val==='+')result=Number(n1.val)+Number(n2.val);
    else if(op.val==='-')result=Number(n1.val)-Number(n2.val);
    else if(op.val==='×')result=Number(n1.val)*Number(n2.val);
    else result=NaN;
    const correct=!isNaN(result)&&result===eqTarget;
    preview.textContent=`${n1.val} ${op.val} ${n2.val} = ${result}`;
    preview.className='eq-result-preview'+(correct?' correct':' wrong');
    if(submitBtn)submitBtn.disabled=false;
  } else {
    preview.textContent='Fill all slots to check';
    preview.className='eq-result-preview';
    if(submitBtn)submitBtn.disabled=true;
  }
}

function eqSubmit(){
  if(locked)return;
  const [n1,op,n2]=eqFilledSlots;
  if(!n1||!op||!n2)return;
  let result;
  if(op.val==='+')result=Number(n1.val)+Number(n2.val);
  else if(op.val==='-')result=Number(n1.val)-Number(n2.val);
  else if(op.val==='×')result=Number(n1.val)*Number(n2.val);
  else return;

  // Simulate as a regular answer check
  const correctAnswer=(result===eqTarget);
  if(correctAnswer){
    // Trigger correct path
    checkAnswer(currentQ.correctIdx, {clientX:window.innerWidth/2,clientY:window.innerHeight/2,target:$('btn0')});
  } else {
    hapticWrong();
    sfxWrong();shakeCard();
    showFeedback('wrong',currentQ.explanation);
    resetCombo();saveStats();
    adaptiveOnWrong();
    locked=true;
    $('eqPreview').className='eq-result-preview wrong';
    setTimeout(()=>{
      locked=false;
      eqClear();
      // Equation builder wrong: no heart loss in practice
      if(gameMode==='challenge'||gameMode==='tournament'){
        handleWrong(false);
      } else {
        setTimeout(()=>nextQuestion(),600);
      }
    },1200);
  }
}

function hideEquationBuilder(){
  const area=$('eqBuilderArea');if(area)area.style.display='none';
  const ag=$('ansGrid');if(ag)ag.style.display='grid';
  const qt=$('qText');if(qt)qt.style.display='';
}

/* ══════════════════════════════════════════════════
   V10 — FIREBASE MODULAR SDK v10 CONFIG & INIT
   Uses ESM-compatible modular API via CDN shim.
   Fixes: GoogleUser@local bug by never falling back
   to simulateCloudSignIn on a real domain — only
   fallback when Firebase is genuinely unavailable.
══════════════════════════════════════════════════ */
const firebaseConfig = {
  apiKey: "AIzaSyD_s65i8YU2Vez5MfNLFpR-uHDLiazv7vU",
  authDomain: "mathrushofficial.firebaseapp.com",
  projectId: "mathrushofficial",
  storageBucket: "mathrushofficial.firebasestorage.app",
  messagingSenderId: "133532375549",
  appId: "1:133532375549:web:cccf3f0d159da05a4ee194",
  measurementId: "G-5D2PP1WP92"
};

// Modular SDK handles (assigned after dynamic import)
let _fbApp=null, _fbAuth=null, _fbDb=null;
let fbApp=null, fbDb=null, fbAuth=null, cloudUser=null;
let cloudEnabled = false;
let _fbReady = false;  // true once modular SDK is loaded

// Dynamically import Firebase Modular SDK v10 (avoids compat layer issues)
async function initFirebase(){
  try{
    const { initializeApp, getApps } = await import(
      'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
    );
    const { getFirestore, doc, setDoc, collection, addDoc,
            query, orderBy, where, limit, getDocs,
            serverTimestamp } = await import(
      'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'
    );
    const { getAuth, onAuthStateChanged, signInAnonymously,
            GoogleAuthProvider, signInWithPopup,
            signOut: fbSignOut, updateProfile } = await import(
      'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js'
    );

    // Initialize app (prevent duplicate)
    _fbApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
    _fbDb  = getFirestore(_fbApp);
    _fbAuth = getAuth(_fbApp);
    _fbReady = true;

    // Keep legacy aliases for older code paths
    fbApp  = _fbApp;
    fbDb   = _fbDb;
    fbAuth = _fbAuth;

    // Store modular helpers on fbAuth for use in auth functions
    _fbAuth._modular = {
      signInAnonymously, GoogleAuthProvider, signInWithPopup,
      fbSignOut, updateProfile,
      getFirestore, doc, setDoc, collection, addDoc,
      query, orderBy, where, limit, getDocs, serverTimestamp
    };

    onAuthStateChanged(_fbAuth, user => {
      cloudUser = user;
      cloudEnabled = !!user;
      updateCloudStatusUI();
      if(user){ syncToCloud(); fetchGlobalLB('alltime'); }
    });

  } catch(e){
    console.warn('Firebase Modular SDK unavailable:', e.message);
    _fbReady = false;
  }
}

function updateCloudStatusUI(){
  const bar = $('cloudStatusBar');
  const dot = $('cloudDot');
  const txt = $('cloudStatusText');
  if(!bar)return;
  if(cloudEnabled && cloudUser){
    bar.className='cloud-status-bar signed-in';
    dot.className='cloud-dot on';
    const name = cloudUser.displayName || cloudUser.email?.split('@')[0] || 'Player';
    txt.textContent = `☁️ Synced — ${name}`;
  } else {
    bar.className='cloud-status-bar signed-out';
    dot.className='cloud-dot off';
    txt.textContent = '☁️ Sign in to sync progress & global leaderboard';
  }
}

function setSyncing(on){
  const dot=$('cloudDot');const txt=$('cloudStatusText');
  if(!dot)return;
  if(on){dot.className='cloud-dot pulse';if(txt)txt.textContent='☁️ Syncing...';}
  else updateCloudStatusUI();
}

// Sync local progress to Firestore (modular SDK)
async function syncToCloud(){
  if(!cloudEnabled||!cloudUser||!_fbReady||!_fbAuth._modular)return;
  setSyncing(true);
  try{
    const { doc, setDoc, serverTimestamp } = _fbAuth._modular;
    await setDoc(doc(_fbDb,'players',cloudUser.uid),{
      displayName: cloudUser.displayName || cloudUser.email?.split('@')[0] || 'Player',
      avatar: typeof avatarEmoji!=='undefined' ? avatarEmoji : '🧠',
      bestScore, xp, playerLevel, bestCombo,
      statsTotal, statsCorrect,
      loginStreak: typeof loginStreak!=='undefined' ? loginStreak : 0,
      lastSeen: serverTimestamp(),
    },{merge:true});
    setSyncing(false);
  } catch(e){ console.warn('Sync failed:', e); setSyncing(false); }
}

// Submit score to global leaderboard (modular SDK)
async function submitGlobalScore(sc, mode){
  if(!cloudEnabled||!cloudUser||!_fbReady||!_fbAuth._modular)return;
  try{
    const { collection, addDoc, serverTimestamp } = _fbAuth._modular;
    const name = cloudUser.displayName || cloudUser.email?.split('@')[0] || 'Player';
    const weekKey = new Date().toISOString().slice(0,7); // YYYY-MM
    await addDoc(collection(_fbDb,'leaderboard'),{
      uid: cloudUser.uid,
      name,
      avatar: typeof avatarEmoji!=='undefined' ? avatarEmoji : '🧠',
      score: sc, mode,
      level: playerLevel,
      weekKey,
      ts: serverTimestamp(),
    });
  } catch(e){ console.warn('Score submit failed:', e); }
}

/* ══════════════════════════════════════════════════
   V9 — AUTH MODAL
══════════════════════════════════════════════════ */
function openAuthModal(){
  sfxClick();
  renderAuthModal();
  openModal('authModal');
}

function renderAuthModal(){
  const body = $('authModalBody'); if(!body)return;
  if(cloudUser){
    // Profile view
    const name = cloudUser.displayName || cloudUser.email?.split('@')[0] || 'Player';
    const acc = statsTotal>0?Math.round((statsCorrect/statsTotal)*100):0;
    setText('authModalEmoji','👤');setText('authModalTitle','My Profile');setText('authModalSub','Cloud synced');
    body.innerHTML=`
      <div class="auth-profile-view">
        <div class="auth-profile-avatar">${avatarEmoji||'🧠'}</div>
        <div class="auth-profile-name">${name}</div>
        <div class="auth-profile-sub">${cloudUser.email||'Anon'} · Level ${playerLevel}</div>
        <div class="auth-profile-stats">
          <div class="auth-stat-tile"><div class="auth-stat-val">${bestScore}</div><div class="auth-stat-lbl">Best Score</div></div>
          <div class="auth-stat-tile"><div class="auth-stat-val">${xp}</div><div class="auth-stat-lbl">XP</div></div>
          <div class="auth-stat-tile"><div class="auth-stat-val">${acc}%</div><div class="auth-stat-lbl">Accuracy</div></div>
        </div>
      </div>
      <button class="modal-primary" onclick="syncToCloud().then(()=>showToast('☁️','Synced!','Progress saved to cloud.','var(--mint)'))">☁️ Sync Now</button>
      <button class="modal-ghost" style="color:var(--rose);border-color:var(--rose);" onclick="signOut()">Sign Out</button>
      <button class="modal-ghost" onclick="closeModal('authModal')">Close</button>`;
  } else {
    setText('authModalEmoji','☁️');setText('authModalTitle','Cloud Sync');setText('authModalSub','Save progress & join global leaderboard');
    body.innerHTML=`
      <div style="font-size:.78rem;font-weight:600;color:var(--g500);text-align:center;line-height:1.6;margin-bottom:4px;">
        Sign in once to sync your XP, scores, and achievements across devices.
      </div>
      <input class="auth-input" id="authNameInput" placeholder="Display name (e.g. MathWizard99)"/>
      <button class="auth-google-btn" onclick="signInAnon()">
        <span style="font-size:1.2rem">🧠</span> Continue as Guest (Anonymous)
      </button>
      <div class="auth-divider">or</div>
      <button class="auth-google-btn" onclick="signInGoogle()">
        <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/></svg>
        Sign in with Google
      </button>
      <button class="modal-ghost" onclick="closeModal('authModal')">Maybe Later</button>`;
  }
}

async function signInAnon(){
  sfxClick();
  const nameInput = $('authNameInput');
  const name = (nameInput?.value.trim()) || ('Player'+Math.floor(Math.random()*9999));
  if(!_fbReady||!_fbAuth._modular){
    // Genuine offline/demo fallback — only when Firebase truly unavailable
    simulateCloudSignIn(name);
    return;
  }
  try{
    const { signInAnonymously, updateProfile } = _fbAuth._modular;
    const cred = await signInAnonymously(_fbAuth);
    await updateProfile(cred.user,{displayName: name});
    cloudUser = _fbAuth.currentUser;
    cloudEnabled = true;
    showToast('✅','Signed in!','Welcome, '+name+'! Progress will sync.','var(--mint)');
    closeModal('authModal');
    updateCloudStatusUI();
    syncToCloud();
  } catch(e){
    showToast('❌','Sign-in failed',e.message||'Try again.','var(--rose)');
  }
}

async function signInGoogle(){
  sfxClick();
  if(!_fbReady||!_fbAuth._modular){
    showToast('ℹ️','Firebase unavailable','Configure Firebase to enable Google sign-in.','var(--amber)');
    return;
  }
  try{
    const { GoogleAuthProvider, signInWithPopup } = _fbAuth._modular;
    const provider = new GoogleAuthProvider();
    // Force account selection on every call (prevents stale session bug)
    provider.setCustomParameters({ prompt: 'select_account' });
    const result = await signInWithPopup(_fbAuth, provider);
    cloudUser = result.user;
    cloudEnabled = true;
    showToast('✅','Signed in!','Welcome, '+cloudUser.displayName+'!','var(--mint)');
    closeModal('authModal');
    updateCloudStatusUI();
    syncToCloud();
  } catch(e){
    // user closed popup — don't show error
    if(e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request'){
      showToast('❌','Sign-in failed',e.message||'Try again.','var(--rose)');
    }
  }
}

// Only used when Firebase SDK is genuinely not loaded (rare offline scenario)
function simulateCloudSignIn(name){
  cloudUser = {uid:'local-'+Date.now(), displayName:name, email:null};
  cloudEnabled = true;
  localStorage.setItem('mr_cloud_user', JSON.stringify({
    uid: cloudUser.uid,
    displayName: cloudUser.displayName,
    email: null
  }));
  updateCloudStatusUI();
  showToast('✅','Signed in!','Welcome, '+name+'! (Offline mode)','var(--mint)');
  closeModal('authModal');
}

async function signOut(){
  sfxClick();
  try{
    if(_fbReady&&_fbAuth._modular){
      const { fbSignOut } = _fbAuth._modular;
      await fbSignOut(_fbAuth);
    }
  } catch(e){ console.warn('signOut error:',e); }
  cloudUser=null; cloudEnabled=false;
  localStorage.removeItem('mr_cloud_user');
  updateCloudStatusUI();
  showToast('👋','Signed out','Progress stays saved locally.','var(--g400)');
  closeModal('authModal');
}

/* ══════════════════════════════════════════════════
   V9 — GLOBAL LEADERBOARD
══════════════════════════════════════════════════ */
let glbCurrentTab = 'alltime';
let glbCache = {};

function openGlobalLeaderboard(){
  sfxClick();
  openModal('globalLbModal');
  fetchGlobalLB(glbCurrentTab);
}

function switchGlbTab(tab){
  glbCurrentTab = tab;
  document.querySelectorAll('.glb-tab').forEach((t,i)=>{
    t.classList.toggle('active',['alltime','weekly','nearby'][i]===tab);
  });
  fetchGlobalLB(tab);
}

async function fetchGlobalLB(tab){
  const list = $('globalLbList'); if(!list)return;
  list.innerHTML = `<div class="glb-loading"><span class="glb-loading-spin">⏳</span>Loading global scores...</div>`;

  if(_fbReady && _fbAuth._modular && cloudEnabled){
    try{
      const { collection, query, orderBy, where, limit, getDocs } = _fbAuth._modular;
      let q;
      if(tab==='weekly'){
        const weekKey = new Date().toISOString().slice(0,7);
        q = query(collection(_fbDb,'leaderboard'),
            where('weekKey','==',weekKey),
            orderBy('score','desc'),
            limit(20));
      } else {
        q = query(collection(_fbDb,'leaderboard'),
            orderBy('score','desc'),
            limit(20));
      }
      const snap = await getDocs(q);
      const entries = snap.docs.map(d=>d.data());
      renderGlbList(entries, tab);
      return;
    } catch(e){ console.warn('Firestore LB fetch failed:', e); }
  }
  // Demo fallback
  setTimeout(()=>renderGlbList(generateDemoGlbData(tab), tab), 500);
}

function generateDemoGlbData(tab){
  const names=['MathNinja99','AlgebraKing','QuickCalc','NumberCruncher','MindMath','MathWizard','SpeedSolver','BrainStorm','RapidFire','MathMaster'];
  const avatars=['🦁','🐯','🦊','🐺','🦅','🦋','🐢','🦈','🐉','🧙'];
  const entries = names.map((n,i)=>({
    name:n, avatar:avatars[i],
    score: Math.floor(200 - i*15 + Math.random()*20),
    level: Math.floor(10-i+Math.random()*3),
    mode: ['Challenge','Endless','Time Attack'][i%3],
  }));
  // Insert local user at their position
  const myEntry = {
    name: cloudUser?.displayName || 'You',
    avatar: avatarEmoji||'🧠',
    score: bestScore,
    level: playerLevel,
    mode: 'Challenge',
    isMe: true,
  };
  entries.push(myEntry);
  entries.sort((a,b)=>b.score-a.score);
  return entries;
}

function renderGlbList(entries, tab){
  const list = $('globalLbList'); if(!list)return;
  if(!entries.length){
    list.innerHTML = `<div class="glb-loading">No scores yet. Be the first!</div>`;
    return;
  }
  const medals = ['🥇','🥈','🥉'];
  const rowClass = ['gold','silver','bronze'];
  list.innerHTML = entries.slice(0,20).map((e,i)=>{
    const isMe = e.isMe || (cloudUser && e.uid===cloudUser.uid);
    const cls = rowClass[i]||'';
    return `<div class="glb-row ${cls}${isMe?' me':''}">
      <div class="glb-pos">${medals[i]||((i+1)+'')}</div>
      <div class="glb-avi">${e.avatar||'🧠'}</div>
      <div class="glb-body">
        <div class="glb-name">${e.name||'Player'}${isMe?' (You)':''}</div>
        <div class="glb-sub">Lv${e.level||1} · ${e.mode||'Classic'}</div>
      </div>
      <div class="glb-score">${e.score||0}</div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════
   V9 — LIVE DUEL (BroadcastChannel + localStorage)
══════════════════════════════════════════════════ */
let duelChannel = null;
let duelRoomId = '';
let duelIsHost = false;
let duelActive = false;
let duelMyScore = 0;
let duelOppScore = 0;
let duelTimeLeft = 60;
let duelInt = null;
let duelBotInt = null;

function generateDuelCode(){
  return Math.random().toString(36).slice(2,8).toUpperCase();
}

function openLiveDuelModal(){
  sfxClick();
  const code = generateDuelCode();
  setText('duelRoomCode', code);
  $('duelJoinInput').value = '';
  $('duelSetupPanel').style.display='block';
  $('duelWaitPanel').style.display='none';
  $('duelCloseBtn').style.display='block';
  openModal('liveDuelModal');
}

function startDuelHost(){
  sfxClick();
  duelRoomId = $('duelRoomCode').textContent;
  duelIsHost = true;
  setText('duelWaitCode', duelRoomId);
  $('duelSetupPanel').style.display='none';
  $('duelWaitPanel').style.display='block';
  $('duelCloseBtn').style.display='none';
  // Open BroadcastChannel
  setupDuelChannel(duelRoomId);
  showToast('⚔️','Duel Room Created!','Waiting for opponent... Code: '+duelRoomId,'var(--violet)');
  // Poll localStorage for guest join
  const pollId = setInterval(()=>{
    const guestJoined = localStorage.getItem('mr_duel_join_'+duelRoomId);
    if(guestJoined){
      clearInterval(pollId);
      localStorage.removeItem('mr_duel_join_'+duelRoomId);
      const guest = JSON.parse(guestJoined);
      beginLiveDuel(guest.name||'Friend', guest.avatar||'👤');
    }
  },500);
  setTimeout(()=>clearInterval(pollId), 60000); // 1min timeout
}

function joinDuelRoom(){
  sfxClick();
  const code = $('duelJoinInput').value.trim().toUpperCase();
  if(code.length<4){ showToast('❌','Invalid Code','Enter the 6-char duel code.','var(--rose)'); return; }
  duelRoomId = code;
  duelIsHost = false;
  const myName = cloudUser?.displayName || 'Challenger';
  // Signal host via localStorage
  localStorage.setItem('mr_duel_join_'+code, JSON.stringify({name:myName, avatar:avatarEmoji||'🧠'}));
  setupDuelChannel(code);
  showToast('⚔️','Joining Duel!','Code: '+code,'var(--violet)');
  closeModal('liveDuelModal');
  beginLiveDuel(myName, avatarEmoji||'🧠', true);
}

function setupDuelChannel(room){
  if(duelChannel){ try{duelChannel.close();}catch(e){} }
  try{
    duelChannel = new BroadcastChannel('mathrush_duel_'+room);
    duelChannel.onmessage = e => {
      if(e.data.type==='score_update' && duelActive){
        duelOppScore = e.data.score;
        updateDuelUI();
      } else if(e.data.type==='duel_start' && !duelIsHost){
        beginLiveDuel(e.data.opponentName||'Host', e.data.opponentAvatar||'🧑');
      }
    };
  } catch(er){ duelChannel=null; }
}

function beginLiveDuel(oppName, oppAvatar, isJoining=false){
  closeModal('liveDuelModal');
  duelActive=true; duelMyScore=0; duelOppScore=0; duelTimeLeft=60;
  // Signal via broadcast
  if(duelChannel && duelIsHost){
    duelChannel.postMessage({type:'duel_start', opponentName: cloudUser?.displayName||'Host', opponentAvatar: avatarEmoji||'🧠'});
  }
  // Set up duel banner
  setText('duelAvatarMe', avatarEmoji||'🧠');
  setText('duelAvatarOpp', oppAvatar);
  setText('duelNameOpp', oppName);
  updateDuelUI();
  $('duelBanner').classList.add('active');
  // Start the game
  gameMode='practice'; diff='medium';
  startGame();
  // Duel countdown
  duelInt = setInterval(()=>{
    duelTimeLeft--;
    $('duelTimerFill').style.width=(duelTimeLeft/60*100)+'%';
    if(duelTimeLeft<=0){ clearInterval(duelInt); endDuel(); }
  },1000);
  showToast('⚔️','Duel Started!','60 seconds — beat '+oppName+'!','var(--violet)');
}

function startSoloSimDuel(){
  sfxClick();
  closeModal('liveDuelModal');
  // AI bot that scores randomly at a human-like pace
  duelActive=true; duelMyScore=0; duelOppScore=0; duelTimeLeft=60;
  setText('duelAvatarMe', avatarEmoji||'🧠');
  setText('duelAvatarOpp', '🤖');
  setText('duelNameOpp', 'AI Bot');
  updateDuelUI();
  $('duelBanner').classList.add('active');
  gameMode='practice'; diff='medium'; startGame();
  // Bot scores every 3-7 seconds randomly
  const botTick=()=>{
    if(!duelActive)return;
    duelOppScore++;
    updateDuelUI();
    const next = 2500+Math.random()*4500;
    duelBotInt = setTimeout(botTick, next);
  };
  duelBotInt = setTimeout(botTick, 3000);
  duelInt = setInterval(()=>{
    duelTimeLeft--;
    $('duelTimerFill').style.width=(duelTimeLeft/60*100)+'%';
    if(duelTimeLeft<=0){ clearInterval(duelInt); endDuel(); }
  },1000);
  showToast('⚔️','Duel vs AI!','Beat the bot in 60 seconds!','var(--violet)');
}

function cancelDuelWait(){
  sfxClick();
  $('duelSetupPanel').style.display='block';
  $('duelWaitPanel').style.display='none';
  $('duelCloseBtn').style.display='block';
  if(duelChannel)try{duelChannel.close();}catch(e){}
}

function updateDuelUI(){
  setText('duelScoreMe', duelMyScore);
  setText('duelScoreOpp', duelOppScore);
  // Broadcast my score
  if(duelChannel){
    try{ duelChannel.postMessage({type:'score_update', score:duelMyScore}); }catch(e){}
  }
}

function onDuelCorrect(){
  if(!duelActive)return;
  duelMyScore++;
  updateDuelUI();
}

function endDuel(){
  duelActive=false;
  if(duelBotInt)clearTimeout(duelBotInt);
  $('duelBanner').classList.remove('active');
  const won = duelMyScore > duelOppScore;
  const tied = duelMyScore === duelOppScore;
  if(won) burstConfettiLevelUp();
  const emoji = won?'🏆':tied?'🤝':'😤';
  const title = won?'You Win!':tied?'Draw!':'You Lose!';
  const sub = `${duelMyScore} vs ${duelOppScore}`;
  const reward = won?30:tied?15:5;
  addXP(reward); addCoins(reward);
  showToast(emoji,'Duel Over!',`${title} ${sub} (+${reward} XP)`,won?'var(--amber)':'var(--lav)');
}

/* ══════════════════════════════════════════════════
   V9 — SOCIAL SHARE
══════════════════════════════════════════════════ */
function getShareText(){
  const s = gameMode==='timeattack'?taScore:score;
  return `🧠 MathRush Score: ${s} pts | Level ${playerLevel} | Streak ${sessionStreak}\nPlay at: ${window.location.href.split('?')[0]}`;
}

function shareToWhatsApp(){
  sfxClick();
  const text = encodeURIComponent(getShareText());
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareToTwitter(){
  sfxClick();
  const text = encodeURIComponent(getShareText()+' #MathRush #BrainTraining');
  window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
}

function shareToInstagram(){
  sfxClick();
  // Instagram doesn't support direct share links on web — copy + prompt
  copyShareLink();
  showToast('📸','Link Copied!','Paste it in your Instagram Story or Bio!','var(--rose)');
}

function copyShareLink(){
  sfxClick();
  const text = getShareText();
  navigator.clipboard?.writeText(text).then(()=>{
    showToast('🔗','Copied!','Share text ready to paste anywhere.','var(--lav)');
  }).catch(()=>{
    showToast('🔗','Share Text',text.slice(0,60)+'...','var(--lav)');
  });
}

// Also submit score to global LB when game ends
const _origShowGameOver = showGameOverModal;
function showGameOverModal(){
  _origShowGameOver();
  const sc = gameMode==='timeattack'?taScore:score;
  if(sc>0) submitGlobalScore(sc, gameMode);
}

/* ══════════════════════════════════════════════════
   V10 — PWA INSTALL
══════════════════════════════════════════════════ */
let pwaInstallEvent = null;

window.addEventListener('beforeinstallprompt', e=>{
  e.preventDefault();
  pwaInstallEvent = e;
  if(!localStorage.getItem('mr_pwa_dismissed')){
    setTimeout(()=>document.getElementById('pwaBanner')?.classList.add('show'), 3000);
  }
});

window.addEventListener('appinstalled', ()=>{
  document.getElementById('pwaBanner')?.classList.remove('show');
  showToast('📲','App Installed!','MathRush is now on your home screen!','var(--mint)');
});

function triggerPWAInstall(){
  if(pwaInstallEvent){
    pwaInstallEvent.prompt();
    pwaInstallEvent.userChoice.then(r=>{
      if(r.outcome==='accepted') document.getElementById('pwaBanner')?.classList.remove('show');
    });
  } else {
    showToast('📱','How to Install','Tap your browser menu → "Add to Home Screen"','var(--lav)');
  }
}

function dismissPWABanner(){
  document.getElementById('pwaBanner')?.classList.remove('show');
  localStorage.setItem('mr_pwa_dismissed','1');
}

// Register external service worker (sw.js)
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(err=>{
    console.warn('SW registration failed:', err);
  });
}

/* ══════════════════════════════════════════════════
   FOOTER QUOTES
══════════════════════════════════════════════════ */
const FOOTER_QUOTES=[
  "The more you practice, the luckier you get.",
  "Math is not about numbers, it's about understanding.",
  "Every expert was once a beginner.",
  "Small progress is still progress.",
  "Train your brain like you train your body.",
  "Consistency beats talent when talent doesn't work hard.",
  "Challenge yourself — that's where growth lives.",
  "One correct answer at a time. That's how legends are made.",
  "Don't count the days. Make the days count.",
  "The secret to getting ahead is getting started.",
];
function rotateFooterQuote(){
  const el=$('footerQuote');if(!el)return;
  const q=FOOTER_QUOTES[Math.floor(Math.random()*FOOTER_QUOTES.length)];
  el.style.transition='opacity .4s ease';
  el.style.opacity='0';
  setTimeout(()=>{el.textContent=q;el.style.opacity='1';},400);
}
// Rotate every 8 seconds
setInterval(rotateFooterQuote,8000);

/* ══════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════ */
$('muteToggle').classList.toggle('on',!muted);
setText('statBest',bestScore);
playerLevel=getLevel(xp);
applyDarkMode();
applyTranslations();
updateMenuStats();
updateXpUI();
updateCoinUI();
updateAvatarUI();
initDailyChallenge();
initLoginStreak();
checkAchievements();
checkPrestigeAvailable();
renderLeaderboard();
applySoundPackUI();
loadQuests();
renderQuestCard();
// v10: Restore offline user only when uid starts with 'local-' (genuine offline sign-in)
const savedCloudUser = localStorage.getItem('mr_cloud_user');
if(savedCloudUser){
  try{
    const u = JSON.parse(savedCloudUser);
    if(u && u.uid && u.uid.startsWith('local-') && u.displayName){
      cloudUser = u;
      cloudEnabled = true;
    }
  }catch(e){}
}
// v10: Init Firebase Modular SDK — async, non-blocking
// onAuthStateChanged inside will override cloudUser if real session exists
initFirebase();
updateCloudStatusUI();
// Show onboarding for first-time users
if(!localStorage.getItem('mr_onboarded')){
  setTimeout(()=>showOnboarding(),700);
}
