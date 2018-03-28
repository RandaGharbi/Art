import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class Modals extends React.Component{
  state = { modalOpen: false }
  
    handleOpen = () => this.setState({ modalOpen: true })
  
    handleClose = () => this.setState({ modalOpen: false })
  render(){
    return(
      <Modal
      className='Modal'
      trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
      open={this.state.modalOpen}
      onClose={this.handleClose}
      basic
      size='small'
    >
      <Header icon='browser' content='Cookies policy' />
      <Modal.Content>
        <h3>This website uses cookies to ensure the best user experience.</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button  className='picto' onClick={this.handleClose} inverted>
          <Icon name='checkmark' />
        </Button>
      </Modal.Actions>
    </Modal>
)
  }
}

export default Modals;

