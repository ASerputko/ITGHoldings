/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

var Application = function () {
	  geddy.io.sockets.on('connection', function (socket) {
      socket.on("andrew", function (data) {
            console.log(data);
          });
      geddy.model.Auction.all(function(err, auctions) {
        for (var i = 0, ii = auctions.length; i < ii; i++) {
          socket.on("" + auctions[i].id + "", function (data) {
            console.log(data);
          });
        }
      });
    });
};

exports.Application = Application;



