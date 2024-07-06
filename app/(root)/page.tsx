import Animated from "@/components/Animated";
import HeaderBox from "@/components/HeaderBox";
import TotalBalance from "@/components/TotalBalance";


export default function Home() {
const LoggedIn = {FirstName : "Rujul"};

  return (
    <section className='home'>
        <div className='home-content'>
            <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user = {LoggedIn?.FirstName || "Guest"}
            subtext="Manage all your transactions and banks with ease"

            />
            </header>

            <TotalBalance 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {4500}
            />
        </div>
        </section>
  )
}
