var CreateTempAuctions = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('name', 'string');
          t.column('currency', 'string');
          t.column('price', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('temp_auction', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('temp_auction', callback);
  };
};

exports.CreateTempAuctions = CreateTempAuctions;
