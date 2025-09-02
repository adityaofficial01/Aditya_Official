import { Row, Col, Button } from 'antd';
import { MailOutlined, PhoneOutlined, LinkedinOutlined } from '@ant-design/icons';
import { StaticImages } from 'utils/StaticImages';

const ContactSection = () => {
  return (
    <div className="relative">
      {/* Text container that will be pinned during scroll */}
      <div className="overflow-hidden flex flex-col justify-center items-center h-[100vh] relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={StaticImages.VIDEO.stars} // Replace with your video path
          autoPlay
          loop
          muted
          playsInline
          style={{ zIndex: 0 }}
        />
        
        {/* Dark overlay for better text readability */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black/60"
          style={{ zIndex: 0 }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <p className="text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-white text-center mb-8 font-bold">
            INTERESTED IN WORKING TOGETHER?
          </p>
          
          <p className="text-xl text-[#979ea9] mb-12 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. I&apos;m always excited to discuss new projects and opportunities.
          </p>
          
          {/* Contact Options */}
          <Row gutter={[32, 32]} justify="center" className="mb-12">
            <Col xs={24} sm={12} md={6}>
              <div className="bg-[#2a2a2a]/80 backdrop-blur-sm rounded-xl p-6 border border-[#9ecaf7]/30 hover:border-[#9ecaf7] hover:bg-[#2a2a2a]/90 transition-all duration-300 transform hover:scale-105">
                <MailOutlined className="text-[#9ecaf7] text-3xl mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">Email</h3>
                <p className="text-[#979ea9] text-sm">rajputaadihr@gmail.com</p>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={6}>
              <div className="bg-[#2a2a2a]/80 backdrop-blur-sm rounded-xl p-6 border border-[#9ecaf7]/30 hover:border-[#9ecaf7] hover:bg-[#2a2a2a]/90 transition-all duration-300 transform hover:scale-105">
                <PhoneOutlined className="text-[#9ecaf7] text-3xl mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">Phone</h3>
                <p className="text-[#979ea9] text-sm">+91 8003640485</p>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={6}>
              <div className="bg-[#2a2a2a]/80 backdrop-blur-sm rounded-xl p-6 border border-[#9ecaf7]/30 hover:border-[#9ecaf7] hover:bg-[#2a2a2a]/90 transition-all duration-300 transform hover:scale-105">
                <LinkedinOutlined className="text-[#9ecaf7] text-3xl mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/aditya-rajput-aadi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#979ea9] text-sm hover:text-[#9ecaf7] transition-colors underline"
                >
                  Aditya Rajput
                </a>
              </div>
            </Col>
            
            {/* <Col xs={24} sm={12} md={6}>
              <div className="bg-[#2a2a2a]/80 backdrop-blur-sm rounded-xl p-6 border border-[#9ecaf7]/30 hover:border-[#9ecaf7] hover:bg-[#2a2a2a]/90 transition-all duration-300 transform hover:scale-105">
                <GithubOutlined className="text-[#9ecaf7] text-3xl mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-gray-400 text-sm">@yourgithub</p>
              </div>
            </Col> */}
          </Row>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="large"
              onClick={() => window.open('mailto:rajputaadihr@gmail.com')}
              className="bg-[#9ecaf7] hover:bg-[#7db8e8] border-[#9ecaf7] hover:border-[#7db8e8] text-black font-semibold px-8 py-6 h-auto rounded-lg"
            >
              Drop Me An Email!
            </Button>
            
            <Button 
              size="large"
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1rHWkiaI1tvEwvEO60985WygsGQwo4_ql', '_blank')}
              className="bg-transparent hover:bg-[#9ecaf7]/10 border-[#9ecaf7] hover:border-[#9ecaf7] text-[#9ecaf7] hover:text-[#9ecaf7] font-semibold px-8 py-6 h-auto rounded-lg"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;