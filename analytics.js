// GoatCounter page-view tracking for internal tools.
// Include with: <script src="/analytics.js" defer></script>
// Dashboard: https://<GOATCOUNTER_CODE>.goatcounter.com
(function () {
  var GOATCOUNTER_CODE = 'yotpo-ps';

  window.goatcounter = {
    // Count /email-builder and /email-builder.html (and / and /index.html) as one page, and ignore query strings
    path: function (p) { return p.split('?')[0].replace(/\.html$/, '').replace(/\/index$/, '/'); }
  };

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
