# Blog Application - Full Stack Development Project  


A **full-featured blog application** built with **HTML, CSS, JavaScript, Node.js, Express, MongoDB, and EJS**. This project includes user authentication, blog creation, reading lists, reactions, and more.  

## 🔥 Features  
✅ **User Authentication** – Register, login, and session management.  
📝 **Blog Management** – Create, read, update, and delete blog posts.  
🖼️ **Image Upload** – Cloudinary integration for blog cover images.  
💬 **Markdown Support** – Write blog content in markdown with syntax highlighting.  
📖 **Reading List** – Save favorite blogs for later reading.  
❤️ **Reactions** – Like blogs and track engagement.  
📊 **Visit Counter** – Track blog post views.  
📱 **Fully Responsive** – Works on desktop, tablet, and mobile.  

## 🛠️ Technologies Used  
- **Frontend**: HTML, CSS, JavaScript, EJS (Templating Engine)  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (with Mongoose)  
- **Cloud Storage**: Cloudinary (for image uploads)  
- **Markdown Rendering**: Marked.js + Highlight.js  

## 🚀 Installation & Setup  

### Prerequisites  
- Node.js (v16+)  
- MongoDB (local or cloud-based)  
- Cloudinary account (for image uploads)  

### Steps  
1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/blog-app.git
   cd blog-app
   ```  

2. **Install dependencies**  
   ```bash
   npm install
   ```  

3. **Set up environment variables**  
   Create a `.env` file in the root directory with:  
   ```env
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   SESSION_SECRET=your_session_secret_key
   ```  

4. **Run the application**  
   ```bash
   npm start
   ```  
   Open `http://localhost:3000` in your browser.  

## 📂 Project Structure  
```
blog-app/  
├── models/          # MongoDB Schemas (User, Blog)  
├── controllers/     # Route handlers  
├── routes/          # Express routes  
├── middleware/      # Authentication & error handling  
├── public/          # Static files (CSS, JS, images)  
├── views/           # EJS templates  
├── .env             # Environment variables  
├── app.js           # Main Express app  
└── package.json     # Dependencies & scripts  
```  


## 🤝 How to Contribute  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-branch`).  
3. Commit your changes (`git commit -m "Add new feature"`).  
4. Push to the branch (`git push origin feature-branch`).  
5. Open a Pull Request.  

## 📜 License  
This project is open-source under the **MIT License**.  
