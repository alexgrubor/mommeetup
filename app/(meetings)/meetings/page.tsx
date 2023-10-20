"use client";
import CreateMeetingForm from "./components/CreateMeetingForm";
import UserMeetings from "./components/UserMeetings";

const MeetingsPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start md:justify-center md:items-center py-5  gap-4">
      <CreateMeetingForm />
      <UserMeetings />
    </div>
  );
};

export default MeetingsPage;
