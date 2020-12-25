function include( license , url ) {
  let head = `
<link rel="icon" href="/favicon.ico">
<link rel="stylesheet" href="/css.css">
<title>Yukkkuのhtmlとかcssとか練習場</title>
`
  let body = `
<div class="top">
  <div class="home">
    <a href="/">
      <img src="/icon.png" width="60" height="60">
      <font size="5" class="gazoyoko">Home</font>
    </a>
  </div>
  <div class="profile">
    <a href="/profile">
      <font size="5">Profile</font>
    </a>
  </div>
  <div class="list">
    <a href="/list">
      <font size="5">記事一覧</font>
    </a>
  </div>
  <div class="Scratch">
    <a href="https://scratch.mit.edu/users/yukku">
      <font size="5">Scratchのプロフ</font>
    </a>
  </div>
</div>
<div class="main">
`
  let a = '</div>このページのライセンスは<a href="https://creativecommons.org/licenses/' + url + '/deed.ja">' + license + '</a>です。' + ( license == 'CC BY 4.0' ?'つまりクレジットだけ書いておけば自由にプログラムとかを使っていい感じのページです。':'') + '</body></html>'
  body = body + document.body.innerHTML + a
  document.body.innerHTML = body
  document.getElementsByTagName('head')[0].innerHTML = head
  document.body.style = ''
}
