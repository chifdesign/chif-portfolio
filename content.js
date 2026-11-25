/* =====================================================================
   PORTFOLIO TEMPLATE — content.js
   ---------------------------------------------------------------------
   이 파일 하나만 고치면 사이트 전체 내용이 바뀝니다.
   index.html은 건드리지 않아도 됩니다.

   · 문자열은 '작은따옴표' 안에 씁니다. 문장 안에 ' 가 필요하면 ’ 를 쓰세요.
   · 항목 끝의 쉼표(,)를 지우지 마세요.
   · 이미지 경로는 img/ 폴더 기준입니다. (예: 'img/logo.png')
   · works의 imgs에는 확장자 없이 이름만 씁니다. (img/d1-1.jpg → 'd1-1')
   ===================================================================== */

window.SITE = {

  /* ---------- 1. 기본 정보 ---------- */
  brand: {
    name:  'CHIF',            // 인트로·세로 띠 등에 쓰이는 브랜드명
    person:'CHIF STUDIO',           // About 창 제목에 쓰이는 이름
    logo:  'img/logo.png',        // 검정 로고 PNG(투명 배경). 어두운 화면에서는 자동으로 흰색 반전
    title: 'CHIF — Portfolio',// 브라우저 탭 제목
    copyright: '© 2026 Chif design'
  },

  location: {
    timezone: 'Asia/Seoul',       // 오른쪽 위 시계 기준 (예: 'Europe/Paris', 'America/New_York')
    label:    'Asia / Seoul',     // 시계 옆에 표시되는 문구
    basedIn:  'Seoul, Korea'      // Contact 창에 표시
  },

  contact: {
    email:     'hello@example.com',
    instagram: 'https://www.instagram.com/your_id/',   // 비우면('') 인스타 버튼이 숨겨집니다
    instagramHandle: '@your_id'
  },

  /* ---------- 2. 섹션 이름·포인트 색 ----------
     키(consulting / strategy / design)는 화면 레이아웃 종류라서 바꾸지 말고,
     label만 원하는 이름으로 바꾸세요. (예: 'Work', 'Lab', 'Archive')
       consulting → 어두운 글라스 카드 + 리스트형 첫 화면
       strategy   → 가로 카드 슬라이더 + 정보 창
       design     → 스크롤 리스트 / 썸네일 그리드                      */
  navLabel: 'CHIF —',
  sections: {
    consulting: { label: 'About', color: '#ff5a1f' },
    strategy:   { label: 'Featured',   color: '#2f5bff' },
    design:     { label: 'Work',     color: '#e3337f' }
  },

  /* ---------- 3. 인트로(플래시) 페이지 ---------- */
  intro: {
    enabled: true,                       // false면 인트로 없이 바로 시작
    topCenter: 'Portfolio 2020 — 2026',
    hint: 'Hold to enter · Click to skip',
    // 슬래시(/) 양옆에 번갈아 나오는 단어 쌍. 왼쪽 단어가 섹션 label과 같으면 왼쪽 아래 섹션 표시가 켜집니다.
    pairs: [
      ['CHIF',     'Studio'],
      ['About',    'Chance encounters'],
      ['About',    'Shared imagination'],
      ['Featured', 'Selected projects'],
      ['Work',     'Brand identity'],
      ['Work',     'Motion'],
      ['Seoul',     '2026']
    ],
    finalRight: 'Enter'                  // 100%가 되면 '브랜드명 / Enter'로 바뀝니다
  },

  /* ---------- 4. 첫 화면(About 섹션) 문구 ---------- */
  consulting: {
    lead: 'CHIF is a brand & design studio. <br>Our work begins with chance encounters that grow into <br>relationships. The ideas sparked by those connections <br>come together and gradually take shape as something new.<br>',
    leadSub: 'CHIF는 우연한 만남으로 인연을 맺고, 그 안에서 시작된 상상들이 모여 <br>새로운 형태를 만들어가는 브랜드 디자인 스튜디오입니다.',
    miniLines: ['CHIF<br>Brand &amp; Design Studio'],
    whoTitle: 'Brand Development',
    who:      '브랜드의 방향과 아이덴티티를 설계하고, 2D·3D 비주얼과 캠페인, <br>공간을 통해 새로운 브랜드의 론칭과 기존 브랜드의 확장을 함께합니다.',
    services: ['Branding', '2D & 3D Visuals', 'Campaign Direction', 'Space & VMD'],
    servicePrefix: '',                  // C01. C02. … 처럼 번호 앞에 붙는 글자
    segments: [
      ['New brand',     '네이밍과 첫 아이덴티티가 필요한 런칭 단계의 브랜드.'],
      ['Growing brand', '채널이 늘어나며 비주얼 기준을 다시 세워야 하는 브랜드.'],
      ['In-house team', '디자인 파트의 역할과 협업 구조를 정리해야 하는 팀.'],
      ['In-house team', '디자인 파트의 역할과 협업 구조를 정리해야 하는 팀.']
    ],
    casesTitle:  'Selected work',        // 이 섹션(consulting) 작업 목록 제목
    fieldsTitle: 'Fields of practice',   // 비우면 아래 목록이 숨겨집니다
    fields: [
      ['Brand Strategy', '브랜드 전략 구조 설계'],
      ['Brand Guide',    '브랜드·비주얼 가이드 수립과 개정'],
      ['Visual System',  '멀티브랜드 통합 시각 체계']
    ],
    bgColors: ['#5c5a55', '#7a4a44', '#4f5560']   // 카드 뒤 블러 배경 색 3개
  },

  /* ---------- 5. About 창 ---------- */
  about: {
    headline: 'Chance / Imagination / Form',
    text: '우연한 만남에서 시작된 각자의 상상을 모아 브랜드의 이름, 이미지, 공간에 새로운 형태를 부여합니다.',
    rows: [
      ['About',    'CHIF의 철학과 작업 방식'],
      ['Featured', '선별한 프로젝트의 배경과 디자인 과정'],
      ['Work',     '브랜딩·그래픽·모션 프로젝트 아카이브']
    ],
    image: 'img/about.jpg',              // 이력서·포스터 이미지. 비우면 숨겨집니다

    /* (선택) 두 번째 탭: 연도별 기록. 쓰지 않으려면 record: null 로 두세요. */
    record: {
      tab: 'Record',
      headline: 'Five years of <i>work</i> that stayed.',
      footnote: '2022 — 2026 · 한 줄 요약을 쓰세요.',
      stats: [ ['years','Years'], ['items','Projects'], ['new','First built'] ],
      years: [
        { y:'2024', label:'한 해를 요약하는 제목', marks:['승진', '수상'], items:[
          { n:'프로젝트 이름', p:'해결한 문제', s:'결과·성과를 한두 문장으로.', c:'Brand System', nw:1 },
          { n:'프로젝트 이름', p:'해결한 문제', s:'결과·성과를 한두 문장으로.', c:'Design' }
        ]},
        { y:'2025', label:'한 해를 요약하는 제목', marks:[], items:[
          { n:'프로젝트 이름', p:'해결한 문제', s:'결과·성과를 한두 문장으로.', c:'Operation', nw:1 }
        ]}
      ]
    }
  },

  contactHeadline: 'Let’s make something <i>together</i>.',

  /* ---------- 6. (선택) Featured 카드 세로 띠에 넣을 클라이언트 로고 ----------
     client 이름에 키워드가 들어가면 브랜드명 대신 이 로고(세로로 돌린 PNG)가 들어갑니다. */
  stripLogos: {
    // 'ClientName': 'img/client-logo-vertical.png'
  },

  /* ---------- 7. 작업 목록 ----------
     id     : 영문·숫자·하이픈만 (주소 #id 로 쓰임, 겹치면 안 됨)
     sec    : 'consulting' | 'strategy' | 'design'  (어느 섹션에 보일지)
     tag    : design 섹션 필터 이름 (예: 'Branding', 'Poster')
     title, sub, client, year : 제목·부제·클라이언트·연도
     imgs   : 이미지 이름 배열. 첫 장이 썸네일. 비우면 글자 커버가 나옵니다.
     video  : (선택) 'd/xxx.mp4' — 카드에서 자동 반복 재생, 뷰어 첫 장
     poster : (선택) 영상 정지 화면 이미지 (확장자 포함)
     desc   : 설명 문단 배열
     meta   : 오른쪽 정보 (키: 값). 링크도 넣을 수 있어요.

     이미지 권장 사이즈
       consulting : 가로 1600px 이상 (블러 배경 + 뷰어)
       strategy   : 3:2 — 2400×1600px
       design     : 16:9 — 1920×1080px
       용량        : 장당 300–600KB(JPG) 권장                           */
  works: [
    // ---------- consulting ----------
    { id:'project-one', sec:'consulting', title:'Project One', sub:'Brand concept · Naming', client:'Personal work', year:'2025',
      imgs:['c1-1','c1-2'],
      desc:['프로젝트 설명 첫 문단.', '두 번째 문단이 필요하면 이렇게 이어서 씁니다.'],
      meta:{ Scope:'Naming, Identity, Web', Link:'<a class="hov" href="https://example.com" target="_blank" rel="noopener">example.com ↗</a>' } },
    { id:'project-two', sec:'consulting', title:'Project Two', sub:'Space brand', client:'Personal work', year:'2024',
      imgs:['c2-1','c2-2'], desc:['프로젝트 설명.'], meta:{ Scope:'Concept, Identity' } },
    { id:'project-three', sec:'consulting', title:'Project Three', sub:'Furniture brand', client:'Personal work', year:'2023',
      imgs:['c3-1','c3-2'], desc:['프로젝트 설명.'], meta:{ Scope:'Visual system' } },

    // ---------- strategy ----------
    { id:'Beauty', sec:'strategy', title:'Beauty', sub:'Branding · Packaging · 2D & 3D Visuals · Campaign · VMD', client:'Client', year:'2022 — 2026',
      imgs:['s1-1','s1-2'], desc:['<br><br>skin1004 <br>commonlabs'], meta:{} },
    { id:'F&B', sec:'strategy', title:'Food & Beverage', sub:'Advertising · Campaign', client:'Client', year:'2025',
      imgs:['s2-1'], desc:['<br><br>Bar IN YEON'], meta:{ Format:'OOH, Key visual' } },
    { id:'Life Style', sec:'strategy', title:'Life Style', sub:'Product', client:'Client', year:'2026',
      imgs:['s3-1'], desc:['제안 설명.'], meta:{ Scope:'Product concept' } },
    { id:'Entertainment', sec:'strategy', title:'Entertainment', sub:'No image yet', client:'Client', year:'2026',
      imgs:[], desc:['이미지가 없으면 회색 카드로 표시됩니다.'], meta:{} },

    // ---------- design ----------
    // 각 작업은 첫 번째 JPG와 같은 이름의 MP4를 자동으로 찾습니다.
    // 예: img/d1-1.mp4 (H.264) → 첫 번째 Design 작업의 리스트·그리드·상세 영상.
    // MP4가 없으면 img/d1-1.jpg를 사용합니다. imgs에는 확장자를 쓰지 마세요.
    // 두 번째~여섯 번째 작업: d2-1.mp4, d3-1.mp4, d4-1.mp4, d5-1.mp4, d6-1.mp4.
    // 영상 자동 선택은 함께 제공한 index.html에서 실행됩니다.
    { id:'design-one',   sec:'design', tag:'3D motion', title:'COSMAX', sub:'Mineral Sunscreen Visualization', client:'COSMAX', year:'2026.09', imgs:['d1-1','d1-2'], desc:['코스맥스의 수분 기반 미네랄 선크림이 피부 본연의 톤을 살리는 과정을 3D 모션으로 표현했습니다. 성분 입자의 구조에서 시작해 한 방울의 크림이 피부 위에 퍼지는 장면으로 이어지며, 기존 미네랄 선크림의 백탁을 개선한 포뮬러의 투명한 마무리감을 보여줍니다.'], meta:{ Format:'3D Animation, Formulation Visualization' } },
    { id:'design-two',   sec:'design', tag:'Branding',   title:'SKIN1004', sub:'Concert poster', client:'Client B', year:'2025', imgs:['d2-1','d2-2'], desc:['짧은 설명.'], meta:{ Format:'Poster' } },
    { id:'design-three', sec:'design', tag:'3D motion', title:'NO力 STUDIO', sub:'NO力 Studio Brand Film', client:'NO力 Studio', year:'2025.04', imgs:['d3-1','d3-2','d3-3','d3-4','d3-5'], desc:['소리와 스타일을 담은 청각 보조 기기 브랜드 ‘노력 스튜디오’의 필름 영상.'], meta:{ Format:'Brand Identity · Motion Design · Brand Film' } },
    { id:'design-four',  sec:'design', tag:'Web Design', title:'COMMONLABS',  sub:'Key Visual & Web Design',            client:'commonlabs', year:'2024.02', imgs:['d4-1','d4-2','d4-3','d4-4','d4-5'],        desc:['커먼랩스 브랜드 비주얼과 웹사이트 디자인.'], meta:{ Format:'Brand Identity · Key Visual · Web Design' } },
    { id:'design-five',  sec:'design', tag:'Editorial',title:'SKIN1004',  sub:'Magazine',             client:'Client D', year:'2023', imgs:['d5-1','d5-2','d5-3','d5-4','d5-5','d5-6','d5-7'],        desc:['짧은 설명.'], meta:{ Format:'Editorial' } },
    { id:'design-six',   sec:'design', tag:'Branding', title:'SM ENT RIIZE <br>GET A GUITAR POP-UP',   sub:'Album Package & Goods Design',              client:'SM Entertainment', year:'2023.05', imgs:['d6-1','d6-2','d6-3','d6-4','d6-5'],        desc:['공연 아이덴티티, 포스터, 아티스트 SNS 그래픽과 상세 페이지.'], meta:{ Format:'poster, social' } },
    // Work 07–20. '—'는 실제 부제·클라이언트·연도·형식으로 교체하세요.
    // 대표 미디어는 img/d번호-1.jpg 또는 같은 이름의 MP4를 사용합니다.
    { id:'design-seven', sec:'design', tag:'Branding', title:'NO力 STUDIO', sub:'NO力 Studio Branding', client:'NO力 STUDIO', year:'2026.01', imgs:['d7-1','d7-2','d7-3','d7-4','d7-5'], desc:['짧은 설명.'], meta:{ Format:'—' } },
    { id:'design-eight', sec:'design', tag:'Branding', title:'The Nostalgia Hotel', sub:'Hotel Brand Identity', client:'The Nostalgia Hotel', year:'2024.09', imgs:['d8-1','d8-2','d8-3'], desc:['타향에서 고향을 그리워하는 이들을 위한 호텔. 향수(鄕愁)를 공간 경험으로 풀어 로고, 어메니티, 객실, 다이닝까지 브랜드 세계관을 설계했습니다.'], meta:{ Format:'Brand Identity · Amenity · Space Experience' } },
    { id:'design-nine', sec:'design', tag:'Branding', title:'alotof', sub:'Dumpling Restaurant Brand Identity', client:'alotof', year:'2023.04', imgs:['d9-1','d9-2','d9-3','d9-4'], desc:['"다다익선"을 콘셉트로 한 아메리칸 차이니즈 덤플링 레스토랑 브랜드. 로고, 패키지, 웹사이트, 인쇄물까지 아이덴티티를 설계했습니다..'], meta:{ Format:'Brand Identity · Logo · Packaging · Web' } },
    { id:'design-ten', sec:'design', tag:'Campaign', title:'aiedo', sub:'Product Visual & Campaign', client:'aiedo', year:'2025.04', imgs:['d10-1','d10-2','d10-3','d10-4','d10-5'], desc:['핸드크림·필로우 미스트·탈취제 라인의 제품 비주얼과 캠페인 컷.'], meta:{ Format:'Product Visual · Campaign' } },
    { id:'design-eleven', sec:'design', tag:'Branding', title:'Sometimes FUNNYTURE', sub:'Furniture Select Shop Brand Identity', client:'Sometimes Funnyture', year:'2022.02', imgs:['d11-1','d11-2','d11-3'], desc:['"질서 속의 자유"를 그리드로 시각화한 가구 셀렉트숍 브랜드. 로고, 모바일·웹, 패키지, 옥외 적용까지 아이덴티티를 설계했습니다.'], meta:{ Format:'Brand Identity · Logo · Web · Package' } },
    { id:'design-twelve', sec:'design', tag:'Branding', title:'Saahrang', sub:'—', client:'—', year:'—', imgs:['d12-1'], desc:['짧은 설명.'], meta:{ Format:'—' } },
    { id:'design-thirteen', sec:'design', tag:'Branding', title:'Bar IN YEON', sub:'—', client:'—', year:'—', imgs:['d13-1'], desc:['짧은 설명.'], meta:{ Format:'—' } },
    { id:'design-fourteen', sec:'design', tag:'Uncategorized', title:'Round and Round Vol.01', sub:'—', client:'—', year:'—', imgs:['d14-1'], desc:['짧은 설명.'], meta:{ Format:'—' } },
    { id:'design-fifteen', sec:'design', tag:'Branding', title:'Dauspice', sub:'Apparel Brand Identity & Graphic', client:'Dauspice', year:'2023.03', imgs:['d15-1','d15-2','d15-3','d15-4','d15-5'], desc:['블랙레터 로고타입과 동전 엠블럼으로 브랜드 아이덴티티를 만들고, 티셔츠 그래픽과 룩북 비주얼까지 확장했습니다.'], meta:{ Format:'Logotype · Typeface · Emblem · Apparel Graphic · Lookbook' } },
    { id:'design-sixteen', sec:'design', tag:'Uncategorized', title:'Design Sixteen', sub:'—', client:'—', year:'—', imgs:['d16-1'], desc:['짧은 설명.'], meta:{ Format:'—' } },
    { id:'design-seventeen', sec:'design', tag:'Uncategorized', title:'Design Seventeen', sub:'—', client:'—', year:'—', imgs:['d17-1'], desc:['짧은 설명.'], meta:{ Format:'—' } },
    { id:'design-eighteen', sec:'design', tag:'Uncategorized', title:'Design Eighteen', sub:'—', client:'—', year:'—', imgs:['d18-1'], desc:['짧은 설명.'], meta:{ Format:'—' } },
    { id:'design-nineteen', sec:'design', tag:'Uncategorized', title:'Design Nineteen', sub:'—', client:'—', year:'—', imgs:['d19-1'], desc:['짧은 설명.'], meta:{ Format:'—' } },
    { id:'design-twenty', sec:'design', tag:'Uncategorized', title:'Design Twenty', sub:'—', client:'—', year:'—', imgs:['d20-1'], desc:['짧은 설명.'], meta:{ Format:'—' } }
  ]
};

