import app from './app';

const PORT = 4001;

const server = app.listen(PORT, () => {
	console.info(`App is running at http://localhost:${PORT}`);
	console.info('\nPress CTRL-C to stop\n');
});

export default server;