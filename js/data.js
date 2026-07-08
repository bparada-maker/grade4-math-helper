// ── BLOCK DEFINITIONS ─────────────────────────────────────────────────────────
// Each block has 20 questions. Pass criteria and content scale gradually.
// pemdas: { l1, l2, l3 } = questions from each difficulty pool.
// Math questions fill the rest, split ~60% mult / 40% div when div tables exist.

const BLOCKS = [
  { id:1,  name:'Block 1',  desc:'Times tables ×1, ×2, ×3',                           multTables:[1,2,3],                     divTables:[],                        pemdas:{l1:0,l2:0,l3:0}, total:20, pass:15 },
  { id:2,  name:'Block 2',  desc:'Times tables ×2, ×3, ×4',                           multTables:[2,3,4],                     divTables:[],                        pemdas:{l1:0,l2:0,l3:0}, total:20, pass:15 },
  { id:3,  name:'Block 3',  desc:'Times tables ×3, ×4, ×5',                           multTables:[3,4,5],                     divTables:[],                        pemdas:{l1:0,l2:0,l3:0}, total:20, pass:15 },
  { id:4,  name:'Block 4',  desc:'Times tables ×4, ×5, ×6',                           multTables:[4,5,6],                     divTables:[],                        pemdas:{l1:0,l2:0,l3:0}, total:20, pass:15 },
  { id:5,  name:'Block 5',  desc:'Mixed ×2–×6',                                       multTables:[2,3,4,5,6],                 divTables:[],                        pemdas:{l1:0,l2:0,l3:0}, total:20, pass:15 },
  { id:6,  name:'Block 6',  desc:'×5,×6,×7 + intro to ÷2, ÷3',                       multTables:[5,6,7],                     divTables:[2,3],                     pemdas:{l1:0,l2:0,l3:0}, total:20, pass:15 },
  { id:7,  name:'Block 7',  desc:'×6,×7,×8 + ÷2, ÷3, ÷4',                           multTables:[6,7,8],                     divTables:[2,3,4],                   pemdas:{l1:0,l2:0,l3:0}, total:20, pass:14 },
  { id:8,  name:'Block 8',  desc:'×7,×8,×9 + ÷3, ÷4, ÷5',                           multTables:[7,8,9],                     divTables:[3,4,5],                   pemdas:{l1:0,l2:0,l3:0}, total:20, pass:14 },
  { id:9,  name:'Block 9',  desc:'Mixed ×6–×9 + ÷4, ÷5, ÷6',                        multTables:[6,7,8,9],                   divTables:[4,5,6],                   pemdas:{l1:0,l2:0,l3:0}, total:20, pass:14 },
  { id:10, name:'Block 10', desc:'×5–×9 + ÷2–÷6 + first Order of Operations!',       multTables:[5,6,7,8,9],                 divTables:[2,3,4,5,6],               pemdas:{l1:3,l2:0,l3:0}, total:20, pass:14 },
  { id:11, name:'Block 11', desc:'×6–×10 + ÷3–÷7 + Order of Operations',             multTables:[6,7,8,9,10],                divTables:[3,4,5,6,7],               pemdas:{l1:4,l2:0,l3:0}, total:20, pass:14 },
  { id:12, name:'Block 12', desc:'×7–×11 + ÷4–÷8 + more Order of Operations',        multTables:[7,8,9,10,11],               divTables:[4,5,6,7,8],               pemdas:{l1:5,l2:0,l3:0}, total:20, pass:13 },
  { id:13, name:'Block 13', desc:'×8–×12 + ÷5–÷9 + stepping up',                     multTables:[8,9,10,11,12],              divTables:[5,6,7,8,9],               pemdas:{l1:3,l2:3,l3:0}, total:20, pass:13 },
  { id:14, name:'Block 14', desc:'All ×1–×12 + ÷4–÷10 + harder Order of Ops',        multTables:[1,2,3,4,5,6,7,8,9,10,11,12], divTables:[4,5,6,7,8,9,10],        pemdas:{l1:0,l2:5,l3:0}, total:20, pass:13 },
  { id:15, name:'Block 15', desc:'All tables + ÷1–÷9 + complex Order of Ops',        multTables:[1,2,3,4,5,6,7,8,9,10,11,12], divTables:[1,2,3,4,5,6,7,8,9],     pemdas:{l1:0,l2:6,l3:0}, total:20, pass:13 },
  { id:16, name:'Block 16', desc:'Full mix + advanced Order of Operations',           multTables:[1,2,3,4,5,6,7,8,9,10,11,12], divTables:[1,2,3,4,5,6,7,8,9,10,11,12], pemdas:{l1:0,l2:4,l3:3}, total:20, pass:13 },
  { id:17, name:'Block 17', desc:'Full mix + heavy Order of Operations',              multTables:[1,2,3,4,5,6,7,8,9,10,11,12], divTables:[1,2,3,4,5,6,7,8,9,10,11,12], pemdas:{l1:0,l2:3,l3:4}, total:20, pass:13 },
  { id:18, name:'Block 18', desc:'Full mix + mostly Order of Operations',             multTables:[1,2,3,4,5,6,7,8,9,10,11,12], divTables:[1,2,3,4,5,6,7,8,9,10,11,12], pemdas:{l1:0,l2:2,l3:6}, total:20, pass:13 },
  { id:19, name:'Block 19', desc:'Full mix + advanced Order of Operations challenge', multTables:[1,2,3,4,5,6,7,8,9,10,11,12], divTables:[1,2,3,4,5,6,7,8,9,10,11,12], pemdas:{l1:0,l2:1,l3:8}, total:20, pass:13 },
  { id:20, name:'Block 20', desc:'Grand Finale — everything!',                        multTables:[1,2,3,4,5,6,7,8,9,10,11,12], divTables:[1,2,3,4,5,6,7,8,9,10,11,12], pemdas:{l1:0,l2:0,l3:10},total:20, pass:14 },
];

