
const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div>
      <div>Progress: {progress.toFixed()}%</div>
    </div>
  )
}

export default ProgressBar