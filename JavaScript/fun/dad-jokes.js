var joke;

$.getJSON("https://icanhazdadjoke.com/", function(data){
    joke = data;
    document.getElementById("enter-joke").innerHTML = joke.joke;
});