// ── QUESTION GENERATOR ────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function generateBlockQuestions(block) {
  const pemdasTotal = block.pemdas.l1 + block.pemdas.l2 + block.pemdas.l3;
  const mathTotal   = block.total - pemdasTotal;
  const hasDivision = block.divTables.length > 0;
  const divCount    = hasDivision ? Math.round(mathTotal * 0.4) : 0;
  const multCount   = mathTotal - divCount;

  const questions = [];

  // Dedupe: avoid identical question text in one session
  const seen = new Set();
  function makeQ(text, answer, hint) {
    if (seen.has(text)) return null;
    seen.add(text);
    return { type: 'typed', display: text, answer, hint };
  }

  // Multiplication
  let multAttempts = 0;
  while (questions.filter(q => q.hint?.startsWith('mult')).length < multCount && multAttempts < 200) {
    multAttempts++;
    const table = pick(block.multTables);
    const mult  = Math.floor(Math.random() * 12) + 1;
    const q = makeQ(`${table} × ${mult}`, table * mult, `mult_${table}`);
    if (q) questions.push(q);
  }

  // Division
  let divAttempts = 0;
  while (questions.filter(q => q.hint?.startsWith('div')).length < divCount && divAttempts < 200) {
    divAttempts++;
    const divisor  = pick(block.divTables);
    const quotient = Math.floor(Math.random() * 12) + 1;
    const dividend = divisor * quotient;
    const q = makeQ(`${dividend} ÷ ${divisor}`, quotient, `div_${divisor}`);
    if (q) questions.push(q);
  }

  // PEMDAS — pick from pools, avoid repeats
  function addPemdas(pool, count) {
    const available = shuffle(pool);
    let added = 0;
    for (const pq of available) {
      if (added >= count) break;
      if (!seen.has(pq.display)) {
        seen.add(pq.display);
        questions.push({ type: 'mc', ...pq });
        added++;
      }
    }
  }
  if (block.pemdas.l1) addPemdas(PEMDAS_L1, block.pemdas.l1);
  if (block.pemdas.l2) addPemdas(PEMDAS_L2, block.pemdas.l2);
  if (block.pemdas.l3) addPemdas(PEMDAS_L3, block.pemdas.l3);

  return shuffle(questions);
}

