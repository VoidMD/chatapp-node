import express from 'express';
import cors from 'cors';
import axios from 'axios';
import {env} from './env.js';

const app = express();

app.use(express.json()); 
app.use(cors({origin: true}));

app.post('/user/create', async (req, res) => {
    const { username , secret } = req.body;
    try {
        console.log(env.CHAT_ENGINE_PRIVATE_KEY);
        const r = await axios.put('https://api.chatengine.io/users/', { username: username,
        secret: secret},
        { headers: { "private-key": env.CHAT_ENGINE_PRIVATE_KEY } }
        );
        return res.status(r.status).json({success: true, message: r.data});
    } catch (error) {
        console.log(`something went wrong: ${error}`);
        return res.status(400).json({success: false, message: `something went wrong: ${error}`});
    }
});

app.listen(3333, () => console.log('Server running on http://localhost:3333/'));