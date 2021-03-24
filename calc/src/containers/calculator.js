import {Component} from 'react';
import {Button} from '../components/button';
import Display from '../components/display';



class Calculator extends Component{

    initialState = {firstValue:0, secondValue:0, operator:1, op:0}
    
    constructor(props){
        super(props);
        this.state = this.initialState
    }

    putValue = (value) => {
        const lastValue = this.state.operator === 1 ? this.state.firstValue : this.state.secondValue;
        switch (this.state.operator){
            case 1:
                this.setState({firstValue:(lastValue*10)+value});
                break;
            case 2: this.setState({secondValue:(lastValue*10)+value});
                break;
        }
    }

    pickOperation = (op) => {
        if (op ===5)
            this.setState({operator:3, op})
        else
            this.setState({operator:2, op})
        
    }

    execOperation = () => {
        this.setState({operator:3})
    }

    clear = () => {
        this.setState(this.initialState);
    }

    getValue = () => {
        const {firstValue, secondValue, op, operator} = this.state
        switch(operator){
            case 1 :
                return firstValue;
            case 2 :
                return secondValue;
            case 3:
                if (op === 1)
                    return (firstValue + secondValue);
                else if (op === 2)
                    return (firstValue - secondValue);
                else if (op === 3)
                    return (firstValue * secondValue);
                else if ( op === 4)
                    if (secondValue === 0)
                        return 'ERROR'
                    else
                        return (firstValue / secondValue);
                else
                    return (firstValue ** 2 )
            }
    }

    render(){
        const {operator} = this.state;
        return(
            <div className='calculator'>
                <div>
                    <Display value={this.getValue()} error={this.getValue() === 'ERROR'}/>
                </div>
                <div className='buttonsConteiner'>
                    <div className='buttonsNumbers'>
                        <Button display={'1'} onClick={() => this.putValue(1)} disabled={operator===3}/>
                        <Button display={'2'} onClick={() => this.putValue(2)} disabled={operator===3}/>
                        <Button display={'3'} onClick={() => this.putValue(3)} disabled={operator===3}/>
                        <Button display={'4'} onClick={() => this.putValue(4)} disabled={operator===3}/>
                        <Button display={'5'} onClick={() => this.putValue(5)} disabled={operator===3}/>
                        <Button display={'6'} onClick={() => this.putValue(6)} disabled={operator===3}/>
                        <Button display={'7'} onClick={() => this.putValue(7)} disabled={operator===3}/>
                        <Button display={'8'} onClick={() => this.putValue(8)} disabled={operator===3}/>
                        <Button display={'9'} onClick={() => this.putValue(9)} disabled={operator===3}/>
                        <Button display={'C'} onClick={() => this.clear()}/>
                        <Button display={'0'} onClick={() => this.putValue(0)} disabled={operator===3}/>
                        <Button display={'x²'} onClick={() => this.pickOperation(5)} disabled={operator!==1}/>
                    </div>
                    <div className='buttonsOperators'>
                        <Button display={'+'} onClick={() => this.pickOperation(1)} disabled={operator!==1}/>
                        <Button display={'-'} onClick={() => this.pickOperation(2)} disabled={operator!==1}/>
                        <Button display={'*'} onClick={() => this.pickOperation(3)} disabled={operator!==1}/>
                        <Button display={'/'} onClick={() => this.pickOperation(4)} disabled={operator!==1}/>
                        <Button display={'='} onClick={() => this.execOperation()} disabled={operator===1}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;