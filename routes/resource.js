var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var shoe_controller = require('../controllers/shoe'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// shoe ROUTES /// 
 
// POST request for creating a shoe.  
router.post('/shoe', shoe_controller.shoe_create_post); 
 
// DELETE request to delete shoe. 
router.delete('/shoe/:id', shoe_controller.shoe_delete); 
 
// PUT request to update shoe. 
router.put('/shoe/:id', shoe_controller.shoe_update_put); 
 
// GET request for one shoe. 
router.get('/shoe/:id', shoe_controller.shoe_detail); 
 
// GET request for list of all shoe items. 
router.get('/shoe', shoe_controller.shoe_list); 
 /* GET detail shoe page */ 
router.get('/detail', shoe_controller.shoe_view_one_Page); 
/* GET create shoe page */ 
router.get('/create', shoe_controller.shoe_create_Page); 

/* GET create update page */ 
router.get('/update', shoe_controller.shoe_update_Page);
/* GET delete shoe page */ 
router.get('/delete', shoe_controller.shoe_delete_Page); 
module.exports = router; 