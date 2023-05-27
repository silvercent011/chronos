export function useCookieTheme() {
  const theme = useCookie<string>("theme");

  if (!theme.value) theme.value = "CustomLightTheme";

  function setTheme(themeName: string) {
    theme.value = themeName;
  }

  return { theme, setTheme };
}
