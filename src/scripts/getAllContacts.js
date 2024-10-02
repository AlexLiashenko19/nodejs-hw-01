import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {

    try {
        const readBd = await readContacts()
        return readBd
    } catch (error) {
        console.error('Error reading contacts:', error);
    }
};

console.log(await getAllContacts());
