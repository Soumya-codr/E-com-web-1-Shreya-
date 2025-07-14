# Firebase Setup Instructions

To complete the Firebase integration, you need to:

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "your-ecommerce-site")
4. Follow the setup wizard

## 2. Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Save the changes

## 3. Create Firestore Database

1. Go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (you can secure it later)
4. Select a location for your database
5. Click "Done"

## 4. Get Your Firebase Configuration

1. Go to Project Settings (gear icon in the left sidebar)
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Register your app with a nickname
5. Copy the Firebase configuration object

## 5. Update the Configuration

Replace the placeholder values in `js/firebase-config.js` with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. Click the "LOG IN" or "SIGN UP" buttons
3. Try creating a new account
4. Check your Firebase Console to see the new user and data

## Features Included

- ✅ User registration and login
- ✅ Firebase Authentication integration
- ✅ Firestore database setup
- ✅ Responsive login/signup forms
- ✅ Error handling and loading states
- ✅ Automatic redirect after login
- ✅ Dynamic header buttons (login/logout)

## Next Steps

After setting up Firebase, you can:
- Add product data to Firestore
- Implement shopping cart functionality
- Create user profiles
- Add order management
- Implement product reviews and ratings