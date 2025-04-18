import User from '../models/userModel.js';

export const getAllUsers = () => User.find();
// todo: Add others similarly: getUserById, createUser, updateUser, deleteUser
