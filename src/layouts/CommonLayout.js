import * as React from 'react';
import { Layout } from 'antd';
import { useCommonContentMutation } from 'Api/CommonContent';
import CustomImage from 'components/CustomImage';
import { Outlet, useNavigate } from 'react-router-dom';

import { StaticImages } from 'utils/StaticImages';
import LoadingWrapper from 'components/LoadingWrapper';
import SuspenseLoader from 'utils/SuspenseLoader';
import IconButton from 'components/IconButton';
import { ReactIcons } from 'utils/ReactIcons';

const CommonLayout = () => {
    const { fetchCommonContent, commonContentData, isFetchingContent } = useCommonContentMutation();
    const navigate=  useNavigate()

    React.useEffect(() => {
        fetchCommonContent()
    }, [])
    return (
        <Layout className='bg-green-80 min-h-screen'>
            <div className="container">
                <div className='flex justify-between  items-center p-5'>
                    <IconButton onClick={()=>navigate(-1)} Icon={<ReactIcons.ArrowRightCircleIcon className={'text-blue-100'}/>}/>
                    <div className='flex justify-start  w-[60%]'>
                    <CustomImage  src={StaticImages.LOGO.Logo} height={50} width={300} />
                    </div>
                        
                </div>
                <div className=' py-5'>
                    <React.Suspense fallback={<SuspenseLoader />}>
                        <LoadingWrapper loading={isFetchingContent} >
                            <Outlet context={commonContentData} />
                        </LoadingWrapper>
                    </React.Suspense>
                </div>
            </div>
        </Layout>
    );
};

export default CommonLayout
