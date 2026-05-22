import UpdateCarForm from "@/components/UpdateCarForm"
import { getCarsDetails } from "@/lib/action"

const UpdateCarPage = async ({ params }) => {

  const { id } = await params

  const car = await getCarsDetails(id)

  return (

    <div className="my-28 w-11/12 md:w-10/12 mx-auto  max-w-4xl">
         <h2 className=" text-4xl font-bold text-[#CBE4DE] mt-24 mb-4 text-center">
       Update Your <span className="text-[#0E8388]">
         Listing
          </span>
      </h2>

      <UpdateCarForm car={car} />

    </div>
  )
}

export default UpdateCarPage