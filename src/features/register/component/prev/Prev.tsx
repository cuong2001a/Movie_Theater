import React from "react"

const Prev: React.FC = (props: any) => {
  const styles = {
    position: "absolute",
    width: "40px",
    height: "100px",
    cusor: "pointer",
    color: "green",
    top: "70%",
    left: "3px",
    zIndex: 100,
  }
  const {className, style, onClick} = props
  return <div className={className} style={{...style, ...styles}} onClick={onClick} />
}

export default Prev
