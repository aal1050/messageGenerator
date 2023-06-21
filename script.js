// My Message / Quote Generator
const quoteFactory = (category, key, quoteNum, quote, sourceInfo) => {
    return {
        _category: category,
        _keyID: key,
        _quoteNum: quoteNum,
        _quote: quote,
        _source_info: sourceInfo,

        //TO DO: Add setters and getters
    }
}

let category = "";
let keyID = "";

//-------------------------------------
//Build "People" quote objects
//-------------------------------------
category = "People";

//-- Person #1 - Einstein Quotes
keyID = "Albert Einstein";
const einsteinQ1 = quoteFactory(category, keyID, 1,
    "Blind obedience to authority is the greatest enemy of truth.",
    "Letter to Jost Winteler (July 8th, 1901), quoted in The Private Lives of Albert Einstein by Roger Highfields and Paul Carter (1993), p. 79. Einstein had been annoyed that Paul Drude, editor of Annalen der Physik, had dismissed some criticisms Einstein made of Drude's electron theory of metals.");
const einsteinQ2 = quoteFactory(category, keyID, 2,
    "In living through this 'great epoch,' it is difficult to reconcile oneself to the fact that one belongs to that mad, degenerate species that boasts of its free will. How I wish that somewhere there existed an island for those who are wise and of good will! In such a place even I should be an ardent patriot!",
    "Letter to Paul Ehrenfest, early December 1914. Collected Papers of Albert Einstein, Vol. 8, Doc. 39. Quoted in The New Quotable Einstein by Alice Calaprice (2005), p. 3");
const einsteinQ3 = quoteFactory(category, keyID, 3,
    "In so far as theories of mathematics speak about reality, they are not certain, and in so far as they are certain, they do not speak about reality.",
    "Geometrie and Erfahrung (1921) pp. 3-4 link.springer.com as cited by Karl Popper, The Two Fundamental Problems of the Theory of Knowledge (2014) Tr. Andreas Pickel, Ed. Troels Eggers Hansen.");
const einsteinQ4 = quoteFactory(category, keyID, 4,
    "Test Einstein Quote 4",
    "");
const einsteinQ5 = quoteFactory(category, keyID, 5,
    "Test Einstein Quote 5",
    "");
const einsteingQuotes = [einsteinQ1, einsteinQ2, einsteinQ3, einsteinQ4, einsteinQ5];

//-- Person #2 - Aristotle
keyID = "Aristotle";
const aristotleQ1 = quoteFactory(category, keyID, 1,
    "Knowledge of the fact differs from knowledge of the reason for the fact",
    "Posterior Analytics I. 13, 78a.22");
const aristotleQ2 = quoteFactory(category, keyID, 2,
    "[I]t is impossible for motion to subsist without place, and void, and time.",
    "Physics Book III, Ch. I, p. 136.");
const aristotleQ3 = quoteFactory(category, keyID, 3,
    "Test Aristotle Quote 3",
    "");
const aristotleQ4 = quoteFactory(category, keyID, 4,
    "Test Aristotle Quote 4",
    "");
const aristotleQ5 = quoteFactory(category, keyID, 5,
    "Test Aristotle Quote 5",
    "");
const aristotleQuotes = [aristotleQ1, aristotleQ2, aristotleQ3, aristotleQ4, aristotleQ5];

//-- Person #3 - Laozi
keyID = "Laozi";
const laoziQ1 = quoteFactory(category, keyID, 1,
    " Test Laozi quote 1",
    "");
const laoziQ2 = quoteFactory(category, keyID, 2,
    " Test Laozi quote 2",
    "");
const laoziQ3 = quoteFactory(category, keyID, 3,
    " Test Laozi quote 3",
    "");
const laoziQ4 = quoteFactory(category, keyID, 4,
    " Test Laozi quote 4",
    "");
const laoziQ5 = quoteFactory(category, keyID, 5,
    " Test Laozi quote 5",
    "");
