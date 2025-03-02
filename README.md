# Globetrotter - The Ultimate Travel Quiz Game 🌍

Globetrotter is a fun and interactive travel guessing game where players receive cryptic clues about famous destinations and must guess the correct location. Each guess unlocks fascinating trivia, making learning about world destinations an exciting challenge!

## ✨ Features
- 🏝 **Guess the Destination** – Players receive cryptic clues and select the correct location.
- 🎉 **Instant Feedback** – Fun animations for correct and incorrect answers.
- 🏆 **Score Tracking** – Monitor correct and incorrect guesses.
- 🤝 **Challenge a Friend** – Invite friends via a unique link and compare scores.
- 🔄 **Replayability** – New random destinations with every play.

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [React.js](https://reactjs.org/)

### 2️⃣ Database Setup
Run the following commands to set up your MySQL database:
```sudo mysql -u root -p``` (Enter your password)

Inside the MySQL shell, execute:
```sh
CREATE DATABASE IF NOT EXISTS globetrotter; 
CREATE USER 'globetrotter'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sam123'; 
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, REFERENCES, INDEX, ALTER ON globetrotter.* TO 'globetrotter'@'localhost'; 
FLUSH PRIVILEGES; 
EXIT;
```



---

## 🛠️ Running the Application

### 3️⃣ Backend Setup
1. Navigate to the backend directory:
    ```
    cd backend
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Create a `.env` file in the backend directory with the following content:
    ```
    DB_NAME=globetrotter
    DB_USER=globetrotter
    DB_PASSWORD=sam123
    DB_HOST=localhost
    DB_PORT=3306
    PORT=5000
    ```
4. Start the backend server:
    ```
    npm run start
    ```

### 4️⃣ Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
    ```
    cd frontend
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the React application:
    ```
    npm start
    ```

### 5️⃣ Access the App
- Open the frontend in your browser at: [http://localhost:3000](http://localhost:3000)
- The backend API runs at: [http://localhost:5000](http://localhost:5000)

---

## 🏗️ Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **AI Integration:** OpenAI API / Web Scraping for dataset expansion

---

## 🔥 Challenge a Friend Feature
- Users enter a **unique username** to create their profile.
- Click **‘Challenge a Friend’** to generate a shareable invite link.
- Friends can see the inviter’s **score** before playing.
- **Dynamic invite images** enhance the experience.


---

## 📈 Future Roadmap
- Couldn't complete the assignment due to the local mysql server not working on my machine. So, I couldn't test and deploy the application. But, here are some features that can be added in the future:
- **Category Selection:** Choose from different themes like landmarks, food, culture, etc.
- **Difficulty Levels:** Adjust the game complexity based on user preference.
- **Progressive Web App:** Enable offline access and push notifications.
- **AI Integration:** Use OpenAI API for more complex clues.
- **User Profiles:** Save scores and track progress.
- **Leaderboard:** Compare scores with friends and global players.
- **Multiplayer Mode:** Real-time challenges with friends.
- **Geolocation:** Unlock destinations based on user location.
- **Social Sharing:** Share scores on social media platforms.

---

### How to enhance Extensibility? 🧩
- **Modular Codebase:** Use components and services for easy feature additions.
- **API Integration:** Add more APIs for diverse content and features.
- **Database Normalization:** Optimize database schema for scalability.
- **Testing Suite:** Implement unit and integration tests for robustness.
- **Error Handling:** Enhance error messages and logging for debugging.
- **Security Measures:** Implement authentication and authorization features.
- **Performance Optimization:** Minify assets and optimize load times.
- **Responsive Design:** Ensure compatibility with all devices and screen sizes.


💡 Built by Sumanth Vuddagiri
