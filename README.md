Vegetarian Ingredient Checker - Setup Instructions

DATABASE SETUP (Choose Option A or B):

Option A: Local MongoDB (Using Compass)
1. Install MongoDB Compass from: https://www.mongodb.com/products/compass
2. Open MongoDB Compass
3. Create a new connection: mongodb://localhost:27017
4. Create a database named: vegetarian-scanner
5. In your .env file use:
   ```
   MONGODB_URI=mongodb://localhost:27017/vegetarian-scanner
   ```

Option B: MongoDB Atlas (Cloud Database)
1. Create free account at: https://www.mongodb.com/cloud/atlas/register
2. Create new cluster (free tier is fine)
3. Click "Connect" on your cluster
4. Choose "Connect your application"
5. Create database user (remember username and password)
6. Add your IP address to Network Access
7. Copy connection string and replace <password> with your database user password
8. In your .env file use:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/vegetarian-scanner
   ```

ENVIRONMENT SETUP:
1. Create .env file in project root with:
   ```
   MONGODB_URI=<your-chosen-connection-string-from-above>
   JWT_SECRET=secret-key
   PORT=3000
   ```

APPLICATION SETUP:
1. Install Dependencies:
   ```
   npm install
   ```

2. Start Application:
   ```
   npm start
   ```
   - Should see: "Connected to MongoDB successfully"
   - Server starts on port 3000

3. Access Application:
   - Open browser: http://localhost:3000
   - Register new account
   - Login and start using

USING THE APP:
- Enter ingredients separated by commas
- Example: "tomato, rice, carrot"
- Click Scan to check if vegetarian
- Results show "Vegetarian" or "Non-Vegetarian"

TEST CASES:
✓ "tomato, lettuce, rice" → Vegetarian
✓ "potato, cheese, eggs" → Vegetarian
✗ "chicken, rice, peas" → Non-Vegetarian

TROUBLESHOOTING:
For Local MongoDB:
- Ensure MongoDB Compass is running
- Check if database name matches

For Atlas:
- Verify network access (IP whitelist)
- Check username/password in connection string
- Ensure cluster is running

General:
- Verify .env file location (project root)
- Check connection string format
- Ensure all dependencies are installed
