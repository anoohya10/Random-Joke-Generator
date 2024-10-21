// use element.inner html is used to populate a div with html search online about this method and create a website with a div tag containing a random joke given an array of jokes
// use math dot random and fetch jokes from the internet use any website to create the array your website should show a random joke on every reload minimum length of your jokes array should be 10
// let myjokes = [
//             {
//                 "category": "Programming",
//                 "type": "twopart",
//                 "setup": "Why did the web developer walk out of a resturant in disgust?",
//                 "delivery": "The seating was laid out in tables.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 6,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "twopart",
//                 "setup": "How do you know God is a shitty programmer?",
//                 "delivery": "He wrote the OS for an entire universe, but didn't leave a single useful comment.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": true,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": true
//                 },
//                 "id": 19,
//                 "safe": false,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "twopart",
//                 "setup": "Why is 6 afraid of 7 in hexadecimal Canada?",
//                 "delivery": "Because 7 8 9 A?",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 7,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "twopart",
//                 "setup": "What is the best prefix for global variables?",
//                 "delivery": "//",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 32,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "twopart",
//                 "setup": "So what's a set of predefined steps the government might take to preserve the environment?",
//                 "delivery": "An Al-Gore-ithm.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 52,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
//                 "flags": {
//                     "nsfw": true,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": true
//                 },
//                 "id": 30,
//                 "safe": false,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "twopart",
//                 "setup": "Why do programmers prefer using the dark mode?",
//                 "delivery": "Because light attracts bugs.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 232,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 43,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 123,
//                 "safe": true,
//                 "lang": "en"
//             },
//             {
//                 "category": "Programming",
//                 "type": "single",
//                 "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
//                 "flags": {
//                     "nsfw": false,
//                     "religious": false,
//                     "political": false,
//                     "racist": false,
//                     "sexist": false,
//                     "explicit": false
//                 },
//                 "id": 3,
//                 "safe": true,
//                 "lang": "en"
//             }
//         ]

// let index = Math.floor(Math.random()* (myjokes.length-1))
// joke.innerHTML =myjokes[index].joke

const jokeEl = document.getElementById('joke')
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);
generateJoke();

 async function generateJoke(){
   const jokeRes = await fetch('https://icanhazdadjoke.com/', {
       headers: {
           'Accept': 'application/json'
       }
    });

    const joke = await jokeRes.json();

   jokeEl.innerHTML = joke.joke;
}
