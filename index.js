//Answer to No 1

function instagramPost (handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}

// Answer to No 2

// ============================================================

const firstInstagramPost = new instagramPost ('@oscardelahoya', 'They are rigging the election', 'https://i0.wp.com/opinion.premiumtimesng.com/wp-content/files/sites/2/2019/03/Rigged-Election.jpg', '525,000 views', '121,000 likes');

const secondInstagramPost = new instagramPost ('@lizzyregie', 'They couldn\'t rig Etiosa\'s vote because it would have been very obvious', 'https://i.dawn.com/primary/2018/07/5b4f2134bf854.jpg', '300,000 views', '50,000 likes');


console.log (firstInstagramPost);
console.log (firstInstagramPost);


//Answer to No 3

// ============================================================

//Answer to No 3a

function createPerson (Name, age, location) {
    return {
        Name: Name,
        age: age,
        location: location,
    }
}

const musa = createPerson ('Musa Dawodu', 19, 'Lekki, Lagos State');

//Answer to No 3b

function createJambScores (ENG, GOVT, LIT, CRK) {
    return {
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK,
    }
}

const jambScores = createJambScores (70, 85, 82, 94);

musa.jambScores = createJambScores (70, 85, 82, 94);

console.log (musa);

// ============================================================

// Answer to No 4

const firstPhone = {
    brand : 'Samsung',
    model: 'S22 Ultra',
    yearProduced: 2023,
    
}

//First Method = Using Object.assign

const secondPhone = Object.assign ({}, firstPhone);
secondPhone.color = 'black';

console.log ({firstPhone});
console.log ({secondPhone});

//Second Method = Using spread syntax

const thirdPhone = {...firstPhone};
thirdPhone.memory = '128GB';

console.log ({thirdPhone});

//Third method = Using the method JSON.parse

const fourthPhone = JSON.parse (JSON.stringify (firstPhone));
fourthPhone.networkType = '5G';
console.log ({fourthPhone});

// ============================================================

// Answer to No 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for(const party in presidentialCandidates) {
       
        console.log(presidentialCandidates[party] + ' is the presidential candidate of ' + party)
        
    }