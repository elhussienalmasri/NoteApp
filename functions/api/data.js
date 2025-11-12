const notes = [
  {
    id: 1,
    tag: 'Todo',
    title: 'React App Setup Without Database.',
    description: 'Initial version of the application built with React and served via Cloudflare Pages, using static demo data before any database integration.',
    published_at: new Date('2025-11-07'),
  },
  {
    id: 2,
    tag: 'Todo',
    title: 'Connecting MongoDB Atlas to Cloudflare Functions',
    description: 'Just configured Cloudflare Pages Functions to connect securely to MongoDB Atlas using environment variables. The API routes are lightning-fast at the edge!',
    published_at: new Date('2025-11-11'),
  },

  {
    id: 3,
    tag: 'Todo',
    title: 'Creating another SQL-Powered React App',
    description: 'Set up a Cloudflare Pages app with a backend API connecting to PostgreSQL. Using Prisma ORM for data access and deploying seamlessly through GitHub.',
    published_at: new Date('2025-11-09'),
  },
  {
    id: 4,
    tag: 'Todo',
    title: 'Deploying React + SQL API on Cloudflare',
    description: 'Deployed the SQL-backed React app using Cloudflare Workers and Pages Functions. Everything is running smoothly and API endpoints are secure and fast!',
    published_at: new Date('2025-11-09'),
  },
];

export default notes;