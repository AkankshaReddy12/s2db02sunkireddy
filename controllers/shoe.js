var shoe = require('../models/shoe'); 
 
// List of all shoe
exports.shoe_list = async function(req, res) { 
    try{ 
        theshoe = await shoe.find(); 
        res.send(theshoe); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific shoe. 
exports.shoe_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await shoe.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
 
// Handle shoe create on POST. 
// Handle shoe create on POST. 
exports.shoe_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new shoe(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"shoe_type":"goat", "cost":12, "size":"large"} 
    document.shoe_name = req.body.shoe_name; 
    document.shoe_color = req.body.shoe_color; 
    document.shoe_size = req.body.shoe_size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle shoe delete form on DELETE. 
exports.shoe_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: shoe delete DELETE ' + req.params.id); 
}; 
 
// Handle shoe update form on PUT. 
exports.shoe_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await shoe.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.shoe_type)  
               toUpdate.shoe_name = req.body.shoe_name; 
        if(req.body.shoe_color) toUpdate.shoe_color = req.body.shoe_color; 
        if(req.body.shoe_size) toUpdate.shoe_size = req.body.shoe_size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.shoe_view_all_Page = async function(req, res) { 
    try{ 
        theshoes = await shoe.find(); 
        res.render('shoe', { title: 'shoe Search Results', results: theshoe }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 