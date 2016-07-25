var SkateSpot = require('../spot/spotModel.js');

module.exports = function() {
  var dummyData = [
    {
      name: 'SOMA skate park',
      lat: 37.770505,
      lng: -122.421569,
      address: 'Stevenson st & Duboce ave',
      shortDescription: 'new skate park under I-80',
      detailedDescription: 'Ledges and stairsets at the top. A long snake run downhill, with banks and hips on either side. Super packed always and if you don\'t watch out you can easily get killed riding through the key hole at the bottom.',
      bust: 'no',
      comments: [{username: "Jamie", comment: 'Great park, but too crowded'}, {username: "AJ", comment: 'it\'s rad'}]
    },
    { 
      name: '3rd and Army',
      lat: 37.748124,
      lng: -122.390297,
      address: '1698 Indiana st',
      shortDescription: 'Ledges and fat round rails',
      detailedDescription: 'Curved ledges, benches, gaps. DIY trainy against the ledge. Smooth ground, a little windy, not many pedestrians. The ledges aren\'t too tall, but you\'ve gotta be pretty gnarly to grind the rail',
      bust: 'sometimes, but rarely',
      comments: [{username: "Rob", comment: 'I love this place, but last week I kicked my board out, and it rolled into the ocean'}, {username: "Heath", comment: 'buttery ledges'}]
    },
    {
      name: 'Fort Miley',
      lat: 37.782256,
      lng: -122.507806,
      address: 'at Land\'s End, Lincoln park',
      shortDescription: 'Abandoned army fort with hips and rails',
      detailedDescription: 'Good flat ground spot with hardly any pedestrians, a couple of concrete pyramids, one pretty mellow and one steep with the rail at the top. Plenty of room for practicing flip tricks, chill place to hang out',
      bust: 'no',
      comments: [{username: "nat", comment: 'Ollie to 50-50 is deadly'}, {username: "Ed", comment: 'Brian Anderson skates here a bunch'}]
    }
  ];

  SkateSpot.find().exec(function(err, skateSpots) {
    if (err) {
      console.log(err);
    } else if (skateSpots.length === 0) {
      SkateSpot.create(dummyData[0]);
      SkateSpot.create(dummyData[1]);
      SkateSpot.create(dummyData[2]);
    }
  });
};

