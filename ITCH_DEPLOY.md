# 🎮 Deploy to Itch.io - Simple Instructions

## Step 1: Build for Itch.io
Open PowerShell in this folder and run:
```bash
npm run build:itch
```

This will:
- Build your game for production
- Point API calls to your Vercel backend
- Create `sql-quest-itch.zip` automatically

## Step 2: Upload to Itch.io

1. **Go to**: https://itch.io/game/new

2. **Fill in Game Details:**
   - Title: `SQL Quest - Rescue Santa`
   - URL: Choose your game URL (e.g., `yourusername.itch.io/sql-quest`)
   - Short description: Add your game description
   - Classification: `Games`
   - Kind of project: `HTML` ⚠️ IMPORTANT!

3. **Upload the File:**
   - Click "Upload files"
   - Select `sql-quest-itch.zip` (in your project root)
   - ✅ Check **"This file will be played in the browser"**
   - Set viewport dimensions: `1920 x 1080` (recommended)

4. **Configure Settings:**
   - Pricing: Free or Paid (your choice)
   - Visibility: Draft first, then Public when ready
   - Add screenshots from your game
   - Add a cover image

5. **Save & Publish:**
   - Click "Save & View page"
   - Test your game in browser
   - When ready, change visibility to Public!

## ✅ Features That Work:

- ✅ All 10 game levels
- ✅ Santa AI Chatbot (calls your Vercel API)
- ✅ User authentication (Supabase)
- ✅ Game progress saving
- ✅ Background music
- ✅ All UI elements

## 🚀 Your Game URLs:

- **Vercel (Full Version)**: https://help-santa-beta.vercel.app/
- **Itch.io (After Upload)**: yourusername.itch.io/sql-quest

---

Need help? Let me know! 🎅✨
