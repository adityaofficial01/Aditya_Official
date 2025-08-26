// import CustomImage from "components/CustomImage"
// import { StaticImages } from "./StaticImages"

import { DotLottieReact } from "@lottiefiles/dotlottie-react"


const SuspenseLoader = () => {
    return (
        <div className="grid bg-[#9ecaf7] items-center min-h-screen">
            <div className='text-center'>
                {/* <CustomImage preview={false} height={100} src={StaticImages.SPLASH.splash} /> */}
                <DotLottieReact
                    src="https://lottie.host/74922544-5839-4358-8faa-cee3331acded/jw1oKVI3SC.lottie"
                    loop
                    autoplay
                    height={30}
                />
            </div>
        </div>
    )
}

export default SuspenseLoader