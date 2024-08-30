# Dashboard Backend Development

## Project Overview

This backend application provides a dynamic dashboard for managing user access, data from multiple market sources (e.g., BSE, NSE), and creating customizable sections and sub-sections for data visualization.

## Tech Stack

- **Backend Framework**: Nest.js
- **Database**: PostgreSQL
- **ORM**: TypeORM

## System Design

- **User Management**: Role-based access control to restrict user access to specific categories.
- **Data Sources**: Supports multiple market data sources with separate tables.
- **Dynamic Sections**: Sections and sub-sections are stored dynamically, allowing flexible addition/deletion.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-link>
   cd <project-directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in `.env`:
   ```sh
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=
   DB_PASSWORD=
   DB_NAME=
     DB_HOST: 'localhost',
     DB_PORT: 5432,
     DB_USERNAME: 'postgres',
     DB_PASSWORD: '1234',
     DB_NAME: 'postgres',
     autoLoadEntities: true,
     synchronize: true,
     schema:'product',
   ```
4. Run database migrations:
   ```sh
   npm run typeorm migration:run
   ```

### Running the Application

Start the server:

```sh
npm run start:dev
```
