const Calculator = () => {

    const [Calc, setCalc] = React.useState({
        shadowCurrent: 0,
        current: 0,
        total: 0,
        isInit: true,
        lastOperator: ""
    });
    
    // Clicking Numbers
    function handelNumber(value){
        if(Calc.isInit)
            setCalc({total: Calc.total, current: value, shadowCurrent: value, isInit: false, lastOperator: Calc.lastOperator})
        else
            setCalc({total: Calc.total, current: Calc.current + value, shadowCurrent: Calc.current + value, lastOperator: Calc.lastOperator});

        // console.log(Calc.total);
    }

    // Interact With Operators
    function handelOperator(value){
        if(!Calc.shadowCurrent){
            setCalc({
                total: Calc.total,
                current: Calc.current,
                lastOperator: value,
                isInit: Calc.isInit
            });
            return;
        }

        if(Calc.lastOperator){
            let tempTotal = eval(`${Calc.total} ${Calc.lastOperator} ${Calc.current}`);
            // console.log(`tempTotal: ${tempTotal}`);
            setCalc({total: tempTotal, current: tempTotal, lastOperator: value, isInit: true})
        }else{
            setCalc({total: Calc.current, current: Calc.current, lastOperator: value, isInit: true})
        }
    }

    return (
        <div className='Calculator'>

            <div className="Display">{Calc.current}</div>
            <CalcButton value="7" onClick={handelNumber} />
            <CalcButton value="8" onClick={handelNumber} />
            <CalcButton value="9" onClick={handelNumber} />
            <CalcButton className="operator" onClick={handelOperator} value="/" />

            <CalcButton value="4" onClick={handelNumber} />
            <CalcButton value="5" onClick={handelNumber} />
            <CalcButton value="6" onClick={handelNumber} />
            <CalcButton className="operator" onClick={handelOperator} value="*" />

            <CalcButton value="1" onClick={handelNumber} />
            <CalcButton value="2" onClick={handelNumber} />
            <CalcButton value="3" onClick={handelNumber} />
            <CalcButton className="operator" onClick={handelOperator} value="-" />

            <CalcButton value="C" onClick={() =>{
                setCalc({current: 0, total: 0, isInit: true})
            }}/>
            <CalcButton value="0" onClick={handelNumber} />
            <CalcButton value="=" onClick={() =>{
                // debugger;
                let tempTotal = eval(`${Calc.total} ${Calc.lastOperator} ${Calc.current}`);
                // console.log(`tempTotal: ${tempTotal}`);
                setCalc({total: tempTotal, current: tempTotal, isInit: true})
            }}/>
            <CalcButton className="operator" onClick={handelOperator} value="+" />
        </div>
    )
}

const CalcButton = (props) => {
    return (
        <button className={props.className} onClick={() => props.onClick(props.value)} >{props.value}</button>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className="app-Calc"><Calculator /></div>);