// This module exports a middleware function that sets up a "flash" object on the response locals object.

module.exports.setFlash = function(req , res ,next){
    res.locals.flash = {
        'success': req.flash('success'),
        'error' : req.flash('error')
    }
    next();
}