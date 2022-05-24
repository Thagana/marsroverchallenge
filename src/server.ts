// import errorHandler from 'errorhandler';
import app from './app';

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === 'development') {
	// app.use(errorHandler());
}

const PORT = process.env.PORT || 4001;

/**
 * Start Express server.
 */
const server = app.listen(PORT, () => {
	console.info(`App is running at http://localhost:${PORT}`);
	console.info('\nPress CTRL-C to stop\n');
});

export default server;