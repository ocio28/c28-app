const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

export function isIos() {
  return isMobile.iOS()
}

export function openGameUrl(urls: any) {
  const hasIos = urls.find((v: any) => v.tipo === 'ios')
  if (hasIos && isIos()) {
    window.open(hasIos.link, "_blank")?.focus()
  } else {
    window.open(urls[0].link, "_blank")?.focus()
  }
}
