const { NotFound } = require("http-errors");
const contactsOperation = require("../model/contacts/index");

const listContacts = async (req, res) => {
  const results = await contactsOperation.listContacts();
  res.json({
    status: "success",
    code: 200,
    data: { results },
  });
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.getContactById(contactId);
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.removeContact(contactId);
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: `Contact with id ${contactId} deleted`,
  });
};

const addContact = async (req, res) => {
  const result = await contactsOperation.addContact(req.body);
  res.json({
    status: "success",
    code: 201,
    data: { result },
    message: "Contact added",
  });
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.updateContact(contactId, req.body);
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
