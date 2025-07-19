
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Golden Valley Sr. Sec. Public School",
      degree: "10th",
      field: "",
      duration: "2020 – 2021",
      location: "Delhi , India",
      cgpa: "97.4%",
      details: []
    },
    {
      id: 2,
      institution: "Golden Valley Sr. Sec. Public School",
      degree: "12th",
      field: "",
      duration: "2022 – 2023",
      location: "Delhi , India",
      cgpa: "93.8%",
      details: []
    },
    {
      id: 3,
      institution: "Indira Gandhi Delhi Technical University for Women (IGDTUW) , Delhi",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      duration: "2024-2028",
      location: "Delhi , India",
      cgpa: "8.95",
      details: []
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Career essential in Generative AI by Microsoft and LinkedIn",
      
      description: "Completed a comprehensive course to learn Generative AI, computer ethics, and Artificial Intelligence."
    },
    {
      id: 2,
      name: "Certificate of Participation: UI/UX Hackathon",
      issuer: "",
      date: "",
      description: "Collaborating with a team to design innovative user-centric solutions and enhance prototyping and design skills."
    }
  ];

  const courseHighlights = [];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                My academic journey, courses, and educational achievements that have shaped my technical expertise.
              </p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  duration={edu.duration}
                  location={edu.location}
                  cgpa={edu.cgpa}
                  details={edu.details}
                  index={index}
                />
              ))}
            </div>
          </div>

          

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard 
                  
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  description={cert.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
