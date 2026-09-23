/*
  Little Surprise V1 — flat GitHub Pages edition.
  Edit CONFIG only. Keep media files beside index.html, style.css and script.js.
*/
(function(){
  "use strict";

  const CONFIG={
    recipient:"caca",
    sender:"ming",
    passcodeHash:"07c4b46160c71a2135063b4c47638ce816fc99968dbce0e52faec985bbbb27fd",
    music:"music.mp3",
    voiceMessage:"voice-message.m4a",
    encouragement:{
      zh:{title:"你今天已经很努力了。",message:"我知道，有些日子真的比想象中更累。就算别人没发现，我也看得见你一直很努力。你不需要做到完美，也一样值得我为你感到骄傲。"},
      en:{title:"You did your best today.",message:"I know some days ask more from you than they should. I see how hard you try, even when nobody else notices. You don’t have to be perfect for me to be proud of you."}
    },
    prideCards:{
      zh:[{title:"你没有放弃",body:"就算今天很累，你还是一步一步撑过来了。那份安静的坚持，比你想象中更珍贵。"},{title:"你总是很用心",body:"你对身边人的关心，真的很温柔，也让我看见你善良的一面。"},{title:"你还在慢慢成长",body:"还没把所有事情想明白，不代表你落后了。你的每一步，我都有看见。"}],
      en:[{title:"You kept going",body:"Even when today felt heavy, you still showed up. That quiet strength matters more than you realise."},{title:"You care deeply",body:"The way you think about other people says something beautiful about your heart."},{title:"You are still growing",body:"Not having everything figured out does not mean you are behind. I’m proud of every step."}]
    },
    promises:{
      zh:[{icon:"🍜",title:"你最喜欢的一餐",body:"吃什么我来安排，你只需要出现，然后好好享受。"},{icon:"🌙",title:"一起安静散步",body:"不用赶时间，也不用想太多。只有我们、晚风，还有你需要的安静。"},{icon:"♡",title:"我会好好听你说",body:"除非你想听意见，不然我不急着给答案。我会陪着你，把你的话听完。"}],
      en:[{icon:"🍜",title:"Your favourite meal",body:"I’ll take care of the food. You only need to show up and enjoy it."},{icon:"🌙",title:"A quiet walk",body:"No rush, no agenda. Just us, fresh air and as much silence as you need."},{icon:"♡",title:"I’ll simply listen",body:"No advice unless you ask. I’ll sit with you and hear everything."}]
    }
  };

  const COPY={
    zh:{privateGift:"一份只属于你的礼物",lockTitle:"这份小惊喜，是为你准备的。",lockBody:"输入那四个对我们有意义的数字。",hint:"提示：我们的故事开始的那一天",unlock:"打开你的惊喜",wrongCode:"差一点点。想想那个只属于我们的日子。",heroKicker:"一个只为你准备的小小片刻",heroTitle:"我为你准备了一份小惊喜。",heroBody:"不用解答什么，也不需要证明什么。先深呼吸，准备好后再慢慢打开。",enter:"进入",giftKicker:"用心包好的礼物",giftTitle:"里面有一样东西想送给你。",giftBody:"轻轻点一下，让礼物慢慢打开。",openGift:"打开礼物",wishKicker:"今天，许一个属于自己的愿望",makeWish:"今天，也为自己许个愿吧。",enableMic:"开启麦克风",micPrivacy:"声音只会在你的设备上分析，不会被录音或上传。",tapBlow:"点这里吹灭蜡烛",encouragementKicker:"怕你忘了，所以想告诉你",messageFrom:"来自",playVoice:"听听我的留言",pauseVoice:"暂停留言",oneMoreThing:"还有一件事",prideKicker:"我在你身上看见的三件事",prideTitle:"这些，都是我为你感到骄傲的原因。",openPromise:"打开一个小承诺",promiseKicker:"选一个你现在最需要的",promiseTitle:"这是我给你的小承诺。",promiseBody:"选一个吧，没有期限。",keepPromise:"收下这个承诺",finalKicker:"留给那些你需要被提醒的日子",finalTitle:"你不需要先证明什么，才值得休息。",finalBody:"你今天已经做得够多了。以后累的时候，也可以回来这里，让我再提醒你一次。",replay:"再看一次",loading:"正在准备你的惊喜",listening:"正在听周围的声音…",blowInstruction:"请靠近麦克风，轻轻吹灭蜡烛。",wishReleased:"你的愿望，正在变成一份可以留下来的礼物。",micUnavailable:"无法使用麦克风，不过惊喜还是可以继续。",musicError:"无法播放 music.mp3。请确认它是真正的 MP3，并放在仓库根目录。",voiceError:"请把 voice-message.mp3 上传到仓库根目录，才能播放你的留言。",chosenPrefix:"你选了：",chosenSuffix:"。我答应你。"},
    en:{privateGift:"A private gift, just for you",lockTitle:"This little surprise was made for you.",lockBody:"Enter the four numbers that mean something to us.",hint:"Hint: the day our story began",unlock:"Open your surprise",wrongCode:"Almost. Think of a date that belongs to us.",heroKicker:"A small moment made only for you",heroTitle:"I prepared a surprise for you.",heroBody:"Nothing to solve and nothing to prove. Take a breath, then open it whenever you’re ready.",enter:"Enter",giftKicker:"Wrapped with care",giftTitle:"There’s something inside for you.",giftBody:"Tap gently and let the gift open.",openGift:"Open the gift",wishKicker:"Make one wish for yourself today",makeWish:"Today, make a wish for yourself.",enableMic:"Enable microphone",micPrivacy:"Sound is analysed only on your device. Nothing is recorded or uploaded.",tapBlow:"Tap here to blow out the candle",encouragementKicker:"In case you forgot, I want you to know",messageFrom:"A message from",playVoice:"Play my message",pauseVoice:"Pause my message",oneMoreThing:"One more thing",prideKicker:"Three things I see in you",prideTitle:"These are some of the reasons I’m proud of you.",openPromise:"Open a small promise",promiseKicker:"Choose what you need right now",promiseTitle:"Here is my little promise to you.",promiseBody:"Choose one. There’s no expiry date.",keepPromise:"Keep this promise",finalKicker:"For the days you need reminding",finalTitle:"You don’t have to earn your rest.",finalBody:"You have done enough for today. Whenever things feel heavy, come back and let me remind you again.",replay:"Watch it again",loading:"Preparing your surprise",listening:"Listening to the room…",blowInstruction:"Please blow the candle near your microphone.",wishReleased:"Your wish is becoming something you can keep.",micUnavailable:"Microphone access wasn’t available, but your surprise can continue.",musicError:"Couldn’t play music.mp3. Confirm it is a real MP3 in the repository root.",voiceError:"Upload voice-message.mp3 to the repository root to play your message.",chosenPrefix:"Chosen: ",chosenSuffix:". I promise."}
  };

  const reducedMotion=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas=document.querySelector("#particle-canvas");
  const ctx=canvas.getContext("2d");
  let width=0,height=0,dpr=1,shape="gift",transition=null,opacity=.18,pointerX=0,pointerY=0;
  const count=innerWidth<720?900:1750;
  const particles=[];

  function pointForGift(){
    const face=Math.random();
    let x,y,z;
    if(face<.7){x=(Math.random()-.5)*1.5;y=(Math.random()-.5)*1.25;z=(Math.random()-.5)*.75}
    else{x=(Math.random()-.5)*1.72;y=-.68+(Math.random()-.5)*.18;z=(Math.random()-.5)*.85}
    if(Math.random()<.16)x=(Math.random()-.5)*.12;
    if(Math.random()<.12)y=(Math.random()-.5)*.1;
    return{x,y,z};
  }
  function pointForBurst(){const a=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1),r=3+Math.random()*7;return{x:r*Math.sin(p)*Math.cos(a),y:r*Math.sin(p)*Math.sin(a),z:r*Math.cos(p)}}
  for(let i=0;i<count;i++){
    const gift=pointForGift(),burst=pointForBurst();
    particles.push({gift,burst,current:{...gift},start:{...gift},size:.55+Math.random()*1.3,phase:Math.random()*6.28,color:i%6===0?"208,166,109":"166,83,97"});
  }
  function resize(){width=innerWidth;height=innerHeight;dpr=Math.min(devicePixelRatio||1,1.75);canvas.width=width*dpr;canvas.height=height*dpr;canvas.style.width=width+"px";canvas.style.height=height+"px";ctx.setTransform(dpr,0,0,dpr,0,0)}
  function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
  function moveTo(target,duration){particles.forEach(p=>p.start={...p.current});transition={target,start:performance.now(),duration:reducedMotion?1:duration}}
  function draw(now){
    if(transition){const raw=Math.min(1,(now-transition.start)/transition.duration),m=ease(raw);particles.forEach(p=>{const t=p[transition.target];p.current.x=p.start.x+(t.x-p.start.x)*m;p.current.y=p.start.y+(t.y-p.start.y)*m;p.current.z=p.start.z+(t.z-p.start.z)*m});if(raw===1)transition=null}
    ctx.clearRect(0,0,width,height);ctx.save();ctx.globalCompositeOperation="lighter";
    const scale=Math.min(width,height)*(width<720?.26:.31),ry=pointerX*.38+Math.sin(now*.00025)*.08,rx=-pointerY*.22;
    const cy=Math.cos(ry),sy=Math.sin(ry),cx=Math.cos(rx),sx=Math.sin(rx);
    particles.forEach(p=>{const x1=p.current.x*cy-p.current.z*sy,z1=p.current.x*sy+p.current.z*cy,y1=p.current.y*cx-z1*sx,z2=p.current.y*sx+z1*cx,per=Math.max(.2,1/(1+z2*.12)),x=width/2+x1*scale*per,y=height/2+y1*scale*per;if(x<-20||x>width+20||y<-20||y>height+20)return;const shimmer=.7+Math.sin(now*.0015+p.phase)*.3;ctx.fillStyle=`rgba(${p.color},${opacity*shimmer})`;ctx.beginPath();ctx.arc(x,y,Math.max(.45,p.size*per),0,Math.PI*2);ctx.fill()});
    ctx.restore();requestAnimationFrame(draw)
  }
  function show(id){const current=document.querySelector(".screen.active"),next=document.querySelector("#"+id);if(current)current.classList.remove("active");next.classList.add("active")}
  function toast(message){const el=document.querySelector("#toast");el.textContent=message;el.classList.add("visible");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("visible"),4200)}

  let language="zh",selectedPromiseIndex=null,cakeState="makeWish";
  document.querySelector("#voice-sender").textContent=CONFIG.sender;
  document.querySelector("#final-sender").textContent=CONFIG.sender;
  document.querySelector("#final-recipient").textContent=CONFIG.recipient;

  const prideGrid=document.querySelector("#pride-grid");
  const promiseGrid=document.querySelector("#promise-grid");
  function updatePromiseConfirmation(){const confirmation=document.querySelector("#promise-confirmation");if(selectedPromiseIndex===null){confirmation.textContent="";return}const item=CONFIG.promises[language][selectedPromiseIndex];confirmation.textContent=COPY[language].chosenPrefix+item.title+COPY[language].chosenSuffix}
  function renderCards(){prideGrid.replaceChildren();CONFIG.prideCards[language].forEach((card,index)=>{const article=document.createElement("article");article.className="pride-card";article.innerHTML=`<span class="pride-number">0${index+1}</span><h3></h3><p></p>`;article.querySelector("h3").textContent=card.title;article.querySelector("p").textContent=card.body;prideGrid.appendChild(article)});promiseGrid.replaceChildren();CONFIG.promises[language].forEach((item,index)=>{const button=document.createElement("button");button.className="promise-card"+(selectedPromiseIndex===index?" selected":"");button.type="button";button.innerHTML=`<span class="pride-number"></span><h3></h3><p></p>`;button.querySelector(".pride-number").textContent=item.icon;button.querySelector("h3").textContent=item.title;button.querySelector("p").textContent=item.body;button.addEventListener("click",()=>{selectedPromiseIndex=index;document.querySelectorAll(".promise-card").forEach(card=>card.classList.remove("selected"));button.classList.add("selected");updatePromiseConfirmation();document.querySelector("#finish-button").disabled=false});promiseGrid.appendChild(button)});updatePromiseConfirmation()}
  function applyLanguage(nextLanguage){language=nextLanguage;document.documentElement.lang=language==="zh"?"zh-MY":"en";document.querySelectorAll(".language").forEach(button=>button.classList.toggle("active",button.dataset.lang===language));document.querySelectorAll("[data-copy]").forEach(element=>{const value=COPY[language][element.dataset.copy];if(value)element.textContent=value});document.querySelector("#private-for").textContent=language==="zh"?`特别为 ${CONFIG.recipient} 准备`:`MADE ESPECIALLY FOR ${CONFIG.recipient.toUpperCase()}`;document.querySelector("#encouragement-title").textContent=CONFIG.encouragement[language].title;document.querySelector("#encouragement-copy").textContent=CONFIG.encouragement[language].message;document.querySelector("#cake-instruction").textContent=COPY[language][cakeState];renderCards();voiceState(!document.querySelector("#voice-message").paused)}
  document.querySelectorAll(".language").forEach(button=>button.addEventListener("click",()=>applyLanguage(button.dataset.lang)));

  async function hash(value){if(!crypto||!crypto.subtle)return value==="0901"?CONFIG.passcodeHash:"";const bytes=new TextEncoder().encode(value),digest=await crypto.subtle.digest("SHA-256",bytes);return[...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,"0")).join("")}
  const inputs=[...document.querySelectorAll("#pin-inputs input")];
  inputs.forEach((input,index)=>{input.addEventListener("input",()=>{input.value=input.value.replace(/\D/g,"").slice(-1);if(input.value&&inputs[index+1])inputs[index+1].focus()});input.addEventListener("keydown",e=>{if(e.key==="Backspace"&&!input.value&&inputs[index-1])inputs[index-1].focus()});input.addEventListener("paste",e=>{const digits=e.clipboardData.getData("text").replace(/\D/g,"").slice(0,4);if(digits.length===4){e.preventDefault();digits.split("").forEach((digit,i)=>inputs[i].value=digit)}})});
  document.querySelector("#passcode-form").addEventListener("submit",async e=>{e.preventDefault();const value=inputs.map(i=>i.value).join(""),message=document.querySelector("#form-message");if(value.length!==4||await hash(value)!==CONFIG.passcodeHash){message.textContent=COPY[language].wrongCode;document.querySelector("#pin-inputs").classList.remove("shake");void document.querySelector("#pin-inputs").offsetWidth;document.querySelector("#pin-inputs").classList.add("shake");return}document.querySelector("#pin-inputs").classList.add("success");message.textContent="";opacity=.65;setTimeout(()=>show("hero-screen"),reducedMotion?10:450)});
  document.querySelector("#enter-button").addEventListener("click",()=>{opacity=.88;moveTo("gift",900);show("gift-screen")});
  document.querySelector("#gift-button").addEventListener("click",()=>{moveTo("burst",1500);opacity=.72;setTimeout(()=>{show("cake-screen");document.body.classList.add("cake-showing");opacity=.12},reducedMotion?30:1150)});

  let audioContext=null,micStream=null,detectionFrame=null,wishReleased=false;
  function stopMic(){if(detectionFrame)cancelAnimationFrame(detectionFrame);detectionFrame=null;if(micStream)micStream.getTracks().forEach(track=>track.stop());micStream=null;if(audioContext&&audioContext.state!=="closed")audioContext.close();audioContext=null}
  function releaseWish(){if(wishReleased)return;wishReleased=true;stopMic();document.body.classList.add("candle-blown");cakeState="wishReleased";document.querySelector("#cake-instruction").textContent=COPY[language][cakeState];document.querySelector("#microphone-button").hidden=true;document.querySelector("#microphone-privacy").hidden=true;document.querySelector("#blow-fallback").hidden=true;setTimeout(()=>show("encouragement-screen"),reducedMotion?100:2600)}
  async function listenForBlow(){const button=document.querySelector("#microphone-button"),fallback=document.querySelector("#blow-fallback"),instruction=document.querySelector("#cake-instruction");button.disabled=true;cakeState="listening";instruction.textContent=COPY[language][cakeState];try{if(!navigator.mediaDevices?.getUserMedia)throw new Error();micStream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}});const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw new Error();audioContext=new AC();await audioContext.resume();const source=audioContext.createMediaStreamSource(micStream),analyser=audioContext.createAnalyser();analyser.fftSize=1024;analyser.smoothingTimeConstant=.35;source.connect(analyser);const time=new Float32Array(analyser.fftSize),freq=new Uint8Array(analyser.frequencyBinCount),samples=[];let calibrated=false,threshold=.055,score=0,start=performance.now();document.body.classList.add("listening");function detect(){analyser.getFloatTimeDomainData(time);analyser.getByteFrequencyData(freq);let squares=0;for(const s of time)squares+=s*s;const rms=Math.sqrt(squares/time.length);if(!calibrated){samples.push(rms);if(performance.now()-start>(reducedMotion?100:900)){const floor=samples.reduce((a,b)=>a+b,0)/samples.length;threshold=Math.max(.045,floor*3.2);calibrated=true;cakeState="blowInstruction";instruction.textContent=COPY[language][cakeState]}detectionFrame=requestAnimationFrame(detect);return}const hz=audioContext.sampleRate/analyser.fftSize,ls=Math.floor(120/hz),le=Math.ceil(750/hz),hs=Math.floor(900/hz),he=Math.min(freq.length,Math.ceil(6000/hz));let low=0,high=0;for(let i=ls;i<le;i++)low+=freq[i];for(let i=hs;i<he;i++)high+=freq[i];low/=Math.max(1,le-ls);high/=Math.max(1,he-hs);const breath=rms>threshold&&high>Math.max(13,low*.58);score=breath?score+1:Math.max(0,score-1);if(score>=5){releaseWish();return}detectionFrame=requestAnimationFrame(detect)}detect()}catch(error){stopMic();button.hidden=true;cakeState="micUnavailable";instruction.textContent=COPY[language][cakeState];fallback.hidden=false}}
  document.querySelector("#microphone-button").addEventListener("click",listenForBlow);
  document.querySelector("#blow-fallback").addEventListener("click",releaseWish);

  const music=document.querySelector("#background-music"),musicToggle=document.querySelector("#music-toggle");music.src=CONFIG.music;let fadeTimer=null;
  function fadeMusic(target,done){clearInterval(fadeTimer);const start=music.volume,steps=reducedMotion?1:20;let step=0;fadeTimer=setInterval(()=>{step++;music.volume=Math.max(0,Math.min(1,start+(target-start)*step/steps));if(step>=steps){clearInterval(fadeTimer);if(done)done()}},reducedMotion?1:35)}
  musicToggle.addEventListener("click",async()=>{const playing=musicToggle.getAttribute("aria-pressed")==="true";if(playing){musicToggle.setAttribute("aria-pressed","false");musicToggle.textContent="♪";fadeMusic(0,()=>music.pause());return}try{music.volume=0;await music.play();musicToggle.setAttribute("aria-pressed","true");musicToggle.textContent="♫";fadeMusic(.4)}catch(error){toast(COPY[language].musicError)}});

  const voice=document.querySelector("#voice-message"),voiceButton=document.querySelector("#voice-button"),voiceIcon=document.querySelector("#voice-icon"),voiceLabel=document.querySelector("#voice-label"),voiceTime=document.querySelector("#voice-time"),voiceProgress=document.querySelector("#voice-progress");voice.src=CONFIG.voiceMessage;let resumeMusic=false;
  function formatTime(seconds){if(!Number.isFinite(seconds))return"0:00";return`${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,"0")}`}
  function voiceState(playing){voiceButton.setAttribute("aria-pressed",String(playing));voiceIcon.textContent=playing?"Ⅱ":"▶";voiceLabel.textContent=playing?COPY[language].pauseVoice:COPY[language].playVoice}
  function restoreMusic(){if(resumeMusic&&!music.paused)fadeMusic(.4);resumeMusic=false}
  voiceButton.addEventListener("click",async()=>{if(!voice.paused){voice.pause();voiceState(false);restoreMusic();return}resumeMusic=musicToggle.getAttribute("aria-pressed")==="true"&&!music.paused;if(resumeMusic)fadeMusic(.07);try{await voice.play();voiceState(true)}catch(error){voiceState(false);restoreMusic();toast(COPY[language].voiceError)}});
  voice.addEventListener("timeupdate",()=>{const duration=voice.duration,progress=Number.isFinite(duration)&&duration>0?voice.currentTime/duration:0;voiceProgress.style.setProperty("--progress",String(progress));voiceTime.textContent=Number.isFinite(duration)?`${formatTime(voice.currentTime)} / ${formatTime(duration)}`:formatTime(voice.currentTime)});voice.addEventListener("ended",()=>{voiceState(false);voice.currentTime=0;voiceProgress.style.setProperty("--progress","0");restoreMusic()});

  document.querySelector("#pride-button").addEventListener("click",()=>show("pride-screen"));
  document.querySelector("#promise-button").addEventListener("click",()=>show("promise-screen"));
  document.querySelector("#finish-button").addEventListener("click",()=>show("final-screen"));
  document.querySelector("#replay-button").addEventListener("click",()=>location.reload());
  addEventListener("pointermove",e=>{pointerX=e.clientX/innerWidth-.5;pointerY=e.clientY/innerHeight-.5},{passive:true});addEventListener("resize",resize);
  applyLanguage("zh");resize();requestAnimationFrame(draw);addEventListener("load",()=>{setTimeout(()=>document.querySelector("#loading-screen").classList.add("hidden"),420);setTimeout(()=>inputs[0].focus(),760)});
})();
