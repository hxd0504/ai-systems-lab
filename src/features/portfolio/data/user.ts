import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "晓东",
  lastName: "黄",
  displayName: "黄晓东",
  username: "huangxd",
  gender: "male",
  pronouns: "he/him",
  bio: "我关注大模型应用、RAG 系统、知识图谱工程与数据智能应用，擅长把非结构化数据、图谱关系和模型能力整合为可运行、可验证的 AI 应用系统。",
  flipSentences: [
    "AI Application Engineer · RAG · Knowledge Graph Systems",
    "端到端 RAG 系统 · 知识图谱风控 · 数据智能应用",
  ],
  address: "China",
  phoneNumber: "",
  email: "",
  website: "",
  jobTitle: "AI Application Engineer",
  jobs: [
    {
      title: "AI Application Engineer",
      company: "Knowledge Graph & GraphRAG",
      website: "",
      experienceId: "ai-engineer",
    },
  ],
  about: `
- AI Application Engineer focused on Knowledge Graph, GraphRAG, Remote Sensing AI, and Reliable AI Systems.
- Passionate about transforming complex scientific research problems into verifiable, deployable, and interpretable intelligent systems.
- Key projects include KG defense systems (reducing wrong knowledge admission from 40% to 8%), multi-source graph fusion for biomass prediction (R² improvement from ~0.25 to ~0.72), and GraphRAG quality evaluation frameworks.
`,
  avatar: "",
  avatarVariants: {
    lightOff: "",
    lightOn: "",
    darkOff: "",
    darkOn: "",
  },
  ogImage: "",
  namePronunciationUrl: "",
  timeZone: "Asia/Shanghai",
  keywords: [
    "黄晓东",
    "AI Application Engineer",
    "Knowledge Graph",
    "GraphRAG",
    "Remote Sensing AI",
    "KG Defense",
    "Graph Fusion",
    "Reliable AI",
  ],
  dateCreated: "2024-01-01",
}
