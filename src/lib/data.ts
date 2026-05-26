export const personalInfo = {
  name: "Abdallah ElHoFy",
  title: "Backend Engineer",
  tagline: "Building scalable systems, ERP solutions, and modern backend architectures.",
  description: "Backend engineer specializing in enterprise resource planning systems, API architecture, and infrastructure automation. Focused on building reliable, scalable systems that power business operations.",
  email: "ahmed@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Cairo, Egypt",
}

export const skills = {
  backend: [
    { name: "Node.js", description: "RESTful APIs, microservices, event-driven architecture" },
    { name: "Express.js", description: "Middleware patterns, routing, API gateway design" },
    { name: "Python", description: "Automation scripts, data processing, backend services" },
  ],
  databases: [
    { name: "PostgreSQL", description: "Complex queries, indexing, replication, performance tuning" },
    { name: "MongoDB", description: "Aggregation pipelines, sharding, schema design" },
    { name: "MySQL", description: "Relational modeling, query optimization, replication" },
  ],
  erpSystems: [
    { name: "Odoo ERP", description: "Full-stack Odoo development, module creation, customization" },
    { name: "ERP Architecture", description: "System integration, workflow automation, data migration" },
  ],
  devTools: [
    { name: "Linux", description: "Server administration, shell scripting, container orchestration" },
    { name: "Docker", description: "Containerization, multi-stage builds, compose orchestration" },
    { name: "Git", description: "Version control, branching strategies, CI/CD pipelines" },
    { name: "System Admin", description: "Infrastructure management, monitoring, deployment" },
  ],
  languages: [
    { name: "JavaScript", description: "ES6+, async patterns, TypeScript integration" },
    { name: "TypeScript", description: "Type safety, generics, advanced types" },
    { name: "Python", description: "Automation, data processing, scripting" },
    { name: "SQL", description: "Complex queries, optimization, database design" },
  ],
}

export const skillCategories = [
  { id: "backend", label: "Backend", color: "from-blue-400 to-cyan-300", icon: "Server" },
  { id: "databases", label: "Databases", color: "from-violet-400 to-purple-300", icon: "Database" },
  { id: "erpSystems", label: "ERP Systems", color: "from-emerald-400 to-teal-300", icon: "LayoutDashboard" },
  { id: "devTools", label: "Dev Tools", color: "from-orange-400 to-amber-300", icon: "Terminal" },
  { id: "languages", label: "Languages", color: "from-rose-400 to-pink-300", icon: "Code2" },
] as const

