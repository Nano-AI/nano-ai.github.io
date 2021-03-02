var joke;

$.getJSON("https://official-joke-api.appspot.com/jokes/random/", function(data){
    joke = data;
    document.getElementById("enter-joke").innerHTML = joke.setup;
    document.getElementById("enter-joke-punchline").innerHTML = joke.punchline;
});