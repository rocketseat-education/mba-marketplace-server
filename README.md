# Marketplace MBA - API Challenge

## Routes

### POST /accounts/sellers ✅

- Should be able to create a new user
  - name
  - phone
  - email
  - password
  - passwordConfirmation
  - avatar
- [x] The phone number should be unique
- [x] The e-mail should be unique
- [x] The password and passwordConfirmation should match
- [x] The password should be hashed

### GET /accounts/sellers/me

- Should be able to show the authenticated user profile

### POST /sessions/sellers ✅

- [x] Should be able to authenticate a user
  - email
  - password

### GET /categories ✅

- Should be able to list all categories

### POST /products ✅

- Should be able to create a new product for sale
  - title
  - owner_id
  - description
  - status (available | sold | canceled)
  - price_in_cents (number)
  - attachments
  - category
- The owner_id should be the id of the authenticated user

### PUT /products/:id ✅

- Should be able to update a product for sale
  - title
  - description
  - price_in_cents (number)
  - attachmentsIds
  - category
- Should not allow to update the product if the status is "sold"
- Should not allow to update the status of the product

### PATCH /products/:id/status/:state ✅

- Should be able to update the status of a product
- Only the owner of the product can update the status

### GET /me/products ✅

- Should be able to list all products by the authenticated user
  - Filter by text (title, description)
  - Filter by status

### GET /metrics

Últimos 30 dias

- Produtos Vendidos
- Total Anunciados
- Visitantes Únicos (30 dias)
- Visitantes Únicos (Por dia)
