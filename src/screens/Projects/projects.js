import { useGSAP } from '@gsap/react'
import { Button, Col, Row } from 'antd'
import CustomImage from 'components/CustomImage'
import IconButton from 'components/IconButton'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RouterKeys } from 'routes/RouterKey'
import { ReactIcons } from 'utils/ReactIcons'
import { StaticImages } from 'utils/StaticImages'

const projects = () => {
  const navigate = useNavigate()

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


    // EMail section text animatipns
    //* Description Animation
    const description = document.querySelector(".Description");

    if (description) {
      // Split into lines
      const splitDescription = new SplitText(".Description", { type: "words" });

      // hide lines initially
      gsap.set(splitDescription.words, { y: 100, opacity: 0, display: 'inline-block' });

      // timeline with ScrollTrigger
      let descriptionSection = gsap.timeline({
        scrollTrigger: {
          trigger: ".ContactusSection",
          start: "30% 90%",   // when 30% of Description hits 80% of viewport
          toggleActions: "play none none reset",
          // markers: true,    // enable to debug
        },
      });

      // animate lines
      descriptionSection.to(splitDescription.words, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
      });
    }



    //* Data collect animatiuon
    const projectTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.dataCollectSection',
        start: "20% 90%",   // when 30% of Description hits 80% of viewport
        toggleActions: "play none none none",
      }
    })

    projectTl.fromTo('.dataCollectImage1', {
      // x: '-100%',
      opacity: 0,
      scale:0.4,
    },{
      scale:1,
      opacity:1,
      ease:'power1.in'
    })

  }, []);
  return (
    <div className='bg-black-200'>
      <div className='min-h-screen relative w-full flex flex-col  justify-center items-center'>
        <p className='recentProjects text-[2rem] sm:text-[5rem] flex  text-white ' style={{ fontFamily: "'Anton', sans-serif" }}>RECENT<span className='text-black-200'>-</span>PROJECTS</p>
        <p className='text-[#979ea9] text-center text-[0.8  rem] sm:text-[1.5rem] '>
          Check out some of the most recent projects I&apos;ve had the <br />
          pleasure of working on.</p>

        <IconButton onClick={() => navigate(RouterKeys.HOME.HOME)} className='absolute top-4 left-4' Icon={<ReactIcons.ArrowRightCircleIcon className={'border-white'} />} />
      </div>

      <div className='flex overflow-hidden justify-center'>
        <div className='w-full xl:w-[70%] '>
          <Row gutter={[20, 20]}>

            {/* DATA COLLECT =========== */}
            <Col xs={24} lg={24} className='flex  flex-wrap lg:flex-nowrap w-[95%] xl:min-h-[70vh]  justify-center items-center'>
              <div className='w-full h-[60%] p-4  lg:h-full group cursor-pointer'>
                <Button type='ghost' onClick={() => window.open('https://www.crowd.equalyz.ai/', '_blank')} className='w-full dataCollectSection rounded-xl h-full bg-[#e4f3e4] flex flex-wrap relative justify-center items-center overflow-hidden'>
                  <CustomImage
                    // height={400}
                    width='auto'
                    src={StaticImages.Images.dataCollect}
                    className="dataCollectImage1 transition-transform duration-300 ease-in-out group-hover:scale-110"
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

              <div className='flex flex-col dataCollectImage2 p-4 justify-between'>
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
            <Col xs={24} lg={24} className='flex  flex-wrap lg:flex-nowrap w-[95%] xl:min-h-[70vh]  justify-center items-center'>
              <div className='w-full h-[60%] p-4  lg:h-full group cursor-pointer'>
                <Button type='ghost' onClick={() => window.open('https://dev.zipkitch.co/', '_blank')} className='w-full dataCollectSection rounded-xl h-full bg-[#faf9f6] flex flex-wrap relative justify-center items-center overflow-hidden'>
                  <CustomImage
                    // height={400}
                    width='auto'
                    src={StaticImages.Images.zipkitch}
                    className="dataCollectImage1 transition-transform duration-300 ease-in-out group-hover:scale-110"
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

              <div className='flex flex-col dataCollectImage2 p-4 justify-between'>
                <div className='h-full w-full flex group flex-col gap-3 justify-between cursor-pointer'>
                  <div className='w-full rounded-xl min-h-96 bg-ZipKitch bg-[length:100%] bg-center bg-no-repeat flex justify-center items-start transition-all duration-700 ease-out hover:bg-[length:120%] overflow-hidden'>
                  </div>
                  <div className=''>
                    <p className='text-white text-[2rem] sm:text-[4rem] mt-2 '>ZIP KITCH </p>
                    <p className='text-[#979ea9] text-[ 1rem] sm:text-[1.5rem]'>Zip Kitch is a dishes suggestion application.</p>
                  </div>
                </div>
              </div>
            </Col>


            {/* CREW =============> */}
            <Col xs={24} lg={24} className='flex mt-44 justify-center items-center'>
              <Button onClick={() => window.open('https://www.crew-hiring.com/', '_blank')} type='ghost' className='w-full cursor-pointer rounded-xl h-full min-h-[90vh] bg-Crew bg-center bg-[length:110%] bg-no-repeat flex justify-center items-start transition-all duration-700 ease-out hover:bg-[length:115%] overflow-hidden'>
              </Button>
            </Col>
            <div className='bg-black-200 mb-20 px-5'>
              <p className='text-white text-[3rem]  '>CREW </p>
              <p className='text-[#979ea9] text-[1rem]'>Bringing contractors and trade pros together.</p>
            </div>



          </Row>

          <div className='min-h-screen ContactusSection relative w-full flex flex-col  justify-center items-center'>
            <p className='recentProjects text-[2rem] sm:text-[5rem] text-center   text-white Description ' style={{ fontFamily: "'Anton', sans-serif" }}>Got a Vision? Let&apos;s Bring It To Life!</p>
            <p className='text-[#979ea9] text-center text-[0.8  rem] sm:text-[1.5rem] '>
              I&apos;m always excited to collaborate on new innovative projects. Whether you&apos;<br />
              starting from scratch or refining and existing idea
            </p>
            <div className='flex gap-4 sm:gap-8 justify-center items-center mt-14'>

              <Button
                type='ghost'
                className='text-[#979ea9] flex text-center text-[0.8rem] sm:text-[1.5rem] underline '
                onClick={() => window.open('mailto:rajputaadihr@gmail.com')}
              >
                Email
              </Button>
              <Button
                type='ghost'
                className='text-[#979ea9] flex text-center text-[0.8rem] sm:text-[1.5rem] underline '
                onClick={() => window.open('https://wa.me/918003640485', '_blank')}
              >
                Whatsapp
              </Button>
            </div>

            <IconButton onClick={() => navigate(RouterKeys.HOME.HOME)} className='absolute top-4 left-4' Icon={<ReactIcons.ArrowRightCircleIcon className={'border-white'} />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects