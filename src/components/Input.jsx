export function Input({valueInvest,onChangeInvestment}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initial">Initial Investment</label>
                    <input type="number" name="initial" id="initial" value={valueInvest.initial} onChange={(event)=>{
                        onChangeInvestment("initial",+event.target.value)
                    }}/>
                </div>
                <div>
                    <label htmlFor="annual">Annual Investment</label>
                    <input type="number" id="annual" name="annual" step="100" value={valueInvest.annual}  onChange={(event)=>{
                        onChangeInvestment("annual",+event.target.value)
                    }}/>
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="expected">Expected return</label>
                    <input type="number" name="expected" id="expected" step="100" value={valueInvest.expected}  onChange={(event)=>{
                        onChangeInvestment("expected",+event.target.value)
                    }}/>
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration" name="duration" step="100" value={valueInvest.duration}  onChange={(event)=>{
                        onChangeInvestment("duration",+event.target.value)
                    }}/>
                </div>
            </div>
        </div>
    )
}