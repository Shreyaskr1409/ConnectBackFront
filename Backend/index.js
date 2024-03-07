import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('SERVER IS READY');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Serve at http://localhost:'+port);
})


//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "Why did the chicken cross the road?",
          content: "To get to the other side!"
        },
        {
          id: 2,
          title: "What did the fish say when he swam into the wall?",
          content: "Dam!"
        },
        {
          id: 3,
          title: "Why did the golfer wear two pairs of pants?",
          content: "In case he got a hole in one!"
        }
      ];
      res.send(jokes);
})