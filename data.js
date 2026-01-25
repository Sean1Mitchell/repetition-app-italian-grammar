// ======================================
// CARD DATA
// ======================================
// This file contains *only data*.
// No DOM access. No logic. No state.
// app.js reads from here and renders the UI.

const CARD_DATA = {

  // --------------------------------------
  // DEFINITE ARTICLES
  // --------------------------------------
  "definite-articles": [

    // ------------------------------------
    //  SPECIFIC "THE" VERSIONS
    // ------------------------------------
    {
      question: "when is \"il\" used?",
      answers: [
        { text: "hard sound consonant", correct: false },
        { text: "easy sound consonant", correct: true },
        { text: "used interchangeably", correct: false },
        { text: "whenever we want", correct: false }
      ],
      explanation: "‘il’ is used for masculine singular nouns starting with an easy sound consonant."
    },
    {
      question: "when is \"lo\" used?",
      answers: [
        { text: "whenever we want", correct: false },
        { text: "used interchangeably", correct: false },
        { text: "hard sound consonant", correct: true },
        { text: "easy sound consonant", correct: false }
      ],
      explanation: "‘lo’ is used for masculine singular nouns starting with a hard sound consonant."
    },
    {
      question: "when is \"l'\" used?",
      answers: [
        { text: "whenever we want", correct: false },
        { text: "easy sound consonant", correct: false },
        { text: "hard sound consonant", correct: false },
        { text: "vowel", correct: true }
      ],
      explanation: "‘l'’ is used for masculine singular nouns starting with a vowel."
    },
    {
      question: "when is \"i\" used?",
      answers: [
        { text: "used interchangeably", correct: false },
        { text: "hard sound consonant", correct: false },
        { text: "whenever we want", correct: false },
        { text: "easy sound consonant (plural)", correct: true }
      ],
      explanation: "‘i’ is used for masculine plural nouns starting with an easy sound consonant."
    },
    {
      question: "when is \"gli\" used?",
      answers: [
        { text: "any consonant", correct: false },
        { text: "used interchangeably", correct: false },
        { text: "easy sound consonant or a vowel", correct: false },
        { text: "hard sound consonant or a vowel", correct: true }
      ],
      explanation: "‘gli’ is used for masculine plural nouns starting with a hard sound consonant or a vowel."
    },
    {
      question: "when is \"la\" used?",
      answers: [
        { text: "any consonant", correct: true },
        { text: "used interchangeably", correct: false },
        { text: "any vowel", correct: false },
        { text: "whenever we want", correct: false }
      ],
      explanation: "‘la’ is used for feminine singular nouns starting with any consonant."
    },
    {
      question: "when is \"l'\" used (feminine)?",
      answers: [
        { text: "any vowel", correct: true },
        { text: "whenever we want", correct: false },
        { text: "used interchangeably", correct: false },
        { text: "any consonant", correct: false }
      ],
      explanation: "‘l'’ is used for feminine singular nouns starting with a vowel."
    },
    {
      question: "when is \"le\" used?",
      answers: [
        { text: "any consonant or vowel", correct: true },
        { text: "only hard consonant", correct: false },
        { text: "only easy consonant", correct: false },
        { text: "only vowel", correct: false }
      ],
      explanation: "‘le’ is used for all feminine plural nouns."
    },

    // ----------------------------------------
    //  SPECIFIC "THE" VERSIONS (GENDER/NUMBER)
    // ----------------------------------------
    {
      question: "il",
      answers: [
        { text: "the (feminine singular)", correct: false },
        { text: "the (masculine plural)", correct: false },
        { text: "the (masculine singular)", correct: true },
        { text: "the (feminine plural)", correct: false }
      ],
      explanation: "‘il’ is used for masculine singular nouns starting with an easy sound consonant."
    },
    {
      question: "lo",
      answers: [
        { text: "the (feminine plural)", correct: false },
        { text: "the (masculine singular)", correct: true },
        { text: "the (feminine singular)", correct: false },
        { text: "the (masculine plural)", correct: false }
      ],
      explanation: "'lo' is used for masculine singular nouns starting with a hard sound consonant."
    },
    {
      question: "l'",
      answers: [
        { text: "the (masculine only)", correct: false },
        { text: "the (feminine only)", correct: false },
        { text: "the (masculine or feminine plural)", correct: false },
        { text: "the (masculine or feminine singular with vowel)", correct: true }
      ],
      explanation: "'l'' is used for masculine or feminine singular nouns starting with a vowel."
    },
    {
      question: "la",
      answers: [
        { text: "the (masculine plural)", correct: false },
        { text: "the (feminine plural)", correct: false },
        { text: "the (masculine singular)", correct: false },
        { text: "the (feminine singular)", correct: true }
      ],
      explanation: "'la' is used for feminine singular nouns starting with any consonant."
    },
    {
      question: "i",
      answers: [
        { text: "the (feminine singular)", correct: false },
        { text: "the (masculine singular)", correct: false },
        { text: "the (feminine plural)", correct: false },
        { text: "the (masculine plural)", correct: true }
      ],
      explanation: "'i' is used for masculine plural nouns starting with an easy sound consonant."
    },
    {
      question: "gli",
      answers: [
        { text: "the (feminine plural)", correct: false },
        { text: "the (masculine plural)", correct: true },
        { text: "the (feminine singular)", correct: false },
        { text: "the (masculine singular)", correct: false }
      ],
      explanation: "'gli' is used for masculine plural nouns starting with a hard sound consonant or a vowel."
    },
    {
      question: "le",
      answers: [
        { text: "the (masculine singular)", correct: false },
        { text: "the (feminine singular)", correct: false },
        { text: "the (masculine plural)", correct: false },
        { text: "the (feminine plural)", correct: true }
      ],
      explanation: "'le' is used for all feminine plural nouns."
    },

    // ------------------------------------------------
    //  SPECIFIC "THE" VERSIONS (CONSONANT/VOWEL TYPES)
    // ------------------------------------------------
    {
      question: "easy sound consonant",
      answers: [
        { text: "any adjective", correct: false },
        { text: "x,y,z,gn,pn,ps,sc", correct: false },
        { text: "b,c,d,f,g,h,l,m,n,p,s,t,v,w,x,y,z", correct: true },
        { text: "a,e,i,o,u", correct: false }
      ],
      explanation: "An easy sound consonant is a consonant that is easy to pronounce."
    },
    {
      question: "hard sound consonant",
      answers: [
        { text: "a,e,i,o,u", correct: false },
        { text: "b,c,d,f,g,h,l,m,n,p,s,t,v,w,x,y,z", correct: false },
        { text: "any adjective", correct: false },
        { text: "x,y,z,gn,pn,ps,sc", correct: true }
      ],
      explanation: "A hard sound consonant is a consonant or consonant cluster that is harder to pronounce."
    }
  ],

  // --------------------------------------
  // INDEFINITE ARTICLES
  // --------------------------------------
  "indefinite-articles": [
    {
      question: "un",
      answers: [
        { text: "a / an (masculine)", correct: true },
        { text: "a / an (feminine)", correct: false },
        { text: "the (masculine)", correct: false },
        { text: "the (feminine)", correct: false }
      ],
      explanation: "‘un’ is used for masculine nouns starting with most consonants or vowels."
    }
  ],

  // --------------------------------------
  // DESCRIPTIVE ADJECTIVES
  // --------------------------------------
  "descriptive-adjectives": [
    {
      question: "grande",
      answers: [
        { text: "big / large", correct: true },
        { text: "small", correct: false },
        { text: "fast", correct: false },
        { text: "old", correct: false }
      ],
      explanation: "‘Grande’ means big or large and agrees in gender and number."
    }
  ],

  // --------------------------------------
  // POSSESSIVE ADJECTIVES
  // --------------------------------------
  "possessive-adjectives": [
    {
      question: "mio",
      answers: [
        { text: "my (masculine singular)", correct: true },
        { text: "my (feminine singular)", correct: false },
        { text: "mine", correct: false },
        { text: "your", correct: false }
      ],
      explanation: "‘Mio’ agrees with the noun, not the owner."
    }
  ],

  // --------------------------------------
  // NOUNS VS VERBS
  // --------------------------------------
  "noun-vs-verb": [
    {
      question: "parlare (to speak)",
      answers: [
        { text: "verb", correct: true },
        { text: "noun", correct: false },
        { text: "adjective", correct: false },
        { text: "article", correct: false }
      ],
      explanation: "‘Parlare’ is an infinitive verb meaning ‘to speak’."
    }
  ]
};

// --------------------------------------
// OPTIONAL EXPORT (for future modules)
// --------------------------------------
// export { CARD_DATA };