/* Portfolio interactions */
const C=window.SITE;
const SECTIONS=C.sections;
const WORKS=C.works.map(w=>Object.assign({imgs:[],desc:[],meta:{},sub:'',client:'',year:'—'},w));
/* ========================================================= */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const mobile=()=>innerWidth<=820, pad=n=>String(n).padStart(2,'0');
const bySec=k=>WORKS.filter(w=>w.sec===k);
const accentOf=w=>w.accent||SECTIONS[w.sec].color;
let SEC='consulting';

function metaHTML(w){const m=Object.entries(w.meta||{}).map(([k,v])=>`<div class="m"><span>${k}:</span> ${v}</div>`).join('');return w.desc.map(p=>`<p>${p}</p>`).join('')+(m?`<p style="margin-top:9px">${m}</p>`:'')}
function cover(w){
  const d=document.createElement('div');d.className='cover s-'+w.sec;d.style.setProperty('--c',accentOf(w));
  d.innerHTML=`<div class="k up"><span>${SECTIONS[w.sec].label}</span><span>${w.year}</span></div>
    <h3>${w.title.replace(/·/g,'<i style="opacity:1;font-size:1em">&amp;</i>')}<br><i>${w.sub||''}</i></h3>
    <div class="k up" style="align-items:flex-end"><span>${w.client}</span><span class="n">${pad(bySec(w.sec).indexOf(w)+1)}</span></div>`;
  return d;
}

