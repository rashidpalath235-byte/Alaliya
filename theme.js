(() => {
  const root = document.documentElement;
  const hour = new Date().getHours();
  const period = hour < 6 || hour >= 18 ? 'night' : 'day';
  const automaticTheme = period === 'night' ? 'dark' : 'light';
  let theme = automaticTheme;

  try {
    const savedTheme = localStorage.getItem('alalia-theme');
    const savedPeriod = localStorage.getItem('alalia-theme-period');
    if ((savedTheme === 'dark' || savedTheme === 'light') && savedPeriod === period) {
      theme = savedTheme;
    }
    localStorage.setItem('alalia-theme', theme);
    localStorage.setItem('alalia-theme-period', period);
  } catch (error) {}

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();