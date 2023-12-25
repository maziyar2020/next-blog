import { motion } from 'framer-motion'

const ProgressBar = ({ value, duration }) => {

    return (
        <div className="flex flex-row items-center">
            <div className="progress flex items-stretch justify-start overflow-hidden">
                <motion.div
                    className="progress-bar"
                    animate={{
                        width: `${value}%`
                    }}
                    transition={{
                        duration
                    }}
                />
            </div>

        </div>
    )
}

export default ProgressBar
