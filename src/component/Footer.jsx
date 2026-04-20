import React from "react";
import girl from "../assets/girl.png"; // path adjust karo

const Footer = () => {
  const styles = {
    footerWrapper: {
      padding: "40px 20px",
      backgroundColor: "#ffffff",
      fontFamily: "sans-serif",
      display: "flex",
      justifyContent: "center",
    },
    container: {
      backgroundColor: "#f2f7f9",
      borderRadius: "40px",
      width: "100%",
      maxWidth: "1200px",
      minHeight: "400px",
      position: "relative",
      overflow: "hidden", // Taki grid lines bahar na jayein
      padding: "60px 40px",
      display: "flex",
      flexWrap: "wrap",
      border: "1px solid #eef2f5",
    },
    // Background Grid Dots
    gridOverlay: {
      position: "absolute",
      inset: 0,
      opacity: 0.1,
      backgroundImage: "radial-gradient(#402e4b 1px, transparent 1px)",
      backgroundSize: "30px 30px",
      pointerEvents: "none",
    },
    // Left Section
    leftPart: {
      flex: "1",
      minWidth: "300px",
      zIndex: 10,
    },
    logo: {
      width: "200px",
      marginBottom: "35px",
    },
    contactCard: {
      backgroundColor: "#402e4b",
      borderRadius: "0 25px 25px 25px",
      padding: "35px 25px",
      color: "white",
      position: "relative",
      boxShadow: "0 15px 30px rgba(64, 46, 75, 0.2)",
      maxWidth: "350px",
    },
    reachUsTab: {
      position: "absolute",
      top: "-32px",
      left: "0",
      backgroundColor: "#d1624d",
      color: "white",
      padding: "8px 30px",
      borderRadius: "15px 15px 0 0",
      fontSize: "14px",
      fontWeight: "bold",
    },
    // Center Section
    centerPart: {
      flex: "1.2",
      minWidth: "350px",
      paddingTop: "20px",
      zIndex: 10,
      paddingRight: "236px",
    },
    mainHeading: {
      fontSize: "44px",
      color: "#402e4b",
      lineHeight: "1.1",
      fontWeight: "700",
      marginBottom: "50px",
    },
    accentText: { color: "#d1624d" },
    linksContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },
    navLink: {
      textDecoration: "none",
      color: "#402e4b",
      fontSize: "15px",
      fontWeight: "500",
      opacity: 0.9,
      display: "block",
      marginBottom: "8px",
    },
    // Right Section - THE STUDENT IMAGE
    imageContainer: {
      position: "absolute",
      right: "0",
      bottom: "0",
      height: "95%", // Container ke hisab se height
      zIndex: 5,
    },
    studentImg: {
      height: "100%",
      objectFit: "contain",
      display: "block",
    },
  };

  return (
    <footer style={styles.footerWrapper}>
      <div style={styles.container}>
        <div style={styles.gridOverlay}></div>

        {/* LEFT: Logo & Card */}
        <div style={styles.leftPart}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/046/006/102/small/education-logo-design-template-for-school-and-organization-vector.jpg"
            alt="SAI Logo"
            style={styles.logo}
          />

          <div style={styles.contactCard}>
            <div style={styles.reachUsTab}>Reach Us</div>
            <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
              <span style={{ color: "#d1624d" }}>📞</span> 9338169966
            </div>
            <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
              <span style={{ color: "#d1624d" }}>✉️</span>{" "}
              admissions@saiinternational.edu.in
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              <span style={{ color: "#d1624d" }}>📍</span>
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>
                SAI International School, Infocity Ave, <br />
                Chandrasekharpur, Bhubaneswar, Odisha <br />
                751024
              </span>
            </div>
          </div>
        </div>

        {/* CENTER: Heading & Links */}
        <div style={styles.centerPart}>
          <h2 style={styles.mainHeading}>
            Among India's <br />
            <span style={styles.accentText}>Most Celebrated</span> Schools{" "}
            <span style={{ fontSize: "30px" }}>✨</span>
          </h2>

          <div style={styles.linksContainer}>
            <div>
              <a href="#" style={styles.navLink}>
                Reach Us
              </a>
              <a href="#" style={styles.navLink}>
                SET 2028
              </a>
              <a href="#" style={styles.navLink}>
                SAI Online
              </a>
              <a href="#" style={styles.navLink}>
                SAMS
              </a>
              <a href="#" style={styles.navLink}>
                Other Campus
              </a>
            </div>
            <div>
              <a href="#" style={styles.navLink}>
                About Us
              </a>
              <a href="#" style={styles.navLink}>
                News
              </a>
              <a href="#" style={styles.navLink}>
                SAI Home School
              </a>
              <a href="#" style={styles.navLink}>
                IM Case Study
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Student Image */}
        <div style={styles.imageContainer}>
          <img src={girl} alt="girl" style={styles.girl} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
