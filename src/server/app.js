/**
 * The Express setup starts here
 */
import path from 'path';
import bodyParser from 'body-parser';
import express, { Router } from 'express';

/* Exports express variables for use in other files */
export default express;
export const app = express();
export const router = Router();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/**
 * Tell Express to use Express Routers when the URL starts with /api
 */
app.get(/^(?!(\/api$)|(\/api\/.*$))/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

/**
 * API Examples
 */
app.get('/api/users/:username', (req, res) => {
  res.send(`Username: ${req.params.username}`);
});
