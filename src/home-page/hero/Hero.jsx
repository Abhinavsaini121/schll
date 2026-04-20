import React from 'react';
import { motion } from 'framer-motion';
import { User, Phone, GraduationCap, Lightbulb, BookOpen, ChevronRight } from 'lucide-react';
import './Hero.css';

// Assets (Apne path ke hisab se change kar lena)
import bgImage from "../../assets/hero-bg.png"; 
import kidsImage from "../../assets/kids-painting.png";

const Hero = () => {
  // Line drawing animation logic
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        pathLength: { delay: 0.5, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay: 0.5, duration: 0.01 }
      }
    }
  };

  return (
    <section className="hero-section">
      {/* Background Watermark Layer */}
      <div className="hero-bg-overlay">
        <img src={bgImage} alt="background" />
      </div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Shaping Learners <br />
              who <span className="highlight-text">
                Inspire the world!
                <svg className="draw-line-svg" viewBox="0 0 320 20">
                  <motion.path
                    d="M10 15 Q 160 5 310 15"
                    stroke="#ce5a4e"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="transparent"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </svg>
              </span>
            </h1>
          </motion.div>

          <motion.div 
            className="form-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="form-header">
              <h3>Get the SAI Experience</h3>
              <p>Fill the form to download our latest brochure</p>
            </div>
            
            <div className="form-body">
              <div className="input-group">
                <User className="input-vector" size={18} />
                <input type="text" placeholder="Student's Name" />
              </div>

              <div className="input-row">
                <div className="input-group">
                  <GraduationCap className="input-vector" size={18} />
                  <select>
                    <option>Select Grade</option>
                    <option>Pre-Nursery</option>
                    <option>Class 1</option>
                  </select>
                </div>
                <div className="input-group">
                  <Phone className="input-vector" size={18} />
                  <input type="tel" placeholder="Phone Number" />
                </div>
              </div>

              <button className="submit-btn">
                Download Brochure <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT (Images & Floating Vectors) */}
        <div className="hero-right">
          <motion.div 
            className="image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={kidsImage} alt="Students" className="hero-main-img" />
            
            {/* Vector Elements (Replacement for Emojis) */}
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="vector-badge v-1">
              <Lightbulb color="#ce5a4e" size={28} strokeWidth={2.5} />
            </motion.div>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="vector-badge v-2">
              <BookOpen color="#2563eb" size={28} strokeWidth={2.5} />
            </motion.div>
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 5 }} className="vector-badge v-3">
              <GraduationCap color="#059669" size={28} strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;