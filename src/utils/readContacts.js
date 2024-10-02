import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.promises.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log('Error reading contacts:', error);
    throw error;
  }
};