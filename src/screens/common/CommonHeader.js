import * as AntdComponent from 'antd';
import CustomButton from 'components/CustomButton'
import CustomImage from 'components/CustomImage'
import IconButton from 'components/IconButton';
import useScrollToSection from 'Hook/useScrollToSection';
import React from 'react'
import { AppStoreLink, playStoreLink } from 'utils/Constant';
import { ReactIcons } from 'utils/ReactIcons';
import { StaticImages } from 'utils/StaticImages'


function CommonHeader() {

    const [popoverVisible, setPopoverVisible] = React.useState(false);
    const scrollToSection = useScrollToSection();

    return (
        <div className=" sm:px-24  z-50 relative shadow-blueSoft bg-white rounded-bl-xl rounded-br-xl  py-3 md:py-6  ">
            <div className="flex items-center gap-10 justify-evenly">
                <CustomButton onClick={() => { scrollToSection('home', 200) }} className='py-2 md:py-0 bg-transparent'>
                    <CustomImage src={StaticImages.LOGO.Logo} className='h-5 md:h-8 w-auto ' height={''} />
                </CustomButton>
                <div className='flex justify-evenly items-center w-full'>
                    <div className="hidden lg:flex w-full gap-16 items-center">
                        <div className="hidden md:flex gap-12 xl:gap-12 w-full  justify-between sm:px-10">
                            <CustomButton type='ghost' onClick={() => { scrollToSection('home', 200) }} className="font-semibold cursor-pointer  description">Home</CustomButton>
                            <CustomButton type='ghost' onClick={() => { scrollToSection('features', 200) }} className="font-semibold cursor-pointer  description">Features</CustomButton>
                            <CustomButton type='ghost' onClick={() => { scrollToSection('about', 100) }} className="font-semibold cursor-pointer  description">About Us</CustomButton>
                            <CustomButton type='ghost' onClick={() => { scrollToSection('download', 100) }} className="font-semibold cursor-pointer  description">Download</CustomButton>
                            <CustomButton type='ghost' onClick={() => { scrollToSection('contact') }} className="font-semibold cursor-pointer  description">Contact Us!</CustomButton>
                        </div>
                        <div className="hidden xl:flex gap-4 min-w-80 items-center">
                            <a href={playStoreLink} rel='noreferrer' target='_blank' className='flex items-center'>
                                <CustomImage src={StaticImages.DOWNLOAD.PlayStore} height={50} />
                            </a>
                            <a href={AppStoreLink} target='_blank' rel='noreferrer' className='flex items-center'>
                                <CustomImage src={StaticImages.DOWNLOAD.AppStore} height={50} />
                            </a>
                        </div>
                    </div>
                    {/*For Mobile Devices */}
                    <AntdComponent.Flex align="left" vertical className='block lg:hidden absolute right-4'>
                        <AntdComponent.Popover
                            placement="bottomRight"
                            arrow={false}
                            visible={popoverVisible}
                            onVisibleChange={(visible) => setPopoverVisible(visible)}
                            content={
                                <div className="grid gap-3 p-3">
                                    <CustomButton type='ghost' onClick={() => { scrollToSection('home', 200) }} className="font-semibold cursor-pointer  description">Home</CustomButton>
                                    <CustomButton type='ghost' onClick={() => { scrollToSection('features', 200) }} className="font-semibold cursor-pointer  description">Features</CustomButton>
                                    <CustomButton type='ghost' onClick={() => { scrollToSection('about', 100) }} className="font-semibold cursor-pointer  description">About Us</CustomButton>
                                    <CustomButton type='ghost' onClick={() => { scrollToSection('download', 100) }} className="font-semibold cursor-pointer  description">Download</CustomButton>
                                    <CustomButton type='ghost' onClick={() => { scrollToSection('contact') }} className="font-semibold cursor-pointer  description">Contact Us!</CustomButton>
                                    <div className="flex flex-col gap-3">
                                        <a href={playStoreLink} target="_blank" rel="noreferrer" onClick={() => setPopoverVisible(false)}>
                                            <CustomImage src={StaticImages.DOWNLOAD.PlayStore} height={40} width={200} />
                                        </a>
                                        <a href={AppStoreLink} target="_blank" rel="noreferrer" onClick={() => setPopoverVisible(false)}>
                                            <CustomImage src={StaticImages.DOWNLOAD.AppStore} height={40} width={200} />
                                        </a>
                                    </div>
                                </div>
                            }
                        >
                            <span>
                                <IconButton
                                    className="m-0 p-0 pt-14"
                                    Icon={<ReactIcons.MenuBar />}
                                    onClick={() => setPopoverVisible(!popoverVisible)}
                                />
                            </span>
                        </AntdComponent.Popover>
                    </AntdComponent.Flex>
                </div>
            </div>

        </div>

    )
}

export default CommonHeader
