import React from "react";
import { Route, Routes } from "react-router-dom";

import { UploadFile } from "../UploadImg.jsx";
import { DataPage } from "../pages/dataPages.jsx";


import iconData from "../assets/icons.json";
import photoData from "../assets/photos.json";
import videoData from "../assets/videos.json";
import ilustrationData from "../assets/ilustration.json";
import colorsData from "../assets/colors.json";
import backgroundData from "../assets/backgrounds.json";

export function UseRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UploadFile />} />
      <Route path="/icons" element={<DataPage data={iconData} />} />
      <Route path="/photos" element={<DataPage data={photoData} />} />
      <Route path="/videos" element={<DataPage data={videoData} />} />
      <Route path="/ilustrations" element={<DataPage data={ilustrationData} />} />
      <Route path="/colors" element={<DataPage data={colorsData} />} />
      <Route path="/backgrounds" element={<DataPage data={backgroundData} />} />
    </Routes>
  );
}