function detectDesignVideo(work) {
  // 영상이 재생 중이 아닐 때 보여줄 썸네일: poster를 따로 지정하지 않았다면 첫 번째 JPG를 사용
  if (work.video && !work.poster && work.imgs.length) work.poster = work.imgs[0] + '.jpg';
  if (work.video || !work.imgs.length) return Promise.resolve();
  const filename = work.imgs[0] + '.mp4';
  return new Promise(resolve => {
    const probe = document.createElement('video');
    const finish = () => {
      probe.onloadedmetadata = probe.onerror = null;
      probe.removeAttribute('src');
      probe.load();
      resolve();
    };
    probe.preload = 'metadata';
    probe.onloadedmetadata = () => {
      if (probe.videoWidth > 0) {
        work.video = filename;
        if (!work.poster) work.poster = work.imgs[0] + '.jpg';   // 첫 JPG = 영상 썸네일
        work.imgs = work.imgs.slice(1);
      }
      finish();
    };
    probe.onerror = finish;
    probe.src = 'img/' + filename;
  });
}
async function prepareWorkMedia(work) {
  await detectDesignVideo(work);
    if (work.video || !work.imgs.length) return;
    const image = new Image();
    image.src = 'img/' + work.imgs[0] + '.jpg';
    try {
      await image.decode();
    } catch {
      work.imgs = work.imgs.slice(1);
    }
}
const vItems=w=>(w.video?['@'+w.video]:[]).concat(w.imgs);
function vImg(){
  const w=V.w,box=$('#v-img'),L=vItems(w);box.innerHTML='';
  if(L.length){const it=L[V.k];
    if(it[0]==='@'){const v=document.createElement('video');Object.assign(v,{src:'img/'+it.slice(1),autoplay:true,muted:true,loop:true,controls:true,playsInline:true});v.style.cssText='max-width:100%;max-height:70vh;display:block';v.onclick=e=>e.stopPropagation();box.appendChild(v)}
    else{const im=new Image();im.src=`img/${it}.jpg`;im.alt=w.title;box.appendChild(im)}}
  else box.appendChild(cover(w));
  if(L.length>1){[['l','‹',-1],['r','›',1]].forEach(([c,t,d])=>{const b=document.createElement('button');b.className='v-nav '+c;b.textContent=t;b.onclick=e=>{e.stopPropagation();V.k=(V.k+d+L.length)%L.length;vImg()};box.appendChild(b)})}
  $('#v-imgn').style.display=$('#v-dots').style.display=L.length>1?'':'none';
  $('#v-imgn').textContent=`Images ${V.k+1} / ${L.length}`;
  const d=$('#v-dots');d.innerHTML='';L.forEach((it,j)=>{const b=document.createElement('button');if(j===V.k)b.className='on';
    b.innerHTML=it[0]==='@'?'▶':`<img src="img/${it}.jpg" alt="">`;b.onclick=()=>{V.k=j;vImg()};d.appendChild(b)});
  const on=d.querySelector('.on');if(on && !document.body.hasAttribute('data-project-page'))on.scrollIntoView({block:'nearest',inline:'nearest'});
}
function advanceImage(){const n=vItems(V.w).length;if(n>1){V.k=(V.k+1)%n;vImg()}};
const V={w:null,k:0,list:[]};

function workURL(work, tag) {
  const query = new URLSearchParams({id: work.id});
  if (tag && tag !== 'All' && work.tag === tag) query.set('tag', tag);
  return 'project.html?' + query;
}

async function renderProject() {
  const params = new URLSearchParams(location.search);
  const works = bySec('design');
  const w = works.find(item => item.id === params.get('id'));
  if (!w) {
    location.replace('index.html#design');
    return;
  }
  const tag = params.get('tag');
  const list = tag && tag === w.tag ? works.filter(item => item.tag === tag) : works;
  const index = list.indexOf(w);
  document.title = w.title + ' — ' + C.brand.name;
  $('#v-head').textContent = SECTIONS.design.label + ' — ' + pad(index + 1) + ' / ' + pad(list.length);
  $('#v-title').textContent = w.title;
  const sub = document.createElement('small');
  sub.textContent = w.sub;
  $('#v-title').append(sub);
  $('#v-client').textContent = w.client || '—';
  $('#v-year').textContent = w.year || '—';
  $('#v-desc').innerHTML = metaHTML(w);
  $('#v-prev').href = workURL(list[(index + list.length - 1) % list.length], tag);
  $('#v-next').href = workURL(list[(index + 1) % list.length], tag);
  await prepareWorkMedia(w);
  const gallery = $('#v-img');
  if (w.video) {
    const video = document.createElement('video');
    Object.assign(video, {src: 'img/' + w.video, controls: true, muted: true,
      autoplay: true, loop: true, playsInline: true});
    video.setAttribute('aria-label', w.title);
    if (w.poster) video.poster = 'img/' + w.poster;
    gallery.append(video);
  }
  w.imgs.forEach((name, index) => {
    const image = new Image();
    image.alt = w.title + ' — ' + (index + 1);
    image.src = 'img/' + name + '.jpg';
    gallery.append(image);
  });
  if (!w.video && !w.imgs.length) gallery.append(cover(w));
}
if (document.body.hasAttribute('data-project-page')) renderProject();
else initPortfolio();

