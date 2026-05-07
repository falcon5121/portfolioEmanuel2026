interface cardsData {
    props: {
        id: number,
        title: string,
        description: string,
        img: string,
    }
  
}


const Cards = ( {props}:cardsData ) => {
    console.log(props)
    return (
        <>
        <div className="p-8 rounded-3xl min-w-72 max-w-96 min-h-80 max-h-[22rem] bg-[#3A758B]">
            <div className=" w-full h-[17rem] bg-white"/>
            <h3 className="text-colored-text text-2xl font-primary font-medium">{props.title}</h3>
        </div>
        </>
    )
}

export default Cards