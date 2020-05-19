/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("property", {
    id: {
      type: "text",
      serial: true,
    },
    subject: {
      type: "text",
      notNull: true,
      reference: "subject",
    },
    definition: {
      type: "text",
      notNull: true,
    },
    active: {
      type: "boolean",
    },
    value: {
      type: "text",
      reference: "value",
    },
    master: {
      type: "text",
      reference: "subject",
    },
    collection: {
      type: "text",
      notNull: true,
      reference: "subject",
    },
  });
};

exports.down = (pgm) => {};
