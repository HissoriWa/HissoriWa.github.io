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
const ytLink = 'https://youtube.com/channel/UCnNEcmelr_ct8Ctf1b8pgGQ';
const twLink = 'https://x.com/suugaku_tanoshi';
const dcLink = 'https://discord.com/users/wagacourse';