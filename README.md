# SFCN

---

# **SFCN - Startup Funding & Contribution Network** 🚀  
*A community-driven ecosystem for startups, freelancers, and investors to collaborate, fund, and grow together.*  

## 📌 **Overview**  
SFCN is a **decentralized startup ecosystem** where:  
- **Startups** seek funding, hire freelancers, and contribute back to the community.  
- **Freelancers** work on startup projects, gain reputation, and earn rewards.  
- **Investors (VCs)** fund promising startups and track their progress.  
- **A self-sustaining model** ensures that successful startups reinvest in new ventures.  

---

## ⚙️ **Tech Stack**  
| Technology  | Purpose  |
|------------|---------|
| **React.js** | Frontend UI |
| **Tailwind CSS** | Styling & UI Components |
| **Firebase** | Authentication & Hosting |
| **MongoDB** | Database |
| **Express.js** | Backend API |
| **Web3.js (Optional)** | Blockchain Integration |
| **Gemini AI** | AI-Powered Reputation & Fund Allocation |
| **Solidity (Optional)** | Smart Contracts for Fund Distribution |

---

## 🚀 **Features**  
✅ **Startup & VC Collaboration** - Startups list funding requests; VCs invest securely.  
✅ **Freelancer Contribution System** - Freelancers work on startup tasks and build reputation.  
✅ **AI-Powered Ranking** - Community contributions determine reputation levels.  
✅ **Self-Sustaining Fund Flow** - Successful startups reinvest in the ecosystem.  
✅ **Secure & Transparent Transactions** - Using Firebase & Blockchain for secure payments.  

---

## 📂 **Project Setup**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/SFCN.git
cd SFCN
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Set Up Firebase**  
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).  
2. Enable **Google Authentication** and **Firestore Database**.  
3. Create a `.env.local` file in the root directory and add:  

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here  # Optional
```

### **4️⃣ Run the Development Server**  
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔧 **Backend Setup** (Express.js + MongoDB)  
### **1️⃣ Install Dependencies**  
```bash
cd backend
npm install
```
### **2️⃣ Set Up MongoDB**  
- Create a MongoDB database using **MongoDB Atlas** or **local MongoDB**.  
- Add your MongoDB URI to `.env` in the backend directory:  
```env
MONGO_URI=mongodb+srv://your_username:your_password@yourcluster.mongodb.net/SFCN
```

### **3️⃣ Run the Backend Server**  
```bash
npm run start
```
The API will be available at **http://localhost:5000**.

---

## 💰 **(Optional) Blockchain Integration**  
If you want to enable blockchain-based funding, install **Hardhat**:  
```bash
npm install --save-dev hardhat
```
Deploy smart contracts:  
```bash
npx hardhat run scripts/deploy.js --network goerli
```

---

## 📜 **API Endpoints**  
| Endpoint  | Method  | Description  |
|-----------|--------|--------------|
| `/api/startups` | GET | Fetch all startups |
| `/api/startups` | POST | Create a new startup |
| `/api/freelancers` | GET | Fetch all freelancers |
| `/api/funding` | POST | Process funding transactions |

---

## 🎯 **Upcoming Features**  
✅ AI-powered startup success prediction  
✅ NFT-based reputation system  
✅ Crowdfunding & DAO governance  

---

## 🤝 **Contributing**  
We welcome contributions! Please open a PR or submit an issue.  

---

## 🛠 **Developers**  
👤 Your Name – [GitHub](https://github.com/aldrinlijo04) | [LinkedIn](https://linkedin.com/in/aldrinlijo04)  

---

## 📜 **License**  
MIT License.  

---

