import React, { Component } from 'react'
import { Container, Sidebar, Segment, Menu, Grid,
         Icon, Dropdown, Accordion, Tab, Modal,
         Button, Header, Form, Feed } from 'semantic-ui-react'

import TableComponent from './components/table';


class Dashboard extends Component {
  componentDidMount(){
    var someElement = document.getElementById("navBarView");
    var arr = someElement.classList;
    arr.value += ' disp-none';
  }

  componentWillUnmount(){
    var someElement = document.getElementById("navBarView");
    var arr = someElement.classList;
    arr.value = "navbar navbar-default navbar-static-top";
  }

  state = { activeItem: 'scene1',
            currentView: 'one',
            modalopen: false,
            feedopen: false,
            visible: false,
            viewone: false,
            viewtwo: false,
            viewthree: false,
            regions: [{ key: 'apac', text: 'APAC', value: 'APAC' },
                      { key: 'ces', text: 'CES', value: 'CES' },
                      { key: 'eur', text: 'EUR', value: 'EUR' },
                      { key: 'epam', text: 'EPAM', value: 'EPAM' },],
            areas: [{ key: 'ar1', text: 'Area 1', value: 'area_1' },
            { key: 'ar2', text: 'Area 2', value: 'area_2' },
            { key: 'ar3', text: 'Area 3', value: 'area_3' },
            { key: 'ar4', text: 'Area 4', value: 'area_4' },
            { key: 'ar5', text: 'Area 5', value: 'area_5' },
            { key: 'ar6', text: 'Area 6', value: 'area_6' }, ]
          }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name }) 
  }   

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  changeview = (event, data) => {
    let newView = '';
    if(data.children === "View One"){
      newView = 'one';
    } else if(data.children === "View Two"){
      newView = 'two';
    } else if(data.children === "View Three"){
      newView = 'three';
    } else if(data.children === "View Four"){
      newView = 'four';
    } else if(data.children === "View Five"){
      newView = 'five';
    }
    this.setState({ currentView : newView })
  }

  close = () => this.setState({ modalopen: false })
  
  showPreviewWin = () => {
    this.setState({ dimmer: 'blurring', modalopen: true })
  }

  showPreviewlogs = () => {
    this.setState({ dimmer: 'blurring', feedopen: true })
  }

  feedclose = () => this.setState({ feedopen: false })

  render() {
    const { visible } = this.state;
    const { activeItem } = this.state;
    const { currentView } = this.state;
    const { modalopen, feedopen, dimmer } = this.state

    const preivewData = [
      {id: '1', name: 'Scenario one'},
      {id: '3', name: 'Scenario three'},
      {id: '4', name: 'Scenario four'},
      {id: '7', name: 'Scenario seven'},
      {id: '8', name: 'Scenario eight'},
    ]
    const panes = [
      { menuItem: 'Scenario 1', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 2', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 3', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 4', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 5', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 6', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 7', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 8', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
    ]

    const panesone = [
      { menuItem: 'Scenario 1', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 2', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 3', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
    ]

    const panestwo = [
      { menuItem: 'Scenario 4', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 5', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 6', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
    ]

    const panesthree = [
      { menuItem: 'Scenario 7', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
      { menuItem: 'Scenario 8', render: () => <Tab.Pane><TableComponent /></Tab.Pane> },
    ]

   const panesfour = [
      { menuItem: 'Scenario Grouping 1', render: () => <Tab panes={panesone} />},
      { menuItem: 'Scenario Grouping 2', render: () => <Tab panes={panestwo} />},
      { menuItem: 'Scenario Grouping 3', render: () => <Tab panes={panesthree} /> },
    ]


    const ShowLogs = () => (
      <Modal basic size='small' dimmer={dimmer} open={ feedopen } onClose={this.feedclose}>
        <Header icon='archive' content='List Of User Action(s) Performed' />
        <Modal.Content>
          <ShowFeeds />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.feedclose} color='green' inverted>
            <Icon name='checkmark' /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
    const ShowFeeds = () => (
      <Feed>
        <Feed.Event
          icon='pencil'
          date='Today'
          summary="Scenario one - has beed updated with two new rows."
        />

        <Feed.Event>
          <Feed.Label icon='pencil' />
          <Feed.Content
            date='Today'
            summary="Scenario three - has new updated criterias."
          />
        </Feed.Event>

        <Feed.Event>
          <Feed.Label icon='pencil' />
          <Feed.Content
            date='Today'
            summary="Scenario five - has new updated criterias."
          />
        </Feed.Event>

        <Feed.Event>
          <Feed.Label icon='pencil' />
          <Feed.Content
            date='Today'
            summary="Scenario seven - has new updated criterias <br/> New Rows are added."
          />
        </Feed.Event>
      </Feed>
    )

    const CustHeader = () => (
      <Segment color='blue' clearing vertical>
        <Grid>
          <Grid.Column floated='left' width={5}>
            <Header as='h3' floated='left'>
              <Header.Content>
                My Scenario App
                <Header.Subheader>
                  Create My Scenario
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
              <Grid columns='one'>
                <Grid.Column floated='right' textAlign='right'>
                  <Button onClick={this.showPreviewWin} content= "Preview & Save" primary ref={this.handleRef} />
                  <Button onClick={this.showPreviewlogs} content="User Action(s)"/>
                  <ViewOptions />
                </Grid.Column>
              </Grid>
          </Grid.Column>
        </Grid>
      </Segment>
    )

    const SubScenarioHeader = () => (
      <Segment clearing vertical> 
        <Header as='h4' floated='left'>
          <Icon onClick={this.toggleVisibility} name='content' size='small' className='show-pointer'/>
        </Header>
        <Header as='h5' floated='left' textAlign='left'>
          <Header.Content>
              Scenario - {activeItem}
            </Header.Content>
        </Header>
        <Header as='h4' floated='right'>
          <Icon name='info circle' size='small' className='show-pointer'/>
        </Header>
      </Segment>
    )

    const ViewOptions = () => (
        <Dropdown icon ="television" text='Change view' floating labeled button  pointing className='icon' closeOnBlur>
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.changeview}>View One</Dropdown.Item>
            <Dropdown.Item onClick={this.changeview}>View Two</Dropdown.Item>
            <Dropdown.Item onClick={this.changeview}>View Three</Dropdown.Item>
            <Dropdown.Item onClick={this.changeview}>View Four</Dropdown.Item>
            <Dropdown.Item onClick={this.changeview}>View Five</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    )

    const FilterOptions = () => (
      <Segment padded color='blue'>
        <Form>
          <Form.Group widths='equal'>
            <Form.Select label='Select Region' options={this.state.regions} placeholder='Choose a regions' width={8}/>
            <Form.Input label='Some input one' placeholder='Any input to configure' width={8}/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Select label='Select Area' options={this.state.areas} placeholder='Choose a area'  width={8}/> 
            <Form.Input label='Some input two' placeholder='Any input to configure' width={8}/>
          </Form.Group>
        </Form>
      </Segment>
    )
    const ViewOne = () => (
      <Sidebar.Pushable as={Segment} className='staticHeight' color='blue'>
        <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Menu.Item name='scene1' active={activeItem === 'scene1'} onClick={this.handleItemClick}>
            Scenario 1
          </Menu.Item>
          <Menu.Item name='scene2' active={activeItem === 'scene2'} onClick={this.handleItemClick}>
            Scenario 2
          </Menu.Item>
          <Menu.Item name='scene3' active={activeItem === 'scene3'} onClick={this.handleItemClick}>
            Scenario 3
          </Menu.Item>
          <Menu.Item name='scene4' active={activeItem === 'scene4'} onClick={this.handleItemClick}>
            Scenario 4
          </Menu.Item>
              <Menu.Item name='scene5' active={activeItem === 'scene5'} onClick={this.handleItemClick}>
            Scenario 5
          </Menu.Item>
          <Menu.Item name='scene6' active={activeItem === 'scene6'} onClick={this.handleItemClick}>
            Scenario 6
          </Menu.Item>
          <Menu.Item name='scene7' active={activeItem === 'scene7'} onClick={this.handleItemClick}>
            Scenario 7
          </Menu.Item>
          <Menu.Item name='scene8' active={activeItem === 'scene8'} onClick={this.handleItemClick}>
            Scenario 8
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <SubScenarioHeader />
            <TableComponent />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )

    const ViewTwo = () => (
      <Accordion>
        <Accordion.Title>
          <Segment>
            <Header as="h3">
              <Header.Content>
                  <Icon name='dropdown' />
                  Scenario Grouping One
                </Header.Content>
            </Header>
          </Segment>
        </Accordion.Title>
        <Accordion.Content>
          <Tab panes={panesone} /> 
        </Accordion.Content>
        <Accordion.Title>
          <Segment>
            <Header as="h3">
              <Header.Content>
                  <Icon name='dropdown' />
                  Scenario Grouping Two
                </Header.Content>
            </Header>
          </Segment>
        </Accordion.Title>
        <Accordion.Content>
          <Tab panes={panestwo} /> 
        </Accordion.Content>
        <Accordion.Title>
          <Segment>
            <Header as="h3">
              <Header.Content>
                  <Icon name='dropdown' />
                  Scenario Grouping Three
                </Header.Content>
            </Header>
          </Segment>
        </Accordion.Title>
        <Accordion.Content>
          <Tab panes={panesthree} /> 
        </Accordion.Content>
      </Accordion>
    )

    const ViewThree = () => (
      <Tab menu={{ color: 'blue', secondary: true, pointing: true }}  panes={panes} />
    )

    const ViewFour = () => (
       <Tab menu={{ color: 'blue', pointing: true }} panes={panesfour} />
    )

    const ViewFive = () => (
        <Accordion>
            <Accordion.Title>
              <Segment>
                <Header as="h3">
                  <Header.Content>
                      <Icon name='dropdown' />
                      Scenario one
                    </Header.Content>
                </Header>
              </Segment>
            </Accordion.Title>
            <Accordion.Content>
              <TableComponent />
            </Accordion.Content>

            <Accordion.Title>
              <Segment>
                <Header as="h3">
                  <Header.Content>
                      <Icon name='dropdown' />
                      Scenario two
                    </Header.Content>
                </Header>
              </Segment>
            </Accordion.Title>
            <Accordion.Content>
              <TableComponent />
            </Accordion.Content>
            <Accordion.Title>
              <Segment>
                <Header as="h3">
                  <Header.Content>
                      <Icon name='dropdown' />
                      Scenario three
                    </Header.Content>
                </Header>
              </Segment>
            </Accordion.Title>
            <Accordion.Content>
              <TableComponent />
            </Accordion.Content>  
            <Accordion.Title>
              <Segment>
                <Header as="h3">
                  <Header.Content>
                      <Icon name='dropdown' />
                      Scenario four
                    </Header.Content>
                </Header>
              </Segment>
            </Accordion.Title>
            <Accordion.Content>
              <TableComponent />
            </Accordion.Content>  
            <Accordion.Title>
              <Segment>
                <Header as="h3">
                  <Header.Content>
                      <Icon name='dropdown' />
                      Scenario five
                    </Header.Content>
                </Header>
              </Segment>
            </Accordion.Title>
            <Accordion.Content>
              <TableComponent />
            </Accordion.Content>  
            <Accordion.Title>
              <Segment>
                <Header as="h3">
                  <Header.Content>
                      <Icon name='dropdown' />
                      Scenario six
                    </Header.Content>
                </Header>
              </Segment>
            </Accordion.Title>
            <Accordion.Content>
              <TableComponent />
            </Accordion.Content>  
            <Accordion.Title>
              <Segment>
                <Header as="h3">
                  <Header.Content>
                      <Icon name='dropdown' />
                      Scenario seven
                    </Header.Content>
                </Header>
              </Segment>
            </Accordion.Title>
            <Accordion.Content>
              <TableComponent />
            </Accordion.Content>  
            <Accordion.Title>
              <Segment>
                <Header as="h3">
                  <Header.Content>
                      <Icon name='dropdown' />
                      Scenario eight
                    </Header.Content>
                </Header>
              </Segment>
            </Accordion.Title>
            <Accordion.Content>
              <TableComponent />
            </Accordion.Content>      
        </Accordion>
    )

    const PreviewScenario = () => (
      <Modal dimmer={dimmer} open={ modalopen } onClose={this.close} className='modalheight'>
        <Modal.Header>Preview Edited Scenario(s) </Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            {preivewData.map((name) => {
              return (
                <Segment key={name.id}>
                  <Header as="h4">
                    <Header.Content>
                        {name.name}
                      </Header.Content>
                  </Header>
                  <TableComponent />
                </Segment>
              )
            }, this)}
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={this.close}>
                Cancel
            </Button>
            <Button primary onClick={this.close}>
                Save Scenario(s) <Icon name='right chevron' />
            </Button>
        </Modal.Actions>
      </Modal>
    )

    const ViewHolder = () => {
      if (currentView === "one"){
        return <ViewOne />
      } else if(currentView === "two"){
        return <ViewThree />
      } else if(currentView === "three"){
        return <ViewFive />
      } else if(currentView === "four"){
        return <ViewFour />
      } else if(currentView === "five"){
        return <ViewTwo />
      } 
    }

    return (
      <Container>
        <CustHeader />
        <FilterOptions />
        <ViewHolder />
        <PreviewScenario />
        <ShowLogs />
      </Container>
    )
  }
}

export default Dashboard

