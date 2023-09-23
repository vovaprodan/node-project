import { Command } from 'commander';
import * as contactsService from "./db/contacts.js";

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contactList = await contactsService.listContacts();
      return console.table(contactList);
      break;

    case 'get':
       const oneContact = await contactsService.getContactById(id);
                return console.log(oneContact);
      break;

    case 'add':
         const newContact = await contactsService.addContact(name, email,phone);
                return console.log(newContact);
      break;

    case 'remove':
      const delContact = await contactsService.removeContact(id);
                return console.log(delContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);