// My Quote Generator

//--------------------------------
// quoteFactory function
//--------------------------------
const quoteFactory = (category, subject, quoteNum, quote, sourceInfo) => {
    return {
        _category: category,
        _subject: subject,
        _quoteNum: quoteNum,
        _quote: quote,
        _source_info: sourceInfo,

        get category() {
            return this._category;
        },
        get subject() {
            return this._subject;
        },
        get quoteNumber() {
            return this._quoteNum;
        },
        get quote() {
            return this._quote;
        },
        get source() {
            return this._source_info;
        },
        display() {
            console.log(this._quote);
            if (this._source)
                console.log("-- " + this._subject + " -- " + this._source);
            else
                console.log("-- " + this._subject);
        }

    }
}

// Build Data -- Data consists of a nested set of arrays (quote objects grouped by subject grouped by category)
const allQuotesbyCateogry = buildData();

//get random cateogry array -- i.e. People Quotes, Literary Works Quotes or Film Quotes etc
const selectedCategoryArray = getRandomItem(allQuotesbyCateogry);

//get random subject array in the selected Category i.e. if the selected category is
//"People" then randomly select an array of either Aristotle quotes, Laozi quotes, Einstein quotes etc.   
const selectedSubjectArray = getRandomItem(selectedCategoryArray);

//get random quote object in selected subject array i.e. if selected subject is "Aristotle", randomly pick 
// one of the quotes in an array of Aristotle quotes.
const selectedQuote = getRandomItem(selectedSubjectArray);

//Display quote to terminal
selectedQuote.display();


//-------------------------
//Function: getRandomItem
//-------------------------
function getRandomItem(array) {
    const index = Math.floor(Math.random() * array.length);
    //console.log("Index: " + index);
    return array[index];
}

//-------------------------
//Function Build Data
//-------------------------
function buildData() {

    //-------------------------------------
    //Build "People" quote arrays
    //-------------------------------------
    let category = "People";
    const einsteingQuotes = buildEinsteinQuotes(category);
    const aristotleQuotes = buildAristotleQuotes(category);
    const laoziQuotes = buildLaoziQuotes(category);
    const peopleQuotes = [einsteingQuotes, aristotleQuotes, laoziQuotes];

    //-------------------------------------
    //Build "Literary Works" quote arrays
    //-------------------------------------
    category = "Literary Works";
    const duneQuotes = buildDuneQuotes(category);
    const theLittlePrinceQuotes = buildLittlePrinceQuotes(category);
    const z1984Quotes = build1984Quotes(category);
    const prideandPrejudiceQuotes = buildPrideandPrejudiceQuotes(category);
    const literaryWorksQuotes = [duneQuotes, theLittlePrinceQuotes, z1984Quotes, prideandPrejudiceQuotes];

    //-------------------------------------
    //Build "Film" quote arrays
    //-------------------------------------
    category = "Films";
    const casablancaQuotes = buildCasablancaQuotes(category);
    const groundhogDayQuotes = buildGroundhogDayQuotes(category);
    const starWarsQuotes = buildStarWarsQuotes(category);
    const harvyQuotes = buildHarveyQuotes(category);
    const filmQuotes = [casablancaQuotes, groundhogDayQuotes, starWarsQuotes, harvyQuotes];

    //return array of quotes for each category
    return [peopleQuotes, literaryWorksQuotes, filmQuotes];
}

//------------------------------
//Function: buildEinsteinQuotes
//------------------------------
function buildEinsteinQuotes(category) {

    const subject = "Albert Einstein";
    const quote1 = quoteFactory(category, subject, 1,
        "Blind obedience to authority is the greatest enemy of truth.",
        "Letter to Jost Winteler (July 8th, 1901), quoted in The Private Lives of Albert Einstein by Roger Highfields and Paul Carter (1993), p. 79. Einstein had been annoyed that Paul Drude, editor of Annalen der Physik, had dismissed some criticisms Einstein made of Drude's electron theory of metals.");
    const quote2 = quoteFactory(category, subject, 2,
        "In living through this 'great epoch,' it is difficult to reconcile oneself to the fact that one belongs to that mad, degenerate species that boasts of its free will. How I wish that somewhere there existed an island for those who are wise and of good will! In such a place even I should be an ardent patriot!",
        "Letter to Paul Ehrenfest, early December 1914. Collected Papers of Albert Einstein, Vol. 8, Doc. 39. Quoted in The New Quotable Einstein by Alice Calaprice (2005), p. 3");
    const quote3 = quoteFactory(category, subject, 3,
        "In so far as theories of mathematics speak about reality, they are not certain, and in so far as they are certain, they do not speak about reality.",
        "Geometrie and Erfahrung (1921) pp. 3-4 link.springer.com as cited by Karl Popper, The Two Fundamental Problems of the Theory of Knowledge (2014) Tr. Andreas Pickel, Ed. Troels Eggers Hansen.");
    const quote4 = quoteFactory(category, subject, 4,
        "Subtle is the Lord, but malicious He is not.",
        "Remark made during Einstein's first visit to Princeton University (April 1921) as quoted in Einstein (1973) by R. W. Clark, Ch. 14. 'God is slick, but he ain't mean' is a variant translation of this (1946) Unsourced variant: 'God is subtle but he is not malicious.'");
    const quote5 = quoteFactory(category, subject, 5,
        "[I do not] carry such information in my mind since it is readily available in books. ...The value of a college education is not the learning of many facts but the training of the mind to think.",
        "In response to not knowing the speed of sound as included in the Edison Test: New York Times (18 May 1921); Einstein: His Life and Times (1947) Philipp Frank, p. 185; Einstein, A Life (1996) by Denis Brian, p. 129; 'Einstein Due Today' (February 2005) edited by József Illy, Manuscript 25-32 of the Einstein Paper Project; all previous sources as per Einstein His Life and Universe (2007) by Walter Isaacson, p. 299");

    // return array of all Einstein quotes
    return [quote1, quote2, quote3, quote4, quote5];
}