export const experiences = [
  {
    id: 1,
    role: "System Administrator",
    company: "Enterprise Solutions Co.",
    period: "2023 - Present",
    description: "Managing critical infrastructure, ensuring 99.9% uptime across distributed systems. Implementing monitoring solutions, automating deployment pipelines, and optimizing database performance for enterprise clients.",
    highlights: [
      "Infrastructure reliability & monitoring",
      "Database performance optimization",
      "Automated deployment pipelines",
      "System architecture & scaling",
    ],
  },
  {
    id: 2,
    role: "Operations Manager",
    company: "LogiTech Systems",
    period: "2022 - 2023",
    description: "Led cross-functional operations, streamlined ERP workflows, and managed system integrations. Reduced process overhead by 40% through automation and optimized resource allocation.",
    highlights: [
      "Process optimization & automation",
      "ERP workflow management",
      "Cross-functional team leadership",
      "Resource allocation & planning",
    ],
  },
  {
    id: 3,
    role: "Backend Engineering Intern",
    company: "React Labs",
    period: "2021 - 2022",
    description: "Developed RESTful APIs, implemented authentication systems, and contributed to database schema design. Built internal tools for automated testing and monitoring.",
    highlights: [
      "RESTful API development",
      "Authentication systems (JWT, OAuth)",
      "Database schema design",
      "Internal tooling & automation",
    ],
  },
  {
    id: 4,
    role: "Backend Engineering Journey",
    company: "Self-Directed",
    period: "2020 - Present",
    description: "Continuous learning and application of backend engineering principles. Exploring distributed systems, event-driven architecture, and cloud-native technologies.",
    highlights: [
      "Distributed systems & microservices",
      "Event-driven architecture",
      "Cloud-native technologies",
      "System design & scalability",
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: "Smart Irrigation IoT System",
    tagline: "Real-time agricultural monitoring platform",
    description: "Enterprise-grade IoT platform connecting distributed sensor networks to cloud infrastructure. Handles 10,000+ concurrent MQTT device connections with real-time data ingestion, automated irrigation control, and predictive analytics.",
    architecture: "Event-driven microservices with MQTT broker cluster, Node.js stream processing pipeline, PostgreSQL timescale for time-series data, and Redis for real-time state management.",
    apiEndpoints: [
      "POST /api/devices/register - Device provisioning & auth",
      "GET /api/devices/:id/telemetry - Time-series sensor data",
      "POST /api/irrigation/schedule - Scheduled irrigation control",
      "GET /api/analytics/water-usage - Usage patterns & forecasting",
    ],
    database: "PostgreSQL (TimescaleDB) for time-series sensor data, Redis for device state cache, InfluxDB for long-term metric storage",
    auth: "TLS 1.3 with client certificate authentication for devices, JWT with refresh tokens for dashboard users, API key rate limiting",
    scalability: "Horizontal scaling via MQTT broker clustering, read replicas for analytics queries, Redis cluster for distributed caching, auto-scaling based on device connection count",
    technologies: ["Node.js", "MQTT", "PostgreSQL", "Redis", "Docker", "InfluxDB", "TimescaleDB"],
    highlights: [
      "10,000+ concurrent device connections",
      "Real-time analysis pipeline",
      "Automated irrigation engine",
      "REST + WebSocket APIs",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    title: "ERP Inventory Management API",
    tagline: "Enterprise resource planning backend",
    description: "Comprehensive inventory management system for Odoo ERP with real-time stock tracking across 50+ warehouses, automated reorder workflows, supplier integration, and full audit trails.",
    architecture: "Modular Odoo 17 architecture with custom Python modules, REST API layer exposing inventory operations, PostgreSQL with partitioning for high-volume transaction tables, Redis caching for sub-millisecond stock lookups.",
    apiEndpoints: [
      "GET /api/v1/inventory/:sku - Real-time stock across warehouses",
      "POST /api/v1/inventory/movement - Transfer & adjustment logging",
      "GET /api/v1/reorder/suggestions - AI-driven reorder proposals",
      "POST /api/v1/suppliers/orders - Automated PO generation",
    ],
    database: "PostgreSQL with table partitioning by warehouse, Redis for hot-stock cache, materialized views for reporting",
    auth: "Odoo's internal auth with OAuth2 extension for third-party integrations, scoped API tokens per integration, row-level security by warehouse",
    scalability: "Database read replicas for reporting, Redis cluster for distributed caching, async worker queue for bulk operations, connection pooling with PgBouncer",
    technologies: ["Odoo 17", "Python", "PostgreSQL", "Redis", "REST API", "Docker", "Celery"],
    highlights: [
      "50+ warehouse multi-tenancy",
      "Automated reorder engine",
      "Real-time stock synchronization",
      "Full audit trail system",
    ],
    gradient: "from-violet-500 to-purple-700",
  },
  {
    id: 3,
    title: "Pharmacy Management Backend",
    tagline: "Healthcare inventory & prescription platform",
    description: "HIPAA-compliant backend system for pharmacy chain operations including prescription lifecycle management, real-time inventory control, supplier EDI integration, and regulatory compliance tracking.",
    architecture: "Layered architecture: Express.js API gateway, PostgreSQL for transactional data with encryption-at-rest, Redis for session management and prescription caching, HL7 FHIR integration layer for healthcare interoperability.",
    apiEndpoints: [
      "POST /api/prescriptions/create - ePrescription submission",
      "GET /api/prescriptions/:id/status - Prescription lifecycle tracking",
      "POST /api/inventory/dispense - Real-time inventory deduction",
      "GET /api/compliance/logs - Regulatory compliance audit trail",
    ],
    database: "PostgreSQL with column-level encryption for PII, Redis for session store, read replicas for reporting, automated weekly partitioning",
    auth: "Multi-factor authentication, RBAC with 6 role levels, audit logging for all PHI access, JWT with short-lived tokens, session invalidation on role change",
    scalability: "Horizontal API gateway scaling, database connection pooling, Redis cluster for distributed sessions, CDN for static compliance docs",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Redis", "JWT", "Docker", "HL7 FHIR"],
    highlights: [
      "HIPAA-compliant architecture",
      "Prescription lifecycle engine",
      "Supplier EDI integration",
      "Real-time inventory alerts",
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 4,
    title: "Authentication Service",
    tagline: "Centralized auth & authorization platform",
    description: "Scalable authentication microservice supporting multi-tenant SaaS architectures. Implements OAuth2, OIDC, SAML protocols with role-based access control, MFA, and comprehensive session management.",
    architecture: "Stateless microservice architecture: Express.js API with Redis-backed session store, PostgreSQL for user and tenant data, JWT-based stateless auth, rate limiting layer, and distributed session management.",
    apiEndpoints: [
      "POST /api/auth/login - Multi-factor authentication",
      "POST /api/auth/oauth/token - OAuth2 token exchange",
      "GET /api/auth/users - User management (admin scoped)",
      "POST /api/auth/tenants - Multi-tenant provisioning",
    ],
    database: "PostgreSQL with schema-per-tenant isolation, Redis for token blacklist and session cache, encrypted columns for credentials",
    auth: "OAuth2 + OIDC compliant, SAML 2.0 for enterprise SSO, TOTP/HOTP MFA support, device fingerprinting, brute-force detection with exponential backoff",
    scalability: "Stateless design enables horizontal pod autoscaling, Redis Sentinel for HA session store, PostgreSQL read replicas, CDN for OIDC discovery docs",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Redis", "JWT", "OAuth2", "OIDC"],
    highlights: [
      "Multi-tenant SaaS support",
      "OAuth2/OIDC/SAML protocols",
      "Role-based access control",
      "Brute-force protection",
    ],
    gradient: "from-amber-500 to-orange-600",
  },
]

export const certifications = [
  {
    id: 1,
    title: "Odoo Functional & Technical Training",
    issuer: "Odoo S.A.",
    year: "2024",
    description: "Comprehensive training in Odoo ERP development including module creation, workflow automation, and system customization.",
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    description: "Foundational understanding of AWS cloud services, architecture best practices, and cloud infrastructure management.",
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    issuer: "Meta (Coursera)",
    year: "2023",
    description: "Professional certificate covering REST API design, database integration, authentication, and deployment strategies.",
  },
  {
    id: 4,
    title: "Linux System Administration",
    issuer: "Linux Foundation",
    year: "2022",
    description: "Enterprise Linux administration including server management, shell scripting, networking, and security hardening.",
  },
]
