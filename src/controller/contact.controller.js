const contactService = require('../service/contact.service');

exports.createContact = async (req, res) => {
  try {
    const { email, phoneNumber } = req.body;
    const contact = await contactService.createContact({
      email,
      phoneNumber,
    });
    res.status(201).json(contact);
  } catch (error) {
    console.error('Error creating contact:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
