const preset = document.querySelector("#game-preset");
import {shuffle} from './card.js';

export let artists = [];

export let eighties = [
    "Prince",
    "The Smiths",
    "U2",
    "R.E.M.",
    "Bruce Springsteen",
    "Public Enemy",
    "Pixies",
    "New Order",
    "Talking Heads",
    "Michael Jackson",
    "Madonna",
    "Sonic Youth",
    "Elvis Costello",
    "The Cure",
    "Run D.M.C.",
    "Beastie Boys",
    "Guns n' Roses",
    "The Police",
    "The Replacements",
    "Metallica",
    "Peter Gabriel",
    "Pretenders",
    "N.W.A.",
    "AC/DC",
    "Dexy's Midnight Runners",
    "Pet Shop Boys",
    "Paul Simon",
    "The Clash",
    "Motorhead",
    "Kate Bush",
    "Depeche Mode",
    "David Bowie",
    "Def Leppard",
    "Cyndi Lauper",
    "Tracy Chapman",
    "Van Halen",
    "The Dead Kennedys",
    "Marvin Gaye",
    "Janet Jackson",
    "Slayer",
    "Bon Jovi",
    "Iron Maiden",
    "Jane's Addiction",
    "Tina Turner",
    "Neil Young",
    "George Michael",
    "Duran Duran",
    "Dire Straits",
    "John Cougar Mellancamp",
    "Black Flag",
    "Simple Minds",
    "Faith No More",
    "Nine Inch Nails",
    "The Rolling Stones",
    "Motley Crue",
    "Poison",
    "Steely Dan",
    "Foreigner"
];

export let country90s = [
    "Check Yes or No",
    "Friends in Low Places",
    "Carrying Your Love With Me",
    "Should've Been a Cowboy",
    "The Dance",
    "Chattahoochee",
    "Boot Scootin' Boogie",
    "She's in Love With the Boy",
    "I Cross My Heart",
    "The Thunder Rolls",
    "Dust On The Bottle",
    "Gone Country",
    "Strawberry Wine",
    "She Don't Know She's Beautiful",
    "Heads Carolina, Tails California",
    "Don't Take The Girl",
    "Meet in the Middle",
    "I'm In A Hurry(And I Don't Know Why)",
    "Write This Down",
    "Straight Tequila Night",
    "I Swear",
    "Seminole Wind",
    "Fancy",
    "My Maria",
    "Don't Rock the Jukebox",
    "Carried Away",
    "Love Without End Amen",
    "Killin' Time",
    "Here's a Quarter(Call Someone Who Cares)",
    "Every Light in the House",
    "Watermelon Crawl",
    "Independence Day",
    "Maybe It Was Memphis",
    "Pickup Man",
    "God Blessed Texas",
    "Any Man of Mine",
    "John Deere Green",
    "Little Bitty",
    "It's Your Love",
    "Just To See You Smile",
    "Anymore",
    "Amazed",
    "You're Still the One",
    "How Do I Live",
    "Go Rest High on That Mountain",
    "I Like It, I Love It",
    "The Keeper Of The Stars",
    "Little Rock",
    "How Do You Like Me Now?!",
    "Where The Green Grass Grows",
    "How Long Gone",
    "Ain't That Lonely Yet",
    "Man! I Feel Like A Woman",
    "He Didn't Have to Be",
    "I Just Want to Dance with You",
    "Cowboy Take Me Away",
    "Every Once in a While",
    "How Forever Feels",
    "A Broken Wing",
    "I Still Believe in You"
]

//Sets the game mode
function setPreset() {
    if (document.getElementById("game-preset").selectedIndex == '0') {
        artists.length = [];
    } else if (document.getElementById("game-preset").selectedIndex == '1') {
        artists = eighties;
    } else if (document.getElementById("game-preset").selectedIndex == '2') {
        artists = country90s;
    }
}

preset.addEventListener("change", (event) => {
    setPreset();
    shuffle();
})
