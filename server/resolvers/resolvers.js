const resolvers = {
  Query: {
    async getAllGenericProperty(parent, args, context, info) {
      return await context.dataSources.Base.getAllValueProperty();
    },
    getProperty(parent, args, context, info) {
      return null;
    },
    getNames(parent, args, context, info) {
      // return context.db.filter((data) => {
      //   return data.master === "NAME";
      // });
      return null;
    },
    async getCollection(parent, args, context, info) {
      return await context.dataSources.Base.getCollection({
        title: args.album,
        id: args.id,
      });
    },
  },
  Mutation: {
    async addValueProperty(parent, args, context, info) {
      return await context.dataSources.Base.addValueProperty(args);
    },
    async addSubject(parentm, args, context, info) {
      const res = await context.dataSources.Base.addSubject({
        title: args.title,
      });
      return res;
    },
    async addValue(parent, args, context, info) {
      return await context.dataSources.Base.addValue({ args });
    },
  },
  Property: {
    async subject(parent, args, context, info) {
      return await context.dataSources.Base.getSubject({ id: parent.subject });
    },
    async collection(parent, args, context, info) {
      return await context.dataSources.Base.getSubject({
        id: parent.collection,
      });
    },
    async value(parent, args, context, info) {
      return await context.dataSources.Base.getValue({
        id: parent.value,
      });
    },
  },
  Value: {
    async type(parent, args, context, info) {
      return await context.dataSources.Base.getSubject({ id: parent.type });
    },
  },
  Result: {
    __resolveType(obj, context, info) {
      if (obj.title) return "Subject";
      if (obj.hold) return "Value";
      if (obj.subject) return "Property";

      return null;
    },
  },
  MutationResponse: {
    __resolveType(obj, context, info) {
      return null;
    },
  },
};

module.exports = resolvers;