const laoziQuotes = [laoziQ1, laoziQ2, laoziQ3, laoziQ4, laoziQ5];


//-------------------------------------
//Build "Literary Works" quote objects
//-------------------------------------
category = "Literary Works";

//-- Literary Work #1 - Dune
keyID = "Dune";
const duneQ1 = quoteFactory(category, keyID, 1,
    "A popular man arouses the jealousy of the powerful.",
    "Book 1 Dune - Thufir Hawat");
const duneQ2 = quoteFactory(category, keyID, 2,
    "Hope clouds observation.",
    "Book 1 Dune - Reverend Mother Gaius Helen Mohiam");
const duneQ3 = quoteFactory(category, keyID, 3,
    "You cannot back into the future.",
    "Book 2: Muad'Dib - Usul/Paul-Muad'Dib, to a shaking Chani, as they shared prescient consciousness due to the changed Water of Life");
const duneQ4 = quoteFactory(category, keyID, 4,
    " Test dune quote 4",
    "");
const duneQ5 = quoteFactory(category, keyID, 5,
    " Test dune quote 5",
    "");
const duneQuotes = [duneQ1, duneQ2, duneQ3, duneQ4, duneQ5];


//-- Literary Work #2 - The Little Prince
keyID = "Le Petit Prince (The Little Prince)";
const theLittlePrinceQ1 = quoteFactory(category, keyID, 1,
    "Les grandes personnes ne comprennent jamais rien toutes seules, et c'est fatigant, pour les enfants, de toujours et toujours leur donner des explications. (Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to them.",
    "Chapter I");
const theLittlePrinceQ2 = quoteFactory(category, keyID, 2,
    "Quand on veut un mouton, c'est la preuve qu'on existe. (If somebody wants a sheep, that is proof that somebody exists.)",
    "Chapter IV");
const theLittlePrinceQ3 = quoteFactory(category, keyID, 3,
    "C'est véritablement utile puisque c'est joli. (It is truly useful since it is beautiful.)",
    "Chapter XIV");
const theLittlePrinceQ4 = quoteFactory(category, keyID, 4,
    " Test The Little Prince quote 4",
    " ");
const theLittlePrinceQ5 = quoteFactory(category, keyID, 5,
    " Test The Little Prince quote 5",
    "");
const theLittlePrinceQuotes = [theLittlePrinceQ1, theLittlePrinceQ2, theLittlePrinceQ3,
    theLittlePrinceQ4, theLittlePrinceQ5];

//-- Literary Work #3 - TEST LW 3
keyID = "Literary Work #3";
const LW3Q1 = quoteFactory(category, keyID, 1,
    "Test LW3 - Quote 1",
    "");
const LW3Q2 = quoteFactory(category, keyID, 2,
    "Test LW3 - Quote 2",
    "");
const LW3Q3 = quoteFactory(category, keyID, 3,
    "Test LW3 - Quote 3",
    "");
const LW3Q4 = quoteFactory(category, keyID, 4,
    "Test LW3 - Quote 4",
    "");
const LW3Q5 = quoteFactory(category, keyID, 5,
    "Test LW3 - Quote 5",
    "");
const LW3Quotes = [LW3Q1, LW3Q2, LW3Q3, LW3Q4, LW3Q5];

//-- Literary Work #4 - TEST LW 4
keyID = "Literary Work #4";
const LW4Q1 = quoteFactory(category, keyID, 1,
    "Test LW4 - Quote 1",
    "");
const LW4Q2 = quoteFactory(category, keyID, 2,
    "Test LW4 - Quote 2",
    "");
const LW4Q3 = quoteFactory(category, keyID, 3,
    "Test LW4 - Quote 3",
    "");
const LW4Q4 = quoteFactory(category, keyID, 4,
    "Test LW4 - Quote 4",
    "");
const LW4Q5 = quoteFactory(category, keyID, 5,
    "Test LW4 - Quote 5",
    "");
