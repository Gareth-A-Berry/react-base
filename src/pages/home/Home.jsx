import React from 'react'
import styles from './Home.scss';
import Typography from '@components/Typography';
import Button from '@components/Button';
import { useHistory } from 'react-router';
import { paths } from '@routes/index';

const HomePage = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push(paths.example)
  }

  return (
    <div className={styles['home-page']}>
      <Typography>
                Example Home Page
      </Typography>
      <Button
        onClick={handleClick}
      >
          Go to example page
      </Button>
    </div>
  )
}

export default HomePage
