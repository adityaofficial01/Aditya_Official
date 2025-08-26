import { Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const FAQSection = () => {
    const faqData = [
        {
            key: '1',
            label: 'How long does a typical project take?',
            children: (
                <p className="text-gray-400 text-sm leading-relaxed">
                    Our web development service includes custom design, responsive development, SEO optimization, performance
                    optimization, security implementation, content management system setup, analytics integration, and 30 days of post-launch
                    support. We also provide training and documentation.
                </p>
            ) // Collapsed by default, no content shown
        },
        {
            key: '2',
            label: "What's included in your web development service?",
            children: (
                <p className="text-gray-400 text-sm leading-relaxed">
                    Our web development service includes custom design, responsive development, SEO optimization, performance
                    optimization, security implementation, content management system setup, analytics integration, and 30 days of post-launch
                    support. We also provide training and documentation.
                </p>
            )
        },
        {
            key: '3',
            label: "What technologies do you use as a React front-end developer?",
            children: (
                <p className="text-gray-400 text-sm leading-relaxed">
                    I use React.js with modern tools like JavaScript/TypeScript, Tailwind CSS, Ant Design, Redux Toolkit, and APIs to build responsive, scalable front-end applications.
                </p>
            )
        },
        {
            key: '4',
            label: "How do you ensure project success?",
            children: (
                <p className="text-gray-400 text-sm leading-relaxed">
                    I follow a proven process: thorough discovery and research, strategic planning, iterative design with client feedback, rigorous testing, and comprehensive post-launch support. Regular communication and transparency ensure you&apos;re involved every step of the way.
                </p>
            )
        },
        {
            key: '5',
            label: 'Do you work with clients internationally?',
            children: (
                <p className="text-gray-400 text-sm leading-relaxed">
                    Our web development service includes custom design, responsive development, SEO optimization, performance
                    optimization, security implementation, content management system setup, analytics integration, and 30 days of post-launch
                    support. We also provide training and documentation.
                </p>
            ) // Collapsed by default, no content shown
        }
    ];

    return (
        <div className="w-full mt-16 max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-white text-[3rem] font-bold mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-[#7f848e] text-base max-w-2xl mx-auto">
                    Get answers to common questions about our design and development process.
                </p>
            </div>

            {/* FAQ Collapse */}
            <Collapse
                defaultActiveKey={['2']} // Second item is expanded by default
                expandIcon={({ isActive }) => (
                    <PlusOutlined
                        className={`text-[#9ecaf7] transition-transform duration-200 ${isActive ? 'rotate-45' : ''
                            }`}
                        style={{ fontSize: '16px' }}
                    />
                )}
                expandIconPosition="end"
                ghost
                items={faqData}
                className="faq-collapse"
                style={{
                    background: 'transparent',
                }}
            />
        </div>
    );
};

export default FAQSection;