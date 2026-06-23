import {
  siHtml5,
  siCss3,
  siJavascript,
  siTypescript,
  siAngular,
  siNgrx,
  siReactivex,
  siReact,
  siVite,
  siNodedotjs,
  siExpress,
  siOpenjdk,
  siSpringboot,
  siSpring,
  siJsonwebtokens,
  siSwagger,
  siMongodb,
  siMysql,
  siGit,
  siGithub,
  siGitlab,
  siJira,
  siJenkins,
  siGithubactions,
  siGithubcopilot,
  siVitest,
  siJasmine,
  siPython,
  siArduino,
  siAmazonwebservices,
  siClaude,
  siRedux,
} from "simple-icons";

export interface SkillIcon {
  title: string;
  hex: string;
  path: string;
}

const map: Record<string, SkillIcon> = {
  html5: siHtml5,
  css3: siCss3,
  javascript: siJavascript,
  typescript: siTypescript,
  angular: siAngular,
  ngrx: siNgrx,
  rxjs: siReactivex,
  react: siReact,
  vite: siVite,
  "node.js": siNodedotjs,
  "express.js": siExpress,
  java: siOpenjdk,
  "spring boot": siSpringboot,
  spring: siSpring,
  jwt: siJsonwebtokens,
  swagger: siSwagger,
  mongodb: siMongodb,
  sql: siMysql,
  git: siGit,
  github: siGithub,
  redux: siRedux,
  gitlab: siGitlab,
  jira: siJira,
  jenkins: siJenkins,
  "claude code": siClaude,
  "github actions": siGithubactions,
  "github copilot": siGithubcopilot,
  vitest: siVitest,
  "karma + jasmine": siJasmine,
  jasmine: siJasmine,
  // certification icon slugs
  amazonaws: siAmazonwebservices,
  amazonwebservices: siAmazonwebservices,
  python: siPython,
  arduino: siArduino,
};

export function getSkillIcon(name: string): SkillIcon | null {
  return map[name.toLowerCase().trim()] ?? null;
}

/**
 * Some brand colors are near-black and would be invisible on the dark UI.
 * Return a readable fill: the brand color if bright enough, else light slate.
 */
export function readableIconColor(hex: string): string {
  const h = hex.replace("#", "");
  if (h.length !== 6) return "#CBD5E1";
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.25 ? "#CBD5E1" : `#${h}`;
}
