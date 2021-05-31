import React from 'react'
import styles from './Example.scss';
import Typography from '@components/Typography';
import { useHistory } from 'react-router';
import { paths } from '@routes/index';
import Button from '@components/Button';
import ExampleComponent from '@components/Example';

const ExamplePage = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push(paths.home)
  }

  return (
    <div className={styles['example-page']}>
      <Typography>
                Example Page
      </Typography>
      <Button
        onClick={handleClick}
      >
            Go to home page
      </Button>
      <ExampleComponent exampleProp={'Example Prop'}/>
    </div>
  )
}

export default ExamplePage
