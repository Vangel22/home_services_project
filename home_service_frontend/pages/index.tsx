import type { NextPage } from 'next'
import { Button } from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </>
  )
}

export default Home
