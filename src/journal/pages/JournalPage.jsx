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
    </JournalLayout>
  )
}
