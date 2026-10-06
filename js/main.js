// 页面加载后淡入
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});

// 点任意弹窗 → 关闭它自己
document.querySelectorAll('.popup-overlay').forEach(function (popup) {
  popup.addEventListener('click', function () {
    popup.classList.remove('show');
  });
});

// 所有跨页面链接：直接跳转
document.querySelectorAll('a[href]').forEach(function (link) {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('http') || link.target === '_blank') return;

  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = href;
  });
});