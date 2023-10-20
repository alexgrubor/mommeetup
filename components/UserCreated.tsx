"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

const UserCreated = ({ id }: { id: string }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      try {
        const response = await axios.post("/api/webhook/user", { userId: id });
        console.log(response);

        setUser(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Created by</h2>
      <div className="flex gap-2 items-center">
      
        <Image
          src={user?.imageUrl}
          alt="Profile image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p>
          {user?.firstName} {user?.lastName}
        </p>
      </div>
    </div>
  );
};
export default UserCreated;
