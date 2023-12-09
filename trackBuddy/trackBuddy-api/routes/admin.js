const router = require('express').Router();
const Admins = require('../models/admin.model')

router.route('/').get((req,res)=>{
    Admins.find()
        .then(admins => res.json(admins))
        .catch(err => res.status(400).json('Erro:'+ err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const newAdmins = new Admins({
        username,
        password
    });

    newAdmins.save()
    .then(()=>res.json('Admin added!'))
    .catch(err => res.status(400).json('Error:'+ err));

});

module.exports = router;