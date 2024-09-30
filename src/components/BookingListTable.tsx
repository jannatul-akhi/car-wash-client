import React from "react";
import { formatDate } from "../utils/dateFormate";
import { useCompleteBookingMutation } from "../redux/api/booking/bookingApi";

const BookingListTable = ({ booking, i, onBookingComplete }) => {
  const [completeBooking] = useCompleteBookingMutation();

  const handleBooking = async () => {
    const updatedInfo = {
      id: booking?._id,
      data: {
        status: "completed",
      },
    };
    const competedBooking = await completeBooking(updatedInfo);
    console.log(competedBooking);
    if (competedBooking?.data?.status === "completed") {
      onBookingComplete(booking._id);
    }
  };
  return (
    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
      <td className="p-3">
        <p>{i}</p>
      </td>
      <td className="p-3">
        <p>{booking?.customer?.name}</p>
      </td>
      <td className="p-3">
        <p className="text-gray-600">{booking?.service?.name}</p>
      </td>
      <td className="p-3">
        <p>{formatDate(booking?.slot?.date)}</p>
        <p className="text-gray-600">
          {booking?.slot?.startTime} - {booking?.slot?.endTime}
        </p>
      </td>
      <td className="p-3 text-right">
        <p>{booking?.vehicleType}</p>
      </td>
      <td className="p-3 text-right">
        <button
          onClick={handleBooking}
          className="px-3 py-1 font-semibold rounded-md bg-violet-600 text-gray-50"
        >
          <span>Pending</span>
        </button>
      </td>
    </tr>
  );
};

export default BookingListTable;
