# track-server-app

## Get Started
### Step: 1
Perform `npm install` to install required node modules

### Step: 2
Create `.env` file on your root directory and add data mongoDB credentials
```
MY_SECRET_KEY=my_secret_key
DB_NAME=my_database_name
DB_USER=my_user_name
DB_PASSWORD=my_password
DB_HOST=my_host_name
```

## Available Routes
### Sign up
**URI:** `/signup`


**Method:** `POST`


**Payload:** `{email: "something@example.com", password: "somestring"}`


**Response:**
```
{
  "token": "asdfasdfhjkh234j23"
}
```

### Sign In
**URI:** `/signin`


**Method:** `POST`


**Payload:** `{email: "something@example.com", password: "somestring"}`


**Response:**
```
{
  "token": "asdfasdfhjkh234j23"
}
```


### Tracks (Save)
**URI:** `/tracks`


**Method:** `POST`


**Header:** `Authorization`: `Bearer <token received from sign in>`

**Payload:**
```
{
  "name": "my new track",
  "locations": [
    {
      "timestamp": 100000000,
      "coords": {
        "latitude": 100,
        "longitude": 100,
        "altitude": 100,
        "accuracy": 100,
        "heading": 100,
        "speed": 100
      }
    }
  ]
}

```

**Response:**
```
{
  "userId": "6137494df50abfd4d77fe3ec",
  "name": "my new track",
  "locations": [
    {
      "timestamp": 100000000,
      "coords": {
        "latitude": 100,
        "longitude": 100,
        "altitude": 100,
        "accuracy": 100,
        "heading": 100,
        "speed": 100
      },
      "_id": "61377538ea7bee54289a0154"
    }
  ],
  "_id": "61377538ea7bee54289a0153",
  "__v": 0
}
```

### Tracks (Get)
**URI:** `/tracks`


**Method:** `GET`


**Header:** `Authorization`: `Bearer <token received from sign in>`

**Response:**
```
[{
  "userId": "6137494df50abfd4d77fe3ec",
  "name": "my new track",
  "locations": [
    {
      "timestamp": 100000000,
      "coords": {
        "latitude": 100,
        "longitude": 100,
        "altitude": 100,
        "accuracy": 100,
        "heading": 100,
        "speed": 100
      },
      "_id": "61377538ea7bee54289a0154"
    }
  ],
  "_id": "61377538ea7bee54289a0153",
  "__v": 0
}]
```
