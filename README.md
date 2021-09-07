# track-server-app

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
