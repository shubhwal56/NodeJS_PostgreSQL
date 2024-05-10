import express, { Request, Response } from 'express';
import { splitString } from './logic';
import { concatenateParams } from './logic';
import { isLeapYear } from './logic';
import { secretHandshake } from './logic';

const app = express();
const port = 8000;

app.get('/split/:text', (req: Request, res: Response) => {
    const text = req.params.text;
    const revisedString = splitString(text);
    res.json({ revisedString });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.get('/concatenate/:param1/:param2', (req: Request, res: Response) => {
    const { param1, param2 } = req.params;
    const revisedString = concatenateParams(param1, param2);
    res.json({ revisedString });
});

app.get('/leap/:year', (req: Request, res: Response) => {
    const year = parseInt(req.params.year);
    const leapYearStatus = isLeapYear(year);
    
    res.json({ leapYearStatus });
});

app.get('/handshake/:number', (req: Request, res: Response) => {
    const number = parseInt(req.params.number);
    const handshake = secretHandshake(number);
    res.json({ handshake });
});