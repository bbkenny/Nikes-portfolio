import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      
      {/* About Section */}
      <section id="about" style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", lineHeight: "1.2" }}>
              Hi, I'm Babalola Olanike
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
              A PhD Researcher in Sustainable Urbanisation at the University of Lagos, Nigeria, 
              and recipient of the prestigious 2024 Lee Schippers Memorial Scholarship Award (Africa Scholar). 
              I am also a fellow in the 5th cohort of the SLOCAT–VREF Young Leaders in Sustainable Transport Program.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginTop: "20px" }}>
              But above all, I'm a christian, a researcher, and a passionate advocate for sustainable 
              urbanization. My work and research keeps me grounded, fuels my vision, and reminds me 
              daily that legacy isn't just about publications — it's about impact and what we leave behind.
            </p>
          </div>
          
          <div>
            <div style={{ background: "#f8f9fa", padding: "40px", borderRadius: "12px" }}>
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "3rem", color: "#2563eb", margin: 0 }}>7+</h3>
                <p style={{ color: "#666", marginTop: "8px" }}>Years of Research Experience</p>
              </div>
              
              <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "20px" }}>
                <p><strong>PhD Researcher</strong> - University of Lagos</p>
                <p><strong>Transport Analyst</strong> - FAOCON Nigeria Limited</p>
                <p><strong>SLOCAT-VREF Fellow</strong> - Young Leaders in Sustainable Transport</p>
              </div>
              
              <div style={{ marginTop: "30px", borderTop: "1px solid #e5e7eb", paddingTop: "20px" }}>
                <p style={{ fontWeight: "600" }}>Expertise</p>
                <p style={{ color: "#666" }}>Transport Planning • Logistics • Supply Chain • e-Procurement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Projects */}
      <section id="research" style={{ padding: "80px 20px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", textAlign: "center" }}>
            Research & Projects
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                Multimodal Freight Transportation Modelling
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Driving Smart and Resilient Freight in Metropolitan Lagos through comparative 
                policy review and simulation of multimodal freight policies and technologies.
              </p>
            </div>
            
            <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                e-Procurement Adoption Study
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Investigation of e-Procurement Adoption and Users Experience in Lagos State 
                Ministries, Departments and Agencies (MDAs). Master's thesis research.
              </p>
            </div>
            
            <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                SLOCAT-VREF Publication
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Co-author of "Bridging Generations for a Zero-Emission Future" — Young Leaders' 
                Perspectives for Just Transformations to Sustainable Transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: "80px 20px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "60px", textAlign: "center" }}>
            Recommendations
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div style={{ background: "white", padding: "35px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444", marginBottom: "25px", fontStyle: "italic" }}>
                "Olanike's research on multimodal freight transportation demonstrates exceptional analytical 
                depth and practical relevance. Her work on Lagos's transport challenges is setting new 
                standards for sustainable urban logistics in Africa."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#667eea" }}></div>
                <div>
                  <p style={{ fontWeight: "600", margin: 0 }}>Dr. Research Supervisor</p>
                  <p style={{ fontSize: "0.9rem", color: "#666", margin: 0 }}>University of Lagos</p>
                </div>
              </div>
            </div>

            <div style={{ background: "white", padding: "35px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444", marginBottom: "25px", fontStyle: "italic" }}>
                "As a fellow SLOCAT-VREF Young Leader, I've witnessed Olanike's dedication to advancing 
                sustainable transport solutions. Her insights on freight systems are invaluable to our 
                collective mission for zero-emission futures."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#f093fb" }}></div>
                <div>
                  <p style={{ fontWeight: "600", margin: 0 }}>Fellow Young Leader</p>
                  <p style={{ fontSize: "0.9rem", color: "#666", margin: 0 }}>SLOCAT-VREF Program</p>
                </div>
              </div>
            </div>

            <div style={{ background: "white", padding: "35px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#444", marginBottom: "25px", fontStyle: "italic" }}>
                "Olanike brings a unique combination of technical expertise in transport modeling and 
                practical understanding of public sector procurement. Her work on e-procurement systems 
                has been transformative for Lagos State operations."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#4facfe" }}></div>
                <div>
                  <p style={{ fontWeight: "600", margin: 0 }}>Senior Analyst</p>
                  <p style={{ fontSize: "0.9rem", color: "#666", margin: 0 }}>FAOCON Nigeria Limited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section id="achievements" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "60px", textAlign: "center" }}>
            Key Milestones
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#2563eb" }}>2024</div>
              <p style={{ marginTop: "10px", fontSize: "1.1rem", fontWeight: "600" }}>
                Lee Schippers Memorial Scholarship Award
              </p>
              <p style={{ color: "#666", fontSize: "0.95rem", marginTop: "5px" }}>
                Recognized as Africa Scholar for outstanding research in sustainable transport
              </p>
            </div>
            
            <div style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#2563eb" }}>2025</div>
              <p style={{ marginTop: "10px", fontSize: "1.1rem", fontWeight: "600" }}>
                SLOCAT–VREF Young Leader Fellow
              </p>
              <p style={{ color: "#666", fontSize: "0.95rem", marginTop: "5px" }}>
                Selected for 5th cohort advancing zero-emission transport futures
              </p>
            </div>
            
            <div style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#2563eb" }}>2022</div>
              <p style={{ marginTop: "10px", fontSize: "1.1rem", fontWeight: "600" }}>
                First Class (Distinction)
              </p>
              <p style={{ color: "#666", fontSize: "0.95rem", marginTop: "5px" }}>
                MSc in Transport and Logistics, Lagos State University
              </p>
            </div>

            <div style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#2563eb" }}>2022</div>
              <p style={{ marginTop: "10px", fontSize: "1.1rem", fontWeight: "600" }}>
                CARISSA Conference Presenter
              </p>
              <p style={{ color: "#666", fontSize: "0.95rem", marginTop: "5px" }}>
                Supply Chain Conference, KNUST Kumasi, Ghana
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Media */}
      <section id="publications" style={{ padding: "80px 20px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "50px", textAlign: "center" }}>
            Publications & Media
          </h2>

          <div style={{ marginBottom: "60px" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "30px", color: "#333" }}>Research Publications</h3>
            <div style={{ display: "grid", gap: "25px" }}>
              <a href="https://slocat.net/young-leaders-2025/" target="_blank" rel="noopener noreferrer" 
                 style={{ 
                   display: "flex", 
                   gap: "20px", 
                   background: "white", 
                   padding: "25px", 
                   borderRadius: "12px", 
                   textDecoration: "none", 
                   color: "inherit",
                   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                   transition: "transform 0.2s ease"
                 }}
                 onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
                 onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ width: "120px", height: "80px", background: "#667eea", borderRadius: "8px", flexShrink: 0 }}></div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#2563eb" }}>
                    Bridging Generations for a Zero-Emission Future
                  </h4>
                  <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "8px" }}>
                    Young Leaders' Perspectives for Just Transformations to Sustainable Transport. 
                    Co-authored with SLOCAT-VREF Fellows highlighting decentralized solar power, 
                    road-rail intermodal systems, and transit-oriented development.
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#999" }}>SLOCAT Partnership • 2025</p>
                </div>
              </a>

              <div style={{ 
                display: "flex", 
                gap: "20px", 
                background: "white", 
                padding: "25px", 
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}>
                <div style={{ width: "120px", height: "80px", background: "#f093fb", borderRadius: "8px", flexShrink: 0 }}></div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#2563eb" }}>
                    e-Procurement Adoption in Lagos State MDAs
                  </h4>
                  <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "8px" }}>
                    Master's thesis investigating e-Procurement adoption and user experience across 
                    Lagos State Ministries, Departments and Agencies with practical recommendations 
                    for digital transformation.
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#999" }}>Lagos State University • 2022</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "30px", color: "#333" }}>Featured In</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
              <a href="https://slocat.net" target="_blank" rel="noopener noreferrer"
                 style={{ 
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   background: "white", 
                   padding: "30px 20px", 
                   borderRadius: "12px",
                   textDecoration: "none",
                   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                   transition: "transform 0.2s ease"
                 }}
                 onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                 onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🚊</div>
                  <p style={{ fontWeight: "600", color: "#333", margin: 0 }}>SLOCAT Partnership</p>
                </div>
              </a>

              <a href="https://vref.se" target="_blank" rel="noopener noreferrer"
                 style={{ 
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   background: "white", 
                   padding: "30px 20px", 
                   borderRadius: "12px",
                   textDecoration: "none",
                   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                   transition: "transform 0.2s ease"
                 }}
                 onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                 onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🏆</div>
                  <p style={{ fontWeight: "600", color: "#333", margin: 0 }}>VREF Foundation</p>
                </div>
              </a>

              <a href="https://unilag.edu.ng" target="_blank" rel="noopener noreferrer"
                 style={{ 
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   background: "white", 
                   padding: "30px 20px", 
                   borderRadius: "12px",
                   textDecoration: "none",
                   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                   transition: "transform 0.2s ease"
                 }}
                 onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                 onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🎓</div>
                  <p style={{ fontWeight: "600", color: "#333", margin: 0 }}>University of Lagos</p>
                </div>
              </a>

              <a href="https://lasuportal.org" target="_blank" rel="noopener noreferrer"
                 style={{ 
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   background: "white", 
                   padding: "30px 20px", 
                   borderRadius: "12px",
                   textDecoration: "none",
                   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                   transition: "transform 0.2s ease"
                 }}
                 onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                 onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>📚</div>
                  <p style={{ fontWeight: "600", color: "#333", margin: 0 }}>Lagos State University</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Want to Connect?</h2>
          <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "40px" }}>
            Whether you're a researcher looking to collaborate, an organization seeking transport 
            planning expertise, or interested in sustainable urbanization — I'd love to hear from you.
          </p>
          <a href="mailto:olanikebabalola@gmail.com" 
             style={{ 
               display: "inline-block",
               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
               color: "white",
               padding: "18px 50px",
               borderRadius: "50px",
               textDecoration: "none",
               fontSize: "1.2rem",
               fontWeight: "600",
               boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
               transition: "all 0.3s ease"
             }}
             onMouseOver={(e) => {
               e.currentTarget.style.transform = "translateY(-4px)";
               e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.5)";
             }}
             onMouseOut={(e) => {
               e.currentTarget.style.transform = "translateY(0)";
               e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
             }}
          >
            olanikebabalola@gmail.com
          </a>

          <div style={{ marginTop: "40px", display: "flex", gap: "20px", justifyContent: "center" }}>
            <a href="https://www.linkedin.com/in/olanikebabalola" target="_blank" rel="noopener noreferrer"
               style={{ fontSize: "2rem", color: "#0077b5", transition: "transform 0.2s ease" }}
               onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.2)"}
               onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              💼
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               style={{ fontSize: "2rem", color: "#1DA1F2", transition: "transform 0.2s ease" }}
               onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.2)"}
               onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              🐦
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
