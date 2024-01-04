// LawyerProfilePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {JohnsmithProfile} from "../../abogados/johnsmith";
JohnsmithProfile
interface LawyerProfile {
  name: string;
  info: string;
  postId: string;
  postName: string;
  nicename: string;
}
const AbogadoProfile = () => {
  const { lawyerId } = useParams<{ lawyerId: string }>();
  const [profile, setProfile] = useState<LawyerProfile | null>(null);

  useEffect(() => {
    import(`./team/${lawyerId}`).then((mod) => {
      setProfile(mod[`${lawyerId}Profile`]);
    });
  }, [lawyerId]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  // Render the profile data
  return (
    <div>
      <h1>{profile.name}</h1>
      {/* Render other profile data */}
    </div>
  );
};

export default AbogadoProfile;
