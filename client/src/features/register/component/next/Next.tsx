import React from "react"

const Next = (props: any) => {
  const styles = {
    position: "absolute",
    width: "40px",
    height: "100px",
    cusor: "pointer",
    color: "green",
    top: "70%",
    right: "3px",
    zIndex: 100,
    textAlign: "end",
  }
  const {className, style, onClick} = props
  return <div className={className} style={{...style, ...styles}} onClick={onClick} />
}

export default Next
