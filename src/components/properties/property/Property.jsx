import React,{useContext} from 'react'
import styles from "./property.module.css";
import Image from 'next/image';
import Link from 'next/link';
import propertyContext from '@/context/propertyContext';
import Cookies from 'js-cookie';
import signinContext from '@/context/signin/signinContext';

const Property = (props) => {
  const user = useContext(signinContext);
  const page = useContext(propertyContext);
  // const handleClick = () => {
  //   localStorage.setItem('propertyID', props.id);
  //   Cookies.set('propertyID', props.id);
  // }
  // console.log(page.id);
  return (
    <Link href="/property" onClick={(e)=>{
      if(user.login == false){
        e.preventDefault();
        alert("please sign in first");
      }
      else{
        Cookies.set('propertyID', props.id);
      }
    }}>
      <div className={styles.contain}>

   <div className={styles.container}>
    <div style={{ backgroundImage: `url(${props.image})` }} className={styles.image}>
      <p>{props.location} <br /> {props.area}</p>

    </div>
    <p className={styles.unit}>1 Unit</p>
    <hr className={styles.hr} />
    <div className={styles.main}>
      <h3>Min. investment: ₹{props.investment}</h3>
      <p>Funded: ₹{props.funded} (100%)</p>
      <hr className={styles.hrr} />
      <h5>GENERATING RETURNS</h5>
      <hr className={styles.hr} />
      <div className={styles.iteminvest}>
        <div className={styles.investleft}>
          
            <span >Investors <br />  <span style={{fontWeight: "bold"}} >{props.investors}</span></span>
        </div>
        <div className={styles.investright}>
        <span >Returns (CAGR)
 <br /> <span style={{fontWeight: "bold"}} >{props.returns}%</span></span>

        </div>
      </div>
    </div>
   </div>
      </div>
   </Link>
  )
}

export default Property
