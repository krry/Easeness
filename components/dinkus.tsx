import styles from './dinkus.module.css'

const Dinkus = (props) => {
  const {text} = props
  return <hr className={`mt-32 mb-24 rounded-full h-6 ${styles.dinkus}`} data-content={text} />
}

export default Dinkus
