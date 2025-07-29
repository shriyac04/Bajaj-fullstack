# Bajaj Finserv Full Stack Assessment – Backend API

This is a backend API built using **Node.js** and **Express.js** for the **Bajaj Finserv Full Stack Assessment**. It accepts an input array of strings and returns categorized data such as numbers, alphabets, special characters, computed sum, and reversed string.

---

## Tech Stack

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Deployment:** Render  
- **Environment Config:** `.env` for port settings

---

## Project Structure

```
Bajaj-fullstack/
├── node_modules/           # Installed dependencies
├── .env                    # Environment variables
├── .gitignore              # Files ignored by Git
├── index.js                # Main Express application
├── package.json            # Project configuration
├── package-lock.json       # Dependency lockfile
├── render.yaml             # Render deployment configuration
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shriyac04/Bajaj-fullstack.git
cd Bajaj-fullstack
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file with the following content:

```env
PORT=3000
```

### 4. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

---

## API Endpoint

### POST `/bfhl`

#### ➤ Request Example:

```http
POST http://localhost:3000/bfhl
Content-Type: application/json
```

```json
{
  "data": [“a”,”1”,”334”,”4”,”R”, “$”]
}
```

#### ➤ Response Example:

```json
{
"is_success": true,
"user_id": "john_doe_17091999",
“email” : “john@xyz.com”,
“roll_number”:”ABCD123”,
"odd_numbers": [“1”],
"even_numbers": [“334”,”4”],
"alphabets": [“A”,”R”],
“special_characters”: [“$”],
"sum": "339" // return sum as a string
"concat_string": "Ra"
}
```

---

## Testing Instructions (Postman)

1. Open [Postman](https://www.postman.com/)
2. Create a new **POST** request to:  
   `http://localhost:3000/bfhl`
3. Under the **Body** tab, select **raw** > **JSON**
4. Paste the input array (e.g., `{"data": [“a”,”1”,”334”,”4”,”R”, “$”]}`)
5. Hit **Send**

---
