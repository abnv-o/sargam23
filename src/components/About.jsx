import React from "react";

function About() {
  return (
    <div className="flex flex-col justify-center items-center  mt-5 lg:flex lg:flex-row lg:justify-between ">
      <div className=" flex items-center justify-center pt-4 lg:w-1/2">
        <img src="images/about-img.png" alt="" className="p-4" />
      </div>

      <div className=" flex flex-col  items-center justify-center text-center lg:w-1/2">
        <h1 className="text-3xl mb-3 lg:m-2"> <u>ABOUT</u></h1>
        <p className="text-gray-700 p-3">
          The arts fest of Cochin University Students Union takes pride in
          announcing yet another edition of SARGAM. The one of a kind arts fest
          revolves around a vibrant crowd of over 9000 students hailing from
          various campuses of CUSAT (Thrikakkara, Lakeside, Pullincunnu) and
          colleges affiliated under us ( Conspi academy of management studies
          Thiruvanathapuram , Marian college of architecture and planning
          Thiruvananthapuram, Nizar Rahim & Mark school of Architecture Kollam,
          Bhavan's royal institute of Management Ernakulam, TKM school of
          Architecture Kollam, Central Institute of Fisheries,Nautical &
          Engineering Training, Ernakulam, Asian School of Business
          Thiruvananthapuram, College of Engineering Thalassery) The 5 day event
          marks it's opening on the 29th of February and the festivities
          continue upto the 4th of March. Don't miss out on the magic , mark your calendars for February 28th to March 3rd! See you there, ready to be wowed! ✌️
        </p>
      </div>
    </div>
  );
}

export default About;
