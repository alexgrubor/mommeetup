"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import format from "date-fns/format";
import { addDays } from "date-fns";

interface Meeting {
  id: string;
  title: string;
  date: string;
  notes: string;
  attendees: string;
  location: string;
  createdBy: string;
  time: string;
  duration: string;
}

const UserMeetings = (): JSX.Element => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [_selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);

  useEffect(() => {
    const fetchMeetings = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/meetings");
        setMeetings(data.meetings);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchMeetings();
  }, []);

  const handleDateChange = (
    value: Date | Date[] | null,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (Array.isArray(value)) {
    } else {
      setSelectedDate(value);
      setSelectedMeeting(null);
    }
  };

  const meetingOnSelectedDate = meetings.find(
    (meeting) =>
      new Date(meeting.date).toDateString() ===
      (selectedDate ? selectedDate.toDateString() : "")
  );

  const closeMeetingDetails = () => {
    setSelectedMeeting(null);
    setSelectedDate(new Date());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!meetings.length) return <p>No meetings found</p>;

  return (
    <div className="mx-auto md:mx-0">
      <h2 className="text-2xl text-rose">Your meetings</h2>
      {meetings.length > 0 && (
         <div className="bg-white rounded-lg p-4 shadow-md">
         <h3 className="text-3xl font-semibold text-gray-800">Your Next Meeting</h3>
         <div className="border-t border-gray-300 mt-4">
           <h4 className="text-xl font-semibold text-rose my-2">{meetings[0].title}</h4>
           <p className="text-sm text-gray-600">
             Date: {format(addDays(new Date(meetings[0].date.split("T")[0]), 1), 'dd/MM/yyyy')}
           </p>
           <p className="text-sm text-gray-600">
             Time: from {meetings[0].time.split(":")[0]}:{meetings[0].time.split(":")[1]} until{' '}
             {+meetings[0].time.split(":")[0] + +meetings[0].duration}:{meetings[0].time.split(":")[1]}
           </p>
           <p className="text-sm text-gray-600">Location: {meetings[0].location}</p>
           <p className="text-sm text-gray-600">Notes: {meetings[0].notes}</p>
         </div>
       </div>
      )}

      <div className="mt-5 relative">
        <h3>Select a date from calendar to see your meetings</h3>
        <Calendar
          onChange={(value, event) =>
            handleDateChange(value as Date | Date[] | null, event)
          }
          value={selectedDate || new Date()}
          tileContent={({ date }) => {
            const dateString = date.toDateString();
            const hasMeeting = meetings.some(
              (meeting) => new Date(meeting.date).toDateString() === dateString
            );
            return hasMeeting ? (
              <div className="bg-rose h-full w-full"></div>
            ) : null;
          }}
        />
        {meetingOnSelectedDate && (
          <div className="absolute top-[50%] right-0 bg-white p-6 shadow-md rounded-lg border border-gray-600 ">
            <h3>Event name: {meetingOnSelectedDate.title}</h3>
            <p>
              Date:{" "}
              {format(
                addDays(new Date(meetingOnSelectedDate.date.split("T")[0]), 1),
                "dd/MM/yyyy"
              )}{" "}
            </p>
            <p>
              Time: from {meetingOnSelectedDate.time.split(":")[0]}:
              {meetingOnSelectedDate.time.split(":")[1]} until{" "}
              {+meetingOnSelectedDate.time.split(":")[0] +
                +meetingOnSelectedDate.duration}
              :{meetingOnSelectedDate.time.split(":")[1]}
            </p>
            <p>Location: {meetingOnSelectedDate.location}</p>
            <p>Notes: {meetingOnSelectedDate.notes}</p>
            <button
              className="text-red-500 mt-2 cursor-pointer"
              onClick={closeMeetingDetails}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMeetings;
