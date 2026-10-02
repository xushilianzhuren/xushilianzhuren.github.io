/* 智神官网在线客服浮窗 v4.0（2026-10-02 13:00班）
   全站注入·iframe指向gz.zhishendiguo.com/cs/·暗色自动跟随主站data-theme */
(function(){
  if (document.getElementById('zs-cs-btn')) return;
  var s = document.createElement('style');
  s.textContent = [
    '#zs-cs-btn{position:fixed;right:18px;bottom:18px;z-index:9998;background:var(--accent,#8a1f1f);color:#fff;border:0;border-radius:26px;padding:11px 18px;font-size:14px;cursor:pointer;box-shadow:0 4px 18px rgba(0,0,0,.28);letter-spacing:1px;font-family:"PingFang SC","Microsoft YaHei",sans-serif;}',
    '#zs-cs-btn:hover{filter:brightness(1.12);}',
    '#zs-cs-panel{position:fixed;right:18px;bottom:74px;z-index:9999;width:344px;max-width:calc(100vw - 24px);height:500px;max-height:calc(100vh - 100px);background:var(--card,#fff);border:1px solid var(--line,#e5e2da);border-radius:14px;overflow:hidden;display:none;flex-direction:column;box-shadow:0 10px 44px rgba(0,0,0,.3);}',
    '#zs-cs-panel.open{display:flex;}',
    '#zs-cs-panel .zs-cs-hd{background:var(--accent,#8a1f1f);color:#fff;padding:10px 14px;font-size:14px;display:flex;align-items:center;gap:8px;flex-shrink:0;}',
    '#zs-cs-panel .zs-cs-hd .x{margin-left:auto;cursor:pointer;opacity:.85;font-size:15px;padding:0 4px;}',
    '#zs-cs-panel iframe{flex:1;border:0;width:100%;}',
    '@media (max-width:640px){#zs-cs-panel{right:8px;left:8px;width:auto;height:72vh;bottom:70px;}}'
  ].join('');
  document.head.appendChild(s);
  var btn = document.createElement('button');
  btn.id = 'zs-cs-btn'; btn.type = 'button'; btn.innerHTML = '⚔️ 在线客服';
  var panel = document.createElement('div');
  panel.id = 'zs-cs-panel';
  panel.innerHTML = '<div class="zs-cs-hd"><span>⚔️ 智神客服</span><span class="x" title="收起">✕</span></div><iframe title="智神在线客服" allow="clipboard-write"></iframe>';
  document.body.appendChild(btn); document.body.appendChild(panel);
  var ifr = panel.querySelector('iframe');
  var opened = false;
  function theme(){ try { return document.documentElement.getAttribute('data-theme') || 'light'; } catch(e){ return 'light'; } }
  function open(){
    ifr.src = 'https://gz.zhishendiguo.com/cs/?theme=' + theme() + '&t=' + Date.now();
    panel.classList.add('open'); opened = true;
  }
  btn.onclick = function(){ panel.classList.contains('open') ? close() : open(); };
  function close(){ panel.classList.remove('open'); ifr.src = 'about:blank'; }
  panel.querySelector('.x').onclick = close;
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
})();
