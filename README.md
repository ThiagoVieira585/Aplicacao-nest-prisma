# NestJS and Prisma CRUD Application

## Overview
This project is a study application built with NestJS and Prisma. Its purpose is to explore and understand CRUD operations and the relationships between database tables.

    Initial Implementation: A CRUD system for the Father entity was created to manage data and operations related to fathers.
    Current State: A CRUD system for the Child entity has been implemented, which is related to the Father entity, highlighting the relationships between tables.
    Features: The application demonstrates creating, reading, updating, and deleting both Father and Child entities, with a focus on how Child records are associated with Father records.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Prisma**: A next-generation ORM that helps build faster, make fewer errors, and have a more enjoyable database experience.
- **PostgreSQL**: A powerful, open-source object-relational database system.

## Project Structure

```plaintext
.
├── nest-cli.json
├── package.json
├── package-lock.json
├── prisma
│ ├── migrations
│ │ ├── 20240730190531_init
│ │ │ └── migration.sql
│ │ ├── 20240730215546_remove_table
│ │ │ └── migration.sql
│ │ └── migration_lock.toml
│ └── schema.prisma
├── README.md
├── src
│ ├── app.module.ts
│ ├── common
│ │ └── filters
│ │ │ └── http-exception.filter.ts
│ ├── database
│ │ └── PrismaService.ts
│ ├── main.ts
│ └── modules
│ ├── father
│ │ ├── dto
│ │ │ └── father.dto.ts
│ │ ├── father.controller.ts
│ │ ├── father.module.ts
│ │ └── father.service.ts
│ └── child
│ │ ├── dto
│ │   └── child.dto.ts
│ │ ├── child.controller.ts
│ │ ├── child.module.ts
│ │ └── child.service.ts
├── tsconfig.build.json
└── tsconfig.json
```

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repo/nestjs-prisma-crud.git
   cd nestjs-prisma-crud
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory with the following content:

   ```plaintext
   DATABASE_URL="postgresql://yourusername:yourpassword@localhost:5432/yourdatabase"
   ```

4. **Run Database Migrations:**

   ```bash
   npx prisma migrate dev
   ```

5. **Start the Application:**

   ```bash
   npm run start:dev
   ```

## Usage

### CRUD for Father

- **Create Father:**

  Send a `POST` request to `/father` with the following JSON body:

  ```json
  {
    "name": "Jhon Doe",
    "email": "example@example.com",
    "phone": "123-456-7890"
  }
  ```

- **Read Father:**

  Send a `GET` request to `/father`.

- **Update Father:**

  Send a `PUT` request to `/father/:id` with the following JSON body:

  ```json
  {
    "name": "John Doe Updated",
    "email": "example.updated@example.com",
    "phone": "098-765-4321"
  }
  ```

- **Delete Father:**

  Send a `DELETE` request to `/father/:id`.

### CRUD for Child

- **Create Child:**

  Send a `POST` request to `/child/:fatherId` with the following JSON body:
  ```json
  {
    "name": "Juninho",
    "age": "10"
  }
  ```

- **Read Child:**

  Send a `GET` request to `/child`.

- **Update Child:**

  Send a `PUT` request to `/child/:id` with the following JSON body:
  ```json
  {
    "name": "Juninho Update",
    "age": "11"
  }
  ```

- **Delete Child:**

  Send a `DELETE` request to `/child/:id`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

## License

This project is licensed under the MIT License. Copyright (c) [2024] [Thiago Vieira]