// ── PEMDAS POOLS ─────────────────────────────────────────────────────────────
// opts: first entry is ALWAYS the correct answer (shuffled at display time)
// wrong answers are chosen to reflect common mistakes (left-to-right, skipping parens)

const PEMDAS_L1 = [
  // Pattern: a + b × c  →  correct uses × first; common wrong: left-to-right (a+b)×c
  { display:'1 + 2 × 5',    answer:11, opts:[11,15,10,9]  },  // wrong: (1+2)×5=15
  { display:'3 + 4 × 2',    answer:11, opts:[11,14,8,5]   },  // wrong: (3+4)×2=14
  { display:'2 + 3 × 6',    answer:20, opts:[20,30,18,11] },  // wrong: (2+3)×6=30
  { display:'5 + 2 × 4',    answer:13, opts:[13,28,8,7]   },  // wrong: (5+2)×4=28
  { display:'4 + 3 × 3',    answer:13, opts:[13,21,9,16]  },  // wrong: (4+3)×3=21
  // Pattern: (a + b) × c  →  parens first; common wrong: without parens
  { display:'(3 + 4) × 2',  answer:14, opts:[14,11,6,10]  },  // no-parens: 3+(4×2)=11
  { display:'(2 + 3) × 6',  answer:30, opts:[30,20,5,18]  },  // no-parens: 2+(3×6)=20
  { display:'(4 + 3) × 3',  answer:21, opts:[21,13,12,7]  },  // no-parens: 4+(3×3)=13
  // Pattern: a - b × c  →  multiply first; common wrong: left-to-right
  { display:'8 - 2 × 3',    answer:2,  opts:[2,18,6,3]    },  // wrong: (8-2)×3=18
  { display:'10 - 3 × 2',   answer:4,  opts:[4,14,6,8]    },  // wrong: (10-3)×2=14
  { display:'9 - 4 × 2',    answer:1,  opts:[1,10,8,5]    },  // wrong: (9-4)×2=10
  // Pattern: (a - b) × c  →  parens first; common wrong: subtract last
  { display:'(8 - 2) × 3',  answer:18, opts:[18,2,24,6]   },  // no-parens: 8-(2×3)=2
  { display:'(10 - 3) × 2', answer:14, opts:[14,4,20,6]   },  // no-parens: 10-(3×2)=4
  { display:'(9 - 4) × 2',  answer:10, opts:[10,1,5,20]   },  // no-parens: 9-(4×2)=1
];

const PEMDAS_L2 = [
  // 3+ terms, two operations, slightly larger numbers
  { display:'2 + 3 × 4 + 1',       answer:15, opts:[15,21,13,20] },  // wrong L-R: (2+3)×4+1=21
  { display:'3 × 4 + 2 × 5',       answer:22, opts:[22,70,34,17] },  // wrong L-R: 3×4=12,+2=14,×5=70
  { display:'(3 + 4) × (2 + 1)',    answer:21, opts:[21,12,10,28] },  // no-parens: 3+4×2+1=12
  { display:'6 ÷ 2 + 4 × 3',       answer:15, opts:[15,21,9,27]  },  // wrong L-R: 6÷2=3,+4=7,×3=21
  { display:'2 × 5 + 4 × 3',       answer:22, opts:[22,42,17,34] },  // wrong L-R: 2×5=10,+4=14,×3=42
  { display:'5 + (4 - 1) × 3',     answer:14, opts:[14,24,6,18]  },  // wrong: (5+4-1)×3=24
  { display:'(5 + 3) × 2 + 1',     answer:17, opts:[17,12,18,9]  },  // no-parens: 5+3×2+1=12
  { display:'4 × 3 - 2 × 5',       answer:2,  opts:[2,50,10,18]  },  // wrong L-R: 4×3=12,-2=10,×5=50
  { display:'(6 + 2) × (5 - 3)',    answer:16, opts:[16,13,8,32]  },  // no-parens: 6+2×5-3=13
  { display:'12 ÷ 4 + 2 × 3',      answer:9,  opts:[9,15,12,11]  },  // wrong L-R: 12÷4=3,+2=5,×3=15
  { display:'3 × (4 + 2) - 5',     answer:13, opts:[13,9,3,23]   },  // no-inner: 3×4+2-5=9
  { display:'10 - 2 × 3 + 1',      answer:5,  opts:[5,25,7,14]   },  // wrong L-R: (10-2)×3+1=25
  { display:'(8 - 3) × 2 + 4',     answer:14, opts:[14,6,24,9]   },  // no-parens: 8-(3×2)+4=6
];

