"use client";
import React, { useState } from "react";

const SongCreate = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Create a New Song</h3>
      <form>
        <label>Song Title</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  );
};

export default SongCreate;
