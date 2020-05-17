/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("value", {
    id: {
      type: "text",
      serial: true,
    },
    definition: {
      type: "text",
    },
    hold: {
      type: "text",
    },
    type: {
      type: "text",
      notNull: true,
      reference: "subject",
    },
  });
};

exports.down = (pgm) => {};
