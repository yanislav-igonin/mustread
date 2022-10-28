export type Mustread = { title: string; description: string; url: string; tags: string[]; };

export const mustreads: Mustread[] = [
  {
    title: 'Painless Functional Specifications',
    description: 'A 4-article series about writing functional specifications that are easy to understand and implement. How to write, what you should include, who will read it, etc.',
    url: 'https://www.joelonsoftware.com/2000/10/02/painless-functional-specifications-part-1-why-bother/',
    tags: ['specifications'],
  },
];

// Only unique tags.
export const tags = Array.from(new Set(mustreads.map((mustread) => mustread.tags).flat()));
