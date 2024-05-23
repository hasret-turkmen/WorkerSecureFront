/*const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');  // CORS paketini ekleyin

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());
app.use(cors());  // CORS desteğini etkinleştirin

// Kullanıcı giriş işlemi
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Basit doğrulama (gerçek uygulamada burada veritabanı kontrolü yapılır)
    if (username === 'user' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

// Middleware for token verification
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }

        req.user = decoded;
        next();
    });
};

// Güvenlik ekipmanı kontrolü API'si
app.post('/check-helmet', verifyToken, (req, res) => {
    const { hasHelmet } = req.body;

    if (hasHelmet) {
        return res.json({ message: 'User is wearing a helmet' });
    } else {
        return res.json({ message: 'User is not wearing a helmet' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/

/* const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());
app.use(cors());

// E-posta gönderici yapılandırması
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hasretturkmen2121@gmail.com',
        pass: 'hsrttrkmn7274'
    }
});

// Kullanıcı giriş işlemi
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

// Middleware for token verification
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }

        req.user = decoded;
        next();
    });
};

// Güvenlik ekipmanı kontrolü API'si
app.post('/check-helmet', verifyToken, (req, res) => {
    const { hasHelmet } = req.body;

    if (!hasHelmet) {
        // E-posta gönder
        const mailOptions = {
            from: 'hasretturkmen2121@gmail.com',
            to: 'bilihasret@hotmail.com',
            subject: 'Helmet Alert',
            text: 'A worker is not wearing a helmet.'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Error sending email' });
            } else {
                console.log('Email sent:', info.response);
                return res.json({ message: 'User is not wearing a helmet. Email sent.' });
            }
        });
    } else {
        return res.json({ message: 'User is wearing a helmet' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key';

// Twilio configuration
const accountSid = process.env.TWILIO_ACC_SID; // Twilio Account SID
const authToken = process.env.TWILIO_ACC_TOKEN; // Twilio Auth Token
const client = new twilio(accountSid, authToken);

app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }

        req.user = decoded;
        next();
    });
};

function sendSms(to, message) {
    client.messages.create({
        body: message,
        to: to,
        from: '+17692008242'
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.error(error));
}

app.post('/check-helmet', verifyToken, (req, res) => {
    const { hasHelmet } = req.body;

    if (!hasHelmet) {
        sendSms('+905433891412', 'User is not wearing a helmet!');
        return res.json({ message: 'User is not wearing a helmet' });
    } else {
        return res.json({ message: 'User is wearing a helmet' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
