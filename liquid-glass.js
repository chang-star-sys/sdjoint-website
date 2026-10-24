/* Liquid Glass 滑块：照 iOS 27 的做法，无级调节玻璃的透明↔磨砂程度。
   只改 CSS 变量 --tint，liquid-glass.css 里的材质会跟着变。 */
(function () {
  var range = document.getElementById('lgRange');
  var val = document.getElementById('lgRangeVal');
  if (!range) return;
  function apply(v) {
    document.documentElement.style.setProperty('--tint', (v / 100).toFixed(2));
    if (val) val.textContent = v + '%';
  }
  apply(parseInt(range.value, 10) || 42);
  range.addEventListener('input', function () { apply(parseInt(range.value, 10) || 0); });
})();
