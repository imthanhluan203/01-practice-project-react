import { calculateInvestmentResults,formatter } from "../util/investment"
export function Result({valueInvest}){
    const annualData = calculateInvestmentResults({
        initialInvestment:valueInvest.initial,
        annualInvestment:valueInvest.annual,
        expectedReturn:valueInvest.expected,
        duration:valueInvest.duration,
    })
    console.log(annualData)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(years)</th>
                    <th>Total interest</th>
                    <th>Interest capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData.map(({year,interest,valueEndOfYear,annualInvestment,interstedCapital,total_interst})=>{
                    return (
                        <tr key={year}>
                            <th>{year}</th>
                            <th>{formatter.format(valueEndOfYear)}</th>
                            <th>{formatter.format(interest)}</th>
                            <th>{formatter.format(total_interst)}</th>
                            <th>{formatter.format(interstedCapital)}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}