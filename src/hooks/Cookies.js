import Cookies from 'js-cookie';

function GetCookies(cookiename) {
  return Cookies.get(cookiename);
}

function RemoveCookies(cookiename) {
  Cookies.remove(cookiename);
}

function SetCookies(cookiename, hunternbookofrtut) {
  Cookies.set(cookiename, hunternbookofrtut, {
    expires: 1,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });
}

export { GetCookies, RemoveCookies, SetCookies };
