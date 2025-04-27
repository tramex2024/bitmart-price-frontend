
// Splash with Fade
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      document.getElementById('app').classList.remove('hidden');
      initChart();
    }, 1000);
  }, 3000);
});

function initChart() {
  const chart = document.createElement('div');
  chart.id = 'tv_chart_container';
  chart.style.height = '100%';
  document.getElementById('chart').appendChild(chart);

  new TradingView.widget({
    container_id: "tv_chart_container",
    autosize: true,
    symbol: "BINANCE:BTCUSDT",
    interval: "1",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    allow_symbol_change: true,
    hide_side_toolbar: false
  });
}

// Toggle Referral Banner
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-banner');
  const banner = document.getElementById('referral-banner');
  toggleButton.addEventListener('click', () => {
    if (banner.style.display === 'none') {
      banner.style.display = 'flex';
      toggleButton.textContent = '⬆️';
    } else {
      banner.style.display = 'none';
      toggleButton.textContent = '⬇️';
    }
  });
});