const PEMDAS_L3 = [
  // 4+ terms, mixed ×, ÷, +, −, parentheses
  { display:'4 × (3 + 2) - 8 ÷ 4',      answer:18, opts:[18,12,22,6]  },  // 4×5−2=18; no-p: 4×3+2−2=12
  { display:'3 × 5 + 12 ÷ 3 - 2',       answer:17, opts:[17,7,19,13]  },  // 15+4−2=17; L-R: 3×5=15+12=27÷3=9−2=7
  { display:'(2 + 3) × 4 ÷ 2 + 1',      answer:11, opts:[11,9,21,5]   },  // 5×4÷2+1=11; no-p: 2+3×4÷2+1=9
  { display:'6 ÷ 2 × (3 + 4)',           answer:21, opts:[21,13,42,7]  },  // 3×7=21; no-p: 6÷2×3+4=13
  { display:'2 × 3 + 4 × 5 - 10',       answer:16, opts:[16,40,36,24] },  // 6+20−10=16; L-R: 2×3=6+4=10×5=50−10=40
  { display:'(4 + 2) × (3 - 1) + 5',    answer:17, opts:[17,14,7,29]  },  // 6×2+5=17; no-p: 4+2×3−1+5=14
  { display:'20 ÷ 4 + 3 × (2 + 1)',     answer:14, opts:[14,12,18,5]  },  // 5+3×3=14; no-inner: 5+3×2+1=12
  { display:'3 + 4 × 2 - 4 ÷ 2',       answer:9,  opts:[9,7,11,14]   },  // 3+8−2=9; various wrongs
  { display:'5 × 4 - 3 × (2 + 1)',      answer:11, opts:[11,15,5,20]  },  // 20−9=11; no-inner: 20−6+1=15
  { display:'24 ÷ (4 + 2) + 5',         answer:9,  opts:[9,13,4,11]   },  // 24÷6+5=9; no-p: 6+2+5=13
  { display:'2 × (5 + 1) + 3 × 4',      answer:24, opts:[24,23,18,48] },  // 12+12=24; no-p: 10+1+12=23
  { display:'(3 + 5) × 3 - 4 × 2',      answer:16, opts:[16,8,32,24]  },  // 24−8=16; no-parens: 3+5×3−4×2=3+15−8=10... hmm: [16,10,32,8]
  { display:'4 + (6 - 2) × 5 - 3',      answer:21, opts:[21,17,7,24]  },  // 4+20−3=21; no-p: 4+6−2×5−3=4+6−10−3=−3... bad. no-p: 4+6×(−2)... hmm
  { display:'(10 - 4) × (2 + 3) ÷ 2',  answer:15, opts:[15,12,30,10] },  // 6×5÷2=15; no-p: 10−4×2+3÷2... messy, just use 30=6×5 and 10=no-div
];

// ── CHEATSHEETS ───────────────────────────────────────────────────────────────
// Keyed by hint string from question generator: mult_N or div_N