//------------------------------
//Function: buildAristotleQuotes
//------------------------------
function buildAristotleQuotes(category) {

    const subject = "Aristotle";
    const quote1 = quoteFactory(category, subject, 1,
        "Knowledge of the fact differs from knowledge of the reason for the fact",
        "Posterior Analytics I. 13, 78a.22");
    const quote2 = quoteFactory(category, subject, 2,
        "[I]t is impossible for motion to subsist without place, and void, and time.",
        "Physics Book III, Ch. I, p. 136.");
    const quote3 = quoteFactory(category, subject, 3,
        "We should venture on the study of every kind of animal without distaste; for each and all will reveal to us something natural and something beautiful",
        "'Parts of Animals' Book I, 645a.21");
    const quote4 = quoteFactory(category, subject, 4,
        "Music directly represents the passion of the soul. If one listens to the wrong kind of music, he will become the wrong kind of person.",
        "Aristotle, Complete works of Aristotle, Vol. I");
    const quote5 = quoteFactory(category, subject, 5,
        "It is the mark of an educated man to look for precision in each class of things just so far as the nature of the subject admits; it is evidently equally foolish to accept probable reasoning from a mathematician and to demand from a rhetorician scientific proofs.",
        "'Nicomachean Ethics' Book I, 1094b.24");
    const quote6 = quoteFactory(category, subject, 6,
        "Piety requires us to honor truth above our friends.",
        "'Nicomachean Ethics' Book I, 1096a.16");


    // return array of all Aritotle quotes
    return [quote1, quote2, quote3, quote4, quote5, quote6];

}

function buildLaoziQuotes(category) {

    const subject = "Laozi";
    const quote1 = quoteFactory(category, subject, 1,
        "The Tao that can be expressed is not the eternal Tao; The name that can be defined is not the unchanging name.",
        "'Tao Te Ching' Ch. 1, as translated by Ch'u Ta-Kao (1904)");
    const quote2 = quoteFactory(category, subject, 2,
        "The Tao is teachable, yet understanding my words is not the same as following the Tao.",
        "'Tao Te Ching' Chapter 1, translated by Yuhui Liang");
    const quote3 = quoteFactory(category, subject, 3,
        "The Tao is like a well: used but never used up.",
        "'Tao Te Ching' Ch. 4, as interpreted by Stephen Mitchell (1992)");
    const quote4 = quoteFactory(category, subject, 4,
        "Since before time and space were, the Tao is. It is beyond is and is not.",
        "'Tao Te Ching' Ch. 21, as interpreted by Stephen Mitchell (1992)");
    const quote5 = quoteFactory(category, subject, 5,
        "Knowing others is intelligence; knowing yourself is true wisdom.  Mastering others is strength; mastering yourself is true power.",
        "'Tao Te Ching' Ch. 33, as interpreted by Stephen Mitchell (1992)");

    return [quote1, quote2, quote3, quote4, quote5];

}

