const { Model, DataTypes } = require('sequelize')

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zipcode: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: 'Informe um CEP'
            },
            len: {
              args: [9, 9],
              msg: 'Formato invalido'
            }
          }
        },
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
        complementary: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
  }
}

module.exports = Address
