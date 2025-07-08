const db = require('../models/index');

exports.createContact = async (data) => db.Contact.create(data);

exports.getAllContacts = async () => db.Contact.findAll({
  where: {
    deletedAt: null,
  },
});
