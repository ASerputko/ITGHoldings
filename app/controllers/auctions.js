var io = require('socket.io').listen(geddy.server);

var Auctions = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Auction.all(function(err, auctions) {
      self.respond({params: params, auctions: auctions});
    });
  };

  this.show = function (req, resp, params) {
    this.respond({params: params});
  };

};

exports.Auctions = Auctions;