function buildDuneQuotes(category) {

    const subject = "Dune";
    const quote1 = quoteFactory(category, subject, 1,
        "A popular man arouses the jealousy of the powerful.",
        "Book 1 (Dune)- Thufir Hawat");
    const quote2 = quoteFactory(category, subject, 2,
        "Hope clouds observation.",
        "Book 1: (Dune) - Reverend Mother Gaius Helen Mohiam");
    const quote3 = quoteFactory(category, subject, 3,
        "You cannot back into the future.",
        "Book 2: (Muad'Dib) - Usul/Paul-Muad'Dib, to a shaking Chani, as they shared prescient consciousness due to the changed Water of Life");
    const quote4 = quoteFactory(category, subject, 4,
        "Science is made up of so many things that appear obvious after they are explained.",
        "Book 2: (Muad'Dib) - Pardot Kynes");
    const quote5 = quoteFactory(category, subject, 5,
        "Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic.",
        "Book 3: (The Prophet) - from The Sayings of Muad'Dib by the Princess Irulan");

    return [quote1, quote2, quote3, quote4, quote5];
}

function buildLittlePrinceQuotes(category) {

    const subject = "Le Petit Prince (The Little Prince)";
    const quote1 = quoteFactory(category, subject, 1,
        "Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to them.",
        "Chapter I");
    const quote2 = quoteFactory(category, subject, 2,
        "If somebody wants a sheep, that is proof that somebody exists.",
        "Chapter IV");
    const quote3 = quoteFactory(category, subject, 3,
        "It is truly useful since it is beautiful.",
        "Chapter XIV");
    const quote4 = quoteFactory(category, subject, 4,
        "Here is my secret. It is very simple: It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
        "Chapter XXI");
    const quote5 = quoteFactory(category, subject, 5,
        "Language is the source of misunderstandings.",
        "Chapter XXI");

    return [quote1, quote2, quote3, quote4, quote5];
}

function build1984Quotes(category) {

    const subject = "1984";
    const quote1 = quoteFactory(category, subject, 1,
        "Like an answer, the three slogans on the white face of the Ministry of Truth came back to him: WAR IS PEACE, FREEDOM IS SLAVERY, IGNORANCE IS STRENGTH. On coins, on stamps, on the covers of books, on banners, on posters, and on the wrappings of a cigarette Packet — everywhere. Always the eyes watching you and the voice enveloping you. Asleep or awake, working or eating, indoors or out of doors, in the bath or in bed — no escape. Nothing was your own except the few cubic centimetres inside your skull.",
        "Part One: Chapter 2");
    const quote2 = quoteFactory(category, subject, 2,
        "Oceania was at war with Eurasia: therefore Oceania had always been at war with Eurasia. The enemy of the moment always represented absolute evil, and it followed that any past or future agreement with him was impossible.",
        "Part One: Chapter 3");
    const quote3 = quoteFactory(category, subject, 3,
        "The immediate advantages of falsifying the past were obvious, but the ultimate motive was mysterious.",
        "Part One: Chapter 7");
    const quote4 = quoteFactory(category, subject, 4,
        "If you kept the small rules, you could break the big ones.",
        "Part Two: Chapter 3");
    const quote5 = quoteFactory(category, subject, 5,
        "All rulers in all ages have tried to impose a false view of the world upon their followers.",
        "Part Two: Chapter 9");
    const quote6 = quoteFactory(category, subject, 6,
        "'How can I help seeing what is in front of my eyes? Two and two are four.' 'Sometimes, Winston. Sometimes they are five. Sometimes they are three. Sometimes they are all of them at once. You must try harder. It is not easy to become sane.'",
        "Part Three: Chapter 2");

    return [quote1, quote2, quote3, quote4, quote5, quote6];
}

function buildPrideandPrejudiceQuotes(category) {

    const subject = "Pride and Prejudice";
    const quote1 = quoteFactory(category, subject, 1,
        "She is tolerable; but not handsome enough to tempt me; ",
        "Mr Darcy to Mr. Bingley about Elizabeth Bennet, in Ch. 3");
    const quote2 = quoteFactory(category, subject, 2,
        "But that is one great difference between us. Compliments always take you by surprise, and me never.",
        "Elizabeth to Jane, in Ch. 4");
    const quote3 = quoteFactory(category, subject, 3,
        "Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.",
        "Mary: Ch. 5");
    const quote4 = quoteFactory(category, subject, 4,
        "Happiness in marriage is entirely a matter of chance",
        "Charlotte Lucas and Lizzy: Ch. 6");
    const quote5 = quoteFactory(category, subject, 5,
        "He is a gentleman; I am a gentleman’s daughter; so far we are equal",
        "Ch. 56");

    return [quote1, quote2, quote3, quote4, quote5];
}


