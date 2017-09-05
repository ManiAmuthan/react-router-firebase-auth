import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
class DropDownComp extends Component {
    render(){
        let data = this.props.props;
        return (
        <div>
            <Input list='regions' placeholder='Choose Region...' />
            <datalist id='regions'>
                {data.map((reg) => {
                    return (
                        <option value={reg} key={reg}/>
                    )
                }, this)}
            </datalist>
        </div>
        )
    }
}
export default DropDownComp




                    