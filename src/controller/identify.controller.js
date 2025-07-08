const identifyService = require('../service/identify.service');

exports.identifyContact = async (req, res) => {
  try {
    const { email, phoneNumber } = req.body;
    const contact = await identifyService.identifyContact({
      email,
      phoneNumber,
    });
    res.status(200).json(contact);
  } catch (error) {
    console.error('Error identifying contact:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
