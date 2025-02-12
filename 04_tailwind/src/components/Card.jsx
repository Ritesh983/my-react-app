import React from 'react'
function Card({flower}) {
  return (
    <>
       <div className="flex flex-col rounded-xl  p-4 shadow-xl bg-green-100"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          //background: ' #ffffff0d',
          width: '250px'
        }}
      >
        <div>
          <img
            src={flower.source}
            alt="nft-gif"
            width="200"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold flex justify-between ">{flower.name}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>{flower.id}</p>
            <p>{flower.price}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
