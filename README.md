# IDDLE 
## DESCRIPTION
Iddle is a tech oriented video streaming platform, focused on offering easy to find, useful and straight to the point content.

In this repo you can find the back-end of the project. 

Front-end: https://github.com/alvaro-garcia-f/Iddle

Demo: https://alvaro-garcia-f.github.io/Iddle/my-profile.html

## TEAM

Iddle has been developed by:

Alberto Merino: https://github.com/albmg
Álvaro García: https://github.com/alvaro-garcia-f
Carlos Artiles: https://github.com/cartiles0

## PROJECT SETUP

`npm install`

# DB SCHEMAS

## USERS

| KEY        | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|------------|--------------|-----------|----------|----------------|
| name       | string       |           | NO       |                |
| username   | string       |           | YES      |                |
| email      | string       |           | YES      | RegExp, Unique |
| password   | string       |           | YES      |                |
| about      | string       |           | NO       | Maxlength      |
| reputation | number       |           | NO       |                |
| videos     | [ ObjectId ] | Videos    | NO       |                |

## VIDEOS

| KEY         | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|-------------|--------------|-----------|----------|----------------|
| title       | string       |           | YES      |                |
| description | string       |           | YES      |                |
| duration    | string       |           | YES      |                |
| author      | ObjectId     |           | YES      |                |
| likes       | [ ObjectId ] | Users     | NO       |                |
| views       | number       |           | NO       |                |
| techs       | [ ObjectId ] | Techs     | YES      |                |
| level       | string       |           | YES      |                |
| uploadDate  | date         |           | YES      |                |
| comments    | [ ObjectId ] | Comments  | NO       |                |

## COMMENTS

| KEY    | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------------|-----------|----------|----------------|
| author | ObjectId     |  Users    | YES      |                |
| text   | string       |           | YES      |                |

## TECHS

| KEY    | TYPE   | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------|-----------|----------|----------------|
| name   | string |  Users    | YES      |                |
| clicks | number |           | YES      |                |


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
| GET    | '/videos/mostwatched'.                    | NO   | List most watched videos                 |
| GET    | '/videos/:videoId'.                       | NO   | Watch a video                            |
| GET    | '/videos/techs/:techId'                   | NO   | List all videos of a specific technology |
| GET    | '/videos/level/:levelId'                  | NO   | List all videos of a specific level      |
| GET    | '/videos/search/:term'                    | NO   | List all videos of a specific search     |
| POST   | '/videos/me'                              | YES  | Upload a video                           |
| PUT    | '/videos/me/:videoId'                     | YES  | Update video information                 |
| PUT    | '/videos/me/:videoId/likes'               | YES  | Increase video likes                     |
| PUT    | '/videos/:videoId/views'                  | NO   | Increase video views                     |
| DELETE | '/videos/me/:videoId'                     | YES  | Delete a video                           |
| GET    | '/videos/:videoId/comments'               | NO   | List video comments                      |
| POST   | '/videos/me/:videoId/comments'            | YES  | Add video comment                        |
| PUT    | '/videos/me/:videoId/comments/:commentId' | YES  | Edit video comment                       |
| DELETE | '/videos/me/:videoId/comments/:commentId' | YES  | Delete a video comment                   |

## TECH ENDPOINTS

| METHOD | URL                   | AUTH | FUNCTION                                 |
|--------|-----------------------|------|------------------------------------------|
| GET    | '/techs'              | NO   | List all techonologies                   |
| POST   | '/techs/:techId/click | NO   | Increases a technology amount of clicks  |

