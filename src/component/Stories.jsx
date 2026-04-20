import React from "react";

const Stories = () => {
  // Styles for perfect alignment
  const styles = {
    container: {
      maxWidth: "1100px",
      margin: "80px auto",
      padding: "0 20px",
      fontFamily: "sans-serif",
      color: "#1a2b4b",
    },
    subtitle: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "10px",
    },
    title: {
      fontSize: "42px",
      fontWeight: "bold",
      marginBottom: "60px",
      position: "relative",
      display: "inline-block",
    },
    underlineSvg: {
      position: "absolute",
      bottom: "-25px",
      left: "0",
      width: "100%",
      height: "30px",
    },
    card: {
      display: "flex",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "#fff",
      minHeight: "400px",
    },
    imageSection: {
      flex: "0 0 40%",
      position: "relative",
      backgroundColor: "#f3f4f6",
    },
    contentSection: {
      flex: "1",
      padding: "60px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    quoteBg: {
      position: "absolute",
      top: "20px",
      right: "20px",
      fontSize: "250px",
      lineHeight: "1",
      color: "#fee2e2",
      fontFamily: "serif",
      opacity: "0.8",
      pointerEvents: "none",
      userSelect: "none",
    },
    playBtn: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "50px",
      height: "50px",
      border: "2px solid white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(4px)",
    },
    quoteText: {
      fontSize: "22px",
      lineHeight: "1.6",
      marginBottom: "30px",
      position: "relative",
      zIndex: "1",
    },
    authorName: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#d14b3b",
      marginBottom: "5px",
    },
    authorRole: {
      fontSize: "14px",
      color: "#666",
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "40px",
      gap: "20px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <p style={styles.subtitle}>What Our Families Say</p>
      <div style={styles.title}>
        Stories of Trust and Transformation
        <svg style={styles.underlineSvg} viewBox="0 0 400 20">
          <path
            d="M5 12C100 6 300 6 395 14"
            stroke="#d14b3b"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M40 18C150 12 300 12 380 16"
            stroke="#d14b3b"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Main Card */}
      <div style={styles.card}>
        {/* Left Image Side */}
        <div style={styles.imageSection}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7od28WrBb3TQI-TntqwYB_97l9KDVz2PKA&s" // Isme ek generic uncle/video thumbnail ki link daali hai
            alt="Testimonial"
            style={{
              width: "100%",
              height: "100%",
              objectPosition: "top",
              objectFit: "cover",
            }}
          />
          <div style={styles.playBtn}>
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: "12px solid white",
                marginLeft: "4px",
              }}
            ></div>
          </div>
        </div>

        {/* Right Quote Side */}
        <div style={styles.contentSection}>
          <div style={styles.quoteBg}>“</div>
          <div style={styles.quoteText}>
            "SAI International School is{" "}
            <b>one of the best schools in the country.</b>"
          </div>
          <div>
            <div style={styles.authorName}>Mr. Sarkar</div>
            <div style={styles.authorRole}>Father of Vivaan Moa</div>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div style={styles.pagination}>
        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            background: "#f1f5f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              border: "solid #64748b",
              borderWidth: "0 2px 2px 0",
              display: "inline-block",
              padding: "3px",
              transform: "rotate(135deg)",
            }}
          ></span>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#d14b3b",
            }}
          ></div>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#e2e8f0",
              }}
            ></div>
          ))}
        </div>

        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            background: "#f1f5f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              border: "solid #64748b",
              borderWidth: "0 2px 2px 0",
              display: "inline-block",
              padding: "3px",
              transform: "rotate(-45deg)",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
