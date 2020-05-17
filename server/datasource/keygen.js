const generator = (length) => {
  var chars = "0123456789";
  var randomstring = "";
  for (var i = 0; i < length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }

  return randomstring;
};

module.exports = {
  genKey: (type) => {
    let randomstring = generator(3) + "-" + generator(3);

    if (type === "property") randomstring = "P-".concat(randomstring);
    if (type === "subject") randomstring = "S-".concat(randomstring);
    if (type === "value") randomstring = "V-".concat(randomstring);
    if (type === "collection") randomstring = "C-".concat(randomstring);

    return randomstring;
  },
};
