import React from "react";
import { Timeline } from "../components/timeline";

export default function Experiences() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="flex flex-col gap-4">
          <p
            className="text-2xl md:text-4xl font-normal text-primary">
             Intership at LAAS-CNRS (France)
          </p>
          <span className="text-white mb-8">Implementation of edge and cloud service bundle</span>
          <div className="text-white/50">
            The objective of this internship was to test a seamless integration between cloud and edge computing by offering a bundle service accessible via an API. The use case involved autonomous vehicles that, through the API, accessed the bundle service to leverage available resources in both cloud and edge computing. A new concept, called capacities, was introduced during this internship. This work allowed me to gain an in-depth understanding of cloud and edge computing, as well as the world of autonomous vehicles.
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-col gap-4 ">
          <p
            className="text-2xl md:text-4xl font-normal text-primary">
             Professor (France)
          </p>
          <span className="text-white mb-8">Mathematics Teacher Terminal Level</span>
          <div className="text-white/50">
          Taught advanced mathematics to terminal students, preparing them for final exams such as the Baccalauréat. Developed and delivered comprehensive explanation plans covering calculus, algebra, and geometry, while providing personalized tutoring to help students grasp complex concepts. Assessed student progress through regular evaluations and provided targeted feedback to enhance their understanding. Promoted critical thinking and problem-solving skills, leading to improved student performance, with a strong focus on exam readiness.
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-col gap-4">
          <p
            className="text-2xl md:text-4xl font-normal text-primary">
             Web site building
          </p>
          <span className="text-white mb-8">Building Lithyus Music Web Site</span>
          <div className="text-white/50">
          As the lead developer of Lithyus Music, I designed and launched a comprehensive music distribution platform focused on promoting independent African artists. I built and maintained the backend architecture, integrating streaming services like YouTube, Apple Music, Deezer etc to ensure smooth content distribution. Additionally, I developed key features such as free distribution services and artist profiles, creating a user-friendly interface that supports both artists and production houses while enhancing global visibility and engagement.
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="flex flex-col gap-4">
          <p
            className="text-2xl md:text-4xl font-normal text-primary">
             Internship at 1337 (Maroc)
          </p>
          <span className="text-white mb-8">Building a Security Operation Center (SOC)</span>
          <div className="text-white/50">
          During this internship, I contributed to the development of a Security Operations Center (SOC) by integrating Wazuh, ELK Stack, and Syslog for real-time monitoring and threat detection. I set up Wazuh for endpoint security and log collection, configured the ELK Stack (Elasticsearch, Logstash, Kibana) for log aggregation, visualization, and analysis, and integrated Syslog to centralize logs from various sources. This experience deepened my knowledge of cybersecurity practices, log management, and SIEM (Security Information and Event Management) solutions.
          </div>
        </div>
      ),
    },

  ];
  return (
    (<div className='w-full bg-secondary-20 flex justify-center items-center' id="experience">
      <Timeline data={data} />
    </div>)
  );
}
