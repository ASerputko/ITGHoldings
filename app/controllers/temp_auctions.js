var TempAuctions = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Auction.all(function(err, tempAuctions) {
      self.respond({params: params, tempAuctions: tempAuctions});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , tempAuction = geddy.model.Auction.create(params);

    if (!tempAuction.isValid()) {
      this.flash.error(tempAuction.errors);
      this.redirect({action: 'add'});
    }
    else {
      tempAuction.save(function(err, data) {
        if (err) {
          self.flash.error(err);
          self.redirect({action: 'add'});
        }
        else {
          self.redirect({controller: self.name});
        }
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Auction.first(params.id, function(err, tempAuction) {
      if (!tempAuction) {
        var err = new Error();
        err.statusCode = 404;
        self.error(err);
      }
      else {
        self.respond({params: params, tempAuction: tempAuction.toObj()});
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Auction.first(params.id, function(err, tempAuction) {
      if (!tempAuction) {
        var err = new Error();
        err.statusCode = 400;
        self.error(err);
      }
      else {
        self.respond({params: params, tempAuction: tempAuction});
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Auction.first(params.id, function(err, tempAuction) {
      tempAuction.updateProperties(params);
      if (!tempAuction.isValid()) {
        this.flash.error(tempAuction.errors);
        this.redirect({action: 'edit'});
      }
      else {
        tempAuction.save(function(err, data) {
          if (err) {
            self.flash.error(err);
            self.redirect({action: 'edit'});
          }
          else {
            self.redirect({controller: self.name});
          }
        });
      }
    });
  };

  this.destroy = function (req, resp, params) {
    var self = this;

    geddy.model.Auction.remove(params.id, function(err) {
      if (err) {
        self.flash.error(err);
        self.redirect({action: 'edit'});
      }
      else {
        self.redirect({controller: self.name});
      }
    });
  };

};

exports.TempAuctions = TempAuctions;
