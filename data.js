// ======================================
// CARD DATA
// ======================================
// This file contains *only data*.
// No DOM access. No logic. No state.
// app.js reads from here and renders the UI.

const CARD_DATA = {

  "intangible-assets": [

    {
      question: "what is an intangible asset?",
      answer: "is identifiable and has no physical substance or monetary value."
    },
    {
      question: "what is the recognition criteria?",
      answer: "economic benefit and costs reliably measurable"
    },
    {
      question: "what are the three forms of measurement?",
      answer: "separate purchase, business combination, and internally generated"
    },
    {
      question: "once an intangibe asset is expenses, can it be reversed?",
      answer: "no, they can never be reversed."
    },
    {
      question: "what are the forms of life cycle?",
      answer: "finite and indefinite"
    },
    {
      question: "what is the process for separate purchase measurement?",
      answer: "purchase price + attributable costs - trade discount = balance sheet."
    },
    {
      question: "what is the process for business combination measurement?",
      answer: "purchase consideration - net assets = balance sheet (as goodwill)."
    },
    {
      question: "what is the process for internally generated measurement?",
      answer: "research costs are expensed whereas development costs are only capitalised on conditions."
    },
    {
      question: "what are the conditions for development costs to be capitalised?",
      answer: "reliably measurable and firm has: intention to complete, resources, and intention to use or sell."
    },
    {
      question: "when does capitalisation of development costs begin and end?",
      answer: "begins from the moment conditions are met, ends when available for use or sale. If used, amortised annually."
    }
  ],

  "tangible-non-current-assets": [

    {
      question: "what is a tangible non-current asset?",
      answer: "is a physical asset that is not expected to be converted to cash within one year."
    },
    {
      question: "what is the recognition criteria?",
      answer: "probable future economic benefits and cost can be measured reliably."
    },
    {
      question: "what are the forms of measurement?",
      answer: "bought outright and leased"
    },
    {
      question: "what is the process for bought outright measurement?",
      answer: "purchase price + attributable costs + dismantling/restoration costs - trade discount = balance sheet."
    },
    {
      question: "what is the process for leased measurement?",
      answer: "default is to capitalise as 'right-of-use' unless it's under 12 months old or £5k, then it's expensed as a rental."
    },
    {
      question: "what are the forms of financing?",
      answer: "specific loan and general borrowing."
    },
    {
      question: "what is the process for specific loan?",
      answer: "finance income - construction costs = balance sheet."
    },
    {
      question: "what is the process for general borrowing?",
      answer: "weighted average of all costs = balance sheet."
    },
    {
      question: "when does capitalisation of borrowing costs begin and end?",
      answer: "begins from the moment construction does, or costs does, ends when construction is complete or suspended."
    }
  ],

  "impairment-of-assets": [

    {
      question: "what is an impairment of an asset?",
      answer: "where the carrying amount of an asset exceeds its recoverable amount."
    },
    {
      question: "what are the forms of indicators of impairment?",
      answer: "internal, external, and mandatory."
    },
    {
      question: "what are internal forms?",
      answer: "operating losses, obsolescence, physical damage, and change in usage."
    },
    {
      question: "what are external forms?",
      answer: "decline in market value, change in environment, and change in market interest rates."
    },
    {
      question: "what are mandatory forms?",
      answer: "when an asset life is not known - indefinite. Annual impairment test is required."
    },
    {
      question: "when does impairment exists?",
      answer: "when the carrying amount of an asset exceeds its recoverable amount - the higher of fair value less costs to sell and value in use."
    },
    {
      question: "what are the two forms of recognition?",
      answer: "loss as individual asset and as a cash generating unit (CGU)."
    },
    {
      question: "whats the process for recognition as an individual asset?",
      answer: "reduce carrying amount by the loss and recognise in income statement."
    },
    {
      question: "whats the process for recognition as a cash generating unit (CGU)?",
      answer: "subtract the carrying amount of obsolete and damaged assets, then subtract any CGU goodwill, then reduce the carrying amount of each subsequent asset on a pro-rata basis."
    },
    {
      question: "can an asset be reduced to below it's recoverable amount?",
      answer: "no, an asset cannot be reduced to below its recoverable amount."
    },
  ],

  "provisions": [

    {
      question: "what is a provision?",
      answer: "a liability of uncertain timing or amount."
    },
    {
      question: "what is the recognition criteria?",
      answer: "present obligation (legal or constructive), probable economic benefit, and relliably measurable."
    },
    {
      question: "when does the discosure note of 'Contingent Liabilitie' apply?",
      answer: "when their is only the present obligation under recognition, not probable economic, or not reliably measurable."
    },
    {
      question: "what are the forms of measurement?",
      answer: "restructuring, warranties, and environmental/decommissioning."
    },
    {
      question: "what is the process for restructuring measurement?",
      answer: "can only be recognised when the event has occured."
    },
    {
      question: "what is the process for warranties measurement?",
      answer: "can only be recognised when the firm makes a claim to provide a repair or replace of a product they offer to customers."
    },
    {
      question: "what is the process for environmental/decommissioning measurement?",
      answer: "when a firm is legally or contractually required to cover environmental or decommissioning costs."
    },
  ],

  "financial-instruments": [

    {
      question: "What are the four forms of financial instruments?",
      answer: "debt, debt/equity(elected), debt(elected)/equity, and liability."
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
  ],

  "group-financial-statements": [

    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
  ],

  "corporate-insolvency": [

    {
      question: "what are the three forms of corporate insolvency?",
      answer: "Company Voluntary Arrangement (CVA), Administration, and Liquidation."
    },
    {
      question: "what is a Company Voluntary Arrangement (CVA)?",
      answer: "a gradual repayment of debt to creditors where 75% of creditors must agree to the arrangement."
    },
    {
      question: "what is an Administration?",
      answer: "a gradual repayment of debt to creditors where the firm is protected from legal action and a licensed insolvency practitioner is appointed to manage the firm."
    },
    {
      question: "what is a Liquidation?",
      answer: "firm winds up, needing to sell off assets to pay creditors. offical receiver is appointed to oversee it."
    },
    {
      question: "what is the priority in a liquidation?",
      answer: "1. Secured creditors, 2. Preferential creditors, 3. Unsecured creditors (pro-rata), 4. Shareholders."
    }
  ],

  "financial-reporting-environment": [

    {
      question: "why do regulations exist?",
      answer: "creative accounting, agency problem, and standards alone are insufficient."
    },
    {
      question: "what is creative accounting?",
      answer: "the exploitation of loopholes and judgement to manipulate figures without it being illegal."
    },
    {
      question: "what is the agency problem?",
      answer: "the conflict of interest between management and shareholders."
    },
    {
      question: "why is standards alone insufficient?",
      answer: "judgement and estimates are always present - thus we need governance and ethics."
    },
    {
      question: "who are the key regulatory bodies?",
      answer: "IASB, FRC, UK Endorsement Board, and IFRS."
    },
    {
      question: "who are the IASB?",
      answer: "International Accounting Standards Board - they set the standards."
    },
    {
      question: "who are the FRC?",
      answer: "Financial Reporting Council - they monitor and enforce standards."
    },
    {
      question: "who are the UK Endorsement Board?",
      answer: "they endorse IFRS for use in the UK."
    },
    {
      question: "who are the IFRS?",
      answer: "International Financial Reporting Standards - they are the standards themselves."
    },
    {
      question: "what are the advantages of accounting standards?",
      answer: "they provide consistency, transparency, and comparability in financial reporting."
    },
    {
      question: "what are the disadvantages of accounting standards?",
      answer: "they can be complex, costly to implement, and may not always reflect the economic reality."
    }
  ]

};