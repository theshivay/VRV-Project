# Authentication and Role-Based Access Control (RBAC) System

A secure **Authentication and Role-Based Access Control (RBAC)** system built with **Node.js**, **Express.js**, **MongoDB**, and a dynamic frontend using **HTML**, **CSS**, and **JavaScript**. This project ensures secure user authentication, session management, and access control based on roles such as **Admin**, **User**, and **Moderator**.

---

## Features

### Core Features:
1. **User Authentication**:
   - User registration with secure password storage (hashed using bcrypt).
   - User login with JWT token generation for secure session management.
   - Logout functionality.

2. **Role-Based Access Control (RBAC)**:
   - **Admin**: Full access to all resources (e.g., viewing logs, managing users).
   - **Moderator**: Limited administrative privileges.
   - **User**: Access to general features only.

3. **Admin Features**:
   - View user activity logs (e.g., login attempts, role updates).
   - Monitor system activities via a dedicated admin dashboard.

4. **Session Management**:
   - JWT-based session authentication for stateless, secure requests.
   - Tokens include user information and expiration for security.

5. **Security**:
   - Password hashing using `bcryptjs`.
   - Tokens signed with a secret key.
   - Middleware for authentication and authorization.

---

## Technologies Used

### Frontend:
- **HTML**: For structuring web pages.
- **CSS**: For styling and responsive design.
- **JavaScript**: For client-side interactivity and API calls.

### Backend:
- **Node.js**: For server-side logic and handling requests.
- **Express.js**: For creating RESTful APIs.
- **MongoDB**: For data persistence (user accounts, roles, logs).
- **Mongoose**: For database modeling and querying.

### Dependencies:
- **bcryptjs**: For hashing passwords.
- **jsonwebtoken**: For generating and verifying JWTs.
- **dotenv**: For environment variable management.
- **cors**: For enabling cross-origin requests.

---

## Folder Structure

```
├── public
│   ├── css
│   │   └── styles.css      # Frontend styles
│   ├── js
│   │   └── scripts.js      # Frontend scripts
│   ├── admin-logs.html     # Admin log page
│   ├── login.html          # Login page
│   ├── register.html       # Registration page
│   ├── index.html          # Home page
├── routes
│   ├── authRoutes.js       # Authentication and user management routes
├── middleware
│   ├── authenticate.js     # JWT token validation middleware
│   ├── authorize.js        # Role-based access middleware
├── models
│   ├── User.js             # User schema
│   ├── AuditLog.js         # Audit log schema
├── server.js               # Main server file
├── .env                    # Environment variables
├── package.json            # Project dependencies
└── README.md               # Documentation
```

---

## API Endpoints

### **Authentication Endpoints**
1. `POST /api/auth/register`:
   - Registers a new user.
   - Expects:
     ```json
     {
       "email": "example@example.com",
       "password": "password123",
       "role": "user"
     }
     ```
2. `POST /api/auth/login`:
   - Logs in a user and returns a JWT token.
   - Expects:
     ```json
     {
       "email": "example@example.com",
       "password": "password123"
     }
     ```
3. `GET /api/auth/logs`:
   - Accessible only to Admins. Retrieves activity logs.

---

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/auth-rbac.git
   cd auth-rbac
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**: Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Server**:
   ```bash
   npm run dev
   ```
   The server will run on http://localhost:5000.

5. **Open Frontend**:
   Open any HTML file (e.g., login.html, admin-logs.html) in a browser.

## Usage

### User Workflow:
- Register a new account on the register.html page.
- Log in on the login.html page to generate a token.
- Access authorized pages based on your role.

### Admin Workflow:
- Log in as an admin.
- View logs on the admin-logs.html page to monitor activities.

## Security Measures
- **Password Hashing**: Passwords are hashed before being stored in MongoDB.
- **JWT Authentication**: Tokens are signed with a secret key and validated on every request.
- **Environment Variables**: Sensitive data is stored in .env files.
- **Role-Based Authorization**: Only users with proper roles can access specific routes.

## Future Enhancements
- OAuth Integration: Add Google and Facebook login options.
- Two-Factor Authentication (2FA): Increase security by requiring an additional authentication step.
- Password Reset: Enable users to reset their passwords via email.
- User Management Dashboard: Allow admins to manage users and their roles through an interactive UI.

## Contribution
Contributions are welcome! Feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions or need further assistance, feel free to contact:

- **Developer**: Shivam Mishra
- **Website**: Role-Based Access Control (RBAC) System
- **Email**: shivammishraeee@gmail.com