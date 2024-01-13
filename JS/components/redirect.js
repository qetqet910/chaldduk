const SurbtnS = document.querySelector('.Surbtn');

console.log(SurbtnS)

SurbtnS.addEventListener('click', ele => {
  const res = (window.location.href).substring(0, window.location.href.indexOf('/', window.location.href.indexOf('/')+3))
  location.href = `${res}/index.html`
})
