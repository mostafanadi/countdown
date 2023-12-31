import { sizeEnum, type CircleProps, variantEnum } from "../../../types"


const Circle = ({ strokeDashoffset, title, value, size = "normal", variant = "primary" }: CircleProps) => {
  const perimeter = 2 * Math.PI * sizeEnum[size]
  const width = 2 * sizeEnum[size]
  const height = 2 * sizeEnum[size]


  return (
    <div className='circle' style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      // width: width + 8,
      // height: height + 8,
      position: 'relative'
    }} >
      <svg style={{ width: width + 8, height: height + 8, }} >
        <circle style={{
          strokeDasharray: perimeter,
        }} cx={sizeEnum[size]} cy={sizeEnum[size]} r={sizeEnum[size]} />
        <circle mask="url(#circleMask)"
          style={{
            strokeDashoffset, strokeDasharray: perimeter, stroke: variantEnum[variant]
          }} cx={sizeEnum[size]} cy={sizeEnum[size]} r={sizeEnum[size]} />
      </svg>
      <div style={{ fontSize: sizeEnum[size] / 3, position: 'absolute', right: (width + 8) / 2, top: (height + 8) / 2 }} className='digits' >{value}</div>
      <div style={{ textAlign: 'center', fontSize: sizeEnum[size] / 3 }} className='chars'>{title}</div>
    </div>
  )
}
export default Circle