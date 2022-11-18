import AdvanceMachining from "../partials/AdvancedMachining"
import EngineeringInfo from "../partials/EngineeringInfo" 
import EquipmentOverview from "../partials/EquipmentOverview"
import SampleParts from "../partials/SampleParts"


export default function Engineering() {
    return (
        <div>
            <p className='text-2xl italic mb-5'>Engineering</p>

            <p>A&D Precision Manufacturing utilizes the most to date CAT/CAM software<br></br> to support tool design, engineering change activity, process planning,<br></br> and programming for CNC Machines</p>

            <div className='mt-6'>
                <EngineeringInfo />
            </div>

            <div className='mt-6'>
                <AdvanceMachining />
            </div>

            <div className='mt-6'>
                <EquipmentOverview />
            </div>

            <div className='mt-6'>
                <SampleParts />
            </div>
        </div>
    )
}