# NestJS and Prisma CRUD Application

## Overview

This project is a study application built with NestJS and Prisma. The goal is to explore and understand the implementation of CRUD operations and the relationships between tables in a database. Initially, a CRUD for the `Father` entity was implemented. The next step is to create a CRUD for the `Child` entity, which will be related to the `Father` entity, to emphasize the relationships between tables.

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
│   ├── migrations
│   │   ├── 20240730190531_init
│   │   │   └── migration.sql
│   │   ├── 20240730215546_remove_table
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── README.md
├── src
│   ├── app.module.ts
│   ├── database
│   │   └── PrismaService.ts
│   ├── main.ts
│   └── modules
│       └── father
│           ├── dto
│           │   └── father.dto.ts
│           ├── father.controller.ts
│           ├── father.module.ts
│           └── father.service.ts
│       └── child (planned)
│           ├── dto
│           │   └── child.dto.ts (planned)
│           ├── child.controller.ts (planned)
│           ├── child.module.ts (planned)
│           └── child.service.ts (planned)
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
   NODE_ENV=development
   PORT=3000
   POSTGRES_USER=yourusername
   POSTGRES_PASSWORD=yourpassword
   POSTGRES_DB=yourdatabase
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
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890"
  }
  ```

- **Read Father:**

  Send a `GET` request to `/father/:id`.

- **Update Father:**

  Send a `PUT` request to `/father/:id` with the following JSON body:

  ```json
  {
    "name": "John Doe Updated",
    "email": "john.doe.updated@example.com",
    "phone": "098-765-4321"
  }
  ```

- **Delete Father:**

  Send a `DELETE` request to `/father/:id`.

### Planned CRUD for Child

- **Create Child:**

  Will involve sending a `POST` request to `/child` with a JSON body containing the child's details and the `fatherId` to establish the relationship.

- **Read Child:**

  Will involve sending a `GET` request to `/child/:id`.

- **Update Child:**

  Will involve sending a `PUT` request to `/child/:id` with a JSON body containing the updated child's details.

- **Delete Child:**

  Will involve sending a `DELETE` request to `/child/:id`.

## Future Improvements

- Implement CRUD operations for the `Child` entity.
- Enhance validation and error handling.
- Add more complex relationships and queries.
- Implement authentication and authorization.

## Contributing

Contributions are welcome! Please open an [issue](https://github.com/your-repo/nestjs-prisma-crud/issues) or submit a [pull request](https://github.com/your-repo/nestjs-prisma-crud/pulls) if you have suggestions or improvements.
