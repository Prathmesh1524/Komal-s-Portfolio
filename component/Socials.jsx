import Link from "next/link"
import {FaLinkedin,FaTwitter,FaEnvelope} from "react-icons/fa"


 const Social=[
        {icon:<FaLinkedin/> ,path:"https://www.linkedin.com/in/komal-gat-667773251"},
        {icon: <FaEnvelope/> ,path:"komalgat1499@gmail.com"}
       
    ]
const Socials = ({containerStyle,iconStyle}) => {
  return (
   <div className={containerStyle}>
        {Social.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyle}>
                {item.icon}
            </Link>
        })}
     </div>
  )
}

export default Socials
