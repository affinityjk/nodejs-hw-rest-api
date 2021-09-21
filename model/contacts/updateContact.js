const fs = require("fs/promises");
const path = require("path");
const listContacts = require("./listContacts");
const contactsPath = path.join(__dirname, "../contacts.json");

const updateContact = async (contactId, body) => {
  try {
    const contacts = await listContacts();
    const contactInx = contacts.findIndex(
      (contact) => String(contact.id) === contactId
    );
    if (contactInx === -1) {
      return null;
    }
    const updatedContact = { ...contacts[contactInx], ...body };
    contacts[contactInx] = updatedContact;
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return updatedContact;
  } catch (error) {
    return error.message;
  }
};

module.exports = updateContact;
