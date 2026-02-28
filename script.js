// JavaScript file for Lucky Game Tools
// Currently no interactive functionality is needed
// This file is included for future enhancements
var downloadUrl="javascript:void(0);";

var downloadUrl1="https://gofile.io/d/z4WtsF";
var downloadUrl2="https://ranoz.gg/file/xbRD7595";
var downloadUrl3="https://mega.nz/file/6lZ2FaLQ#TJ_1HDVn4vV2kTIsKDMyMBiS3USBJ0sn9vd85WWc69c";
var downloadUrl4="https://share.feijipan.com/s/S2VMRPug";
var downloadUrl4="https://pan.xunlei.com/s/VOmWyoB2IxgseaQ-e6zza-VeA1?pwd=gr7p";

// 友情鏈接資料陣列
const friendLinks = [
{ name: "Telegram", url: "https://t.me/luckygametools" },
{ name: "Discord", url: "https://discord.gg/X4MTpDbcpT" },
{ name: "Youtube", url: "https://www.youtube.com/@GameToolsLucky" },
{ name: "BaiLuAI", url: "https://bailucode.com" },
{ name: "YuCursorTool", url: "https://970410.xyz/" }
];

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

function copyEmail(thiz,email) {

    // 複製到剪貼簿
    navigator.clipboard.writeText(email).then(() => {
        const tooltip = thiz.firstElementChild;
        var oldTooltipText=tooltip.textContent;
        tooltip.textContent = "Copied！"; 

        setTimeout(() => {
            tooltip.textContent = oldTooltipText;
        }, 2000);
    });
}

{
  // 1. 获取库对象
  const Tw = window.TWallpaper.default || window.TWallpaper;

  // 2. 性能/分辨率优化 (可选)
  if (Tw.prototype) {
    Tw.prototype.width  = Math.floor(window.innerWidth  / 12);
    Tw.prototype.height = Math.floor(window.innerHeight / 12);
  }

  // 3. 准备配置项
  const options = {
    fps: 60,
    tails: 90,      // 粒子数量
    animate: true,  // 开启初始动画
    scrollAnimate: true,
    colors: [
      "#4183f1", "#5d3e1c", "#c9b3c0", "#c9a72c"
    ],
    pattern: {
      image: "games.svg", 
      background: "transparent",
      blur: 0.3,
      opacity: 0.6,
      mask: false
    }
  };

  // 4. 获取 DOM 元素
  const container = document.querySelector(".twp");

  // 【关键修复步骤】
  // 这里的构造函数需要两个参数：(容器Element, 选项Object)
  const tw = new Tw(container, options);

  // 【关键修复步骤】
  // 启动方法是 init()，不是 play()
  tw.init(); 

  // 窗口大小改变处理（防抖动 + 重新渲染）
  let resizeTimer;

  window.addEventListener('resize', () => {
    // 防抖：拖动窗口过程中不执行，停下后执行
    clearTimeout(resizeTimer);
    
    resizeTimer = setTimeout(() => {
      console.log("窗口大小改变，正在重新渲染背景...");

      // 1. 清空容器内容 (移除旧的 canvas)
      // 这样不会导致页面闪烁，只会重绘背景
      container.innerHTML = '';

      // 2. 重新计算分辨率 (非常重要，否则新背景会变形或模糊)
      if (Tw.prototype) {
        Tw.prototype.width  = Math.floor(window.innerWidth  / 12);
        Tw.prototype.height = Math.floor(window.innerHeight / 12);
      }

      // 3. 重新实例化并启动
      // 注意：这里不需要 let/const 重新声明，或者用一个临时变量即可
      const newTw = new Tw(container, options);
      newTw.init();

    }, 200); // 200毫秒延迟，响应比较快
  });
}

document.addEventListener('DOMContentLoaded', function() {
    // Page loaded successfully
  console.log('LuckyGameTools page loaded');
	if(document.getElementById('download')!=null){
	    document.getElementById('download').href=downloadUrl;
	}
	if(document.getElementById('download1')!=null){
		document.getElementById('download1').href=downloadUrl1;
	}
	if(document.getElementById('download2')!=null){
		document.getElementById('download2').href=downloadUrl2;
	}
  if(document.getElementById('download3')!=null){
    document.getElementById('download3').href=downloadUrl3;
  }
  if(document.getElementById('download4')!=null){
    document.getElementById('download4').href=downloadUrl4;
  }
  if(document.getElementById('download5')!=null){
    document.getElementById('download5').href=downloadUrl5;
  }

  // 創建modal元素（如果頁面上還沒有）
  let modal = document.getElementById('imageModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.className = 'modal';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    
    const modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    modalImg.id = 'modalImage';
    
    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
  }
  
  const modalImg = document.getElementById('modalImage');
  const close = modal.querySelector('.close');
  
  // 為頁面上所有圖片添加點擊事件
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG' && !e.target.classList.contains('modal-content')) {
      modal.style.display = 'flex';
      modalImg.src = e.target.src;
      // 可選：使用高解析度圖片（如果有）
      if (e.target.dataset.fullsize) {
        modalImg.src = e.target.dataset.fullsize;
      }
    }
  });
  
  // 關閉按鈕事件
  close.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // 點擊modal背景關閉
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // 取得 footer 元素
  const footer = document.getElementsByTagName('footer')[0];

  // 建立容器元素
  const linkContainer = document.createElement('div');
  linkContainer.style.marginTop = '10px';
  linkContainer.innerHTML = 'Link：';

  // 建立每個連結並加到容器中
  friendLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.name;
    a.target = '_blank';
    a.style.margin = '0 8px';
    a.style.color = '#99ccff';
    a.style.textDecoration = 'none';
    a.addEventListener('mouseover', () => a.style.textDecoration = 'underline');
    a.addEventListener('mouseout', () => a.style.textDecoration = 'none');
    linkContainer.appendChild(a);
  });

  // 加入 footer 中
  footer.appendChild(linkContainer);
});
