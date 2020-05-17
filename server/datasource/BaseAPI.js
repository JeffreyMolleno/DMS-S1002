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
      objtype,
    } = data;

    const setSubject = await this.addSubject({ title: subject });

    const setvalue = await this.addValue({
      definition,
      hold: value,
      subject,
      type: objtype,
    });

    const setCollection = await this.addSubject({ title: collection });

    const propertydefinition = {
      id: genKey("property"),
      subject: setSubject.result.id,
      definition,
      active,
      value: setvalue.result.id,
      master,
      collection: setCollection.result.id,
    };

    const result = await this.context.db.property.insert({
      ...propertydefinition,
    });
    console.log(result);
    return result;
  }

  async addValue({ definition, hold, subject_id, type } = {}) {
    console.log("type", type);
    const exptype = await this.addSubject({ title: type });
    console.log(exptype.result.id);
    const result = await this.context.db.value.insert({
      id: genKey("value"),
      definition,
      hold,
      type: exptype.result.id,
    });
    return { result };
  }

  async addSubject({ title }) {
    const result = await this.context.db.subject.insert({
      id: genKey("subject"),
      title,
    });

    return { result };
  }
}

module.exports = BaseAPI;
