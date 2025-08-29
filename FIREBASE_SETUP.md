# Firebase Setup Guide

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or select an existing project
3. Follow the setup wizard

## 2. Enable Realtime Database

1. In your Firebase project, go to "Realtime Database" in the left sidebar
2. Click "Create Database"
3. Choose a location (select the closest to your users)
4. Start in test mode (you can adjust security rules later)

## 3. Get Configuration

1. Click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web app icon (</>)
5. Register your app with a nickname
6. Copy the configuration object

## 4. Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyDTzkFYQAc_yIo95XTfabOMsH6ua9BtJZM"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="edubh-89a46.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project_id-default-rtdb.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID="edubh-89a46"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="edubh-89a46.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="779448127172"
NEXT_PUBLIC_FIREBASE_APP_ID="1:779448127172:web:535988901e505e79624391"
N EXT_PUBLIC_FIREBASE_MEASUREMENT_ID=measurementId: "G-4DVD9HLWG7"
```

## 5. Database Rules

Update your Realtime Database rules to allow read/write access:

```json
{
  "rules": {
    "applications": {
      ".read": true,
      ".write": true
    }
  }
}
```

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. Go to `/apply` page
3. Fill out and submit the form
4. Check your Firebase Realtime Database to see the data
5. Use the API endpoint `/api/applications` to fetch data

## 7. Security Considerations

- The current setup allows public read/write access
- For production, implement proper authentication
- Consider using Firebase Auth for user management
- Implement proper validation and rate limiting
