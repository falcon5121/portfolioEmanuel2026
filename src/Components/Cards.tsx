interface textprops {
    info: string
}

const Cards = ( {info}:textprops ) => {
    return (
        <>
        <div className="p-8 rounded-3xl min-w-72 max-w-96 min-h-80 max-h-[22rem] bg-red-500">
            <div className=" w-full h-[17rem] bg-gray-500"/>
            <h3 className="text-amber-400 text-2xl font-medium">{ info }</h3>
        </div>
        </>
    )
}

export default Cards