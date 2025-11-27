import React from "react";
import ImageGallery from "../../components/ImageGallery";
import NoticeBoard from "../../components/NoticeBoard";


function Home() {
  return (
    <div className="container mt-4">
      <ImageGallery/>
      <NoticeBoard />
    </div>
  );
}
export default Home;