function buildCasablancaQuotes(category) {

    subject = "Casablanca";
    const quote1 = quoteFactory(category, subject, 1,
        "Of all the gin joints in all the towns in all the world, she walks into mine.",
        "Rick Blaine");
    const quote2 = quoteFactory(category, subject, 2,
        "Here's looking at you, kid.",
        "Rick Blaine");
    const quote3 = quoteFactory(category, subject, 3,
        "Oh, please, monsieur. It is a little game we play. They put it on the bill, I tear up the bill. It is very convenient.",
        "Captain Louis Renault");
    const quote4 = quoteFactory(category, subject, 4,
        "In a concentration camp, one is apt to lose a little weight.",
        "Victor Laszlo");
    const quote5 = quoteFactory(category, subject, 5,
        "Well, Rick is the kind of man that...well, if I were a woman, and I were not around, I should be in love with Rick. But what a fool I am talking to a beautiful woman about another man.",
        "Captain Louis Renault");
    const quote6 = quoteFactory(category, subject, 6,
        "You want to feel sorry for yourself, don't you? With so much at stake, all you can think of is your own feelings. One woman has hurt you, and you take your revenge on the rest of the world. You're a coward and a weakling.",
        "Ilsa Lund");

    return [quote1, quote2, quote3, quote4, quote5, quote6];
}


function buildGroundhogDayQuotes(category) {

    const subject = "Groundhog Day";
    const quote1 = quoteFactory(category, subject, 1,
        "This is one time where television really fails to capture the true excitement of a large squirrel predicting the weather.",
        "Phil Connors");
    const quote2 = quoteFactory(category, subject, 2,
        "This is pitiful. A thousand people freezing their butts off, waiting to worship a rat. What a hype! Groundhog Day used to mean something in this town. They used to pull the hog out and they used to eat it. You're hypocrites! All of you!",
        "Phil Connors");
    const quote3 = quoteFactory(category, subject, 3,
        "I was in the Virgin Islands once. I met a girl. We ate lobster, drank piña coladas. At sunset we made love like sea otters. That was a pretty good day. Why couldn't I get that day over and over and over?",
        "Phil Connors");
    const quote4 = quoteFactory(category, subject, 4,
        "Groundhog Day is a film that finds its note and purpose so precisely that its genius may not be immediately noticeable. It unfolds so inevitably, is so entertaining, so apparently effortless, that you have to stand back and slap yourself before you see how good it really is.",
        "Roger Ebert, in Groundhog Day (1993) in Chicago Sun-Times (30 January 2005)");
    const quote5 = quoteFactory(category, subject, 5,
        "Groundhog Day is now associated in the minds of many spiritual seekers with redemption, rebirth and the process of moving to a higher plane.",
        "Andrew Buncombe, in 'Is This the Greatest Story Ever Told? ; A 1993 Romantic Comedy Starring Bill Murray and Andie MacDowell Is Being Hailed by Religious Leaders as the Most Spiritual Film of All Time.' in The Independent ( 2 February 2004)");

    return [quote1, quote2, quote3, quote4, quote5];
}

function buildStarWarsQuotes(category) {

    const subject = "Star Wars";
    const quote1 = quoteFactory(category, subject, 1,
        "I have a very bad feeling about this.",
        "Luke Skywalker");
    const quote2 = quoteFactory(category, subject, 2,
        "We’re doomed!",
        "C-3PO");
    const quote3 = quoteFactory(category, subject, 3,
        "Use the Force, Luke.",
        "Obi-Wan Kenobi");
    const quote4 = quoteFactory(category, subject, 4,
        "The Force is strong with this one.",
        "Darth Vader");
    const quote5 = quoteFactory(category, subject, 5,
        "Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid. I'm in it for the money.",
        "Han Solo");
    const quote6 = quoteFactory(category, subject, 6,
        "Aren’t you a little short for a stormtrooper?",
        "Princess Leia Organa [to Luke, in disguise]");

    return [quote1, quote2, quote3, quote4, quote5, quote6];
}

function buildHarveyQuotes(category) {

    const subject = "Harvey";
    const quote1 = quoteFactory(category, subject, 1,
        "Well, I've wrestled with reality for 35 years, Doctor, and I'm happy to state I finally won out over it.",
        "Elwood P. Dowd");
    const quote2 = quoteFactory(category, subject, 2,
        "Myrtle Mae, you have a lot to learn, and I hope you never learn it.",
        "Veta Louise Simmons");
    const quote3 = quoteFactory(category, subject, 3,
        "I took a course in art last winter. I learnt the difference between a fine oil painting, and a mechanical thing, like a photograph. The photograph shows only the reality. The painting shows not only the reality, but the dream behind it.",
        "Veta Louise Simmons");
    const quote4 = quoteFactory(category, subject, 4,
        "You see, science has overcome time and space. Well, Harvey has overcome not only time and space — but any objections.",
        "Elwood P. Dowd");
    const quote5 = quoteFactory(category, subject, 5,
        "Years ago my mother used to say to me, [...]'In this world, you must be oh so smart, or oh so pleasant.' Well, for years I was smart. I recommend pleasant. You may quote me.",
        "Elwood P. Dowd");

    return [quote1, quote2, quote3, quote4, quote5];
}






