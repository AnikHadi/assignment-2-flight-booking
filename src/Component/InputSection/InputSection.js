import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setFlightBook } from "../../redux/fliteBooking/action";
import "./InputSection.css";

export default function InputSection() {
  const { register, handleSubmit, reset } = useForm();
  const flight = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const lastObject = flight.booking[flight.booking.length - 1];
    let newId = 0;
    if (lastObject === undefined) {
      newId = 1;
    } else {
      newId = lastObject.id + 1;
    }
    const newData = {
      ...data,
      id: newId,
    };
    dispatch(setFlightBook(newData));
    reset();
  };

  return (
    // <!-- Input Data -->
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form
          className="first-hero lws-inputform"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <!-- From --> */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
                {...register("from")}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
                {...register("to")}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
              {...register("date")}
            />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
                {...register("guests")}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                required
                {...register("ticketClass")}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>
          {flight.booking.length === 3 ? (
            <button
              disabled={true}
              className="addCity disabledBtn"
              type="submit"
              id="lws-addCity"
            >
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          ) : (
            <button className="addCity" type="submit" id="lws-addCity">
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
