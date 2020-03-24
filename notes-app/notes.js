//! This file contains different methods for the app
const fs = require("fs");
const chalk = require("chalk");

//* addNote method for the app
const addNote = (title, body) => {
  const notes = loadNote();
  //* .find method finds a match and then breaks the loop so it is more efficient then .filter method
  const duplicate = notes.find(note => note.title === title);

  if (!duplicate) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);

    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};

const rmNote = title => {
  const notes = loadNote();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.blue.inverse("Note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

const listNote = () => {
  const notes = loadNote();
  console.log(chalk.greenBright.inverse("Your Notes"));
  //? for in version (not good looking and a bit complex)
  // for (let note in notes) {
  //   console.log(notes[note].title);
  // }
  //? forEach version (directly gets the element and not number like in for..in loop)
  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNote = title => {
  const notes = loadNote();
  const noteToRead = notes.find(note => note.title === title);

  if (noteToRead) {
    console.log(noteToRead.title);
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

const loadNote = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//? Exporting module
module.exports = {
  addNote,
  rmNote,
  listNote,
  readNote
};
