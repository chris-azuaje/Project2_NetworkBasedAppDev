const model = require('../models/event');

exports.index = (req, res) => {
    let events =model.find();
    let categories = model.loop();
    console.log(categories);
    res.render('./views/events', {events, categories});
};

exports.new =(req, res) => {
    console.log('requested')
    res.render('./views/newEvent');
};
exports.edit = (req, res,next) => {
    let id = req.params.id;
    let event = model.findById(id);
    if (!event) {
        let err = new Error('event not found with id: '+id);
        err.status = 404;
        next(err);
    }
    else {
        res.render('./views/edit', {event});
    }
};
exports.update = (req, res,next) => {
    let event=req.body;
    let id = req.params.id;
    if(model.updateById(id, event)){
        res.redirect('/events/'+id);
    }else{
        let err = new Error('event not found with id: '+id);
        err.status = 404;
        next(err);
    }
};