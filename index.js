import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const FULL_NAME = 'john_doe';
const DOB = '17091999';
const EMAIL = 'john@xyz.com';
const ROLL_NUMBER = 'ABCD123';

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input. `data` must be an array.',
      });
    }

    const response = {
      is_success: true,
      user_id: `${FULL_NAME.toLowerCase()}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: "",
    };

    let sum = 0;
    let alphaChars = [];

    data.forEach((item) => {
      const strItem = String(item);

      if (/^[0-9]+$/.test(strItem)) {
        const num = parseInt(strItem, 10);
        sum += num;
        if (num % 2 === 0) {
          response.even_numbers.push(strItem);
        } else {
          response.odd_numbers.push(strItem);
        }
      } else if (/^[a-zA-Z]+$/.test(strItem)) {
        response.alphabets.push(strItem.toUpperCase());
        alphaChars.push(...strItem.split(''));
      } else {
        response.special_characters.push(strItem);
      }
    });

    alphaChars = alphaChars.reverse();
    let concatStr = '';
    for (let i = 0; i < alphaChars.length; i++) {
      concatStr += i % 2 === 0
        ? alphaChars[i].toUpperCase()
        : alphaChars[i].toLowerCase();
    }

    response.sum = String(sum);
    response.concat_string = concatStr;

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      is_success: false,
      message: 'Internal Server Error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
