// All drill questions and cheatsheet content for Grade 4 Math Helper

// ── DRILL QUESTIONS ──────────────────────────────────────────────────────────

const DRILL_QUESTIONS = {};

// Multiplication: multiplier × 1 through multiplier × 12
for (let n = 1; n <= 12; n++) {
  DRILL_QUESTIONS[`multiply_${n}`] = Array.from({ length: 12 }, (_, i) => ({
    a: n, b: i + 1, op: '×', answer: n * (i + 1)
  }));
}

// Division: exact questions from the Summer Learning Packet
const DIVISION_SETS = {
  1:  [[1,1],[4,1],[10,1],[2,1],[11,1],[9,1],[3,1],[12,1],[5,1],[8,1],[7,1],[6,1]],
  2:  [[12,2],[14,2],[2,2],[22,2],[4,2],[10,2],[18,2],[16,2],[6,2],[20,2],[8,2],[24,2]],
  3:  [[3,3],[36,3],[33,3],[15,3],[18,3],[27,3],[6,3],[24,3],[9,3],[21,3],[30,3],[12,3]],
  4:  [[48,4],[40,4],[16,4],[36,4],[44,4],[4,4],[28,4],[20,4],[8,4],[12,4],[24,4],[32,4]],
  5:  [[35,5],[40,5],[20,5],[60,5],[5,5],[25,5],[50,5],[10,5],[15,5],[55,5],[30,5],[45,5]],
  6:  [[72,6],[36,6],[54,6],[30,6],[66,6],[6,6],[12,6],[48,6],[42,6],[18,6],[24,6],[60,6]],
  7:  [[77,7],[35,7],[70,7],[49,7],[21,7],[84,7],[28,7],[7,7],[56,7],[42,7],[63,7],[14,7]],
  8:  [[8,8],[16,8],[80,8],[48,8],[88,8],[56,8],[24,8],[64,8],[40,8],[32,8],[96,8],[72,8]],
  9:  [[45,9],[36,9],[90,9],[27,9],[72,9],[81,9],[9,9],[18,9],[54,9],[99,9],[108,9],[63,9]],
  10: [[100,10],[10,10],[40,10],[50,10],[60,10],[20,10],[90,10],[30,10],[70,10],[110,10],[80,10],[120,10]],
  11: [[11,11],[88,11],[77,11],[99,11],[110,11],[22,11],[132,11],[55,11],[44,11],[121,11],[33,11],[66,11]],
  12: [[72,12],[48,12],[60,12],[132,12],[144,12],[36,12],[84,12],[24,12],[108,12],[120,12],[96,12],[12,12]]
};

for (const [n, pairs] of Object.entries(DIVISION_SETS)) {
  DRILL_QUESTIONS[`divide_${n}`] = pairs.map(([a, b]) => ({
    a, b, op: '÷', answer: a / b
  }));
}

// ── CHEATSHEETS ───────────────────────────────────────────────────────────────

