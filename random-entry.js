(function(){
  var path = window.location.pathname;
  var cleanPath = path.replace(/\/+$/, '');
  var isSiteRoot = cleanPath === '' || /\/Kroma-Demo$/.test(cleanPath);
  if(!isSiteRoot || window.location.search) return;

  fetch('games.json', {cache:'no-store'})
    .then(function(response){ return response.ok ? response.json() : Promise.reject(); })
    .catch(function(){
      return [
        {url:'index.html', status:'live'},
        {url:'game2.html', status:'live'},
        {url:'game3.html', status:'live'},
        {url:'game4.html', status:'live'},
        {url:'game5.html', status:'live'}
      ];
    })
    .then(function(games){
      var liveGames = games.filter(function(game){
        return game && game.status !== 'hidden' && game.url;
      });
      if(!liveGames.length) return;
      var selected = liveGames[Math.floor(Math.random() * liveGames.length)];
      window.location.replace(selected.url);
    });
})();
