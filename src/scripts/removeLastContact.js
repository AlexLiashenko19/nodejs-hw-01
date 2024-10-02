import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const readBd = await readContacts()

    const findLastOne = readBd.lastIndexOf();
    if (findLastOne === -1) {
       readBd.pop() 
    }
    await writeContacts(readBd)
};

removeLastContact();
