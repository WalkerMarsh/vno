import { CreateInputs } from "../dts/factory.d.ts";

export const promptUniversal =
  "\nAre you creating a universal app(SSG/SSR) or spa(Single Page App)?";
export const custom = "\nWould you like to customize your vno project?";
export const init = "\n\nInitializing your vno project...\n";
export const creating = "\nCreating your vno project...\n";
export const reset = "\nResetting user options\n";

export const load = ":completed/:total vno load :time [:bar] :percent";
export const pub = "public";
export const components = "components";
export const indexhtml = `${pub}/index.html`;
export const vnoconfig = "vno.config.json";
export const serverTs = "server.ts";

//options is object of type CreateInputs<--interface
export const options: CreateInputs = {
  title: "your project",
  root: "App",
  components: ["HelloVno"],
  port: 3000,
};

export const reqs: string[] = [
  "\nConfirm these results and create your project:",
  "\nName any additional components:",
  "\nPort number for server:",
  "\nLabel your root component:",
  "\nPlease enter a title:",
];

// command tests
//these are regex's, searching for something, i means case insensitive
export const cmnd = {
  create: /create/i,
  build: /build/i,
  run: /run/i,
  dev: /dev/i,
  server: /server/i,
  quiet: /quiet/i,
  help: /--help/i,
  info: /--info/i,
  buildSsr: /--ssr/i,
  buildSS: /--ss/i,
};