function initPortfolio() {

/* ---------- render content.js ---------- */
const esc=t=>String(t==null?'':t);
document.title=C.brand.title||C.brand.name;
[$('#logo-img'),$('#i-logo')].forEach(i=>{i.src=C.brand.logo;i.alt=C.brand.name});$('#home').setAttribute('aria-label',C.brand.name);
$('#nav-lbl').innerHTML=esc(C.navLabel);
$('#go-s').textContent=SECTIONS.strategy.label;$('#go-d').textContent=SECTIONS.design.label;
{const ig=$('#f-ig');if(C.contact.instagram)ig.href=C.contact.instagram;else ig.remove();$('#f-mail').textContent=C.contact.email}
{const cc=C.consulting;
 $('#c-bg').innerHTML=(cc.bgColors||[]).slice(0,3).map((c,i)=>['width:46vw;height:46vw;left:4vw;top:30vh','width:38vw;height:38vw;right:6vw;top:6vh;animation-delay:-6s','width:30vw;height:30vw;left:38vw;bottom:-6vh;animation-delay:-12s'][i]).map((st,i)=>`<i style="${st};background:${cc.bgColors[i]}"></i>`).join('');
 $('#c-lead').innerHTML=esc(cc.lead)+(cc.leadSub?`<span class="ko">${cc.leadSub}</span>`:'');
 $('#c-mini').innerHTML=(cc.miniLines||[]).join('<br>');$('#c-copy').innerHTML=`${esc(C.brand.copyright)}<br>All rights reserved`;
 $('#c-whot').innerHTML=esc(cc.whoTitle);$('#c-who').innerHTML=esc(cc.who);
 $('#c-services').innerHTML=(cc.services||[]).map((t,i)=>`<span>${cc.servicePrefix||''}${pad(i+1)}.</span><span>${t}</span>`).join('');
 $('#c-segs').innerHTML=(cc.segments||[]).map(([a,b])=>`<div class="c-seg"><span>${a}</span><span>${b}</span></div>`).join('');
 $('#c-casest').innerHTML=esc(cc.casesTitle);
 if(cc.fieldsTitle&&(cc.fields||[]).length){$('#c-fieldst').innerHTML=cc.fieldsTitle;$('#c-fields').innerHTML=cc.fields.map(([a,b])=>`<span>${a}</span><span>${b}</span>`).join('')}else{$('#c-fieldst').remove();$('#c-fields').remove()}}
{const ab=C.about;
 $$('[data-open="about"]').forEach(button=>button.textContent='Studio profile');
 $('#ab-title').textContent='Studio profile — '+C.brand.person;$('#ab-h').innerHTML=esc(ab.headline);$('#ab-txt').innerHTML=esc(ab.text);
 $('#ab-rows').innerHTML=(ab.rows||[]).map(([a,b])=>`<tr><td class="up">${a}</td><td>${b}</td></tr>`).join('');
 if(ab.image){$('#ab-img').src=ab.image;$('#ab-img').alt=C.brand.person}else $('#ab-img').remove();
 if(ab.record){$('#ab-rec-tab').textContent=ab.record.tab||'Record';$('#rec-h').innerHTML=esc(ab.record.headline);$('#rec-foot').innerHTML=esc(ab.record.footnote)}else $('#ab-tabs').remove()}
$('#ct-h').innerHTML=esc(C.contactHeadline);
$('#ct-rows').innerHTML=`<tr><td class="up">Email</td><td>${esc(C.contact.email)} &nbsp;<button class="hov up" id="copy">Copy</button> <span id="copied" class="up"></span></td></tr>`
  +(C.contact.instagram?`<tr><td class="up">Instagram</td><td><a class="hov" href="${C.contact.instagram}" target="_blank" rel="noopener">${esc(C.contact.instagramHandle||'Instagram')}</a></td></tr>`:'')
  +(C.location.basedIn?`<tr><td class="up">Based in</td><td>${esc(C.location.basedIn)}</td></tr>`:'');
const stripLogo=w=>{const m=Object.entries(C.stripLogos||{}).find(([k])=>String(w.client).includes(k));return m?`<img class="ed-logo" src="${m[1]}" alt="${m[0]}">`:`<span>${esc(C.brand.name)}</span>`};

/* ---------- sections nav / switching ---------- */
const secNav=$('#sections');
Object.entries(SECTIONS).forEach(([k,v])=>{
  const b=document.createElement('button');b.className='hov';b.dataset.sec=k;
  b.innerHTML=`${v.label}<sup>${pad(bySec(k).length)}</sup>`;b.onclick=()=>show(k);secNav.appendChild(b);
});
function setViewing(t){$('#viewing').textContent='Viewing: '+t}
const workThumbnail = '#d-grid .sq, #d-reel .im';
function updateWorkViewing(element) {
  if (SEC !== 'design') return;
  const thumbnail = element instanceof Element && element.closest(workThumbnail);
  const title = thumbnail && thumbnail.getAttribute('aria-label');
  setViewing(title ? SECTIONS.design.label + ' / ' + title : 'CHIF PROJCET');
}
document.addEventListener('pointerover', event => {
  if (event.pointerType !== 'touch') updateWorkViewing(event.target);
});
document.addEventListener('pointerout', event => {
  if (event.pointerType !== 'touch' && !event.relatedTarget) updateWorkViewing(null);
});

function setAccent(c){document.documentElement.style.setProperty('--accent',c)}
function show(k,opts={}){
  $('#s-design').hidden = k !== 'design';
  if ($('#index').classList.contains('open')) toggleIndex(false);
  peek.classList.remove('on');
  peek.replaceChildren();
  SEC=k;document.body.dataset.sec=k;
  $$('.sec').forEach(s=>s.classList.toggle('on',s.id==='s-'+k));
  $$('#sections button').forEach(b=>b.classList.toggle('on',b.dataset.sec===k));
  setAccent(SECTIONS[k].color);
  if(k!=='strategy'&&S.syncVideos)S.syncVideos();
  if(k==='consulting'){setViewing(SECTIONS.consulting.label+' / Overview')}
  if(k==='strategy'){let i=opts.id?S.view.findIndex(w=>w.id===opts.id):S.cur;S.cur=Math.max(0,i);S.update()}
  if(k==='design'){updateWorkViewing(null);if(opts.id)setTimeout(()=>openViewer(WORKS.find(w=>w.id===opts.id)),350)}
  if(k==='consulting'&&opts.id)setTimeout(()=>openViewer(WORKS.find(w=>w.id===opts.id)),350);
  if(k!=='strategy')try{if(location.hash.slice(1)!==k)history.replaceState(null,'','#'+k)}catch(e){}
}
$$('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));window.__showSec=k=>show(k);
$('#home').onclick=e=>{e.preventDefault();toggleIndex(false);show('consulting')};

/* ---------- clock ---------- */
function tick(){let t;try{t=new Intl.DateTimeFormat('en-GB',{timeZone:C.location.timezone,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date())}catch(e){t=new Date().toTimeString().slice(0,8)}
  $('#clock').textContent=`${t}${C.location.label?' / '+C.location.label:''}`}
tick();setInterval(tick,1000);

/* ================= CONSULTING ================= */
const cBg=$('#c-bg'), cImgs={};
bySec('consulting').forEach((w,i)=>{
  const r=document.createElement('div');r.className='c-case';
  r.innerHTML=`<span>${pad(i+1)}.</span><span>${w.title} <span class="y">— ${w.sub}</span></span><span class="y">${w.year}</span>`;
  if(w.imgs.length){const im=new Image();im.src=`img/${w.imgs[0]}.jpg`;im.alt='';cBg.appendChild(im);cImgs[w.id]=im}
  r.onmouseenter=()=>{Object.values(cImgs).forEach(x=>x.classList.remove('on'));if(cImgs[w.id])cImgs[w.id].classList.add('on');setViewing(SECTIONS.consulting.label+' / '+w.title);cursorLabel('Open case')};
  r.onmouseleave=()=>{Object.values(cImgs).forEach(x=>x.classList.remove('on'));setViewing(SECTIONS.consulting.label+' / Overview');cursorLabel('')};
  r.onclick=()=>{cursorLabel('');openViewer(w)};
  $('#c-cases').appendChild(r);
});
$$('[data-mode]').forEach(b=>b.onclick=()=>{$$('[data-mode]').forEach(x=>x.classList.toggle('on',x===b));$('#c-card').classList.toggle('light',b.dataset.mode==='light')});

/* ================= STRATEGY ================= */
const S={view:bySec('strategy'),cur:0,slides:[],imgIdx:{}};
const stage=$('#stage');
const ROMAN=n=>['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'][n]||n;
function edCard(w,i,total){
  const d=document.createElement('div');d.className='ed'+(w.imgs.length||w.video?'':' noimg');
  const years=String(w.year).match(/\d{4}/g)||[];const lastY=years.length?years[years.length-1]:'—';
  d.innerHTML=`<div class="ed-bg">${w.video?`<video class="show" src="img/${w.video}" ${w.poster?`poster="img/${w.poster}"`:''} muted loop playsinline preload="auto"></video>`:''}${w.imgs.map((n,j)=>`<img src="img/${n}.jpg" alt="${w.title}" draggable="false" class="${j?'':'show'}">`).join('')}</div>
   <div class="ed-main">
     <div class="ed-top"><span>${SECTIONS[w.sec].label}</span><span>${ROMAN(i+1)}</span><span>${ROMAN(total)}</span></div>
     <div class="ed-mid"><div>${w.year}</div><div class="sb">${w.sub||''}</div><h3>${w.title}</h3></div>
     <p class="ed-body"><b>${w.client},</b> ${w.desc.join(' ')} ${Object.entries(w.meta||{}).map(([k,v])=>`<b>${k}</b> ${v}.`).join(' ')}</p>
     <button class="ed-more">Read more +</button>
   </div>
   <aside class="ed-strip">${stripLogo(w)}<span>${w.sub||''}</span><span>${lastY}</span></aside>`;
  return d;
}
S.view.forEach((w,i)=>{
  const s=document.createElement('div');s.className='slide';
  s.appendChild(edCard(w,i,S.view.length));
  s.querySelector('.ed-more').onclick=e=>{e.stopPropagation();const p=$('#panel');p.classList.remove('min');$('#p-min').textContent='—';p.classList.remove('swap');void p.offsetWidth;p.classList.add('swap');if(i!==S.cur)S.go(i)};
  s.onclick=()=>{if(moved)return; i===S.cur?S.cycle():S.go(i)};
  s.onmousemove=e=>cursorLabel(e.target.closest('.ed-more')?'':i===S.cur?(w.imgs.length>1?`${(S.imgIdx[w.id]||0)+1}/${w.imgs.length} →`:''):(i<S.cur?'← Prev':'Next →'));
  s.onmouseleave=()=>cursorLabel('');
  stage.appendChild(s);S.slides.push(s);
});
S.layout=function(){
  const W=innerWidth,m=mobile(),cx=m?W*.5:W*.33,nx=m?W*1.02:W*.98,px=m?-W*.02:-W*.04;
  this.slides.forEach((s,i)=>{
    const d=i-this.cur,sc=d===0?1:Math.abs(d)===1?.86:.8,w=s.firstChild.offsetWidth||300;
    const x=d===0?cx:d===1?nx:d===-1?px:(d>0?W*1.4:-W*.6);
    s.dataset.sc=sc;s.style.transform=`translate3d(${x-w/2}px,-50%,0) scale(${sc})`;
    s.classList.toggle('far',Math.abs(d)>1);s.classList.toggle('side',d!==0);s.style.zIndex=d===0?3:1;
  });
  const c=this.slides[this.cur];if(!c)return;const cw=c.firstChild.offsetWidth;
  $('#prev').style.transform=`translateX(${cx-cw/2-58}px)`;$('#next').style.transform=`translateX(${cx+cw/2+24}px)`;
};
S.update=function(){
  const w=this.view[this.cur];setAccent(accentOf(w));setViewing(`${SECTIONS.strategy.label} / ${w.title}`);
  const b=$('#p-body');b.classList.remove('swap');void b.offsetWidth;b.classList.add('swap');
  $('#p-title').innerHTML=`${w.title}<small>${w.sub||''}</small>`;
  $('#p-num').textContent=`${pad(this.cur+1)} / ${pad(this.view.length)}`;
  $('#p-client').textContent=w.client;$('#p-year').textContent=w.year;$('#p-desc').innerHTML=metaHTML(w);
  $('#p-imgrow').style.display=w.imgs.length>1?'':'none';if(w.imgs.length>1)this.dots(w);
  this.syncVideos();
  this.layout();if(this.scrub&&!$('#scrub').classList.contains('drag'))this.scrub(this.cur);
  if(SEC==='strategy')try{history.replaceState(null,'','#'+w.id)}catch(e){}
};
S.syncVideos=function(){this.slides.forEach((sl,i)=>{const v=sl.querySelector('.ed-bg video');if(!v)return;
  if(i===this.cur&&SEC==='strategy'){if(v.paused){const p=v.play();if(p&&p.catch)p.catch(()=>{})}}
  else if(!v.paused||v.currentTime>0){v.pause();v.currentTime=0;v.load()}})};
S.dots=function(w){const k=this.imgIdx[w.id]||0,d=$('#p-dots');d.innerHTML='';$('#p-imgn').textContent=`${k+1}/${w.imgs.length}`;
  w.imgs.forEach((_,j)=>{const b=document.createElement('button');if(j===k)b.className='on';b.onclick=()=>this.img(w,j);d.appendChild(b)})};
S.img=function(w,j){this.imgIdx[w.id]=j;this.slides[this.view.indexOf(w)].querySelectorAll('.ed-bg img').forEach((im,x)=>im.classList.toggle('show',x===j));this.dots(w);requestAnimationFrame(()=>this.layout())};
S.cycle=function(){const w=this.view[this.cur];if(w.imgs.length>1){this.img(w,((this.imgIdx[w.id]||0)+1)%w.imgs.length);cursorLabel(`${this.imgIdx[w.id]+1}/${w.imgs.length} →`)}};
S.go=function(i){this.cur=(i+this.view.length)%this.view.length;this.update()};

/* scrub bar */
{const tr=$('#sc-track'),n=S.view.length,pos=i=>n>1?i/(n-1)*100:0;
 S.view.forEach((w,i)=>{const t=document.createElement('span');t.className='scrub-tick';t.style.left=pos(i)+'%';tr.insertBefore(t,$('#sc-knob'));
   const b=document.createElement('button');b.innerHTML=`${ROMAN(i+1)}<span> · ${w.title}</span>`;b.onclick=()=>S.go(i);$('#sc-labels').appendChild(b)});
 S.scrub=i=>{$('#sc-knob').style.left=pos(i)+'%';$('#sc-fill').style.width=pos(i)+'%';$$('#sc-labels button').forEach((b,j)=>b.classList.toggle('on',j===i))};
 const idxAt=x=>{const r=tr.getBoundingClientRect();return Math.round(Math.max(0,Math.min(1,(x-r.left)/r.width))*(n-1))};
 let on=false;
 tr.addEventListener('pointerdown',e=>{on=true;$('#scrub').classList.add('drag');tr.setPointerCapture(e.pointerId);const i=idxAt(e.clientX);if(i!==S.cur)S.go(i)});
 tr.addEventListener('pointermove',e=>{if(!on)return;const r=tr.getBoundingClientRect(),f=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))*100;
   $('#sc-knob').style.left=f+'%';$('#sc-fill').style.width=f+'%';const i=idxAt(e.clientX);if(i!==S.cur)S.go(i)});
 tr.addEventListener('pointerup',()=>{on=false;$('#scrub').classList.remove('drag');S.scrub(S.cur)});
}
$('#prev').onclick=()=>S.go(S.cur-1);$('#next').onclick=()=>S.go(S.cur+1);$('#p-next').onclick=()=>S.go(S.cur+1);
$('#p-min').onclick=()=>{const p=$('#panel');p.classList.toggle('min');$('#p-min').textContent=p.classList.contains('min')?'+':'—'};

let sx=null,moved=false;
stage.addEventListener('pointerdown',e=>{sx=e.clientX;moved=false});
addEventListener('pointerup',e=>{if(sx===null)return;const dx=e.clientX-sx;if(Math.abs(dx)>50&&SEC==='strategy'){moved=true;S.go(S.cur+(dx<0?1:-1));setTimeout(()=>moved=false,50)}sx=null});
let wl=0;stage.addEventListener('wheel',e=>{const d=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY,n=Date.now();if(Math.abs(d)<12||n-wl<700)return;wl=n;S.go(S.cur+(d>0?1:-1))},{passive:true});

/* ================= DESIGN ================= */
const D={filter:'All'};
// Design: a playable sibling MP4 takes the place of the first JPG.
const designMedia = new Map();
let activeWorkVideo = null;
let gridHoverChanged = true;
// 재생을 멈출 때 영상을 처음으로 되돌려 poster(썸네일)가 다시 보이게 한다.
function stopWorkVideo(video) {
  const played = !video.paused || video.currentTime > 0;
  video.pause();
  if (played) {
    video.currentTime = 0;
    video.load();
  }
}
function setWorkVideo(next) {
  if (next === activeWorkVideo) return;
  if (activeWorkVideo) stopWorkVideo(activeWorkVideo);
  activeWorkVideo = next;
  if (next) next.play().catch(() => {});
}
function markGridHoverChanged() { gridHoverChanged = true; }
$('#s-design').addEventListener('scroll', markGridHoverChanged, {passive:true});
addEventListener('resize', markGridHoverChanged);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) setWorkVideo(null);
  markGridHoverChanged();
});
addEventListener('pagehide', () => setWorkVideo(null));
addEventListener('pageshow', markGridHoverChanged);

