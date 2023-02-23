import React from 'react'

type ButtonStyleProps = {
    btnStyle : React.CSSProperties;
};

const ButtonStyle = (props: ButtonStyleProps) => {
  return (
    <>
    <h2>hello</h2>
    <div style={props.btnStyle}>ButtonStyle</div>

    </>
  )
}

export default ButtonStyle