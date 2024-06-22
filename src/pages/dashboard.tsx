import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import userImg from "./../assets/images/profile.png"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"
const Dashboard = () => {
  return (
    <div className="adminContainer">
        {/**Side bar */}
        <AdminSidebar/>
        {/**main */}
        <main className="dashboard">
            <div className="bar">
                <BsSearch/>
                <input type="text" placeholder="search for data,users,docs "/>
                <FaRegBell/>
                <img src={userImg} alt= "Users"/>
            </div>

            <section className="widgetcontainer">
                <WidgetItem 
                    percent={40} 
                    amount={true} 
                    value={3400} 
                    heading="revenue" 
                    color="rgb(0,115,225)"
                />

                <WidgetItem 
                    percent={-80} 
                    amount={false} 
                    value={400} 
                    heading="Users" 
                    color="rgb(0,198,202)"
                />

                <WidgetItem 
                    percent={90} 
                    amount={false} 
                    value={23000}
                    heading="transactions" 
                    color="rgb(255,196,0)"
                />

                <WidgetItem 
                    percent={30} 
                    amount={false} 
                    value={1000} 
                    heading="products" 
                    color="rgb(76 0 255)"
                />

            </section>
        </main>

        
    </div>
  )
}

interface WidgetItemsProps{
    heading:string;
    value:number;
    percent:number;
    color:string;
    amount?:boolean;
}

const WidgetItem =({
    heading,
    value,
    percent,
    color,
    amount }:WidgetItemsProps)=><article className="widget">

        <div className="widgetInfo">
            <p>{heading}</p>
            <h4>{amount?`$${value}`:value}</h4>
            {
                percent>0?(
                <span className="green">
                    <HiTrendingUp/> +{percent}%
                </span>):
                <span className="red">
                    <HiTrendingDown/> +{percent}%
                </span>
            }
        </div>

        <div className="widgetCircle" 
                style={{
                    background: `conic-gradient(
                    ${color} ${(Math.abs(percent) / 100) * 360}deg,
                    rgb(255, 255, 255) 0
                  )`,
                  }}>
            <span style={{color}}>{percent}%</span>
        </div>

</article>

export default Dashboard