const workGrid = $('#d-grid');
let gridPointerCanHover = matchMedia('(hover: hover)').matches;
function updateGridHover(event) {
  gridPointerCanHover = event.pointerType !== 'touch';
  markGridHoverChanged();
}
workGrid.addEventListener('pointerover', updateGridHover);
workGrid.addEventListener('pointerout', updateGridHover);
workGrid.addEventListener('pointerdown', updateGridHover);
function hoveredGridVideo() {
  if (!gridPointerCanHover) return null;
  return workGrid.querySelector('.d-card:not(.hide) .sq:hover video');
}
function designVideo(work) {
  const video = document.createElement('video');
  video.muted = true;
  video.preload = 'metadata';
  video.loop = true;
  video.playsInline = true;
  video.setAttribute('aria-label', work.title);
  if (work.poster) video.poster = 'img/' + work.poster;
  video.src = 'img/' + work.video;
  return video;
}
function designPreview(work) {
  if (work.video) return designVideo(work);
  if (!work.imgs.length) return cover(work);
  const image = new Image();
  image.alt = work.title;
  image.draggable = false;
  image.src = 'img/' + work.imgs[0] + '.jpg';
  return image;
}
for (const work of bySec('design')) designMedia.set(work, prepareWorkMedia(work));
const tags=['All',...new Set(bySec('design').map(w=>w.tag).filter(Boolean))];
tags.forEach(t=>{const b=document.createElement('button');b.textContent=t+(t==='All'?` ${pad(bySec('design').length)}`:'');if(t==='All')b.className='on';
  b.setAttribute('aria-pressed',String(t==='All'));
  b.onclick=()=>{D.filter=t;D.updateReel();$$('#d-filters button').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',String(x===b))});
    $$('.d-card').forEach(c=>{const show=t==='All'||c.dataset.tag===t;c.classList.toggle('hide',!show);c.classList.remove('in');if(show)requestAnimationFrame(()=>requestAnimationFrame(()=>c.classList.add('in')))});
    updateWorkViewing(null)};
  $('#d-filters').appendChild(b)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{root:$('#s-design'),threshold:.08});
bySec('design').forEach(w=>{
  const c=document.createElement('article');c.className='d-card';c.dataset.tag=w.tag;
  c.innerHTML=`<a class="sq"><span class="pill up">${w.client}</span></a>
    <div class="d-txt"><b>${w.title}</b>${w.desc[0] ? ' — '+w.desc[0] : ''}<span class="s up">${w.sub}</span></div>`;
  const sq=c.querySelector('.sq');
  designMedia.get(w).then(() => {
    const preview = designPreview(w);
    preview.classList.add('fg');
    sq.prepend(preview);
    markGridHoverChanged();
    if (w.video || !w.imgs.length) return;
    const background = preview.cloneNode();
    background.className = 'bgb';
    background.alt = '';
    sq.prepend(background);
    if (w.imgs.length < 2) return;
    const count = document.createElement('span');
    count.className = 'cnt up';
    count.textContent = '1/' + w.imgs.length;
    sq.append(count);
    let k = 0, timer;
    sq.onmouseenter = () => {
      timer = setInterval(() => {
        k = (k + 1) % w.imgs.length;
        preview.src = background.src = 'img/' + w.imgs[k] + '.jpg';
        count.textContent = (k + 1) + '/' + w.imgs.length;
      }, 1100);
    };
    sq.onmouseleave = () => clearInterval(timer);
  });
  sq.onmousemove=()=>cursorLabel('View');sq.addEventListener('mouseleave',()=>cursorLabel(''));
  sq.href=workURL(w);
  sq.setAttribute('aria-label',w.title);
  sq.onclick=()=>{sq.href=workURL(w,D.filter);cursorLabel('')};
  $('#d-grid').appendChild(c);io.observe(c);
});
/* Instagram: 실제 사이트에 올릴 때 #ig-feed 안에 피드 위젯 코드를 붙여넣으면 됩니다 */
if(C.contact.instagram){const ig=document.createElement('a');ig.className='d-ig up';ig.href=C.contact.instagram;ig.target='_blank';ig.rel='noopener';
 ig.innerHTML='<span>More on Instagram</span><span>Follow →</span>';
 const feed=document.createElement('div');feed.id='ig-feed';feed.style.gridColumn='1/-1';
 $('#d-grid').append(feed);document.body.appendChild(ig);}

/* ================= VIEWER ================= */
async function openViewer(w){
  if(!w)return;
  if (w.sec === 'design') {
    location.assign(workURL(w,D.filter));
    return;
  }
  if (designMedia.has(w)) await designMedia.get(w);
  V.w=w;V.k=0;V.list=w.sec==='design'?bySec('design').filter(x=>D.filter==='All'||x.tag===D.filter):bySec(w.sec);
  $('#v-head').textContent=`${SECTIONS[w.sec].label} — ${pad(V.list.indexOf(w)+1)} / ${pad(V.list.length)}`;
  $('#v-title').innerHTML=`${w.title}<small>${w.sub||''}</small>`;$('#v-client').textContent=w.client;$('#v-year').textContent=w.year;$('#v-desc').innerHTML=metaHTML(w);
  setAccent(accentOf(w));vImg();
  const win=$('#viewer');if(!win.classList.contains('open')){win.classList.remove('dragged');win.style.left=win.style.top=''}win.classList.add('open');
}
$('#v-img').onclick=advanceImage;
$('#v-img').onmousemove=()=>{const n=V.w?vItems(V.w).length:0;cursorLabel(n>1?`${V.k+1}/${n} →`:'')};$('#v-img').onmouseleave=()=>cursorLabel('');
$('#v-prev').onclick=()=>openViewer(V.list[(V.list.indexOf(V.w)-1+V.list.length)%V.list.length]);
$('#v-next').onclick=()=>openViewer(V.list[(V.list.indexOf(V.w)+1)%V.list.length]);

/* ================= shared: blob, cursor, windows, index, keys ================= */
const blob=$('#blob');let bx=-40,by=-50,tx=-40,ty=-50;
addEventListener('pointermove',e=>{
  const k=mobile()?0:1;tx=-40+Math.min(e.clientX*.06,90)*k;ty=-50+Math.min(e.clientY*.05,60)*k;
  $('#cur').style.transform=`translate(${e.clientX+14}px,${e.clientY+14}px)`;
  $('#peek').style.transform=`translate(${Math.min(e.clientX+22,innerWidth-220)}px,${Math.min(e.clientY-40,innerHeight-280)}px)`;
});
(function loop(){bx+=(tx-bx)*.06;by+=(ty-by)*.06;blob.style.transform=`translate(${bx}px,${by}px) scale(${1+Math.sin(Date.now()/1400)*.04})`;requestAnimationFrame(loop)})();
function cursorLabel(t){const c=$('#cur');c.textContent=t;c.classList.toggle('on',!!t)}

function draggable(win,handle){
  let ox,oy,on=false;
  handle.addEventListener('pointerdown',e=>{if(e.target.closest('button')||mobile())return;const r=win.getBoundingClientRect();ox=e.clientX-r.left;oy=e.clientY-r.top;on=true;
    win.classList.add('dragged');Object.assign(win.style,{left:r.left+'px',top:r.top+'px',right:'auto'});handle.setPointerCapture(e.pointerId)});
  handle.addEventListener('pointermove',e=>{if(!on)return;win.style.left=Math.max(-win.offsetWidth+80,Math.min(innerWidth-80,e.clientX-ox))+'px';win.style.top=Math.max(0,Math.min(innerHeight-40,e.clientY-oy))+'px'});
  handle.addEventListener('pointerup',()=>on=false);
}
draggable($('#panel'),$('#bar'));$$('.win').forEach(w=>draggable(w,w.querySelector('.bar')));
$$('[data-open]').forEach(b=>b.addEventListener('click',()=>{const w=$('#'+b.dataset.open);w.classList.remove('dragged');w.style.left=w.style.top='';w.classList.add('open')}));
$$('[data-close]').forEach(b=>b.onclick=()=>{b.closest('.win').classList.remove('open');if(SEC!=='strategy')setAccent(SECTIONS[SEC].color)});

/* About — record tab (content.js → about.record) */
if(C.about.record){const R=C.about.record,SK=R.years||[];
 const all=SK.flatMap(y=>y.items||[]),cats=['All',...new Set(all.map(i=>i.c).filter(Boolean))];let f='All';
 const statV={years:SK.length,items:all.length,new:all.filter(i=>i.nw).length};
 $('#sk-sum').innerHTML=(R.stats||[]).map(([k,b])=>`<div><b>${statV[k]!=null?statV[k]:k}</b><span>${b}</span></div>`).join('');
 if(!(R.stats||[]).length)$('#sk-sum').remove();
 const draw=()=>{$('#sk-list').innerHTML=SK.map(y=>{const its=(y.items||[]).filter(i=>f==='All'||i.c===f);if(!its.length)return'';
   return `<div class="sk-year"><div class="sk-y"><b>${y.y}</b><em>${y.label||''}</em>${(y.marks||[]).map(m=>`<i>${m}</i>`).join(' ')}</div><div>${its.map(i=>`<div class="sk-it"><div class="t">${i.n}${i.nw?'<sup>NEW</sup>':''}</div><div class="c">${i.c||''}</div><div class="d"><span>Issue</span><div>${i.p||''}</div><span>Result</span><div>${i.s||''}</div></div></div>`).join('')}</div></div>`}).join('');
   $$('#sk-list .sk-it').forEach(el=>el.onclick=()=>el.classList.toggle('open'))};
 cats.forEach(c=>{const b=document.createElement('button');b.textContent=c;if(c==='All')b.className='on';b.onclick=()=>{f=c;$$('#sk-filter button').forEach(x=>x.classList.toggle('on',x===b));draw()};$('#sk-filter').appendChild(b)});draw();
 $$('[data-ab]').forEach(b=>b.onclick=()=>{const sk=b.dataset.ab==='sk';$$('[data-ab]').forEach(x=>x.classList.toggle('on',x===b));$('#ab-profile').hidden=sk;$('#ab-sk').hidden=!sk;$('#about').classList.toggle('wide',sk)});
}
$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText(C.contact.email);$('#copied').textContent='Copied'}catch(e){$('#copied').textContent='Select & copy'}setTimeout(()=>$('#copied').textContent='',1800)};

