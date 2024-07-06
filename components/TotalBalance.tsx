import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup';
import Animated from './Animated';
import { Doughnut } from 'react-chartjs-2';
import DoughnutChart from './DoughnutChart';

const TotalBalance = ({accounts = [],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>

            <DoughnutChart 
            accounts = {accounts}
            />
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>Bank Accounts: {totalBanks} </h2>
        
        <div className='flex flex-col gap-2'>
            <div className='total-balance-label'>
                Total Current Balance
            </div>
            <div className='total-balance-amount flex-center'>
                {/* {formatAmount(totalCurrentBalance)} */}
                <Animated 
                amount = { totalCurrentBalance}
                />
            </div>
        </div>
        </div>
    </section>
  )
}

export default TotalBalance