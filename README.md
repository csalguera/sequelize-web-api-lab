# Sequelize Artists Api
This API allows CRUD operations on a database of Artists and Albums.

## Endpoints
The following section provides information on the available endpoints for this API.

### Create an Artist

**Method**: ```POST```

**Endpoints**: ```/api/artists```

**Desciption**: This endpoint creates an artist with information provided in the request body.

Request Body:
```
{
  name: string,
  age: integer,
  hometown: string
}
```

Response:
```
{
  id: integer,
  name: string,
  age: integer,
  hometown: string,
  createdAt: timestamp,
  updateddAt: timestamp
}
```

### Get All Artists

**Method**: GET

**Endpoint**: ```/api/artists```

**Description**: This endpoint retrieves all the artists stored in the database.

Response:
```
[
  {
    id: integer,
    name: string,
    age: integer,
    hometown: string,
    createdAt: timestamp,
    updateddAt: timestamp
  },
]
```

### Update an Artist

**Method**: ```PUT```

**Endpoint**: ```/api/artists/:id```

**Description**: This endpoint updates the artist with the specified id using the information in the request body.

Request Body:
```
{
  name: string,
  age: integer,
  hometown: string
}
```

Response:
```
{
  id: integer,
  name: string,
  age: integer,
  hometown: string,
  createdAt: timestamp,
  updateddAt: timestamp
}
```

### Delete an Artist

**Method**: ```DELETE```

**Endpoint**: ```/api/artists/:id```

**Description**: This endpoint deletes the artist with the specified id from the database.

Response:
```
{
  id: integer,
  name: string,
  age: integer,
  hometown: string,
  createdAt: timestamp,
  updateddAt: timestamp
}
```