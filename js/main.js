$(document).ready(function(){
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
  });
});

let viewPort = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(viewPort <= 880) {
  console.log(viewPort);
  let chatBar = document.querySelector('#chat-bar');
  chatBar.style.display = 'none';
  console.log(chatBar);
  
  let chatArea = document.querySelector('#chat-area');
  chatArea.setAttribute('class', 'm12 col s12 grey lighten-3');
  
}