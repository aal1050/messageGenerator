// My Quote Generator


//-------------------------
//Function: quoteFactory
//-------------------------
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

// Build Data -- Data consists of a nested set of arrays  
const allQuotesbyCateogry = buildData();

//get random cateogry array -- i.e. People Quotes, Literary Works Quotes or Film Quotes etc
const selectedCategoryArray = getRandomItem(allQuotesbyCateogry);

//get random subject array in the selected Category i.e. if the selected category is
//people then randomly select array of Aristotle quotes, Laozi quotes or Einstein quotes etc.   
const selectedSubjectArray = getRandomItem(selectedCategoryArray);

//get random quote object in selected subject array i.e. if selected subject is "Aristotle", randomly pick 
// one of the quotes in array of Aristotle quotes.
const selectedQuote = getRandomItem(selectedSubjectArray);

//Display quote to terminal
console.log(selectedQuote._quote);
if (selectedQuote._source_info)
    console.log("-- " + selectedQuote._keyID + " -- " + selectedQuote._source_info);
else
    console.log("-- " + selectedQuote._keyID);


//-------------------------
//Function: getRandomItem
//-------------------------
function getRandomItem(array) {
    const index = Math.floor(Math.random() * (array.length - 1));
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
    const lw3Quotes = buildlw3Quotes(category);
    const lw4Quotes = buildlw4Quotes(category);
    const literaryWorksQuotes = [duneQuotes, theLittlePrinceQuotes, lw3Quotes, lw4Quotes];

    //-------------------------------------
    //Build "Film" quote arrays
    //-------------------------------------
    category = "Films";
    const film1Quotes = buildf1Quotes(category);
    const film2Quotes = buildf2Quotes(category);
    const film3Quotes = buildf3Quotes(category);
    const film4Quotes = buildf4Quotes(category);
    const filmQuotes = [film1Quotes, film2Quotes, film3Quotes, film4Quotes];

    //return arrary of quotes for each category
    return [peopleQuotes, literaryWorksQuotes, filmQuotes];



}

//------------------------------
//Function: buildEinsteinQuotes
//------------------------------
function buildEinsteinQuotes(category) {

    let keyID = "Albert Einstein";
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

    // return array of all Einstein quotes
    return [einsteinQ1, einsteinQ2, einsteinQ3, einsteinQ4, einsteinQ5];
}

//------------------------------
//Function: buildAristotleQuotes
//------------------------------
function buildAristotleQuotes(category) {

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

    // return array of all Aritotle quotes
    return [aristotleQ1, aristotleQ2, aristotleQ3, aristotleQ4, aristotleQ5];

}

function buildLaoziQuotes(category) {

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

    return [laoziQ1, laoziQ2, laoziQ3, laoziQ4, laoziQ5];

}

function buildDuneQuotes(category) {

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

    return [duneQ1, duneQ2, duneQ3, duneQ4, duneQ5];
}

function buildLittlePrinceQuotes(category) {

    keyID = "Le Petit Prince (The Little Prince)";
    const theLittlePrinceQ1 = quoteFactory(category, keyID, 1,
        "Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to them.",
        "Chapter I");
    const theLittlePrinceQ2 = quoteFactory(category, keyID, 2,
        "If somebody wants a sheep, that is proof that somebody exists.",
        "Chapter IV");
    const theLittlePrinceQ3 = quoteFactory(category, keyID, 3,
        "It is truly useful since it is beautiful.",
        "Chapter XIV");
    const theLittlePrinceQ4 = quoteFactory(category, keyID, 4,
        " Test The Little Prince quote 4",
        " ");
    const theLittlePrinceQ5 = quoteFactory(category, keyID, 5,
        " Test The Little Prince quote 5",
        "");

    return [theLittlePrinceQ1, theLittlePrinceQ2, theLittlePrinceQ3,
        theLittlePrinceQ4, theLittlePrinceQ5];
}

function buildlw3Quotes(category) {

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

    return [LW3Q1, LW3Q2, LW3Q3, LW3Q4, LW3Q5];

}

function buildlw4Quotes(category) {

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

    return [LW4Q1, LW4Q2, LW4Q3, LW4Q4, LW4Q5];
}


function buildf1Quotes(category) {
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

    return [film1Q1, film1Q2, film1Q3, film1Q4, film1Q5];
}


function buildf2Quotes(category) {

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

    return [film2Q1, film2Q2, film2Q3, film2Q4, film2Q5];
}

function buildf3Quotes(category) {

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
    return [film3Q1, film3Q2, film3Q3, film3Q4, film3Q5];
}

function buildf4Quotes(category) {

    keyID = "Film #4";
    const quote1 = quoteFactory(category, keyID, 1,
        "Test Film #4 - Quote 1",
        "");
    const quote2 = quoteFactory(category, keyID, 2,
        "Test Film #3 - Quote 2",
        "");
    const quote3 = quoteFactory(category, keyID, 3,
        "Test Film #3 - Quote 3",
        "");
    const quote4 = quoteFactory(category, keyID, 4,
        "Test Film #3 - Quote 4",
        "");
    const quote5 = quoteFactory(category, keyID, 5,
        "Test Film #3 - Quote 5",
        "");
    return [quote1, quote2, quote3, quote4, quote5];
}





