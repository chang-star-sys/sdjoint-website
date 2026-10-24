/* Liquid Glass 小调节钮：默认收起，点击展开滑杆调浓淡（左更透明，右更磨砂） */
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('lgTunerToggle');
  var panel = document.getElementById('lgTunerPanel');
  var range = document.getElementById('lgRange');
  var val = document.getElementById('lgVal');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = panel.hasAttribute('hidden');
      if (open) { panel.removeAttribute('hidden'); } else { panel.setAttribute('hidden', ''); }
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  if (!range || !val) return;
  function apply() {
    root.style.setProperty('--tint', range.value + '%');
    val.textContent = range.value + '%';
  }
  range.addEventListener('input', apply);
  apply();
})();
