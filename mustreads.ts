type Mustread = { title: string; description: string; url: string; tags: string[]; };

export const mustreads: Mustread[] = [
  {
    title: 'Painless Functional Specifications',
    description: 'A guide to writing functional specifications that are easy to understand and implement.',
    url: 'https://www.joelonsoftware.com/2000/10/02/painless-functional-specifications-part-1-why-bother/',
    tags: ['specifications'],
  },
  {
    title: 'React Docs',
    description: 'The official React documentation.',
    url: 'https://reactjs.org/',
    tags: ['react', 'documentation'],
  },
];

// Only unique tags.
export const tags = Array.from(new Set(mustreads.map((mustread) => mustread.tags).flat()));
