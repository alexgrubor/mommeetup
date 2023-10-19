"use client";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { format } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  TimeField,
  Label,
  DateInput,
  DateSegment,
  NumberField,
  Group,
  Input,
  Button as RIAButton,
} from "react-aria-components";
import { Time } from "@internationalized/date";
import PlacesAutocomplete from "react-places-autocomplete";
import { LoadScript } from "@react-google-maps/api";

const MeetingsPage = () => {
  const { userId } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    notes: "",
    location: "",
    createdBy: "",
  });
  const [date, setDate] = useState<Date>();
  const [timeValue, setValue] = useState(new Time(11, 45));
  const [duration, setDurationValue] = useState(1);
  const [location, setLocation] = useState("");

  const handleLocationChange = (value: any) => {
    setLocation(value);
  };

  const handleLocationSelect = async (value: any) => {
    setLocation(value);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      title: formData.title,
      date: date?.toISOString(),
      notes: formData.notes,
      location: location,
      time: timeValue.toString(),
      duration: duration.toString(),
      createdBy: userId,
    };

    try {
      const response = await axios.post("/api/meetings", data);

      console.log("Meeting created:", response.data);
    } catch (error) {
      console.error("Error creating meeting:", error);
    }
  };

  const googleMapsApiKey: string =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["places"]}>
      <div className="min-h-screen flex flex-col py-5 items-center gap-4">
        <h2 className="text-2xl text-rose">Create a new meeting</h2>
        <form
          className="flex flex-col w-96 gap-3 bg-white p-6 shadow-md rounded-lg"
          onSubmit={handleSubmit}
        >
          <label className="text-gray-600" htmlFor="title">
            Title of Event
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-rose"
          />

          <div className="flex gap-4 justify-between items-center">
            <label className="text-gray-600">Event date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[200px] justify-center text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <TimeField
            value={timeValue}
            onChange={setValue}
            className="flex justify-between items-center gap-5"
          >
            <label className="text-gray-600">Event time</label>
            <DateInput className="flex gap-3 w-[200px]">
              {(segment) => <DateSegment className='text-center  text-2xl  rounded-md focus:outline-none focus:border-rose' segment={segment} />}
            </DateInput>
          </TimeField>

          <NumberField
            defaultValue={duration}
            minValue={0}
            value={duration}
            onChange={(value) => {
              setDurationValue(value);
            }}
            className="flex justify-between items-center"
          >
            <label className="text-gray-600">Duration (in hours)</label>
            <Group className="flex justify-between items-center">
              <RIAButton slot="decrement" className=" border border-gray-300 rounded-md  cursor-pointer p-2 w-10 text-xl ">
                -
              </RIAButton>
              <Input className="p-2 w-10 text-center mx-3 border border-gray-300 rounded-md focus:outline-none focus:border-rose" />
              <RIAButton slot="increment" className=" border border-gray-300 rounded-md cursor-pointer  p-2 w-10 text-xl ">+</RIAButton>
            </Group>
          </NumberField>

          <PlacesAutocomplete
            value={location}
            onChange={handleLocationChange}
            onSelect={handleLocationSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className="flex justify-between items-center relative">
                <label className="text-gray-600">Location</label>
                <input
                  className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:border-rose"
                  {...getInputProps({
                    name: "location",
                    id: "location",
                    placeholder: "Location",
                  })}
                />
                <div className="absolute top-0 left-0">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, index) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#e6e6e6" : "#fff",
                    };

                    return (
                      <div key={index}>
                        <div
                          {...getSuggestionItemProps(suggestion, { style })}
                          className="p-2  rounded-md cursor-pointer hover:bg-gray-100"
                        >
                          {suggestion.description}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <div className="mb-4 flex justify-between items-center">
            <label htmlFor="notes" className="text-gray-600">
              Notes
            </label>
            <textarea
              name="notes"
              id="notes"
              value={formData.notes}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-rose"
            ></textarea>
          </div>
          <button className="bg-rose text-white py-2 rounded-md hover:bg-lavender hover:text-black" type="submit">Create</button>
        </form>
      </div>
    </LoadScript>
  );
};

export default MeetingsPage;
