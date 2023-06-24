"use client"
import React, {useContext, useState, useEffect} from 'react'
import styles from './body2.module.css'
import Image from 'next/image'
import Link from 'next/link'
import GrowthImage from 'public/growth3.svg'
import { database } from '@/app/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Body2 = () => {
  const collectionRef = collection(database, "data");

  const [data, setdata] = useState([{cities:0,dataaccuracy:0,investors:0, datapoints: 0}]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        const fetchedProperties = [];
        querySnapshot.forEach((doc) => {
          fetchedProperties.push({ id: doc.id, ...doc.data() });
        });
        setdata(fetchedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // console.log(data[0].investors);
  return (
    <>
    <div className={styles.body2}>
        <div className={styles.left} >
            <h1>Making real estate <br /> investments
Accessible</h1>
<p >12-18% returns <br />
starting from only ₹5,000</p>
<Link href="/properties">

<button >Explore Opportunities</button>
</Link>
        </div>
        <div className={styles.right} >
            <Image src={GrowthImage}  width={600} alt='photo' height={600} />
        </div>
    </div>
    <div id={styles.marketPoints}>
        <div className={styles.marketsubDiv}>
          <div className="pointDiv">
            <h1>{data[0].datapoints}</h1>
            <p>Data Points</p>
          </div>
          <div className="pointDiv">
            <h1>{data[0].cities}</h1>
            <p>Cities</p>
          </div>
        </div>
        <div className={styles.marketsubDiv}>
          
         <div className="pointDiv">
            <h1>{data[0].dataaccuracy}</h1>
            <p>Data Accuracy</p>
          </div>
          <div className="pointDiv">
            <h1>{data[0].investors}</h1>
            <p>Investors</p>
          </div>
        </div>
        </div>
    </>
  )
}

export default Body2