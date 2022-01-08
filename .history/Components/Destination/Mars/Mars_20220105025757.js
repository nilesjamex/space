import React, {useState} from 'react';
import Image from "next/image";
import styles from './Mars.module.css'

const Mars = () => {
    const [steps, setSteps] = useState(1);

    const next = (e) => {
        e.preventDefault();
        setSteps(steps + 1);
    }
    const prev = (e) => {
        e.preventDefault();
        setSteps(steps - 1);
    }
    return (
        <div>
            Mars

  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!

  Avg. distance
  225 mil. km

  Est. travel time
  9 months
        </div>
    )
}

export default Mars
