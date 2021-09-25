const { NotFound } = require("http-errors");
const { Contact } = require("../models");

const { sendSuccessRes } = require("../utils");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new NotFound(`Contact with id ${contactId} not found`);
  }
  sendSuccessRes(res, { message: `Contact with id ${contactId} deleted` });
};

module.exports = removeContact;