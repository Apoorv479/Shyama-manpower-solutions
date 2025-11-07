import Footer from "../components/Footer";

const Career = () => {
  return (
    <>
      <main className="pt-36 md:pt-40 px-6 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0b3d64] mb-6">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            We are always looking for dedicated and professional individuals to join our security and manpower solutions team. 
            Whether you're an experienced security guard, a trained professional, or someone looking to start a career in security services, 
            we offer competitive packages, comprehensive training, and opportunities for growth.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-10">
            Explore exciting career opportunities with us and be part of a team that values integrity, professionalism, and excellence.
          </p>
          <a
            href="mailto:careers@company.com?subject=Job Application"
            className="inline-block rounded-lg bg-[#1a9bb9] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#15849b] transition-all hover:shadow-xl"
          >
            Apply Now
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Career;

