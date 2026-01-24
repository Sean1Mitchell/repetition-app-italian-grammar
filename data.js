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
    {
      question: "il",
      answers: [
        { text: "the (masculine singular)", correct: true },
        { text: "the (feminine singular)", correct: false },
        { text: "a (masculine)", correct: false },
        { text: "a (feminine)", correct: false }
      ],
      explanation: "‘Il’ is used for masculine singular nouns starting with most consonants."
    },
    {
      question: "la",
      answers: [
        { text: "the (feminine singular)", correct: true },
        { text: "the (masculine singular)", correct: false },
        { text: "a (feminine)", correct: false },
        { text: "the (plural)", correct: false }
      ],
      explanation: "‘La’ is used for feminine singular nouns starting with a consonant."
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
      explanation: "‘Un’ is used for masculine nouns starting with most consonants or vowels."
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
      question: "parlare",
      answers: [
        { text: "verb (to speak)", correct: true },
        { text: "noun (speech)", correct: false },
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