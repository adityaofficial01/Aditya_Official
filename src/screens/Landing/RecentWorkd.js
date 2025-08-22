
import React from 'react'

const RecentWorkd = () => {
    return (
        <div>

            <div className="container mb-0 bg-black-200">
                <div className="stacked-cards">
                    {/* //card1 */}
                    <div className="card">
                        <div className="card-content flex flex-col justify-center items-center">
                            <h1 className="text-center text-[3rem] my-3">Tests</h1>
                            <p className="text-center max-w-6xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                        </div>

                        <div className="img-wrapper bg-milky bg-center bg-cover bg-no-repeat min-h-[80vh] rounded-xl relative">

                            <div>
                            <p className='font-Poppins text[2rem]'>Equalize Crowd</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default RecentWorkd