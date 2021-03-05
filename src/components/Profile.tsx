import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/117723570_2817932111771514_330855916471445432_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeFmQw8aVxwqPnRVdNrkwHaPEcSLK-vmktwRxIsr6-aS3Ff5IZNXv7uSEAqGRE6of6On_YZ2VYrwFLvFIk3gejrY&_nc_ohc=bAEx19XBgJUAX8FyslV&_nc_ht=scontent.fsjk2-1.fna&oh=884c3a6e1ef5d46dc08c4e4c2c9b82fe&oe=60669939" alt="Junior Andrade"/>
    
      <div>
        <strong>Júnior Andrade</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level {level}
          </p>
      </div>

    </div>
  );
}