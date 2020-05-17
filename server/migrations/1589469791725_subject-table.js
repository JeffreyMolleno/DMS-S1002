/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("subject", {
    id: {
      type: "text",
      serial: true,
    },
    title: {
      type: "text",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {};
