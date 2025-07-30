import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contactsList = await readContacts();

  if (contactsList.length > 0) {
    contactsList.pop();
  }

  await writeContacts(contactsList);
};

removeLastContact();
