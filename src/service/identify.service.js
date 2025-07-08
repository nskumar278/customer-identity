const db = require('../models/index');

exports.identifyContact = async (data) => {
  try {
    const { email, phoneNumber } = data;
    const condition = [];

    if (email) condition.push({ email });
    if (phoneNumber) condition.push({ phoneNumber });

    if (condition.length === 0) {
      throw new Error('At least one identifier (email or phoneNumber) is required');
    }

    const contacts = await db.Contact.findAll({
      where: {
        [db.Sequelize.Op.or]: condition,
        deletedAt: null,
      },
      attributes: ['id', 'email', 'phoneNumber'],
    });

    if (contacts.length === 0) {
      return null;
    }
    return contacts;
  } catch (error) {
    console.error('Error identifying contact:', error);
    throw error;
  }
};