const CHEATSHEETS = {
  multiply: {
    1: {
      title: 'Multiplying by 1',
      tip: 'Any number × 1 stays the same! It\'s like having just 1 group of something.',
      examples: ['1 × 7 = 7', '1 × 12 = 12', '1 × 5 = 5'],
      trick: '🕷️ Think of it as: 1 group of that number. 1 × 9 = one group of 9 = 9'
    },
    2: {
      title: 'Multiplying by 2',
      tip: 'Multiplying by 2 means DOUBLING — just add the number to itself!',
      examples: ['2 × 6 = 6 + 6 = 12', '2 × 8 = 8 + 8 = 16', '2 × 9 = 9 + 9 = 18'],
      trick: '🕷️ Count by 2s: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24'
    },
    3: {
      title: 'Multiplying by 3',
      tip: 'Double the number, then add one more group!',
      examples: ['3 × 4: double 4 = 8, then +4 = 12', '3 × 7: double 7 = 14, then +7 = 21'],
      trick: '🕷️ Count by 3s: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36'
    },
    4: {
      title: 'Multiplying by 4',
      tip: 'Double it, then double AGAIN! (×2, then ×2 one more time)',
      examples: ['4 × 3: 3 → 6 → 12', '4 × 5: 5 → 10 → 20', '4 × 7: 7 → 14 → 28'],
      trick: '🕷️ Count by 4s: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48'
    },
    5: {
      title: 'Multiplying by 5',
      tip: 'Answers ALWAYS end in 0 or 5! Count by fives.',
      examples: ['5 × 6 = 30', '5 × 7 = 35', '5 × 8 = 40'],
      trick: '🕷️ Quick trick: multiply by 10, then cut in half! 5 × 8 = (10 × 8) ÷ 2 = 80 ÷ 2 = 40'
    },
    6: {
      title: 'Multiplying by 6',
      tip: '×6 is the same as ×5 plus ONE more group!',
      examples: ['6 × 7: (5×7) + 7 = 35 + 7 = 42', '6 × 8: (5×8) + 8 = 40 + 8 = 48'],
      trick: '🕷️ Count by 6s: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72'
    },
    7: {
      title: 'Multiplying by 7',
      tip: '×7 is the same as ×5 plus ×2. Split it up!',
      examples: ['7 × 6: (5×6) + (2×6) = 30 + 12 = 42', '7 × 8: (5×8) + (2×8) = 40 + 16 = 56'],
      trick: '🕷️ Count by 7s: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84'
    },
    8: {
      title: 'Multiplying by 8',
      tip: 'Double THREE times! ×2, then ×2 again, then ×2 one more time.',
      examples: ['8 × 3: 3 → 6 → 12 → 24', '8 × 4: 4 → 8 → 16 → 32'],
      trick: '🕷️ Count by 8s: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96'
    },
    9: {
      title: 'Multiplying by 9',
      tip: 'Multiply by 10, then subtract the number once!',
      examples: ['9 × 7: (10×7) - 7 = 70 - 7 = 63', '9 × 8: (10×8) - 8 = 80 - 8 = 72'],
      trick: '🕷️ Finger trick: Hold up 10 fingers. For 9×3, fold down finger #3. Count left fingers (2) and right fingers (7) → 27!'
    },
    10: {
      title: 'Multiplying by 10',
      tip: 'Just add a zero to the end of the number!',
      examples: ['10 × 6 = 60', '10 × 9 = 90', '10 × 12 = 120'],
      trick: '🕷️ Every ×10 answer ends in 0. Super easy!'
    },
    11: {
      title: 'Multiplying by 11',
      tip: 'For 1–9: just write the digit twice! 11 × 7 = 77',
      examples: ['11 × 3 = 33', '11 × 7 = 77', '11 × 9 = 99'],
      trick: '🕷️ Count by 11s: 11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132'
    },
    12: {
      title: 'Multiplying by 12',
      tip: '×12 is the same as ×10 plus ×2!',
      examples: ['12 × 7: (10×7) + (2×7) = 70 + 14 = 84', '12 × 8: (10×8) + (2×8) = 80 + 16 = 96'],
      trick: '🕷️ Count by 12s: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144'
    }
  },
  divide: {
    1: {
      title: 'Dividing by 1',
      tip: 'Dividing by 1 always gives you the SAME number back!',
      examples: ['8 ÷ 1 = 8', '12 ÷ 1 = 12', '7 ÷ 1 = 7'],
      trick: '🕷️ Think: splitting into 1 group means everything stays together.'
    },
    2: {
      title: 'Dividing by 2',
      tip: 'Find half! Think: what number plus itself equals the big number?',
      examples: ['12 ÷ 2 = 6  (because 6 + 6 = 12)', '18 ÷ 2 = 9  (because 9 + 9 = 18)'],
      trick: '🕷️ Think your ×2 facts backwards: 2 × ? = the big number'
    },
    3: {
      title: 'Dividing by 3',
      tip: 'Ask yourself: what times 3 gives me this number?',
      examples: ['15 ÷ 3 = 5  (because 3 × 5 = 15)', '27 ÷ 3 = 9  (because 3 × 9 = 27)'],
      trick: '🕷️ Count up by 3s until you hit the number: 3, 6, 9, 12, 15... count the hops!'
    },
    4: {
      title: 'Dividing by 4',
      tip: 'Halve it, then halve it AGAIN!',
      examples: ['16 ÷ 4: 16÷2=8, then 8÷2=4', '32 ÷ 4: 32÷2=16, then 16÷2=8'],
      trick: '🕷️ Think your ×4 facts: 4 × ? = the big number'
    },
    5: {
      title: 'Dividing by 5',
      tip: 'Count by 5s to reach the number — how many jumps did it take?',
      examples: ['25 ÷ 5: count 5,10,15,20,25 → 5 jumps!', '40 ÷ 5: count by 5s to 40 → 8 jumps!'],
      trick: '🕷️ Think your ×5 facts: 5 × ? = the big number'
    },
    6: {
      title: 'Dividing by 6',
      tip: 'Think your ×6 facts! 6 × ? = the big number',
      examples: ['42 ÷ 6 = 7  (because 6 × 7 = 42)', '54 ÷ 6 = 9  (because 6 × 9 = 54)'],
      trick: '🕷️ Count by 6s: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72'
    },
    7: {
      title: 'Dividing by 7',
      tip: 'Think your ×7 facts! 7 × ? = the big number',
      examples: ['49 ÷ 7 = 7  (because 7 × 7 = 49)', '63 ÷ 7 = 9  (because 7 × 9 = 63)'],
      trick: '🕷️ Count by 7s: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84'
    },
    8: {
      title: 'Dividing by 8',
      tip: 'Think your ×8 facts! 8 × ? = the big number',
      examples: ['56 ÷ 8 = 7  (because 8 × 7 = 56)', '72 ÷ 8 = 9  (because 8 × 9 = 72)'],
      trick: '🕷️ Count by 8s: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96'
    },
    9: {
      title: 'Dividing by 9',
      tip: 'Think your ×9 facts! 9 × ? = the big number',
      examples: ['81 ÷ 9 = 9  (because 9 × 9 = 81)', '72 ÷ 9 = 8  (because 9 × 8 = 72)'],
      trick: '🕷️ Cool trick: add the digits of the big number. If they add to 9, it divides by 9! (81: 8+1=9 ✓)'
    },
    10: {
      title: 'Dividing by 10',
      tip: 'Just remove the zero from the end!',
      examples: ['70 ÷ 10 = 7', '120 ÷ 10 = 12', '90 ÷ 10 = 9'],
      trick: '🕷️ The answer is always the number without its last zero. Easy!'
    },
    11: {
      title: 'Dividing by 11',
      tip: 'Think your ×11 facts! 11 × ? = the big number',
      examples: ['88 ÷ 11 = 8  (because 11 × 8 = 88)', '99 ÷ 11 = 9  (because 11 × 9 = 99)'],
      trick: '🕷️ Count by 11s: 11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132'
    },
    12: {
      title: 'Dividing by 12',
      tip: 'Think your ×12 facts! 12 × ? = the big number',
      examples: ['60 ÷ 12 = 5  (because 12 × 5 = 60)', '144 ÷ 12 = 12  (because 12 × 12 = 144)'],
      trick: '🕷️ Count by 12s: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144'
    }
  }
};

