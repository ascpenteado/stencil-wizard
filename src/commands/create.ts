import { Command, flags } from "@oclif/command";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import chalk = require("chalk");

import createStencilTemplate from "../utils/createStencilTemplate";
import createStorybookTemplate from "../utils/createStorybookTemplate";
import createStyleTemplate from "../utils/createStyleTemplate";

export default class Create extends Command {
  static description =
    "This command creates component files inside yout src/components folder.";

  static flags = {
    help: flags.help({ char: "h" }),

    styles: flags.string({
      char: "s",
      description: "style language",
      multiple: false,
      options: ["scss", "css", "sass"],
      default: "scss",
      required: true,
    }),

    storybook: flags.boolean({
      description: "includes a storybook template file. Default is true.",
      required: false,
      hidden: false,
    }),
  };

  static args = [
    {
      name: "component",
      required: true, // make the arg required with `required: true`
      description: "name your component and do not forget the unique prefix.", // help description
    },
    {
      name: "folder",
      required: true,
      description: "folder where you wish your component to be created.", // help description
    },
  ];

  async run() {
    const { args, flags } = this.parse(Create);

    const component = args.component;
    const folder = args.folder;
    const style = flags.styles;

    const stencilFile = await createStencilTemplate(component, style);
    const storybookFile = await createStorybookTemplate(component);
    const styleFile = await createStyleTemplate();

    this.log(`\ncreating ${component} inside ${folder}`);
    this.log(`we are using ${style} for your style file.`);
    this.log(chalk.cyan(`Alakazan! *magic stuff happening*`));

    if (!existsSync(folder)) {
      mkdirSync(folder, { recursive: true });
    }

    try {
      writeFileSync(`${folder}/${component}.tsx`, stencilFile, { flag: "wx" });
      this.log(chalk.green(`\n --created ${component}.tsx inside ${folder}`));
    } catch (error) {
      if (error.code !== "EEXIST") {
        this.error(error);
      }
    }

    try {
      writeFileSync(`${folder}/${component}.stories.ts`, storybookFile, {
        flag: "wx",
      });
      this.log(
        chalk.green(`\n --created ${component}.stories.ts inside ${folder}`)
      );
    } catch (error) {
      if (error.code !== "EEXIST") {
        this.error(error);
      }
    }

    try {
      writeFileSync(`${folder}/${component}.${style}`, styleFile, {
        flag: "wx",
      });
      this.log(
        chalk.green(`\n --created ${component}.${style} inside ${folder}`)
      );
    } catch (error) {
      if (error.code !== "EEXIST") {
        this.error(error);
      }
    }

    this.log(`\nThere you go! See you next time ;)`);
  }
}
