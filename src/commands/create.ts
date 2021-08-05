import { Command, flags } from "@oclif/command";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import chalk = require("chalk");

import createStencilTemplate from "../utils/createStencilTemplate";
import createStorybookTemplate from "../utils/createStorybookTemplate";
import createStyleTemplate from "../utils/createStyleTemplate";

export default class Create extends Command {
  static description =
    "This command creates component files inside yout src/components folder. The <component> argument accepts a relative path, but it will always creates components inside src/components folder.";

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
      default: true,
      allowNo: true,
    }),

    commented: flags.boolean({
      description: "includes commented Stencil template.",
      required: false,
      hidden: false,
      default: false,
      char: "c",
    }),
  };

  static args = [
    {
      name: "component",
      required: true, // make the arg required with `required: true`
      description: "name your component and do not forget the unique prefix.", // help description
    },
  ];

  async run() {
    const { args, flags } = this.parse(Create);

    const componentPath = args.component;
    const componentArg = componentPath.split("/");

    const componentName = componentArg[componentArg.length - 1];

    const folder = `src/components/${componentPath}`;
    const style = flags.styles;
    const commented = flags.commented;

    const stencilFile = await createStencilTemplate(
      componentName,
      style,
      commented
    );
    const storybookFile = await createStorybookTemplate(componentName);
    const styleFile = await createStyleTemplate();

    this.log(`\ncreating ${componentName} inside ${folder}`);
    this.log(chalk.cyan(`Alakazan! *magic stuff happening*`));

    if (!existsSync(folder)) {
      mkdirSync(folder, { recursive: true });
    }

    try {
      writeFileSync(`${folder}/${componentName}.tsx`, stencilFile, {
        flag: "wx",
      });
      this.log(
        chalk.green(`\n --created ${componentName}.tsx inside ${folder}`)
      );
    } catch (error) {
      if (error.code !== "EEXIST") {
        this.error(error);
      }
    }

    if (flags.storybook) {
      try {
        writeFileSync(`${folder}/${componentName}.stories.ts`, storybookFile, {
          flag: "wx",
        });
        this.log(
          chalk.green(
            `\n --created ${componentName}.stories.ts inside ${folder}`
          )
        );
      } catch (error) {
        if (error.code !== "EEXIST") {
          this.error(error);
        }
      }
    }

    try {
      writeFileSync(`${folder}/${componentName}.${style}`, styleFile, {
        flag: "wx",
      });
      this.log(
        chalk.green(`\n --created ${componentName}.${style} inside ${folder}`)
      );
    } catch (error) {
      if (error.code !== "EEXIST") {
        this.error(error);
      }
    }

    this.log(`\nThere you go! See you next time ;)`);
  }
}
