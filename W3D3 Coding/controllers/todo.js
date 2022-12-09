const { json } = require('body-parser');
const fs = require('fs');

// display the HOME PAGE
module.exports.homePage = (req, res) => {
    let path = './models/' + req.params.filename;
    fs.readFile(path, 'utf8', (err,data) => {
        if(err) {
            res.send('ERROR! Please use /todo/todo.json!');
        }
        else {
            data = JSON.parse(data);
            res.render('home', { data });
        }
    });
};





// create a NEW TASK
module.exports.createTask = (req, res) => {

    // add timestamp
    req.body.timestamp = Date.now();

    let postData = JSON.stringify(req.body);
    let path = './models/' + req.params.filename;

    if(fs.existsSync(path)) {
        //console.log("file exist!");
        fs.readFile(path, 'utf8', (err,data) => {
            if(err) {
                console.log('file could not be read!');
            }
            else {
                // add the new object to json array
                var obj = JSON.parse(data);
                obj.push(JSON.parse(postData));
                fs.writeFile(path, JSON.stringify(obj), (err) => {
                    if(err) {
                        console.log('object could not be added!');
                    }
                    else {
                        console.log('object added to json!');
                    }
                });
            }
        });
    }
    else {
        // attempting to post to a file that isn't todo.json
        res.send('ERROR! PLEASE POST TO todo.json')
    }

    res.redirect('/todo/todo.json');
};




// DELETE a TASK
module.exports.deleteTask = (req, res) => {
    // need this to know what json object we are changing
    let id = req.body.delete;
    let path = './models/' + req.params.filename;
    console.log("inside delete, this is the id", id, path);
    // does file exist?
    if(fs.existsSync(path)) {
        fs.readFile(path, 'utf8', (err,data) => {
            if(err) {
                res.send('ERROR! Something went wrong!');
            }
            else {
                let jsonData = JSON.parse(data);
                console.log(id, jsonData.length);

                // loop thru json, look for first occurence and delete them
                if (id < jsonData.length) {
                    jsonData.splice(id,1);
                    
                    // update the file
                    fs.writeFile(path, JSON.stringify(jsonData), (err) => {
                        if(err) {
                            console.log('object could not be deleted');
                        }
                        else {
                            console.log('object successfully deleted');
                        }
                    });
                } 
                else {
                    console.log('Not a valid delete id!');
                }
    

            }
        });
        res.redirect('/todo/todo.json');
    }
    else {
        res.send('error! file not exist!');
    }
};

module.exports.updateTask = (req, res) => {
    console.log(req.body);

    // need this to know what json we are changing
    let id = req.body.edit;
    let path = './models/' + req.params.filename;

    // does file exist?
    if(fs.existsSync(path)) {
        fs.readFile(path, 'utf8', (err,data) => {
            if(err) {
                res.send('ERROR! Something went wrong!');
            }
            else {
                let jsonData = JSON.parse(data);
    
                if (id < jsonData.length) {
                    jsonData[id].title = req.body.title[id];
                    jsonData[id].description = req.body.description[id];
                    jsonData[id].status = req.body.status[id];
                    jsonData[id].priority = req.body.priority[id];

                    // update the file
                    fs.writeFile(path, JSON.stringify(jsonData), (err) => {
                        if(err) {
                            console.log('file could not be updated');
                        }
                        else {
                            console.log('file successfully updated');
                        }
                    });
                }
                else {
                    console.log('Not a valid edit id!');
                }
            }
        });
        res.redirect('/todo/todo.json');
    }
    else {
        res.send('error! file not exist!');
    }
};