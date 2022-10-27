type Mustread = { title: string; url: string; tags: string[]; };

export const mustreads: Mustread[] = [
  {
    title: 'React: A JavaScript library for building user interfaces',
    url: 'https://reactjs.org/',
    tags: ['react', 'specifications'],
  },
  {
    title: 'React: A JavaScript library for building user interfaces',
    url: 'https://reactjs.org/',
    tags: ['react', 'specifications'],
  },
];

// Only unique tags.
export const tags = Array.from(new Set(mustreads.map((mustread) => mustread.tags).flat()));
