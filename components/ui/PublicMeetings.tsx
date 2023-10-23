"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Meeting } from "@/types";
import format from "date-fns/format";
import { Button } from "./button";


const PublicMeetings = () => {
  const [publicMeetings, setPublicMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    axios
      .get("/api/meetings")
      .then((res) => {
        setPublicMeetings(res.data.meetings);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const joinHandler =(meetingId:string)=>{
    console.log(meetingId);
    
    axios.patch(`api/meetings/${meetingId}`)
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })

  }
  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-800">Public Meetings</h2>
      {publicMeetings?.map((meeting) => {
        if (meeting.public) {
            console.log(meeting);
            
          return (
            <div
              className="bg-white rounded-lg p-4 shadow-md"
              key={meeting.id}
            >
              <h2 className="text-xl font-semibold text-rose my-2">
                {meeting.title}
              </h2>
              <p className="text-sm text-gray-600">
                Date: {format(new Date(meeting.date), "MMMM do, yyyy")}
              </p>
              <p className="text-sm text-gray-600">
                Time: {meeting.time.split(":")[0]}:{meeting.time.split(":")[1]}{" "}
                until 
                 {" "}
                {+meeting.time.split(":")[0] + +meeting.duration}:
                {meeting.time.split(":")[1]}
              </p>
              <p className="text-sm text-gray-600">{meeting.location}</p>
              <p>{meeting.notes}</p>
              <p className="text-sm text-pink-600">#{meeting.category}</p>
            <Button onClick={()=>joinHandler(meeting.id)}>Join the Meeting</Button>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default PublicMeetings;
