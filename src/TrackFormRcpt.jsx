
import { FiUser } from "react-icons/fi";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { CiReceipt } from "react-icons/ci";
import { useForm } from "react-hook-form";
function Form({ setTrackFormData }) {
  const { register, handleSubmit, reset } = useForm();

  function handleFocus() {
    setTrackFormData({ open: false });
  }

  function onSubmit(data) {
    setTrackFormData({ open: true, ...data });
  }

  return (
    <div>
      <form className=" px-6 pt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid gap-x-3 gap-y-8 md:gap-x-6">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-slate-300"> Full Name</span>
              <span className="label-text text-slate-300">
                <FiUser />
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: true })}
              onFocus={handleFocus}
              />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-slate-300">Phone Number</span>
              <span className="label-text text-slate-300">
                <IoPhonePortraitOutline />
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("phoneNumber", { required: true })}
              onFocus={handleFocus}
              />
          </label>
          <label className=" max-full form-control col-span-2 w-full">
            <div className="label">
              <span className="label-text text-slate-300">Tracking Id</span>
              <span className="label-text text-slate-300">
                <IoLocationOutline />
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="max-full input input-bordered w-full"
              {...register("trackingID", { required: true })}
              onFocus={handleFocus}
              />
          </label>
          <label className=" max-full form-control col-span-2 w-full">
            <div className="label">
              <span className="label-text text-slate-300">Tracking Link (optional)</span>
              <span className="label-text text-slate-300">
                <IoIosLink />
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="max-full input input-bordered w-full"
              {...register("trackingLink")}
              onFocus={handleFocus}
              />
          </label>

          <div className=" col-span-2 mt-2 flex  items-center justify-center">
            <button className="btn btn-block uppercase">
              Create Tracking Receipt <CiReceipt />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
