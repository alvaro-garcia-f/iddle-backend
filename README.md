# iddle-backend

# API ROUTES

## AUTHENTICATION ENDPOINTS

| METHOD | URL            | AUTH | FUNCTION             |
|--------|----------------|------|----------------------|
| POST   | '/auth/signup' | NO   | Create a new account |
| POST   | '/auth/login'  | NO   | Authenticate a user  |

## USERS ENDPOINTS

| METHOD | URL               | AUTH | FUNCTION                    |
|--------|-------------------|------|-----------------------------|
| GET    | '/users/:id'.     | NO   | Get user profile            |
| GET    | '/users/me'       | YES  | Get registered user profile |
| PUT    | '/users/me'       | YES  | Edit user profile           |
| PUT    | '/users/me/photo' | YES  | Edit users photo            |
| DELETE | '/users/me'       | YES  | Delete user account         |

## VIDEOS ENDPOINTS

| METHOD | URL                                       | AUTH | FUNCTION                                 |
|--------|-------------------------------------------|------|------------------------------------------|
| GET    | '/videos/:videoId'.                       | NO   | Watch a video                            |
| GET    | '/videos/technologies/:techId'            | NO   | List all videos of a specific technology |
| GET    | '/videos/level/:levelId'                  | NO   | List all videos of a specific level      |
| GET    | '/videos/search/:term'                    | NO   | List all videos of a specific search     |
| POST   | '/videos/me'                              | YES  | Upload a video                           |
| PUT    | '/videos/me/:videoId'                     | YES  | Update video information                 |
| PUT    | '/videos/me/:videoId/likes'               | YES  | Increase video likes                     |
| PUT    | '/videos/me/:videoId/views'               | NO   | Increase video views                     |
| DELETE | '/videos/me/:videoId'                     | YES  | Delete a video                           |
| GET    | '/videos/:videoId/comments'               | NO   | List video comments                      |
| POST   | '/videos/me/:videoId/comments'            | YES  | Add video comment                        |
| PUT    | '/videos/me/:videoId/comments/:commentId' | YES  | Edit video comment                       |
| DELETE | '/videos/me/:videoId/comments/:commentId' | YES  | Delete a video comment                   |
