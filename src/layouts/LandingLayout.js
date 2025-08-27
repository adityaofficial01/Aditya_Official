import { FloatButton, Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

function LandingLayout() {
    return (
        <Layout className=' relative'>
            
            <Layout.Content className='bg-white min-h-96'>
                <Outlet />
            </Layout.Content>
            <FloatButton.BackTop />
        </Layout>
    )
}

export default LandingLayout
