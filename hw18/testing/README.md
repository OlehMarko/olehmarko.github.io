# Node.js
The task has to be made as a homework to the lecture #18 (Networking + Node.js). As I said, you will need 2 weeks for solving. :smiling_imp:
Somebody of you will be ~~happy~~ :angry:! Let's come to the task.

Create a [new issue](https://github.com/stanislavt/node-js-task/issues/new), if you have a question.

### Steps
- [x] Create a new server using [Express.js](http://expressjs.com/)
- [x] As the main storage, you have to create a new file `storage.data`
- [x] Create following [handlers](http://expressjs.com/en/guide/routing.html), which will be run according to the different requests:
- [`POST /users`](#post-users)
- [`GET /users`](#get-users)
- [`GET /users/{id}`](#get-usersid)
- [`PUT /users/{id}`](#put-usersid)
- [`DELETE /users/{id}`](#delete-usersid)

#### `POST /users`
Creates a new user (add user info into `storage.data`).

Response:
- `201` after successfully handling
- `409` if resource already exist

#### `GET /users`
Returns list of users (whole data from `storage.data`)

Response:
- `200` with the body:
```js
[{
  "id": 1,
  "username": "johndoe",
  "email": "john.doe@myownserver.com"
},
{
  "id": 2,
  "username": "johndoesfriend",
  "email": "friend.of.john.doe@myownserver.com"
}]
```
> if `storage.data` is empty, service returns empty array.

#### `GET /users/{id}`
Returns user by `id`

Response:
- `200` with the body:
```js
{
  "id": 1,
  "username": "johndoe",
  "email": "john.doe@myownserver.com"
}
```
- `404` if user has been not found

#### `PUT /users/{id}`
Replace user data by `id`

Response:
- `200` with the new users' data in body:
```js
{
  "id": 1,
  "username": "newjohndoe",
  "email": "john.doe.second@myownserver.com"
}
```
- `404` if user has been not found


#### `DELETE /users/{id}`
Removes user by `id`

Response:
- `200` if user has been removed. Body must contains the message about successfully handling.
```js
{
  "message": "User has been successfully removed."
}
```
- `404` if user has been not found

### User data:

|id|username|email|password|
|--|--------|-----|--------|
|1|johndoe|john.doe@myownservice.com|q8xowdnaxitf3g3ffjjl|
|2|johndoefriend|friend.of.john.doe@myownservice.com|2a1cgv7e0be2d26my8g9|

### Notes
> Feel free to choose the data format of `storage.data`. It can be JSON, CSV, XML :), etc.
> Use the module [fs](https://nodejs.org/api/fs.html#fs_fs_readsync_fd_buffer_offset_length_position) for working with files. 
> DO NOT USE ‘Sync’ methods like: `fs.readFileSync(path)`. You have to use `fs.readFile(path, callback(err, result))`
> Add directory `node_modules` into `.gitignore`
> It would be nice to separate handlers into a few files.
> Encryption of password would be a good feature.

Have a nice weekend! :joy:
