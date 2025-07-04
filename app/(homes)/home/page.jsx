import React from "react";

import CoursesThree from "../../../components/homes/courses/CoursesThree";
import FindLearningPath from "@/components/homes/FindLearningPath";
import LearningSolutions from "../../../components/homes/LearningPath/LearningSolutions";
import EventsOne from "@/components/homes/events/EventsOne";
import CategoriesTwo from "@/components/homes/categories/CategoriesTwo";
import Students from "@/components/homes/students/Students";
import BecomeInstactor from "@/components/common/BecomeInstactor";
import BecomeStudent from "../../../components/common/BecomeStudent";
import Brands from "@/components/common/Brands";

import FooterTwo from "@/components/layout/footers/FooterTwo";
import Preloader from "@/components/common/Preloader";
import Header from "@/components/layout/headers/Header";
export const metadata = {
  title:
    "Home-2 || Educrat - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
};
export default function page() {
  return (
    <>
      <Preloader />
      <Header />
      <div className="main-content overflow-hidden   ">
        <CoursesThree />
        <FindLearningPath />
        <LearningSolutions />
        <EventsOne />
        <CategoriesTwo />
        <Students />
        <BecomeInstactor />
        <BecomeStudent />
        <Brands />
        <FooterTwo />
      </div>
    </>
  );
}
