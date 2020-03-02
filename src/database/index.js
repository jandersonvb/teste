import Sequelize from 'sequelize';

import Professor from '../app/models/Professor';

import databaseConfig from '../config/database';

const models = [Professor];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();