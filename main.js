const APIUrl="https://www.superheroapi.com/api.php/1798859783779356/";

var search=document.getElementById("search-btn");

var random=document.getElementById("random-btn");

var text=document.querySelector(".search-text");

var HeroStats=document.querySelector(".content");

/*

Acces Token : 1798859783779356

*/

search.addEventListener("click",onSearch);

random.addEventListener("click",onRandom);

function onSearch(e)

{

  var n=text.value;

  var input;

  input=APIUrl+"search/"+n;

  console.log(input);

  getHero(input,0);

}

function onRandom(e)

{

  var num=Math.ceil(Math.random()*731);

  var input=APIUrl+num;

  getHero(input,1);

}

const getHero=(e,t)=>

{

  if(t==1) {

  fetch(e).then(response => response.json()).then(json =>{

  HeroStats.innerHTML=`<h1>${json.name}</h1><img src='${json.image.url}' height=300 >`+getStats(json);

  });

  }

  else

  {

    fetch(e).then(response => response.json()).then(json =>{

      const hero=json.results[0];

  HeroStats.innerHTML=`<h1>${hero.name}</h1>

  <img src='${hero.image.url}' height=300 width=300>`+getStats(hero);

  });

  }

}

const getStats=(character)=>{

 const stats= Object.keys(character.powerstats).map(stat=>{

   return `<p> ${stat.toUpperCase()}  :   ${character.powerstats[stat]}</p>`;

 });

 return stats.join(' ');

}
