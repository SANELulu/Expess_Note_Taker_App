const fs = require('fs');
const path = require('path');


module.exports = function (app) {
    app.get('/api/notes', function (req,res){
        fs.readFile(path.join(__dirname, '../db/db.json'),'utf8',(err, data) => {
            if (err) {
              console.error(err)
              return
            }
            data = JSON.parse(data)
            console.log(data)
            res.json(data)
          })
    }),
    app.post('/api/notes', function (req, res) {
      let savedNote = req.body;
      let id = '' + postNote;
      savedNote.id = id;
      postNote = postNote + 1;
      data.push(savedNote);
      fs.writeFile('../db/db.json', JSON.stringify(data), () => {
          console.log('note successful')
      });
      res.json(savedNote);
  }),
  app.delete('/api/notes/:id', function (req, res) {
    let selected = req.params.id;
    for (let index = 0; index < data.length; index++) {
        if (selected === data[index].id) {
            data.splice(index, 1);
            fs.writeFile('../db/db.json', JSON.stringify(data), () => {
                console.log('deleted!')
            });
        };
    };
    res.json(data)
})
}


// const fs = require('fs');
// const data = require('../db/db.json')
// module.exports = function (app) {
//     let postNote = data.length;
//     app.get('/api/notes', function (req, res) {
//         res.json(data)
//     });
//     // function adds and saves notes to server and logs 'note succesfull'
//     app.post('/api/notes', function (req, res) {
//         let savedNote = req.body;
//         let id = '' + postNote;
//         savedNote.id = id;
//         postNote = postNote + 1;
//         data.push(savedNote);
//         fs.writeFile('../db/db.json', JSON.stringify(data), () => {
//             console.log('note successful')
//         });
//         res.json(savedNote);
//     });
//     // function to delete notes
//     app.delete('/api/notes/:id', function (req, res) {
//         let selected = req.params.id;
//         for (let index = 0; index < data.length; index++) {
//             if (selected === data[index].id) {
//                 data.splice(index, 1);
//                 fs.writeFile('../db/db.json', JSON.stringify(data), () => {
//                     console.log('deleted!')
//                 });
//             };
//         };
//         res.json(data)
//     })
// }