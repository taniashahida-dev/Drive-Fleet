'use client'

import { updateUserCar } from "@/lib/action"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const UpdateCarForm = ({ car }) => {

  const router = useRouter()

  const handleUpdate = async(e)=>{

    e.preventDefault()

    const form = e.target

    const updatedCar = {

      dailyRentPrice:
        form.dailyRentPrice.value,

      description:
        form.description.value,

      availability:
        form.availability.value,

      image:
        form.image.value,

      carType:
        form.carType.value,

      pickupLocation:
        form.pickupLocation.value,
    }

    const result =
      await updateUserCar(
        car._id,
        updatedCar
      )

    if(result.modifiedCount > 0){

      toast.success("Updated Successfully ✅")

      router.push("/my-added-cars")
    }
  }

  return (
    <section className="w-11/12 max-w-4xl mx-auto rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F] p-8">

      <h1 className="mb-8 text-4xl font-bold text-[#CBE4DE]">

        Update Car

      </h1>

     <form
  onSubmit={handleUpdate}
  className="space-y-6"
>

  {/* PRICE */}
  <div>
    <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
      Daily Rent Price ($)
    </label>

    <input
      type="number"
      name="dailyRentPrice"
      defaultValue={car.dailyRentPrice}
      className="w-full rounded-xl bg-[#2C3333] p-4 text-white outline-none border border-[#0E8388]/20 focus:border-[#0E8388]"
    />
  </div>

  {/* DESCRIPTION */}
  <div>
    <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
      Description
    </label>

    <textarea
      name="description"
      rows={5}
      defaultValue={car.description}
      className="w-full rounded-xl bg-[#2C3333] p-4 text-white outline-none border border-[#0E8388]/20 focus:border-[#0E8388]"
    />
  </div>

  {/* AVAILABILITY */}
  <div>
    <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
      Availability Status
    </label>

    <select
      name="availability"
      defaultValue={car.availability}
      className="w-full rounded-xl bg-[#2C3333] p-4 text-white outline-none border border-[#0E8388]/20 focus:border-[#0E8388]"
    >
      <option value="available">
        Available
      </option>

      <option value="unavailable">
        Unavailable
      </option>
    </select>
  </div>

  {/* IMAGE */}
  <div>
    <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
      Image URL
    </label>

    <input
      type="text"
      name="image"
      defaultValue={car.image}
      className="w-full rounded-xl bg-[#2C3333] p-4 text-white outline-none border border-[#0E8388]/20 focus:border-[#0E8388]"
    />
  </div>

  {/* TYPE */}
 {/* CAR TYPE */}
<div>

  <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
    Car Type
  </label>

  <select
    name="carType"
    defaultValue={car.carType}
    className="w-full rounded-xl border border-[#0E8388]/20 bg-[#2C3333] p-4 text-white outline-none focus:border-[#0E8388]"
  >
    <option value="SUV">
      SUV
    </option>

    <option value="Sedan">
      Sedan
    </option>

    <option value="Hatchback">
      Hatchback
    </option>

    <option value="Luxury">
      Luxury
    </option>

    <option value="Sports">
      Sports
    </option>

    <option value="Convertible">
      Convertible
    </option>

  </select>

</div>

  {/* LOCATION */}
  <div>
    <label className="mb-2 block text-sm font-medium text-[#CBE4DE]/70">
      Pickup Location
    </label>

    <input
      type="text"
      name="pickupLocation"
      defaultValue={car.pickupLocation}
      className="w-full rounded-xl bg-[#2C3333] p-4 text-white outline-none border border-[#0E8388]/20 focus:border-[#0E8388]"
    />
  </div>

  <button
    type="submit"
    className="w-full rounded-xl bg-[#0E8388] py-4 text-lg font-bold text-white transition-all hover:bg-[#0c7478]"
  >
    Update Car
  </button>

</form>
    </section>
  )
}

export default UpdateCarForm