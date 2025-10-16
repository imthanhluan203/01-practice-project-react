export function Input() {
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initial">Initial Investment</label>
                    <input type="number" name="initial" id="initial" />
                </div>
                <div>
                    <label htmlFor="annual">Annual Investment</label>
                    <input type="number" id="annual" name="annual" step="100" />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="expected">Expected return</label>
                    <input type="number" name="expected" id="expected" />
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration" name="duration" step="100" />
                </div>
            </div>
        </div>
    )
}