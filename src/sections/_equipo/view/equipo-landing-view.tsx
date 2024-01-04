'use client';



import EquipoLandingIntroduce from '../landing/equipo-landing-introduce';
import {_members} from "../../../_mock";
import TravelTeam from "../../_travel/team/travel-team";


// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>


      <TravelTeam members={_members.slice(0, 8)} />



    </>
  );
}
