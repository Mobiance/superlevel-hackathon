# **Blog Dashboard: Text and Video Input with Multilingual Publishing**

## **Overview**  
The **Blog Dashboard** is a comprehensive platform designed to streamline content creation by enabling users to input **text** and **video**, transcribe content, translate it into **10 regional Indian languages**, and publish SEO-optimized blogs. It leverages **AI-powered transcription and translation models** to make content creation accessible and multilingual.

---

## **Features**  

### **1. Input Options**  
- **Text Input**: Input text directly or upload files (e.g., `.txt`, `.docx`).  
- **Video Input**: Upload video files (e.g., `.mp4`, `.mov`) for automated transcription.  

### **2. Transcription**  
- Converts video content to English text using AI-powered Speech-to-Text models.  
- Allows users to review and edit transcriptions before translation.  

### **3. Translation**  
- Translates English content into 10 regional languages:  
  - Hindi, Marathi, Gujarati, Tamil, Kannada, Telugu, Bengali, Malayalam, Punjabi, and Odia.  
- Ensures accuracy using advanced NLP model

### **4. Blog Publishing**  
- Outputs translations in a blog format with SEO-optimized language-specific URLs.  
- Provides options to review, edit, and publish blog drafts.  
 



## **Tech Stack**  
- **Frontend**:  Next.js for a responsive user interface.  
- **Backend**: Nest.js for server-side logic.  
- **Database**: AstraDB for storing blog data.  
- **AI Services**:  
  - Transcription: Assembly AI
  - Translation: DeepL Translate
- **SEO**: Dynamic routing and Server-Side Rendering (SSR) for optimized content visibility.  

---

## **How It Works**  
1. **Input Content**:  
   - Users can upload text files or video files.  

2. **Transcription and Translation**:  
   - Videos are transcribed into English text.  
   - Text is translated into 10 regional Indian languages.  

3. **Review and Publish**:  
   - Users can review, edit, and finalize translations.  
   - Publish SEO-optimized blogs with unique URLs for each language.  

---

## **Setup Instructions**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Mobiance/superlevel-hackathon.git
   cd blog-dashboard
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Set up API keys:  
   - Configure transcription and translation service keys in the `.env` file.  

4. Run the application:  
   ```bash
   npm start
   ```

5. Access the dashboard at `http://localhost:3000`.  

---

## **Demo**  
Check out the demo video on [YouTube](https://youtu.be/nEBZlg-T00k).  

---

## **Submission Details**  
This project has been submitted as part of the **Hackathon** on [FindCoder](https://www.findcoder.io/).  

---

## **Contributors**  
- **Sahil Kshirsagar** – Full Stack Developer  
- **Shubham Sharma** – Backend Developer  
- **Varad Puranik** – Frontend Developer  
- **Prithviraj Daud** – UI/UX Designer  

---

Feel free to reach out for any queries or collaboration opportunities!  

