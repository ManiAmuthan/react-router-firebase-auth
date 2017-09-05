import React, { Component } from 'react'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'
class PreviewScenario extends Component {
    state = this.props;
    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => {
        console.log("Close called" , this.state);
    }
    mapStateToProps(){
        console.log("Map State to props 1" );
    }

    render(){
        const {dimmer, open } = this.state;
        return (
            <Modal dimmer={dimmer} open={ open } onClose={this.close} closeIcon='close'>
                <Modal.Header>Profile Picture</Modal.Header>
                <Modal.Content scrolling>
                
                    <Modal.Description>
                        <Header>Modal Header</Header>
                        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
export default PreviewScenario




                    