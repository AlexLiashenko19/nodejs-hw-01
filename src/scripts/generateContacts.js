import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const readDbFile = await readContacts()

        const newContact = []

        for (let i = 0; i < number; i ++) {
            newContact.push(createFakeContact())
        }

        const updateContact = [...readDbFile, ...newContact]

        await writeContacts(updateContact)

        console.log(`${number} new contacts have been added successfully.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
    }
};

generateContacts(5);
