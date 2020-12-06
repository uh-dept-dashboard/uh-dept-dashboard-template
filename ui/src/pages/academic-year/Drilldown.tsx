import React from "react";
import {Button, Modal} from "semantic-ui-react";

interface DrilldownProps {
  name: string
  description: string
}

const Drilldown: React.FunctionComponent<DrilldownProps> = ({name, description}) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}
           trigger={<Button size='tiny' basic>{name}</Button>}>
      <Modal.Header>If Drilldowns were implemented...</Modal.Header>
      <Modal.Content>
        <Modal.Description>...then clicking this button would have taken you to a page with a detailed analysis of {description}.</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button content="Dismiss" onClick={() => setOpen(false)} positive/>
      </Modal.Actions>
    </Modal>
  )
}

export default Drilldown;