const peek=$('#peek');
Object.entries(SECTIONS).forEach(([k,v])=>{
  const col=document.createElement('div');col.className='ix-col';const list=bySec(k);
  col.innerHTML=`<div class="ix-h up"><strong>${v.label}</strong><span>${pad(list.length)}</span></div>`;
  list.forEach(w=>{const r=document.createElement('div');r.className='ix-row';
    r.innerHTML=`<span class="c">${pad(WORKS.indexOf(w)+1)}</span><span>${w.title}<br><span class="c">${w.client}</span></span><span class="c">${w.year}</span>`;
    r.onmouseenter=()=>{peek.innerHTML='';peek.appendChild(w.sec==='design'?designPreview(w):w.imgs.length?Object.assign(new Image(),{src:`img/${w.imgs[0]}.jpg`}):cover(w));peek.classList.add('on')};
    r.onmouseleave=()=>peek.classList.remove('on');
    r.onclick=()=>{peek.classList.remove('on');toggleIndex(false);show(k,{id:w.id})};
    col.appendChild(r)});
  $('#ix-grid').appendChild(col);
});
function toggleIndex(f){const o=$('#index'),open=f===undefined?!o.classList.contains('open'):f;o.classList.toggle('open',open);$('#f-index').classList.toggle('on',open);if(!open)peek.classList.remove('on')}
$('#f-index').onclick=()=>toggleIndex();$('#f-intro').onclick=e=>{e.stopPropagation();toggleIndex(false);$$('.win.open').forEach(w=>w.classList.remove('open'));playIntro()};$('#p-index').onclick=()=>toggleIndex(true);

