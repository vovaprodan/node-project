 import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json"); 

// TODO: задокументувати кожну функцію
 export async function listContacts() {
    const buffer = await fs.readFile(contactsPath);
    return JSON.parse(buffer);
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. 
}