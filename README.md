# Getting Started

This project is a simple Express.js application set up for TypeScript development. It includes basic routing and a test suite using Jest.

## Prerequisites

You will need one of the following to run this project:

- Node.js (v20 or later)

Or

- Docker (with Docker Compose)

## Installation

### Without Docker

```bash
npm install
```

### With Docker

```bash
docker compose up 
```

## Development

### Running tests without docker

```bash
npm run test
```

### Running tests with docker

```bash
docker exec -it <container_name> npm run test
```
