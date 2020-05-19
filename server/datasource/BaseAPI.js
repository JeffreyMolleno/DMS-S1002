const { DataSource } = require("apollo-datasource");
const { genKey } = require("./keygen");
// const connect = require("./datasource/database");

class BaseAPI {
  constructor({ store }) {
    // super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async addValueProperty(data) {
    const {
      subject,
      definition,
      active,
      master,
      collection,
      value,
      value_definition,
      value_type,
    } = data;

    const setSubject = await this.addSubject({ title: subject });

    const setvalue = await this.addValue({
      definition: value_definition,
      hold: value,
      type: value_type,
    });

    const setCollection = await this.addSubject({ title: collection });

    const propertydefinition = {
      id: genKey("property"),
      subject: setSubject.result.id,
      definition,
      active,
      value: setvalue.result ? setvalue.result.id : null,
      master,
      collection: setCollection.result.id,
    };

    const result = await this.context.db.property.insert({
      ...propertydefinition,
    });

    return { result };
  }

  async addValue({ definition, hold, type } = {}) {
    if (hold) {
      const exptype = await this.addSubject({ title: type });

      const result = await this.context.db.value.insert({
        id: genKey("value"),
        definition,
        hold,
        type: exptype.result.id,
      });

      return { result };
    }
    return { definition, hold, type };
  }

  async addSubject({ title }) {
    // check first if subject.title is alreay existing
    const existing = await this.context.db.subject.where(`title='${title}'`);

    // if not then create one
    if (existing.length === 0) {
      const result = await this.context.db.subject.insert({
        id: genKey("subject"),
        title,
      });
      return { result };
    }

    return { result: existing[0] };
  }
  async getValuePropertyofSubject({ subject }) {
    const result = await this.context.db.query(`SELECT * FROM property `)
  }

  async getAllValueProperty() {
    const result = await this.context.db.query("SELECT * FROM property");
    return result;
  }

  async getSubject({ id }) {
    const result = await this.context.db.subject.where(`id='${id}'`);
    return result[0];
  }

  async getValue({ id }) {
    const result = await this.context.db.value.where(`id='${id}'`);
    return result[0];
  }

  async getCollection({ title, id }) {
    const result = await this.context.db.query(
      `SELECT * FROM property INNER JOIN subject on property.collection = subject.id WHERE title = '${title}'`
    );

    return result;
  }
}

module.exports = BaseAPI;
