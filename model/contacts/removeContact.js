const fs = require("fs/promises");
const path = require("path");
const listContacts = require("./listContacts");
const contactsPath = path.join(__dirname, "../contacts.json");

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contactInx = contacts.findIndex(
      (contact) => String(contact.id) === contactId
    );
    if (contactInx === -1) {
      return null;
    }
    contacts.splice(contactInx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return "Contact deleted";
  } catch (error) {
    return error.message;
  }
};

module.exports = removeContact;
