import { useGSAP } from '@gsap/react'
import { Button, Col, Row } from 'antd'
import CustomImage from 'components/CustomImage'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
import { StaticImages } from 'utils/StaticImages'

const projects = () => {

  gsap.registerPlugin(SplitText);
  useGSAP(() => {
    const recentProjectText = document.querySelector('.recentProjects');
    const splittedText = new SplitText(recentProjectText, { type: 'chars,words' });

    gsap.fromTo(
      splittedText.chars,
      {
        y: 150,
        opacity: 0,
        rotateX: 90,
        scale: 0.5,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)",
        stagger: {
          each: 0.04,
          amount: 0.4,
          from: "random"
        },
        ease: 'back.out(1.7)',
        duration: 0.9,
      }
    );
  }, []);
  return (
    <div className='bg-black-200'>
      <div className='min-h-screen w-full flex flex-col  justify-center items-center'>
        <p className='recentProjects text-[2rem] sm:text-[5rem] flex  text-white ' style={{ fontFamily: "'Anton', sans-serif" }}>RECENT - PROJECTS</p>
        <p className='text-[#979ea9] text-center text-[0.8  rem] sm:text-[1.5rem] '>
          Check out some of the most recent projects I&apos;ve had the <br />
          pleasure of working on.</p>
      </div>

      <div className='flex overflow-hidden justify-center'>
        <div className='w-full xl:w-[70%] '>
          <Row gutter={[20, 20]}>

            {/* DATA COLLECT =========== */}
            <Col xs={24} lg={24} className='flex flex-wrap lg:flex-nowrap w-[95%] xl:min-h-[70vh]  justify-center items-center'>
              <div className='w-full h-[60%] p-4 lg:h-full group cursor-pointer'>
                <Button type='ghost' onClick={() => window.open('https://www.crowd.equalyz.ai/', '_blank')} className='w-full rounded-xl h-full bg-[#e4f3e4] flex flex-wrap relative justify-center items-center overflow-hidden'>
                  <CustomImage
                    // height={400}
                    width='auto'
                    src={StaticImages.Images.dataCollect}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className='absolute flex gap-3 bottom-3 right-3'>
                    <Button
                      type='ghost'
                      className='bg-[#979ea9] text-white w-28 rounded-full h-10'
                    // onClick={() => window.open('https://www.crowd.equalyz.ai/', '_blank')}
                    >
                      WebApp
                    </Button>
                    <Button type='ghost' className='bg-[#979ea9] text-white w-28 rounded-full h-10'>Visit Website</Button>
                  </div>
                </Button>
              </div>

              <div className='flex flex-col p-4 justify-between'>
                <div className='h-full w-full flex group flex-col gap-3 justify-between cursor-pointer'>
                  <div className='w-full rounded-xl min-h-96 bg-dataCollect2 bg-[length:100%] bg-center bg-no-repeat flex justify-center items-start transition-all duration-700 ease-out hover:bg-[length:120%] overflow-hidden'>
                  </div>
                  <div className=''>
                    <p className='text-white text-[2rem] sm:text-[4rem] mt-2 '>EQUALIZE CROWD </p>
                    <p className='text-[#979ea9] text-[ 1rem] sm:text-[1.5rem]'>Equalize crowd is an earning platform.</p>
                  </div>
                </div>
              </div>
            </Col>

            {/* RAVVOO ============> */}
            <Col xs={24} lg={24} className='flex flex-col mt-44 px-10 rounded-xl justify-center items-center'>
              <Button onClick={() => window.open('https://www.ravvoo.com/', '_blank')} type='ghost' className='w-full cursor-pointer rounded-xl h-full min-h-[90vh] bg-ravvoo bg-center bg-[length:110%] bg-no-repeat flex justify-center items-start transition-all duration-700 ease-out hover:bg-[length:115%] overflow-hidden'>
              </Button>
              <div className='bg-black-200 flex flex-col justify-start items-start w-full px-5'>
                <p className='text-white text-[3rem]  '>RAVVOO </p>
                <p className='text-[#979ea9] text-[1rem]'>Ravvoo is an event managemnet web app.</p>
              </div>
            </Col>

            {/* DATA COLLECT =========== */}
            <Col xs={24} lg={24} className='flex flex-wrap lg:flex-nowrap w-[95%] xl:min-h-[70vh]  justify-center items-center'>
              <div className='w-full h-[60%] p-4 lg:h-full group cursor-pointer'>
                <Button type='ghost' onClick={() => window.open('https://dev.fylemystyle.com', '_blank')} className='w-full rounded-xl h-full bg-[#e4f3e4] flex flex-wrap relative justify-center items-center overflow-hidden'>
                  <CustomImage
                    // height={400}
                    width='auto'
                    src={StaticImages.Images.FyleMyStyle}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className='absolute flex gap-3 bottom-3 right-3'>
                    <Button
                      type='ghost'
                      className='bg-[#979ea9] text-white w-28 rounded-full h-10'
                    // onClick={() => window.open('https://www.crowd.equalyz.ai/', '_blank')}
                    >
                      WebApp
                    </Button>
                    <Button type='ghost' className='bg-[#979ea9] text-white w-28 rounded-full h-10'>Visit Website</Button>
                  </div>
                </Button>
              </div>

              <div className='flex flex-col p-4 justify-between'>
                <div className='h-full w-full flex group flex-col gap-3 justify-between cursor-pointer'>
                  <div className='w-full rounded-xl min-h-96 bg-fyleMystyle bg-[length:100%] bg-center bg-no-repeat flex justify-center items-start transition-all duration-700 ease-out hover:bg-[length:120%] overflow-hidden'>
                  </div>
                  <div className=''>
                    <p className='text-white text-[2rem] sm:text-[4rem] mt-2 '>FYLE MY STYLE  </p>
                    <p className='text-[#979ea9] text-[ 1rem] sm:text-[1.5rem]'>Fyle my style is a product based styling application.</p>
                  </div>
                </div>
              </div>
            </Col>
            {/* FYLE MY STYLE ============> */}
            {/* <Col xs={24} lg={24} className='flex xl:min-h-[70vh] mt-44 justify-center items-center'>
              <Col xs={24} lg={12} className='w-full h-full group cursor-pointer'>
                <Button type='ghost' onClick={() => window.open('https://dev.fylemystyle.com', '_blank')} className='w-full rounded-xl h-full bg-[#111111] flex relative justify-center items-center overflow-hidden'>
                  <CustomImage
                    // height={400}
                    src={StaticImages.Images.FyleMyStyle}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className='absolute flex gap-3 bottom-3 right-3'>
                    <Button
                      type='ghost'
                      className='bg-[#979ea9] text-white w-28 rounded-full h-10'
                    // onClick={() => window.open('https://www.crowd.equalyz.ai/', '_blank')}
                    >
                      WebApp
                    </Button>
                    <Button type='ghost' className='bg-[#979ea9] text-white w-28 rounded-full h-10'>Visit Website</Button>
                  </div>
                </Button>
              </Col>

              <Col xs={24} lg={12} className='flex flex-col justify-between'>
                <div className='h-full w-full flex group flex-col gap-3 justify-between cursor-pointer'>
                  <div className='w-full rounded-xl min-h-96 bg-fyleMystyle bg-[length:100%] bg-center bg-no-repeat flex justify-center items-start transition-all duration-700 ease-out hover:bg-[length:120%] overflow-hidden'>
                  </div>
                  <div className=''>
                    <p className='text-white text-[4rem] mt-2 '>FYLE MY STYLE </p>
                    <p className='text-[#979ea9] text-[1.5rem]'>Fyle my style is a product based styling application.</p>
                  </div>
                </div>
              </Col>
            </Col> */}

            {/* TAP N =============> */}
            <Col xs={24} lg={24} className='flex w-[95%] mt-44 justify-center items-center'>
              <Button onClick={() => window.open('https://dev.tap-n.ai/', '_blank')} type='ghost' className='w-full cursor-pointer rounded-xl h-full min-h-[90vh] bg-TapN bg-center bg-[length:110%] bg-no-repeat flex justify-center items-start transition-all duration-700 ease-out hover:bg-[length:115%] overflow-hidden'>
              </Button>
            </Col>
            <div className='bg-black-200 px-5'>
              <p className='text-white text-[3rem]  '>TapN-AI </p>
              <p className='text-[#979ea9] text-[1rem]'>TapN-AI is an AI image generation & persona creating application</p>
            </div>

            {/* Zipkitch LANDING ========= */}
            <Col xs={24} lg={24} className='flex min-h-[70vh] mt-44 justify-center items-center'>
              <Col xs={24} lg={12} className='flex flex-col justify-between'>
                <div className='h-full w-full flex group flex-col gap-3 justify-between cursor-pointer'>
                  <Button type='ghost' onClick={() => window.open('https://dev.zipkitch.co/', '_blank')} className='w-full  rounded-xl min-h-96 bg-ZipKitch bg-[length:100%] bg-center bg-no-repeat flex justify-center items-start transition-all duration-700 ease-out hover:bg-[length:120%] overflow-hidden'>
                  </Button>
                  <div className=''>
                    <p className='text-white text-[4rem] mt-2 '>ZIP KITCH </p>
                    <p className='text-[#979ea9] text-[1.5rem]'>Zip Kitch is a dishes suggestion application.</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12} className='w-full h-full group cursor-pointer'>
                <Button type='ghost' onClick={() => window.open('https://dev.zipkitch.co/', '_blank')} className='w-full rounded-xl h-full bg-[#FAF9F6] flex relative justify-center items-center overflow-hidden'>
                  <CustomImage
                    height={400}
                    src={StaticImages.Images.zipkitch}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className='absolute flex gap-3 bottom-3 right-3'>
                    <Button
                      type='ghost'
                      className='bg-[#979ea9] text-white w-28 rounded-full h-10'
                    // onClick={() => window.open('https://www.crowd.equalyz.ai/', '_blank')}
                    >
                      WebApp
                    </Button>
                    <Button type='ghost' className='bg-[#979ea9] text-white w-28 rounded-full h-10'>Visit Website</Button>
                  </div>
                </Button>
              </Col>


            </Col>


            {/* CREW =============> */}
            <Col xs={24} lg={24} className='flex mt-44 justify-center items-center'>
              <Button onClick={() => window.open('https://www.crew-hiring.com/', '_blank')} type='ghost' className='w-full cursor-pointer rounded-xl h-full min-h-[90vh] bg-Crew bg-center bg-[length:110%] bg-no-repeat flex justify-center items-start transition-all duration-700 ease-out hover:bg-[length:115%] overflow-hidden'>
              </Button>
            </Col>
            <div className='bg-black-200 px-5'>
              <p className='text-white text-[3rem]  '>CREW </p>
              <p className='text-[#979ea9] text-[1rem]'>Bringing contractors and trade pros together.</p>
            </div>



          </Row>
        </div>
      </div>
    </div>
  )
}

export default projects