const mockBlogData = [
  {
    _id: "1",
    name: "Exploring the Future of AI",
    desc: "A look into how AI is shaping our world.",
    author: "John Doe",
    createdAt: "2024-12-01T12:00:00Z",
    photos: ["/images/blog1.avif"],
    type: "technology",
    contents: [
      {
        title: "Introduction to AI",
        description: `<p>Artificial Intelligence is no longer just a futuristic concept—it's shaping our daily lives in subtle yet powerful ways.</p>`,
        images: []
      },
      {
        title: "AI in Real Life",
        description: `<p>From smart assistants to recommendation systems, AI is already integrated into most industries.</p>`,
        images: ["/images/ai1.avif", "/images/ai2.avif"]
      },
    ]
  },
  {
    _id: "2",
    name: "Design Trends of 2025",
    desc: "The latest trends and predictions in UI/UX design.",
    author: "Jane Smith",
    createdAt: "2025-01-15T09:30:00Z",
    photos: ["/images/blog2.avif"],
    type: "design",
    contents: [
      {
        title: "Minimalism Is Back",
        description: `<p>Clean lines, ample white space, and simplicity are dominating design trends again in 2025.</p>`,
        images: []
      },
      {
        title: "AI-assisted Design Tools",
        description: `<p>Tools like Figma AI and Uizard are helping designers iterate faster and smarter.</p>`,
        images: ["/images/design-ai.avif"]
      },
    ]
  },
  {
    _id: "3",
    name: "Boosting Productivity with New Tools",
    desc: "How modern apps help streamline your workflow.",
    author: "Alex Johnson",
    createdAt: "2025-02-05T08:00:00Z",
    photos: ["/images/blog3.avif"],
    type: "productivity",
    contents: [
      {
        title: "Popular Tools in 2025",
        description: `<p>Tools like Notion, Linear, and Raycast have changed how developers and teams manage tasks.</p>`,
        images: []
      },
    ]
  },
  {
    _id: "4",
    name: "Sustainable Living Tips",
    desc: "Simple ways to live more sustainably.",
    author: "Sarah Lee",
    createdAt: "2025-03-01T15:20:00Z",
    photos: ["/images/blog4.avif"],
    type: "lifestyle",
    contents: [
      {
        title: "Everyday Habits",
        description: `<p>Small habits like reducing plastic use and shopping locally can have a big impact.</p>`,
        images: []
      },
    ]
  },
  {
    _id: "5",
    name: "The Rise of Remote Work",
    desc: "Why remote work is here to stay.",
    author: "Tom Blake",
    createdAt: "2025-03-22T11:00:00Z",
    photos: ["/images/blog5.avif"],
    type: "business",
    contents: [
      {
        title: "Remote Work Revolution",
        description: `<p>Flexible hours and global teams are reshaping workplace expectations.</p>`,
        images: []
      },
    ]
  },
  {
    _id: "6",
    name: "Mastering React in 2025",
    desc: "A complete guide to staying up-to-date with React.",
    author: "Emily Davis",
    createdAt: "2025-02-28T14:45:00Z",
    photos: ["/images/blog6.avif"],
    type: "technology",
    contents: [
      {
        title: "What's New in React",
        description: `<p>React Server Components, Suspense, and improved dev tooling are key in 2025.</p>`,
        images: []
      },
    ]
  },
  {
    _id: "7",
    name: "Minimalism in Web Design",
    desc: "Clean design and why it works so well.",
    author: "Michael Scott",
    createdAt: "2025-01-05T10:15:00Z",
    photos: ["/images/blog7.avif"],
    type: "design",
    contents: [
      {
        title: "Less is More",
        description: `<p>Minimalist designs improve clarity, accessibility, and performance.</p>`,
        images: []
      },
    ]
  },
  {
    _id: "8",
    name: "Time Management for Developers",
    desc: "Tips to manage time effectively while coding.",
    author: "Laura White",
    createdAt: "2025-03-10T13:30:00Z",
    photos: ["/images/blog8.avif"],
    type: "productivity",
    contents: [
      {
        title: "Time Blocking & Pomodoro",
        description: `<p>Using structured time blocks and short breaks improves focus and reduces burnout.</p>`,
        images: []
      },
    ]
  },
  {
    _id: "9",
    name: "Eco-Friendly Tech Innovations",
    desc: "How tech is solving environmental challenges.",
    author: "Nathan Green",
    createdAt: "2025-02-12T08:10:00Z",
    photos: ["/images/blog9.avif"],
    type: "lifestyle",
    contents: [
      {
        title: "Green Tech",
        description: `<p>Solar-powered devices, biodegradable materials, and energy-efficient software are gaining momentum.</p>`,
        images: []
      },
    ]
  },
  {
    _id: "10",
    name: "Entrepreneurship in the Digital Age",
    desc: "Starting a business online has never been easier.",
    author: "Olivia Brown",
    createdAt: "2025-03-25T17:50:00Z",
    photos: ["/images/blog10.avif"],
    type: "business",
    contents: [
      {
        title: "Digital First Ventures",
        description: `<p>Low startup costs and global markets make launching online ventures accessible to anyone.</p>`,
        images: []
      },
    ]
  },
  {
    _id: "11",
    name: "Next.js Best Practices",
    desc: "Improve performance and maintainability with these tips.",
    author: "Samuel Lee",
    createdAt: "2025-01-20T19:00:00Z",
    photos: ["/images/blog11.avif"],
    type: "technology",
    contents: [
      {
        title: "Optimize Your App",
        description: `<p>Use ` + "`next/image`" + `, avoid unnecessary SSR, and leverage caching strategies for performance.</p>`,
        images: []
      },
    ]
  },
  {
    _id: "12",
    name: "Crafting Meaningful UI Animations",
    desc: "Enhance user experience through thoughtful motion.",
    author: "Rachel Kim",
    createdAt: "2025-02-07T07:45:00Z",
    photos: ["/images/blog12.avif"],
    type: "design",
    contents: [
      {
        title: "Motion with Purpose",
        description: `<p>Animations should guide the user, provide feedback, and enhance UX—not distract from it.</p>`,
        images: []
      },
    ]
  },
];

export default mockBlogData;
