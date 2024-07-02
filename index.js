const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const mongoose = require('mongoose');

const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api', bookRoutes);

const PORT = process.env.PORT || 4041;
const MONGO_URL = process.env.MONGO_URL;


mongoose.connect(MONGO_URL).then(() => {
	console.log("Database connected Successfully.")
	app.listen(PORT, () => {
		console.log(`Server is running on port : ${PORT}`)
	})
}).catch(error =>
	console.log(error));


app.get('/new', (req, res) => {
	res.send("welcome Books CRUD");
})


// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ msg: 'Something went wrong! please give correct URL' });
});
