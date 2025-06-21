import Image from 'next/image';
import wt_image from '../../../../public/doraemon.jpg';
import style from './service.module.css';

const Service = () => {
    return (
        <div className='container mx-auto px-6 lg:px-8'>
            <h1 className={style.common_heading}>Our Team</h1>

            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-14'>
                {/* Member 01 */}
                <div className='rounded-lg text-center px-5 py-14 bg-purple-100'>
                    <div className='w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-amber-500'>
                        <Image src="/doraemon.jpg" width={150} height={150} alt='Team Member' className='h-full w-full rounded-full' />
                    </div>

                    <div className='text-center mt-5'>
                        <h1 className='text-lg font-medium'>Walidur Tanjim</h1>
                        <p className='font-medium text-gray-500'>Front End Developer</p>
                    </div>
                </div>

                {/* Member 02 */}
                <div className='relative rounded-lg text-center bg-purple-100'>
                    <div className='w-full h-full rounded-full mx-auto flex items-center justify-center '>
                        <Image src={wt_image} alt='Team Member' property='false' fill={true} quality={100} placeholder='blur' blurDataURL="..." className='rounded-lg'/>
                    </div>
                </div>

                {/* Member 03 */}
                <div className='rounded-lg text-center px-5 py-14 bg-purple-100'>
                    <div className='w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-amber-500'>
                        <span className='text-xl font-medium text-white'>WT</span>
                    </div>

                    <div className='text-center mt-5'>
                        <h1 className='text-lg font-medium'>Walidur Tanjim</h1>
                        <p className='font-medium text-gray-500'>Front End Developer</p>
                    </div>
                </div>

                {/* Member 04 */}
                <div className='rounded-lg text-center px-5 py-14 bg-purple-100'>
                    <div className='w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-amber-500'>
                        <span className='text-xl font-medium text-white'>WT</span>
                    </div>

                    <div className='text-center mt-5'>
                        <h1 className='text-lg font-medium'>Walidur Tanjim</h1>
                        <p className='font-medium text-gray-500'>Front End Developer</p>
                    </div>
                </div>

                {/* Member 05 */}
                <div className='rounded-lg text-center px-5 py-14 bg-purple-100'>
                    <div className='w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-amber-500'>
                        <span className='text-xl font-medium text-white'>WT</span>
                    </div>

                    <div className='text-center mt-5'>
                        <h1 className='text-lg font-medium'>Walidur Tanjim</h1>
                        <p className='font-medium text-gray-500'>Front End Developer</p>
                    </div>
                </div>

                {/* Member 06 */}
                <div className='rounded-lg text-center px-5 py-14 bg-purple-100'>
                    <div className='w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-amber-500'>
                        <span className='text-xl font-medium text-white'>WT</span>
                    </div>

                    <div className='text-center mt-5'>
                        <h1 className='text-lg font-medium'>Walidur Tanjim</h1>
                        <p className='font-medium text-gray-500'>Front End Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;