// ── BADGES ────────────────────────────────────────────────────────────────────

const BADGES = [
  {
    id: 'web_slinger',
    name: 'Web Slinger',
    emoji: '🕷️',
    color: '#E23636',
    desc: 'Complete your first drill',
    check: (p) => Object.keys(p.scores || {}).length >= 1
  },
  {
    id: 'victory_royale',
    name: 'Victory Royale',
    emoji: '🏆',
    color: '#FFD700',
    desc: 'Score 100% on any drill',
    check: (p) => Object.values(p.scores || {}).some(s => s.best === 12)
  },
  {
    id: 'sharpshooter',
    name: 'Sharpshooter',
    emoji: '🎯',
    color: '#00BCD4',
    desc: 'Score 90%+ on 5 different drills',
    check: (p) => Object.values(p.scores || {}).filter(s => (s.best / 12) >= 0.9).length >= 5
  },
  {
    id: 'battle_pass',
    name: 'Battle Pass',
    emoji: '🎮',
    color: '#9C27B0',
    desc: 'Complete any 6 drills',
    check: (p) => Object.keys(p.scores || {}).length >= 6
  },
  {
    id: 'daily_drop',
    name: 'Daily Drop',
    emoji: '📅',
    color: '#4CAF50',
    desc: 'Practice on 3 different days',
    check: (p) => (p.practiceDays || []).length >= 3
  },
  {
    id: 'multiply_master',
    name: 'Multiplication Master',
    emoji: '✖️',
    color: '#FF5722',
    desc: 'Complete all 12 multiplication drills',
    check: (p) => Array.from({ length: 12 }, (_, i) => `multiply_${i + 1}`).every(k => p.scores?.[k])
  },
  {
    id: 'divide_destroyer',
    name: 'Division Destroyer',
    emoji: '➗',
    color: '#2196F3',
    desc: 'Complete all 12 division drills',
    check: (p) => Array.from({ length: 12 }, (_, i) => `divide_${i + 1}`).every(k => p.scores?.[k])
  },
  {
    id: 'legendary',
    name: 'Legendary',
    emoji: '⭐',
    color: '#FFD700',
    desc: 'Complete ALL 24 drills',
    check: (p) => {
      const all = [
        ...Array.from({ length: 12 }, (_, i) => `multiply_${i + 1}`),
        ...Array.from({ length: 12 }, (_, i) => `divide_${i + 1}`)
      ];
      return all.every(k => p.scores?.[k]);
    }
  },
  {
    id: 'flawless',
    name: 'Flawless Victory',
    emoji: '💥',
    color: '#FF1744',
    desc: 'Score 100% on 5 different drills',
    check: (p) => Object.values(p.scores || {}).filter(s => s.best === 12).length >= 5
  }
];
