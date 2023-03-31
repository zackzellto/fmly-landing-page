require('esm')(module);
const cors = require("cors");
const waitlistRouter = require('../routes//waitlist');
const app = express();
const url = process.env.DB_URL || 'mongodb://localhost:27017/waitlist';
const corsOptions = {
  origin: "*",
  allowedHeaders: "*",
  credentials: true,
};
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  app.use(cors(corsOptions));
  app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/waitlist', waitlistRouter);

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


