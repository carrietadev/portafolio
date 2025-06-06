import {
  FileCode,
  FileText,
  FileJson,
  GitBranch,
  Github,
  Figma,
  Database,
  Terminal,
  Code,
  Box,
  LayoutGrid
} from 'lucide-react';

export const technologiesData = [
  {
    name: 'HTML5',
    icon: FileCode // Alternativa
  },
  {
    name: 'CSS3',
    icon: FileText // Alternativa
  },
  {
    name: 'JavaScript',
    icon: FileJson
  },
  {
    name: 'React',
    icon: Code // Alternativa genérica
  },
  {
    name: 'Git',
    icon: GitBranch
  },
  {
    name: 'GitHub',
    icon: Github
  },
  {
    name: 'Figma',
    icon: Figma
  },
  {
    name: 'SQL',
    icon: Database
  },
  {
    name: 'Terminal',
    icon: Terminal
  },
  {
    name: 'TypeScript',
    icon: Code // Alternativa genérica
  },
  {
  name: 'Angular',
  icon: Box // ícono genérico
  },
  {
    name: 'Tailwind CSS',
    icon: LayoutGrid
  }
];
