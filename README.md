# iddle-backend

# API ROUTES

## AUTHENTICATION ENDPOINTS

| METHOD | URL           | AUTH | FUNCTION             |
|--------|---------------|------|----------------------|
| POST   | '/auth/signup' | NO   | Create a new account |
| POST   | '/auth/login'  | NO   | Authenticate a user  |

## USERS ENDPOINTS

| METHOD | URL                | AUTH | FUNCTION                    |
|--------|--------------------|------|-----------------------------|
| GET    | '/users/:id'.      | NO   | Get user profile            |
| GET    | '/users/me'        | YES  | Get registered user profile |
| PUT    | '/users/me'        | YES  | Create user profile         |
| PUT    | '/users/me/name'.  | YES   | Edit users name            |
| PUT    | '/users/me/username'  | YES  | Edit users username.     |
| PUT    | '/users/me/photo'  | YES  | Edit users photo            |
| PUT    | '/users/me/aboutme'  | YES  | Edit users information      |
| PUT    | '/users/me/technology'.  | YES   | Edit users known technologies            |
| DELETE    | '/users/me'  | YES  | Delete user account     |

