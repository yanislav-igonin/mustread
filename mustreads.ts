export type Mustread = { title: string; description: string; url: string; tags: string[]; };

export const mustreads: Mustread[] = [
  {
    title: 'Painless Functional Specifications',
    description: 'A 4-article series about writing functional specifications that are easy to understand and implement. How to write, what you should include, who will read it, etc.',
    url: 'https://www.joelonsoftware.com/2000/10/02/painless-functional-specifications-part-1-why-bother/',
    tags: ['specifications'],
  },
  {
    title: 'Волчистость в IT',
    description: 'В этой статьей ты узнаешь обо всех минусах осторожно расчетливого подхода к деланию дел. Мы поговорим о влиянии мемасов про волков на твой жизненный успех. И введем баззворд волчистость, ты же любишь щегольнуть новым словом?',
    url: 'https://medium.com/@M0rtyMerr/%D0%B2%D0%BE%D0%BB%D1%87%D0%B8%D1%81%D1%82%D0%BE%D1%81%D1%82%D1%8C-%D0%B2-it-7767f5a07dbc',
    tags: ['psychology'],
  },
  {
    title: 'Ten Rules for Negotiating a Job Offer',
    description: 'A 2-article seriel about negotiating. Want a good offer? Negotiate! But how? Here are 10 rules to help you get the best deal.',
    url: 'https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/',
    tags: ['psychology'],
  },
  {
    title: 'Always be quitting',
    description: 'An article about working like you\'re quitting. How to get the most out of your job and be better engerineer.',
    url: 'https://jmmv.dev/2021/04/always-be-quitting.html',
    tags: ['work'],
  },
  {
    title: 'Contracts you should never sign',
    description: 'An article about contracts. What to avoid in the contract.',
    url: 'https://vadimkravcenko.com/shorts/contracts-you-should-never-sign/',
    tags: ['work'],
  },
];

// Only unique tags.
export const tags = [
  Array.from(
    new Set(mustreads.map((mustread) => mustread.tags).flat())
  ), 'all'].flat();
