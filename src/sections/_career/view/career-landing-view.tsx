'use client';

import {
  _jobs,
  _careerPosts,
  _brandsColor,
  _testimonials,
  _jobsByCompanies,
  _jobsByCountries,
  _jobsByCategories, _members,
} from 'src/_mock';

import MainLayout from 'src/layouts/main';
import Footer from "../../../layouts/main/footer";
import CareerLandingHero from '../landing/career-landing-hero';
import CareerLandingStep from '../landing/career-landing-step';
import Firma from '../testimonial/firma';
import CareerLatestPosts from '../../blog/career/career-latest-posts';
import TravelTeam from "../../_travel/team/travel-team";
import ElearningTeam from "../../_elearning/team/elearning-team";

// ----------------------------------------------------------------------

export default function CareerLandingView() {
  return (
    <MainLayout>
      <CareerLandingHero />

      <CareerLandingStep />



      <TravelTeam members={_members.slice(0, 4)} />










      </MainLayout>
  );
}
