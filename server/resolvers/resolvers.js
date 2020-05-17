const resolvers = {
  Query: {
    getAllGenericProperty(parent, args, context, info) {
      return context.db;
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
    getCollection(parent, args, context, info) {
      return context.db.filter((data) => {
        console.log(data.collection, args.id);
        return data.collection.subject == args.album;
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
    // async addType(parent, args, context, info) {
    //   const res = await context.dataSources.Base.addSubject({
    //     title: args.title,
    //   });
    //   return res;
    // },
    async addValue(parent, args, context, info) {
      return await context.dataSources.Base.addValue({args});
    },
  },
  Property: {
    value(parent, args, context, info) {
      return parent.value;
    },
    collection(parent, args, context, info) {
      return parent.collection;
    },
    subject(parent, args, context, info) {
      return parent.subject;
    },
  },
  //   Result: {
  //     _resolveType(obj, context, info) {
  //       if (obj.username) return "User";

  //       return null;
  //     },
  //   },
  //   MutationsResponse: {
  //     _resolveType(obj, context, info) {
  //       return null;
  //     },
  //   },
};

module.exports = resolvers;
