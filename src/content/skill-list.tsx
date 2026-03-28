export interface Skill {
   icon: string;
   title: string;
   description: string;
   showIn: ("all" | "frontend" | "backend" | "database")[];
}

export const skillList: Skill[] = [
   {
      icon: "/skill/javascript.png",
      title: "JavaScript",
      description:
         "Core language for dynamic web apps. I use JavaScript across frontend with React/Next.js and backend with Node.js for seamless end-to-end experiences.",
      showIn: ["all"],
   },
   {
      icon: "/skill/typescript.png",
      title: "TypeScript",
      description:
         "Strongly-typed JavaScript superset that enhances code quality and safety. I use TypeScript for early error detection, better DX, and building robust, scalable applications.",
      showIn: ["all"],
   },
   {
      icon: "/skill/reactjs.png",
      title: "ReactJs",
      description:
         "Powerful UI library for building interactive, component-driven interfaces. I leverage React's virtual DOM and hooks to create responsive, reusable frontend architectures.",
      showIn: ["all", "frontend"],
   },
   {
      icon: "/skill/nextjs.png",
      title: "NextJs",
      description:
         "React framework for server-side rendering and static generation. I use Next.js for SEO-friendly, production apps with file-based routing, API routes, and automatic code splitting.",
      showIn: ["all", "frontend"],
   },
   {
      icon: "/skill/tanstack-query.png",
      title: "TanStack Query",
      description:
         "Powerful data synchronization and state management library. I use TanStack Query for server state management, caching, automatic refetching, and optimistic updates to build responsive, data-driven applications.",
      showIn: ["frontend"],
   },
   {
      icon: "/skill/tanstack-router.png",
      title: "TanStack Router",
      description:
         "Type-safe routing solution with built-in data loading. I utilize TanStack Router for type-safe navigation, route-based code splitting, nested layouts, and integrated search param management.",
      showIn: ["frontend"],
   },
   {
      icon: "/skill/node-js.png",
      title: "Nodejs",
      description:
         "JavaScript runtime for server-side development. I utilize Node.js's event-driven, non-blocking I/O to build high-performance APIs, real-time services, and microservices.",
      showIn: ["all", "backend"],
   },
   {
      icon: "/skill/express-js.png",
      title: "ExpressJs",
      description:
         "Minimal Node.js web framework for rapid application development. I use Express.js to build RESTful APIs, handle middleware, manage routing, and create scalable server-side solutions.",
      showIn: ["backend"],
   },
   {
      icon: "/skill/nestjs.png",
      title: "NestJS",
      description:
         "Progressive Node.js framework for efficient, scalable server-side applications. I leverage NestJS's TypeScript-first architecture, dependency injection, and modular design to build enterprise-grade APIs and microservices.",
      showIn: ["all", "backend"],
   },
   {
      icon: "/skill/mongodb.png",
      title: "Mongodb",
      description:
         "Flexible NoSQL database for high availability and scalability. I leverage MongoDB for unstructured data, JSON-like documents, aggregation pipelines, and dynamic schema applications.",
      showIn: ["all", "database"],
   },
   {
      icon: "/skill/Postgresql.png",
      title: "Postgrsql",
      description:
         "Advanced relational database for reliability and data integrity. I utilize PostgreSQL for complex queries, ACID compliance, full-text search, JSON support, and strict schema validation.",
      showIn: ["all", "database"],
   },
   {
      icon: "/skill/Git.png",
      title: "Git & GitHub",
      description:
         "Version control system and collaboration platform for modern development. I use Git and GitHub for code tracking, branching, merge requests, code reviews, and team collaboration.",
      showIn: ["all"],
   },
];
