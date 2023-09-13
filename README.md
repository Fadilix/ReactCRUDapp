# CRUD web application
## Technologies used
- Frontend : ReactJS, Vanilla CSS
- Backend : Node.js, express, MySQL

## Add repo to your local machine:
```
git clone https://github.com/Fadilix/React_CRUD_app.git
npm install
```

---
## Screenshots

### All data displayed
![image](https://github.com/Fadilix/ReactCRUDapp/assets/121851593/095bfa38-116f-487c-a2c1-6bef147482d8)

### Edit contact
![image](https://github.com/Fadilix/ReactCRUDapp/assets/121851593/ad12ed49-1dfa-4c30-ba9f-a7e1b68b0c91)

### Updated contact
![image](https://github.com/Fadilix/ReactCRUDapp/assets/121851593/afa70501-30a6-4744-929d-ff600e175d47)

### Validation
![image](https://github.com/Fadilix/ReactCRUDapp/assets/121851593/ce4fd257-029e-4a21-84ce-91fcf444a7a9)

### Deleting data
![image](https://github.com/Fadilix/ReactCRUDapp/assets/121851593/bb52c7a8-b2b8-4c25-94ae-50fcd97f91a1)
#
![image](https://github.com/Fadilix/ReactCRUDapp/assets/121851593/116a6e27-428c-45c5-b0b6-2edee4234350)

### Contact info
![image](https://github.com/Fadilix/ReactCRUDapp/assets/121851593/98e8e79c-bb79-4b3a-94cb-a2bc2b3db549)

### MySQL database
![image](https://github.com/Fadilix/ReactCRUDapp/assets/121851593/d0b7dd70-6dee-494e-8db0-8132f0758f92)
#
### Recreate the contact table:
```
CREATE TABLE contact_db(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  contact VARCHAR(45) NOT NULL,
  PRIMARY KEY(id));
```


## Description
This web application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on a list of contacts. Here's what the app does:

### Create: 
Users can add new contacts to the list by clicking the "Add Contact" button, which navigates them to a form where they can input contact details such as name, email, and phone number. When they submit the form, the new contact is added to the list.

### Read:
The app displays a table that lists all the contacts stored in the database. Each row in the table represents a contact and includes information like the contact's name, email, and phone number. Users can view these contact details.

### Update:
Users can edit existing contacts by clicking the "Edit" button in the contact's row. This action navigates them to an edit form where they can modify the contact's information. After making changes and submitting the form, the contact's details are updated in the database.

### Delete:
Users can remove a contact from the list by clicking the "Delete" button in the contact's row. A confirmation prompt asks if they are sure they want to delete the contact. If confirmed, the contact is deleted from the database, and the list of contacts is updated accordingly.
