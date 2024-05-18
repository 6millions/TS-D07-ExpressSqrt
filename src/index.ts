import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Complex, number, sqrt } from 'mathjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.post('/sqrt', (req: Request, res: Response) => {

    const { input } = req.body;

    if (input === undefined) {
        return res.status(400).send('Invalid input');
    }

    const result = calculateSquareRoot(input);

    if (typeof result === 'number') {
        return res.json({ result });
    } else {
        return res.status(400).send(result);
    }

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



function calculateSquareRoot(input: number): number | string {



    if (typeof input === 'number') {
        const result = sqrt(input);

        if (typeof result === 'number' && !isNaN(result)) {

            return result;
        }
        else {

            return 'Invalid input';
        }

    } else {
        return 'Invalid input';
    }
}