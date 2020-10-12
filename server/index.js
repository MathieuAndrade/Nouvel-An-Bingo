// index.js
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
const promisify = require('util').promisify;

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());

const writeFilePromise = promisify(fs.writeFile);

WriteTextToFileAsync = async (contentToWrite) => {
    try {
        const path = '../sentences.json';
        await writeFilePromise(contentToWrite, path);
    } catch (err) {
        throw new Error(`Could not write file because of ${err}`);
    }
}

// Default route
app.get('/', (req, res) => res.status(200).send({message: 'Hello world'}));

// Read route
app.get('/read', (req, res) => {
    try {
        fs.readFile('../sentences.json', (err, data) => {
            if (err) throw err;
            let result = JSON.parse(data);
            return res.status(200).send(result);
        });
    } catch (err) {
        throw new Error(`Could not read file because of ${err}`);
    }
})

// Write route
app.post('/write', async (req, res) => {
    try {
        fs.writeFile("../sentences.json", JSON.stringify(req.body), (err) => {
            if (err) throw err;
            console.log("The file was saved!");
        });
        return res.status(200).send({message: 'File written successfully!'});
    } catch (err) {
        throw new Error(`Could not write file because of ${err}`);
    }
});

// Not-found route
app.use((req, res, next) => {
    res.status(404).send({message: 'Could not find the specified route you requested!'});
});

app.listen(port, () => console.log(`Server up and running and listening for incoming requests on port ${port}!`));