const LW4Quotes = [LW4Q1, LW4Q2, LW4Q3, LW4Q4, LW4Q5];

//-------------------------------------
//Build "Film" quote objects
//-------------------------------------
category = "Films";

//-- Film #1 - TEST Film 1
keyID = "Film #1";
const film1Q1 = quoteFactory(category, keyID, 1,
    "Test Film #1 - Quote 1",
    "");
const film1Q2 = quoteFactory(category, keyID, 2,
    "Test Film #1 - Quote 2",
    "");
const film1Q3 = quoteFactory(category, keyID, 3,
    "Test Film #1 - Quote 3",
    "");
const film1Q4 = quoteFactory(category, keyID, 4,
    "Test Film #1 - Quote 4",
    "");
const film1Q5 = quoteFactory(category, keyID, 5,
    "Test Film #1 - Quote 5",
    "");
const film1Quotes = [film1Q1, film1Q2, film1Q3, film1Q4, film1Q5];

//-- Film #2 - TEST Film 2
keyID = "Film #2";
const film2Q1 = quoteFactory(category, keyID, 1,
    "Test Film #2 - Quote 1",
    "");
const film2Q2 = quoteFactory(category, keyID, 2,
    "Test Film #2 - Quote 2",
    "");
const film2Q3 = quoteFactory(category, keyID, 3,
    "Test Film #2 - Quote 3",
    "");
const film2Q4 = quoteFactory(category, keyID, 4,
    "Test Film #2 - Quote 4",
    "");
const film2Q5 = quoteFactory(category, keyID, 5,
    "Test Film #2 - Quote 5",
    "");
const film2Quotes = [film2Q1, film2Q2, film2Q3, film2Q4, film2Q5];

//-- Film #3 - TEST Film 3
keyID = "Film #3";
const film3Q1 = quoteFactory(category, keyID, 1,
    "Test Film #3 - Quote 1",
    "");
const film3Q2 = quoteFactory(category, keyID, 2,
    "Test Film #3 - Quote 2",
    "");
const film3Q3 = quoteFactory(category, keyID, 3,
    "Test Film #3 - Quote 3",
    "");
const film3Q4 = quoteFactory(category, keyID, 4,
    "Test Film #3 - Quote 4",
    "");
const film3Q5 = quoteFactory(category, keyID, 5,
    "Test Film #3 - Quote 5",
    "");
const film3Quotes = [film3Q1, film3Q2, film3Q3, film3Q4, film3Q5];

// Create array of quotes for each category
const peopleQuotes = [einsteingQuotes, aristotleQuotes, laoziQuotes];
const literaryWorksQuotes = [duneQuotes, theLittlePrinceQuotes, LW3Quotes, LW4Quotes];
const filmQuotes = [film1Quotes, film2Quotes, film3Quotes];

// Create array of all quotes by Category
const allQuotesbyCateogry = [peopleQuotes, literaryWorksQuotes, filmQuotes];

//get random cateogry  -- eg. People, Literary Works, Films etc.
const numberofCategories = allQuotesbyCateogry.length;
//console.log("Number of Categories: " + numberofCategories);
let index = Math.floor(Math.random() * (numberofCategories - 1));
const selectedCategory = allQuotesbyCateogry[index];

//get random item in selected Category -- e.g. Aristotle, Laozi, The Little Prince, Dune etc.  
const numberofItems = selectedCategory.length;
index = Math.floor(Math.random() * (numberofItems - 1));
const selectedItem = selectedCategory[index];

//get random quote for selected item in selected Category 
const numberofQuotes = selectedItem.length;
index = Math.floor(Math.random() * (numberofQuotes - 1));
const selectedQuote = selectedItem[index];


console.log("Category: " + selectedQuote._category);
console.log("Name: " + selectedQuote._keyID);
console.log("Quote Number: " + selectedQuote._quoteNum);
console.log("Quote: " + selectedQuote._quote);

if (selectedQuote._source_info)
    console.log("Source: " + selectedQuote._source_info);

