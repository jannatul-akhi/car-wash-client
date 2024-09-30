import { baseApi } from "../baseApi";

const BookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: "/bookings",
        method: "POST",
        body: bookingInfo,
      }),
    }),
    getBooking: builder.query({
      query: () => ({
        url: `/bookings`,
        method: "GET",
      }),
      //invalidatesTags: ["user"],
    }),
    getmyBooking: builder.query({
      query: () => ({
        url: `/bookings/my-bookings`,
        method: "GET",
      }),
      //invalidatesTags: ["user"],
    }),
    completeBooking: builder.mutation({
      query: (args) => ({
        url: `/bookings/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingQuery,
  useGetmyBookingQuery,
  useCompleteBookingMutation,
} = BookingApi;
