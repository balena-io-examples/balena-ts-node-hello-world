import express, { Application, Request, Response } from 'express';
import { renderFile } from 'ejs';

const PORT = 80;

const app: Application = express();

// Enable HTML template middleware
app.engine('html', renderFile);

// Enable static CSS styles
app.use(express.static('styles'));

// Reply to request with a welcome HTML
app.get('/', (_req: Request, res: Response) => {
  res.render('index.html');
});

app.listen(PORT, () => {
  console.log(`⚡️ Example app listening on port ${PORT}`);
});
