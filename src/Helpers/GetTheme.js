export const getTheme = () => {
  const themeOnLocale = `${window.localStorage.getItem('theme')}`;
  if (['light', 'dark'].includes(themeOnLocale)) {
    return themeOnLocale;
  }

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) {
    return 'light';
  }
  return 'dark';
};
