import React from 'react'
import CustomImage from 'components/CustomImage';
import { StaticImages } from 'utils/StaticImages';
import CommonContainer from 'components/CommonContainer';
import CustomButton from 'components/CustomButton';
import useScrollToSection from 'Hook/useScrollToSection';
import CustomDivider from 'components/CustomDivider';
import { RouterKeys } from 'routes/RouterKey';

function CommonFooter() {
  const scrollToSection = useScrollToSection();

  return (
    <div className=''>
      <section className=''>
        <div className="px-2">
          <CommonContainer>
            <div className='commonClass'>
              <CustomDivider className='flex items-center' />
            </div>

            <div className="flex gap-5 my-16 justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap common_container">
              <div>
                <CustomButton onClick={() => { scrollToSection('home', 200) }} className="bg-transparent mt-5">
                  <CustomImage
                    height={70}
                    preview={false}
                    draggable={false}
                    src={StaticImages.LOGO.Logo}
                    alt="logo"
                    className='w-auto'
                  />
                </CustomButton>
              </div>
              <div className='flex pl-20 sm:pl-0 justify-center pr-20 sm:pr-0 lg:justify-center  items-center flex-col sm:flex-row gap-3 xl:gap-12 flex-wrap sm:flex-nowrap'>
                <CustomButton type='ghost' onClick={() => { scrollToSection('home', 200) }} className="font-semibold cursor-pointer titleMedium">Home</CustomButton>
                <CustomButton type='ghost' onClick={() => { scrollToSection('features', 200) }} className="font-semibold cursor-pointer titleMedium">Features</CustomButton>
                <CustomButton type='ghost' onClick={() => { scrollToSection('about', 100) }} className="font-semibold cursor-pointer titleMedium">About Us</CustomButton>
                <CustomButton type='ghost' onClick={() => { scrollToSection('download', 100) }} className="font-semibold cursor-pointer titleMedium">Download</CustomButton>
                <CustomButton type='ghost' onClick={() => { scrollToSection('contact') }} className="font-semibold cursor-pointer titleMedium">Contact Us!</CustomButton>
              </div>
            </div>

            {/* Terms and Privacy */}
            <div className="flex justify-center items-center sm:justify-end commonClass">
              <div className="flex justify-end gap-4">
                <a href={RouterKeys.COMMON.TERMS} className="hover:underline">Terms & Conditions</a>
                <a href={RouterKeys.COMMON.PRIVACY} className="hover:underline">Privacy Policy</a>
              </div>
            </div>

          </CommonContainer>
        </div>
      </section>
    </div>
  );
}

export default CommonFooter
