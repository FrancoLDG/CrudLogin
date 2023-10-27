# CrudLogin

HOW TO USE THE APP:

The application is made with USERS in mind, so it is necessary to register with a username, email and password.

On the main page, you will find a welcome message with a "view tasks" button which will direct you to the "Login Page"

Once on the Login Page you must Login with your Email and Password, if you do not yet have an account, in the same place you are offered the option to register

On the registration page, you see the legend "get an account" requesting Username, Email and Password information. Once this is done, pressing the REGISTER button will take you to the task page that that user has.
(important: here there are basic rules where it is necessary to complete the 3 fields without fail, in addition that the email must have an email structure and the password must have a minimum of 6 characters; Otherwise an alert will appear and you will not be able to register)

Once inside the tasks page, as a new user you will notice that it is empty with the brief description of "no tasks", but in the upper right part of the screen you will have a greeting next to two buttons, Add Task and Logout, as the buttons mention, one refers to creating a new task and with the other we log out of the account.

By pressing the add task button it will take us to the page where we will complete a form that requests: Title, Description and Category,
with a sober SAVE button, which saves the task, redirecting you to the main page where your tasks are located; Now it has a letter format, where you see the title, description and category on the left side and on the right side three buttons, one to delete, another to edit and a last button to mark the task as completed.
By pressing the Delete button, it completely deletes the task from the DB.
When you press the Edit button, it returns you to the data loading screen but with the data of the task in question, to accommodate the data you deem necessary, saving the same file again.
When you press the status button, it will change from a RED CROSS to a GREEN CHECK.

You will notice that when adding tasks, a filter is also displayed above the cards, this is used to filter between the tasks you have by category, by default it shows all, having the option to filter between three categories "hobby", "work" and " task".

Last but not least, you can perform a LOGOUT to exit your account, this way you will have the tasks in your account and if you create another account, it will have its own tasks, storing the information for each account.

FEATURES:
*if an email has already been registered, the app will notify that the email is in use
*if the password is short, the app will warn that the password must have a minimum of 6 characters
*If I enter an incorrect email or password, the app will notify you with a red message
*messages in red have a visibility time of 3 seconds
*task functions are found under protected endpoints, that is, if you do not have a credential (login) you will not be able to access through links
*when trying to access a link such as /add-task or /tasks, if you do not have cookies, it will take you to the login page to obtain a credential
*if you press logout on a protected page, it will immediately redirect you to the login page
*pressing "to do list app" at the top left will take you to the home page, which if you are logged in, will allow you to return to the tasks page with the View Tasks button.
*if the page is reduced in size, the tasks will arrange the cards vertically to improve visibility.