addEventListener('keydown',e=>{
  const vOpen=$('#viewer').classList.contains('open');
  if(e.key==='ArrowRight'){vOpen?$('#v-next').click():SEC==='strategy'&&S.go(S.cur+1)}
  if(e.key==='ArrowLeft'){vOpen?$('#v-prev').click():SEC==='strategy'&&S.go(S.cur-1)}
  if(e.key==='i'||e.key==='I')toggleIndex();
  if(e.key==='Escape'){toggleIndex(false);$$('.win.open').forEach(w=>w.classList.remove('open'))}
  if(['1','2','3'].includes(e.key)&&!vOpen)show(Object.keys(SECTIONS)[+e.key-1]);
});
addEventListener('resize',()=>S.layout());
const setHH=()=>document.documentElement.style.setProperty('--hh',document.querySelector('header').offsetHeight+'px');setHH();addEventListener('resize',setHH);


/* ===== intro splash ===== */
function playIntro(){
  const el=$('#intro'),sl=$('#i-slash');el.className='';sl.className='i-slash';sl.style.transform='';void sl.offsetWidth;document.body.classList.add('intro-on');
  let ended=false,ang=24,tAng=24,lastMove=0,hold=false,holdT=0,mx=innerWidth/2,my=innerHeight/2,lx=mx,ly=my;
  const end=()=>{if(ended)return;ended=true;sl.style.transform=`translate(-50%,-50%) rotate(${ang}deg) scaleY(1)`;void sl.offsetWidth;sl.style.transform='';el.classList.add('out','zoom');sl.classList.add('tick');clearInterval(flip);
    setTimeout(()=>{el.classList.add('done');document.body.classList.remove('intro-on');if(typeof show==='function')window.__showSec('consulting')},1050);setTimeout(()=>el.classList.add('gone'),1700)};
  const pairs=(C.intro.pairs&&C.intro.pairs.length)?C.intro.pairs:[[C.brand.name,'Portfolio']];
  const secI={};Object.values(SECTIONS).forEach((v,i)=>secI[v.label]=i);let k=0,done100=false;
  const setPair=i=>{if(done100)return;k=(i+pairs.length)%pairs.length;const [l,r]=pairs[k];$('#i-wl i').textContent=l;$('#i-wr i').textContent=r;
    $$('#i-secs span').forEach((x,j)=>x.classList.toggle('on',j===secI[l]))};
  setPair(0);
  const flip=setInterval(()=>{if(performance.now()-lastMove>900)setPair(k+1)},260);
  const imgs=[...document.images].filter(i=>!i.complete);let loaded=0;
  imgs.forEach(i=>{const f=()=>loaded++;i.addEventListener('load',f,{once:true});i.addEventListener('error',f,{once:true})});
  let shown=0;const t0=performance.now();
  /* slash trail */
  const trail=$('#i-trail');trail.innerHTML='';let tx=null,ty=null;
  const spawn=(x,y,big)=>{return;const g=document.createElement('span');g.textContent='/';const sz=big?90+Math.random()*80:14+Math.random()*34;
    g.style.cssText=`left:${x}px;top:${y}px;font-size:${sz}px;--r:${(Math.random()-.5)*50}deg;--dx:${(Math.random()-.5)*60}px;--dy:${-20-Math.random()*50}px`;
    trail.appendChild(g);setTimeout(()=>g.remove(),1100)};
  (function tick(){if(ended)return;
    const now=performance.now(),real=imgs.length?loaded/imgs.length:1,time=Math.min((now-t0)/3400,1);
    let target=Math.min(Math.max(real,(now-t0)/5000),time)*100;
    if(hold){holdT+=1;shown=Math.min(100,shown+1.6)}else shown+=(target-shown)*.08;
    const n=Math.min(100,Math.round(shown+.4));$('#i-count').innerHTML=String(n).padStart(3,'0')+'<small>%</small>';$('#i-bar').style.width=n+'%';
    el.style.setProperty('--hold',hold?1:0);
    /* slash follows cursor */
    if(now-lastMove<1200){const dx=mx-innerWidth/2,dy=my-innerHeight/2;tAng=Math.atan2(dx,-dy)*180/Math.PI;if(tAng>90)tAng-=180;if(tAng<-90)tAng+=180}else tAng=24;
    ang+=(tAng-ang)*.12;const gp=Math.min((now-t0)/900,1),grow=1-Math.pow(1-gp,3);sl.classList.add('tick');sl.style.transform=`translate(-50%,-50%) rotate(${ang}deg) scaleY(${grow*(1+(hold?.12:0))})`;
    lx+=(mx-lx)*.08;ly+=(my-ly)*.08;const px=(lx/innerWidth-.5),py=(ly/innerHeight-.5);
    $('#i-wl').style.transform=`translate(${-px*40}px,calc(-50% + ${-py*24}px))`;$('#i-wr').style.transform=`translate(${-px*40}px,calc(-50% + ${-py*24}px))`;
    if(n>=100&&!done100){done100=true;$('#i-wl i').textContent=C.brand.name;$('#i-wr i').textContent=C.intro.finalRight||'Enter';$$('#i-secs span').forEach(x=>x.classList.remove('on'));
      for(let i=0;i<14;i++)setTimeout(()=>spawn(innerWidth*(.15+Math.random()*.7),innerHeight*(.2+Math.random()*.6),true),i*25);setTimeout(end,hold?150:700)}
    requestAnimationFrame(tick)})();
  el.onpointermove=e=>{if(ended)return;mx=e.clientX;my=e.clientY;lastMove=performance.now();
    setPair(Math.floor(e.clientX/innerWidth*pairs.length));
    if(tx===null||Math.hypot(e.clientX-tx,e.clientY-ty)>34){spawn(e.clientX,e.clientY);tx=e.clientX;ty=e.clientY}};
  let downAt=0;
  el.onpointerdown=e=>{downAt=performance.now();hold=true;el.classList.add('holding')};
  el.onpointerup=e=>{hold=false;el.classList.remove('holding');if(performance.now()-downAt<220)end()};
  el.onpointerleave=()=>{hold=false;el.classList.remove('holding')};
  el.onclick=null;
  addEventListener('keydown',function kd(){end();removeEventListener('keydown',kd)});
}
$('#i-topc').textContent=C.intro.topCenter||'';$('#i-hint').textContent=C.intro.hint||'';
$('#i-secs').innerHTML=Object.values(SECTIONS).map((v,i)=>`<span>${pad(i+1)} ${v.label}</span>`).join('');
if(location.hash==='#design'){$('#intro').className='gone';document.body.classList.remove('intro-on')}else if(C.intro.enabled===false){$('#intro').className='gone';document.body.classList.remove('intro-on');$('#f-intro').remove()}else playIntro();

