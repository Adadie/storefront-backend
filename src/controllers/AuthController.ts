import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username,role } = req.body;

    // check if email already exists in the database
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // create a new user in the database
    const newUser = await User.create({
      email,
      password: password,
      username: username && username,
      role: role && role,
    });

    return res
      .status(201)
      .json({ message: 'User created', userId: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // check if email exists in the database
    const user = await User.findOne({ where: { email } });
    console.log('Logging in user========', user)
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Logging in user is match???????', isMatch)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Logged in', user: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
