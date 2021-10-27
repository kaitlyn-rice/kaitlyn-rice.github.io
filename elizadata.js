// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Hi everyone! I'm Victor E. Viking, your virtual Western Washington Admissions guide. \nAsk me about:\n   Student-Demographics\n   Student-Life\n   Academics\n   Location\n   Tuition\nIf you need a reminder later just say help" ,
  // additions (not original)
"Welome to Western Washington University admissions! I'm Victor E. Viking, your virtual admissions representative. \nAsk me about:\n   Student-Demographics\n   Student-Life\n   Academics\n   Location\n   Tuition\nIf you need a reminder later just say help",
];

var elizaFinals = [
"Goodbye.  Excited to see you on campus soon.",
// additions (not original)
"Hope to see you on campus soon.",
"Goodbye.  I'm looking forward to you joining us soon!",
"Join us at WWU today! See you next time"
];

var elizaQuits = [
"thanks",
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"first-year": ["first year", "freshman", "running-start"],

"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I'm not sure I understand you fully. Ask me about: Student-Demographics, Student-Life, Academics, Location, Tuition, If you need a reminder later just say help",
     "Ask me about: Student-Demographics, Student-Life, Academics, Location, Tuition, If you need a reminder later just say help",
     "I don't know that command. Ask me about: Student-Demographics, Student-Life, Academics, Location, Tuition, If you need a reminder later just say help"
  ]]
]],
["help", 0, [
  ["*", [
    "Ask me about: Student-Demographics, Student-Life, Academics, Location, Tuition, If you need a reminder later just say help"
  ]]
]],

["Student-Demographics", 1, [
 ["*", [
     "15,197 Students \n93% Undergraduate \n28.6% Students of Color \n57% Female \nAsk about: Residency, First-Year, Transfer."
  ]]
]],
["Demographics", 1, [
 ["*", [
     "goto Student-Demographics"
  ]]
]],
["Residency", 7, [
  ["*", [
      "87% Washington Residents, 13% Out of state Students, including International"
   ]]
 ]],
 ["First-Year", 8, [
  ["*", [
      "2,492 new first-year students enrolled. 32.1% new first year students enrolled are students of color. 28.8 new first-year students are first generation students. 3.26-3.86 middle 50% GPAs of admitted first-year students. 59% of first-year students enrolled with college credit"
   ]]
 ]],
 ["Transfer", 9, [
  ["*", [
      "1,014 new transfer students enrolled. 27.5 new transfer students are enrolled are students of color. 39.8 new transfer students enrolled are first generation students. 2.94-3.63 middle 50% GPAs of admitted transfer students. 79.2% of enrolled transfer students come directly from a state community college led by Watcom, Evertt, Skagit, Olympic, and Bellevue colleges"
   ]]
 ]],

["Student-Life", 2, [
 ["*", [
     "250+ total student-run clubs & organizations (see more win.wwu.edu)  88% of first-year students and 25% of transfer students live on campus their first year (check out our housing options housing.wwu.edu) Numerous conference championship (GNAC) in volleyball, men's and women's soccer, track & field and cross country, men's and women's backetball and men's and women's golf (see more at wwuvikings.com)."
  ]]
]],
["Life", 1, [
  ["*", [
      "goto Student-Life"
   ]]
 ]],

["Student", 1, [
  ["*", [
      "Did you mean Student-Demographics or Student-Life?"
   ]]
 ]],

["Academics", 3, [
 ["*", [
     "200+ academic programs. 99% of classes taught by factulty, not graduate assistants. 76% of Western's factulty hold the highest degree in their field. 19:1 student to faculty ratio. 26 is the average class size. 74% of classes have 30 or fewer student. 4.56 years is the average time to degree. 115,000+ graduates living and working around the world. Ask about: Undergraduate-Degrees, Retention-Graduation-Rates"
  ]]
]],
["Undergraduate-Degrees", 10, [
  ["*", [
      "40% College of Humanities and Social Sciences. 17% College of Business and Economics. College of Science and Engineering. 8% Woodring College of Education. 8% Huxley College of the Environment .5% College of Fine and Performing Arts. 4% Fairhaven College of Interdisciplinary Studies"
   ]]
]],
["Retention-Graduation-Rates", 3, [
  ["*", [
    "79% of first-year students beginning in Fall 2019 reutrned in Fall 2020. Western's six-year graduation rate is 68%... based on the 2013 cohort"
  ]]
]],
["Graduation-Rates", 1, [
  ["*", [
      "goto Retention-Graduation-Rates"
   ]]
 ]],
["Retention-Rates", 1, [
  ["*", [
      "goto Retention-Graduation-Rates"
   ]]
]],

["Locations", 1, [
  ["*", [
      "Population of Bellingham, WA: 91,610. 55 miles south of Vancouver, British Columbia. 90 miles north of Seattle, Washington. 0.8 miles to downtown Bellingham. 52 miles to Mount Baker ski area"
   ]]
]],
["where", 1, [
  ["*", [
      "goto Locations"
   ]]
]],

["Tuition", 1, [
  ["*", [
      "Washington Residents - $26,934. Out-of-State Student: $44,161. To ask for a breakdown say In-State, Out-of-State"
   ]]
]],
["in-state", 1, [
  ["*", [
      "Direct Costs - Tuition: $6,893. *Fees: $2,110. **Housing & Meals: $13,080. Total Direct Costs = $22,083. Additional Expenses - Books & Supplies: $1,011. Transportation: $1,359. Personal & Miscellaneous: $2,481. Total Cost of Attnedance = $26,934. *inclues the one-time $300 enrollment confirmation fee ** varies depending on lving arrangments and meal plan"
   ]]
]],
["out-of-state", 1, [
  ["*", [
      "Direct Costs - Tuition: $24,120. *Fees: $2,110. **Housing & Meals: $13,080. Total Direct Costs = $39,310. Additional Expenses - Books & Supplies: $1,011. Transportation: $1,359. Personal & Miscellaneious: $2,481. Total Cost of Attnedance = $44,161. *inclues the one-time $300 enrollment confirmation fee ** varies depending on lving arrangments and meal plan"
   ]]
]],

["name", 0, [
 ["*", [
     "Nice to mee you, I'm Victor E. Viking",
     "I'm Victor E. Viking, WWU Mascot"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "goto help",
     "Hi.  How can I assist you today?"
  ]]
]]
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof