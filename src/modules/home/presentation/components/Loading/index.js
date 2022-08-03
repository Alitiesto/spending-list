import React from 'react';
import loading from './Spin.gif'
import styles from './index.module.scss'

const Loading = () => {
    return (
        <div className={styles.loading_wrapper}>
            <img src={loading} alt="loading" />
        </div>
    );
};

export default Loading;