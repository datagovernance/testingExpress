var mongoose = require('mongoose')
Schema = mongoose.Schema;

var MusicianSchema = new Schema({
  name: String,
  band: String,
  instrument: String
});

Musician = mongoose.model('Musician', MusicianSchema);

// find all
exports.findAll = function(req, res){
  //res.json({"id":1, "name":"Max", "band":"Maximum Pain", "instrument":"guitar"})
  Musician.find({}, function(err, results) {
    return res.send(results);
    });
};

// find by id
exports.findById = function(req, res){
  var id = req.params.id;
  Musician.findOne({'_id':id}, function(err, result) {
    console.log(id)
    return res.send(result);
  });
};

// update
exports.update = function(req, res){
  var id = req.params.id;
  var updates = req.body;
  console.log(id);
  console.log(updates);

  Musician.update({'_id':id}, req.body,
    function(err, mumberAffected){
      if(err) return console.log(err);
      console.log('Updated %d musicians', numberAffected);
    });
}

// add
exports.add = function(req, res){
  Musician.create(req.body, function(err, musician){
    if(err) return console.log(err);
    return res.send(musician);
  });
}

// delete
exports.delete = function(req, res) {
  var id = req.params.id;
  console.log(id);
  Musician.remove({'_id':id}, function(result){
    return res.send(result);
  });
};


//
exports.import = function(req, res){
  Musician.create(
    { "name": "Ben", "band": "DJ Code Red", "instrument": "Reason" },
    { "name": "Mike D.","band": "Kingston Kats", "instrument": "drums" },
    { "name": "Eric", "band": "Eric", "instrument": "piano" },
    { "name": "Paul", "band": "The Eyeliner", "instrument": "guitar" },
    function(err){
      if(err) return console.log(err);
      return res.sendStatus(202);
    });
};
