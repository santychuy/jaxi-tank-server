import User from '../models/User';
import { cleanObject } from '../helper/cleanObject';
import { NEW_USER } from '../graphql/subcriptions';

export const getUsers = async () => {
  try {
    return await User.find();
  } catch (e) {
    return e;
  }
};

export const getUser = async (_, { id }) => {
  try {
    return await User.findById(id);
  } catch (e) {
    return e;
  }
};

export const createUser = async (_, { name, email, username, password }, { pubsub }) => {
  try {
    const user = new User({ name, email, password, username });
    pubsub.publish(NEW_USER, {
      newUser: { name, id: user.id, email, username, password, tasks: [] },
    });
    return await user.save();
  } catch (e) {
    return e;
  }
};

export const updateUser = async (_, { id, name, email, username, password }) => {
  try {
    const data = cleanObject({ name, email, username, password });
    return await User.findByIdAndUpdate(id, data);
  } catch (e) {
    return e;
  }
};

export const deleteUser = async (_, { id }) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (e) {
    return e;
  }
};
