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
  <div class="ma">
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
  <div class="menu" onclick="menu()">
    <svg viewBox="0 0 60 60" width="60" height="60">
      <line x1="10" y1="15" x2="50" y2="15" stroke="#fff" stroke-width="5"/>
      <line x1="10" y1="30" x2="50" y2="30" stroke="#fff" stroke-width="5"/>
      <line x1="10" y1="45" x2="50" y2="45" stroke="#fff" stroke-width="5"/>
    </svg>
  </div>
</div>
<div id="menu" class="hih">
</div>
<div id="gut" class="hih2">
  <h2>相互リンク</h2>
まだ相互リンクはありません。募集しています。
  <h2>更新情報</h2>
  <h3>2020/12/25</h3>こういう飛び出るメニューを作りました。
  <h3>2020/12/24</h3>このサイトを1から作りました。
</div>
<div class="main">
`
  let a = '</div>このページのライセンスは<a href="https://creativecommons.org/licenses/' + url + '/deed.ja">' + license + '</a>です。' + ( license == 'CC BY 4.0' ?'つまりクレジットだけ書いておけば自由にプログラムとかを使っていい感じのページです。':'') + '</body></html>'
  body = body + document.body.innerHTML + a
  document.body.innerHTML = body
  document.getElementsByTagName('head')[0].innerHTML = head
  document.body.style = ''
}

function menu() {
  document.getElementById('menu').classList.toggle('hyo');
  document.getElementById('menu').classList.toggle('hih');
  document.getElementById('gut').classList.toggle('hyo2');
  document.getElementById('gut').classList.toggle('hih2');
}