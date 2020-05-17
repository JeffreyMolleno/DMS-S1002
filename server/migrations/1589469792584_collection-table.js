/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("collection", {
    id: {
      type: "text",
      serial: true,
    },
    subject: {
      type: "text",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {};
