{
    "openapi": "3.0.0",
    "info": {
      "title": "My Node.js API",
      "version": "1.0.0"
    },
    "paths": {
      "/api/hello": {
        "get": {
          "summary": "Get a greeting",
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "example": {
                    "message": "Hello from the API!"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  