import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ITeamMemberProps } from 'src/types/team';

import TravelTeamItem from './travel-team-item';

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function TravelTeam({ members }: Props) {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'text.primary',  // Adapts to theme mode
            fontFamily: (theme) => theme.typography.fontTertiaryFamily,
            fontWeight: 400,

          }}
        >


          NUESTRO EQUIPO</Typography>

        <Typography
          variant="body1"
          sx={{ color: 'text.secondary' ,
          fontFamily: (theme) => theme.typography.fontTertiaryFamily,

            fontSize: '22px',

          }}>
          Reconocidos por nuestra amplia trayectoria y habilidades, nos enfocamos en el servicio al cliente, sustentados en una cultura de colaboración y compromiso genuino.
        </Typography>
      </Stack>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {members.map((member) => (
          <TravelTeamItem key={member.id} member={member} />
        ))}
      </Box>
    </Container>
  );
}
