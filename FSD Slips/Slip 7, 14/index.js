const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', 
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('Form successfully submitted and validated.');
    }
);

app.listen(3000, () => console.log('App running on port 3000. Send POST /submit'));
