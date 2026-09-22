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
    voiceMessage:"voice-message.mp3",
    encouragementTitle:"You did your best today.",
    encouragementMessage:"I know some days ask more from you than they should. I see how hard you try, even when nobody else notices. You don’t have to be perfect for me to be proud of you.",
    prideCards:[
      {title:"You kept going",body:"Even when today felt heavy, you still showed up. That quiet strength matters more than you realise."},
      {title:"You care deeply",body:"The way you think about other people says something beautiful about your heart."},
      {title:"You are still growing",body:"Not having everything figured out does not mean you are behind. I’m proud of every step."}
    ],
    promises:[
      {icon:"🍜",title:"Your favourite meal",body:"I’ll take care of the food. You only need to show up and enjoy it."},
      {icon:"🌙",title:"A quiet walk",body:"No rush, no agenda. Just us, fresh air and as much silence as you need."},
      {icon:"♡",title:"I’ll simply listen",body:"No advice unless you ask. I’ll sit with you and hear everything."}
    ]
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

  document.querySelector("#private-for").textContent=`MADE ESPECIALLY FOR ${CONFIG.recipient.toUpperCase()}`;
  document.querySelector("#encouragement-title").textContent=CONFIG.encouragementTitle;
  document.querySelector("#encouragement-copy").textContent=CONFIG.encouragementMessage;
  document.querySelector("#voice-sender").textContent=CONFIG.sender;
  document.querySelector("#final-sender").textContent=CONFIG.sender;
  document.querySelector("#final-recipient").textContent=CONFIG.recipient;

  const prideGrid=document.querySelector("#pride-grid");
  CONFIG.prideCards.forEach((card,index)=>{const article=document.createElement("article");article.className="pride-card";article.innerHTML=`<span class="pride-number">0${index+1}</span><h3></h3><p></p>`;article.querySelector("h3").textContent=card.title;article.querySelector("p").textContent=card.body;prideGrid.appendChild(article)});
  const promiseGrid=document.querySelector("#promise-grid");
  CONFIG.promises.forEach((item,index)=>{const button=document.createElement("button");button.className="promise-card";button.type="button";button.innerHTML=`<span class="pride-number"></span><h3></h3><p></p>`;button.querySelector(".pride-number").textContent=item.icon;button.querySelector("h3").textContent=item.title;button.querySelector("p").textContent=item.body;button.addEventListener("click",()=>{document.querySelectorAll(".promise-card").forEach(card=>card.classList.remove("selected"));button.classList.add("selected");document.querySelector("#promise-confirmation").textContent=`Chosen: ${item.title}. I promise.`;document.querySelector("#finish-button").disabled=false});promiseGrid.appendChild(button)});

  async function hash(value){if(!crypto||!crypto.subtle)return value==="0901"?CONFIG.passcodeHash:"";const bytes=new TextEncoder().encode(value),digest=await crypto.subtle.digest("SHA-256",bytes);return[...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,"0")).join("")}
  const inputs=[...document.querySelectorAll("#pin-inputs input")];
  inputs.forEach((input,index)=>{input.addEventListener("input",()=>{input.value=input.value.replace(/\D/g,"").slice(-1);if(input.value&&inputs[index+1])inputs[index+1].focus()});input.addEventListener("keydown",e=>{if(e.key==="Backspace"&&!input.value&&inputs[index-1])inputs[index-1].focus()});input.addEventListener("paste",e=>{const digits=e.clipboardData.getData("text").replace(/\D/g,"").slice(0,4);if(digits.length===4){e.preventDefault();digits.split("").forEach((digit,i)=>inputs[i].value=digit)}})});
  document.querySelector("#passcode-form").addEventListener("submit",async e=>{e.preventDefault();const value=inputs.map(i=>i.value).join(""),message=document.querySelector("#form-message");if(value.length!==4||await hash(value)!==CONFIG.passcodeHash){message.textContent="Almost. Think of a date that belongs to us.";document.querySelector("#pin-inputs").classList.remove("shake");void document.querySelector("#pin-inputs").offsetWidth;document.querySelector("#pin-inputs").classList.add("shake");return}document.querySelector("#pin-inputs").classList.add("success");message.textContent="";opacity=.65;setTimeout(()=>show("hero-screen"),reducedMotion?10:450)});
  document.querySelector("#enter-button").addEventListener("click",()=>{opacity=.88;moveTo("gift",900);show("gift-screen")});
  document.querySelector("#gift-button").addEventListener("click",()=>{moveTo("burst",1500);opacity=.72;setTimeout(()=>{show("cake-screen");document.body.classList.add("cake-showing");opacity=.12},reducedMotion?30:1150)});

  let audioContext=null,micStream=null,detectionFrame=null,wishReleased=false;
  function stopMic(){if(detectionFrame)cancelAnimationFrame(detectionFrame);detectionFrame=null;if(micStream)micStream.getTracks().forEach(track=>track.stop());micStream=null;if(audioContext&&audioContext.state!=="closed")audioContext.close();audioContext=null}
  function releaseWish(){if(wishReleased)return;wishReleased=true;stopMic();document.body.classList.add("candle-blown");document.querySelector("#cake-instruction").textContent="Your wish is becoming something you can keep.";document.querySelector("#microphone-button").hidden=true;document.querySelector("#microphone-privacy").hidden=true;document.querySelector("#blow-fallback").hidden=true;setTimeout(()=>show("encouragement-screen"),reducedMotion?100:2600)}
  async function listenForBlow(){const button=document.querySelector("#microphone-button"),fallback=document.querySelector("#blow-fallback"),instruction=document.querySelector("#cake-instruction");button.disabled=true;instruction.textContent="Listening to the room…";try{if(!navigator.mediaDevices?.getUserMedia)throw new Error();micStream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}});const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw new Error();audioContext=new AC();await audioContext.resume();const source=audioContext.createMediaStreamSource(micStream),analyser=audioContext.createAnalyser();analyser.fftSize=1024;analyser.smoothingTimeConstant=.35;source.connect(analyser);const time=new Float32Array(analyser.fftSize),freq=new Uint8Array(analyser.frequencyBinCount),samples=[];let calibrated=false,threshold=.055,score=0,start=performance.now();document.body.classList.add("listening");function detect(){analyser.getFloatTimeDomainData(time);analyser.getByteFrequencyData(freq);let squares=0;for(const s of time)squares+=s*s;const rms=Math.sqrt(squares/time.length);if(!calibrated){samples.push(rms);if(performance.now()-start>(reducedMotion?100:900)){const floor=samples.reduce((a,b)=>a+b,0)/samples.length;threshold=Math.max(.045,floor*3.2);calibrated=true;instruction.textContent="Please blow the candle near your microphone."}detectionFrame=requestAnimationFrame(detect);return}const hz=audioContext.sampleRate/analyser.fftSize,ls=Math.floor(120/hz),le=Math.ceil(750/hz),hs=Math.floor(900/hz),he=Math.min(freq.length,Math.ceil(6000/hz));let low=0,high=0;for(let i=ls;i<le;i++)low+=freq[i];for(let i=hs;i<he;i++)high+=freq[i];low/=Math.max(1,le-ls);high/=Math.max(1,he-hs);const breath=rms>threshold&&high>Math.max(13,low*.58);score=breath?score+1:Math.max(0,score-1);if(score>=5){releaseWish();return}detectionFrame=requestAnimationFrame(detect)}detect()}catch(error){stopMic();button.hidden=true;instruction.textContent="Microphone access wasn’t available, but your surprise can continue.";fallback.hidden=false}}
  document.querySelector("#microphone-button").addEventListener("click",listenForBlow);
  document.querySelector("#blow-fallback").addEventListener("click",releaseWish);

  const music=document.querySelector("#background-music"),musicToggle=document.querySelector("#music-toggle");music.src=CONFIG.music;let fadeTimer=null;
  function fadeMusic(target,done){clearInterval(fadeTimer);const start=music.volume,steps=reducedMotion?1:20;let step=0;fadeTimer=setInterval(()=>{step++;music.volume=Math.max(0,Math.min(1,start+(target-start)*step/steps));if(step>=steps){clearInterval(fadeTimer);if(done)done()}},reducedMotion?1:35)}
  musicToggle.addEventListener("click",async()=>{const playing=musicToggle.getAttribute("aria-pressed")==="true";if(playing){musicToggle.setAttribute("aria-pressed","false");musicToggle.textContent="♪";fadeMusic(0,()=>music.pause());return}try{music.volume=0;await music.play();musicToggle.setAttribute("aria-pressed","true");musicToggle.textContent="♫";fadeMusic(.4)}catch(error){toast("Couldn’t play music.mp3. Confirm it is a real MP3 in the repository root.")}});

  const voice=document.querySelector("#voice-message"),voiceButton=document.querySelector("#voice-button"),voiceIcon=document.querySelector("#voice-icon"),voiceLabel=document.querySelector("#voice-label"),voiceTime=document.querySelector("#voice-time"),voiceProgress=document.querySelector("#voice-progress");voice.src=CONFIG.voiceMessage;let resumeMusic=false;
  function formatTime(seconds){if(!Number.isFinite(seconds))return"0:00";return`${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,"0")}`}
  function voiceState(playing){voiceButton.setAttribute("aria-pressed",String(playing));voiceIcon.textContent=playing?"Ⅱ":"▶";voiceLabel.textContent=playing?"Pause my message":"Play my message"}
  function restoreMusic(){if(resumeMusic&&!music.paused)fadeMusic(.4);resumeMusic=false}
  voiceButton.addEventListener("click",async()=>{if(!voice.paused){voice.pause();voiceState(false);restoreMusic();return}resumeMusic=musicToggle.getAttribute("aria-pressed")==="true"&&!music.paused;if(resumeMusic)fadeMusic(.07);try{await voice.play();voiceState(true)}catch(error){voiceState(false);restoreMusic();toast("Upload voice-message.mp3 to the repository root to play your message.")}});
  voice.addEventListener("timeupdate",()=>{const duration=voice.duration,progress=Number.isFinite(duration)&&duration>0?voice.currentTime/duration:0;voiceProgress.style.setProperty("--progress",String(progress));voiceTime.textContent=Number.isFinite(duration)?`${formatTime(voice.currentTime)} / ${formatTime(duration)}`:formatTime(voice.currentTime)});voice.addEventListener("ended",()=>{voiceState(false);voice.currentTime=0;voiceProgress.style.setProperty("--progress","0");restoreMusic()});

  document.querySelector("#pride-button").addEventListener("click",()=>show("pride-screen"));
  document.querySelector("#promise-button").addEventListener("click",()=>show("promise-screen"));
  document.querySelector("#finish-button").addEventListener("click",()=>show("final-screen"));
  document.querySelector("#replay-button").addEventListener("click",()=>location.reload());
  addEventListener("pointermove",e=>{pointerX=e.clientX/innerWidth-.5;pointerY=e.clientY/innerHeight-.5},{passive:true});addEventListener("resize",resize);
  resize();requestAnimationFrame(draw);addEventListener("load",()=>{setTimeout(()=>document.querySelector("#loading-screen").classList.add("hidden"),420);setTimeout(()=>inputs[0].focus(),760)});
})();
