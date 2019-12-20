const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const db = require('./_config');

const staticPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(staticPath);
app.use(staticMiddleware);
app.use(bodyParser.json());

app.get('/api/grades', (req, res, next) => {
  db.query(`SELECT * from studentGrades`)
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch(err => next(err));
});

app.post('/api/grades', (req, res, next) => {
  const insertSQLquery = `INSERT INTO studentGrades (name, course, grade)
                          VALUES ('${req.body.name}',
                            '${req.body.course}',
                            '${req.body.grade}');`;
  db.query(insertSQLquery)
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch(err => next(err));
});

app.delete('/api/grades', (req, res, next) => {
  const deleteSQLquery = `DELETE FROM studentGrades
                            WHERE id = ${parseInt(req.body.id)};`;

  db.query(deleteSQLquery)
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch(err => next(err));
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

http.listen(3031, () => {
  // eslint-disable-next-line
  console.log('listening on 3031...');
});
