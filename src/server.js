import app from './app';
import config from './config';

const { PORT } = config;

app.listen(PORT, () => {
  console.log(`app is live at http://127.0.0.1:${PORT}`);
});