import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const readBd = await readContacts()


        const newContact = createFakeContact();

        const updateBd = [...readBd, newContact]

        await writeContacts(updateBd)

        console.log('New contact added successfully:', newContact);
    } catch (error) {
      console.error('Error adding new contact:', error);
    }
};

addOneContact();
