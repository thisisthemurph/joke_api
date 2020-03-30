# Joke API

> A simple API for fetching jokes

## Get a list of all jokes

### Request

`GET http://mmurphy.co.uk/jokes/api`

    curl -i -H 'Accept: application/json' http://mmurphy.co.uk/jokes/api -d 'adult=true' --get

Notice here that we can detail if we are interested in adult jokes or not by applying the `adult=true` parameter.

* The defaut value is `false`
* Supplying `true` will return only jokes tagged as adult

### Response

    HTTP/1.1 200 OK
    Server: nginx/1.14.0 (Ubuntu)
    Date: Mon, 30 Mar 2020 12:28:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 25110
    Connection: keep-alive
    X-Powered-By: Express
    ETag: W/"6216-FBcQNFJ/kz8iQDXold+LpKiZWP8"

```json
[
    {
        "_id": "5e7f75fe0aa68234a5146a3f",
        "title":null,
        "text": "the actual body text of the joke...",
        "adult": true,
        "createdAt": "2020-03-28T16:06:22.774Z",
        "updatedAt": "2020-03-28T16:06:22.774Z"
    },{
        "_id": "5e7f75fe0aa68234a5146a65",
        "title":null,
        "text": "the actual body text of the joke",
        "adult": true,
        "createdAt": "2020-03-28T16:06:22.774Z",
        "updatedAt": "2020-03-28T16:06:22.774Z",
    }
]
```

## Get a random joke

### Request

`GET http://mmurphy.co.uk/jokes/api/random`

    curl -i -H 'Accept: application/json' http://mmurphy.co.uk/jokes/api/random -d 'adult=true' --get

### Response

    HTTP/1.1 200 OK
    Server: nginx/1.14.0 (Ubuntu)
    Date: Mon, 30 Mar 2020 12:30:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 253
    Connection: keep-alive
    X-Powered-By: Express
    ETag: W/"fd-AJAqg1VdKnPKXQaGQWpQ+kX1SIU"

```json
{
    "_id": "5e7f75fe0aa68234a5146a3f",
    "title": null,
    "text": "the actual body text of the joke...",
    "adult": true,
    "createdAt": "2020-03-28T16:06:22.774Z",
    "updatedAt": "2020-03-28T16:06:22.774Z"
}
```

## Get a specific joke

### Request

`GET http://mmurphy.co.uk/jokes/api/JOKE_ID`

    curl -i -H 'Accept: application/json' http://mmurphy.co.uk/jokes/api/5e7f75fe0aa68234a5146a3f

### Response

    HTTP/1.1 200 OK
    Server: nginx/1.14.0 (Ubuntu)
    Date: Mon, 30 Mar 2020 12:30:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 253
    Connection: keep-alive
    X-Powered-By: Express
    ETag: W/"fd-AJAqg1VdKnPKXQaGQWpQ+kX1SIU"

```json
{
    "_id": "5e7f75fe0aa68234a5146a3f",
    "title": null,
    "text": "the actual body text of the joke...",
    "adult": true,
    "createdAt": "2020-03-28T16:06:22.774Z",
    "updatedAt": "2020-03-28T16:06:22.774Z"
}
