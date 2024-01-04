import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const LawyerProfilePage = () => {
  const router = useRouter();
  const { abogadoId } = router.query;
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (abogadoId) {
      import(`/abogados/${abogadoId}`).then((module) => {
        setProfileData(module.default);
      });
    }
  }, [abogadoId]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  // Render the lawyer's profile
  return (
    <div>
      {/* Render the profile data here */}
    </div>
  );
};

export default LawyerProfilePage;
