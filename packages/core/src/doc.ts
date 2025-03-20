type ModeWriter = (doc: Doc, modes: { execution: "sync" | "async" }) => void;

export class Doc {
  args: string[];
  content: string[] = [];
  indent = 0;

  constructor(args: string[]) {
    this.args = args;
  }

  indented(fn: (doc: Doc) => void) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }

  write(fn: ModeWriter): void;
  write(line: string): void;
  write(arg: any) {
    if (typeof arg === "function") {
      (arg as ModeWriter)(this, { execution: "sync" });
      (arg as ModeWriter)(this, { execution: "async" });
      return;
    }

    const content = arg as string;
    const lines = content.split("\n").filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }

  compile() {
    const lines = [...this.content.map((x) => `  ${x}`)];
    return new Function(...this.args, lines.join("\n"));
  }
}
