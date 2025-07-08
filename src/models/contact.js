module.exports = (sequelize, DataTypes) => {
  let Contact;
  if (!sequelize.models.Contact) {
    Contact = sequelize.define('Contact', {
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    }, {});
  } else {
    Contact = sequelize.models.Contact;
  }

  return Contact;
};
