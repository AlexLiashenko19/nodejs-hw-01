import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const readBd = await readContacts()

        if (readBd.length < 0) {
            return console.log("first")
        }

        return readBd.length
    } catch (error) {
        console.error('Error counting contacts:', error);
    }
};

console.log(await countContacts());
