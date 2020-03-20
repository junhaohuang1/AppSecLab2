import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { verify } from './task-list/login-validation';
import { signup } from './task-list/user-signup';

const app = express();
const port = process.env.PORT || 4200;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create-profile', (req, res, next) => {
  const { username, password } = req.body;
  signup({ username, password },
    () => {
      console.log(" created successfully")
      return res.status(400).json(
        {
          error: true,
          message: 'User already exists'
        }
      );
    },
    (queryResult, isError) => {

      if (isError) {
        return res.status(400).json(
          {
            error: true,
            message: 'Insert failed'
          }
        );
      }

      return res.send(
        {
          error: false,
          message: 'User added successfully'
        }
      );
  });
});

app.post('/verify-credentials', (req, res, next) => {
  const { username, password } = req.body;
  verify({ username, password }, (queryResult, isError) => {
    if (isError) {
      return res.status(400).json(
        {
          error: true,
          message: 'Login failed'
        }
      )
    }

    const [result] = queryResult;

    console.log(" login successfully")
    return res.send(
      {
        error: false,
        data: result.id,
        message: 'Login Authorized'
      }
    );
  })
});

app.listen(port, () => {
  console.log(`Port started on port ${port}`);
});
