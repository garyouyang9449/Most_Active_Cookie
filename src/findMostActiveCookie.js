const filterCookies = (cookies, date) => {
  return cookies.split('\n').filter(cookie => {
    return cookie.includes(date);
  });
};

const mostActiveCookie = (cookies, date) => {
  const filteredCookie = filterCookies(cookies, date);
  let occuence = {};

  filteredCookie.forEach(cookie => {
    const currentCookie = cookie.split(',')[0]

    if (occuence[currentCookie]) {
      occuence[currentCookie] += 1;
    }
    else {
      occuence[currentCookie] = 1;
    }
  })

  const sortedCookie = Object.entries(occuence).sort((c1, c2) => c2[1] - c1[1]);
  const mostActiveCookiesArr = sortedCookie.filter(cookie => {
    return cookie[1] === sortedCookie[0][1];
  })
  
  let mostActiveCookie = [];
  mostActiveCookiesArr.forEach(cookie => {
    mostActiveCookie.push(cookie[0]);
  })

  return mostActiveCookie;
}

exports.mostActiveCookie = mostActiveCookie;