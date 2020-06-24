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
| PUT    | '/users/me/techs'.  | YES   | Edit users known technologies            |
| DELETE    | '/users/me'  | YES  | Delete user account     |

## VIDEOS ENDPOINTS

| METHOD | URL                | AUTH | FUNCTION                    |
|--------|--------------------|------|-----------------------------|
| GET    | '/videos/:videoId'.      | NO   | Watch a video           |
| GET    | '/videos/technologies/:techId'        | NO  | List all videos of a specific technology |
| GET    | '/videos/level/:levelId'        | NO  | List all videos of a specific level         |
| GET    | '/videos/search/:term'  | NO   | List all videos of a specific search            |
| GET    | '/videos/:videoId/likes'        | NO  | Get amount of likes |
| GET    | '/videos/:videoId/views'        | NO  | Get amount of views        |
| GET    | '/videos/:videoId/techs'  | NO   | Get video technologies            |
| POST    | '/videos'      | YES   | Upload a video          |
| PUT    | '/videos/:videoId'      | YES   | Update video information          |
| PUT    | '/videos/:videoId/likes'      | YES   | Increase video likes          |
| PUT    | '/videos/:videoId/views'      | YES   | Increase video views           |
| DELETE    | '/videos/:videoId'      | YES   | Delete a video           |
| GET    | '/videos/:videoId/comments'      | NO   | List video comments           |
| POST    | '/videos/:videoId/comments'      | YES   | Add video comment          |
| PUT    | '/videos/:videoId/comments/:commentId'      | YES   | Edit video comment          |
| DELETE    | '/videos/:videoId/comments/:commentId'      | YES   | Delete a video comment           |
