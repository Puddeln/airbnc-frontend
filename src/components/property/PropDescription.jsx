import React, { useState, useEffect } from "react";
import axios from "axios";

function PropDescription() {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      const response = await axios.get(
        "https://airbnc-73c3.onrender.com/api/properties/1"
      );

      setDescription(response.data.description);
    };

    fetchDescription();
  }, []);

  if (!description) {
    return <p>Loading description...</p>;
  }

  return (
    <div>
      <h2>Property 1 Description</h2>
      <p>{description}</p>
    </div>
  );
}

export default PropDescription;
