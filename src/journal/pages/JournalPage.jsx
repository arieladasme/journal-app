import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../view'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*  <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse porro excepturi voluptatum
        molestiae. Eius minima enim expedita, voluptates repellendus rerum tempora voluptate ut quae
        consequatur incidunt nam quia vitae saepe!
      </Typography> */}
      {/*  <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
