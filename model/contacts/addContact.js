const { nanoid } = require("nanoid");
const fs = require("fs/promises");
const path = require("path");
const listContacts = require("./listContacts");
const contactsPath = path.join(__dirname, "../contacts.json");

const addContact = async ({ name, email, phone }) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(2),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    return error.message;
  }
};

module.exports = addContact;
