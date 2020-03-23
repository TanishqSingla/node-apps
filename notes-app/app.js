//! This is the notes app
const yargs = require("yargs");
const notes = require("./notes.js");
yargs.version("0.0.1");

yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Content",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Removes a new note",
  builder: {
    title: {
      describe: 'used as --title=""',
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.rmNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "Lists the notes",
  handler() {
    notes.listNote();
  }
});

yargs.command({
  command: "read",
  describe: "Reads a note",
  builder: {
    title: {
      decribe: "Reads notes",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();