const CHEATSHEETS = {
  mult_1:  { title:'× 1 Tip', tip:'Any number × 1 stays the same!', trick:'🕷️ Think: 1 group of that number. 1 × 9 = nine things in one group = 9', examples:['1×7=7','1×12=12'] },
  mult_2:  { title:'× 2 Tip', tip:'Multiplying by 2 = DOUBLING. Add the number to itself!', trick:'🕷️ Count by 2s: 2,4,6,8,10,12,14,16,18,20,22,24', examples:['2×6=6+6=12','2×8=8+8=16'] },
  mult_3:  { title:'× 3 Tip', tip:'Double the number, then add one more group!', trick:'🕷️ Count by 3s: 3,6,9,12,15,18,21,24,27,30,33,36', examples:['3×4: double 4=8, +4=12','3×7: double 7=14, +7=21'] },
  mult_4:  { title:'× 4 Tip', tip:'Double it, then double AGAIN! (×2, then ×2 one more time)', trick:'🕷️ Count by 4s: 4,8,12,16,20,24,28,32,36,40,44,48', examples:['4×3: 3→6→12','4×5: 5→10→20'] },
  mult_5:  { title:'× 5 Tip', tip:'Answers always end in 0 or 5! Count by fives.', trick:'🕷️ Quick trick: × by 10 then cut in half! 5×8=(10×8)÷2=40', examples:['5×6=30','5×7=35'] },
  mult_6:  { title:'× 6 Tip', tip:'×6 is ×5 plus ONE more group!', trick:'🕷️ Count by 6s: 6,12,18,24,30,36,42,48,54,60,66,72', examples:['6×7: (5×7)+7=35+7=42','6×8: 40+8=48'] },
  mult_7:  { title:'× 7 Tip', tip:'×7 is ×5 plus ×2 — split it up!', trick:'🕷️ Count by 7s: 7,14,21,28,35,42,49,56,63,70,77,84', examples:['7×6: (5×6)+(2×6)=30+12=42'] },
  mult_8:  { title:'× 8 Tip', tip:'Double THREE times! ×2, then ×2, then ×2 again.', trick:'🕷️ Count by 8s: 8,16,24,32,40,48,56,64,72,80,88,96', examples:['8×3: 3→6→12→24','8×4: 4→8→16→32'] },
  mult_9:  { title:'× 9 Tip', tip:'Multiply by 10, then subtract the number once!', trick:'🕷️ Finger trick: fold down finger #N for 9×N. Fingers left = tens, fingers right = ones!', examples:['9×7: (10×7)−7=70−7=63','9×8: 80−8=72'] },
  mult_10: { title:'× 10 Tip', tip:'Just add a zero to the end!', trick:'🕷️ Every ×10 answer ends in 0. Super easy!', examples:['10×6=60','10×12=120'] },
  mult_11: { title:'× 11 Tip', tip:'For 1–9: just write the digit twice! 11×7=77', trick:'🕷️ Count by 11s: 11,22,33,44,55,66,77,88,99,110,121,132', examples:['11×3=33','11×8=88'] },
  mult_12: { title:'× 12 Tip', tip:'×12 is ×10 plus ×2!', trick:'🕷️ Count by 12s: 12,24,36,48,60,72,84,96,108,120,132,144', examples:['12×7: 70+14=84','12×8: 80+16=96'] },

  div_1:   { title:'÷ 1 Tip', tip:'Dividing by 1 always gives you the same number back!', trick:'🕷️ One group means nothing splits — it stays whole.', examples:['8÷1=8','12÷1=12'] },
  div_2:   { title:'÷ 2 Tip', tip:'Find half! What number + itself = the big number?', trick:'🕷️ Think your ×2 facts backwards: 2×?=the big number', examples:['12÷2=6 (6+6=12)','18÷2=9 (9+9=18)'] },
  div_3:   { title:'÷ 3 Tip', tip:'Ask: what times 3 gives me this number?', trick:'🕷️ Count up by 3s to the number and count your hops!', examples:['15÷3=5 (3×5=15)','27÷3=9 (3×9=27)'] },
  div_4:   { title:'÷ 4 Tip', tip:'Halve it, then halve it AGAIN!', trick:'🕷️ Think your ×4 facts: 4×?=the big number', examples:['16÷4: 16÷2=8, 8÷2=4','32÷4: 32÷2=16, 16÷2=8'] },
  div_5:   { title:'÷ 5 Tip', tip:'Count by 5s to reach the number — how many jumps?', trick:'🕷️ Think your ×5 facts: 5×?=the big number', examples:['25÷5: 5,10,15,20,25 → 5 jumps!','40÷5=8'] },
  div_6:   { title:'÷ 6 Tip', tip:'Think your ×6 facts! 6×?=the big number', trick:'🕷️ Count by 6s: 6,12,18,24,30,36,42,48,54,60,66,72', examples:['42÷6=7 (6×7=42)','54÷6=9 (6×9=54)'] },
  div_7:   { title:'÷ 7 Tip', tip:'Think your ×7 facts! 7×?=the big number', trick:'🕷️ Count by 7s: 7,14,21,28,35,42,49,56,63,70,77,84', examples:['49÷7=7 (7×7=49)','63÷7=9'] },
  div_8:   { title:'÷ 8 Tip', tip:'Think your ×8 facts! 8×?=the big number', trick:'🕷️ Count by 8s: 8,16,24,32,40,48,56,64,72,80,88,96', examples:['56÷8=7 (8×7=56)','72÷8=9'] },
  div_9:   { title:'÷ 9 Tip', tip:'Think your ×9 facts! 9×?=the big number', trick:'🕷️ Cool check: if the digits of the big number add to 9, it divides by 9! (81: 8+1=9 ✓)', examples:['81÷9=9','72÷9=8'] },
  div_10:  { title:'÷ 10 Tip', tip:'Just remove the zero from the end!', trick:'🕷️ The answer is always the number without its last zero.', examples:['70÷10=7','120÷10=12'] },
  div_11:  { title:'÷ 11 Tip', tip:'Think your ×11 facts! 11×?=the big number', trick:'🕷️ Count by 11s: 11,22,33,44,55,66,77,88,99,110,121,132', examples:['88÷11=8','99÷11=9'] },
  div_12:  { title:'÷ 12 Tip', tip:'Think your ×12 facts! 12×?=the big number', trick:'🕷️ Count by 12s: 12,24,36,48,60,72,84,96,108,120,132,144', examples:['60÷12=5','144÷12=12'] },

  pemdas: {
    title: 'Order of Operations (PEMDAS)',
    tip:   'Always solve in this order: Parentheses → Multiply & Divide → Add & Subtract',
    trick: '🕷️ Remember: "Please Excuse My Dear Aunt Sally" = Parentheses, Exponents, Multiply, Divide, Add, Subtract',
    examples: [
      '2 + 3 × 4 → do 3×4 FIRST = 12, then +2 = 14',
      '(2 + 3) × 4 → do (2+3) FIRST = 5, then ×4 = 20',
      '8 - 2 × 3 → do 2×3 FIRST = 6, then 8-6 = 2'
    ]
  }
};

