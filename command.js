function startLoad(){
  const loadWindow = document.querySelector('#loadWindow');
  loadWindow.show();
}
function endLoad(){
  const loadWindow = document.querySelector('#loadWindow');
  loadWindow.close();
  document.querySelector('body').inert = false;
  console.log('おわた');
}
function termsofuse(){
    if(localStorage.getItem('同意') != 'true'){
      const terms = document.getElementById('terms');
      terms.showModal();
      document.querySelector('#terms button').addEventListener('click', () => {
        localStorage.setItem('同意', 'true')
        terms.close();
      });
    }
}
