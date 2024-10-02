import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts(JSON.stringify([], null, 2), 'utf-8')
        console.log('All contacts successfully removed.');
    } catch (error) {
      console.error('Error removing contacts:', error);
      throw error;
}};

removeAllContacts();
