import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUserWithRole, findUserByUsername } from '../models/userModel.mjs';

// Register a new user
export async function register(req, res) {
    const { username, password, email, phone, role, roleData } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const userId = await createUserWithRole({
            username,
            password: hashedPassword,
            email,
            phone,
            role,
            roleData,
        });

        res.status(201).json({ message: 'User registered successfully', userId });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Login user
export async function login(req, res) {
    const { username, password } = req.body;

    try {
        const user = await findUserByUsername(username);
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        const isValidPassword = await bcrypt.compare(password, user.PASSWORD);
        if (!isValidPassword) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id_user: user.ID_USER, role: user.ROLE }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
