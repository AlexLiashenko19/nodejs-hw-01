import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
      await writeContacts([])
      console.log('All contacts was deleted');
    } catch (error) {
      console.error('Error delete:', error);
      throw error;
    }
  };

removeAllContacts();
