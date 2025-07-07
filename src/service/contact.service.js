const db = require('../models/index');

exports.createContact = async (data) => {
    return await db.Contact.create(data)
}

exports.getAllContacts = async () => {
    return await db.Contact.findAll({
        where: {
            deletedAt: null
        }
    });
}