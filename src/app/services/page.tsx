import ServiceInfo from '../components/services/ServiceInfo';
import { Servicios } from '../database/serviceDatabase';
import { IServices } from '../interface/IServices';

const ServicePage = async () => {
    const serviceData: IServices[] = await Servicios()
    return (
        <>
            <div
                className='flex flex-col justify-center items-center h-auto w-screen pt-20 pb-10 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'
            >
                {
                    serviceData.map((item: any) => {
                        return (
                            <div
                                key={item.id}
                                className='flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-slate-200 to-slate-400 rounded-md shadow-lg mt-5 p-10'
                            >
                                {
                                    <ServiceInfo item={item} key={item.id} />
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ServicePage