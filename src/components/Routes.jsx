import React from "react";
import { Route, Routes } from "react-router-dom";

/* import { UploadFile } from "../UploadImg.jsx"; */
import { DataPage } from "../pages/dataPages.jsx";
import { Home } from './home.jsx';

import iconData from "../assets/icons.json";
import photoData from "../assets/photos.json";
import videoData from "../assets/videos.json";
import ilustrationData from "../assets/ilustration.json";
import colorsData from "../assets/colors.json";
import backgroundData from "../assets/backgrounds.json";
import fontsData from "../assets/fonts.json"
import threeDData from "../assets/3d.json"
import librariesData from "../assets/libraries.json"
import blogsData from "../assets/blogs.json"
import toolsData from "../assets/tools.json"


export function UseRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/icons" element={<DataPage data={iconData} />} />
      <Route path="/photos" element={<DataPage data={photoData} />} />
      <Route path="/videos" element={<DataPage data={videoData} />} />
      <Route path="/ilustrations" element={<DataPage data={ilustrationData} />} />
      <Route path="/colors" element={<DataPage data={colorsData} />} />
      <Route path="/backgrounds" element={<DataPage data={backgroundData} />} />
      <Route path="/fonts" element={<DataPage data={fontsData} />} />
      <Route path="/3d" element={<DataPage data={threeDData} />} />
      <Route path="/libraries" element={<DataPage data={librariesData} />} />
      <Route path="/blogs" element={<DataPage data={blogsData} />} />
      <Route path="/tools" element={<DataPage data={toolsData} />} />

    </Routes>
  );
}