import express from 'express';
import jwt from 'jsonwebtoken'
import cors from 'cors';

const app = express()
app.use(cors());
app.use(express.json())

const users = [
  {
    id: "1",
    email: "lotfy@lotfy.com",
    password: "lotfy123456",
    isAdmin: true
  },
  {
    id: "2",
    email: "atef@atef.com",
    password: "atef123456",
    isAdmin: false
  }
]

let refreshTokens = [];


const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "30d",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
};

// login user
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => {
    return u.email === email && u.password === password;
  });
  if (user) {
    //Generate an access token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);
    res.json({
      email: user.email,
      isAdmin: user.isAdmin,
      accessToken,
      refreshToken,
    });
  } else {
    res.status(400).json("email or password incorrect!");
  }
});

// verify jwt token
const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "mySecretKey", (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
  }
};

// logout user
app.post("/api/logout", verify, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("You logged out successfully.");
});


app.listen(5000, () => console.log("Backend server is running"))