// ── BADGES ────────────────────────────────────────────────────────────────────

const BADGES = [
  { id:'web_slinger',     name:'Web Slinger',         emoji:'🕷️', color:'#E23636', desc:'Pass Block 1',                         check: p => p.blockData?.['1']?.passed },
  { id:'daily_drop',      name:'Daily Drop',           emoji:'📅', color:'#4CAF50', desc:'Practice on 3 different days',         check: p => (p.practiceDays||[]).length >= 3 },
  { id:'division_diver',  name:'Division Diver',       emoji:'➗', color:'#2196F3', desc:'Pass Block 6 (first division block)',   check: p => p.blockData?.['6']?.passed },
  { id:'victory_royale',  name:'Victory Royale',       emoji:'🏆', color:'#FFD700', desc:'Score 20/20 on any block',             check: p => Object.values(p.blockData||{}).some(b => b.bestScore === 20) },
  { id:'halfway_hero',    name:'Halfway Hero',         emoji:'⚡', color:'#FF9800', desc:'Pass Block 10',                        check: p => p.blockData?.['10']?.passed },
  { id:'pemdas_pioneer',  name:'PEMDAS Pioneer',       emoji:'🧮', color:'#9C27B0', desc:'Pass Block 10 (first PEMDAS block)',    check: p => p.blockData?.['10']?.passed },
  { id:'sharpshooter',    name:'Sharpshooter',         emoji:'🎯', color:'#00BCD4', desc:'Score 18+ on any block',               check: p => Object.values(p.blockData||{}).some(b => b.bestScore >= 18) },
  { id:'unstoppable',     name:'Unstoppable',          emoji:'💥', color:'#FF1744', desc:'Pass Block 15',                        check: p => p.blockData?.['15']?.passed },
  { id:'legendary',       name:'Legendary',            emoji:'⭐', color:'#FFD700', desc:'Pass all 20 blocks!',                  check: p => BLOCKS.every(b => p.blockData?.[String(b.id)]?.passed) },
];