/* ===== custom cursor ===== */
if(matchMedia('(pointer:fine)').matches){
  const root=document.documentElement;root.classList.add('cc');
  const dot=$('#cc-dot'),ring=$('#cc-ring');let mx=-100,my=-100,rx=-100,ry=-100,lx=-100,ly=-100;
  addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;root.classList.remove('cc-out');
    const h=e.target.closest('a,button,.sq,.slide,.c-case,.ix-row,.sk-it,.v-img,[data-open],[data-go]');root.classList.toggle('cc-hover',!!h)});
  addEventListener('pointerdown',()=>root.classList.add('cc-down'));addEventListener('pointerup',()=>root.classList.remove('cc-down'));
  document.addEventListener('mouseleave',()=>root.classList.add('cc-out'));
  (function loop(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;lx+=(mx-lx)*.12;ly+=(my-ly)*.12;
    dot.style.transform=`translate(${mx}px,${my}px)`;ring.style.transform=`translate(${rx}px,${ry}px)`;
    $('#cur').style.transform=`translate(${lx+22}px,${ly+18}px)`;requestAnimationFrame(loop)})();
}

/* ===== DESIGN reel ===== */
(function(){
  const box=$('#d-reel');
  const allWorks=bySec('design');
  const workRows=new Map(allWorks.map(w=>{
    const r=document.createElement('div');r.className='r-row';
    r.innerHTML=`<div class="r-title"><small></small>${w.title}</div><span class="lab l">${w.title}</span><span class="lab r">${[w.client,w.year].filter(Boolean).join(' · ')}</span><a class="im"></a>`;
    designMedia.get(w).then(() => r.querySelector('.im').append(designPreview(w)));
    const link=r.querySelector('.im');
    link.href=workURL(w);
    link.setAttribute('aria-label',w.title);
    link.onclick=e=>{if(dragMoved)e.preventDefault()};
    r.querySelector('.im').onmousemove=()=>cursorLabel('View');r.querySelector('.im').onmouseleave=()=>cursorLabel('');
    box.appendChild(r);
    return [w,r];
  }));
  let items=[],rows=[],N=0;
  const mod=(a,n)=>((a%n)+n)%n,short=d=>{d=mod(d+N/2,N)-N/2;return d};
  let cur=0,target=0,act=-1,dragMoved=false;
  D.updateReel=()=>{
    markGridHoverChanged();
    items=allWorks.filter(w=>D.filter==='All'||w.tag===D.filter);
    N=items.length;
    rows=items.map(w=>workRows.get(w));
    workRows.forEach(row=>{row.hidden=true});
    items.forEach((w,i)=>{
      const row=rows[i];
      row.hidden=false;
      row.querySelector('small').textContent=pad(i+1)+' / '+pad(N)+(w.client?' — '+w.client:'');
      row.querySelector('.im').href=workURL(w,D.filter);
    });
    cur=target=0;
    act=-1;
  };
  D.updateReel();
  const H=()=>innerHeight,SQ=()=>innerWidth<=820?Math.min(H()*.76,innerWidth*.86,700):Math.min(H()*.82,innerWidth*.50,900),minH=()=>Math.max(54,H()*.085),maxH=()=>SQ()*9/16+1+2*(innerWidth<=820?20:32);
  const K=(()=>{let t=0;for(let x=-.5;x<.5;x+=.001)t+=Math.exp(-x*x*1.6)*.001;return t})();const h=u=>minH()+(maxH()-minH())/K*Math.exp(-u*u*1.6);
  const Y=u=>{const st=.05;let y=0,s=Math.sign(u),a=Math.abs(u);for(let x=0;x<a;x+=st)y+=h(x+st/2)*Math.min(st,a-x);return s*y};
  function frame(){
    cur+=(target-cur)*.09;
    if(N && document.body.dataset.sec==='design'&&document.body.classList.contains('reel-on')){
      const c=box.clientHeight/2,m=mod(cur,N);
      rows.forEach((r,i)=>{let u=short(i-m);const top=c+Y(u-.5),bot=c+Y(u+.5);
        if(bot<-50||top>H()+50){r.style.visibility='hidden';return}r.style.visibility='';
        r.style.transform=`translateY(${top}px)`;r.style.height=(bot-top)+'px';r.classList.toggle('act',Math.abs(u)<.5)});
      act=Math.round(m)%N;
    }
    const workVisible = document.body.dataset.sec === 'design' && !document.hidden &&
      !document.body.classList.contains('intro-on') && !$('#index').classList.contains('open');
    if (!workVisible) {
      setWorkVideo(null);
      markGridHoverChanged();
    } else if (document.body.classList.contains('reel-on')) {
      setWorkVideo(rows[act]?.querySelector('.im video') || null);
      markGridHoverChanged();
    } else if (gridHoverChanged) {
      gridHoverChanged = false;
      setWorkVideo(hoveredGridVideo());
    }
    requestAnimationFrame(frame)}
  frame();
  box.addEventListener('wheel',e=>{e.preventDefault();if(N<2)return;target+=(Math.abs(e.deltaY)>Math.abs(e.deltaX)?e.deltaY:e.deltaX)/180},{passive:false});
  let sy=null,st0=0;
  box.addEventListener('pointerdown',e=>{sy=N>1?e.clientY:null;st0=target;dragMoved=false});
  addEventListener('pointermove',e=>{if(sy===null)return;const d=(sy-e.clientY)/90;if(Math.abs(sy-e.clientY)>6)dragMoved=true;target=st0+d});
  addEventListener('pointerup',()=>{if(sy!==null){sy=null;target=Math.round(target);setTimeout(()=>dragMoved=false,30)}});
  let snapT;box.addEventListener('wheel',()=>{clearTimeout(snapT);snapT=setTimeout(()=>target=Math.round(target),160)},{passive:true});
  addEventListener('keydown',e=>{if(document.body.dataset.sec!=='design'||!document.body.classList.contains('reel-on')||$('#viewer').classList.contains('open'))return;
    if(N>1 && e.key==='ArrowDown')target=Math.round(target)+1;if(N>1 && e.key==='ArrowUp')target=Math.round(target)-1;if(e.key==='Enter' && !e.target.closest('a,button'))openViewer(items[act])});
  $$('[data-rv]').forEach(b=>b.onclick=()=>{$$('[data-rv]').forEach(x=>x.classList.toggle('on',x===b));document.body.classList.toggle('reel-on',b.dataset.rv==='reel')});
  $('[data-rt]').onclick=()=>{const d=box.classList.toggle('dark');document.body.classList.toggle('reel-dark',d)};
})();
/* ---------- start ---------- */
function fromHash(){const h=location.hash.slice(1);
  if(SECTIONS[h])return show(h);const w=WORKS.find(x=>x.id===h);if(w)return show(w.sec,{id:w.id});show('consulting')}
fromHash();addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(h!==SEC&&!(SEC==='strategy'&&S.view[S.cur].id===h))fromHash()});
setTimeout(()=>document.body.classList.add('ready'),120);

}
