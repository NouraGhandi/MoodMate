import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AnalysisIcon = ({color}: {color?: string}) => (
    <Svg
    fill={color}
    height="30"
    width="30"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    
  >
    <Path d="M15 5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2s2-.897 2-2V7c0-1.103-.897-2-2-2Zm1 17a1.001 1.001 0 0 1-2 0V7a1.001 1.001 0 0 1 2 0v15ZM9 11c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2s2-.897 2-2v-9c0-1.103-.897-2-2-2Zm1 11a1.001 1.001 0 0 1-2 0v-9a1.001 1.001 0 0 1 2 0v9Zm-7-5c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2s2-.897 2-2v-3c0-1.103-.897-2-2-2Zm1 5a1.001 1.001 0 0 1-2 0v-3a1.001 1.001 0 0 1 2 0v3Z" />
  </Svg>
)
export default AnalysisIcon
